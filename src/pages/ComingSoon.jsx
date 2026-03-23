import { Link, useLocation } from "react-router-dom";

const PAGE_META = {
  "/resources":          { icon: "📚", title: "Coding & Academic Resources",    desc: "Tutorials, lab experiments, notes and practical guides for engineering students." },
  "/guides":             { icon: "💻", title: "Tech Guides & Recommendations",  desc: "Laptop reviews, gadget picks, student deals and honest product comparisons." },
  "/ai-tools":           { icon: "🤖", title: "AI & Productivity Tools",        desc: "Curated AI tools for coding, learning and productivity — all in one place." },
  "/projects":           { icon: "🚀", title: "Project Ideas Bank",             desc: "Final year, mini and IoT project ideas with tech stacks and full guides." },
  "/notes":              { icon: "📝", title: "Engineering Subject Notes",      desc: "Well-structured notes for OS, DBMS, DSA, CN and more — free to read and download." },
  "/search":             { icon: "🔍", title: "Search StudentTechHub",          desc: "Search across all resources, tools, guides, projects and notes." },
};



export default function ComingSoon() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] || {
    icon: "⚡",
    title: "Something Awesome",
    desc: "This page is being crafted with care. Check back soon!",
  };

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "80px 24px 100px", textAlign: "center" }}>

      {/* Decorative background blob */}
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
          animationDelay: "0s",
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
          fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
          letterSpacing: -1.5, lineHeight: 1.08, marginBottom: 18,
          animationDelay: "0.1s",
        }}>
          {meta.title}
        </h1>

        {/* Description */}
        <p className="fade-up" style={{
          fontSize: 16, color: "var(--text2)", lineHeight: 1.75,
          maxWidth: 480, margin: "0 auto 40px",
          animationDelay: "0.15s",
        }}>
          {meta.desc} We're working hard to bring this to you — it'll be worth the wait!
        </p>

        {/* Divider */}
        <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 28 }}>
          Explore what's already live ↓
        </div>

        {/* Quick links */}
        <div className="fade-up" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12, animationDelay: "0.25s",
        }}>
          {[
            { path: "/",       icon: "🏠", label: "Home"          },
            { path: "/tools",  icon: "🔧", label: "Free Tools"    },
            { path: "/about",  icon: "ℹ️", label: "About Us"      },
          ].map(l => (
            <Link key={l.path} to={l.path} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--card)", border: "1px solid var(--card-border)",
                borderRadius: 14, padding: "14px 10px", textAlign: "center",
                transition: "border-color 0.18s, transform 0.18s",
                cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 22, marginBottom: 6 }}>{l.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{l.label}</div>
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
