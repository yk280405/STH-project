import { Link } from "react-router-dom";
import { GlowDot } from "../components/UI";
import useSEO from "../hooks/useSEO";

const FEATURES = [
  { icon: "📚", title: "Coding Resources",  desc: "Java, Python, C++ tutorials, lab experiments & engineering notes", color: "#2D3A8C", path: "/resources", tag: "Live" },
  { icon: "🔧", title: "Student Tools",     desc: "CGPA calculator, unit converters & productivity tools", color: "#C4913A", path: "/tools", tag: "Live" },
  { icon: "📝", title: "Subject Notes",     desc: "Structured notes for OS, DBMS, DSA, CN and more with PDF downloads", color: "#8B4A9C", path: "/notes", tag: "Live" },
  { icon: "💻", title: "Tech Guides",       desc: "Best laptops, gadget picks, student deals & comparisons", color: "#1D6B4A", path: "/guides", tag: "Soon" },
  { icon: "🤖", title: "AI Tools",          desc: "Curated AI tools for coding, learning & productivity", color: "#B03A2E", path: "/ai-tools", tag: "Soon" },
  { icon: "🚀", title: "Project Ideas",     desc: "Final year, mini & IoT project ideas with tech stacks", color: "#C4913A", path: "/projects", tag: "Soon" },
];

const LIVE_TOOLS = [
  { icon: "🎓", label: "CGPA Calculator",    path: "/tools/cgpa",             color: "#2D3A8C" },
  { icon: "📊", label: "Percentage Calc",    path: "/tools/percentage",        color: "#C4913A" },
  { icon: "🔢", label: "Number Converter",   path: "/tools/number-converter",  color: "#1D6B4A" },
  { icon: "⚖️", label: "Unit Converter",     path: "/tools/unit-converter",    color: "#8B4A9C" },
];

export default function Home() {
  useSEO({
    title:       "StudentTechHub — Free Tools, Resources & Guides for Engineering Students",
    description: "All-in-one platform for engineering students. Free CGPA calculator, coding resources, Java notes, tech buying guides and project ideas — 100% free, no login required.",
    canonical:   "https://studenttechhub.com",
    keywords:    "engineering student tools, CGPA calculator, coding resources, java notes, student tech hub, free tools for students",
    ogTitle:     "StudentTechHub — Learn. Build. Discover.",
    ogDesc:      "Free tools, coding resources, tech guides and project ideas for engineering students. All in one place.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "StudentTechHub",
      "url": "https://studenttechhub.com",
      "description": "All-in-one platform for engineering students — free tools, coding resources, tech guides and project ideas.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://studenttechhub.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  });

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--hero-grad)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%", border: "1.5px solid var(--card-border)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -30, right: -30, width: 260, height: 260, borderRadius: "50%", border: "1.5px solid var(--card-border)", opacity: 0.4, pointerEvents: "none" }} />

        <div className="fade-up" style={{ maxWidth: 740 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 30, padding: "6px 16px", fontSize: 12, fontWeight: 600, color: "var(--accent)", marginBottom: 28, letterSpacing: 0.4 }}>
            <GlowDot color="#4ade80" />
            All-in-One Student Ecosystem — Free Forever
          </div>

          <h1 style={{ fontSize: "clamp(40px, 6.5vw, 76px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: -2.5, marginBottom: 24 }}>
            Learn. Build.<br />
            <span style={{ background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-alt) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Discover.</span>
          </h1>

          <p className="fade-up" style={{ fontSize: 18, color: "var(--text2)", maxWidth: 520, lineHeight: 1.7, marginBottom: 36, animationDelay: "0.08s" }}>
            Coding resources, utility tools, subject notes & project ideas — everything an engineering student needs, completely free.
          </p>

          <div className="fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.16s" }}>
            <Link to="/resources"><button className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>Explore Resources →</button></Link>
            <Link to="/tools"><button className="btn-ghost" style={{ fontSize: 14, padding: "12px 24px" }}>Try Free Tools</button></Link>
          </div>
        </div>

        {/* Live tools pill row */}
        <div className="fade-up" style={{ marginTop: 52, animationDelay: "0.24s" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 14, textTransform: "uppercase" }}>⚡ Available right now</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {LIVE_TOOLS.map(t => (
              <Link key={t.path} to={t.path} style={{ textDecoration: "none" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "var(--card)", border: "1px solid var(--card-border)",
                  borderRadius: 30, padding: "8px 16px", fontSize: 13, fontWeight: 600,
                  color: "var(--text)", cursor: "pointer",
                  transition: "border-color 0.18s, transform 0.18s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span style={{ fontSize: 16 }}>{t.icon}</span>{t.label}
                </div>
              </Link>
            ))}
            <Link to="/resources" style={{ textDecoration: "none" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "var(--card)", border: "1px solid var(--card-border)",
                borderRadius: 30, padding: "8px 16px", fontSize: 13, fontWeight: 600,
                color: "var(--text)", cursor: "pointer",
                transition: "border-color 0.18s, transform 0.18s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C4913A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: 16 }}>☕</span>Java Notes
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ color: "var(--accent)" }}>✦ What's Inside</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, letterSpacing: -1 }}>Everything You Need to Succeed</h2>
            <p style={{ color: "var(--text2)", fontSize: 15, maxWidth: 480, margin: "12px auto 0", lineHeight: 1.65 }}>
              Six powerful sections — three already live, more launching soon.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {FEATURES.map((f, i) => (
              <Link key={f.title} to={f.path} style={{ textDecoration: "none" }}>
                <div className="card-lift fade-up" style={{
                  background: "var(--card)", border: "1px solid var(--card-border)",
                  borderRadius: 18, padding: "28px 26px", position: "relative",
                  overflow: "hidden", animationDelay: `${i * 0.07}s`, height: "100%",
                  opacity: f.tag === "Soon" ? 0.7 : 1,
                }}>
                  <div style={{ position: "absolute", top: 0, left: 24, right: 24, height: 2, background: f.color, borderRadius: "0 0 2px 2px", opacity: f.tag === "Live" ? 0.8 : 0.3 }} />
                  <div style={{ position: "absolute", top: 14, right: 14 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: f.tag === "Live" ? "#1D6B4A18" : "var(--bg3)", color: f.tag === "Live" ? "#1D6B4A" : "var(--text3)", letterSpacing: 0.5 }}>
                      {f.tag === "Live" ? "✓ Live" : "Coming Soon"}
                    </span>
                  </div>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: f.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "var(--text)" }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 18 }}>{f.desc}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: f.tag === "Live" ? f.color : "var(--text3)", display: "flex", alignItems: "center", gap: 4 }}>
                    {f.tag === "Live" ? "Explore" : "Coming Soon"} {f.tag === "Live" && <span style={{ fontSize: 14 }}>→</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── JAVA NOTES SPOTLIGHT ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <div className="section-label" style={{ color: "#C4913A" }}>☕ New — Java Notes</div>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: -0.8, marginBottom: 16, lineHeight: 1.2 }}>
              Java Unit 1 — Complete Notes are Live
            </h2>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.8, marginBottom: 24 }}>
              All three chapters covered — Java Fundamentals, OOPs, and Exception Handling. Read online with code examples, or download the PDF.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {[
                ["📖", "Chapter 1 — Java Fundamentals", "Data Types, Keywords, Access Modifiers"],
                ["🧩", "Chapter 2 — OOPs using Java", "Class, Inheritance, Abstraction, Polymorphism"],
                ["⚠️", "Chapter 3 — Exception Handling", "try-catch, throw vs throws, Custom Exceptions"],
              ].map(([icon, title, sub]) => (
                <div key={title} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 12 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{title}</div>
                    <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link to="/resources"><button className="btn-primary" style={{ fontSize: 13 }}>Read Notes Online →</button></Link>
              <a href="/notes/Java_Unit1_Complete_Notes.pdf" download>
                <button className="btn-ghost" style={{ fontSize: 13 }}>📥 Download PDF</button>
              </a>
            </div>
          </div>

          {/* Code preview card */}
          <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow)" }}>
            <div style={{ background: "#C4913A15", borderBottom: "1px solid var(--border)", padding: "12px 18px", display: "flex", alignItems: "center", gap: 8 }}>
              {["#B03A2E", "#C4913A", "#1D6B4A"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              <span style={{ fontSize: 11, fontFamily: "DM Mono, monospace", color: "var(--text3)", marginLeft: 6 }}>Inheritance.java</span>
            </div>
            <pre style={{ margin: 0, padding: "20px 22px", fontSize: 12, lineHeight: 1.8, fontFamily: "DM Mono, monospace", color: "var(--text)", overflowX: "auto", background: "var(--bg)" }}>
{`class Animal {
  String name;
  void eat() {
    System.out.println(
      name + " is eating."
    );
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println(
      name + " says: Woof!"
    );
  }
}

// Dog d = new Dog();
// d.name = "Bruno";
// d.eat();   // inherited ✓
// d.bark();  // own method ✓`}
            </pre>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div className="section-label" style={{ color: "var(--accent-alt)" }}>✦ Our Advantage</div>
              <h2 style={{ fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: -0.8, marginBottom: 20, lineHeight: 1.15 }}>
                Not just a coding site.<br />A complete student OS.
              </h2>
              <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                Unlike scattered resources across the internet, StudentTechHub combines educational content, practical tools, and smart tech guides in one cohesive platform — designed specifically for engineering students.
              </p>
              {[
                ["🎯", "Curated content, zero noise"],
                ["⚡", "Tools that work right in your browser"],
                ["💰", "100% free, no registration needed"],
                ["🔄", "Updated regularly with fresh content"],
                ["📥", "PDF downloads for all notes"],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>{icon}</div>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Floating cards */}
            <div style={{ position: "relative", height: 320 }}>
              {[
                { top: 0,   left: 0,     w: "88%", title: "CGPA this semester", val: "8.74", icon: "🎓", color: "#2D3A8C" },
                { top: 70,  left: "12%", w: "88%", title: "Java Notes — Unit 1", val: "Done ✓", icon: "☕", color: "#C4913A" },
                { top: 140, left: 0,     w: "88%", title: "Tools Used Today",    val: "3",    icon: "🔧", color: "#1D6B4A" },
              ].map((c, i) => (
                <div key={i} style={{
                  position: "absolute", top: c.top, left: c.left, width: c.w,
                  background: "var(--card)", border: "1px solid var(--card-border)",
                  borderRadius: 16, padding: "16px 20px",
                  display: "flex", alignItems: "center", gap: 14,
                  boxShadow: "var(--shadow-card)",
                  animation: `float ${2.5 + i * 0.6}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}>
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

      {/* ── TOOLS QUICK ACCESS ───────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="section-label" style={{ color: "#C4913A" }}>🔧 Free Tools</div>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, letterSpacing: -0.6 }}>Jump Straight to a Tool</h2>
          </div>
          <Link to="/tools"><button className="btn-ghost" style={{ fontSize: 12 }}>All Tools →</button></Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {[
            { icon: "🎓", title: "CGPA Calculator", desc: "Subject-wise grade input, credits & CGPA output", color: "#2D3A8C", path: "/tools/cgpa" },
            { icon: "📊", title: "Percentage Calc", desc: "Marks → %, CGPA → %, reverse calculation", color: "#C4913A", path: "/tools/percentage" },
            { icon: "🔢", title: "Number Converter", desc: "Binary, Decimal, Octal, Hex with step-by-step", color: "#1D6B4A", path: "/tools/number-converter" },
            { icon: "⚖️", title: "Unit Converter", desc: "Length, Mass, Temp, Data, Speed & more", color: "#8B4A9C", path: "/tools/unit-converter" },
          ].map((t, i) => (
            <Link key={t.path} to={t.path} style={{ textDecoration: "none" }}>
              <div className="card-lift fade-up" style={{
                background: "var(--card)", border: "1px solid var(--card-border)",
                borderRadius: 16, padding: "22px 20px", animationDelay: `${i * 0.07}s`,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: t.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{t.title}</div>
                <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: t.color }}>Open Tool →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 65%, var(--accent-alt)) 100%)",
            borderRadius: 24, padding: "64px 48px", textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, left: 40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ fontSize: 40, marginBottom: 16, animation: "float 3s ease-in-out infinite" }}>🎓</div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 800, color: "#fff", letterSpacing: -0.8, marginBottom: 12 }}>
              Start your journey today.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 420, margin: "0 auto 30px", lineHeight: 1.65 }}>
              Free tools, Java notes, and much more — all built for engineering students, with more content dropping regularly.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/resources">
                <button style={{ background: "#fff", color: "var(--accent)", border: "none", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Browse Java Notes →
                </button>
              </Link>
              <Link to="/tools">
                <button style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                  Try Free Tools
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
