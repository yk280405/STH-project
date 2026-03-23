import { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../../hooks/useSEO";

export default function PercentageCalculator() {
  useSEO({
    title:       "Percentage Calculator — Marks to Percentage Converter Free",
    description: "Free online percentage calculator for students. Convert marks to percentage, find your grade, calculate CGPA to percentage, and find how many marks you need to score a target percentage.",
    canonical:   "https://studenttechhub.com/tools/percentage",
    keywords:    "percentage calculator, marks to percentage, CGPA to percentage, grade calculator, exam percentage, score calculator, engineering marks calculator",
    ogTitle:     "Free Percentage Calculator for Students | StudentTechHub",
    ogDesc:      "Convert marks to percentage, CGPA to %, or find marks needed for a target score. Free, instant, no login.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Percentage Calculator",
      "description": "Free percentage calculator for students. Converts marks to percentage, CGPA to percentage, and calculates marks needed for a target percentage.",
      "url": "https://studenttechhub.com/tools/percentage",
      "applicationCategory": "EducationApplication",
      "operatingSystem": "Any",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "author": { "@type": "Person", "name": "YK", "url": "https://studenttechhub.com/about" },
      "publisher": { "@type": "Organization", "name": "StudentTechHub", "url": "https://studenttechhub.com" },
    },
  });
  const [mode, setMode]         = useState("marks");
  const [obtained, setObtained] = useState(450);
  const [total, setTotal]       = useState(600);
  const [cgpaVal, setCgpaVal]   = useState(8.5);

  const pct       = total > 0 ? (obtained / total) * 100 : 0;
  const cgpaToPct = (cgpaVal - 0.75) * 10;

  const getGrade = (p) =>
    p >= 90 ? { g: "A+", c: "#1D6B4A" } :
    p >= 80 ? { g: "A",  c: "#1D6B4A" } :
    p >= 70 ? { g: "B+", c: "#2D3A8C" } :
    p >= 60 ? { g: "B",  c: "#2D3A8C" } :
    p >= 50 ? { g: "C",  c: "#C4913A" } :
    p >= 40 ? { g: "D",  c: "#C4913A" } :
              { g: "F",  c: "#B03A2E" };

  const { g: grade, c: gradeColor } = getGrade(mode === "marks" ? pct : cgpaToPct);

  const MODES = [
    { id: "marks",   label: "Marks → %" },
    { id: "cgpa",    label: "CGPA → %" },
    { id: "reverse", label: "% → Marks" },
  ];

  // Reverse mode state
  const [targetPct, setTargetPct]       = useState(75);
  const [reverseTotal, setReverseTotal] = useState(600);
  const neededMarks = Math.ceil((targetPct / 100) * reverseTotal);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 24px 80px" }}>

      <Link to="/tools" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "var(--text2)", fontSize: 13, marginBottom: 28 }}>
        ← Back to Tools
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "#C4913A18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>📊</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#C4913A", textTransform: "uppercase", marginBottom: 4 }}>Utility Tool</div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, letterSpacing: -0.8 }}>Percentage Calculator</h1>
        </div>
      </div>

      {/* Mode selector */}
      <div style={{ display: "flex", gap: 4, background: "var(--bg2)", borderRadius: 14, padding: 4, width: "fit-content", marginBottom: 28 }}>
        {MODES.map(m => (
          <button key={m.id} onClick={() => setMode(m.id)} style={{
            padding: "9px 20px", borderRadius: 11, fontFamily: "inherit",
            border: "none", fontSize: 13, fontWeight: 600,
            background: mode === m.id ? "var(--card)" : "transparent",
            color: mode === m.id ? "var(--text)" : "var(--text2)",
            cursor: "pointer", transition: "all 0.2s",
            boxShadow: mode === m.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
          }}>{m.label}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 24, alignItems: "start" }}>

        {/* Input Panel */}
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, padding: "28px" }}>

          {mode === "marks" && (
            <>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 22 }}>Enter Your Marks</div>
              {[
                ["Marks Obtained", obtained, setObtained],
                ["Total Marks",    total,    setTotal],
              ].map(([label, val, set]) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>{label}</label>
                  <input type="number" value={val} onChange={e => set(Number(e.target.value))}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--bg2)", color: "var(--text)", fontSize: 16, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>
              ))}
              {/* Visual bar */}
              <div style={{ marginTop: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text3)", marginBottom: 6 }}>
                  <span>0</span><span>{total}</span>
                </div>
                <div style={{ height: 8, background: "var(--bg3)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${Math.min((obtained / total) * 100, 100)}%`, background: "linear-gradient(90deg, #C4913A, #2D3A8C)", borderRadius: 4, transition: "width 0.4s ease" }} />
                </div>
              </div>
            </>
          )}

          {mode === "cgpa" && (
            <>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 22 }}>Enter Your CGPA</div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>CGPA (out of 10)</label>
              <input type="number" min={0} max={10} step={0.01} value={cgpaVal} onChange={e => setCgpaVal(Number(e.target.value))}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--bg2)", color: "var(--text)", fontSize: 16, outline: "none", boxSizing: "border-box", fontFamily: "inherit", marginBottom: 16 }} />
              <input type="range" min={0} max={10} step={0.1} value={cgpaVal} onChange={e => setCgpaVal(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#C4913A" }} />
              <div style={{ background: "var(--bg2)", borderRadius: 10, padding: "12px 14px", marginTop: 16, fontSize: 12, color: "var(--text3)" }}>
                Formula: <strong style={{ color: "var(--text2)" }}>(CGPA − 0.75) × 10</strong>
              </div>
            </>
          )}

          {mode === "reverse" && (
            <>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 22 }}>How many marks do I need?</div>
              {[
                ["Target Percentage (%)", targetPct, setTargetPct, 0, 100, 1],
                ["Total Marks",           reverseTotal, setReverseTotal, 1, 9999, 1],
              ].map(([label, val, set, min, max, step]) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>{label}</label>
                  <input type="number" min={min} max={max} step={step} value={val} onChange={e => set(Number(e.target.value))}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid var(--card-border)", background: "var(--bg2)", color: "var(--text)", fontSize: 16, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
                </div>
              ))}
            </>
          )}
        </div>

        {/* Result Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          {mode !== "reverse" ? (
            <>
              <div style={{ background: "var(--card)", border: "2px solid #C4913A30", borderRadius: 20, padding: "28px", textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 8 }}>PERCENTAGE</div>
                <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2, color: "#C4913A", lineHeight: 1 }}>
                  {(mode === "marks" ? pct : cgpaToPct).toFixed(2)}
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#C4913A", marginTop: -4 }}>%</div>
              </div>

              <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text3)", letterSpacing: 1, marginBottom: 6 }}>GRADE</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: gradeColor }}>{grade}</div>
              </div>

              {/* Grade scale */}
              <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "16px" }}>
                {[["A+/A", "80-100%", "#1D6B4A"], ["B+/B", "60-79%", "#2D3A8C"], ["C/D", "40-59%", "#C4913A"], ["F", "< 40%", "#B03A2E"]].map(([g, r, c]) => (
                  <div key={g} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontWeight: 700, fontSize: 13, color: c }}>{g}</span>
                    <span style={{ fontSize: 12, color: "var(--text3)" }}>{r}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div style={{ background: "var(--card)", border: "2px solid #1D6B4A30", borderRadius: 20, padding: "28px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", letterSpacing: 1.5, marginBottom: 8 }}>MARKS NEEDED</div>
              <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: -2, color: "#1D6B4A", lineHeight: 1 }}>
                {neededMarks}
              </div>
              <div style={{ fontSize: 13, color: "var(--text3)", marginTop: 8 }}>out of {reverseTotal}</div>
              <div style={{ marginTop: 16, padding: "10px 14px", background: "var(--bg2)", borderRadius: 10, fontSize: 12, color: "var(--text2)" }}>
                To score <strong>{targetPct}%</strong> in {reverseTotal} marks
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
