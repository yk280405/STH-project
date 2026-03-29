import { Link, useLocation } from "react-router-dom";

const PAGE_META = {
  "/guides":   { icon: "💻", title: "Tech Guides & Recommendations", desc: "Laptop reviews, gadget picks, student deals and honest product comparisons." },
  "/ai-tools": { icon: "🤖", title: "AI & Productivity Tools",       desc: "Curated AI tools for coding, learning and productivity — all in one place." },
  "/projects": { icon: "🚀", title: "Project Ideas Bank",            desc: "Final year, mini and IoT project ideas with tech stacks and full guides." },
  "/search":   { icon: "🔍", title: "Search StudentTechHub",         desc: "Search across all resources, tools, guides, projects and notes." },
};

const LIVE_LINKS = [
  { path: "/",          icon: "🏠", label: "Home"          },
  { path: "/resources", icon: "📚", label: "Resources"     },
  { path: "/tools",     icon: "🔧", label: "Free Tools"    },
  { path: "/notes",     icon: "📝", label: "Notes"         },
  { path: "/about",     icon: "ℹ️", label: "About Us"      },
];

export default function ComingSoon() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] || {
    icon: "⚡",
    title: "Something Awesome",
    desc: "This page is being crafted with care. Check back soon!",
  };

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px 100px", textAlign: "center" }}>

      {/* Background blob */}
      <div style={{
        position: "fixed", top: "30%", left: "50%", transform: "translateX(-50%)",
        width: 500, height: 500,
        background: "radial-gradient(ellipse, var(--accent-soft) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Icon */}
        <div className="fade-up" style={{
          width: 80, height: 80, borderRadius: 22, margin: "0 auto 28px",
          background: "var(--card)", border: "1px solid var(--card-border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 38, boxShadow: "var(--shadow-card)",
          animation: "float 3s ease-in-out infinite",
        }}>
          {meta.icon}
        </div>

        {/* Badge */}
        <div className="fade-up" style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "var(--card)", border: "1px solid var(--card-border)",
          borderRadius: 30, padding: "6px 16px", fontSize: 12, fontWeight: 700,
          color: "var(--accent)", marginBottom: 24, letterSpacing: 0.5,
          animationDelay: "0.05s",
        }}>
          <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#f59e0b", animation: "pulse 1.5s infinite" }} />
          Coming Soon
        </div>

        {/* Heading */}
        <h1 className="fade-up" style={{
          fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 900,
          letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 18,
          animationDelay: "0.1s",
        }}>
          {meta.title}
        </h1>

        {/* Description */}
        <p className="fade-up" style={{
          fontSize: 15, color: "var(--text2)", lineHeight: 1.75,
          maxWidth: 460, margin: "0 auto 40px",
          animationDelay: "0.15s",
        }}>
          {meta.desc} We're working hard to bring this to you — it'll be worth the wait!
        </p>

        {/* Divider */}
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text3)", marginBottom: 20, letterSpacing: 0.5 }}>
          EXPLORE WHAT'S ALREADY LIVE ↓
        </div>

        {/* Live links grid */}
        <div className="fade-up" style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10, animationDelay: "0.2s",
        }}>
          {LIVE_LINKS.map(l => (
            <Link key={l.path} to={l.path} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--card)", border: "1px solid var(--card-border)",
                borderRadius: 14, padding: "14px 8px", textAlign: "center",
                transition: "border-color 0.18s, transform 0.18s", cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 20, marginBottom: 6 }}>{l.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text)" }}>{l.label}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div style={{ marginTop: 36 }}>
          <Link to="/" style={{ fontSize: 13, color: "var(--text3)", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
