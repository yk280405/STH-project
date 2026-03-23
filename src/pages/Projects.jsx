import { useState } from "react";
import { SectionHeader, Badge } from "../components/UI";

const PROJECTS = [
  { title: "Smart Attendance System", level: "Final Year", type: "AI/ML", stack: ["Python", "OpenCV", "Flask", "MySQL"], icon: "📸", color: "#2D3A8C", desc: "Face recognition based attendance using OpenCV + DeepFace. REST API backend with Flask and real-time dashboard.", difficulty: 4, stars: 142 },
  { title: "IoT Weather Station", level: "Mini Project", type: "IoT", stack: ["Arduino", "ESP8266", "C++", "Firebase"], icon: "🌡️", color: "#1D6B4A", desc: "Real-time weather monitoring with temperature, humidity & pressure sensors. Data pushed to Firebase & displayed on LCD.", difficulty: 2, stars: 88 },
  { title: "Real-Time Chat App", level: "Intermediate", type: "Web Dev", stack: ["React", "Node.js", "Socket.io", "MongoDB"], icon: "💬", color: "#8B4A9C", desc: "Full-stack chat with rooms, private messages, typing indicators & file sharing. JWT auth included.", difficulty: 3, stars: 211 },
  { title: "Student Result Portal", level: "Mini Project", type: "Web Dev", stack: ["HTML", "CSS", "PHP", "MySQL"], icon: "📊", color: "#C4913A", desc: "Grade management portal for students & faculty. Supports bulk upload, grade calculation and PDF report generation.", difficulty: 2, stars: 67 },
  { title: "AI Plagiarism Detector", level: "Final Year", type: "AI/ML", stack: ["Python", "NLP", "Flask", "NLTK"], icon: "🔎", color: "#B03A2E", desc: "Detects plagiarism using TF-IDF & cosine similarity. Compares against existing documents and online sources.", difficulty: 4, stars: 156 },
  { title: "Smart Home Automation", level: "Final Year", type: "IoT", stack: ["ESP32", "MQTT", "React", "Node.js"], icon: "🏠", color: "#1D6B4A", desc: "Control lights, fans & appliances via web dashboard. Voice control integration with Google Assistant.", difficulty: 5, stars: 203 },
  { title: "Expense Tracker App", level: "Mini Project", type: "Web Dev", stack: ["React", "Chart.js", "LocalStorage"], icon: "💰", color: "#2D3A8C", desc: "Personal finance tracker with categories, monthly reports & charts. PWA support for offline use.", difficulty: 2, stars: 94 },
  { title: "Library Management System", level: "Mini Project", type: "Software", stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"], icon: "📚", color: "#8B4A9C", desc: "Full CRUD library system with book lending, fines, member management and email notifications.", difficulty: 3, stars: 73 },
  { title: "Online Code Judge", level: "Final Year", type: "Software", stack: ["React", "Node.js", "Docker", "MongoDB"], icon: "⚡", color: "#B03A2E", desc: "Build your own LeetCode. Supports C++, Java, Python with sandboxed Docker execution and test cases.", difficulty: 5, stars: 318 },
];

const LEVELS = ["All", "Mini Project", "Intermediate", "Final Year"];
const TYPES  = ["All", "Web Dev", "AI/ML", "IoT", "Software"];

export default function Projects() {
  const [level, setLevel] = useState("All");
  const [type, setType]   = useState("All");

  const filtered = PROJECTS.filter(p =>
    (level === "All" || p.level === level) && (type === "All" || p.type === type)
  );

  const LEVEL_COLORS = { "Mini Project": "#1D6B4A", "Intermediate": "#C4913A", "Final Year": "#B03A2E" };
  const TYPE_COLORS  = { "Web Dev": "#2D3A8C", "AI/ML": "#8B4A9C", "IoT": "#1D6B4A", "Software": "#C4913A" };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader
        label="🚀 Ideas Bank"
        labelColor="#B03A2E"
        title="Project Ideas for Students"
        subtitle="From mini projects to final year — all with tech stacks and guidance."
      />

      {/* Filters */}
      <div style={{ display: "flex", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 8 }}>LEVEL</div>
          <div style={{ display: "flex", gap: 6 }}>
            {LEVELS.map(l => (
              <button key={l} onClick={() => setLevel(l)} style={{
                fontSize: 12, padding: "7px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600,
                border: "1px solid var(--card-border)",
                background: level === l ? LEVEL_COLORS[l] || "var(--accent)" : "var(--card)",
                color: level === l ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s"
              }}>{l}</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 8 }}>TYPE</div>
          <div style={{ display: "flex", gap: 6 }}>
            {TYPES.map(t => (
              <button key={t} onClick={() => setType(t)} style={{
                fontSize: 12, padding: "7px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600,
                border: "1px solid var(--card-border)",
                background: type === t ? TYPE_COLORS[t] || "var(--accent)" : "var(--card)",
                color: type === t ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s"
              }}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 20 }}>
        <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> projects found
      </div>

      {/* Project Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
        {filtered.map((p, i) => (
          <div key={p.title} className="card-lift fade-up" style={{
            background: "var(--card)", border: "1px solid var(--card-border)",
            borderRadius: 18, padding: "24px", position: "relative", overflow: "hidden",
            animationDelay: `${i * 0.06}s`
          }}>
            {/* Bottom accent */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: p.color, opacity: 0.7 }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ fontSize: 32 }}>{p.icon}</div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#C4913A", fontWeight: 700 }}>⭐ {p.stars}</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
              <Badge color={LEVEL_COLORS[p.level]}>{p.level}</Badge>
              <Badge color={TYPE_COLORS[p.type]}>{p.type}</Badge>
            </div>

            <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>

            {/* Difficulty */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
              <span style={{ fontSize: 11, color: "var(--text3)" }}>Difficulty</span>
              <div style={{ display: "flex", gap: 3 }}>
                {[1,2,3,4,5].map(d => (
                  <div key={d} style={{ width: 12, height: 12, borderRadius: 3, background: d <= p.difficulty ? p.color : "var(--bg3)", transition: "background 0.2s" }} />
                ))}
              </div>
            </div>

            {/* Stack */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {p.stack.map(s => (
                <span key={s} className="mono" style={{
                  fontSize: 10, fontWeight: 500, padding: "3px 10px", borderRadius: 20,
                  background: "var(--bg2)", color: "var(--text2)", border: "1px solid var(--border)"
                }}>{s}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn-primary" style={{ flex: 1, fontSize: 12, padding: "9px" }}>
                View Guide →
              </button>
              <button className="btn-ghost" style={{ fontSize: 12, padding: "9px 14px" }}>
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚀</div>
          <div style={{ fontWeight: 600 }}>No projects match your filters</div>
          <button onClick={() => { setLevel("All"); setType("All"); }} className="btn-ghost" style={{ marginTop: 14, fontSize: 13 }}>Reset Filters</button>
        </div>
      )}
    </div>
  );
}
