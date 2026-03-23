import { Link } from "react-router-dom";
import { GlowDot } from "../components/UI";
import useSEO from "../hooks/useSEO";

const FEATURES = [
  { icon: "📚", title: "Coding Resources", desc: "Java, Python, C++ tutorials, lab experiments & engineering notes", color: "#2D3A8C", path: "/resources" },
  { icon: "🔧", title: "Student Tools", desc: "CGPA calculator, unit converters & productivity tools", color: "#C4913A", path: "/tools" },
  { icon: "💻", title: "Tech Guides", desc: "Best laptops, gadget picks, student deals & comparisons", color: "#1D6B4A", path: "/guides" },
  { icon: "🤖", title: "AI Tools", desc: "Curated AI tools for coding, learning & productivity", color: "#8B4A9C", path: "/ai-tools" },
  { icon: "🚀", title: "Project Ideas", desc: "Final year, mini & IoT project ideas with tech stacks", color: "#B03A2E", path: "/projects" },
];



export default function Home() {
  useSEO({
    title:       "StudentTechHub — Free Tools, Resources & Guides for Engineering Students",
    description: "All-in-one platform for engineering students. Free CGPA calculator, coding resources, tech buying guides, AI tools and project ideas — 100% free, no login required.",
    canonical:   "https://studenttechhub.com",
    keywords:    "engineering student tools, CGPA calculator, coding resources, student tech hub, free tools for students, engineering notes, project ideas, AI tools for students",
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
        "query-input": "required name=search_term_string"
      },
    },
  });
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 24px 70px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--hero-grad)", pointerEvents: "none" }} />

        {/* Decorative rings (light mode only) */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          border: "1.5px solid var(--card-border)", opacity: 0.6, pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 280, height: 280, borderRadius: "50%",
          border: "1.5px solid var(--card-border)", opacity: 0.5, pointerEvents: "none"
        }} />

        <div className="fade-up" style={{ maxWidth: 720, animationDelay: "0s" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--card)", border: "1px solid var(--card-border)",
            borderRadius: 30, padding: "6px 16px", fontSize: 12, fontWeight: 600,
            color: "var(--accent)", marginBottom: 28, letterSpacing: 0.4
          }}>
            <GlowDot color="#4ade80" />
            All-in-One Student Ecosystem — Free Forever
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 6.5vw, 76px)", fontWeight: 900,
            lineHeight: 1.02, letterSpacing: -2.5, marginBottom: 24
          }}>
            Learn. Build.<br />
            <span style={{
              background: "linear-gradient(120deg, var(--accent) 0%, var(--accent-alt) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Discover.</span>
          </h1>

          <p className="fade-up" style={{
            fontSize: 18, color: "var(--text2)", maxWidth: 500,
            lineHeight: 1.7, marginBottom: 36, animationDelay: "0.1s"
          }}>
            Coding resources, utility tools, tech buying guides & project ideas — everything an engineering student needs, in one place.
          </p>

          <div className="fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.18s" }}>
            <Link to="/resources">
              <button className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>
                Explore Resources →
              </button>
            </Link>
            <Link to="/tools">
              <button className="btn-ghost" style={{ fontSize: 14, padding: "12px 24px" }}>
                Try Free Tools
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ color: "var(--accent)" }}>✦ What's Inside</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, letterSpacing: -1 }}>
              Everything You Need to Succeed
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 15, maxWidth: 480, margin: "12px auto 0", lineHeight: 1.65 }}>
              Five powerful sections, all free, all crafted for engineering & CS students.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18
          }}>
            {FEATURES.map((f, i) => (
              <Link key={f.title} to={f.path} style={{ textDecoration: "none" }}>
                <div className="card-lift fade-up" style={{
                  background: "var(--card)", border: "1px solid var(--card-border)",
                  borderRadius: 18, padding: "28px 26px",
                  position: "relative", overflow: "hidden",
                  animationDelay: `${i * 0.07}s`, height: "100%"
                }}>
                  {/* Accent line at top */}
                  <div style={{ position: "absolute", top: 0, left: 24, right: 24, height: 2, background: f.color, borderRadius: "0 0 2px 2px", opacity: 0.7 }} />

                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: f.color + "15", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 22, marginBottom: 18
                  }}>{f.icon}</div>

                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "var(--text)" }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 18 }}>{f.desc}</div>

                  <div style={{ fontSize: 12, fontWeight: 700, color: f.color, display: "flex", alignItems: "center", gap: 4 }}>
                    Explore <span style={{ fontSize: 14 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="section-label" style={{ color: "var(--accent-alt)" }}>✦ Our Advantage</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: -0.8, marginBottom: 20, lineHeight: 1.15 }}>
              Not just a coding site.<br />A complete student OS.
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
              Unlike scattered resources across the internet, Student Tech Hub combines educational content, practical tools, and smart tech guides in one cohesive platform — designed specifically for engineering students.
            </p>
            {[
              ["🎯", "Curated content, zero noise"],
              ["⚡", "Tools that work offline too"],
              ["💰", "100% free, no registration needed"],
              ["🔄", "Updated regularly with fresh content"],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: "var(--accent-soft)", display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0
                }}>{icon}</div>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Visual card stack */}
          <div style={{ position: "relative", height: 340 }}>
            {[
              { top: 0, left: 0, w: "88%", title: "CGPA this semester", val: "8.74", icon: "🎓", color: "#2D3A8C" },
              { top: 60, left: "14%", w: "88%", title: "Projects Completed", val: "12", icon: "🚀", color: "#C4913A" },
              { top: 120, left: 0, w: "88%", title: "Resources Read", val: "47", icon: "📚", color: "#1D6B4A" },
            ].map((c, i) => (
              <div key={i} style={{
                position: "absolute", top: c.top, left: c.left, width: c.w,
                background: "var(--card)", border: "1px solid var(--card-border)",
                borderRadius: 16, padding: "18px 22px",
                display: "flex", alignItems: "center", gap: 14,
                boxShadow: "var(--shadow-card)",
                animation: `float ${2.5 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: c.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text2)", marginBottom: 2 }}>{c.title}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.8, color: c.color }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 70%, var(--accent-alt)) 100%)",
            borderRadius: 24, padding: "64px 48px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, left: 40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

            <div style={{ fontSize: 40, marginBottom: 16, animation: "float 3s ease-in-out infinite" }}>🎓</div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 800, color: "#fff", letterSpacing: -0.8, marginBottom: 12 }}>
              Start your journey today.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 420, margin: "0 auto 30px", lineHeight: 1.65 }}>
              Join thousands of students already using StudentTechHub to level up their academics and career.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/resources">
                <button style={{
                  background: "#fff", color: "var(--accent)", border: "none",
                  padding: "13px 28px", borderRadius: 12, fontSize: 14,
                  fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
                }}>Browse Resources →</button>
              </Link>
              <Link to="/tools">
                <button style={{
                  background: "rgba(255,255,255,0.15)", color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  padding: "13px 28px", borderRadius: 12, fontSize: 14,
                  fontWeight: 600, cursor: "pointer", fontFamily: "inherit", backdropFilter: "blur(8px)"
                }}>Try Free Tools</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
