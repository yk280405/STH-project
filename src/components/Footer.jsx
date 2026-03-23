import { Link } from "react-router-dom";

const LINKS = {
  "Learn": [
    { label: "Coding Resources", path: "/resources" },
    { label: "Subject Notes",    path: "/notes" },
    { label: "Project Ideas",    path: "/projects" },
    { label: "AI Tools",         path: "/ai-tools" },
  ],
  "Tools": [
    { label: "CGPA Calculator",  path: "/tools" },
    { label: "% Calculator",     path: "/tools" },
    { label: "Number Converter", path: "/tools" },
    { label: "Unit Converter",   path: "/tools" },
  ],
  "Guides": [
    { label: "Laptop Reviews",  path: "/guides" },
    { label: "Best Gadgets",    path: "/guides" },
    { label: "Student Deals",   path: "/guides" },
    { label: "Tech Comparisons",path: "/guides" },
  ],
  "Company": [
    { label: "About Us",   path: "/about" },
    { label: "Search",     path: "/search" },
    { label: "Privacy",    path: "/" },
    { label: "Contact",    path: "/" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "52px 24px 28px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 28, marginBottom: 44 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>⚡</div>
              <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: -0.3, color: "var(--text)" }}>StudentTechHub</span>
            </Link>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.75, maxWidth: 230, marginBottom: 18 }}>
              A complete ecosystem for engineering students — learn, build, and discover smarter.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["GitHub", "Twitter", "Discord"].map(s => (
                <div key={s} style={{
                  padding: "5px 12px", borderRadius: 8, border: "1px solid var(--card-border)",
                  fontSize: 11, fontWeight: 600, color: "var(--text2)", cursor: "pointer",
                  transition: "color 0.18s, border-color 0.18s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--card-border)"; }}
                >{s}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text3)", marginBottom: 14 }}>{title}</div>
              {links.map(l => (
                <Link key={l.label} to={l.path} style={{ display: "block", fontSize: 13, color: "var(--text2)", marginBottom: 9, textDecoration: "none", transition: "color 0.18s" }}
                  onMouseEnter={e => e.target.style.color = "var(--accent)"}
                  onMouseLeave={e => e.target.style.color = "var(--text2)"}
                >{l.label}</Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, borderTop: "1px solid var(--border)", paddingTop: 22 }}>
          <span style={{ fontSize: 12, color: "var(--text3)" }}>
            © 2025 StudentTechHub — Built with ❤️ for students everywhere
          </span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 11, color: "var(--text3)" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
