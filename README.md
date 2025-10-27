# 🌙 Lunacal – Professional Portfolio

A modern, responsive portfolio built with **Next.js** and **React**, featuring a dark theme, smooth animations, and a clean layout to showcase your professional profile.

---

## ✨ Overview

**Lunacal** includes:

* 🧠 **About Me Widget** – Tabbed sections for *About*, *Experiences*, and *Recommendations*
* 🖼️ **Gallery Widget** – Interactive image carousel with hover effects
* 📱 **Responsive Design** – Works seamlessly on desktop and mobile
* 🎨 **Modern UI** – Dark glassmorphic theme with smooth transitions

---

## 🧩 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **UI Library:** React 19
* **Styling:** Tailwind CSS v4
* **Fonts:** Geist & Geist Mono
* **Deployment:** Vercel

---

## 📁 Project Structure

```
lunacal/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── about-me-widget.tsx
│   ├── gallery-widget.tsx
│   └── theme-provider.tsx
├── public/               # Gallery images
├── lib/utils.ts
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn

### Setup

```bash
git clone https://github.com/yourusername/lunacal.git
cd lunacal
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 Customization

**Profile Info:**
Edit `/components/about-me-widget.tsx`

**Gallery Images:**
Add images in `/public` and update paths in `/components/gallery-widget.tsx`

**Colors & Theme:**
Customize in `/app/globals.css`

**Metadata:**
Edit `/app/layout.tsx`

---

## 🚀 Deployment

**Vercel (Recommended)**
Push to GitHub → Import repo on Vercel → Deploy instantly.

Also works on Netlify, AWS Amplify, DigitalOcean, or any Next.js-compatible platform.

---

## 🛠️ Troubleshooting

* Images not loading? Ensure they’re in `/public` and paths are correct.
* Styling issues? Clear cache and rebuild with `npm run build`.
* Build errors? Delete `.next` and `node_modules`, reinstall.

---

## 📄 License

Licensed under the **MIT License**.

---

