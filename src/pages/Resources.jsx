import { useState } from "react";
import { JAVA_CONTENT } from "../data/javaContent";
import { JAVA_UNIT2_CONTENT } from "../data/javaUnit2Content";
import useSEO from "../hooks/useSEO";

// ─── Content Block Renderer ───────────────────────────────────────────────────
function ContentBlock({ block }) {
  const [copied, setCopied] = useState(false);

  const copy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  switch (block.type) {
    case "definition":
      return (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: "var(--text)" }}>
            ■ {block.heading}
          </div>
          <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.8 }}>{block.text}</p>
        </div>
      );

    case "simple":
      return (
        <div style={{
          background: "var(--accent-soft)", border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
          borderLeft: "3px solid var(--accent)", borderRadius: "0 10px 10px 0",
          padding: "12px 16px", marginBottom: 20,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 1, marginBottom: 5 }}>💡 SIMPLE EXPLANATION</div>
          <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.75 }}>{block.text}</p>
        </div>
      );

    case "note":
      return (
        <div style={{
          background: "color-mix(in srgb, #C4913A 10%, transparent)",
          border: "1px solid color-mix(in srgb, #C4913A 25%, transparent)",
          borderLeft: "3px solid #C4913A", borderRadius: "0 10px 10px 0",
          padding: "12px 16px", marginBottom: 20,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#C4913A", letterSpacing: 1, marginBottom: 5 }}>📝 NOTE</div>
          <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.75 }}>{block.text}</p>
        </div>
      );

    case "important":
      return (
        <div style={{
          background: "color-mix(in srgb, #B03A2E 10%, transparent)",
          border: "1px solid color-mix(in srgb, #B03A2E 25%, transparent)",
          borderLeft: "3px solid #B03A2E", borderRadius: "0 10px 10px 0",
          padding: "12px 16px", marginBottom: 20,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#B03A2E", letterSpacing: 1, marginBottom: 5 }}>⚠️ IMPORTANT</div>
          <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.75 }}>{block.text}</p>
        </div>
      );

    case "code":
      return (
        <div style={{ marginBottom: 24 }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            background: "var(--bg3)", borderRadius: "10px 10px 0 0",
            padding: "8px 16px", border: "1px solid var(--border)", borderBottom: "none",
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text2)", fontFamily: "DM Mono, monospace" }}>
              📄 {block.filename}
            </span>
            <button onClick={() => copy(block.code)} style={{
              fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6,
              border: "1px solid var(--border)", background: copied ? "#1D6B4A" : "var(--bg2)",
              color: copied ? "#fff" : "var(--text2)", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
            }}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre style={{
            background: "var(--bg)", border: "1px solid var(--border)",
            borderRadius: "0 0 10px 10px", padding: "18px 20px",
            fontSize: 13, lineHeight: 1.75, overflowX: "auto", margin: 0,
            fontFamily: "DM Mono, Fira Code, monospace", color: "var(--text)",
          }}>
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "table":
      return (
        <div style={{ overflowX: "auto", marginBottom: 24 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "var(--bg2)" }}>
                {block.headers.map(h => (
                  <th key={h} style={{
                    padding: "10px 14px", textAlign: "left", fontWeight: 700,
                    fontSize: 11, letterSpacing: 0.5, color: "var(--text2)",
                    border: "1px solid var(--border)",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "var(--bg2)" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{
                      padding: "9px 14px", border: "1px solid var(--border)",
                      color: j === 0 ? "var(--text)" : "var(--text2)",
                      fontWeight: j === 0 ? 600 : 400, lineHeight: 1.6,
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "keywords":
      return (
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {block.words.map(w => (
              <span key={w} style={{
                fontFamily: "DM Mono, monospace", fontSize: 12, fontWeight: 600,
                padding: "4px 10px", borderRadius: 6,
                background: "var(--accent-soft)", color: "var(--accent)",
                border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
              }}>{w}</span>
            ))}
          </div>
        </div>
      );

    case "pillars":
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 20 }}>
          {block.items.map(p => (
            <div key={p.name} style={{
              background: "var(--bg2)", borderRadius: 12, padding: "16px",
              border: "1px solid var(--border)", textAlign: "center",
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "var(--text2)" }}>{p.desc}</div>
            </div>
          ))}
        </div>
      );

    case "flow":
      return (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 10 }}>{block.label}</div>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
            {block.steps.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{
                  background: "var(--accent-soft)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                  borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, color: "var(--accent)",
                }}>{step}</div>
                {i < block.steps.length - 1 && <span style={{ color: "var(--text3)", fontSize: 16 }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      );

    case "hierarchy":
      return (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 10 }}>{block.label}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            {block.items.map((item, i) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  background: "var(--bg2)", border: "1px solid var(--border)",
                  borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600, color: "var(--text)",
                }}>{item}</span>
                {i < block.items.length - 1 && <span style={{ color: "var(--text3)" }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

// ─── Section Viewer ────────────────────────────────────────────────────────────
function SectionViewer({ section, chapterColor }) {
  return (
    <div className="fade-in" style={{ padding: "28px 32px" }}>
      <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.4, marginBottom: 22, color: chapterColor }}>
        {section.title}
      </h3>
      {section.content.map((block, i) => (
        <ContentBlock key={i} block={block} />
      ))}
    </div>
  );
}

// ─── Subject Card (on the landing) ────────────────────────────────────────────
const SUBJECTS = [
  { id: "java", label: "Java Programming", icon: "☕", color: "#C4913A", status: "live", unit: "Unit 1 & 2 Complete", chapters: 5 },
  { id: "python", label: "Python", icon: "🐍", color: "#2D3A8C", status: "soon" },
  { id: "cpp", label: "C++ & DSA", icon: "⚡", color: "#1D6B4A", status: "soon" },
  { id: "os", label: "Operating Systems", icon: "💾", color: "#8B4A9C", status: "soon" },
  { id: "dbms", label: "DBMS & SQL", icon: "🗄️", color: "#B03A2E", status: "soon" },
  { id: "cn", label: "Computer Networks", icon: "🌐", color: "#2D3A8C", status: "soon" },
  { id: "iot", label: "IoT & Embedded", icon: "📡", color: "#C4913A", status: "soon" },
  { id: "webdev", label: "Web Development", icon: "🌐", color: "#1D6B4A", status: "soon" },
];

// ─── Main Resources Page ───────────────────────────────────────────────────────
export default function Resources() {
  useSEO({
    title: "Coding & Academic Resources — Java, Python, DSA Notes",
    description: "Free coding resources and engineering notes for students. Java Unit 1 complete notes including OOPs, Exception Handling, Data Types, Inheritance and more.",
    canonical: "https://studenttechhub.com/resources",
    keywords: "java notes, java unit 1, OOPs java, exception handling java, engineering notes, coding resources, python tutorial, DSA",
  });

  const [activeSubject, setActiveSubject]   = useState(null);
  const [activeChapter, setActiveChapter]   = useState(null);
  const [activeSection, setActiveSection]   = useState(null);

  const openSubject = (id) => {
    if (id !== "java") return;
    setActiveSubject(id);
    setActiveChapter(JAVA_CONTENT.chapters[0].id);
    setActiveSection(JAVA_CONTENT.chapters[0].sections[0].id);
  };

  const ALL_CHAPTERS = [...JAVA_CONTENT.chapters, ...JAVA_UNIT2_CONTENT.chapters];
  const currentChapter = activeChapter ? ALL_CHAPTERS.find(c => c.id === activeChapter) : null;
  const currentSection = currentChapter && activeSection ? currentChapter.sections.find(s => s.id === activeSection) : null;

  // ── Subject landing ──────────────────────────────────────────────────────────
  if (!activeSubject) {
    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--accent)", textTransform: "uppercase", marginBottom: 8 }}>📚 Learning Hub</div>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, letterSpacing: -0.8, marginBottom: 10 }}>
            Coding & Academic Resources
          </h1>
          <p style={{ fontSize: 15, color: "var(--text2)", maxWidth: 520, lineHeight: 1.7 }}>
            Select a subject to explore notes, code examples and explanations. More content added regularly.
          </p>
        </div>

        {/* Subject grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
          {SUBJECTS.map((s, i) => (
            <div key={s.id}
              className={s.status === "live" ? "card-lift fade-up" : "fade-up"}
              onClick={() => openSubject(s.id)}
              style={{
                background: "var(--card)", border: s.status === "live" ? `2px solid ${s.color}30` : "1px solid var(--card-border)",
                borderRadius: 18, padding: "24px 22px",
                cursor: s.status === "live" ? "pointer" : "default",
                opacity: s.status === "live" ? 1 : 0.55,
                position: "relative", overflow: "hidden",
                animationDelay: `${i * 0.06}s`,
              }}>
              {/* Top bar */}
              {s.status === "live" && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.color }} />}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: s.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                  {s.icon}
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20,
                  background: s.status === "live" ? s.color + "18" : "var(--bg3)",
                  color: s.status === "live" ? s.color : "var(--text3)",
                  letterSpacing: 0.5, textTransform: "uppercase",
                }}>
                  {s.status === "live" ? "Available" : "Coming Soon"}
                </span>
              </div>

              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{s.label}</div>

              {s.status === "live" ? (
                <>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 14 }}>
                    {s.unit} · {s.chapters} Chapters
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: s.color }}>
                    Open Notes <span>→</span>
                  </div>
                </>
              ) : (
                <div style={{ fontSize: 12, color: "var(--text3)" }}>Content coming soon</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Java Notes Viewer ────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px 80px" }}>

      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28, fontSize: 13 }}>
        <button onClick={() => setActiveSubject(null)} style={{
          background: "none", border: "none", cursor: "pointer", color: "var(--text2)",
          fontFamily: "inherit", fontSize: 13, padding: 0,
        }}>Resources</button>
        <span style={{ color: "var(--text3)" }}>›</span>
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>Java Programming — Unit 1</span>
        {/* PDF Download */}
        <a href={JAVA_CONTENT.pdfUrl} download="Java_Unit1_Complete_Notes.pdf" style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 12, fontWeight: 700, color: "#fff", background: "#B03A2E", padding: "7px 14px", borderRadius: 20 }}>
          📥 Unit 1 PDF
        </a>
        <a href={JAVA_UNIT2_CONTENT.pdfUrl} download="Java_Unit2_Complete_Notes.pdf" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", fontSize: 12, fontWeight: 700, color: "#fff", background: "#8B4A9C", padding: "7px 14px", borderRadius: 20 }}>
          📥 Unit 2 PDF
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 20, alignItems: "start" }}>

        {/* ── LEFT SIDEBAR ── */}
        <div style={{ position: "sticky", top: 80 }}>
          {/* Chapter tabs */}
          <div style={{ marginBottom: 12 }}>
            {ALL_CHAPTERS.map(ch => (
              <button key={ch.id} onClick={() => { setActiveChapter(ch.id); setActiveSection(ch.sections[0].id); }}
                style={{
                  width: "100%", textAlign: "left", padding: "12px 14px",
                  border: activeChapter === ch.id ? `2px solid ${ch.color}` : "1px solid var(--card-border)",
                  borderRadius: 12, marginBottom: 8, background: activeChapter === ch.id ? ch.color + "10" : "var(--card)",
                  cursor: "pointer", fontFamily: "inherit", transition: "all 0.18s",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                <span style={{ fontSize: 18 }}>{ch.icon}</span>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: activeChapter === ch.id ? ch.color : "var(--text3)", letterSpacing: 0.5 }}>
                    CHAPTER {ch.number}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: activeChapter === ch.id ? ch.color : "var(--text)", marginTop: 1 }}>
                    {ch.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Section list for active chapter */}
          {currentChapter && (
            <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", background: currentChapter.color + "10", borderBottom: "1px solid var(--border)", fontSize: 11, fontWeight: 700, color: currentChapter.color, letterSpacing: 0.5 }}>
                SECTIONS
              </div>
              {currentChapter.sections.map(sec => (
                <button key={sec.id} onClick={() => setActiveSection(sec.id)}
                  style={{
                    width: "100%", textAlign: "left", padding: "10px 14px",
                    border: "none", borderBottom: "1px solid var(--border)",
                    background: activeSection === sec.id ? currentChapter.color + "12" : "transparent",
                    cursor: "pointer", fontFamily: "inherit",
                    fontSize: 12, fontWeight: activeSection === sec.id ? 700 : 400,
                    color: activeSection === sec.id ? currentChapter.color : "var(--text2)",
                    transition: "all 0.15s",
                  }}>
                  {sec.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── CONTENT PANEL ── */}
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, minHeight: 400, overflow: "hidden" }}>
          {/* Chapter header */}
          {currentChapter && (
            <div style={{
              background: currentChapter.color + "12", borderBottom: "1px solid var(--border)",
              padding: "18px 32px", display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: currentChapter.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {currentChapter.icon}
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: currentChapter.color, letterSpacing: 1 }}>
                  CHAPTER {currentChapter.number}
                </div>
                <div style={{ fontWeight: 800, fontSize: 17, color: "var(--text)" }}>{currentChapter.title}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                  {currentChapter.topics.map(t => (
                    <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: currentChapter.color + "18", color: currentChapter.color }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section content */}
          {currentSection ? (
            <SectionViewer section={currentSection} chapterColor={currentChapter?.color} />
          ) : (
            <div style={{ padding: "60px 32px", textAlign: "center", color: "var(--text2)" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>👈</div>
              <div style={{ fontWeight: 600 }}>Select a section from the left</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
