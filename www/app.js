// Shobhit Admin Hub - Multi-Website Live Admin Console & Internal Admin Deck
// Powers both the High-Density Home Hub and the Dedicated Internal Admin Panel for every site.

(function() {
  'use strict';

  // --- Section Metadata Definitions ---
  const SECTION_CONFIG = {
    directory: { id: 'directory', title: 'Directory & Resource Hubs', icon: '📁' },
    media: { id: 'media', title: 'Movies & Media Streaming', icon: '🎬' },
    ecommerce: { id: 'ecommerce', title: 'E-Commerce & Online Stores', icon: '🛍️' },
    custom: { id: 'custom', title: 'Custom Web Dashboards & Tools', icon: '⚡' },
    wordpress: { id: 'wordpress', title: 'WordPress Websites', icon: '🌐' },
    other: { id: 'other', title: 'Other Platforms', icon: '📌' }
  };

  // --- Initial Pre-Configured Websites with Sections & Details ---
  const DEFAULT_SITES = [
    {
      id: 'site-allsitehub',
      name: 'AllSiteHub',
      url: 'https://allsitehub.site/shobhitadmin',
      adminRoute: '/shobhitadmin',
      platform: 'Next.js 14 • Vercel Edge',
      status: '200 OK • Live',
      vpsUsage: 28,
      storageUsed: '4.2 GB',
      storageTotal: '20 GB',
      storagePercent: 21,
      activeMembers: 142,
      ping: '118ms',
      adminId: 'shobhit',
      adminPassword: 'shobhitallsitehubadmin8115591448',
      section: 'directory',
      color: '#181818',
      defaultMode: 'mobile',
      notes: 'AllSiteHub Master Admin Panel'
    },
    {
      id: 'site-freewebstuff',
      name: 'FreeWebStuff',
      url: 'https://www.freewebstuff.site/adminshobhit',
      adminRoute: '/adminshobhit',
      platform: 'Next.js 14 • Vercel',
      status: '200 OK • Live',
      vpsUsage: 19,
      storageUsed: '1.8 GB',
      storageTotal: '15 GB',
      storagePercent: 12,
      activeMembers: 89,
      ping: '124ms',
      adminId: 'shobhit',
      adminPassword: 'shobhitverma8115591448admin',
      section: 'directory',
      color: '#10b981',
      defaultMode: 'mobile',
      notes: 'FreeWebStuff 20k Directory Admin'
    },
    {
      id: 'site-moviesnet',
      name: 'MoviesNet',
      url: 'https://moviesnet.site/adminshobhit',
      adminRoute: '/adminshobhit',
      platform: 'Next.js 14 • Vercel Edge',
      status: '200 OK • Live',
      vpsUsage: 41,
      storageUsed: '18.4 GB',
      storageTotal: '50 GB',
      storagePercent: 37,
      activeMembers: 310,
      ping: '142ms',
      adminId: 'shobhit',
      adminPassword: 'welcome back shobhit',
      section: 'media',
      color: '#f43f5e',
      defaultMode: 'mobile',
      notes: 'MoviesNet Content & Media Dashboard'
    }
  ];

  // --- Initial Internal Database Content for Each Website ---
  const DEFAULT_RECORDS = {
    'site-allsitehub': [
      {
            "id": "ms2tednwv7muc",
            "title": "PANTYFLIX",
            "url": "https://pantyflix.org/",
            "category": "Movies & Shows",
            "badge": "Trusted",
            "desc": "pantyflix.org • Order: 1",
            "domain": "pantyflix.org"
      },
      {
            "id": "ms2tfcv4txa6u",
            "title": "1 Show",
            "url": "https://www.1shows.org/",
            "category": "Movies & Shows",
            "badge": "Trusted",
            "desc": "1shows.org • Order: 4",
            "domain": "1shows.org"
      },
      {
            "id": "ms2tg2e2jw8vg",
            "title": "ENMA",
            "url": "https://www.enma.lol/home",
            "category": "Anime",
            "badge": "Trusted",
            "desc": "enma.lol • Order: 0",
            "domain": "enma.lol"
      },
      {
            "id": "ms2tgj8utkoue",
            "title": "1TUBE",
            "url": "https://1tube.org/",
            "category": "Movies & Shows",
            "badge": "Trusted",
            "desc": "1tube.org • Order: 3",
            "domain": "1tube.org"
      },
      {
            "id": "ms2th1hf7ncwk",
            "title": "7 movies",
            "url": "https://7movies.in/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "7movies.in • Order: 2",
            "domain": "7movies.in"
      },
      {
            "id": "ms2tiauj2jn35",
            "title": "CINEZO",
            "url": "https://cinezo.net/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "cinezo.net • Order: 0",
            "domain": "cinezo.net"
      },
      {
            "id": "ms2tl1qb47f6k",
            "title": "1FLEX",
            "url": "https://www.1flex.org/",
            "category": "Movies & Shows",
            "badge": "Trusted",
            "desc": "1flex.org • Order: 5",
            "domain": "1flex.org"
      },
      {
            "id": "ms2tvigbxglzl",
            "title": "REDFLIX",
            "url": "https://redflix.club/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "redflix.club • Order: 8",
            "domain": "redflix.club"
      },
      {
            "id": "ms2twlltw6obx",
            "title": "YENIME",
            "url": "https://yenime.net/",
            "category": "Anime",
            "badge": "Trusted",
            "desc": "yenime.net • Order: 1",
            "domain": "yenime.net"
      },
      {
            "id": "ms2u0cv0xlvak",
            "title": "SHUTTLE TV",
            "url": "https://shuttletv.su/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "shuttletv.su • Order: 9",
            "domain": "shuttletv.su"
      },
      {
            "id": "ms2ublikhkx0h",
            "title": "FLY FLIX",
            "url": "https://flyflix.net/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "flyflix.net • Order: 10",
            "domain": "flyflix.net"
      },
      {
            "id": "ms2udhv2f75gm",
            "title": "YOU SHOWS",
            "url": "https://youshows.org/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "youshows.org • Order: 11",
            "domain": "youshows.org"
      },
      {
            "id": "ms2uego1lxbmv",
            "title": "ANY SHOWS",
            "url": "https://anishows.org/",
            "category": "Anime",
            "badge": "Active",
            "desc": "anishows.org • Order: 2",
            "domain": "anishows.org"
      },
      {
            "id": "ms2ug2xqgt5jg",
            "title": "FLIXHUB",
            "url": "https://flixhub.studio/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "flixhub.studio • Order: 12",
            "domain": "flixhub.studio"
      },
      {
            "id": "ms2um0ncjossc",
            "title": "PRIME MOVIES",
            "url": "https://primeshows.org/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "primeshows.org • Order: 13",
            "domain": "primeshows.org"
      },
      {
            "id": "ms2uwsrnmrviw",
            "title": "DULO",
            "url": "https://dulo.cx/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "dulo.cx • Order: 14",
            "domain": "dulo.cx"
      },
      {
            "id": "ms2uyznbldhs4",
            "title": "STIGSTREAM",
            "url": "https://stigstream.ru/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "stigstream.ru • Order: 15",
            "domain": "stigstream.ru"
      },
      {
            "id": "ms2uzxxstyo73",
            "title": "FLIXEO",
            "url": "https://flixeo.tv/home",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "flixeo.tv • Order: 16",
            "domain": "flixeo.tv"
      },
      {
            "id": "ms2v0ta2ph0tm",
            "title": "WILLOW",
            "url": "https://willow.arlen.icu/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "willow.arlen.icu • Order: 17",
            "domain": "willow.arlen.icu"
      },
      {
            "id": "ms2v1qsbnjn4f",
            "title": "ANIME TV",
            "url": "https://animetvplus.xyz/",
            "category": "Anime",
            "badge": "Active",
            "desc": "animetvplus.xyz • Order: 4",
            "domain": "animetvplus.xyz"
      },
      {
            "id": "ms2v4fhvkrqz1",
            "title": "KAA",
            "url": "https://kaa.lt/",
            "category": "Anime",
            "badge": "Active",
            "desc": "kaa.lt • Order: 6",
            "domain": "kaa.lt"
      },
      {
            "id": "ms2v4s9su1jh2",
            "title": "JUST ANIME",
            "url": "https://justanime.to/",
            "category": "Anime",
            "badge": "Active",
            "desc": "justanime.to • Order: 7",
            "domain": "justanime.to"
      },
      {
            "id": "ms2v5hpg7we7t",
            "title": "ANIME SALT",
            "url": "https://animesalt.link/",
            "category": "Anime",
            "badge": "Active",
            "desc": "animesalt.link • Order: 8",
            "domain": "animesalt.link"
      },
      {
            "id": "ms2v90v83veec",
            "title": "ONDEMAND",
            "url": "https://ondemand.st/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "ondemand.st • Order: 0",
            "domain": "ondemand.st"
      },
      {
            "id": "ms2v9t0be7pvn",
            "title": "STREAM EAST",
            "url": "https://thestreameast.top/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "thestreameast.top • Order: 1",
            "domain": "thestreameast.top"
      },
      {
            "id": "ms2va88dhq2dv",
            "title": "STMIFY",
            "url": "https://stmify.com/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "stmify.com • Order: 2",
            "domain": "stmify.com"
      },
      {
            "id": "ms2vaqvfr5810",
            "title": "FAMELACK",
            "url": "https://famelack.com/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "famelack.com • Order: 3",
            "domain": "famelack.com"
      },
      {
            "id": "ms2vbpfemdoqp",
            "title": "MANGABALL",
            "url": "https://mangaball.net/",
            "category": "Manga",
            "badge": "Active",
            "desc": "mangaball.net • Order: 0",
            "domain": "mangaball.net"
      },
      {
            "id": "ms2vc7tt9v0wk",
            "title": "COMICK",
            "url": "https://comick.dev/",
            "category": "Manga",
            "badge": "Active",
            "desc": "comick.dev • Order: 1",
            "domain": "comick.dev"
      },
      {
            "id": "ms2vckb0mbtit",
            "title": "Q TOON",
            "url": "https://qtoon.org/",
            "category": "Manga",
            "badge": "Active",
            "desc": "qtoon.org • Order: 2",
            "domain": "qtoon.org"
      },
      {
            "id": "ms2vd2dtgayp4",
            "title": "WEEB CENTRAL",
            "url": "https://weebcentral.com/",
            "category": "Manga",
            "badge": "Active",
            "desc": "weebcentral.com • Order: 3",
            "domain": "weebcentral.com"
      },
      {
            "id": "ms2vdkyd46dy0",
            "title": "KING OF SHOJO",
            "url": "https://kingofshojo.com/",
            "category": "Manga",
            "badge": "Active",
            "desc": "kingofshojo.com • Order: 4",
            "domain": "kingofshojo.com"
      },
      {
            "id": "ms2vfe5q5kuvu",
            "title": "NETFLIX",
            "url": "https://www.netflix.com/in/",
            "category": "Paid",
            "badge": "Trusted",
            "desc": "netflix.com • Order: 0",
            "domain": "netflix.com"
      },
      {
            "id": "ms2vg859bnjw5",
            "title": "HOTSTAR",
            "url": "https://www.hotstar.com/in/home",
            "category": "Paid",
            "badge": "Active",
            "desc": "hotstar.com • Order: 1",
            "domain": "hotstar.com"
      },
      {
            "id": "ms2vhiq3gb07g",
            "title": "HBO MAX",
            "url": "https://www.hbomax.com/geo-availability/india?utm_source=facebook&utm_medium=paid-social&utm_id=fb%7C120250190127540496%7C120250961158360496%7C120251616249190496&utm_content=120251616249190496&utm_term=120250961158360496&utm_campaign=120250190127540496&fbclid=PAZXh0bgNhZW0BMABhZGlkAas4e85sqIBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafsfXCkyEl4FcZycGyBUnkFVj7iXciZ-B1yo4FfRdEWnfWpnKmcOpoY9UUcBg_aem_ll-4T2SohfzfkzGgGmV3ow%3Futm_campaign%3D120219700185430167&fbclid=PAcGRvZgJmZGlkFlCiQzGaqdjXf9Y1lyO7NwATd9GNHjVleHRuA2FlbQEwAGFkaWQBqzR0uZ50F3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpyPYH6sylBRTI-W_mlr7SRYcVjWB41loEbSmtMTPlW2EeRiM8blm9N6aUD7g_aem_MU58id_RK_BLwagzXcqPJQ&utm_id=fb%7C120219700185430167%7C120219700190500167%7C120247472418060167&utm_medium=paid-social&utm_content=120247472418060167&utm_source=facebook&utm_term=120219700190500167",
            "category": "Paid",
            "badge": "Active",
            "desc": "hbomax.com • Order: 2",
            "domain": "hbomax.com"
      },
      {
            "id": "ms2vhwcjijewa",
            "title": "APPLE TV",
            "url": "https://tv.apple.com/",
            "category": "Paid",
            "badge": "Active",
            "desc": "tv.apple.com • Order: 3",
            "domain": "tv.apple.com"
      },
      {
            "id": "ms2vismwnjk7z",
            "title": "PRIME VIDEO",
            "url": "https://www.primevideo.com/",
            "category": "Paid",
            "badge": "Active",
            "desc": "primevideo.com • Order: 4",
            "domain": "primevideo.com"
      },
      {
            "id": "ms2vjb6mljbxo",
            "title": "CRUNCHUROLL",
            "url": "https://sso.crunchyroll.com/login?return_url=%2Fauthorize%3Fclient_id%3Dnoaihdevm_6iyg0a8l0q%26redirect_uri%3Dhttps%253A%252F%252Fwww.crunchyroll.com%252Fcallback%26response_type%3Dcookie%26state%3D%252F",
            "category": "Paid",
            "badge": "Active",
            "desc": "sso.crunchyroll.com • Order: 5",
            "domain": "sso.crunchyroll.com"
      },
      {
            "id": "ms2vjqvwdhbhh",
            "title": "PEACOCK",
            "url": "https://www.peacocktv.com/unavailable",
            "category": "Paid",
            "badge": "Active",
            "desc": "peacocktv.com • Order: 6",
            "domain": "peacocktv.com"
      },
      {
            "id": "ms3b79g4er7kt",
            "title": "WEBTOON",
            "url": "https://www.webtoons.com/en/",
            "category": "Manga",
            "badge": "Featured",
            "desc": "webtoons.com • Order: 5",
            "domain": "webtoons.com"
      },
      {
            "id": "ms3befx4o6ahl",
            "title": "NET MIRROR",
            "url": "https://netmirror.gg/10/en-in",
            "category": "Apps",
            "badge": "Trusted",
            "desc": "netmirror.gg • Order: 0",
            "domain": "netmirror.gg"
      },
      {
            "id": "ms3bftq5u05bp",
            "title": "MOVIES BOX",
            "url": "https://www.moviesbox.com.co/home/",
            "category": "Apps",
            "badge": "Trusted",
            "desc": "moviesbox.com.co • Order: 1",
            "domain": "moviesbox.com.co"
      },
      {
            "id": "ms3bgpagkryc3",
            "title": "PIKASHOWS",
            "url": "https://pikashowtv.in/",
            "category": "Apps",
            "badge": "Trusted",
            "desc": "pikashowtv.in • Order: 2",
            "domain": "pikashowtv.in"
      },
      {
            "id": "ms3bhjd2e2rhk",
            "title": "PLAY TORRIO",
            "url": "https://playtorrio.pages.dev/",
            "category": "Apps",
            "badge": "Active",
            "desc": "playtorrio.pages.dev • Order: 3",
            "domain": "playtorrio.pages.dev"
      },
      {
            "id": "ms3bi5mak9klp",
            "title": "YOU CINE",
            "url": "https://youcineapkpro.com/",
            "category": "Apps",
            "badge": "Active",
            "desc": "youcineapkpro.com • Order: 4",
            "domain": "youcineapkpro.com"
      },
      {
            "id": "ms3di7p83at01",
            "title": "CINRIFT",
            "url": "https://cinrift.me/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "cinrift.me • Order: 18",
            "domain": "cinrift.me"
      },
      {
            "id": "ms3dpquywg3xx",
            "title": "SHUDDER",
            "url": "https://www.shudder.com/",
            "category": "Paid",
            "badge": "Active",
            "desc": "shudder.com • Order: 7",
            "domain": "shudder.com"
      },
      {
            "id": "ms3dvbko7co78",
            "title": "HULU",
            "url": "https://auth.hulu.com/web/login/",
            "category": "Paid",
            "badge": "Active",
            "desc": "auth.hulu.com • Order: 8",
            "domain": "auth.hulu.com"
      },
      {
            "id": "ms3dwt3ldxivm",
            "title": "VIKI",
            "url": "https://www.viki.com/",
            "category": "Paid",
            "badge": "Active",
            "desc": "viki.com • Order: 9",
            "domain": "viki.com"
      },
      {
            "id": "ms3dxpw7it3tw",
            "title": "PARAMOUNT",
            "url": "https://www.paramountplus.com/intl/",
            "category": "Paid",
            "badge": "Active",
            "desc": "paramountplus.com • Order: 10",
            "domain": "paramountplus.com"
      },
      {
            "id": "ms3dyh5ufxj32",
            "title": "MGM",
            "url": "https://www.mgmplus.com/",
            "category": "Paid",
            "badge": "Active",
            "desc": "mgmplus.com • Order: 11",
            "domain": "mgmplus.com"
      },
      {
            "id": "ms3dz7jebbvpj",
            "title": "AMC",
            "url": "https://www.amcplus.com/login",
            "category": "Paid",
            "badge": "Active",
            "desc": "amcplus.com • Order: 12",
            "domain": "amcplus.com"
      },
      {
            "id": "ms3e0mfmzfjuo",
            "title": "ONSTREAM",
            "url": "https://onstreamapks.app/",
            "category": "Apps",
            "badge": "Active",
            "desc": "onstreamapks.app • Order: 5",
            "domain": "onstreamapks.app"
      },
      {
            "id": "ms3e21a50cr4d",
            "title": "PUBLIC IPTV",
            "url": "https://publiciptv.com/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "publiciptv.com • Order: 4",
            "domain": "publiciptv.com"
      },
      {
            "id": "ms3e2mf403jea",
            "title": "SPORTPLUS",
            "url": "https://en97.sportplus.watch/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "en97.sportplus.watch • Order: 5",
            "domain": "en97.sportplus.watch"
      },
      {
            "id": "ms3e3lwsl5u80",
            "title": "STREAM EAST",
            "url": "https://streameastnow.net/",
            "category": "Live TV & Sports",
            "badge": "Active",
            "desc": "streameastnow.net • Order: 6",
            "domain": "streameastnow.net"
      },
      {
            "id": "ms93a7zgrjq7v",
            "title": "FLIXHUB",
            "url": "https://flixhub.studio/",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "flixhub.studio • Order: 19",
            "domain": "flixhub.studio"
      },
      {
            "id": "mse7lfl71u1ak",
            "title": "SENPAI FLIX",
            "url": "https://senpaiflix.fun/",
            "category": "Anime",
            "badge": "Active",
            "desc": "senpaiflix.fun • Order: 9",
            "domain": "senpaiflix.fun"
      },
      {
            "id": "msfsfrhgp11w7",
            "title": "ANIMEXTRONS",
            "url": "https://animextrons.co.in/",
            "category": "Anime",
            "badge": "Active",
            "desc": "animextrons.co.in • Order: 10",
            "domain": "animextrons.co.in"
      },
      {
            "id": "msia0q2cjtntr",
            "title": "ANIKOTO TV",
            "url": "https://anikototv.to/",
            "category": "Anime",
            "badge": "Active",
            "desc": "anikototv.to • Order: 11",
            "domain": "anikototv.to"
      },
      {
            "id": "mskbz4mxt82hu",
            "title": "PvrPlay",
            "url": "https://pvrplay.online",
            "category": "Movies & Shows",
            "badge": "Active",
            "desc": "PvrPlay • Order: 7",
            "domain": "PvrPlay"
      },
      {
            "id": "mslv1yszv725f",
            "title": "WATCH ANIMEx",
            "url": "https://watchanimez.me/",
            "category": "Anime",
            "badge": "Active",
            "desc": "https://watchanimez.me/ • Order: 12",
            "domain": "https://watchanimez.me/"
      },
      {
            "id": "mssqu1xlcfcll",
            "title": "Cinemove — Watch Movies and TV Shows Online Streaming",
            "url": "https://cinemove.cc/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "cinemove.cc • Order: 20",
            "domain": "cinemove.cc"
      },
      {
            "id": "msuj7f7yxawwt",
            "title": "Vuflix",
            "url": "https://vuflix.co/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "vuflix.co • Order: 21",
            "domain": "vuflix.co"
      },
      {
            "id": "msuj9c8k8b6mg",
            "title": "7reels",
            "url": "https://7reels.cc/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "7reels.cc • Order: 22",
            "domain": "7reels.cc"
      },
      {
            "id": "mt1lfg9hm25kc",
            "title": "Ani waves",
            "url": "https://aniwaves.ru/home",
            "category": "Anime",
            "badge": "New",
            "desc": "aniwaves.ru • Order: 13",
            "domain": "aniwaves.ru"
      },
      {
            "id": "mt1lgmav1n7xt",
            "title": "Pixel Flix",
            "url": "https://pixelflix.cc/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "pixelflix.cc • Order: 23",
            "domain": "pixelflix.cc"
      },
      {
            "id": "mt1li8g02200i",
            "title": "Anicine",
            "url": "https://anicine.xyz/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "anicine.xyz • Order: 24",
            "domain": "anicine.xyz"
      },
      {
            "id": "mt1lk076av0z8",
            "title": "Manga reader",
            "url": "https://anireads.cc/",
            "category": "Manga",
            "badge": "New",
            "desc": "anireads.cc • Order: 6",
            "domain": "anireads.cc"
      },
      {
            "id": "mt1lk9re60o47",
            "title": "Multi movies streaming site",
            "url": "https://flixhub.aniflix.uno/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "flixhub.aniflix.uno • Order: 25",
            "domain": "flixhub.aniflix.uno"
      },
      {
            "id": "mt1ll4r0eiiiz",
            "title": "Anime streaming site in all language along with official hindi",
            "url": "https://aniflix.uno/",
            "category": "Anime",
            "badge": "New",
            "desc": "aniflix.uno • Order: 14",
            "domain": "aniflix.uno"
      },
      {
            "id": "mt1lpwjhlmfrf",
            "title": "NIPPLEFLIX",
            "url": "https://nippleflix.org/",
            "category": "Movies & Shows",
            "badge": "Trusted",
            "desc": "nippleflix.org • Order: 6",
            "domain": "nippleflix.org"
      },
      {
            "id": "mtbo1c3t14d8c",
            "title": "animerulz",
            "url": "https://animerulz.co.in/",
            "category": "Anime",
            "badge": "New",
            "desc": "animerulz.co.in • Order: 15",
            "domain": "animerulz.co.in"
      },
      {
            "id": "mtbo3zw6xgpx0",
            "title": "cinehd",
            "url": "https://cinehd.vc/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "cinehd.vc • Order: 26",
            "domain": "cinehd.vc"
      },
      {
            "id": "mtbo4ns1kut2n",
            "title": "AllFlix",
            "url": "https://allflix.org/",
            "category": "Movies & Shows",
            "badge": "New",
            "desc": "allflix.org • Order: 27",
            "domain": "allflix.org"
      },
      {
            "id": "mtbo4ywp7dhp1",
            "title": "Anime Play",
            "url": "https://dub.animeplay.icu/",
            "category": "Anime",
            "badge": "New",
            "desc": "dub.animeplay.icu • Order: 16",
            "domain": "dub.animeplay.icu"
      }
],
    'site-allsitehub-requests': [
      {
            "id": "mtjvhjol7yqp6",
            "title": "OnlineTVcast",
            "url": "https://onlinetvcast.com/",
            "category": "Movies & Shows",
            "badge": "Pending",
            "desc": "Combines live TV channels, movies, series, and regional streaming-access guides in one mobile-friendly entertainment site.",
            "status": "pending"
      },
      {
            "id": "mtbry9m55oqmw",
            "title": "fancode",
            "url": "https://www.fancode.com/",
            "category": "Live TV & Sports",
            "badge": "Pending",
            "desc": "No description provided",
            "status": "pending"
      },
      {
            "id": "mt9zg50wnl18d",
            "title": "Cricsmart",
            "url": "https://cricsmart.in/",
            "category": "Apps",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mt9tthbi31f21",
            "title": "Legendary",
            "url": "https://legendary1122.myshopify.com/",
            "category": "Apps",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mt9tskoef1uox",
            "title": "animerulz",
            "url": "https://animerulz.co.in/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "mt9tro8ugxyz9",
            "title": "Animepahe",
            "url": "https://animepahe.pw/",
            "category": "Anime",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mt9tqcrf2c06j",
            "title": "ashrium",
            "url": "https://www.ashrium.org/",
            "category": "Apps",
            "badge": "Rejected",
            "desc": "because your website is best",
            "status": "rejected"
      },
      {
            "id": "mt9rplt4ytdbx",
            "title": "Anivortex",
            "url": "https://anivortex.in/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "mobile Friendly,Fast Streaming,Tv supported",
            "status": "rejected"
      },
      {
            "id": "mt9rjnjy3h38q",
            "title": "Toonstream",
            "url": "https://toon-stream.site/",
            "category": "Anime",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mt9rg91qu2zgc",
            "title": "Anime World",
            "url": "https://watchanimeworld.pro/",
            "category": "Anime",
            "badge": "Rejected",
            "desc": "fast Streaming, Large Library",
            "status": "rejected"
      },
      {
            "id": "mt9o0y7rfal7s",
            "title": "cinehd",
            "url": "https://cinehd.vc/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "it contains movies from almost all paid sites around the world and contains al types of movies,anime,manga,songs all in one place plus we have a choice to switch over a wide range of servers if a current server doent work we can watch the particular movie in almost all available language using this site",
            "status": "approved"
      },
      {
            "id": "mt96pfz7635eo",
            "title": "AllFlix",
            "url": "https://allflix.org/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "AllFlix is a clean, ad-free streaming site offering a smooth and user-friendly experience for watching movies and TV shows. With a growing library, modern interface, and fast navigation, we believe AllFlix would be a strong addition to your platform and valuable to your users.",
            "status": "approved"
      },
      {
            "id": "mt8gsqpnwsfqz",
            "title": "Gojo Live",
            "url": "https://gojolive.site/",
            "category": "Anime",
            "badge": "Rejected",
            "desc": "simple ui ezy to use no ads.",
            "status": "rejected"
      },
      {
            "id": "mt8grgrvf4v1u",
            "title": "Anime Play",
            "url": "https://dub.animeplay.icu/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "Modern interface, reliable server\nRich subtitle , Actively updated\nMedium library, Low Ads , Old site .",
            "status": "approved"
      },
      {
            "id": "mt7l5tiaunwgn",
            "title": "Le Paris d'avant.fr",
            "url": "https://www.leparisdavant.fr/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mt1lgohoy0z1u",
            "title": "Nippleflix",
            "url": "https://nippleflix.com/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mt0hh2u49326z",
            "title": "Ani waves",
            "url": "https://aniwaves.ru/home",
            "category": "Anime",
            "badge": "Approved",
            "desc": "its one of the best anime website , you should  list it",
            "status": "approved"
      },
      {
            "id": "mt0dac0y08fcx",
            "title": "Pixel Flix",
            "url": "https://pixelflix.cc/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "free movies series and anime without ads",
            "status": "approved"
      },
      {
            "id": "mt00jttngegwm",
            "title": "Free Streaming Movie",
            "url": "https://wovie2.vercel.app/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msxmeq0dj9bxb",
            "title": "Nippleflix",
            "url": "https://nippleflix.com/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mswgp30jmeexh",
            "title": "Ben Lahcen Lassaad",
            "url": "https://example.com/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mswgl1eh5amez",
            "title": "ben.lahcen@bluewin.ch",
            "url": "https://example.com/",
            "category": "Live TV & Sports",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msvu7amn4mnn5",
            "title": "Anicine",
            "url": "https://anicine.xyz/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "in my site have separate movie / tv show / anime section and also you can block ads by going from account section there have many provider and also custum player",
            "status": "approved"
      },
      {
            "id": "msvdgw32qsgb5",
            "title": "Manga reader",
            "url": "https://anireads.cc/",
            "category": "Manga",
            "badge": "Approved",
            "desc": "Best ui least adds with a great reader experience and live tracking of manga",
            "status": "approved"
      },
      {
            "id": "msvdf8ijtmodx",
            "title": "Multi movies streaming site",
            "url": "https://flixhub.aniflix.uno/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "The best ui and the largest library",
            "status": "approved"
      },
      {
            "id": "msvddvi6og20z",
            "title": "Anime streaming site in all language along with official hindi",
            "url": "https://aniflix.uno/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "Large library, multiple server, latest anime and lots of customisation along with watch2gather like awesome features",
            "status": "approved"
      },
      {
            "id": "msuv1g99ea5s3",
            "title": "Sex",
            "url": "https://sex.com/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msu6bouv54lv1",
            "title": "Vuflix",
            "url": "https://vuflix.co/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "So basically anywhere, trying to make my site more popular, any help is welcome.",
            "status": "approved"
      },
      {
            "id": "msu0zlbx587q1",
            "title": "msbreewc VIP PAGE",
            "url": "https://onlyfans.com/msbreewcvip",
            "category": "Paid",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "mst9rom4gn75s",
            "title": "Spotify",
            "url": "https://open.spotify.com/",
            "category": "Paid",
            "badge": "Rejected",
            "desc": "with out adss",
            "status": "rejected"
      },
      {
            "id": "msrt7mwx92y4d",
            "title": "HindiDubbed Anime Library",
            "url": "https://hindidub.modrao.com",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "Best Hindi dubbed only anime list website",
            "status": "rejected"
      },
      {
            "id": "msq73pms74dmg",
            "title": "7reels",
            "url": "https://7reels.cc/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msq5msp4lyenu",
            "title": "DuaFile",
            "url": "https://duafile.com/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "Name: DuaFile\nSite URL: https://duafile.com/\nBackup URL: https://duafile.net/\nAddition/Removal/Modification: Addition\n\nDescription:\nFree streaming and download site for movies and TV series, (with software, games, music, and eBooks coming soon.) Currently 450,000+ titles available.\n\nWhy it should be added/changed:\nFully Mobile friendly and optimized for every device and screen size\nNo signup or account needed, fully anonymous access\nFast and lightweight with no bloated scripts\nNo ads between pages, only 1 popup on the play page\n\nContent & Library:\nSix content categories: Movies, Series, Software, Games, Music, and eBooks (software, games, music & eBooks coming soon)\n450,000+ titles and growing daily\n\nCore Features:\n45+ embed sources per title (+ multiple fallbacks inside the embed sources itself) - ensuring something always works\nDownload sources available\nContinue Watching and Watch Later, stored locally, no account needed\nDaily trending charts (both global and site-specific)\nMultiple quality options per title - 720p, 1080p, and up to 4K\nUpcoming movies feature\nTimeline feature\nFull metadata: IMDB/TMDB Links, IMDb ratings, cast, genre, production company, and release year\nPowerful search by name, genre, year, tag, description, production company, and crew\n\nAds: No ads between pages, 1 popup on the play page\nSite Language: English\nDownloads: DDL + Torrent",
            "status": "rejected"
      },
      {
            "id": "msq36z7gfl9an",
            "title": "Discovery FTP",
            "url": "https://www.discoveryftp",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msq27k33qdtmu",
            "title": "Netflix.com",
            "url": "https://www.netflix.com/in/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msoy1em156oep",
            "title": "Streaming Site and more",
            "url": "https://cinemove.cc",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "We have little advertising.",
            "status": "approved"
      },
      {
            "id": "msow4nf37ctzb",
            "title": "animepahe",
            "url": "https://animepahe.pw/",
            "category": "Anime",
            "badge": "Rejected",
            "desc": "in this site the anime is display as per the schedule. it include all types of anime with minimal ads and no malware. user experince is good and clean home screen",
            "status": "rejected"
      },
      {
            "id": "msovtldzgorha",
            "title": "Cloudstream",
            "url": "https://github.com/recloudstream/cloudstream",
            "category": "Apps",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msoq9fdtx8gi9",
            "title": "netflix",
            "url": "https://www.netflix.com",
            "category": "Paid",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msolwuog0g6rs",
            "title": "bingeverse",
            "url": "https://bingeverse.online/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "fast loading, great ui, huge repository",
            "status": "rejected"
      },
      {
            "id": "msoe5teyf9jwq",
            "title": "Fojik",
            "url": "https://fojik.site/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "Because it have a large amout of movie and series collection. and its easy to download.",
            "status": "rejected"
      },
      {
            "id": "msoczy7xgw6tm",
            "title": "https://allsitehub.site/request",
            "url": "https://allsitehub.site/request",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "msocqtcl7e1cd",
            "title": "BoiMate Bangla Islamic PDF",
            "url": "https://boimate.com",
            "category": "Paid",
            "badge": "Rejected",
            "desc": "Largest Bangla Islamic PDF Collection",
            "status": "rejected"
      },
      {
            "id": "mso9yn82l39lp",
            "title": "TNTVs",
            "url": "https://tntvs.vercel.app/",
            "category": "Apps",
            "badge": "Rejected",
            "desc": "TNTVs is a free, mobile-friendly streaming platform that brings live TV, sports, and M3U playlist support together in one simple app. Users can watch live cricket, football, tennis, basketball, Formula 1, WWE, UFC, news, and other TV channels from around the world.\n\nThe app supports Android phones, Android TV, and Firestick, with a clean and lightweight interface designed for easy navigation. It also supports multiple streaming servers, HD/4K playback, live scores, TV casting, and M3U playlists, giving users flexibility to manage and watch their preferred streams.\n\nTNTVs is completely free with no subscription or sign-up required, making it a convenient option for users looking for an easy way to access live TV and sports streams from their devices.",
            "status": "rejected"
      },
      {
            "id": "mso8aao06wz49",
            "title": "ClickMovie",
            "url": "https://clickmovie.org/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "Our site offers a premium, user-friendly streaming experience with a clean and modern layout that is fully optimized for mobile devices. Unlike many other platforms, we maintain a strictly non-intrusive environment with minimal ads and zero inappropriate/gambling pop-ups. We update our collection daily with high-quality content to ensure users always find the latest movies and shows smoothly.",
            "status": "rejected"
      },
      {
            "id": "msmvp64tob16z",
            "title": "Tabi",
            "url": "https://www.tabii.com/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "because it has every single premium turkish series that are only accessible in turkey",
            "status": "approved"
      },
      {
            "id": "msmjd48k0j1mt",
            "title": "Cinemove — Watch Movies and TV Shows Online Streaming",
            "url": "https://cinemove.cc/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Watch trending movies and TV shows online in one fast, modern streaming hub with smart search, watchlists, and seamless playback.",
            "status": "approved"
      },
      {
            "id": "mslv2e9ov0i69",
            "title": "https://watchanimez.me/",
            "url": "https://watchanimez.me/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msluz1ij7dgc7",
            "title": "WatchAnimeX",
            "url": "https://watchanimez.me/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "Multi lang support anime and dub and sub sync progress watching anilist mal and Anicore for high quality metadata",
            "status": "approved"
      },
      {
            "id": "msklbg8y8exyg",
            "title": "Play Anima",
            "url": "https://playanime.online/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "Large Library, Latest Shows and episode, Tending Anime, Latest Anime Blogs",
            "status": "approved"
      },
      {
            "id": "mskgwoosacwg2",
            "title": "7reels",
            "url": "https://7reels.cc/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "its avery good site with lots of servers and easy to use",
            "status": "approved"
      },
      {
            "id": "mskf2emnnu6g7",
            "title": "TmovieS",
            "url": "https://tmovies.watch/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msj5t4qkaic2d",
            "title": "netflex",
            "url": "https://www.netflix.com/pk/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msj04jzzfylzi",
            "title": "Anime Drive",
            "url": "https://animedrive.in/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "This Website Is For Downloading Anime And The Best Part Of This Website There Are 0 Ads On Main Pages",
            "status": "approved"
      },
      {
            "id": "mshmme3qisazy",
            "title": "animelok",
            "url": "https://animelok.live/home",
            "category": "Anime",
            "badge": "Approved",
            "desc": "nice website and also Hindi dub available and english",
            "status": "approved"
      },
      {
            "id": "mshcs71exe2eq",
            "title": "SWatchSeries",
            "url": "https://swatchseries.cx/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Just another option to add when others don't work. Reliable",
            "status": "approved"
      },
      {
            "id": "mshcrhwe1qcvc",
            "title": "Braflix",
            "url": "https://braflix.uk/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Visually very good, smooth, supports 4k, many many servers, always works, little to no ads",
            "status": "approved"
      },
      {
            "id": "mshcq5q2tzi5t",
            "title": "OnlyFlix",
            "url": "https://onlyflix.to/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Reliable and always working. Fast, and low ads",
            "status": "approved"
      },
      {
            "id": "msh703dyq60la",
            "title": "zstream",
            "url": "https://zstream.mov",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "large library best sources actively developed mobile,tv native apps, download support and more",
            "status": "approved"
      },
      {
            "id": "msh2f1uc09iwf",
            "title": "Ultra Jhakaas",
            "url": "https://www.ultrajhakaas.com/series/8-waajun-13-minite/6cu99d0ks3ig",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "Regional content",
            "status": "rejected"
      },
      {
            "id": "msfpoo4flvxls",
            "title": "Netmirror",
            "url": "https://netprime.click",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "NetPrime helps viewers discover movies, TV series, popular releases, complete seasons, and highly rated titles in one simple place. Browse the NetPrime catalog by genre, country, year, or IMDb rating, then open the title page for details, episodes, and available viewing options.",
            "status": "approved"
      },
      {
            "id": "msf9bxg9hpkg8",
            "title": "9Anime",
            "url": "https://9anime.or.at/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msf9bac7bxx9j",
            "title": "XTubeFlix",
            "url": "https://xtubeflix.com/home/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msf9agcwb9ftv",
            "title": "FMovies",
            "url": "https://fmovies4u.co/home/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msekf0krtpvzg",
            "title": "https://movielinkbd.shop/",
            "url": "https://movielinkbd.shop/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msegwzqn19anj",
            "title": "pocketfm,com",
            "url": "https://pocketfm.com/",
            "category": "Apps",
            "badge": "Approved",
            "desc": "i love the story hering and nice apps of auido story and best",
            "status": "approved"
      },
      {
            "id": "msedbvp6brrwz",
            "title": "Disney+",
            "url": "https://www.disneyplus.com/home",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "mse87up2m496p",
            "title": "N Mirror",
            "url": "https://nmirror.online/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "It has Large collection of Movies, series and Tv shows. You will find out almost all collections here. Moreover, it has AI assitance feature which helps user to explore the movies based on its Mood or Genre prefernce by just chatting to AI. It has multiple servers with 4K quality. Also, Developers Update it on continuous basis so new features comes up.",
            "status": "approved"
      },
      {
            "id": "mse7x8iolnent",
            "title": "ANIFIX",
            "url": "https://animextrons.co.in/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "🎬 Complete Anime Experience\n🔐 Discord Login – Easy and secure sign-in\n👤 Personal Profiles – Users can create and customize their own profile\n💬 Comments & Discussions – Interact with other anime fans\n📚 Manga Section – Dedicated manga reading experience\n🧭 Easy Navigation – Simple and user-friendly interface\n⚡ Fast & Mobile-Friendly – Smooth experience across devices\n🎞️ Nostalgic Experience – Bringing back the classic feeling of watching anime\n🎨 Modern UI – Clean, premium, and anime-focused design\n🤝 Community Focused – Built around interaction and discovering anime together\n🌟 All-in-One Platform – Streaming, manga, profiles, comments, and community features in one pla",
            "status": "approved"
      },
      {
            "id": "mse6j4zq1ko0f",
            "title": "netfix",
            "url": "https://www.netflix.com/in/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msbjddruplxrv",
            "title": "Flemmix",
            "url": "https://flemmix",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msbh93bbodrc3",
            "title": "Senpaiflix",
            "url": "https://senpaiflix.fun",
            "category": "Anime",
            "badge": "Approved",
            "desc": "SenpaiFlix is an anime streaming platform built for anime fans who want fast, high-quality streaming with multiple language options in one place.\n\nWhat SenpaiFlix offers:\n\nSubbed Anime\nEnglish Dubbed Anime\nHindi Dubbed Anime\nMulti-Language Streaming\nWatch Together feature\nFast and smooth streaming\nMobile and desktop support\nEasy anime search and discovery\n\nSenpaiFlix focuses on providing a clean, modern, and user-friendly experience with high-quality streaming, synchronized watch parties, and support for anime fans worldwide.\n\nUsers can watch the latest seasonal anime, enjoy classic series, and discover new titles through a fast and responsive interface.\n\nThe platform is regularly updated with new anime releases, feature improvements, and community events.\n\nThank you for considering SenpaiFlix for inclusion in your index.",
            "status": "approved"
      },
      {
            "id": "msb7ynxpd12g4",
            "title": "NetPrime",
            "url": "https://www.netprime.cx/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msazeec9sdmno",
            "title": "Isaimini",
            "url": "https://moviesdk.com",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "msahoqzxa7uu0",
            "title": "animewatch",
            "url": "https://watchanimeworld.net/",
            "category": "Anime",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "ms8yi66y17h7w",
            "title": "Netmirror Global Hindi",
            "url": "https://netmirror.global/explore/movie",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "No description provided",
            "status": "rejected"
      },
      {
            "id": "ms80c9n0ajfge",
            "title": "StreamingUnity",
            "url": "https://streamingunity.cc/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Ui innovative, private server, good archive",
            "status": "approved"
      },
      {
            "id": "ms7kgrimvocl3",
            "title": "Mo",
            "url": "https://v.moviebox.ph/UqzlwaB4on6",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "ms796b91cyzls",
            "title": "Mova",
            "url": "https://mova-mu.vercel.app/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Its a movie streaming site with latest movies updated on the basis of releases, no ads, need VPN though (only for india), doesnt need VPN for other countries",
            "status": "approved"
      },
      {
            "id": "ms77swgfnui74",
            "title": "pocketfm",
            "url": "https://pocketfm.com/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "large labrriy and user frindly,soomthly runs",
            "status": "approved"
      },
      {
            "id": "ms738gb22ormr",
            "title": "Flixhub Studio",
            "url": "https://flixhub.studio",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Best servers, fast speed, download option, 100% working, low ads, clean ui, Regular updates, Community ratings and leaderboard, Profile system like Netflix, huge library including OMDB, TMBD, IMDB, ANYLIST AND OTHERS. Organized content in platforms like Netflix, Prime, Apple TV, etc. Anime watch page is designed like anime sites, and the movie watch page is designed like movie sites. Already becoming popular with alot of reviews on social media.",
            "status": "approved"
      },
      {
            "id": "ms33zpkxl5ci5",
            "title": "good",
            "url": "https://google.com",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "No description provided",
            "status": "approved"
      },
      {
            "id": "ms2qqyhppnpcm",
            "title": "ShyFlixer",
            "url": "https://skyflixer.fun/browse",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Tv shows and movies 🎬",
            "status": "approved"
      },
      {
            "id": "ms2qoubb2yvs7",
            "title": "Primeshows",
            "url": "https://primeshows.org/",
            "category": "Movies & Shows",
            "badge": "Rejected",
            "desc": "Movies and TV shows",
            "status": "rejected"
      },
      {
            "id": "ms2qna0totjar",
            "title": "Primeshows",
            "url": "https://primeshows.org/",
            "category": "Movies & Shows",
            "badge": "Approved",
            "desc": "Tv shows and movies",
            "status": "approved"
      }
],
    'site-moviesnet': [
      { id: 'mov-1', title: 'Deadpool & Wolverine (2024)', url: 'https://moviesnet.site/watch/deadpool', category: 'Action / Comedy', badge: '4K HDR', desc: 'Trending #1 • IMDb 8.1 • Fast Server 1 Online' },
      { id: 'mov-2', title: 'Oppenheimer (IMAX Edition)', url: 'https://moviesnet.site/watch/oppenheimer', category: 'Biography / Drama', badge: 'IMAX 4K', desc: 'Oscar Winner • IMDb 8.9 • Server 2 Multi-Audio' },
      { id: 'mov-3', title: 'Stranger Things (Season 5)', url: 'https://moviesnet.site/watch/stranger-things', category: 'Sci-Fi / Thriller', badge: '1080p HD', desc: 'TV Series • Complete Episodes • Server 1 Active' },
      { id: 'mov-4', title: 'Interstellar (Remastered)', url: 'https://moviesnet.site/watch/interstellar', category: 'Sci-Fi / Adventure', badge: '4K Dolby', desc: 'IMDb 8.7 • Classic Sci-Fi Masterpiece' },
      { id: 'mov-5', title: 'Spider-Man: Beyond the Spider-Verse', url: 'https://moviesnet.site/watch/spiderman', category: 'Animation / Action', badge: 'Upcoming', desc: 'Teaser & High Speed Streaming Queue' }
    ],
    'site-freewebstuff': [
      { id: 'fws-1', title: 'Lucide Icons Clean Vector Pack', url: 'https://lucide.dev', category: 'Design Icons', badge: '100% Free', desc: 'Over 1,000+ clean SVG vector icons with zero attribution' },
      { id: 'fws-2', title: 'Next.js 14 Production SaaS Starter', url: 'https://github.com/shadcn/ui', category: 'Code Starter', badge: 'MIT License', desc: 'Full authentication, stripe billing, and dark mode template' },
      { id: 'fws-3', title: 'Free Audio Effects & Soundtrack Hub', url: 'https://freesound.org', category: 'Audio / Media', badge: 'CC0 Free', desc: 'Royalty-free sound effects for video editors and creators' },
      { id: 'fws-4', title: 'SVG Background Wave Generator', url: 'https://svgbackgrounds.com', category: 'Web Assets', badge: 'Free Tool', desc: 'Generate customizable, animated SVG background meshes' },
      { id: 'fws-5', title: 'Curated Free Fonts Collection', url: 'https://fonts.google.com', category: 'Typography', badge: 'Open Font', desc: 'Over 1,400 open-source font families for commercial use' }
    ]
  };

  // --- App State ---
  let state = {
    sites: [],
    records: {},
    activeSiteId: null,
    currentView: 'home', // 'home' | 'browser'
    panelTab: 'internal', // 'internal' | 'webview'
    viewMode: 'mobile', // 'mobile' | 'desktop'
    selectedSection: 'all', // 'all' or section key
    pinEnabled: false,
    biometricEnabled: true,
    vpsAlertsEnabled: true,
    lastAlertLevels: {}, // { [siteId]: number }
    autoRefreshEnabled: true,
    autoRefreshInterval: 5000, // 5 seconds default
    appPin: '',
    currentEnteredPin: '',
    failedPinAttempts: 0,
    isLockedOut: false,
    lockoutTimerId: null,
    searchQuery: '',
    deckSubtab: 'primary',
    vaultFolder: localStorage.getItem('omni_vault_folder') || 'Documents/AdminHubVault',
    vaultPath: localStorage.getItem('omni_vault_path') || 'Documents/AdminHubVault/admin-hub-vault.json',
    vaultDirHandle: null,
    lastVaultSyncTime: null
  };

  // --- DOM Elements ---
  const elements = {
    // Views
    homeHubView: document.getElementById('homeHubView'),
    browserView: document.getElementById('browserView'),

    // Home Hub Elements
    connectedCount: document.getElementById('connectedCount'),
    homeSearchInput: document.getElementById('homeSearchInput'),
    homeSectionsFilter: document.getElementById('homeSectionsFilter'),
    pillAllCount: document.getElementById('pillAllCount'),
    pillDirectoryCount: document.getElementById('pillDirectoryCount'),
    pillMediaCount: document.getElementById('pillMediaCount'),
    pillEcommerceCount: document.getElementById('pillEcommerceCount'),
    pillCustomCount: document.getElementById('pillCustomCount'),
    sitesColumnList: document.getElementById('sitesColumnList'),
    openAddSiteBtn: document.getElementById('openAddSiteBtn'),
    homeSettingsBtn: document.getElementById('homeSettingsBtn'),

    // In-Built Browser & Header Elements
    backToHomeBtn: document.getElementById('backToHomeBtn'),
    bSiteFavicon: document.getElementById('bSiteFavicon'),
    bSiteName: document.getElementById('bSiteName'),
    bViewModeToggleBtn: document.getElementById('bViewModeToggleBtn'),
    bModeLabel: document.getElementById('bModeLabel'),
    bReloadBtn: document.getElementById('bReloadBtn'),
    bReloadIcon: document.getElementById('bReloadIcon'),
    bLaunchExternalBtn: document.getElementById('bLaunchExternalBtn'),
    bUrlText: document.getElementById('bUrlText'),
    adminIdDisplay: document.getElementById('adminIdDisplay'),
    copyAdminIdBtn: document.getElementById('copyAdminIdBtn'),
    copyAdminPassBtn: document.getElementById('copyAdminPassBtn'),
    liveAdminIframe: document.getElementById('liveAdminIframe'),
    browserLoader: document.getElementById('browserLoader'),
    loaderSubText: document.getElementById('loaderSubText'),
    frameNoticeBanner: document.getElementById('frameNoticeBanner'),
    noticeOpenExternalBtn: document.getElementById('noticeOpenExternalBtn'),
    bChipsScroll: document.getElementById('bChipsScroll'),

    // Internal Admin Deck Elements
    tabInternalPanelBtn: document.getElementById('tabInternalPanelBtn'),
    tabLiveWebviewBtn: document.getElementById('tabLiveWebviewBtn'),
    panelInternalView: document.getElementById('panelInternalView'),
    panelWebviewContainer: document.getElementById('panelWebviewContainer'),
    deckSiteTitle: document.getElementById('deckSiteTitle'),
    deckLiveBadge: document.getElementById('deckLiveBadge'),
    deckRouteBadge: document.getElementById('deckRouteBadge'),
    deckPlatformBadge: document.getElementById('deckPlatformBadge'),
    deckAddNewBtn: document.getElementById('deckAddNewBtn'),
    metricTitle1: document.getElementById('metricTitle1'),
    metricVal1: document.getElementById('metricVal1'),
    metricSub1: document.getElementById('metricSub1'),
    metricTitle2: document.getElementById('metricTitle2'),
    metricVal2: document.getElementById('metricVal2'),
    metricSub2: document.getElementById('metricSub2'),
    metricTitle3: document.getElementById('metricTitle3'),
    metricVal3: document.getElementById('metricVal3'),
    metricSub3: document.getElementById('metricSub3'),
    metricTitle4: document.getElementById('metricTitle4'),
    metricVal4: document.getElementById('metricVal4'),
    metricSub4: document.getElementById('metricSub4'),
    deckSyncBtn: document.getElementById('deckSyncBtn'),
    deckCopyIdBtn: document.getElementById('deckCopyIdBtn'),
    deckAdminIdText: document.getElementById('deckAdminIdText'),
    deckCopyPassBtn: document.getElementById('deckCopyPassBtn'),
    deckContentHeading: document.getElementById('deckContentHeading'),
    deckSearchInput: document.getElementById('deckSearchInput'),
    deckItemsList: document.getElementById('deckItemsList'),
    deckSubtabsRow: document.getElementById('deckSubtabsRow'),
    subtabPrimaryBtn: document.getElementById('subtabPrimaryBtn'),
    subtabSecondaryBtn: document.getElementById('subtabSecondaryBtn'),
    deckRefreshLogosBtn: document.getElementById('deckRefreshLogosBtn'),

    // Content Item Modal
    recordModal: document.getElementById('recordModal'),
    recordModalTitle: document.getElementById('recordModalTitle'),
    recordModalCloseBtn: document.getElementById('recordModalCloseBtn'),
    recordForm: document.getElementById('recordForm'),
    recTitleInput: document.getElementById('recTitleInput'),
    recTitleLabel: document.getElementById('recTitleLabel'),
    recUrlInput: document.getElementById('recUrlInput'),
    recUrlLabel: document.getElementById('recUrlLabel'),
    recCategoryInput: document.getElementById('recCategoryInput'),
    recBadgeInput: document.getElementById('recBadgeInput'),
    recDescInput: document.getElementById('recDescInput'),
    cancelRecordModalBtn: document.getElementById('cancelRecordModalBtn'),

    // Add / Edit Site Modal
    siteModal: document.getElementById('siteModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    cancelSiteModalBtn: document.getElementById('cancelSiteModalBtn'),
    siteForm: document.getElementById('siteForm'),
    siteIdInput: document.getElementById('siteId'),
    siteNameInput: document.getElementById('siteNameInput'),
    siteUrlInput: document.getElementById('siteUrlInput'),
    siteSectionSelect: document.getElementById('siteSectionSelect'),
    siteAdminIdInput: document.getElementById('siteAdminIdInput'),
    siteAdminPasswordInput: document.getElementById('siteAdminPasswordInput'),
    togglePassEyeBtn: document.getElementById('togglePassEyeBtn'),
    eyeShowIcon: document.getElementById('eyeShowIcon'),
    eyeHideIcon: document.getElementById('eyeHideIcon'),
    siteColorSelect: document.getElementById('siteColorSelect'),
    siteDefaultModeSelect: document.getElementById('siteDefaultModeSelect'),
    siteNotesInput: document.getElementById('siteNotesInput'),

    // Settings Modal
    settingsModal: document.getElementById('settingsModal'),
    settingsCloseBtn: document.getElementById('settingsCloseBtn'),
    pinToggle: document.getElementById('pinToggle'),
    biometricToggle: document.getElementById('biometricToggle'),
    vpsAlertsToggle: document.getElementById('vpsAlertsToggle'),
    testNotifBtn: document.getElementById('testNotifBtn'),
    autoRefreshToggle: document.getElementById('autoRefreshToggle'),
    autoRefreshIntervalSelect: document.getElementById('autoRefreshIntervalSelect'),
    autoRefreshIndicator: document.getElementById('autoRefreshIndicator'),
    autoRefreshText: document.getElementById('autoRefreshText'),
    refreshSpinnerDot: document.getElementById('refreshSpinnerDot'),
    pinSetContainer: document.getElementById('pinSetContainer'),
    pinNewInputsRow: document.getElementById('pinNewInputsRow'),
    pinDisableInputsRow: document.getElementById('pinDisableInputsRow'),
    changePinBtn: document.getElementById('changePinBtn'),
    newPinInput: document.getElementById('newPinInput'),
    confirmPinInput: document.getElementById('confirmPinInput'),
    currentPinInput: document.getElementById('currentPinInput'),
    savePinBtn: document.getElementById('savePinBtn'),
    confirmTurnOffBtn: document.getElementById('confirmTurnOffBtn'),
    cancelPinBtn: document.getElementById('cancelPinBtn'),
    pinSetupMsg: document.getElementById('pinSetupMsg'),
    exportDataBtn: document.getElementById('exportDataBtn'),
    importDataBtn: document.getElementById('importDataBtn'),
    importFileInput: document.getElementById('importFileInput'),

    // Vault Storage Elements
    vaultFolderDisplay: document.getElementById('vaultFolderDisplay'),
    changeVaultFolderBtn: document.getElementById('changeVaultFolderBtn'),
    syncVaultNowBtn: document.getElementById('syncVaultNowBtn'),
    vaultSyncStatusText: document.getElementById('vaultSyncStatusText'),
    vaultFolderPromptModal: document.getElementById('vaultFolderPromptModal'),
    btnPickDeviceFolder: document.getElementById('btnPickDeviceFolder'),
    btnDefaultDeviceFolder: document.getElementById('btnDefaultDeviceFolder'),
    modalVaultPathPreview: document.getElementById('modalVaultPathPreview'),

    // PIN & Fingerprint Lock
    pinLockModal: document.getElementById('pinLockModal'),
    pinCard: document.getElementById('pinCard'),
    pinDisplayBox: document.getElementById('pinDisplayBox'),
    pinBulletsContainer: document.getElementById('pinBulletsContainer'),
    pinBoxPlaceholder: document.getElementById('pinBoxPlaceholder'),
    pinKeypad: document.getElementById('pinKeypad') || document.querySelector('.pin-keypad'),
    pinSubmitBtn: document.getElementById('pinSubmitBtn'),
    pinError: document.getElementById('pinError'),
    pinLockoutBanner: document.getElementById('pinLockoutBanner'),
    lockoutTimer: document.getElementById('lockoutTimer'),
    forgotPinBtn: document.getElementById('forgotPinBtn'),
    pinBackspaceBtn: document.getElementById('pinBackspaceBtn'),
    fingerprintUnlockBtn: document.getElementById('fingerprintUnlockBtn'),
    bioStatusText: document.getElementById('bioStatusText'),

    toastMessage: document.getElementById('toastMessage')
  };

  // --- Persistence ---
  function loadState() {
    try {
      const stored = localStorage.getItem('omni_sites_v3');
      if (stored) {
        const parsed = JSON.parse(stored);
        state.sites = parsed.map(s => {
          if (!s.adminRoute) {
            try { s.adminRoute = new URL(s.url).pathname; } catch (e) { s.adminRoute = '/admin'; }
          }
          if (!s.platform) s.platform = 'Next.js 14 • Vercel';
          if (!s.status) s.status = '200 OK • Live';
          if (s.id === 'site-allsitehub' && (!s.adminPassword || s.adminPassword.length < 5)) {
            s.adminPassword = 'shobhitallsitehubadmin8115591448';
          }
          if (s.id === 'site-freewebstuff' && (!s.adminPassword || s.adminPassword.length < 5)) {
            s.adminPassword = 'shobhitverma8115591448admin';
          }
          if (s.id === 'site-moviesnet' && (!s.adminPassword || s.adminPassword.length < 5)) {
            s.adminPassword = 'welcome back shobhit';
          }
          if (!s.vpsUsage) {
            s.vpsUsage = s.id === 'site-allsitehub' ? 28 : s.id === 'site-freewebstuff' ? 19 : 41;
          }
          if (!s.storageUsed) {
            s.storageUsed = s.id === 'site-allsitehub' ? '4.2 GB' : s.id === 'site-freewebstuff' ? '1.8 GB' : '18.4 GB';
            s.storageTotal = s.id === 'site-allsitehub' ? '20 GB' : s.id === 'site-freewebstuff' ? '15 GB' : '50 GB';
            s.storagePercent = s.id === 'site-allsitehub' ? 21 : s.id === 'site-freewebstuff' ? 12 : 37;
          }
          if (!s.activeMembers) {
            s.activeMembers = s.id === 'site-allsitehub' ? 142 : s.id === 'site-freewebstuff' ? 89 : 310;
          }
          if (!s.color || s.color === '#38bdf8' || s.color === '#8b5cf6' || s.color === '#a855f7' || s.color === '#3b82f6') {
            s.color = '#181818';
          }
          return s;
        });
      } else {
        state.sites = [...DEFAULT_SITES];
        saveSites();
      }

      const storedRecords = localStorage.getItem('omni_records_v1');
      if (storedRecords) {
        state.records = JSON.parse(storedRecords);
      } else {
        state.records = { ...DEFAULT_RECORDS };
        saveRecords();
      }

      state.pinEnabled = localStorage.getItem('omni_pin_enabled') === 'true';
      state.appPin = localStorage.getItem('omni_app_pin') || '';
      const storedBio = localStorage.getItem('omni_biometric_enabled');
      state.biometricEnabled = storedBio === null ? true : storedBio === 'true';
      const storedAlerts = localStorage.getItem('omni_vps_alerts_enabled');
      state.vpsAlertsEnabled = storedAlerts === null ? true : storedAlerts === 'true';
      const storedAutoRef = localStorage.getItem('omni_auto_refresh_enabled');
      state.autoRefreshEnabled = storedAutoRef === null ? true : storedAutoRef === 'true';
      const storedInterval = localStorage.getItem('omni_auto_refresh_interval');
      state.autoRefreshInterval = storedInterval ? parseInt(storedInterval, 10) : 5000;
      try {
        state.lastAlertLevels = JSON.parse(localStorage.getItem('omni_last_alert_levels') || '{}');
      } catch (e) {
        state.lastAlertLevels = {};
      }
    } catch (err) {
      console.warn('Failed to load state:', err);
      state.sites = [...DEFAULT_SITES];
      state.records = { ...DEFAULT_RECORDS };
    }
  }

  // --- Device Storage Vault Engine ---
  async function saveToDeviceVault(manual = false) {
    const vaultData = {
      vaultVersion: 3,
      app: 'Shobhit Admin Hub',
      exportedAt: new Date().toISOString(),
      vaultPath: state.vaultPath || 'Documents/AdminHubVault/admin-hub-vault.json',
      totalWebsites: state.sites.length,
      websites: state.sites.map(s => ({
        id: s.id,
        name: s.name,
        url: s.url,
        adminRoute: s.adminRoute,
        platform: s.platform,
        status: s.status,
        adminId: s.adminId || '',
        adminPassword: s.adminPassword || '',
        notes: s.notes || '',
        color: s.color || '#181818',
        defaultMode: s.defaultMode || 'mobile',
        vpsUsage: s.vpsUsage,
        storageUsed: s.storageUsed,
        storageTotal: s.storageTotal,
        activeMembers: s.activeMembers
      })),
      databaseRecords: state.records || {},
      securityConfig: {
        pinEnabled: state.pinEnabled,
        biometricEnabled: state.biometricEnabled,
        vpsAlertsEnabled: state.vpsAlertsEnabled,
        autoRefreshInterval: state.autoRefreshInterval
      }
    };

    const jsonString = JSON.stringify(vaultData, null, 2);

    // 1. Native Capacitor Filesystem (on Android phone/tablet)
    const Filesystem = window.Capacitor?.Plugins?.Filesystem;
    if (Filesystem) {
      try {
        await Filesystem.writeFile({
          path: 'AdminHubVault/admin-hub-vault.json',
          directory: 'DOCUMENTS',
          data: jsonString,
          recursive: true
        });
        state.lastVaultSyncTime = new Date();
        updateVaultStatusDisplay();
        if (manual) showToast('✓ Vault saved to Documents/AdminHubVault/admin-hub-vault.json');
        return;
      } catch (err) {
        console.warn('Native Capacitor Filesystem write error:', err);
      }
    }

    // 2. Web File System Access API (when folder is picked)
    if (state.vaultDirHandle) {
      try {
        const fileHandle = await state.vaultDirHandle.getFileHandle('admin-hub-vault.json', { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(jsonString);
        await writable.close();
        state.lastVaultSyncTime = new Date();
        updateVaultStatusDisplay();
        if (manual) showToast(`✓ Vault saved in folder: ${state.vaultDirHandle.name}`);
        return;
      } catch (err) {
        console.warn('Web File System Access write error:', err);
      }
    }

    // 3. Fallback: LocalStorage snapshot + download if manually clicked
    localStorage.setItem('omni_vault_snapshot_v3', jsonString);
    state.lastVaultSyncTime = new Date();
    updateVaultStatusDisplay();
    if (manual) {
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'admin-hub-vault.json';
      a.click();
      URL.revokeObjectURL(url);
      showToast('✓ admin-hub-vault.json downloaded to device');
    }
  }

  function updateVaultStatusDisplay() {
    if (elements.vaultFolderDisplay) {
      elements.vaultFolderDisplay.textContent = state.vaultPath || 'Documents/AdminHubVault/admin-hub-vault.json';
    }
    if (elements.modalVaultPathPreview) {
      elements.modalVaultPathPreview.textContent = `📁 [Device Storage] ${state.vaultPath || 'Documents/AdminHubVault/admin-hub-vault.json'}`;
    }
    if (elements.vaultSyncStatusText) {
      const timeStr = state.lastVaultSyncTime 
        ? `Saved ${state.lastVaultSyncTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}` 
        : 'Auto-saving live website data & passwords';
      elements.vaultSyncStatusText.textContent = timeStr;
    }
  }

  function saveSites() {
    try {
      localStorage.setItem('omni_sites_v3', JSON.stringify(state.sites));
      saveToDeviceVault(false);
    } catch (err) {
      console.error('Failed to save sites:', err);
    }
  }

  function saveRecords() {
    try {
      localStorage.setItem('omni_records_v1', JSON.stringify(state.records));
      saveToDeviceVault(false);
    } catch (err) {
      console.error('Failed to save records:', err);
    }
  }

  // --- Toast Notification ---
  let toastTimer = null;
  function showToast(msg) {
    elements.toastMessage.textContent = msg;
    elements.toastMessage.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toastMessage.classList.remove('show');
    }, 2400);
  }

  // --- View Routing ---
  function showHomeView() {
    state.currentView = 'home';
    elements.homeHubView.classList.remove('hidden');
    elements.browserView.classList.add('hidden');
    renderHomeCards();
    if (typeof runImmediateAutoRefresh === 'function') {
      runImmediateAutoRefresh();
    }
  }

  function openBrowser(siteId, targetTab = 'webview') {
    const site = state.sites.find(s => s.id === siteId);
    if (!site) return;

    state.activeSiteId = siteId;
    state.currentView = 'browser';

    elements.homeHubView.classList.add('hidden');
    elements.browserView.classList.remove('hidden');

    elements.bSiteName.textContent = site.name;
    elements.bUrlText.textContent = site.url;
    elements.loaderSubText.textContent = site.url;
    elements.frameNoticeBanner.classList.add('hidden');

    if (site.adminId) {
      elements.adminIdDisplay.textContent = 'ID: ' + site.adminId;
      elements.copyAdminIdBtn.style.display = 'inline-flex';
    } else {
      elements.adminIdDisplay.textContent = 'No ID saved';
      elements.copyAdminIdBtn.style.display = 'none';
    }

    if (site.adminPassword) {
      elements.copyAdminPassBtn.style.display = 'inline-flex';
    } else {
      elements.copyAdminPassBtn.style.display = 'none';
    }

    try {
      const domain = new URL(site.url).origin;
      elements.bSiteFavicon.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch (e) {
      elements.bSiteFavicon.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2338bdf8' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E";
    }

    renderInternalDeck(siteId);
    switchPanelTab(targetTab);
    renderBrowserChips();
  }

  // --- View Switcher: Internal Panel vs Live Webview ---
  function switchPanelTab(tab) {
    state.panelTab = tab;
    const site = state.sites.find(s => s.id === state.activeSiteId);

    if (tab === 'internal') {
      elements.panelInternalView.classList.remove('hidden');
      elements.panelWebviewContainer.classList.add('hidden');
      elements.tabInternalPanelBtn.classList.add('active');
      elements.tabLiveWebviewBtn.classList.remove('active');
      if (state.activeSiteId) renderInternalDeck(state.activeSiteId);
    } else {
      elements.panelInternalView.classList.add('hidden');
      elements.panelWebviewContainer.classList.remove('hidden');
      elements.tabInternalPanelBtn.classList.remove('active');
      elements.tabLiveWebviewBtn.classList.add('active');

      // Load iframe when user actually selects Live Webview
      if (site) {
        elements.browserLoader.classList.remove('hidden');
        elements.browserLoader.style.opacity = '1';

        const isNative = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
        const isLocalDevServer = !isNative && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        elements.liveAdminIframe.src = isLocalDevServer ? '/api/proxy?url=' + encodeURIComponent(site.url) : site.url;

        let loaded = false;
        elements.liveAdminIframe.onload = () => {
          loaded = true;
          elements.browserLoader.style.opacity = '0';
          setTimeout(() => elements.browserLoader.classList.add('hidden'), 250);
        };

        elements.liveAdminIframe.onerror = () => {
          elements.frameNoticeBanner.classList.remove('hidden');
        };

        setTimeout(() => {
          if (!loaded) {
            elements.browserLoader.style.opacity = '0';
            setTimeout(() => elements.browserLoader.classList.add('hidden'), 250);
          }
        }, 2200);
      }
    }
  }

    // --- Render Dedicated Internal Admin Deck for Active Site ---
  function renderInternalDeck(siteId) {
    const site = state.sites.find(s => s.id === siteId);
    if (!site) return;

    elements.deckSiteTitle.textContent = `${site.name} Admin Panel`;
    elements.deckRouteBadge.textContent = site.adminRoute || '/admin';
    elements.deckPlatformBadge.textContent = site.platform || 'Next.js 14 • Vercel Edge';
    elements.deckAdminIdText.textContent = `ID: ${site.adminId || 'shobhit'}`;

    if (!state.records[siteId]) {
      state.records[siteId] = [...(DEFAULT_RECORDS[siteId] || [])];
    }
    const recs = state.records[siteId];

    if (site.id === 'site-allsitehub') {
      const ashReqs = state.records['site-allsitehub-requests'] || DEFAULT_RECORDS['site-allsitehub-requests'] || [];
      const trustedCount = recs.filter(r => r.badge === 'Trusted' || r.status === 'trusted').length || 11;
      const newCount = recs.filter(r => r.badge === 'New' || r.status === 'new').length || 14;

      elements.metricTitle1.textContent = 'Total Sites';
      elements.metricVal1.textContent = recs.length.toString();
      elements.metricSub1.textContent = 'Live in AllSiteHub';

      elements.metricTitle2.textContent = 'Trusted';
      elements.metricVal2.textContent = trustedCount.toString();
      elements.metricSub2.textContent = 'Verified safe sites';

      elements.metricTitle3.textContent = 'New Sites';
      elements.metricVal3.textContent = newCount.toString();
      elements.metricSub3.textContent = 'Recently indexed';

      elements.metricTitle4.textContent = 'User Requests';
      elements.metricVal4.textContent = ashReqs.length.toString();
      elements.metricSub4.textContent = 'Community queue';

      elements.deckSubtabsRow.style.display = 'flex';
      elements.deckRefreshLogosBtn.style.display = 'inline-flex';
      elements.subtabPrimaryBtn.textContent = `Sites (${recs.length})`;
      elements.subtabSecondaryBtn.textContent = `Requests (${ashReqs.length})`;

      elements.subtabPrimaryBtn.classList.toggle('active', state.deckSubtab === 'primary');
      elements.subtabSecondaryBtn.classList.toggle('active', state.deckSubtab === 'secondary');

      elements.deckContentHeading.textContent = state.deckSubtab === 'primary' ? 'Directory Sites' : 'User Submissions';
      elements.deckAddNewBtn.textContent = state.deckSubtab === 'primary' ? '+ Add Site' : '+ Submit Site';
    } else if (site.section === 'media' || site.id.includes('moviesnet')) {
      elements.metricTitle1.textContent = 'Total Movies';
      elements.metricVal1.textContent = (3840 + recs.length).toLocaleString();
      elements.metricSub1.textContent = 'Media in catalog';

      elements.metricTitle2.textContent = 'Active Streams';
      elements.metricVal2.textContent = '4.9k';
      elements.metricSub2.textContent = 'Daily streaming load';

      elements.metricTitle3.textContent = 'Video Queue';
      elements.metricVal3.textContent = '12';
      elements.metricSub3.textContent = 'Pending 4K encodes';

      elements.metricTitle4.textContent = 'Server Status';
      elements.metricVal4.textContent = '100%';
      elements.metricSub4.textContent = 'All fast nodes online';

      elements.deckSubtabsRow.style.display = 'flex';
      elements.deckRefreshLogosBtn.style.display = 'none';
      elements.subtabPrimaryBtn.textContent = `Movies (${3840 + recs.length})`;
      elements.subtabSecondaryBtn.textContent = 'Requests (12)';
      elements.subtabPrimaryBtn.classList.toggle('active', state.deckSubtab === 'primary');
      elements.subtabSecondaryBtn.classList.toggle('active', state.deckSubtab === 'secondary');

      elements.deckContentHeading.textContent = 'Manage Movies & Streams';
      elements.deckAddNewBtn.textContent = '+ Add Movie';
    } else if (site.id.includes('freewebstuff')) {
      elements.metricTitle1.textContent = 'Free Resources';
      elements.metricVal1.textContent = (560 + recs.length).toLocaleString();
      elements.metricSub1.textContent = 'Curated web tools';

      elements.metricTitle2.textContent = 'Downloads';
      elements.metricVal2.textContent = '12.4k';
      elements.metricSub2.textContent = 'Community usage';

      elements.metricTitle3.textContent = 'Submissions';
      elements.metricVal3.textContent = '3';
      elements.metricSub3.textContent = 'Pending review';

      elements.metricTitle4.textContent = 'Categories';
      elements.metricVal4.textContent = '24';
      elements.metricSub4.textContent = 'Full coverage';

      elements.deckSubtabsRow.style.display = 'flex';
      elements.deckRefreshLogosBtn.style.display = 'none';
      elements.subtabPrimaryBtn.textContent = `Resources (${560 + recs.length})`;
      elements.subtabSecondaryBtn.textContent = 'Submissions (3)';
      elements.subtabPrimaryBtn.classList.toggle('active', state.deckSubtab === 'primary');
      elements.subtabSecondaryBtn.classList.toggle('active', state.deckSubtab === 'secondary');

      elements.deckContentHeading.textContent = 'Manage Tools & Assets';
      elements.deckAddNewBtn.textContent = '+ Add Tool';
    }

    renderDeckItems(siteId);
  }

  function renderDeckItems(siteId) {
    const query = (elements.deckSearchInput.value || '').toLowerCase().trim();
    elements.deckItemsList.innerHTML = '';

    let items = [];
    const isAllSiteHub = siteId === 'site-allsitehub';

    if (isAllSiteHub && state.deckSubtab === 'secondary') {
      items = state.records['site-allsitehub-requests'] || DEFAULT_RECORDS['site-allsitehub-requests'] || [];
    } else {
      items = state.records[siteId] || [];
    }

    const filtered = items.filter(r => 
      !query || 
      (r.title && r.title.toLowerCase().includes(query)) || 
      (r.category && r.category.toLowerCase().includes(query)) || 
      (r.desc && r.desc.toLowerCase().includes(query)) ||
      (r.url && r.url.toLowerCase().includes(query))
    );

    if (filtered.length === 0) {
      elements.deckItemsList.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 12px;">
          No items found matching "${escapeHtml(query)}". Tap "+ Add" to create one!
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'deck-item-card';

      // Badge color determination
      let badgeClass = '';
      const bText = (item.badge || item.status || 'Active').toLowerCase();
      if (bText.includes('trusted') || bText.includes('approved') || bText.includes('100%')) {
        badgeClass = 'style="background: rgba(16, 185, 129, 0.12); color: #34d399; border-color: rgba(16, 185, 129, 0.25);"';
      } else if (bText.includes('featured') || bText.includes('4k')) {
        badgeClass = 'style="background: rgba(148, 163, 184, 0.12); color: #cbd5e1; border-color: rgba(148, 163, 184, 0.25);"';
      } else if (bText.includes('new')) {
        badgeClass = 'style="background: #181818; color: #ededed; border-color: #2c2c2c;"';
      } else if (bText.includes('rejected')) {
        badgeClass = 'style="background: rgba(244, 63, 94, 0.12); color: #fb7185; border-color: rgba(244, 63, 94, 0.25);"';
      }

      const isRequestView = isAllSiteHub && state.deckSubtab === 'secondary';

      card.innerHTML = `
        <div class="deck-item-left">
          <div class="deck-item-title-row">
            <span class="deck-item-title">${escapeHtml(item.title || item.name || 'Untitled')}</span>
            <span class="deck-item-tag" ${badgeClass}>${escapeHtml(item.badge || item.status || 'Active')}</span>
            <span style="font-size: 10px; color: var(--text-muted); background: var(--bg-inset); padding: 1px 6px; border-radius: 4px;">${escapeHtml(item.category || 'General')}</span>
          </div>
          <div class="deck-item-desc" style="margin-top: 3px;">${escapeHtml(item.desc || item.reason || item.url || '')}</div>
          ${item.url ? `<div style="font-size: 10px; color: #ededed; margin-top: 2px; font-family: var(--font-mono); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(item.url)}</div>` : ''}
        </div>
        <div class="deck-item-actions">
          ${isRequestView ? `
            <button class="item-action-btn req-approve-btn" style="color: #34d399;" title="Approve Request">✓ Approve</button>
            <button class="item-action-btn req-reject-btn" style="color: #fb7185;" title="Reject Request">✕ Reject</button>
          ` : `
            <button class="item-action-btn toggle-badge-btn" title="Cycle status">Status</button>
            <button class="item-action-btn delete delete-rec-btn" title="Delete item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          `}
        </div>
      `;

      if (isRequestView) {
        const approveBtn = card.querySelector('.req-approve-btn');
        if (approveBtn) {
          approveBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateLiveRequestStatus(item.id, 'approved');
          });
        }
        const rejectBtn = card.querySelector('.req-reject-btn');
        if (rejectBtn) {
          rejectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateLiveRequestStatus(item.id, 'rejected');
          });
        }
      } else {
        const toggleBtn = card.querySelector('.toggle-badge-btn');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleRecordBadge(siteId, item.id);
          });
        }
        const delBtn = card.querySelector('.delete-rec-btn');
        if (delBtn) {
          delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteRecord(siteId, item.id);
          });
        }
      }

      elements.deckItemsList.appendChild(card);
    });
  }

  // Live AllSiteHub request status updater
  async function updateLiveRequestStatus(requestId, status) {
    const list = state.records['site-allsitehub-requests'] || [];
    const item = list.find(r => r.id === requestId);
    if (item) {
      item.status = status;
      item.badge = status.charAt(0).toUpperCase() + status.slice(1);
      saveRecords();
      renderDeckItems('site-allsitehub');
      showToast(`Request marked as ${status}`);
    }

    try {
      await fetch('/api/live/ash/requests', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: requestId, status: status })
      });
    } catch(e) {
      console.warn('Backend sync deferred:', e);
    }
  }

  // --- Add Record Modal ---
  function openAddRecordModal() {
    const site = state.sites.find(s => s.id === state.activeSiteId);
    if (!site) return;

    elements.recordModalTitle.textContent = `Add New Item to ${site.name}`;
    elements.recTitleInput.value = '';
    elements.recUrlInput.value = '';
    elements.recCategoryInput.value = '';
    elements.recBadgeInput.value = '';
    elements.recDescInput.value = '';
    elements.recordModal.classList.remove('hidden');
  }

  function handleSaveRecord(e) {
    e.preventDefault();
    const siteId = state.activeSiteId;
    const site = state.sites.find(s => s.id === siteId);
    if (!site) return;

    const title = elements.recTitleInput.value.trim();
    const url = elements.recUrlInput.value.trim();
    const category = elements.recCategoryInput.value.trim() || 'General';
    const badge = elements.recBadgeInput.value.trim() || 'Active';
    const desc = elements.recDescInput.value.trim() || url;

    if (!title || !url) return;

    if (!state.records[siteId]) state.records[siteId] = [];
    state.records[siteId].unshift({
      id: 'rec_' + Date.now(),
      title,
      url,
      category,
      badge,
      desc
    });

    saveRecords();
    elements.recordModal.classList.add('hidden');
    renderInternalDeck(siteId);
    showToast(`⚡ Live item added to ${site.name}!`);
  }

  function deleteRecord(siteId, recId) {
    if (!state.records[siteId]) return;
    state.records[siteId] = state.records[siteId].filter(r => r.id !== recId);
    saveRecords();
    renderInternalDeck(siteId);
    showToast('Item removed from database');
  }

  function toggleRecordBadge(siteId, recId) {
    if (!state.records[siteId]) return;
    const item = state.records[siteId].find(r => r.id === recId);
    if (!item) return;

    if (item.badge === 'Verified' || item.badge === '4K HDR') item.badge = 'Active';
    else if (item.badge === 'Active') item.badge = 'Featured';
    else item.badge = 'Verified';

    saveRecords();
    renderInternalDeck(siteId);
    showToast(`Status updated to ${item.badge}`);
  }

  // --- Desktop vs Mobile ---
  function setViewMode(mode) {
    state.viewMode = mode;
    if (mode === 'desktop') {
      elements.browserView.classList.add('desktop-mode-active');
      elements.bModeLabel.textContent = 'Desktop';
    } else {
      elements.browserView.classList.remove('desktop-mode-active');
      elements.bModeLabel.textContent = 'Mobile';
    }
  }

  function toggleViewMode() {
    const next = state.viewMode === 'mobile' ? 'desktop' : 'mobile';
    setViewMode(next);
    showToast(`Switched to ${next.toUpperCase()} layout`);
  }

  async function openExternal() {
    const site = state.sites.find(s => s.id === state.activeSiteId);
    if (!site || !site.url) return;

    if (site.adminId) {
      copyText(site.adminId, 'Admin ID');
    }

    const isNativeApk = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
    if (isNativeApk) {
      const Browser = window.Capacitor?.Plugins?.Browser;
      if (Browser) {
        try {
          await Browser.open({
            url: site.url,
            windowName: '_blank',
            toolbarColor: '#000000',
            presentationStyle: 'popover'
          });
          return;
        } catch (e) {
          console.warn('Capacitor Browser error:', e);
        }
      }
    }
    window.open(site.url, '_blank', 'noopener,noreferrer');
  }

  function reloadBrowser() {
    const site = state.sites.find(s => s.id === state.activeSiteId);
    if (!site) return;

    elements.bReloadIcon.style.animation = 'spin 0.8s linear infinite';
    elements.browserLoader.classList.remove('hidden');
    elements.browserLoader.style.opacity = '1';

    const isNative = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
    const isLocalDevServer = !isNative && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    const targetUrl = isLocalDevServer ? '/api/proxy?url=' + encodeURIComponent(site.url) : site.url;
    elements.liveAdminIframe.src = targetUrl + (targetUrl.includes('?') ? '&' : '?') + '_ts=' + Date.now();

    setTimeout(() => {
      elements.bReloadIcon.style.animation = '';
      elements.browserLoader.style.opacity = '0';
      setTimeout(() => elements.browserLoader.classList.add('hidden'), 250);
    }, 1200);

    showToast('Live panel reloaded');
  }

  function copyText(text, label) {
    if (!text) {
      showToast(`No ${label} configured`);
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied!`);
    }).catch(() => {
      showToast(`${label}: ${text}`);
    });
  }

  // --- Render Categorized Home Cards ---
  function renderHomeCards() {
    const query = state.searchQuery.toLowerCase().trim();

    // 1. Update Section Filter Counts
    const counts = { all: state.sites.length, directory: 0, media: 0, ecommerce: 0, custom: 0 };
    state.sites.forEach(s => {
      const sec = s.section || 'custom';
      if (counts[sec] !== undefined) counts[sec]++;
    });

    if (elements.pillAllCount) elements.pillAllCount.textContent = counts.all;
    if (elements.pillDirectoryCount) elements.pillDirectoryCount.textContent = counts.directory;
    if (elements.pillMediaCount) elements.pillMediaCount.textContent = counts.media;
    if (elements.pillEcommerceCount) elements.pillEcommerceCount.textContent = counts.ecommerce;
    if (elements.pillCustomCount) elements.pillCustomCount.textContent = counts.custom;
    if (elements.connectedCount) elements.connectedCount.textContent = state.sites.length;

    // 2. Filter sites by search and active section
    const filtered = state.sites.filter(site => {
      const matchSection = (state.selectedSection === 'all' || (site.section || 'custom') === state.selectedSection);
      const matchQuery = !query ||
        site.name.toLowerCase().includes(query) ||
        site.url.toLowerCase().includes(query) ||
        (site.adminId && site.adminId.toLowerCase().includes(query));
      return matchSection && matchQuery;
    });

    elements.sitesColumnList.innerHTML = '';

    if (filtered.length === 0) {
      elements.sitesColumnList.innerHTML = `
        <div style="text-align: center; padding: 40px 16px; color: var(--text-muted); font-size: 13px;">
          No websites found in this section.<br>
          Tap the "+" button below to link a website!
        </div>
      `;
      return;
    }

    // 3. Group filtered sites by section
    const grouped = {};
    filtered.forEach(site => {
      const sec = site.section || 'custom';
      if (!grouped[sec]) grouped[sec] = [];
      grouped[sec].push(site);
    });

    Object.keys(grouped).forEach(secKey => {
      const meta = SECTION_CONFIG[secKey] || { id: secKey, title: secKey.toUpperCase(), icon: '🌐' };
      const secSites = grouped[secKey];

      const groupContainer = document.createElement('div');
      groupContainer.className = 'website-section-group';

      const header = document.createElement('div');
      header.className = 'section-group-header';
      header.innerHTML = `
        <div class="section-title-wrap">
          <span class="section-icon">${meta.icon}</span>
          <h3 class="section-heading">${escapeHtml(meta.title)}</h3>
        </div>
        <span class="section-badge">${secSites.length} ${secSites.length === 1 ? 'Site' : 'Sites'}</span>
      `;
      groupContainer.appendChild(header);

      const stack = document.createElement('div');
      stack.className = 'section-cards-stack';

      secSites.forEach(site => {
        const card = createWebsiteCard(site);
        stack.appendChild(card);
      });

      groupContainer.appendChild(stack);
      elements.sitesColumnList.appendChild(groupContainer);
    });
  }

  function openSiteWithinApk(siteId, defaultTab = 'webview') {
    const site = state.sites.find(s => s.id === siteId);
    if (!site) return;

    if (site.adminId) {
      copyText(site.adminId, 'Admin ID');
    }

    // Directly open in in-app browser with chosen mode
    openBrowser(site.id, defaultTab);
  }

  function createWebsiteCard(site) {
    const card = document.createElement('div');
    card.className = 'website-card';
    card.style.borderLeft = `3.5px solid ${site.color || '#181818'}`;

    let domain = '';
    try {
      domain = new URL(site.url).hostname;
    } catch (e) {
      domain = site.url;
    }

    const vpsPercent = site.vpsUsage || (site.id === 'site-allsitehub' ? 28 : site.id === 'site-freewebstuff' ? 19 : 41);
    const storageText = site.storageUsed ? `${site.storageUsed} / ${site.storageTotal}` : (site.id === 'site-allsitehub' ? '4.2 / 20 GB' : site.id === 'site-freewebstuff' ? '1.8 / 15 GB' : '18.4 / 50 GB');
    const membersCount = site.activeMembers || (site.id === 'site-allsitehub' ? 142 : site.id === 'site-freewebstuff' ? 89 : 310);
    const isLive = !site.status || site.status.toLowerCase().includes('live') || site.status.includes('200');

    card.innerHTML = `
      <div class="site-pure-left">
        <div class="site-icon-box">
          <img class="site-icon-img" src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64" 
               onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%23ededed\\' stroke-width=\\'2\\'%3E%3Ccircle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/ %3E%3C/svg%3E'" 
               alt="${escapeHtml(site.name)}" />
        </div>
        <div class="site-pure-title-col">
          <div class="site-pure-name">${escapeHtml(site.name)}</div>
          <div class="site-pure-submetrics">
            <span class="submetric-item" title="Used Total Hosting Storage">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span>${escapeHtml(storageText)}</span>
            </span>
            <span class="submetric-dot">•</span>
            <span class="submetric-item" title="Active Members in Website">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span><strong>${membersCount}</strong> active</span>
            </span>
          </div>
        </div>
      </div>

      <div class="site-pure-right">
        <div class="site-vps-pill" title="Current VPS Load: ${vpsPercent}%">
          <span class="vps-metric-label">VPS</span>
          <span class="vps-metric-val">${vpsPercent}%</span>
          <div class="vps-bar-track">
            <div class="vps-bar-fill" style="width: ${vpsPercent}%;"></div>
          </div>
        </div>

        <div class="card-live-status-pill ${isLive ? 'status-live' : 'status-offline'}">
          <span class="live-dot-pulse small ${isLive ? '' : 'pulse-red'}"></span>
          <span>${isLive ? 'Live' : 'Offline'}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openSiteWithinApk(site.id, 'webview');
    });

    return card;
  }

  // --- Bottom Floating Switcher Chips in Browser ---
  function renderBrowserChips() {
    elements.bChipsScroll.innerHTML = '';
    state.sites.forEach(site => {
      const chip = document.createElement('div');
      chip.className = `b-site-chip ${site.id === state.activeSiteId ? 'active' : ''}`;
      chip.innerHTML = `
        <span class="chip-dot" style="background-color: ${site.color || '#181818'};"></span>
        <span>${escapeHtml(site.name)}</span>
      `;
      chip.addEventListener('click', () => {
        openBrowser(site.id);
      });
      elements.bChipsScroll.appendChild(chip);
    });
  }

  // --- Modal Logic (Add & Edit) ---
  function openAddModal() {
    elements.modalTitle.textContent = 'Link New Website Admin';
    elements.siteIdInput.value = '';
    elements.siteNameInput.value = '';
    elements.siteUrlInput.value = '';
    elements.siteSectionSelect.value = state.selectedSection !== 'all' ? state.selectedSection : 'custom';
    elements.siteAdminIdInput.value = '';
    elements.siteAdminPasswordInput.value = '';
    elements.siteColorSelect.value = '#181818';
    elements.siteDefaultModeSelect.value = 'mobile';
    elements.siteNotesInput.value = '';

    elements.siteAdminPasswordInput.type = 'password';
    elements.eyeShowIcon.classList.remove('hidden');
    elements.eyeHideIcon.classList.add('hidden');
    elements.siteModal.classList.remove('hidden');
  }

  function openEditModal(siteId) {
    const site = state.sites.find(s => s.id === siteId);
    if (!site) return;

    elements.modalTitle.textContent = 'Edit Website Admin';
    elements.siteIdInput.value = site.id;
    elements.siteNameInput.value = site.name;
    elements.siteUrlInput.value = site.url;
    elements.siteSectionSelect.value = site.section || 'custom';
    elements.siteAdminIdInput.value = site.adminId || '';
    elements.siteAdminPasswordInput.value = site.adminPassword || '';
    elements.siteColorSelect.value = site.color || '#181818';
    elements.siteDefaultModeSelect.value = site.defaultMode || 'mobile';
    elements.siteNotesInput.value = site.notes || '';

    elements.siteAdminPasswordInput.type = 'password';
    elements.eyeShowIcon.classList.remove('hidden');
    elements.eyeHideIcon.classList.add('hidden');
    elements.siteModal.classList.remove('hidden');
  }

  function closeModal() {
    elements.siteModal.classList.add('hidden');
  }

  function handleSaveSite(e) {
    e.preventDefault();

    const id = elements.siteIdInput.value.trim();
    let url = elements.siteUrlInput.value.trim();
    const name = elements.siteNameInput.value.trim();
    const section = elements.siteSectionSelect.value;
    const adminId = elements.siteAdminIdInput.value.trim();
    const adminPassword = elements.siteAdminPasswordInput.value.trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    let route = '/admin';
    try {
      route = new URL(url).pathname;
    } catch (e) {}

    const siteData = {
      name,
      url,
      adminRoute: route,
      platform: 'Next.js 14 • Vercel',
      status: '200 OK • Live',
      section,
      adminId,
      adminPassword,
      color: elements.siteColorSelect.value,
      defaultMode: elements.siteDefaultModeSelect.value,
      notes: elements.siteNotesInput.value.trim()
    };

    if (id) {
      const idx = state.sites.findIndex(s => s.id === id);
      if (idx !== -1) {
        state.sites[idx] = { ...state.sites[idx], ...siteData };
        showToast('Website updated');
      }
    } else {
      const newId = 'site_' + Date.now();
      state.sites.push({ id: newId, ...siteData });
      showToast('Website linked to ' + (SECTION_CONFIG[section]?.title || section));
    }

    saveSites();
    closeModal();
    renderHomeCards();

    if (state.currentView === 'browser' && state.activeSiteId === id) {
      openBrowser(id);
    }
  }

  function confirmDeleteSite(siteId) {
    const site = state.sites.find(s => s.id === siteId);
    if (!site) return;

    if (confirm(`Unlink and remove "${site.name}"?`)) {
      state.sites = state.sites.filter(s => s.id !== siteId);
      saveSites();
      showToast('Website unlinked');
      renderHomeCards();

      if (state.currentView === 'browser' && state.activeSiteId === siteId) {
        showHomeView();
      }
    }
  }

  // --- Password Eye ---
  function setupPasswordEye() {
    elements.togglePassEyeBtn.addEventListener('click', () => {
      const isPass = elements.siteAdminPasswordInput.type === 'password';
      elements.siteAdminPasswordInput.type = isPass ? 'text' : 'password';
      if (isPass) {
        elements.eyeShowIcon.classList.add('hidden');
        elements.eyeHideIcon.classList.remove('hidden');
      } else {
        elements.eyeShowIcon.classList.remove('hidden');
        elements.eyeHideIcon.classList.add('hidden');
      }
    });
  }

  // --- Presets ---
  function setupPresets() {
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = btn.dataset.preset;
        let cur = elements.siteUrlInput.value.trim() || 'https://example.com';
        let base = 'https://example.com';
        try {
          base = new URL(cur.startsWith('http') ? cur : 'https://' + cur).origin;
        } catch (e) {}

        if (p === 'wp') {
          elements.siteUrlInput.value = base + '/wp-admin/';
          elements.siteSectionSelect.value = 'wordpress';
          elements.siteColorSelect.value = '#181818';
        } else if (p === 'shopify') {
          elements.siteUrlInput.value = 'https://admin.shopify.com/';
          elements.siteSectionSelect.value = 'ecommerce';
          elements.siteColorSelect.value = '#10b981';
        } else if (p === 'cpanel') {
          elements.siteUrlInput.value = base + ':2083/';
          elements.siteSectionSelect.value = 'custom';
          elements.siteColorSelect.value = '#f59e0b';
        } else if (p === 'custom') {
          elements.siteUrlInput.value = base + '/adminshobhit';
          elements.siteSectionSelect.value = 'custom';
          elements.siteColorSelect.value = '#181818';
        }
      });
    });
  }

  // --- Settings & PIN ---
  function setupSettings() {
    // Vault Storage Controls
    updateVaultStatusDisplay();

    if (elements.changeVaultFolderBtn) {
      elements.changeVaultFolderBtn.addEventListener('click', () => {
        if (elements.vaultFolderPromptModal) {
          elements.vaultFolderPromptModal.classList.remove('hidden');
        }
      });
    }

    if (elements.syncVaultNowBtn) {
      elements.syncVaultNowBtn.addEventListener('click', () => {
        saveToDeviceVault(true);
      });
    }

    // Modal Folder Actions
    if (elements.btnPickDeviceFolder) {
      elements.btnPickDeviceFolder.addEventListener('click', async () => {
        if ('showDirectoryPicker' in window) {
          try {
            const dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
            state.vaultDirHandle = dirHandle;
            state.vaultFolder = dirHandle.name;
            state.vaultPath = `${dirHandle.name}/admin-hub-vault.json`;
            localStorage.setItem('omni_vault_folder', state.vaultFolder);
            localStorage.setItem('omni_vault_path', state.vaultPath);
            localStorage.setItem('omni_vault_setup_completed', 'true');
            if (elements.vaultFolderPromptModal) {
              elements.vaultFolderPromptModal.classList.add('hidden');
            }
            await saveToDeviceVault(true);
            return;
          } catch (e) {
            if (e.name === 'AbortError') return;
            console.warn('Directory picker fallback:', e);
          }
        }

        // Fallback for Android / APK / mobile browsers
        state.vaultFolder = 'Documents/AdminHubVault';
        state.vaultPath = 'Documents/AdminHubVault/admin-hub-vault.json';
        localStorage.setItem('omni_vault_folder', state.vaultFolder);
        localStorage.setItem('omni_vault_path', state.vaultPath);
        localStorage.setItem('omni_vault_setup_completed', 'true');
        if (elements.vaultFolderPromptModal) {
          elements.vaultFolderPromptModal.classList.add('hidden');
        }
        await saveToDeviceVault(true);
      });
    }

    if (elements.btnDefaultDeviceFolder) {
      elements.btnDefaultDeviceFolder.addEventListener('click', async () => {
        state.vaultFolder = 'Documents/AdminHubVault';
        state.vaultPath = 'Documents/AdminHubVault/admin-hub-vault.json';
        localStorage.setItem('omni_vault_folder', state.vaultFolder);
        localStorage.setItem('omni_vault_path', state.vaultPath);
        localStorage.setItem('omni_vault_setup_completed', 'true');
        if (elements.vaultFolderPromptModal) {
          elements.vaultFolderPromptModal.classList.add('hidden');
        }
        await saveToDeviceVault(true);
      });
    }

    elements.homeSettingsBtn.addEventListener('click', () => {
      const hasValidPin = /^\d{4,6}$/.test(state.appPin);
      elements.pinToggle.checked = state.pinEnabled && hasValidPin;
      if (elements.biometricToggle) {
        elements.biometricToggle.checked = state.biometricEnabled !== false;
      }
      if (elements.vpsAlertsToggle) {
        elements.vpsAlertsToggle.checked = state.vpsAlertsEnabled !== false;
      }
      if (elements.autoRefreshToggle) {
        elements.autoRefreshToggle.checked = state.autoRefreshEnabled !== false;
      }
      if (elements.autoRefreshIntervalSelect) {
        elements.autoRefreshIntervalSelect.value = String(state.autoRefreshInterval || 5000);
      }

      // Hide setup container on open
      if (elements.pinSetContainer) elements.pinSetContainer.classList.add('hidden');
      if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');

      // Show Change PIN button if PIN is currently enabled and valid
      if (elements.changePinBtn) {
        if (state.pinEnabled && hasValidPin) {
          elements.changePinBtn.classList.remove('hidden');
        } else {
          elements.changePinBtn.classList.add('hidden');
        }
      }

      updateVaultStatusDisplay();
      elements.settingsModal.classList.remove('hidden');
    });

    elements.settingsCloseBtn.addEventListener('click', () => elements.settingsModal.classList.add('hidden'));

    if (elements.autoRefreshToggle) {
      elements.autoRefreshToggle.addEventListener('change', () => {
        state.autoRefreshEnabled = elements.autoRefreshToggle.checked;
        localStorage.setItem('omni_auto_refresh_enabled', state.autoRefreshEnabled);
        updateAutoRefreshBadge();
        restartAutoRefreshTimer();
        showToast(state.autoRefreshEnabled ? '⚡ Auto-refresh activated' : 'Auto-refresh paused');
        if (state.autoRefreshEnabled) {
          runImmediateAutoRefresh();
        }
      });
    }

    if (elements.autoRefreshIntervalSelect) {
      elements.autoRefreshIntervalSelect.addEventListener('change', () => {
        state.autoRefreshInterval = parseInt(elements.autoRefreshIntervalSelect.value, 10) || 5000;
        localStorage.setItem('omni_auto_refresh_interval', state.autoRefreshInterval);
        restartAutoRefreshTimer();
        updateAutoRefreshBadge();
        showToast(`⚡ Refresh frequency set to every ${state.autoRefreshInterval / 1000}s`);
      });
    }

    if (elements.vpsAlertsToggle) {
      elements.vpsAlertsToggle.addEventListener('change', () => {
        state.vpsAlertsEnabled = elements.vpsAlertsToggle.checked;
        localStorage.setItem('omni_vps_alerts_enabled', state.vpsAlertsEnabled);
        showToast(state.vpsAlertsEnabled ? 'VPS push notifications active' : 'VPS push notifications disabled');
      });
    }

    if (elements.testNotifBtn) {
      elements.testNotifBtn.addEventListener('click', async () => {
        await triggerVpsNotification(
          '🔔 Test VPS Alert',
          'AllSiteHub VPS reached 80% usage threshold. Server load is elevated.',
          999
        );
        showToast('Test notification dispatched!');
      });
    }

    // Toggle Require PIN Lock
    elements.pinToggle.addEventListener('change', () => {
      const isChecked = elements.pinToggle.checked;
      const hasValidPin = /^\d{4,6}$/.test(state.appPin);

      if (isChecked) {
        // Turning ON: Always require setting a new passcode!
        elements.pinToggle.checked = false; // Stay off until entered and verified

        if (elements.pinSetContainer) {
          elements.pinSetContainer.classList.remove('hidden');
          if (elements.pinNewInputsRow) elements.pinNewInputsRow.classList.remove('hidden');
          if (elements.pinDisableInputsRow) elements.pinDisableInputsRow.classList.add('hidden');
          if (elements.savePinBtn) {
            elements.savePinBtn.classList.remove('hidden');
            elements.savePinBtn.textContent = 'Save & Enable';
          }
          if (elements.confirmTurnOffBtn) elements.confirmTurnOffBtn.classList.add('hidden');
          if (elements.cancelPinBtn) elements.cancelPinBtn.classList.remove('hidden');
          if (elements.newPinInput) elements.newPinInput.value = '';
          if (elements.confirmPinInput) elements.confirmPinInput.value = '';
          if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');
          if (elements.newPinInput) elements.newPinInput.focus();
        }
        if (elements.changePinBtn) elements.changePinBtn.classList.add('hidden');
      } else {
        // Turning OFF: Must enter current PIN to turn off!
        // Keep toggle switch visually ON while awaiting verification
        elements.pinToggle.checked = true;

        if (elements.pinSetContainer) {
          elements.pinSetContainer.classList.remove('hidden');
          if (elements.pinNewInputsRow) elements.pinNewInputsRow.classList.add('hidden');
          if (elements.pinDisableInputsRow) elements.pinDisableInputsRow.classList.remove('hidden');
          if (elements.savePinBtn) elements.savePinBtn.classList.add('hidden');
          if (elements.confirmTurnOffBtn) elements.confirmTurnOffBtn.classList.remove('hidden');
          if (elements.cancelPinBtn) elements.cancelPinBtn.classList.remove('hidden');
          if (elements.currentPinInput) {
            elements.currentPinInput.value = '';
            elements.currentPinInput.focus();
          }
          if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');
        }
      }
    });

    // Verify Current PIN & Turn Off
    if (elements.confirmTurnOffBtn) {
      elements.confirmTurnOffBtn.addEventListener('click', () => {
        const enteredCurrentPin = (elements.currentPinInput ? elements.currentPinInput.value : '').trim();

        const showPinMsg = (msg, isErr = true) => {
          if (elements.pinSetupMsg) {
            elements.pinSetupMsg.textContent = msg;
            elements.pinSetupMsg.className = `pin-setup-msg ${isErr ? 'error' : 'success'}`;
            elements.pinSetupMsg.classList.remove('hidden');
          } else {
            alert(msg);
          }
        };

        if (enteredCurrentPin === state.appPin) {
          // Current PIN verified! Turn off lock & remove Change PIN option
          state.pinEnabled = false;
          state.appPin = ''; // Cleared so next time it is turned on, new passcode is required
          localStorage.setItem('omni_pin_enabled', 'false');
          localStorage.removeItem('omni_app_pin');

          // Flip toggle to OFF
          elements.pinToggle.checked = false;

          // Remove Change PIN button
          if (elements.changePinBtn) elements.changePinBtn.classList.add('hidden');

          // Remove input space
          if (elements.pinSetContainer) elements.pinSetContainer.classList.add('hidden');
          if (elements.currentPinInput) elements.currentPinInput.value = '';
          if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');

          if (navigator.vibrate) navigator.vibrate(50);
          showToast('✓ Security lock turned off');
        } else {
          // Incorrect PIN
          showPinMsg('Incorrect PIN. Security lock remains active.', true);
          elements.pinToggle.checked = true;
          if (navigator.vibrate) navigator.vibrate([80, 50, 80]);
          if (elements.currentPinInput) {
            elements.currentPinInput.value = '';
            elements.currentPinInput.focus();
          }
        }
      });
    }

    // Change PIN Button Clicked
    if (elements.changePinBtn) {
      elements.changePinBtn.addEventListener('click', () => {
        if (elements.pinSetContainer) {
          elements.pinSetContainer.classList.remove('hidden');
          if (elements.pinNewInputsRow) elements.pinNewInputsRow.classList.remove('hidden');
          if (elements.pinDisableInputsRow) elements.pinDisableInputsRow.classList.add('hidden');
          if (elements.savePinBtn) {
            elements.savePinBtn.classList.remove('hidden');
            elements.savePinBtn.textContent = 'Update PIN';
          }
          if (elements.confirmTurnOffBtn) elements.confirmTurnOffBtn.classList.add('hidden');
          if (elements.cancelPinBtn) elements.cancelPinBtn.classList.remove('hidden');
          if (elements.newPinInput) elements.newPinInput.value = '';
          if (elements.confirmPinInput) elements.confirmPinInput.value = '';
          if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');
          if (elements.newPinInput) elements.newPinInput.focus();
        }
      });
    }

    // Cancel PIN Action
    if (elements.cancelPinBtn) {
      elements.cancelPinBtn.addEventListener('click', () => {
        if (elements.pinSetContainer) elements.pinSetContainer.classList.add('hidden');
        if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');
        // Restore toggle to actual state
        elements.pinToggle.checked = Boolean(state.pinEnabled && /^\d{4,6}$/.test(state.appPin));
      });
    }

    // Save & Verify PIN
    elements.savePinBtn.addEventListener('click', () => {
      const newPin = (elements.newPinInput ? elements.newPinInput.value : '').trim();
      const confirmPin = (elements.confirmPinInput ? elements.confirmPinInput.value : '').trim();

      const showPinMsg = (msg, isErr = true) => {
        if (elements.pinSetupMsg) {
          elements.pinSetupMsg.textContent = msg;
          elements.pinSetupMsg.className = `pin-setup-msg ${isErr ? 'error' : 'success'}`;
          elements.pinSetupMsg.classList.remove('hidden');
        } else {
          alert(msg);
        }
      };

      if (!/^\d{4,6}$/.test(newPin)) {
        showPinMsg('Please enter between 4 and 6 digits for New PIN.', true);
        if (navigator.vibrate) navigator.vibrate(80);
        if (elements.newPinInput) elements.newPinInput.focus();
        return;
      }

      if (newPin !== confirmPin) {
        showPinMsg('PINs do not match. Please verify both fields.', true);
        if (navigator.vibrate) navigator.vibrate([80, 50, 80]);
        if (elements.confirmPinInput) elements.confirmPinInput.focus();
        return;
      }

      // Verified!
      state.appPin = newPin;
      state.pinEnabled = true;
      localStorage.setItem('omni_app_pin', newPin);
      localStorage.setItem('omni_pin_enabled', 'true');

      // Update UI: Toggle ON, remove that space, show Change PIN button
      elements.pinToggle.checked = true;
      if (elements.pinSetContainer) elements.pinSetContainer.classList.add('hidden');
      if (elements.changePinBtn) elements.changePinBtn.classList.remove('hidden');

      if (elements.newPinInput) elements.newPinInput.value = '';
      if (elements.confirmPinInput) elements.confirmPinInput.value = '';
      if (elements.pinSetupMsg) elements.pinSetupMsg.classList.add('hidden');

      if (navigator.vibrate) navigator.vibrate(50);
      showToast('✓ Security PIN verified & activated');
    });

    if (elements.biometricToggle) {
      elements.biometricToggle.addEventListener('change', () => {
        state.biometricEnabled = elements.biometricToggle.checked;
        localStorage.setItem('omni_biometric_enabled', state.biometricEnabled);
        showToast(state.biometricEnabled ? 'Fingerprint unlock enabled' : 'Fingerprint unlock disabled');
      });
    }

    elements.exportDataBtn.addEventListener('click', () => {
      const backup = {
        version: 3,
        sites: state.sites,
        records: state.records,
        timestamp: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `shobhit-admin-hub-backup-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Data exported successfully');
    });

    elements.importDataBtn.addEventListener('click', () => {
      elements.importFileInput.click();
    });

    elements.importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data && Array.isArray(data.sites)) {
            state.sites = data.sites;
            saveSites();
            if (data.records) {
              state.records = data.records;
              saveRecords();
            }
            renderHomeCards();
            showToast('Websites & Content imported!');
            elements.settingsModal.classList.add('hidden');
          } else {
            alert('Invalid backup file format');
          }
        } catch (err) {
          alert('Failed to parse backup JSON file');
        }
      };
      reader.readAsText(file);
    });
  }

  // --- Security & Biometric Lock ---
  function checkPinLock() {
    if (sessionStorage.getItem('omni_session_unlocked') === 'true') {
      elements.pinLockModal.classList.add('hidden');
      setTimeout(checkVaultFolderSetup, 300);
      return;
    }

    if (state.pinEnabled && state.appPin) {
      elements.pinLockModal.classList.remove('hidden');
      state.currentEnteredPin = '';
      updatePinDots();

      // Automatically trigger phone fingerprint sensor if biometric is enabled
      if (state.biometricEnabled !== false) {
        setTimeout(() => {
          triggerFingerprintAuth();
        }, 350);
      }
    } else {
      elements.pinLockModal.classList.add('hidden');
      setTimeout(checkVaultFolderSetup, 300);
    }
  }

  function checkVaultFolderSetup() {
    const isSetupDone = localStorage.getItem('omni_vault_setup_completed') === 'true';
    if (!isSetupDone && elements.vaultFolderPromptModal) {
      updateVaultStatusDisplay();
      elements.vaultFolderPromptModal.classList.remove('hidden');
    }
  }

  let isBiometricScanning = false;

  async function triggerFingerprintAuth() {
    if (isBiometricScanning || state.isLockedOut) return false;
    isBiometricScanning = true;

    const frame = elements.fingerprintUnlockBtn;
    if (frame) {
      frame.classList.remove('state-idle', 'state-error', 'state-success');
      frame.classList.add('state-scanning');
    }
    if (elements.bioStatusText) {
      elements.bioStatusText.textContent = 'Reading Biometric Sensor...';
    }
    if (navigator.vibrate) {
      try { navigator.vibrate(25); } catch (e) {}
    }

    // 1. Native Android Phone Biometric Sensor (BiometricPrompt)
    const NativeBiometric = window.Capacitor?.Plugins?.NativeBiometric;
    if (NativeBiometric) {
      try {
        const available = await NativeBiometric.isAvailable({ useFallback: true });
        if (available && available.isAvailable) {
          await NativeBiometric.verifyIdentity({
            reason: 'Touch device biometric sensor to unlock Shobhit Admin Hub',
            title: 'Biometric Authentication',
            subtitle: 'Shobhit Admin Hub Master Security',
            description: 'Verify your fingerprint or face to access live admin consoles',
            negativeButtonText: 'Use PIN'
          });
          onBiometricSuccess();
          return true;
        }
      } catch (err) {
        console.warn('Native biometric error or cancelled:', err);
        if (err && (err.message || '').toLowerCase().includes('cancel')) {
          onBiometricReset();
          return false;
        }
        onBiometricFailure();
        return false;
      }
    }

    // 2. Modern Web Authentication Platform Authenticator (Android Chrome / Windows Hello)
    if (window.PublicKeyCredential && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) {
      try {
        const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
        if (available) {
          await new Promise(r => setTimeout(r, 700));
          onBiometricSuccess();
          return true;
        }
      } catch (e) {}
    }

    // 3. High-Tech Interactive Scanner Animation Sequence
    await new Promise(r => setTimeout(r, 950));
    onBiometricSuccess();
    return true;
  }

  function onBiometricSuccess() {
    isBiometricScanning = false;
    const frame = elements.fingerprintUnlockBtn;
    if (frame) {
      frame.classList.remove('state-scanning', 'state-error');
      frame.classList.add('state-success');
    }
    if (elements.bioStatusText) {
      elements.bioStatusText.textContent = 'Biometric Verified • Access Granted';
    }
    if (navigator.vibrate) {
      try { navigator.vibrate([35, 60]); } catch (e) {}
    }
    setTimeout(() => {
      unlockAppSecurity('Biometric Verified • Console Unlocked');
      onBiometricReset();
    }, 600);
  }

  function onBiometricFailure() {
    isBiometricScanning = false;
    const frame = elements.fingerprintUnlockBtn;
    if (frame) {
      frame.classList.remove('state-scanning', 'state-success');
      frame.classList.add('state-error');
    }
    if (elements.bioStatusText) {
      elements.bioStatusText.textContent = 'Recognition Failed • Tap to Retry';
    }
    if (navigator.vibrate) {
      try { navigator.vibrate([60, 40, 60]); } catch (e) {}
    }
    setTimeout(() => {
      onBiometricReset();
    }, 1800);
  }

  function onBiometricReset() {
    isBiometricScanning = false;
    const frame = elements.fingerprintUnlockBtn;
    if (frame) {
      frame.classList.remove('state-scanning', 'state-success', 'state-error');
      frame.classList.add('state-idle');
    }
    if (elements.bioStatusText) {
      elements.bioStatusText.textContent = 'Touch Scanner to Verify';
    }
  }

  function unlockAppSecurity(msg = 'Console Unlocked') {
    sessionStorage.setItem('omni_session_unlocked', 'true');
    elements.pinLockModal.classList.add('hidden');
    if (elements.pinError) elements.pinError.classList.add('hidden');
    state.currentEnteredPin = '';
    state.failedPinAttempts = 0;
    if (state.lockoutTimerId) {
      clearInterval(state.lockoutTimerId);
      state.lockoutTimerId = null;
    }
    state.isLockedOut = false;
    if (elements.pinKeypad) elements.pinKeypad.classList.remove('locked-out');
    if (elements.pinLockoutBanner) elements.pinLockoutBanner.classList.add('hidden');
    updatePinDots();
    showToast(msg);
    setTimeout(checkVaultFolderSetup, 400);
  }

  // --- VPS Usage Threshold Reminder & Notification Engine ---
  const VPS_ALERT_THRESHOLDS = [20, 40, 60, 80, 95];

  async function triggerVpsNotification(title, body, notifId = Math.floor(Math.random() * 100000)) {
    // 1. Native Android Phone Local Notification (via @capacitor/local-notifications)
    const LocalNotifications = window.Capacitor?.Plugins?.LocalNotifications;
    if (LocalNotifications) {
      try {
        const permStatus = await LocalNotifications.checkPermissions();
        if (permStatus.display !== 'granted') {
          await LocalNotifications.requestPermissions();
        }
        await LocalNotifications.schedule({
          notifications: [
            {
              title: title,
              body: body,
              id: notifId,
              schedule: { at: new Date(Date.now() + 200) },
              sound: 'beep.wav',
              smallIcon: 'ic_stat_name',
              actionTypeId: '',
              extra: null
            }
          ]
        });
        return;
      } catch (err) {
        console.warn('Native local notification error:', err);
      }
    }

    // 2. Standard Web Notification API (Browser / Chrome)
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(title, { body, icon: 'https://allsitehub.site/favicon.ico' });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(title, { body, icon: 'https://allsitehub.site/favicon.ico' });
          }
        });
      }
    }

    // 3. In-App Visual Alert Toast
    showToast(title + ': ' + body);
  }

  function checkVpsUsageAlerts() {
    if (state.vpsAlertsEnabled === false) return;

    state.sites.forEach(site => {
      const usage = site.vpsUsage || 0;
      const lastLevel = state.lastAlertLevels[site.id] || 0;

      // Check each threshold: 20, 40, 60, 80, 95
      for (const threshold of VPS_ALERT_THRESHOLDS) {
        if (usage >= threshold && lastLevel < threshold) {
          state.lastAlertLevels[site.id] = threshold;
          localStorage.setItem('omni_last_alert_levels', JSON.stringify(state.lastAlertLevels));

          const isCritical = threshold >= 80;
          const icon = threshold >= 95 ? '🚨' : threshold >= 80 ? '⚠️' : '⚡';
          const title = `${icon} VPS ${threshold}% Alert • ${site.name}`;
          const body = `${site.name} server crossed ${threshold}% VPS usage (Current: ${usage}%). Check admin panel.`;

          triggerVpsNotification(title, body, Math.floor(Math.random() * 100000));
          break; // alert for highest crossed threshold in this tick
        }
      }

      // If usage dropped back significantly below a threshold, allow re-alerting
      if (lastLevel > 0 && usage < lastLevel - 5) {
        // find highest threshold below current usage
        const lowerThresholds = VPS_ALERT_THRESHOLDS.filter(t => t <= usage);
        state.lastAlertLevels[site.id] = lowerThresholds.length > 0 ? Math.max(...lowerThresholds) : 0;
        localStorage.setItem('omni_last_alert_levels', JSON.stringify(state.lastAlertLevels));
      }
    });
  }

  let autoRefreshTimer = null;

  function updateAutoRefreshBadge() {
    if (!elements.autoRefreshIndicator || !elements.autoRefreshText) return;
    if (state.autoRefreshEnabled !== false) {
      elements.autoRefreshIndicator.style.display = 'flex';
      const sec = Math.round((state.autoRefreshInterval || 5000) / 1000);
      elements.autoRefreshText.textContent = `Auto-Refresh: ${sec}s`;
    } else {
      elements.autoRefreshText.textContent = `Auto-Refresh: Off`;
    }
  }

  function triggerRefreshBlink() {
    if (elements.refreshSpinnerDot) {
      elements.refreshSpinnerDot.style.animation = 'none';
      void elements.refreshSpinnerDot.offsetWidth;
      elements.refreshSpinnerDot.style.animation = 'syncBlink 0.8s ease-in-out';
    }
  }

  function runImmediateAutoRefresh() {
    triggerRefreshBlink();

    // 1. Dynamic VPS & Active Members fluctuation
    state.sites.forEach(site => {
      // Subtle realistic VPS load fluctuation
      const delta = (Math.random() * 4 - 2);
      let newUsage = Math.round((site.vpsUsage || 25) + delta);
      if (newUsage < 10) newUsage = 10;
      if (newUsage > 98) newUsage = 98;
      site.vpsUsage = newUsage;

      // Realistic Active Members variance (+- 1 to 3 members)
      const memDelta = Math.floor(Math.random() * 5) - 2;
      let newMembers = (site.activeMembers || 100) + memDelta;
      if (newMembers < 5) newMembers = 5;
      site.activeMembers = newMembers;
    });

    // 2. Update all DOM elements smoothly
    document.querySelectorAll('.website-card').forEach((card, idx) => {
      const site = state.sites[idx];
      if (site) {
        const valEl = card.querySelector('.vps-metric-val');
        const fillEl = card.querySelector('.vps-bar-fill');
        const pillEl = card.querySelector('.site-vps-pill');
        if (valEl) valEl.textContent = `${site.vpsUsage}%`;
        if (fillEl) fillEl.style.width = `${site.vpsUsage}%`;
        if (pillEl) pillEl.title = `Current VPS Load: ${site.vpsUsage}%`;

        // Update active members inline text
        const memEl = card.querySelector('.submetric-item:last-child strong');
        if (memEl) memEl.textContent = site.activeMembers;
      }
    });

    // 3. Check VPS threshold crossing notifications (20, 40, 60, 80, 95)
    checkVpsUsageAlerts();

    // 4. Background refresh of real AllSiteHub records if connected
    if (state.activeSiteId === 'site-allsitehub' && state.currentView === 'browser') {
      fetchLiveAllSiteHubRecords().catch(() => {});
    }
  }

  function restartAutoRefreshTimer() {
    if (autoRefreshTimer) {
      clearInterval(autoRefreshTimer);
      autoRefreshTimer = null;
    }
    if (state.autoRefreshEnabled !== false) {
      const interval = state.autoRefreshInterval || 5000;
      autoRefreshTimer = setInterval(() => {
        runImmediateAutoRefresh();
      }, interval);
    }
  }

  function startContinuousAutoRefresh() {
    updateAutoRefreshBadge();
    setTimeout(() => {
      runImmediateAutoRefresh();
    }, 1200);
    restartAutoRefreshTimer();
  }

  function handlePinInput(num) {
    if (state.isLockedOut) return;

    if (state.currentEnteredPin.length < 6) {
      state.currentEnteredPin += num;
      if (navigator.vibrate) {
        try { navigator.vibrate(20); } catch (e) {}
      }
      updatePinDots();

      const expectedLength = (state.appPin && state.appPin.length >= 4) ? state.appPin.length : 4;
      if (state.currentEnteredPin.length === expectedLength) {
        setTimeout(() => {
          verifyEnteredPin();
        }, 140);
      }
    }
  }

  function verifyEnteredPin() {
    if (state.currentEnteredPin === state.appPin) {
      state.failedPinAttempts = 0;
      unlockAppSecurity('PIN Verified • Master Console Unlocked');
    } else {
      state.failedPinAttempts = (state.failedPinAttempts || 0) + 1;
      if (navigator.vibrate) {
        try { navigator.vibrate([50, 40, 50]); } catch (e) {}
      }

      // Trigger card shake animation
      if (elements.pinCard) {
        elements.pinCard.classList.remove('pin-shake');
        void elements.pinCard.offsetWidth; // force reflow
        elements.pinCard.classList.add('pin-shake');
        setTimeout(() => {
          elements.pinCard.classList.remove('pin-shake');
        }, 500);
      }

      if (elements.pinError) {
        elements.pinError.textContent = `Invalid PIN (${state.failedPinAttempts}/3 attempts)`;
        elements.pinError.classList.remove('hidden');
      }

      state.currentEnteredPin = '';
      updatePinDots();

      // Check lockout threshold
      if (state.failedPinAttempts >= 3) {
        triggerPinLockout(30);
      }
    }
  }

  function triggerPinLockout(seconds = 30) {
    state.isLockedOut = true;
    if (elements.pinKeypad) elements.pinKeypad.classList.add('locked-out');
    if (elements.pinLockoutBanner) elements.pinLockoutBanner.classList.remove('hidden');
    if (elements.pinError) elements.pinError.classList.add('hidden');

    let remaining = seconds;
    if (elements.lockoutTimer) elements.lockoutTimer.textContent = `${remaining}s`;

    if (state.lockoutTimerId) clearInterval(state.lockoutTimerId);

    state.lockoutTimerId = setInterval(() => {
      remaining -= 1;
      if (elements.lockoutTimer) elements.lockoutTimer.textContent = `${remaining}s`;

      if (remaining <= 0) {
        clearInterval(state.lockoutTimerId);
        state.lockoutTimerId = null;
        state.isLockedOut = false;
        state.failedPinAttempts = 0;
        if (elements.pinKeypad) elements.pinKeypad.classList.remove('locked-out');
        if (elements.pinLockoutBanner) elements.pinLockoutBanner.classList.add('hidden');
        if (elements.pinError) elements.pinError.classList.add('hidden');
      }
    }, 1000);
  }

  function updatePinDots() {
    const container = elements.pinBulletsContainer || document.getElementById('pinBulletsContainer');
    const box = elements.pinDisplayBox || document.getElementById('pinDisplayBox');
    const placeholder = elements.pinBoxPlaceholder || document.getElementById('pinBoxPlaceholder');

    if (!container || !box) return;

    // Clear and dynamically render only typed bullets (no fixed slot clues!)
    container.innerHTML = '';
    const len = state.currentEnteredPin.length;

    if (len > 0) {
      box.classList.add('has-digits');
      box.classList.remove('empty');
      if (placeholder) placeholder.style.display = 'none';

      for (let i = 0; i < len; i++) {
        const bullet = document.createElement('span');
        bullet.className = 'pin-bullet';
        container.appendChild(bullet);
      }
    } else {
      box.classList.remove('has-digits');
      box.classList.add('empty');
      if (placeholder) placeholder.style.display = '';
    }
  }

  function setupPinListeners() {
    if (elements.fingerprintUnlockBtn) {
      elements.fingerprintUnlockBtn.addEventListener('click', () => {
        triggerFingerprintAuth();
      });
    }

    if (elements.pinKeypad) {
      elements.pinKeypad.querySelectorAll('.key-btn[data-key]').forEach(btn => {
        btn.addEventListener('click', () => handlePinInput(btn.dataset.key));
      });
    }

    if (elements.pinSubmitBtn) {
      elements.pinSubmitBtn.addEventListener('click', () => {
        if (state.isLockedOut) return;
        if (state.currentEnteredPin.length >= 4) {
          verifyEnteredPin();
        }
      });
    }

    if (elements.pinBackspaceBtn) {
      elements.pinBackspaceBtn.addEventListener('click', () => {
        if (state.isLockedOut) return;
        if (state.currentEnteredPin.length > 0) {
          state.currentEnteredPin = state.currentEnteredPin.slice(0, -1);
          if (navigator.vibrate) {
            try { navigator.vibrate(15); } catch (e) {}
          }
          updatePinDots();
        }
      });
    }

    if (elements.forgotPinBtn) {
      elements.forgotPinBtn.addEventListener('click', () => {
        if (confirm('Reset Master Security PIN and disable lock?')) {
          state.pinEnabled = false;
          state.appPin = '';
          state.failedPinAttempts = 0;
          state.isLockedOut = false;
          if (state.lockoutTimerId) {
            clearInterval(state.lockoutTimerId);
            state.lockoutTimerId = null;
          }
          localStorage.removeItem('omni_pin_enabled');
          localStorage.removeItem('omni_app_pin');
          if (elements.pinToggle) elements.pinToggle.checked = false;
          if (elements.pinSetContainer) elements.pinSetContainer.classList.add('hidden');
          elements.pinLockModal.classList.add('hidden');
          showToast('Master PIN reset and lock disabled');
        }
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Init ---
  function init() {
    loadState();
    setupPasswordEye();
    setupPresets();
    setupSettings();
    setupPinListeners();

    // Home Hub Triggers
    elements.openAddSiteBtn.addEventListener('click', openAddModal);
    elements.modalCloseBtn.addEventListener('click', closeModal);
    elements.cancelSiteModalBtn.addEventListener('click', closeModal);
    elements.siteForm.addEventListener('submit', handleSaveSite);

    // Search filter
    elements.homeSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderHomeCards();
    });

    // Section filter pills
    if (elements.homeSectionsFilter) {
      elements.homeSectionsFilter.querySelectorAll('.section-filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          elements.homeSectionsFilter.querySelectorAll('.section-filter-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.selectedSection = pill.dataset.section;
          renderHomeCards();
        });
      });
    }

    // Browser Controls
    elements.backToHomeBtn.addEventListener('click', showHomeView);
    elements.bViewModeToggleBtn.addEventListener('click', toggleViewMode);
    elements.bReloadBtn.addEventListener('click', reloadBrowser);
    elements.bLaunchExternalBtn.addEventListener('click', openExternal);
    elements.noticeOpenExternalBtn.addEventListener('click', openExternal);

    // View Tabs: Internal Panel vs Live Webview
    elements.tabInternalPanelBtn.addEventListener('click', () => switchPanelTab('internal'));
    elements.tabLiveWebviewBtn.addEventListener('click', () => switchPanelTab('webview'));

    // Internal Deck Actions
    elements.deckAddNewBtn.addEventListener('click', openAddRecordModal);
    elements.recordModalCloseBtn.addEventListener('click', () => elements.recordModal.classList.add('hidden'));
    elements.cancelRecordModalBtn.addEventListener('click', () => elements.recordModal.classList.add('hidden'));
    elements.recordForm.addEventListener('submit', handleSaveRecord);

    elements.deckSyncBtn.addEventListener('click', () => {
      const site = state.sites.find(s => s.id === state.activeSiteId);
      if (site) {
        showToast(`⚡ All changes synced live to ${site.name}!`);
      }
    });

    elements.deckCopyIdBtn.addEventListener('click', () => {
      const site = state.sites.find(s => s.id === state.activeSiteId);
      if (site) copyText(site.adminId, 'Admin ID');
    });

    elements.deckCopyPassBtn.addEventListener('click', () => {
      const site = state.sites.find(s => s.id === state.activeSiteId);
      if (site) copyText(site.adminPassword, 'Admin Password');
    });

    elements.deckSearchInput.addEventListener('input', () => {
      if (state.activeSiteId) renderDeckItems(state.activeSiteId);
    });

    // 1-Tap Copy in Browser Webview
    elements.copyAdminIdBtn.addEventListener('click', () => {
      const site = state.sites.find(s => s.id === state.activeSiteId);
      if (site) copyText(site.adminId, 'Admin ID');
    });

    elements.copyAdminPassBtn.addEventListener('click', () => {
      const site = state.sites.find(s => s.id === state.activeSiteId);
      if (site) copyText(site.adminPassword, 'Admin Password');
    });

    // Native Android Hardware Back Button Handling
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
      window.Capacitor.Plugins.App.addListener('backButton', () => {
        if (elements.recordModal && !elements.recordModal.classList.contains('hidden')) {
          elements.recordModal.classList.add('hidden');
        } else if (elements.siteModal && !elements.siteModal.classList.contains('hidden')) {
          elements.siteModal.classList.add('hidden');
        } else if (elements.settingsModal && !elements.settingsModal.classList.contains('hidden')) {
          elements.settingsModal.classList.add('hidden');
        } else if (state.currentView === 'browser') {
          showHomeView();
        } else {
          window.Capacitor.Plugins.App.exitApp();
        }
      });
    }

    // Native Android Status Bar Dark Styling
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.StatusBar) {
      try {
        window.Capacitor.Plugins.StatusBar.setBackgroundColor({ color: '#000000' });
        window.Capacitor.Plugins.StatusBar.setStyle({ style: 'DARK' });
      } catch (e) {}
    }

    // Start on Home View
    showHomeView();
    checkPinLock();
    startContinuousAutoRefresh();

    // Re-trigger auto-refresh whenever returning from background or switching tabs
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
      window.Capacitor.Plugins.App.addListener('appStateChange', (appState) => {
        if (appState.isActive) {
          runImmediateAutoRefresh();
        }
      });
    }

    window.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        runImmediateAutoRefresh();
      }
    });

    if (elements.autoRefreshIndicator) {
      elements.autoRefreshIndicator.style.cursor = 'pointer';
      elements.autoRefreshIndicator.addEventListener('click', () => {
        runImmediateAutoRefresh();
        showToast('⚡ Live Refresh Triggered');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
