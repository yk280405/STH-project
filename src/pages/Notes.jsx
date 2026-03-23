import { useState } from "react";
import { SectionHeader, Badge } from "../components/UI";

const POSTS = [
  {
    slug: "os-process-management",
    title: "OS Process Management — Complete Notes",
    subject: "Operating Systems",
    subjectColor: "#2D3A8C",
    icon: "💾",
    readTime: "12 min",
    date: "Jan 2025",
    tags: ["Process", "Scheduling", "Deadlock"],
    excerpt: "Comprehensive notes on process states, PCB, context switching, CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) and deadlock handling.",
    popular: true,
  },
  {
    slug: "dbms-normalization",
    title: "Database Normalization — 1NF to BCNF",
    subject: "DBMS",
    subjectColor: "#1D6B4A",
    icon: "🗄️",
    readTime: "10 min",
    date: "Jan 2025",
    tags: ["Normalization", "SQL", "BCNF"],
    excerpt: "Step-by-step breakdown of database normalization — from un-normalized tables all the way to BCNF, with examples and practice questions.",
    popular: true,
  },
  {
    slug: "cn-osi-model",
    title: "OSI Model — All 7 Layers Explained",
    subject: "Computer Networks",
    subjectColor: "#8B4A9C",
    icon: "🌐",
    readTime: "9 min",
    date: "Dec 2024",
    tags: ["OSI", "TCP/IP", "Protocols"],
    excerpt: "Visual explanation of all 7 OSI layers with real-world analogies, common protocols at each layer and exam-focused revision points.",
    popular: false,
  },
  {
    slug: "dsa-sorting-algorithms",
    title: "Sorting Algorithms — Complexity & Code",
    subject: "Data Structures",
    subjectColor: "#C4913A",
    icon: "📊",
    readTime: "15 min",
    date: "Dec 2024",
    tags: ["Sorting", "Big O", "C++", "Java"],
    excerpt: "Bubble, Selection, Insertion, Merge, Quick, Heap sort — with time/space complexity, C++ implementation, when to use what, and interview tips.",
    popular: true,
  },
  {
    slug: "java-collections-framework",
    title: "Java Collections Framework — Full Guide",
    subject: "Java",
    subjectColor: "#B03A2E",
    icon: "☕",
    readTime: "14 min",
    date: "Nov 2024",
    tags: ["ArrayList", "HashMap", "TreeMap"],
    excerpt: "ArrayList vs LinkedList, HashMap internals, TreeMap, PriorityQueue, Deque — every Collections class with use cases and performance comparisons.",
    popular: false,
  },
  {
    slug: "digital-logic-gates",
    title: "Digital Logic — Gates, K-Map & Flip Flops",
    subject: "Digital Electronics",
    subjectColor: "#1D6B4A",
    icon: "⚡",
    readTime: "11 min",
    date: "Nov 2024",
    tags: ["Logic Gates", "K-Map", "Flip Flops"],
    excerpt: "Logic gates, Boolean algebra simplification, Karnaugh Map minimization, SR/D/JK/T flip-flops with truth tables and timing diagrams.",
    popular: false,
  },
  {
    slug: "python-oop",
    title: "Python OOP — Classes, Inheritance & Magic Methods",
    subject: "Python",
    subjectColor: "#2D3A8C",
    icon: "🐍",
    readTime: "13 min",
    date: "Oct 2024",
    tags: ["Classes", "Inheritance", "__init__"],
    excerpt: "Everything about Python OOP: classes, constructors, `self`, inheritance, multiple inheritance, method overriding and dunder methods explained simply.",
    popular: true,
  },
  {
    slug: "tcp-ip-networking",
    title: "TCP vs UDP — When to Use What",
    subject: "Computer Networks",
    subjectColor: "#8B4A9C",
    icon: "🔗",
    readTime: "8 min",
    date: "Oct 2024",
    tags: ["TCP", "UDP", "Sockets"],
    excerpt: "Deep dive into TCP three-way handshake, flow control, congestion control vs. UDP's simplicity and speed — with real application examples.",
    popular: false,
  },
  {
    slug: "microprocessor-8085",
    title: "8085 Microprocessor — Architecture & Programming",
    subject: "Microprocessors",
    subjectColor: "#B03A2E",
    icon: "🔧",
    readTime: "16 min",
    date: "Sep 2024",
    tags: ["8085", "Assembly", "Registers"],
    excerpt: "Complete 8085 architecture, register set, addressing modes, instruction set, interrupts and assembly language programs with explanations.",
    popular: false,
  },
];

const SUBJECTS = ["All", "Operating Systems", "DBMS", "Computer Networks", "Data Structures", "Java", "Python", "Digital Electronics", "Microprocessors"];

export default function Notes() {
  const [subject, setSubject] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = POSTS.filter(p =>
    (subject === "All" || p.subject === subject) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  const popular = POSTS.filter(p => p.popular);

  if (selected) {
    const post = POSTS.find(p => p.slug === selected);
    return (
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "52px 24px 80px" }}>
        <button onClick={() => setSelected(null)} style={{
          display: "flex", alignItems: "center", gap: 6, background: "none", border: "none",
          color: "var(--text2)", cursor: "pointer", fontSize: 13, fontFamily: "inherit",
          marginBottom: 28, padding: 0
        }}>← Back to Notes</button>

        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          <Badge color={post.subjectColor}>{post.subject}</Badge>
          {post.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)" }}>{t}</span>)}
        </div>

        <h1 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, letterSpacing: -0.8, lineHeight: 1.15, marginBottom: 14 }}>{post.title}</h1>

        <div style={{ display: "flex", gap: 14, marginBottom: 32, fontSize: 12, color: "var(--text3)" }}>
          <span>📅 {post.date}</span>
          <span>⏱ {post.readTime} read</span>
        </div>

        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 16, padding: "24px", marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--accent)", marginBottom: 8 }}>📝 Overview</div>
          <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75 }}>{post.excerpt}</p>
        </div>

        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 16, padding: "28px", marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>📖 Full Notes</div>
          <div style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.85 }}>
            <p style={{ marginBottom: 16 }}>This is where the full notes content would be rendered. In a production version, this content would be loaded from your backend API, a CMS like Contentful or Sanity, or from Markdown files processed at build time.</p>
            <div style={{ background: "var(--bg2)", borderRadius: 12, padding: "16px", marginBottom: 16, fontFamily: "DM Mono, monospace", fontSize: 13, lineHeight: 1.7 }}>
              {`// Example code snippet for ${post.subject}\n// Add your actual content here`}
            </div>
            <p>You can populate each note by creating a separate <code style={{ background: "var(--bg2)", padding: "2px 6px", borderRadius: 4, fontSize: 12, fontFamily: "DM Mono, monospace" }}>content/</code> folder with MDX files, or connect to a backend API that serves note content by slug.</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-primary" style={{ fontSize: 13 }}>📥 Download PDF</button>
          <button className="btn-ghost" style={{ fontSize: 13 }}>🔗 Share Notes</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader
        label="📝 Study Notes"
        labelColor="#8B4A9C"
        title="Engineering Subject Notes"
        subtitle="Well-structured notes for your exams and lab sessions — free to read and download."
      />

      {/* Popular picks */}
      <div style={{ marginBottom: 44 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>🔥 Popular this week</div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {popular.map(p => (
            <button key={p.slug} onClick={() => setSelected(p.slug)} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 16px",
              background: "var(--card)", border: "1px solid var(--card-border)",
              borderRadius: 12, cursor: "pointer", textAlign: "left", fontFamily: "inherit",
              transition: "border-color 0.18s, transform 0.18s", flexShrink: 0
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ fontSize: 18 }}>{p.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{p.title.split(" — ")[0]}</div>
                <div style={{ fontSize: 11, color: "var(--text3)" }}>{p.readTime} read</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search + filter */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "var(--text3)" }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or topic..."
            style={{ width: "100%", padding: "10px 14px 10px 34px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--card)", color: "var(--text)", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
        </div>
        <select value={subject} onChange={e => setSubject(e.target.value)} style={{
          padding: "10px 14px", borderRadius: 12, border: "1px solid var(--card-border)",
          background: "var(--card)", color: "var(--text)", fontSize: 13, outline: "none", cursor: "pointer", fontFamily: "inherit"
        }}>
          {SUBJECTS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Notes Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
        {filtered.map((p, i) => (
          <div key={p.slug} className="card-lift fade-up" onClick={() => setSelected(p.slug)} style={{
            background: "var(--card)", border: "1px solid var(--card-border)",
            borderRadius: 18, padding: "24px", cursor: "pointer",
            animationDelay: `${i * 0.06}s`, position: "relative", overflow: "hidden"
          }}>
            {p.popular && (
              <div style={{ position: "absolute", top: 14, right: 14 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: "#C4913A20", color: "#C4913A" }}>🔥 Popular</span>
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: p.subjectColor + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{p.icon}</div>
              <Badge color={p.subjectColor}>{p.subject}</Badge>
            </div>

            <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, lineHeight: 1.3, paddingRight: p.popular ? 60 : 0 }}>{p.title}</h3>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 14 }}>{p.excerpt}</p>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)" }}>{t}</span>)}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{ fontSize: 11, color: "var(--text3)" }}>📅 {p.date}</span>
                <span style={{ fontSize: 11, color: "var(--text3)" }}>⏱ {p.readTime}</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: p.subjectColor }}>Read →</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
          <div style={{ fontWeight: 600 }}>No notes found</div>
          <button onClick={() => { setSubject("All"); setSearch(""); }} className="btn-ghost" style={{ marginTop: 14, fontSize: 13 }}>Reset Filters</button>
        </div>
      )}
    </div>
  );
}
