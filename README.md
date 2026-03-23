# ⚡ StudentTechHub

> All-in-one platform for engineering students — Learn. Build. Discover.

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → dist/
```

## 📁 Project Structure (15 source files)

```
StudentTechHub/
├── index.html                    ← HTML entry point
├── package.json                  ← react, react-dom, react-router-dom, vite
├── vite.config.js
└── src/
    ├── main.jsx                  ← ReactDOM.createRoot
    ├── App.jsx                   ← BrowserRouter + all routes + theme provider
    │
    ├── styles/
    │   └── theme.js              ← lightTheme, darkTheme objects + globalCSS()
    │
    ├── components/               ← Shared UI components
    │   ├── Navbar.jsx            ← Sticky nav, inline search, mobile drawer
    │   ├── Footer.jsx            ← 4-column footer with all links
    │   └── UI.jsx                ← Card, Badge, ScoreBar, SectionHeader, GlowDot
    │
    └── pages/                    ← One file per route
        ├── Home.jsx              ← /           Hero, features, why-us, CTA
        ├── Resources.jsx         ← /resources  9 resources, search + category filter
        ├── Tools.jsx             ← /tools      CGPA, %, Number, Unit calculators
        ├── Guides.jsx            ← /guides     Laptops (compare), Gadgets, Deals tabs
        ├── AITools.jsx           ← /ai-tools   12 AI tools, free filter, category tabs
        ├── Projects.jsx          ← /projects   9 projects, level + type filters
        ├── Notes.jsx             ← /notes      9 subject notes, search, inline reader
        ├── About.jsx             ← /about      Mission, team, timeline
        ├── Search.jsx            ← /search     Global search across all sections
        └── NotFound.jsx          ← *           404 page
```

## 🎨 Theme System

Two complete themes with warm, classy light mode:

| Variable         | Light Mode         | Dark Mode   | Purpose              |
|------------------|--------------------|-------------|----------------------|
| `--bg`           | `#F5F0E8` ivory    | `#0D0D14`   | Page background      |
| `--card`         | `#FDFAF5`          | `#171724`   | Card surfaces        |
| `--accent`       | `#2D3A8C` navy     | `#7F77DD`   | Primary CTA, links   |
| `--accent-alt`   | `#C4913A` gold     | `#C4913A`   | Secondary highlights |
| `--text`         | `#1A1714` warm blk | `#E8E4F4`   | Body text            |
| `--text2`        | `#6B5F4E` warm gry | `#7C789A`   | Secondary text       |

Theme preference is saved to `localStorage` and respects `prefers-color-scheme` on first visit.

## 🛠 Tech Stack

| Layer     | Tech                       |
|-----------|----------------------------|
| UI        | React 18                   |
| Routing   | React Router v6            |
| Build     | Vite 5                     |
| Fonts     | Plus Jakarta Sans + DM Mono|
| Hosting   | Vercel / Netlify (frontend)|

## 📦 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 📦 Deploy to Netlify

```bash
npm run build
# Drag & drop dist/ folder at netlify.com/drop
# OR: netlify deploy --prod --dir dist
```

Add `_redirects` file in `public/` for client-side routing:
```
/*  /index.html  200
```

## 🔮 Roadmap (Future Features)

- [ ] Spring Boot backend API
- [ ] MySQL/PostgreSQL database for dynamic content
- [ ] User accounts & personalization
- [ ] Admin CMS dashboard for content management
- [ ] MDX-powered notes with syntax highlighting
- [ ] Comments & community discussion
- [ ] Google AdSense integration
- [ ] Affiliate links in product cards
- [ ] Progressive Web App (PWA) support
- [ ] React Native mobile app

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/add-xyz`
3. Make your changes
4. Submit a Pull Request

To add a new resource, edit the `RESOURCES` array in `src/pages/Resources.jsx`.
To add a new project idea, edit `PROJECTS` in `src/pages/Projects.jsx`.
