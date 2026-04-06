import { Link } from "react-router-dom";
import { GlowDot } from "../components/UI";
import useSEO from "../hooks/useSEO";

const FEATURES = [
  { icon: "📚", title: "Coding Resources",  desc: "Java Unit 1 & 2, Python, C++ tutorials with interactive notes viewer", color: "#2D3A8C", path: "/resources", tag: "Live" },
  { icon: "🔧", title: "Student Tools",     desc: "CGPA calculator, percentage, number system & unit converters", color: "#C4913A", path: "/tools",     tag: "Live" },
  { icon: "📝", title: "Subject Notes",     desc: "Java Unit 1 & 2 PDF notes, OS, DBMS, DSA notes coming soon",   color: "#8B4A9C", path: "/notes",     tag: "Live" },
  { icon: "🤖", title: "AI Tools",          desc: "13 curated AI tools — Cursor, Copilot, Perplexity, v0.dev & more", color: "#B03A2E", path: "/ai-tools",  tag: "Live" },
  { icon: "🚀", title: "Project Ideas",     desc: "13 projects from 1st to 4th year for CSE, AI-ML & IoT branches", color: "#1D6B4A", path: "/projects",  tag: "Live" },
  { icon: "💻", title: "Tech Guides",       desc: "Best laptops, gadget picks, student deals & honest comparisons",  color: "#C4913A", path: "/guides",    tag: "Soon" },
];

const WHAT_WE_HAVE = [
  { icon: "☕", title: "Java Unit 1 Notes", desc: "OOPs, Exception Handling, Data Types, Access Modifiers — with code examples & PDF", path: "/resources", color: "#C4913A", badge: "PDF + Online" },
  { icon: "☕", title: "Java Unit 2 Notes", desc: "Collections, Multithreading, Lambda, Stream API, I/O Streams, Wrapper Classes", path: "/resources", color: "#C4913A", badge: "PDF + Online" },
  { icon: "🎓", title: "CGPA Calculator",   desc: "Subject-wise grade + credits input. Get CGPA + approximate percentage instantly", path: "/tools/cgpa",            color: "#2D3A8C", badge: "Free Tool" },
  { icon: "📊", title: "Percentage Calc",   desc: "Marks → %, CGPA → %, and reverse mode to find marks needed for a target score", path: "/tools/percentage",       color: "#2D3A8C", badge: "Free Tool" },
  { icon: "🔢", title: "Number Converter",  desc: "Binary ↔ Decimal ↔ Hex ↔ Octal with step-by-step working shown clearly",       path: "/tools/number-converter", color: "#1D6B4A", badge: "Free Tool" },
  { icon: "⚖️", title: "Unit Converter",    desc: "Length, Mass, Temperature, Time, Data, Speed — 6 categories in one tool",      path: "/tools/unit-converter",   color: "#8B4A9C", badge: "Free Tool" },
  { icon: "🤖", title: "13 AI Tools Listed",desc: "Cursor, Copilot, Perplexity, v0.dev, Eraser.io, Phind, Consensus — all curated for engineers", path: "/ai-tools", color: "#B03A2E", badge: "Curated List" },
  { icon: "🚀", title: "13 Project Ideas",  desc: "CSE, AI-ML & IoT from 1st–4th year — with full tech stacks and descriptions",   path: "/projects", color: "#1D6B4A", badge: "With Guides" },
];

export default function Home() {
  useSEO({
    title: "StudentTechHub — Free Java Notes, Tools & Resources for Engineering Students",
    description: "All-in-one platform for engineering students. Java Unit 1 & 2 complete notes PDF, free CGPA calculator, AI tools directory, project ideas — 100% free.",
    canonical: "https://studenttechhub.com",
    keywords: "engineering student tools, java notes pdf, java unit 2 notes, CGPA calculator, coding resources, student tech hub",
    ogTitle: "StudentTechHub — Learn. Build. Discover.",
    ogDesc: "Free Java notes (Unit 1 & 2), CGPA calculator, AI tool directory, project ideas for CSE, AI-ML & IoT.",
    jsonLd: {
      "@context": "https://schema.org", "@type": "WebSite",
      "name": "StudentTechHub", "url": "https://studenttechhub.com",
      "potentialAction": { "@type": "SearchAction", "target": "https://studenttechhub.com/search?q={search_term_string}", "query-input": "required name=search_term_string" },
    },
  });

  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--hero-grad)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%", border: "1.5px solid var(--card-border)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -30, right: -30, width: 260, height: 260, borderRadius: "50%", border: "1.5px solid var(--card-border)", opacity: 0.4, pointerEvents: "none" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
          <div>
            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 30, padding: "6px 16px", fontSize: 12, fontWeight: 600, color: "var(--accent)", marginBottom: 28, letterSpacing: 0.4 }}>
              <GlowDot color="#4ade80" />
              All-in-One Student Ecosystem — Free Forever
            </div>

            <h1 className="fade-up" style={{ fontSize: "clamp(40px, 6vw, 70px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: -2.5, marginBottom: 24, animationDelay: "0.05s" }}>
              Learn. Build.<br />
              <span style={{ background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-alt) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Discover.</span>
            </h1>

            <p className="fade-up" style={{ fontSize: 17, color: "var(--text2)", maxWidth: 500, lineHeight: 1.72, marginBottom: 36, animationDelay: "0.1s" }}>
              Java Unit 1 & 2 notes with PDF download, free utility tools, curated AI tools list, and project ideas — everything an engineering student needs, completely free.
            </p>

            <div className="fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.15s" }}>
              <Link to="/resources"><button className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Explore Java Notes →</button></Link>
              <Link to="/tools"><button className="btn-ghost" style={{ fontSize: 14, padding: "12px 24px" }}>Try Free Tools</button></Link>
            </div>

            <div className="fade-up" style={{ marginTop: 36, animationDelay: "0.22s" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 12, textTransform: "uppercase" }}>⚡ Available right now</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { icon: "☕", label: "Java Notes", path: "/resources", color: "#C4913A" },
                  { icon: "🎓", label: "CGPA Calc",  path: "/tools/cgpa", color: "#2D3A8C" },
                  { icon: "📊", label: "% Calc",     path: "/tools/percentage", color: "#2D3A8C" },
                  { icon: "🔢", label: "Num Converter", path: "/tools/number-converter", color: "#1D6B4A" },
                  { icon: "🤖", label: "AI Tools",   path: "/ai-tools", color: "#B03A2E" },
                  { icon: "🚀", label: "Projects",   path: "/projects", color: "#1D6B4A" },
                ].map(t => (
                  <Link key={t.label} to={t.path} style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 30, padding: "7px 14px", fontSize: 12, fontWeight: 600, color: "var(--text)", cursor: "pointer", transition: "border-color 0.18s, transform 0.18s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                      <span style={{ fontSize: 14 }}>{t.icon}</span>{t.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Floating laptop */}
          <div style={{ width: 290, flexShrink: 0 }}>
            <div style={{ position: "relative", animation: "float 4s ease-in-out infinite" }}>
              <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(45,58,140,0.15))" }}>
                <rect x="20" y="8" width="260" height="170" rx="12" fill="var(--bg3)" stroke="var(--card-border)" strokeWidth="1.5"/>
                <rect x="28" y="16" width="244" height="154" rx="8" fill="var(--bg)"/>
                <rect x="44" y="32" width="55" height="7" rx="3" fill="#C4913A" opacity="0.75"/>
                <rect x="107" y="32" width="35" height="7" rx="3" fill="#2D3A8C" opacity="0.5"/>
                <rect x="44" y="47" width="18" height="6" rx="3" fill="#8B4A9C" opacity="0.6"/>
                <rect x="70" y="47" width="80" height="6" rx="3" fill="var(--text3)" opacity="0.35"/>
                <rect x="52" y="61" width="65" height="6" rx="3" fill="#1D6B4A" opacity="0.65"/>
                <rect x="125" y="61" width="45" height="6" rx="3" fill="var(--text3)" opacity="0.3"/>
                <rect x="52" y="75" width="100" height="6" rx="3" fill="#C4913A" opacity="0.5"/>
                <rect x="44" y="89" width="18" height="6" rx="3" fill="#8B4A9C" opacity="0.6"/>
                <rect x="70" y="89" width="72" height="6" rx="3" fill="var(--text3)" opacity="0.35"/>
                <rect x="52" y="103" width="50" height="6" rx="3" fill="#2D3A8C" opacity="0.7"/>
                <rect x="110" y="103" width="32" height="6" rx="3" fill="var(--text3)" opacity="0.3"/>
                <rect x="44" y="117" width="18" height="6" rx="3" fill="#B03A2E" opacity="0.6"/>
                <rect x="70" y="117" width="88" height="6" rx="3" fill="var(--text3)" opacity="0.3"/>
                <rect x="52" y="131" width="68" height="6" rx="3" fill="#1D6B4A" opacity="0.5"/>
                <rect x="44" y="145" width="2" height="13" rx="1" fill="var(--accent)" opacity="0.85">
                  <animate attributeName="opacity" values="0.85;0;0.85" dur="1.2s" repeatCount="indefinite"/>
                </rect>
                <circle cx="150" cy="12" r="2.5" fill="var(--text3)" opacity="0.4"/>
                <rect x="12" y="177" width="276" height="12" rx="4" fill="var(--bg3)" stroke="var(--card-border)" strokeWidth="1.5"/>
                <rect x="112" y="182" width="76" height="5" rx="2.5" fill="var(--border)" opacity="0.8"/>
                <rect x="0" y="188" width="300" height="11" rx="5.5" fill="var(--bg2)" stroke="var(--card-border)" strokeWidth="1"/>
              </svg>
              <div style={{ position: "absolute", top: 10, right: -20, background: "var(--card)", border: "1px solid #C4913A40", borderRadius: 11, padding: "7px 13px", display: "flex", alignItems: "center", gap: 7, boxShadow: "0 6px 20px rgba(196,145,58,0.15)", animation: "float 3s ease-in-out infinite", animationDelay: "0.5s" }}>
                <span style={{ fontSize: 16 }}>☕</span>
                <div><div style={{ fontSize: 9.5, fontWeight: 700, color: "#C4913A" }}>Java Unit 1 & 2</div><div style={{ fontSize: 8.5, color: "var(--text3)" }}>Live now • PDF ready</div></div>
              </div>
              <div style={{ position: "absolute", bottom: 52, left: -24, background: "var(--card)", border: "1px solid #2D3A8C40", borderRadius: 11, padding: "7px 13px", display: "flex", alignItems: "center", gap: 7, boxShadow: "0 6px 20px rgba(45,58,140,0.13)", animation: "float 3.5s ease-in-out infinite", animationDelay: "1s" }}>
                <span style={{ fontSize: 16 }}>🎓</span>
                <div><div style={{ fontSize: 9.5, fontWeight: 700, color: "#2D3A8C" }}>CGPA Calc</div><div style={{ fontSize: 8.5, color: "var(--text3)" }}>Free • No login</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S AVAILABLE NOW ── */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>✦ No Vague Promises</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, letterSpacing: -1, marginBottom: 10 }}>Here's Exactly What You Can Use Today</h2>
            <p style={{ color: "var(--text2)", fontSize: 15, maxWidth: 500, margin: "0 auto", lineHeight: 1.65 }}>8 live resources — click any to go directly there.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 16 }}>
            {WHAT_WE_HAVE.map((w, i) => (
              <Link key={w.title} to={w.path} style={{ textDecoration: "none" }}>
                <div className="card-lift fade-up" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 16, padding: "22px 20px", height: "100%", animationDelay: `${i * 0.05}s`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: w.color, opacity: 0.75 }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: w.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{w.icon}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20, background: w.color + "18", color: w.color }}>{w.badge}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{w.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.65 }}>{w.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX SECTIONS ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>✦ Sections</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, letterSpacing: -0.8, marginBottom: 10 }}>Six Powerful Sections</h2>
          <p style={{ color: "var(--text2)", fontSize: 15, maxWidth: 460, margin: "0 auto", lineHeight: 1.65 }}>Five already live, one more launching soon.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {FEATURES.map((f, i) => (
            <Link key={f.title} to={f.path} style={{ textDecoration: "none" }}>
              <div className="card-lift fade-up" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "26px 24px", position: "relative", overflow: "hidden", animationDelay: `${i * 0.07}s`, height: "100%", opacity: f.tag === "Soon" ? 0.65 : 1 }}>
                <div style={{ position: "absolute", top: 0, left: 24, right: 24, height: 2, background: f.color, borderRadius: "0 0 2px 2px", opacity: f.tag === "Live" ? 0.8 : 0.3 }} />
                <div style={{ position: "absolute", top: 14, right: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: f.tag === "Live" ? "#1D6B4A18" : "var(--bg3)", color: f.tag === "Live" ? "#1D6B4A" : "var(--text3)" }}>{f.tag === "Live" ? "✓ Live" : "Coming Soon"}</span>
                </div>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: f.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 7 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 16 }}>{f.desc}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: f.tag === "Live" ? f.color : "var(--text3)", display: "flex", alignItems: "center", gap: 4 }}>
                  {f.tag === "Live" ? <>Explore <span style={{ fontSize: 14 }}>→</span></> : "Coming Soon"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent-alt)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>✦ Our Advantage</div>
              <h2 style={{ fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: -0.8, marginBottom: 20, lineHeight: 1.15 }}>Not just a coding site.<br />A complete student OS.</h2>
              <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                Unlike scattered resources across the internet, StudentTechHub combines educational content, practical tools, and smart tech guides in one cohesive platform.
              </p>
              {[["🎯","Curated content, zero noise"],["⚡","Tools that work in your browser"],["💰","100% free, no registration"],["📥","PDF downloads for all notes"],["🔄","Updated regularly"]].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{icon}</div>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ position: "relative", height: 320 }}>
              {[
                { top: 0,   left: 0,     w: "88%", title: "Java Unit 2 — Live", val: "New ✓", icon: "☕", color: "#C4913A" },
                { top: 80,  left: "12%", w: "88%", title: "Your CGPA",          val: "8.74",   icon: "🎓", color: "#2D3A8C" },
                { top: 160, left: 0,     w: "88%", title: "AI Tools Listed",    val: "13",     icon: "🤖", color: "#B03A2E" },
              ].map((c, i) => (
                <div key={i} style={{ position: "absolute", top: c.top, left: c.left, width: c.w, background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, boxShadow: "var(--shadow-card)", animation: `float ${2.5 + i * 0.6}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: c.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--text2)", marginBottom: 2 }}>{c.title}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: c.color }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS QUICK ACCESS ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#C4913A", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>🔧 Free Tools</div>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, letterSpacing: -0.6 }}>Jump Straight to a Tool</h2>
          </div>
          <Link to="/tools"><button className="btn-ghost" style={{ fontSize: 12 }}>All Tools →</button></Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { icon: "🎓", title: "CGPA Calculator",  desc: "Subject-wise grades + credits = CGPA output",  color: "#2D3A8C", path: "/tools/cgpa" },
            { icon: "📊", title: "Percentage Calc",  desc: "Marks → %, CGPA → %, reverse calculation",      color: "#C4913A", path: "/tools/percentage" },
            { icon: "🔢", title: "Number Converter", desc: "Binary ↔ Decimal ↔ Hex ↔ Octal + steps shown",  color: "#1D6B4A", path: "/tools/number-converter" },
            { icon: "⚖️", title: "Unit Converter",   desc: "Length, Mass, Temp, Data, Speed & more",         color: "#8B4A9C", path: "/tools/unit-converter" },
          ].map((t, i) => (
            <Link key={t.path} to={t.path} style={{ textDecoration: "none" }}>
              <div className="card-lift fade-up" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 16, padding: "22px 20px", animationDelay: `${i * 0.07}s` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: t.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: t.color }}>Open Tool →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 65%, var(--accent-alt)) 100%)", borderRadius: 24, padding: "64px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ fontSize: 40, marginBottom: 16, animation: "float 3s ease-in-out infinite" }}>🎓</div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 800, color: "#fff", letterSpacing: -0.8, marginBottom: 12 }}>Start your journey today.</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 460, margin: "0 auto 30px", lineHeight: 1.65 }}>
              Java Unit 1 & 2 notes, 4 free tools, 13 AI tools listed, and 13 project ideas — all live now, more content dropping regularly.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/resources"><button style={{ background: "#fff", color: "var(--accent)", border: "none", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Browse Java Notes →</button></Link>
              <Link to="/tools"><button style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Try Free Tools</button></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
