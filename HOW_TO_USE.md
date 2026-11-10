# Final Touch Unisex Salon & Academy — Standalone Web Application

Welcome to the complete, standalone codebase for **Final Touch Unisex Salon & Academy** (Hasanpur Chungi Near Pant Vihar Gate, ITC Road, Saharanpur, UP).

---

## 📁 What is Inside This Folder

- **`src/`** — All React 19 + TypeScript components:
  - `src/components/Navbar.tsx` — Sticky glassmorphic navigation with live IST open/closed status & mobile drawer
  - `src/components/Hero.tsx` — Obsidian Noir editorial hero with mask text reveals & trust bar
  - `src/components/ServiceCatalog.tsx` — 5-category searchable service catalog with Indian Rupee pricing
  - `src/components/BookingStudio.tsx` — 4-step interactive reservation engine with WhatsApp concierge
  - `src/components/AcademySection.tsx` — Cosmetology & hair academy courses with batch enrollment triggers
  - `src/components/LookbookAndReviews.tsx` — Filterable bridal/grooming lookbook & verified Google reviews
  - `src/components/LocationFooter.tsx` — Interactive Google Map, weekly schedule & contact information
  - `src/components/FloatingCartBar.tsx` — Damped-spring bottom booking tray
  - `src/data/salonData.ts` — Verified salon information, pricing, phone numbers, and reviews
- **`public/`** — Static images, Google reviews screenshots, icons, and `_redirects`
- **`dist/`** — Pre-compiled, production-ready static website (ready to host anywhere)
- **`node_modules/`** — Pre-installed dependencies (ready to run offline immediately)
- **`START_WEBSITE.bat`** — 1-click double-click launcher for Windows
- **`PREVIEW_PRODUCTION_BUILD.bat`** — 1-click production preview launcher
- **`BUILD_PROJECT.bat`** — 1-click build script to update the `dist` folder

---

## 🚀 How to Run on Any Computer

### Option A: On Windows (Easiest - 1 Click)
1. Double-click **`START_WEBSITE.bat`**.
2. It will automatically check dependencies and open the website in your browser at `http://localhost:5173`.

### Option B: On Mac, Linux, or via Terminal
1. Open a terminal / command prompt in this folder.
2. If dependencies are not installed yet, run:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

---

## 🌐 How to Deploy Anywhere

### 1. Cloudflare Pages (Recommended - Free & Fast)
- **Framework Preset:** None / Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables:** `NODE_VERSION=20`

### 2. Vercel / Netlify
- Drag and drop the **`dist`** folder directly into the Netlify or Vercel dashboard, OR connect your GitHub repository `https://github.com/arjungupta434320/finaltouchsalon`.

### 3. Traditional Web Hosting (cPanel / Apache / Nginx)
- Simply copy the contents of the **`dist/`** folder directly into your `public_html` or web root directory. No Node.js required on the server!

---

## 📞 Business Details Hardcoded in Code
- **Name:** Final Touch Unisex Salon & Academy
- **Phone / WhatsApp:** `+91 99271 26000` (`099271 26000`)
- **Address:** Hasanpur Chungi Near Pant Vihar Gate, ITC Rd, Saharanpur, Uttar Pradesh 247001
- **Hours:** Monday – Sunday: 9:00 AM – 9:00 PM (IST)
