# 🏡 Suvarna Nivasa — Luxury Digital House Warming Invitation

A high-end, mobile-first, animated digital invitation website created for the **Suvarna Nivasa House Warming Ceremony (गृहप्रवेश)** on **21 August 2026**.

---

## ✨ Features

- **2.2s Automatic Intro:** Auspicious golden Ganesha welcome screen that smoothly dissolves on its own (elderly-friendly, zero clicks needed).
- **Cinematic Cover (Page 1):** Fullscreen crystal-clear home architecture photo that gently transitions into an aesthetic blur backdrop, with the Family centerpiece photo and live countdown ticker.
- **Official Invitation (Page 2):** Fullscreen invitation details (Date: 21/08/26, Place: Beside NKMV High School, Time: 9:00 AM) with unhurried sequential animations.
- **Parents Section (Page 3):** Parents photo with moving blessing quote.
- **Siblings Section (Page 4):** Siblings photo with *"Plant Roots with Us"* celebration quote.
- **Live Google Maps QR Code (Page 5):** High-definition scannable QR code & direct tap button providing instant turn-by-turn navigation to `NKMV High School Morabagi, Morbagi, Maharashtra 416413`.
- **Background Music Toggle:** Peaceful ambient flute/acoustic sound generator and player.
- **100% Mobile & WhatsApp Ready:** Pixel-perfect proportions for iPhones, Android phones, tablets, and laptops.

---

## 🚀 Quick Start (Local)

### 1. Prerequisites
- **Node.js**: v18 or higher (LTS recommended)
- **npm**: v9 or higher

### 2. Installation
```bash
# Navigate to the project directory
cd suvarna-nivasa

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized, static production bundle is built into the `dist/` directory.

---

## 🌐 Free Deployment Guide

You can deploy this project online for free in under 2 minutes:

### Option A: Vercel (Recommended — Easiest & Fastest)
1. Push this folder to a GitHub repository (or upload via Vercel CLI).
2. Go to **[vercel.com](https://vercel.com/)** and sign in.
3. Click **"Add New..." &rarr; "Project"** and import your repository.
4. Set **Root Directory** to `suvarna-nivasa` (if your repo root is the parent folder).
5. Framework Preset: **Vite**.
6. Click **Deploy**. Your custom live link (e.g. `suvarna-nivasa.vercel.app`) is ready to share on WhatsApp!

---

### Option B: Netlify (Drag & Drop Deploy)
1. Run `npm run build` locally.
2. Go to **[netlify.com](https://app.netlify.com/drop)**.
3. Simply drag and drop the `dist/` folder onto the Netlify Drop page.
4. Your site goes live instantly!

---

### Option C: Cloudflare Pages
1. Go to **Cloudflare Dashboard &rarr; Workers &amp; Pages &rarr; Create application &rarr; Pages**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Save and Deploy**.

---

## 📁 Project Structure

```
suvarna-nivasa/
├── public/
│   ├── favicon.svg
│   └── social-preview.jpg
├── src/
│   ├── assets/
│   │   ├── house.jpg       # Home architecture photo
│   │   ├── family.jpg      # Full family centerpiece photo
│   │   ├── parents.jpg     # Parents photo
│   │   └── siblings.jpg    # Siblings photo
│   ├── components/
│   │   ├── OpeningSequence.jsx   # 2.2s automatic intro screen
│   │   ├── Hero.jsx              # Cover (Clear Home -> Blur -> Family)
│   │   ├── DigitalCard.jsx       # Fullscreen invitation details
│   │   ├── ParentsSection.jsx    # Parents photo & blessing quote
│   │   ├── SiblingsSection.jsx   # Siblings photo & celebration quote
│   │   ├── LocationQRSection.jsx # Scannable Google Maps QR code
│   │   ├── Ornaments.jsx         # Custom SVG line-art ornaments
│   │   └── MusicToggle.jsx       # Floating ambient music toggle
│   ├── App.jsx                   # Main 5-page layout
│   ├── App.css
│   ├── index.css                 # Aesthetic color tokens & typography
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 📍 Event Details

- **Occasion:** Suvarna Nivasa House Warming Ceremony (गृहप्रवेश)
- **Date:** Friday, 21 August 2026
- **Time:** 09:00 AM IST
- **Venue:** Beside NKMV High School, Morabagi, TQ: Jath, Dist: Sangli, Maharashtra 416413
- **Google Maps Navigation:** Built into the Page 5 QR Code & navigation button.

---

*Made with love for the Suvarna Nivasa Family.* 🏡✨
