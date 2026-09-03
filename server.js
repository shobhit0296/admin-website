const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const WWW_DIR = path.join(__dirname, 'www');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

let lastProxiedOrigin = 'https://allsitehub.site';
let ashCookie = 'ash_admin=1788465017993.c417dae93099de8c92816cda6f161d0a50135e51a937f9877d5152eab802b7b4';

function ensureAshAuth(callback) {
  const data = JSON.stringify({ password: 'shobhitallsitehubadmin8115591448' });
  const req = https.request('https://allsitehub.site/api/shobhitadmin/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
      'User-Agent': 'Mozilla/5.0'
    }
  }, res => {
    if (res.headers['set-cookie']) {
      ashCookie = res.headers['set-cookie'].join('; ');
    }
    callback();
  });
  req.on('error', () => callback());
  req.write(data);
  req.end();
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Live AllSiteHub Sites API
  if (parsedUrl.pathname === '/api/live/ash/sites') {
    const forward = () => {
      const options = {
        hostname: 'allsitehub.site',
        path: '/api/shobhitadmin/sites' + (parsedUrl.search || ''),
        method: req.method,
        headers: {
          ...req.headers,
          host: 'allsitehub.site',
          cookie: ashCookie
        }
      };
      const proxyReq = https.request(options, proxyRes => {
        if (proxyRes.statusCode === 401) {
          return ensureAshAuth(() => forward());
        }
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': proxyRes.headers['content-type'] || 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        proxyRes.pipe(res);
      });
      proxyReq.on('error', err => {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      });
      req.pipe(proxyReq);
    };
    forward();
    return;
  }

  // Live AllSiteHub Requests API
  if (parsedUrl.pathname === '/api/live/ash/requests') {
    const forward = () => {
      const options = {
        hostname: 'allsitehub.site',
        path: '/api/shobhitadmin/requests' + (parsedUrl.search || ''),
        method: req.method,
        headers: {
          ...req.headers,
          host: 'allsitehub.site',
          cookie: ashCookie
        }
      };
      const proxyReq = https.request(options, proxyRes => {
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': proxyRes.headers['content-type'] || 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        proxyRes.pipe(res);
      });
      proxyReq.on('error', err => {
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      });
      req.pipe(proxyReq);
    };
    forward();
    return;
  }

  // 1. In-App Proxy endpoint to bypass X-Frame-Options in local browser preview
  if (parsedUrl.pathname === '/api/proxy') {
    const targetUrl = parsedUrl.query.url;
    if (!targetUrl) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Missing url query param');
    }

    try {
      const parsedTarget = new URL(targetUrl);
      lastProxiedOrigin = parsedTarget.origin;
      const client = parsedTarget.protocol === 'https:' ? https : http;

      const proxyHeaders = {
        ...req.headers,
        host: parsedTarget.host,
        referer: parsedTarget.origin
      };

      // Auto-inject authenticated session cookie so live admin panel opens directly!
      if (parsedTarget.hostname.includes('allsitehub.site') && ashCookie) {
        proxyHeaders['cookie'] = ashCookie;
      }

      const proxyReq = client.request(targetUrl, {
        method: req.method,
        headers: proxyHeaders
      }, (proxyRes) => {
        // Intercept 301/302/307/308 redirects from Next.js (e.g. /shobhitadmin -> /shobhitadmin/login)
        if (proxyRes.statusCode >= 300 && proxyRes.statusCode < 400 && proxyRes.headers.location) {
          let loc = proxyRes.headers.location;
          if (loc.startsWith('/')) {
            loc = parsedTarget.origin + loc;
          }
          res.writeHead(302, {
            'Location': '/api/proxy?url=' + encodeURIComponent(loc),
            'Access-Control-Allow-Origin': '*'
          });
          return res.end();
        }

        // Strip X-Frame-Options and frame-ancestors so it embeds cleanly
        const headers = { ...proxyRes.headers };
        delete headers['x-frame-options'];
        delete headers['X-Frame-Options'];
        if (headers['content-security-policy']) {
          headers['content-security-policy'] = headers['content-security-policy'].replace(/frame-ancestors[^;]+;?/gi, '');
        }
        headers['access-control-allow-origin'] = '*';

        res.writeHead(proxyRes.statusCode, headers);
        proxyRes.pipe(res);
      });

      proxyReq.on('error', (err) => {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Proxy Error: ' + err.message);
      });

      req.pipe(proxyReq);
      return;
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('Invalid target URL: ' + err.message);
    }
  }

  // 2. Proxy Next.js assets & admin sub-resources (/_next/, /logos/, /api/shobhitadmin/)
  if ((parsedUrl.pathname.startsWith('/_next/') || parsedUrl.pathname.startsWith('/logos/') || parsedUrl.pathname.startsWith('/api/shobhitadmin/')) && lastProxiedOrigin) {
    try {
      const remoteUrl = lastProxiedOrigin + req.url;
      const parsedRemote = new URL(remoteUrl);
      const client = parsedRemote.protocol === 'https:' ? https : http;

      const proxyReq = client.request(remoteUrl, {
        method: req.method,
        headers: {
          ...req.headers,
          host: parsedRemote.host,
          referer: lastProxiedOrigin,
          cookie: ashCookie
        }
      }, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res);
      });

      proxyReq.on('error', () => {
        res.writeHead(404);
        res.end();
      });

      req.pipe(proxyReq);
      return;
    } catch (e) {}
  }

  // 3. Static file serving from www/
  let filePath = path.join(WWW_DIR, parsedUrl.pathname === '/' ? 'index.html' : parsedUrl.pathname);
  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // ONLY fallback to index.html if request has NO file extension (e.g. client router)
        if (!ext && (req.headers.accept || '').includes('text/html')) {
          fs.readFile(path.join(WWW_DIR, 'index.html'), (err2, content2) => {
            if (err2) {
              res.writeHead(404);
              res.end('404 Not Found');
            } else {
              res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-cache, no-store, must-revalidate'
              });
              res.end(content2);
            }
          });
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found: ' + parsedUrl.pathname);
        }
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Shobhit Admin Hub server running on http://localhost:${PORT}`);
});
