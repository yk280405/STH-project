import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/UI";

const ALL_ITEMS = [
  // Resources
  { type: "Resource", title: "Java OOP Fundamentals", tags: ["Java", "OOP", "Beginner"], path: "/resources", color: "#C4913A", icon: "☕" },
  { type: "Resource", title: "Python for Engineering", tags: ["Python", "Beginner"], path: "/resources", color: "#2D3A8C", icon: "🐍" },
  { type: "Resource", title: "C++ DSA Masterclass", tags: ["C++", "DSA", "Intermediate"], path: "/resources", color: "#1D6B4A", icon: "⚡" },
  { type: "Resource", title: "IoT with Arduino & ESP32", tags: ["IoT", "Arduino", "ESP32"], path: "/resources", color: "#8B4A9C", icon: "📡" },
  { type: "Resource", title: "React.js Complete Guide", tags: ["React", "Web Dev", "Frontend"], path: "/resources", color: "#1D6B4A", icon: "⚛️" },
  { type: "Resource", title: "DBMS & SQL Deep Dive", tags: ["SQL", "Database", "Academic"], path: "/resources", color: "#C4913A", icon: "🗄️" },
  // Tools
  { type: "Tool", title: "CGPA Calculator", tags: ["Calculator", "GPA", "Grades"], path: "/tools", color: "#2D3A8C", icon: "🎓" },
  { type: "Tool", title: "Percentage Calculator", tags: ["Calculator", "Marks", "Percentage"], path: "/tools", color: "#C4913A", icon: "📊" },
  { type: "Tool", title: "Binary/Hex Number Converter", tags: ["Binary", "Hex", "Converter"], path: "/tools", color: "#1D6B4A", icon: "🔢" },
  { type: "Tool", title: "Unit Converter", tags: ["Length", "Mass", "Temperature"], path: "/tools", color: "#8B4A9C", icon: "⚖️" },
  // Guides
  { type: "Guide", title: "Lenovo IdeaPad Slim 3 Review", tags: ["Laptop", "Budget", "Ryzen"], path: "/guides", color: "#2D3A8C", icon: "💻" },
  { type: "Guide", title: "HP Pavilion 15 Review", tags: ["Laptop", "Intel", "16GB RAM"], path: "/guides", color: "#1D6B4A", icon: "💻" },
  { type: "Guide", title: "GitHub Student Developer Pack", tags: ["Free", "Student Deal", "GitHub"], path: "/guides", color: "#C4913A", icon: "🎁" },
  // AI Tools
  { type: "AI Tool", title: "GitHub Copilot", tags: ["AI", "Coding", "VS Code"], path: "/ai-tools", color: "#2D3A8C", icon: "🤖" },
  { type: "AI Tool", title: "ChatGPT", tags: ["AI", "Learning", "Free"], path: "/ai-tools", color: "#1D6B4A", icon: "💬" },
  { type: "AI Tool", title: "Perplexity AI", tags: ["AI", "Research", "Search"], path: "/ai-tools", color: "#B03A2E", icon: "🔍" },
  { type: "AI Tool", title: "Wolfram Alpha", tags: ["Maths", "Physics", "Calculator"], path: "/ai-tools", color: "#C4913A", icon: "🔢" },
  // Projects
  { type: "Project", title: "Smart Attendance System", tags: ["Final Year", "Python", "AI/ML"], path: "/projects", color: "#2D3A8C", icon: "📸" },
  { type: "Project", title: "IoT Weather Station", tags: ["Mini Project", "Arduino", "IoT"], path: "/projects", color: "#1D6B4A", icon: "🌡️" },
  { type: "Project", title: "Real-Time Chat App", tags: ["Intermediate", "React", "Socket.io"], path: "/projects", color: "#8B4A9C", icon: "💬" },
  { type: "Project", title: "Smart Home Automation", tags: ["Final Year", "IoT", "ESP32"], path: "/projects", color: "#1D6B4A", icon: "🏠" },
  { type: "Project", title: "Online Code Judge", tags: ["Final Year", "Docker", "Advanced"], path: "/projects", color: "#B03A2E", icon: "⚡" },
  // Notes
  { type: "Notes", title: "OS Process Management Notes", tags: ["OS", "Scheduling", "Exam"], path: "/notes", color: "#2D3A8C", icon: "💾" },
  { type: "Notes", title: "Database Normalization Guide", tags: ["DBMS", "SQL", "1NF"], path: "/notes", color: "#1D6B4A", icon: "🗄️" },
  { type: "Notes", title: "DSA Sorting Algorithms", tags: ["DSA", "Big O", "Interview"], path: "/notes", color: "#C4913A", icon: "📊" },
];

const TYPE_COLORS = {
  Resource: "#2D3A8C", Tool: "#C4913A", Guide: "#1D6B4A",
  "AI Tool": "#8B4A9C", Project: "#B03A2E", Notes: "#1D6B4A"
};

const SUGGESTIONS = ["CGPA calculator", "Python tutorial", "IoT project", "best laptop", "AI tools free", "DSA notes", "final year project"];

export default function Search() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const results = query.trim().length < 2 ? [] : ALL_ITEMS.filter(item => {
    const q = query.toLowerCase();
    return (
      (activeType === "All" || item.type === activeType) &&
      (item.title.toLowerCase().includes(q) || item.tags.some(t => t.toLowerCase().includes(q)))
    );
  });

  const types = ["All", ...Array.from(new Set(ALL_ITEMS.map(i => i.type)))];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "52px 24px 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div className="section-label" style={{ color: "var(--accent)", marginBottom: 10 }}>🔍 Search</div>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 900, letterSpacing: -1, marginBottom: 10 }}>
          Find Anything on STHub
        </h1>
        <p style={{ color: "var(--text2)", fontSize: 15 }}>Search across resources, tools, guides, projects and notes</p>
      </div>

      {/* Search bar */}
      <div style={{ position: "relative", marginBottom: 24 }}>
        <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 18 }}>🔍</span>
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for 'python', 'CGPA', 'IoT project'..."
          style={{
            width: "100%", padding: "16px 18px 16px 50px",
            borderRadius: 16, border: "2px solid var(--card-border)",
            background: "var(--card)", color: "var(--text)", fontSize: 16,
            outline: "none", boxSizing: "border-box", fontFamily: "inherit",
            transition: "border-color 0.2s", boxShadow: "var(--shadow-card)"
          }}
          onFocus={e => e.target.style.borderColor = "var(--accent)"}
          onBlur={e => e.target.style.borderColor = "var(--card-border)"}
        />
        {query && (
          <button onClick={() => setQuery("")} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text3)", fontSize: 18, lineHeight: 1 }}>✕</button>
        )}
      </div>

      {/* Type filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {types.map(t => (
          <button key={t} onClick={() => setActiveType(t)} style={{
            fontSize: 12, padding: "6px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600,
            border: "1px solid var(--card-border)",
            background: activeType === t ? "var(--accent)" : "var(--card)",
            color: activeType === t ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s"
          }}>{t}</button>
        ))}
      </div>

      {/* Suggestions when empty */}
      {query.trim().length < 2 && (
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 14 }}>POPULAR SEARCHES</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {SUGGESTIONS.map(s => (
              <button key={s} onClick={() => setQuery(s)} style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontFamily: "inherit",
                border: "1px solid var(--card-border)", background: "var(--card)",
                color: "var(--text2)", cursor: "pointer", transition: "all 0.18s"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.color = "var(--text2)"; }}
              >{s}</button>
            ))}
          </div>

          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 14 }}>QUICK LINKS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {[
              { label: "Coding Resources", path: "/resources", icon: "📚" },
              { label: "Free Tools", path: "/tools", icon: "🔧" },
              { label: "Laptop Guide", path: "/guides", icon: "💻" },
              { label: "AI Tools", path: "/ai-tools", icon: "🤖" },
              { label: "Project Ideas", path: "/projects", icon: "🚀" },
              { label: "Subject Notes", path: "/notes", icon: "📝" },
            ].map(l => (
              <Link key={l.path} to={l.path} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--card)", border: "1px solid var(--card-border)",
                  borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10,
                  transition: "border-color 0.18s, transform 0.18s"
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
      {query.trim().length >= 2 && (
        <>
          <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 18 }}>
            {results.length > 0
              ? <><strong style={{ color: "var(--text)" }}>{results.length}</strong> results for "<strong style={{ color: "var(--accent)" }}>{query}</strong>"</>
              : <>No results for "<strong style={{ color: "var(--accent)" }}>{query}</strong>"</>
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
                    animationDelay: `${i * 0.04}s`
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: item.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <Badge color={TYPE_COLORS[item.type]}>{item.type}</Badge>
                        {item.tags.slice(0, 2).map(t => <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)" }}>{t}</span>)}
                      </div>
                    </div>
                    <span style={{ fontSize: 14, color: "var(--text3)", flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>No results found</div>
              <p style={{ color: "var(--text2)", fontSize: 14, marginBottom: 20 }}>Try a different term, or browse a section directly</p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/resources"><button className="btn-ghost" style={{ fontSize: 12 }}>Resources</button></Link>
                <Link to="/tools"><button className="btn-ghost" style={{ fontSize: 12 }}>Tools</button></Link>
                <Link to="/projects"><button className="btn-ghost" style={{ fontSize: 12 }}>Projects</button></Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
