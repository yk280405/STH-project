import { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../../hooks/useSEO";

const GRADE_POINTS = [
  { grade: "O",  points: 10, range: "90-100" },
  { grade: "A+", points: 9,  range: "80-89"  },
  { grade: "A",  points: 8,  range: "70-79"  },
  { grade: "B+", points: 7,  range: "60-69"  },
  { grade: "B",  points: 6,  range: "50-59"  },
  { grade: "C",  points: 5,  range: "40-49"  },
  { grade: "F",  points: 0,  range: "< 40"   },
];

export default function CGPACalculator() {
  useSEO({
    title:       "CGPA Calculator — Calculate Your Semester GPA Free",
    description: "Free online CGPA calculator for engineering students. Enter subject names, credits and grade points to instantly calculate your CGPA and approximate percentage. No login required.",
    canonical:   "https://studenttechhub.com/tools/cgpa",
    keywords:    "CGPA calculator, GPA calculator, semester GPA, engineering CGPA, grade point average, CGPA to percentage, free CGPA calculator online",
    ogTitle:     "Free CGPA Calculator for Engineering Students | StudentTechHub",
    ogDesc:      "Calculate your CGPA instantly — enter subjects, credits & grades. Get CGPA + approximate percentage. Free, no sign-up needed.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "CGPA Calculator",
      "description": "Free CGPA calculator for engineering students to compute semester GPA and percentage from subject grades and credits.",
      "url": "https://studenttechhub.com/tools/cgpa",
      "applicationCategory": "EducationApplication",
      "operatingSystem": "Any",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "author": { "@type": "Person", "name": "YK", "url": "https://studenttechhub.com/about" },
      "publisher": { "@type": "Organization", "name": "StudentTechHub", "url": "https://studenttechhub.com" },
    },
  });
  const [subjects, setSubjects] = useState([
    { name: "Mathematics", credits: 4, grade: 9 },
    { name: "Data Structures", credits: 4, grade: 8 },
    { name: "Operating Systems", credits: 3, grade: 9 },
    { name: "DBMS", credits: 3, grade: 8 },
    { name: "Computer Networks", credits: 3, grade: 7 },
  ]);

  const total    = subjects.reduce((a, s) => a + s.credits, 0);
  const weighted = subjects.reduce((a, s) => a + s.grade * s.credits, 0);
  const cgpa     = total > 0 ? weighted / total : 0;
  const pct      = total > 0 ? (cgpa - 0.75) * 10 : 0;
  const grade    = cgpa >= 9 ? "O" : cgpa >= 8 ? "A+" : cgpa >= 7 ? "A" : cgpa >= 6 ? "B+" : cgpa >= 5 ? "B" : cgpa >= 4 ? "C" : "F";
  const gradeColor = cgpa >= 8 ? "#1D6B4A" : cgpa >= 6 ? "#C4913A" : "#B03A2E";

  const update = (i, key, val) =>
    setSubjects(subjects.map((s, idx) => idx === i ? { ...s, [key]: key === "name" ? val : Number(val) } : s));
  const add    = () => setSubjects([...subjects, { name: "New Subject", credits: 3, grade: 8 }]);
  const remove = (i) => setSubjects(subjects.filter((_, idx) => idx !== i));
  const reset  = () => setSubjects([{ name: "Subject 1", credits: 3, grade: 8 }]);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 24px 80px" }}>

      {/* Back */}
      <Link to="/tools" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "var(--text2)", fontSize: 13, marginBottom: 28 }}>
        ← Back to Tools
      </Link>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "#2D3A8C18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🎓</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#2D3A8C", textTransform: "uppercase", marginBottom: 4 }}>Utility Tool</div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, letterSpacing: -0.8, lineHeight: 1 }}>CGPA Calculator</h1>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>

        {/* Left — Subject Table */}
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, padding: "28px" }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 20 }}>Enter Your Subjects</div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["Subject Name", "Credits", "Grade Points (0–10)", ""].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "var(--text3)", fontWeight: 600, fontSize: 11, letterSpacing: 0.5, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subjects.map((s, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "10px 10px" }}>
                      <input value={s.name} onChange={e => update(i, "name", e.target.value)}
                        style={{ background: "transparent", border: "none", color: "var(--text)", fontSize: 13, outline: "none", width: "100%", fontFamily: "inherit" }} />
                    </td>
                    <td style={{ padding: "10px 10px" }}>
                      <input type="number" min={1} max={6} value={s.credits} onChange={e => update(i, "credits", e.target.value)}
                        style={{ background: "var(--bg2)", border: "none", color: "var(--text)", fontSize: 13, outline: "none", width: 44, padding: "5px 8px", borderRadius: 6, textAlign: "center", fontFamily: "inherit" }} />
                    </td>
                    <td style={{ padding: "10px 10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <input type="range" min={0} max={10} step={0.5} value={s.grade} onChange={e => update(i, "grade", e.target.value)}
                          style={{ flex: 1, accentColor: "#2D3A8C", minWidth: 80 }} />
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#2D3A8C", minWidth: 28 }}>{s.grade}</span>
                      </div>
                    </td>
                    <td style={{ padding: "10px 8px" }}>
                      <button onClick={() => remove(i)} style={{ background: "none", border: "none", color: "var(--text3)", cursor: "pointer", fontSize: 15, padding: 0, lineHeight: 1, fontFamily: "inherit" }}>✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <button onClick={add} className="btn-primary" style={{ fontSize: 12, padding: "8px 18px" }}>+ Add Subject</button>
            <button onClick={reset} className="btn-ghost" style={{ fontSize: 12, padding: "8px 16px" }}>Reset</button>
          </div>
        </div>

        {/* Right — Result Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* CGPA card */}
          <div style={{ background: "var(--card)", border: "2px solid #2D3A8C30", borderRadius: 20, padding: "28px", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 8 }}>YOUR CGPA</div>
            <div style={{ fontSize: 58, fontWeight: 900, letterSpacing: -2, color: "#2D3A8C", lineHeight: 1 }}>
              {total > 0 ? cgpa.toFixed(2) : "—"}
            </div>
            <div style={{ fontSize: 13, color: "var(--text3)", marginTop: 6 }}>out of 10.00</div>

            {/* Progress arc */}
            <div style={{ margin: "18px 0 10px", position: "relative", height: 6, background: "var(--bg3)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${Math.min((cgpa / 10) * 100, 100)}%`, background: "linear-gradient(90deg, #2D3A8C, #7F77DD)", borderRadius: 3, transition: "width 0.6s ease" }} />
            </div>
          </div>

          {/* Grade + % */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 6 }}>GRADE</div>
              <div style={{ fontSize: 30, fontWeight: 900, color: gradeColor }}>{grade}</div>
            </div>
            <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "18px", textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 6 }}>APPROX %</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#C4913A" }}>{total > 0 ? pct.toFixed(1) : "—"}%</div>
            </div>
          </div>

          {/* Credits */}
          <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
              <span style={{ color: "var(--text2)" }}>Total Credits</span>
              <span style={{ fontWeight: 700 }}>{total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
              <span style={{ color: "var(--text2)" }}>Subjects</span>
              <span style={{ fontWeight: 700 }}>{subjects.length}</span>
            </div>
          </div>

          {/* Formula note */}
          <div style={{ background: "var(--bg2)", borderRadius: 12, padding: "12px 14px", fontSize: 11, color: "var(--text3)", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--text2)" }}>Formula:</strong><br />
            CGPA = Σ(Grade × Credits) ÷ Σ Credits<br />
            % ≈ (CGPA − 0.75) × 10
          </div>
        </div>
      </div>

      {/* Grade reference table */}
      <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "24px 28px", marginTop: 24 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Grade Point Reference</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {GRADE_POINTS.map(g => (
            <div key={g.grade} style={{ textAlign: "center", background: "var(--bg2)", borderRadius: 10, padding: "10px 14px", minWidth: 70 }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: g.points >= 8 ? "#1D6B4A" : g.points >= 5 ? "#C4913A" : "#B03A2E" }}>{g.grade}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", marginTop: 2 }}>{g.points} pts</div>
              <div style={{ fontSize: 10, color: "var(--text3)", marginTop: 1 }}>{g.range}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
