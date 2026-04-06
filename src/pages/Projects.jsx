import { useState } from "react";
import { SectionHeader, Badge } from "../components/UI";
import useSEO from "../hooks/useSEO";

const PROJECTS = [
  { title: "Command-Line Inventory Manager", year: "1st Year", branch: "CSE", level: "Beginner", stack: ["Python", "File I/O", "CLI"], icon: "📦", color: "#2D3A8C", desc: "A terminal-based inventory system with add, update, delete and search. Perfect for learning Python basics, functions, and file handling." },
  { title: "Personal Portfolio Website", year: "1st Year", branch: "CSE", level: "Beginner", stack: ["HTML", "CSS", "JavaScript"], icon: "🌐", color: "#2D3A8C", desc: "Build your own responsive personal website with project showcase and contact form. The first project every CS student should complete." },
  { title: "Cricket Stats Web Scraper", year: "1st Year", branch: "AI-ML", level: "Beginner", stack: ["Python", "BeautifulSoup", "Matplotlib"], icon: "🏏", color: "#8B4A9C", desc: "Pull live cricket player statistics (run rates, centuries) from the web and visualize them using Matplotlib. Great intro to data + scraping." },
  { title: "Arduino Weather Station", year: "1st Year", branch: "IoT", level: "Beginner", stack: ["Arduino", "C++", "DHT11", "LCD"], icon: "🌡️", color: "#1D6B4A", desc: "Reads temperature and humidity from DHT11 sensor and displays on an LCD screen. Your first embedded hardware project." },
  { title: "Full-Stack CRUD Application", year: "2nd Year", branch: "CSE", level: "Intermediate", stack: ["React", "Node.js", "MongoDB", "Express"], icon: "🗄️", color: "#2D3A8C", desc: "A localized inventory app for a clothing brand — full CRUD with a React frontend, Node.js backend and MongoDB database. Real-world stack." },
  { title: "Football Match Outcome Predictor", year: "2nd Year", branch: "AI-ML", level: "Intermediate", stack: ["Python", "Scikit-Learn", "Pandas", "CSV"], icon: "⚽", color: "#8B4A9C", desc: "Predict football match outcomes from historical CSV data using classical ML with Scikit-Learn. Build and evaluate your first real model." },
  { title: "Smart Home — Raspberry Pi Server", year: "2nd Year", branch: "IoT", level: "Intermediate", stack: ["Raspberry Pi", "Python", "HTML/CSS", "Relays"], icon: "🏠", color: "#1D6B4A", desc: "A local smart home network where a Raspberry Pi toggles relays (lights, fans) via a web interface on your phone." },
  { title: "E-Commerce Platform", year: "3rd Year", branch: "CSE", level: "Advanced", stack: ["React", "Spring Boot", "PostgreSQL", "JWT"], icon: "🛒", color: "#C4913A", desc: "Robust e-commerce with React frontend, Spring Boot multi-threaded backend, PostgreSQL database, and JWT user authentication." },
  { title: "Football Player Tracking with CV", year: "3rd Year", branch: "AI-ML", level: "Advanced", stack: ["Python", "OpenCV", "YOLO", "HuggingFace"], icon: "📹", color: "#8B4A9C", desc: "Track player stamina using OpenCV and YOLO for video analysis. Or: build a natural language document summarizer with HuggingFace models." },
  { title: "Cloud Smart Agriculture System", year: "3rd Year", branch: "IoT", level: "Advanced", stack: ["ESP32", "MQTT", "AWS IoT", "Dashboard"], icon: "🌾", color: "#1D6B4A", desc: "Send soil moisture data from edge devices via MQTT to AWS IoT Core. Build a dashboard to trigger automated irrigation systems." },
  { title: "Microservices E-Commerce", year: "4th Year", branch: "CSE", level: "Final Year", stack: ["Docker", "Kubernetes", "Spring Boot", "Microservices"], icon: "🏢", color: "#B03A2E", desc: "Convert a monolithic app into microservices — separate payment gateway, user management, and product catalog into containerized services." },
  { title: "AI Productivity Platform", year: "4th Year", branch: "AI-ML", level: "Final Year", stack: ["Python", "RAG", "LLM", "FastAPI"], icon: "🤖", color: "#8B4A9C", desc: "End-to-end AI platform: automated PDF conversion, RAG-based chatbot answering questions about uploaded documents, and intelligent text generation." },
  { title: "Edge AI Traffic Management", year: "4th Year", branch: "IoT", level: "Final Year", stack: ["Jetson Nano", "OpenCV", "YOLO", "MQTT"], icon: "🚦", color: "#1D6B4A", desc: "Processes video feeds locally on a Jetson Nano to detect congestion and adjusts traffic light timings in real-time — only metadata sent to cloud." },
];

const YEARS    = ["All", "1st Year", "2nd Year", "3rd Year", "4th Year"];
const BRANCHES = ["All", "CSE", "AI-ML", "IoT"];
const LEVEL_COLORS = { Beginner: "#1D6B4A", Intermediate: "#C4913A", Advanced: "#2D3A8C", "Final Year": "#B03A2E" };
const YEAR_COLORS  = ["#2D3A8C", "#C4913A", "#8B4A9C", "#B03A2E"];
const YEAR_DESC    = {
  "1st Year": "Fundamentals & Scripting — learn clean code, logic, and basic data",
  "2nd Year": "Frameworks & Databases — build real applications with frontend + backend",
  "3rd Year": "Scalability & Specialization — complex stacks, async ops, production-level",
  "4th Year": "Capstone & Industry-Ready — real-world problems, deployable architectures",
};

export default function Projects() {
  useSEO({
    title: "Engineering Project Ideas — CSE, AI-ML, IoT by Year",
    description: "Curated project ideas for CSE, AI-ML, and IoT students from 1st to 4th year with tech stacks and descriptions.",
    canonical: "https://studenttechhub.com/projects",
    keywords: "final year project ideas, CSE project, AI ML project, IoT project, engineering mini projects",
  });

  const [year,   setYear]   = useState("All");
  const [branch, setBranch] = useState("All");

  const filtered = PROJECTS.filter(p =>
    (year   === "All" || p.year   === year) &&
    (branch === "All" || p.branch === branch)
  );

  const yearGroups = YEARS.filter(y => y !== "All")
    .map(y => ({ year: y, projects: filtered.filter(p => p.year === y) }))
    .filter(g => g.projects.length > 0);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader label="🚀 Ideas Bank" labelColor="#B03A2E" title="Project Ideas by Year & Branch"
        subtitle="Scale from standalone scripts in 1st year to industry-ready systems in 4th year." />

      {/* Progression cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 36 }}>
        {YEARS.filter(y => y !== "All").map((y, i) => (
          <div key={y} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "16px 18px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: YEAR_COLORS[i] }} />
            <div style={{ fontWeight: 800, fontSize: 15, color: YEAR_COLORS[i], marginBottom: 4 }}>{y}</div>
            <div style={{ fontSize: 11, color: "var(--text3)", lineHeight: 1.5 }}>{["Fundamentals & Scripting", "Frameworks & Databases", "Scalability & Specialization", "Capstone & Industry-Ready"][i]}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 8 }}>YEAR</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {YEARS.map(y => (
              <button key={y} onClick={() => setYear(y)} style={{ fontSize: 12, padding: "7px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600, border: "1px solid var(--card-border)", background: year === y ? "var(--accent)" : "var(--card)", color: year === y ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s" }}>{y}</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 8 }}>BRANCH</div>
          <div style={{ display: "flex", gap: 6 }}>
            {BRANCHES.map(b => (
              <button key={b} onClick={() => setBranch(b)} style={{ fontSize: 12, padding: "7px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600, border: "1px solid var(--card-border)", background: branch === b ? "#B03A2E" : "var(--card)", color: branch === b ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s" }}>{b}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 24 }}>
        <strong style={{ color: "var(--text)" }}>{filtered.length}</strong> projects found
      </div>

      {yearGroups.map(group => (
        <div key={group.year} style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
            <h2 style={{ fontWeight: 800, fontSize: 20, letterSpacing: -0.4 }}>{group.year}</h2>
            <span style={{ fontSize: 12, color: "var(--text2)" }}>— {YEAR_DESC[group.year]}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
            {group.projects.map((p, i) => (
              <div key={p.title} className="card-lift fade-up" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "24px", position: "relative", overflow: "hidden", animationDelay: `${i * 0.06}s` }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2.5, background: p.color }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: 32 }}>{p.icon}</div>
                  <div style={{ display: "flex", gap: 6, flexDirection: "column", alignItems: "flex-end" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: LEVEL_COLORS[p.level] + "18", color: LEVEL_COLORS[p.level] }}>{p.level}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: p.color + "15", color: p.color }}>{p.branch}</span>
                  </div>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {p.stack.map(s => <span key={s} className="mono" style={{ fontSize: 10, fontWeight: 500, padding: "3px 9px", borderRadius: 20, background: "var(--bg2)", color: "var(--text2)", border: "1px solid var(--border)" }}>{s}</span>)}
                </div>
                <button className="btn-primary" style={{ fontSize: 12, padding: "8px 18px", width: "100%" }}>View Guide →</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚀</div>
          <div style={{ fontWeight: 600 }}>No projects match your filters</div>
          <button onClick={() => { setYear("All"); setBranch("All"); }} className="btn-ghost" style={{ marginTop: 14, fontSize: 13 }}>Reset Filters</button>
        </div>
      )}
    </div>
  );
}
