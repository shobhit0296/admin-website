# OmniAdmin Hub - Multi-Website Live Admin Android APK

**OmniAdmin** is an all-in-one Android app designed to access and manage the **live admin panels** of all your websites (WordPress, Shopify, custom React/Vue dashboards, Laravel Nova, Strapi, cPanel, WooCommerce, Ghost, etc.) in real-time from your Android phone.

---

## Highlights

- ⚡ **Direct Live Connection**: Every edit, post, order change, or configuration update pushes instantly to your live servers and database.
- 📱 **Multi-Site Fast Switcher**: 1-tap switching between unlimited websites via the bottom floating bar or side drawer.
- 🖥️ **Desktop vs. Mobile View**: Easily force full desktop layout for complex admin panels that are cramped on mobile devices.
- 🔒 **Security Lock**: Optional 4-digit PIN lock to keep your sensitive admin panels protected on your phone.
- 🔄 **Live Sync & Session Persistence**: Keeps cookies, tokens, and sessions active so you don't get logged out when switching sites.
- 💾 **Backup & Restore**: Export your sites list as JSON and import it on any device.

---

## 📲 How to Get Your APK

### Option 1: Automated Cloud Build via GitHub Actions (Fastest, No Android Studio Needed)
1. Push this folder to your GitHub repository (or upload the files to a new private/public repository).
2. Go to the **Actions** tab in your GitHub repo.
3. The **"Build Android APK"** workflow will trigger automatically (or click *Run workflow*).
4. Once completed (~2 minutes), click the finished run and download **OmniAdmin-debug-apk**!
5. Send the `.apk` file to your Android phone via WhatsApp, Telegram, Google Drive, or USB and tap to install!

### Option 2: Local Android Studio Build (If Android Studio is installed)
```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```
Inside Android Studio, select **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

### Option 3: Test Instantly in Browser or Install as PWA
You can test the entire interface right now on your PC or mobile browser:
```bash
npm start
```
Then visit `http://localhost:3000` (or your PC's local IP address on your phone's Chrome browser, e.g., `http://192.168.1.X:3000`, and tap **"Add to Home Screen"**).

---

## Supported Admin Panels

- **WordPress**: `/wp-admin/` (Full support for Gutenberg, WooCommerce, Elementor, plugins)
- **Shopify**: `https://admin.shopify.com/`
- **Laravel / Nova / Filament**: `/nova/` or `/admin/`
- **cPanel / WHM**: `https://yourdomain.com:2083`
- **Custom Admin Consoles**: Node, Next.js, Django, Flask, Strapi, Ghost, Supabase Studio, Firebase console
