export const lightTheme = {
  bg:       "#F5F0E8",      // warm ivory
  bg2:      "#EDE7D9",      // slightly deeper ivory
  bg3:      "#E4DDD0",      // card surface
  card:     "#FDFAF5",      // bright card
  cardBorder: "rgba(120,100,60,0.13)",
  text:     "#1A1714",      // near black warm
  text2:    "#6B5F4E",      // warm brown-grey
  text3:    "#9E8E78",      // muted
  border:   "rgba(120,100,60,0.12)",
  accent:   "#2D3A8C",      // deep navy
  accentAlt:"#C4913A",      // gold
  accentSoft:"rgba(45,58,140,0.08)",
  success:  "#1D6B4A",
  danger:   "#B03A2E",
  navBg:    "rgba(245,240,232,0.90)",
  shadow:   "0 4px 24px rgba(45,58,140,0.10)",
  shadowCard:"0 2px 16px rgba(45,58,140,0.08)",
  heroGrad: "radial-gradient(ellipse at 60% 0%, rgba(196,145,58,0.12) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(45,58,140,0.07) 0%, transparent 60%)",
};

export const darkTheme = {
  bg:       "#0D0D14",
  bg2:      "#13131E",
  bg3:      "#1A1A28",
  card:     "#171724",
  cardBorder: "rgba(255,255,255,0.06)",
  text:     "#E8E4F4",
  text2:    "#7C789A",
  text3:    "#504E6A",
  border:   "rgba(255,255,255,0.07)",
  accent:   "#7F77DD",
  accentAlt:"#C4913A",
  accentSoft:"rgba(127,119,221,0.10)",
  success:  "#1D9E75",
  danger:   "#D85A30",
  navBg:    "rgba(13,13,20,0.88)",
  shadow:   "0 4px 24px rgba(127,119,221,0.12)",
  shadowCard:"0 2px 16px rgba(0,0,0,0.25)",
  heroGrad: "radial-gradient(ellipse at 60% 0%, rgba(127,119,221,0.10) 0%, transparent 65%)",
};

export const globalCSS = (t) => `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Plus Jakarta Sans', 'DM Sans', sans-serif;
    background: ${t.bg};
    color: ${t.text};
    transition: background 0.35s ease, color 0.35s ease;
    -webkit-font-smoothing: antialiased;
  }
  :root {
    --bg: ${t.bg}; --bg2: ${t.bg2}; --bg3: ${t.bg3};
    --card: ${t.card}; --text: ${t.text}; --text2: ${t.text2}; --text3: ${t.text3};
    --border: ${t.border}; --card-border: ${t.cardBorder};
    --accent: ${t.accent}; --accent-alt: ${t.accentAlt};
    --accent-soft: ${t.accentSoft};
    --success: ${t.success}; --danger: ${t.danger};
    --nav-bg: ${t.navBg};
    --shadow: ${t.shadow}; --shadow-card: ${t.shadowCard};
    --hero-grad: ${t.heroGrad};
  }
  @keyframes fadeUp    { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn    { from { opacity:0; } to { opacity:1; } }
  @keyframes float     { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-10px); } }
  @keyframes pulse     { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
  @keyframes shimmer   { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes slideIn   { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
  @keyframes rotateSlow { to { transform: rotate(360deg); } }
  .fade-up   { animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both; }
  .fade-in   { animation: fadeIn 0.4s ease both; }
  .slide-in  { animation: slideIn 0.45s cubic-bezier(0.22,1,0.36,1) both; }
  .card-lift { transition: transform 0.22s ease, box-shadow 0.22s ease; }
  .card-lift:hover { transform: translateY(-5px); box-shadow: var(--shadow); }
  .nav-link  { transition: color 0.18s, background 0.18s; }
  .nav-link:hover  { color: var(--accent) !important; }
  .nav-link.active { color: var(--accent) !important; background: var(--accent-soft); border-radius: 8px; }
  .btn-primary {
    background: var(--accent); color: #fff; border: none;
    padding: 11px 26px; border-radius: 12px; font-size: 14px; font-weight: 600;
    cursor: pointer; transition: opacity 0.18s, transform 0.18s;
    letter-spacing: 0.2px; font-family: inherit;
  }
  .btn-primary:hover { opacity: 0.85; transform: scale(1.025); }
  .btn-ghost {
    background: transparent; color: var(--text2);
    border: 1.5px solid var(--card-border);
    padding: 10px 20px; border-radius: 12px; font-size: 13px; font-weight: 500;
    cursor: pointer; transition: all 0.18s; font-family: inherit;
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
  .btn-gold {
    background: var(--accent-alt); color: #fff; border: none;
    padding: 11px 26px; border-radius: 12px; font-size: 14px; font-weight: 600;
    cursor: pointer; transition: opacity 0.18s, transform 0.18s; font-family: inherit;
  }
  .btn-gold:hover { opacity: 0.88; transform: scale(1.025); }
  .tag-pill {
    display: inline-block; font-size: 10px; font-weight: 700;
    padding: 3px 10px; border-radius: 20px; letter-spacing: 0.5px; text-transform: uppercase;
  }
  .section-label {
    font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;
  }
  .mono { font-family: 'DM Mono', 'Fira Code', monospace; }
  input, select, textarea, button { font-family: inherit; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .mobile-full { width: 100% !important; }
  }
  @media (min-width: 769px) {
    .hide-desktop { display: none !important; }
  }
`;
