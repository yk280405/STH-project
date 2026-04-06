import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Resources", path: "/resources", icon: "📚" },
  { label: "Tools",     path: "/tools",     icon: "🔧" },
  { label: "Guides",    path: "/guides",    icon: "💻" },
  { label: "AI Tools",  path: "/ai-tools",  icon: "🤖" },
  { label: "Projects",  path: "/projects",  icon: "🚀" },
  { label: "Notes",     path: "/notes",     icon: "📝" },
];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal]   = useState("");
  const loc      = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchOpen(false);
      setSearchVal("");
    }
  };

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 200,
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px) saturate(1.6)",
        WebkitBackdropFilter: "blur(20px) saturate(1.6)",
        borderBottom: "1px solid var(--border)",
        padding: "0 24px", height: 64, transition: "background 0.35s"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", gap: 6 }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 9, flexShrink: 0, marginRight: 8 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16,
              boxShadow: "0 0 16px color-mix(in srgb, var(--accent) 40%, transparent)"
            }}>⚡</div>
            <span className="hide-mobile" style={{ fontWeight: 800, fontSize: 15, letterSpacing: -0.3, color: "var(--text)" }}>
              Student<span style={{ color: "var(--accent)" }}>Tech</span>Hub
            </span>
          </Link>

          {/* Nav links desktop */}
          <div className="hide-mobile" style={{ display: "flex", gap: 1 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.path} to={l.path}
                className={`nav-link${loc.pathname === l.path ? " active" : ""}`}
                style={{
                  padding: "6px 12px", fontSize: 13, fontWeight: 500,
                  color: loc.pathname === l.path ? "var(--accent)" : "var(--text2)",
                  textDecoration: "none", borderRadius: 8, whiteSpace: "nowrap"
                }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>

            {/* Search */}
            {searchOpen ? (
              <form onSubmit={handleSearch} className="fade-in hide-mobile" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <input autoFocus value={searchVal} onChange={e => setSearchVal(e.target.value)}
                  placeholder="Search resources, tools..."
                  style={{ background: "var(--bg2)", border: "1px solid var(--card-border)", borderRadius: 10, padding: "7px 14px", fontSize: 13, color: "var(--text)", outline: "none", width: 210, fontFamily: "inherit" }} />
                <button type="submit" className="btn-primary" style={{ fontSize: 12, padding: "7px 14px" }}>Go</button>
                <button type="button" onClick={() => setSearchOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text3)", fontSize: 18, lineHeight: 1, padding: 0 }}>✕</button>
              </form>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="hide-mobile" style={{
                background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10,
                padding: "7px 12px", cursor: "pointer", color: "var(--text2)", fontSize: 14,
                display: "flex", alignItems: "center", gap: 6
              }}>
                🔍 <span style={{ fontSize: 12 }}>Search</span>
              </button>
            )}

            <Link to="/about" className="hide-mobile" style={{
              fontSize: 13, fontWeight: 500,
              color: loc.pathname === "/about" ? "var(--accent)" : "var(--text2)",
              textDecoration: "none", padding: "6px 10px", borderRadius: 8
            }}>About</Link>

            <Link to="/feedback" className="hide-mobile" style={{
              fontSize: 13, fontWeight: 500,
              color: loc.pathname === "/feedback" ? "var(--accent)" : "var(--text2)",
              textDecoration: "none", padding: "6px 10px", borderRadius: 8
            }}>Feedback</Link>

            {/* Theme toggle */}
            <button onClick={() => setDark(!dark)} style={{
              background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10,
              padding: "7px 11px", fontSize: 16, cursor: "pointer", lineHeight: 1,
              transition: "transform 0.25s ease"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "rotate(22deg) scale(1.1)"}
              onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg) scale(1)"}
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <Link to="/resources" className="hide-mobile">
              <button className="btn-primary" style={{ fontSize: 12, padding: "8px 16px", whiteSpace: "nowrap" }}>Get Started</button>
            </Link>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{
              display: "none", background: "none", border: "1px solid var(--border)",
              borderRadius: 8, padding: "7px 10px", cursor: "pointer", color: "var(--text)", fontSize: 18, lineHeight: 1
            }} className="hide-desktop">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fade-in" style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
          background: "var(--bg)", zIndex: 199, padding: "16px 24px",
          borderTop: "1px solid var(--border)", overflowY: "auto"
        }}>
          <form onSubmit={(e) => { e.preventDefault(); if (searchVal.trim()) { navigate(`/search?q=${encodeURIComponent(searchVal)}`); setMenuOpen(false); setSearchVal(""); }}} style={{ marginBottom: 16 }}>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>🔍</span>
              <input value={searchVal} onChange={e => setSearchVal(e.target.value)} placeholder="Search STHub..."
                style={{ width: "100%", padding: "11px 14px 11px 34px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--card)", color: "var(--text)", fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </form>

          {[...NAV_LINKS, { label: "About", path: "/about", icon: "ℹ️" }].map((l, i) => (
            <Link key={l.path} to={l.path} onClick={() => setMenuOpen(false)}
              className="slide-in"
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "14px 4px",
                borderBottom: "1px solid var(--border)", textDecoration: "none",
                color: loc.pathname === l.path ? "var(--accent)" : "var(--text)",
                fontWeight: 600, fontSize: 15, animationDelay: `${i * 0.04}s`
              }}>
              <span style={{ fontSize: 20, width: 28 }}>{l.icon}</span>{l.label}
            </Link>
          ))}

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <Link to="/resources" style={{ flex: 1, textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
              <button className="btn-primary" style={{ width: "100%", padding: 13, fontSize: 14 }}>Get Started Free</button>
            </Link>
            <button onClick={() => setDark(!dark)} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 12, padding: "13px 18px", fontSize: 18, cursor: "pointer" }}>
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
