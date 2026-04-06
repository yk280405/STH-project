import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Badge } from "../components/UI";
import useSEO from "../hooks/useSEO";

const ALL_ITEMS = [
  // Java Notes (live)
  { type: "Notes",    title: "Java Unit 1 — Complete Notes",          tags: ["Java", "OOPs", "Exception Handling"], path: "/notes",    color: "#C4913A", icon: "☕" },
  // Resources (live)
  { type: "Resource", title: "Java OOP & Inheritance",                tags: ["Java", "OOP", "Inheritance"],         path: "/resources", color: "#C4913A", icon: "☕" },
  { type: "Resource", title: "Java Exception Handling",               tags: ["Java", "try-catch", "throw"],         path: "/resources", color: "#C4913A", icon: "☕" },
  { type: "Resource", title: "Java Data Types & Keywords",            tags: ["Java", "Fundamentals", "Beginners"],  path: "/resources", color: "#C4913A", icon: "☕" },
  { type: "Resource", title: "Python for Engineering",                tags: ["Python", "Beginner"],                 path: "/resources", color: "#2D3A8C", icon: "🐍" },
  { type: "Resource", title: "C++ DSA Masterclass",                   tags: ["C++", "DSA", "Intermediate"],         path: "/resources", color: "#1D6B4A", icon: "⚡" },
  { type: "Resource", title: "IoT with Arduino & ESP32",              tags: ["IoT", "Arduino", "ESP32"],            path: "/resources", color: "#8B4A9C", icon: "📡" },
  // Tools (live - direct links)
  { type: "Tool",     title: "CGPA Calculator",                       tags: ["CGPA", "GPA", "Grades", "Calculator"],    path: "/tools/cgpa",             color: "#2D3A8C", icon: "🎓" },
  { type: "Tool",     title: "Percentage Calculator",                 tags: ["Marks", "Percentage", "Calculator"],      path: "/tools/percentage",        color: "#C4913A", icon: "📊" },
  { type: "Tool",     title: "Number System Converter",               tags: ["Binary", "Hex", "Octal", "Decimal"],      path: "/tools/number-converter",  color: "#1D6B4A", icon: "🔢" },
  { type: "Tool",     title: "Unit Converter",                        tags: ["Length", "Mass", "Temperature", "Data"],  path: "/tools/unit-converter",    color: "#8B4A9C", icon: "⚖️" },
  // Guides (coming soon)
  { type: "Guide",    title: "Best Laptops for Students",             tags: ["Laptop", "Budget", "Buying Guide"],   path: "/guides",   color: "#2D3A8C", icon: "💻" },
  { type: "Guide",    title: "GitHub Student Developer Pack",         tags: ["Free", "Student Deal", "GitHub"],     path: "/guides",   color: "#C4913A", icon: "🎁" },
  { type: "Guide",    title: "Best Earbuds for Students",             tags: ["Gadgets", "Earbuds", "Budget"],       path: "/guides",   color: "#1D6B4A", icon: "🎧" },
  // AI Tools (coming soon)
  { type: "AI Tool",  title: "GitHub Copilot",                        tags: ["AI", "Coding", "VS Code"],            path: "/ai-tools", color: "#2D3A8C", icon: "🤖" },
  { type: "AI Tool",  title: "ChatGPT for Students",                  tags: ["AI", "Learning", "Free"],             path: "/ai-tools", color: "#1D6B4A", icon: "💬" },
  { type: "AI Tool",  title: "Perplexity AI",                         tags: ["AI", "Research", "Search"],           path: "/ai-tools", color: "#B03A2E", icon: "🔍" },
  { type: "AI Tool",  title: "Wolfram Alpha",                         tags: ["Maths", "Physics", "Calculator"],     path: "/ai-tools", color: "#C4913A", icon: "🔢" },
  // Projects (coming soon)
  { type: "Project",  title: "Smart Attendance System",               tags: ["Final Year", "Python", "AI/ML"],      path: "/projects", color: "#2D3A8C", icon: "📸" },
  { type: "Project",  title: "IoT Weather Station",                   tags: ["Mini Project", "Arduino", "IoT"],    path: "/projects", color: "#1D6B4A", icon: "🌡️" },
  { type: "Project",  title: "Real-Time Chat App",                    tags: ["Intermediate", "React", "Node.js"],  path: "/projects", color: "#8B4A9C", icon: "💬" },
  { type: "Project",  title: "Smart Home Automation",                 tags: ["Final Year", "IoT", "ESP32"],        path: "/projects", color: "#1D6B4A", icon: "🏠" },
  { type: "Project",  title: "Online Code Judge",                     tags: ["Final Year", "Docker", "Advanced"],  path: "/projects", color: "#B03A2E", icon: "⚡" },
  // About
  { type: "Page",     title: "About StudentTechHub",                  tags: ["About", "Mission", "Team"],           path: "/about",    color: "#2D3A8C", icon: "ℹ️" },
];

const TYPE_COLORS = {
  Resource: "#C4913A", Tool: "#2D3A8C", Guide: "#1D6B4A",
  "AI Tool": "#8B4A9C", Project: "#B03A2E", Notes: "#C4913A", Page: "#2D3A8C",
};

const SUGGESTIONS = ["CGPA", "Java", "OOPs", "percentage", "binary converter", "unit converter", "IoT project", "AI tools"];

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate        = useNavigate();
  const inputRef        = useRef(null);

  // Read ?q= from URL on mount
  const urlQuery = searchParams.get("q") || "";
  const [query, setQuery]         = useState(urlQuery);
  const [activeType, setActiveType] = useState("All");

  useSEO({
    title:       query ? `Search: "${query}" | StudentTechHub` : "Search — StudentTechHub",
    description: "Search across all resources, tools, guides, projects and notes on StudentTechHub.",
    canonical:   "https://studenttechhub.com/search",
  });

  // Sync input when URL changes
  useEffect(() => { setQuery(urlQuery); }, [urlQuery]);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const results = query.trim().length < 1 ? [] : ALL_ITEMS.filter(item => {
    const q = query.toLowerCase();
    return (
      (activeType === "All" || item.type === activeType) &&
      (item.title.toLowerCase().includes(q) ||
       item.tags.some(t => t.toLowerCase().includes(q)))
    );
  });

  const types = ["All", ...Array.from(new Set(ALL_ITEMS.map(i => i.type)))];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "52px 24px 80px" }}>

      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>🔍 Search</div>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 900, letterSpacing: -1, marginBottom: 10 }}>
          Find Anything on STHub
        </h1>
        <p style={{ color: "var(--text2)", fontSize: 15 }}>Resources, tools, notes, guides and project ideas</p>
      </div>

      {/* Search bar */}
      <form onSubmit={handleSubmit} style={{ position: "relative", marginBottom: 24 }}>
        <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 18 }}>🔍</span>
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for 'CGPA', 'Java', 'IoT project'..."
          style={{
            width: "100%", padding: "16px 52px 16px 50px",
            borderRadius: 16, border: "2px solid var(--card-border)",
            background: "var(--card)", color: "var(--text)", fontSize: 16,
            outline: "none", boxSizing: "border-box", fontFamily: "inherit",
            transition: "border-color 0.2s", boxShadow: "var(--shadow-card)",
          }}
          onFocus={e => e.target.style.borderColor = "var(--accent)"}
          onBlur={e => e.target.style.borderColor = "var(--card-border)"}
        />
        {query && (
          <button type="button" onClick={() => { setQuery(""); navigate("/search"); inputRef.current?.focus(); }}
            style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text3)", fontSize: 20, lineHeight: 1, padding: 4 }}>✕</button>
        )}
      </form>

      {/* Type filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {types.map(t => (
          <button key={t} onClick={() => setActiveType(t)} style={{
            fontSize: 12, padding: "6px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600,
            border: "1px solid var(--card-border)",
            background: activeType === t ? "var(--accent)" : "var(--card)",
            color: activeType === t ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s",
          }}>{t}</button>
        ))}
      </div>

      {/* Empty state — suggestions */}
      {query.trim().length < 1 && (
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 14 }}>POPULAR SEARCHES</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {SUGGESTIONS.map(s => (
              <button key={s} onClick={() => { setQuery(s); navigate(`/search?q=${encodeURIComponent(s)}`); }} style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontFamily: "inherit",
                border: "1px solid var(--card-border)", background: "var(--card)",
                color: "var(--text2)", cursor: "pointer", transition: "all 0.18s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.color = "var(--text2)"; }}
              >{s}</button>
            ))}
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 14 }}>QUICK LINKS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { label: "Java Notes",    path: "/resources",  icon: "☕" },
              { label: "CGPA Calc",     path: "/tools/cgpa", icon: "🎓" },
              { label: "All Tools",     path: "/tools",      icon: "🔧" },
              { label: "Subject Notes", path: "/notes",      icon: "📝" },
              { label: "About",         path: "/about",      icon: "ℹ️" },
              { label: "Home",          path: "/",           icon: "🏠" },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--card)", border: "1px solid var(--card-border)",
                  borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10,
                  transition: "border-color 0.18s, transform 0.18s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span style={{ fontSize: 18 }}>{l.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{l.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {query.trim().length >= 1 && (
        <>
          <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 18 }}>
            {results.length > 0
              ? <><strong style={{ color: "var(--text)" }}>{results.length}</strong> result{results.length !== 1 ? "s" : ""} for "<strong style={{ color: "var(--accent)" }}>{query}</strong>"</>
              : <>No results for "<strong style={{ color: "var(--accent)" }}>{query}</strong>" — try a different term</>
            }
          </div>

          {results.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {results.map((item, i) => (
                <Link key={`${item.title}-${i}`} to={item.path} style={{ textDecoration: "none" }}>
                  <div className="fade-up" style={{
                    background: "var(--card)", border: "1px solid var(--card-border)",
                    borderRadius: 14, padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: 14,
                    transition: "border-color 0.18s, transform 0.18s",
                    animationDelay: `${i * 0.04}s`,
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: item.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 5 }}>{item.title}</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: TYPE_COLORS[item.type] + "18", color: TYPE_COLORS[item.type] }}>{item.type}</span>
                        {item.tags.slice(0, 3).map(t => <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)" }}>{t}</span>)}
                      </div>
                    </div>
                    <span style={{ fontSize: 16, color: "var(--text3)", flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>No results found</div>
              <p style={{ color: "var(--text2)", fontSize: 14, marginBottom: 20 }}>Try searching for "Java", "CGPA", "binary", or "OOPs"</p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/resources"><button className="btn-ghost" style={{ fontSize: 12 }}>Java Notes</button></Link>
                <Link to="/tools"><button className="btn-ghost" style={{ fontSize: 12 }}>Free Tools</button></Link>
                <Link to="/notes"><button className="btn-ghost" style={{ fontSize: 12 }}>Subject Notes</button></Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
