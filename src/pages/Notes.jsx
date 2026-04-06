import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader, Badge } from "../components/UI";
import useSEO from "../hooks/useSEO";

const POSTS = [
  { slug: "java-unit1", title: "Java Programming — Unit 1 Complete Notes", subject: "Java", subjectColor: "#C4913A", icon: "☕", readTime: "18 min", date: "2025", tags: ["Java Fundamentals", "OOPs", "Exception Handling"], excerpt: "Java Fundamentals (Data Types, Keywords, Access Modifiers), OOPs (Class, Inheritance, Abstraction, Polymorphism, Encapsulation), and Exception Handling — with code examples.", popular: true, pdfUrl: "/notes/Java_Unit1_Complete_Notes.pdf", liveLink: "/resources" },
  { slug: "java-unit2", title: "Java Programming — Unit 2 Complete Notes", subject: "Java", subjectColor: "#C4913A", icon: "☕", readTime: "22 min", date: "2025", tags: ["Collections", "Multithreading", "Lambda", "Streams"], excerpt: "Collections Framework (ArrayList, LinkedList, HashMap, TreeMap, HashSet), Multithreading, Wrapper Classes, I/O Streams, Lambda Expressions, Functional Interfaces and Stream API.", popular: true, pdfUrl: "/notes/Java_Unit2_Complete_Notes.pdf", liveLink: "/resources" },
  { slug: "os-process", title: "OS Process Management — Complete Notes", subject: "Operating Systems", subjectColor: "#2D3A8C", icon: "💾", readTime: "12 min", date: "Coming Soon", tags: ["Process", "Scheduling", "Deadlock"], excerpt: "Process states, PCB, context switching, CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) and deadlock handling.", popular: false, pdfUrl: null, liveLink: null, comingSoon: true },
  { slug: "dbms-norm", title: "Database Normalization — 1NF to BCNF", subject: "DBMS", subjectColor: "#1D6B4A", icon: "🗄️", readTime: "10 min", date: "Coming Soon", tags: ["Normalization", "SQL", "BCNF"], excerpt: "Step-by-step breakdown of database normalization from un-normalized tables all the way to BCNF, with examples and practice questions.", popular: false, pdfUrl: null, liveLink: null, comingSoon: true },
  { slug: "cn-osi", title: "OSI Model — All 7 Layers Explained", subject: "Computer Networks", subjectColor: "#8B4A9C", icon: "🌐", readTime: "9 min", date: "Coming Soon", tags: ["OSI", "TCP/IP", "Protocols"], excerpt: "All 7 OSI layers with real-world analogies, common protocols at each layer and exam-focused revision points.", popular: false, pdfUrl: null, liveLink: null, comingSoon: true },
  { slug: "dsa-sort", title: "Sorting Algorithms — Complexity & Code", subject: "Data Structures", subjectColor: "#C4913A", icon: "📊", readTime: "15 min", date: "Coming Soon", tags: ["Sorting", "Big O", "C++", "Java"], excerpt: "Bubble, Selection, Insertion, Merge, Quick, Heap sort — with time/space complexity, C++ implementation and interview tips.", popular: false, pdfUrl: null, liveLink: null, comingSoon: true },
  { slug: "python-oop", title: "Python OOP — Classes, Inheritance & Magic Methods", subject: "Python", subjectColor: "#2D3A8C", icon: "🐍", readTime: "13 min", date: "Coming Soon", tags: ["Classes", "Inheritance", "__init__"], excerpt: "Python classes, constructors, self, inheritance, multiple inheritance, method overriding and dunder methods explained simply.", popular: false, pdfUrl: null, liveLink: null, comingSoon: true },
];

const SUBJECTS = ["All", "Java", "Operating Systems", "DBMS", "Computer Networks", "Data Structures", "Python"];

export default function Notes() {
  useSEO({
    title: "Engineering Notes — Java Unit 1 & Unit 2 Free PDF Download",
    description: "Free Java Unit 1 and Unit 2 complete notes with PDF download. Collections, Multithreading, Lambda, OOPs, Exception Handling and more.",
    canonical: "https://studenttechhub.com/notes",
    keywords: "java notes pdf, java unit 1 notes, java unit 2 notes, collections java, multithreading java, lambda java, engineering notes free download",
  });

  const [subject, setSubject] = useState("All");
  const [search,  setSearch]  = useState("");

  const filtered  = POSTS.filter(p =>
    (subject === "All" || p.subject === subject) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );
  const liveNotes = filtered.filter(p => !p.comingSoon);
  const soonNotes = filtered.filter(p =>  p.comingSoon);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader label="📝 Study Notes" labelColor="#8B4A9C" title="Engineering Subject Notes"
        subtitle="Well-structured notes — free to read online and download as PDF." />

      {/* PDF spotlight row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
        {[
          { unit: "Unit 1", desc: "Java Fundamentals · OOPs · Exception Handling", pdf: "/notes/Java_Unit1_Complete_Notes.pdf" },
          { unit: "Unit 2", desc: "Collections · Multithreading · Lambda · Streams",  pdf: "/notes/Java_Unit2_Complete_Notes.pdf" },
        ].map(u => (
          <div key={u.unit} style={{ background: "linear-gradient(135deg, #C4913A12, #2D3A8C08)", border: "1px solid #C4913A30", borderRadius: 18, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ width: 46, height: 46, borderRadius: 13, background: "#C4913A18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>☕</div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#1D6B4A", letterSpacing: 1, marginBottom: 3 }}>✓ AVAILABLE NOW</div>
              <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 2 }}>Java — {u.unit}</div>
              <div style={{ fontSize: 12, color: "var(--text2)" }}>{u.desc}</div>
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <a href={u.pdf} download style={{ textDecoration: "none" }}>
                <button className="btn-ghost" style={{ fontSize: 12, padding: "7px 14px" }}>📥 PDF</button>
              </a>
              <Link to="/resources" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ fontSize: 12, padding: "7px 14px" }}>Read →</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Search + filter */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "var(--text3)" }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search notes..."
            style={{ width: "100%", padding: "10px 14px 10px 34px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--card)", color: "var(--text)", fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
        </div>
        <select value={subject} onChange={e => setSubject(e.target.value)}
          style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--card)", color: "var(--text)", fontSize: 13, outline: "none", cursor: "pointer", fontFamily: "inherit" }}>
          {SUBJECTS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* Live notes */}
      {liveNotes.length > 0 && (
        <>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#1D6B4A", letterSpacing: 1.5, marginBottom: 14 }}>✓ AVAILABLE NOW</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18, marginBottom: 40 }}>
            {liveNotes.map((p, i) => (
              <div key={p.slug} className="card-lift fade-up" style={{ background: "var(--card)", border: "2px solid #C4913A30", borderRadius: 18, padding: "24px", animationDelay: `${i * 0.06}s`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: p.subjectColor }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: p.subjectColor + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{p.icon}</div>
                  <div>
                    <Badge color={p.subjectColor}>{p.subject}</Badge>
                    {p.popular && <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: "#C4913A18", color: "#C4913A" }}>🔥 Popular</span>}
                  </div>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 14 }}>{p.excerpt}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)" }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: 11, color: "var(--text3)" }}>⏱ {p.readTime}</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    {p.pdfUrl && (
                      <a href={p.pdfUrl} download style={{ textDecoration: "none" }}>
                        <button style={{ fontSize: 11, fontWeight: 700, color: "#B03A2E", background: "#B03A2E12", border: "none", padding: "5px 12px", borderRadius: 20, cursor: "pointer", fontFamily: "inherit" }}>📥 PDF</button>
                      </a>
                    )}
                    {p.liveLink && (
                      <Link to={p.liveLink} style={{ textDecoration: "none" }}>
                        <button style={{ fontSize: 11, fontWeight: 700, color: p.subjectColor, background: p.subjectColor + "15", border: "none", padding: "5px 12px", borderRadius: 20, cursor: "pointer", fontFamily: "inherit" }}>Read Online →</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Coming soon */}
      {soonNotes.length > 0 && (
        <>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 14 }}>🚧 COMING SOON</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {soonNotes.map(p => (
              <div key={p.slug} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 16, padding: "20px", opacity: 0.55 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: p.subjectColor + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{p.icon}</div>
                  <Badge color={p.subjectColor}>{p.subject}</Badge>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{p.title}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)", fontWeight: 600 }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

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
