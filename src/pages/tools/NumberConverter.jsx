import { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../../hooks/useSEO";

const BASES = [
  { id: "decimal", label: "Decimal",     base: 10, prefix: "",   placeholder: "e.g. 255" },
  { id: "binary",  label: "Binary",      base: 2,  prefix: "0b", placeholder: "e.g. 11111111" },
  { id: "octal",   label: "Octal",       base: 8,  prefix: "0o", placeholder: "e.g. 377" },
  { id: "hex",     label: "Hexadecimal", base: 16, prefix: "0x", placeholder: "e.g. FF" },
];

function getSteps(n, toBase, toLabel) {
  if (isNaN(n) || n < 0) return [];
  if (toBase === 10) return [`The number in decimal is simply ${n}`];
  const steps = [];
  let num = n;
  const remainders = [];
  while (num > 0) {
    const rem = num % toBase;
    steps.push(`${num} ÷ ${toBase} = ${Math.floor(num / toBase)} remainder ${rem.toString(toBase).toUpperCase()}`);
    remainders.push(rem.toString(toBase).toUpperCase());
    num = Math.floor(num / toBase);
  }
  steps.push(`Read remainders bottom-up: ${remainders.reverse().join(" ")} → ${n.toString(toBase).toUpperCase()}`);
  return steps;
}

export default function NumberConverter() {
  useSEO({
    title:       "Number System Converter — Binary Decimal Hex Octal Free",
    description: "Free online number system converter for CS and engineering students. Instantly convert between Binary, Decimal, Octal and Hexadecimal with step-by-step conversion explanation.",
    canonical:   "https://studenttechhub.com/tools/number-converter",
    keywords:    "number system converter, binary to decimal, decimal to binary, hex converter, octal converter, binary decimal hex octal, number base converter, CS tool",
    ogTitle:     "Free Number System Converter — Binary, Decimal, Hex, Octal | StudentTechHub",
    ogDesc:      "Convert between Binary, Decimal, Octal and Hexadecimal instantly. Includes step-by-step working. Free for CS students.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Number System Converter",
      "description": "Convert between Binary, Decimal, Octal and Hexadecimal number systems with step-by-step explanations. Free tool for computer science students.",
      "url": "https://studenttechhub.com/tools/number-converter",
      "applicationCategory": "EducationApplication",
      "operatingSystem": "Any",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "author": { "@type": "Person", "name": "YK", "url": "https://studenttechhub.com/about" },
      "publisher": { "@type": "Organization", "name": "StudentTechHub", "url": "https://studenttechhub.com" },
    },
  });
  const [fromBase, setFromBase] = useState("decimal");
  const [input,    setInput]    = useState("255");
  const [showSteps, setShowSteps] = useState(false);
  const [stepsFor,  setStepsFor]  = useState("binary");

  const fromDef = BASES.find(b => b.id === fromBase);
  const n = parseInt(input, fromDef.base);
  const valid = !isNaN(n) && n >= 0 && input.trim() !== "";

  const results = BASES.map(b => ({
    ...b,
    value: valid ? n.toString(b.base).toUpperCase() : "—",
    active: b.id === fromBase,
  }));

  const steps = valid ? getSteps(n, BASES.find(b => b.id === stepsFor).base, stepsFor) : [];

  const copy = (text) => { navigator.clipboard?.writeText(text); };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 24px 80px" }}>

      <Link to="/tools" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "var(--text2)", fontSize: 13, marginBottom: 28 }}>
        ← Back to Tools
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "#1D6B4A18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🔢</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#1D6B4A", textTransform: "uppercase", marginBottom: 4 }}>Utility Tool</div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, letterSpacing: -0.8 }}>Number System Converter</h1>
        </div>
      </div>

      {/* From base selector */}
      <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, padding: "28px", marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>Input Number (select base)</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
          {BASES.map(b => (
            <button key={b.id} onClick={() => { setFromBase(b.id); setInput(""); }} style={{
              padding: "8px 16px", borderRadius: 10, fontFamily: "inherit", fontWeight: 600, fontSize: 13,
              border: fromBase === b.id ? "2px solid #1D6B4A" : "1px solid var(--card-border)",
              background: fromBase === b.id ? "#1D6B4A10" : "transparent",
              color: fromBase === b.id ? "#1D6B4A" : "var(--text2)", cursor: "pointer",
            }}>{b.label} (Base {b.base})</button>
          ))}
        </div>
        <div style={{ position: "relative" }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value.toUpperCase())}
            placeholder={fromDef.placeholder}
            style={{
              width: "100%", padding: "14px 18px", borderRadius: 14,
              border: `2px solid ${valid || !input ? "var(--card-border)" : "#B03A2E"}`,
              background: "var(--bg2)", color: "var(--text)", fontSize: 20,
              outline: "none", boxSizing: "border-box",
              fontFamily: "DM Mono, monospace", letterSpacing: 1,
            }}
          />
          {input && !valid && (
            <div style={{ fontSize: 11, color: "#B03A2E", marginTop: 5 }}>
              Invalid {fromDef.label} number
            </div>
          )}
        </div>
      </div>

      {/* Results grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 20 }}>
        {results.map(r => (
          <div key={r.id} style={{
            background: "var(--card)", border: r.active ? "2px solid #1D6B4A" : "1px solid var(--card-border)",
            borderRadius: 16, padding: "20px 22px", position: "relative",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: r.active ? "#1D6B4A" : "var(--text3)", letterSpacing: 1, marginBottom: 3 }}>
                  {r.label.toUpperCase()} {r.active && "· INPUT"}
                </div>
                <div style={{ fontSize: 11, color: "var(--text3)" }}>Base {r.base} · {r.prefix || "no prefix"}</div>
              </div>
              {valid && r.value !== "—" && (
                <button onClick={() => copy(r.value)} title="Copy" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "var(--text3)", padding: 0, fontFamily: "inherit" }}>📋</button>
              )}
            </div>
            <div style={{
              fontFamily: "DM Mono, monospace", fontWeight: 700,
              fontSize: r.value.length > 12 ? 14 : 22,
              color: r.active ? "#1D6B4A" : "var(--accent)",
              wordBreak: "break-all", letterSpacing: 1,
            }}>{r.value}</div>
          </div>
        ))}
      </div>

      {/* Step-by-step */}
      <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "22px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: showSteps ? 18 : 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>📖 Step-by-step conversion</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <select value={stepsFor} onChange={e => setStepsFor(e.target.value)} style={{
              padding: "6px 10px", borderRadius: 8, border: "1px solid var(--card-border)",
              background: "var(--bg2)", color: "var(--text)", fontSize: 12, outline: "none", fontFamily: "inherit",
            }}>
              {BASES.filter(b => b.id !== fromBase).map(b => (
                <option key={b.id} value={b.id}>→ {b.label}</option>
              ))}
            </select>
            <button onClick={() => setShowSteps(!showSteps)} className="btn-ghost" style={{ fontSize: 12, padding: "6px 14px" }}>
              {showSteps ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {showSteps && (
          <div className="fade-in">
            {!valid ? (
              <div style={{ fontSize: 13, color: "var(--text3)" }}>Enter a valid number above to see the steps.</div>
            ) : (
              <div>
                <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 12 }}>
                  Converting <strong style={{ color: "var(--text)", fontFamily: "DM Mono, monospace" }}>{input.toUpperCase()}</strong> ({fromDef.label}) → {BASES.find(b => b.id === stepsFor).label}
                </div>
                {steps.map((step, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 12, alignItems: "flex-start",
                    padding: "8px 0", borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none"
                  }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#1D6B4A18", color: "#1D6B4A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontSize: 13, fontFamily: "DM Mono, monospace", color: "var(--text)", lineHeight: 1.6 }}>{step}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
