import { useState } from "react";
import { SectionHeader, Card, Badge } from "../components/UI";

const CATEGORIES = ["All", "Java", "Python", "C++", "IoT", "Networking", "Academic", "Web Dev"];

const RESOURCES = [
  { title: "Java OOP Fundamentals", tag: "Java", color: "#C4913A", icon: "☕", desc: "Classes, interfaces, inheritance, polymorphism & collections explained from scratch.", level: "Beginner", duration: "3h 20m", topics: 14 },
  { title: "Python for Engineering", tag: "Python", color: "#2D3A8C", icon: "🐍", desc: "Data structures, algorithms, NumPy basics & scripting for engineers.", level: "Beginner", duration: "4h 10m", topics: 18 },
  { title: "C++ DSA Masterclass", tag: "C++", color: "#1D6B4A", icon: "⚡", desc: "Arrays, linked lists, trees, graphs, sorting & competitive programming patterns.", level: "Intermediate", duration: "6h 40m", topics: 26 },
  { title: "IoT with Arduino & ESP32", tag: "IoT", color: "#8B4A9C", icon: "📡", desc: "Build real IoT systems: sensors, actuators, MQTT, cloud integration & dashboards.", level: "Intermediate", duration: "5h 00m", topics: 20 },
  { title: "Chat App Architecture", tag: "Networking", color: "#B03A2E", icon: "💬", desc: "WebSockets, REST API design, Socket.io, Node.js backend & React frontend.", level: "Intermediate", duration: "2h 50m", topics: 10 },
  { title: "OS & System Programming", tag: "Academic", color: "#2D3A8C", icon: "💾", desc: "Process management, memory, file systems, threading & synchronization.", level: "Advanced", duration: "5h 30m", topics: 22 },
  { title: "DBMS & SQL Deep Dive", tag: "Academic", color: "#C4913A", icon: "🗄️", desc: "Normalization, transactions, indexing, joins & query optimization.", level: "Intermediate", duration: "4h 00m", topics: 16 },
  { title: "React.js Complete Guide", tag: "Web Dev", color: "#1D6B4A", icon: "⚛️", desc: "Hooks, state management, routing, API calls & deploying React apps.", level: "Intermediate", duration: "7h 00m", topics: 28 },
  { title: "Computer Networks Notes", tag: "Academic", color: "#8B4A9C", icon: "🌐", desc: "OSI model, TCP/IP, routing, protocols, DNS & security fundamentals.", level: "Beginner", duration: "3h 00m", topics: 12 },
];

const LEVEL_COLORS = { Beginner: "#1D6B4A", Intermediate: "#C4913A", Advanced: "#B03A2E" };

export default function Resources() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = RESOURCES.filter(r =>
    (active === "All" || r.tag === active) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader
        label="📚 Learning Hub"
        labelColor="#2D3A8C"
        title="Coding & Academic Resources"
        subtitle="Carefully curated tutorials, notes and practical guides for engineering students."
      />

      {/* Search + Filter */}
      <div style={{ display: "flex", gap: 14, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
          <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "var(--text3)" }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search resources..."
            style={{
              width: "100%", padding: "10px 14px 10px 36px",
              borderRadius: 12, border: "1px solid var(--card-border)",
              background: "var(--card)", color: "var(--text)", fontSize: 14, outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              fontSize: 12, padding: "8px 16px", borderRadius: 20,
              border: "1px solid var(--card-border)",
              background: active === c ? "var(--accent)" : "var(--card)",
              color: active === c ? "#fff" : "var(--text2)",
              cursor: "pointer", fontWeight: 600, fontFamily: "inherit",
              transition: "all 0.18s"
            }}>{c}</button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 20 }}>
        Showing <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> resources
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {filtered.map((r, i) => (
          <div key={r.title} className="card-lift fade-up" style={{
            background: "var(--card)", border: "1px solid var(--card-border)",
            borderRadius: 18, padding: "24px", position: "relative", overflow: "hidden",
            animationDelay: `${i * 0.06}s`
          }}>
            {/* Top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: r.color, opacity: 0.75 }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 13,
                background: r.color + "18", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: 22
              }}>{r.icon}</div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Badge color={LEVEL_COLORS[r.level]}>{r.level}</Badge>
              </div>
            </div>

            <Badge color={r.color} style={{ marginBottom: 8 }}>{r.tag}</Badge>
            <h3 style={{ fontWeight: 700, fontSize: 15, margin: "8px 0 8px", lineHeight: 1.3 }}>{r.title}</h3>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 18 }}>{r.desc}</p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", gap: 14 }}>
                <span style={{ fontSize: 11, color: "var(--text3)" }}>🕐 {r.duration}</span>
                <span style={{ fontSize: 11, color: "var(--text3)" }}>📄 {r.topics} topics</span>
              </div>
              <button style={{
                fontSize: 12, fontWeight: 700, color: r.color, background: r.color + "12",
                border: "none", padding: "6px 14px", borderRadius: 20, cursor: "pointer",
                fontFamily: "inherit", transition: "all 0.18s"
              }}>Start →</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
          <div style={{ fontWeight: 600 }}>No resources found</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>Try a different search term or category</div>
        </div>
      )}
    </div>
  );
}
