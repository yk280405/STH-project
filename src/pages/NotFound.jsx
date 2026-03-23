import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "100px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 72, marginBottom: 20, animation: "float 3s ease-in-out infinite" }}>🤔</div>
      <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: -4, color: "var(--card-border)", lineHeight: 1, marginBottom: 10 }}>404</div>
      <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: -0.6, marginBottom: 14 }}>
        Page not found
      </h1>
      <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
        This page doesn't exist or was moved. Let's get you back on track.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
        <Link to="/"><button className="btn-primary" style={{ fontSize: 14 }}>← Go Home</button></Link>
        <Link to="/search"><button className="btn-ghost" style={{ fontSize: 13 }}>Search STHub</button></Link>
      </div>

      <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "24px", textAlign: "left" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 14 }}>QUICK LINKS</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            ["/resources", "📚", "Resources"],
            ["/tools",     "🔧", "Tools"],
            ["/guides",    "💻", "Tech Guides"],
            ["/ai-tools",  "🤖", "AI Tools"],
            ["/projects",  "🚀", "Projects"],
            ["/notes",     "📝", "Notes"],
          ].map(([path, icon, label]) => (
            <Link key={path} to={path} style={{ textDecoration: "none" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8, padding: "10px 12px",
                borderRadius: 10, border: "1px solid var(--card-border)",
                transition: "border-color 0.18s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--card-border)"}
              >
                <span style={{ fontSize: 16 }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
