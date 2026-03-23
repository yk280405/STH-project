import { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../../hooks/useSEO";

const CATEGORIES = {
  Length: {
    icon: "📏",
    color: "#8B4A9C",
    units: {
      Meter:      1,
      Kilometer:  0.001,
      Centimeter: 100,
      Millimeter: 1000,
      Foot:       3.28084,
      Inch:       39.3701,
      Yard:       1.09361,
      Mile:       0.000621371,
    },
  },
  Mass: {
    icon: "⚖️",
    color: "#2D3A8C",
    units: {
      Kilogram: 1,
      Gram:     1000,
      Milligram:1e6,
      Pound:    2.20462,
      Ounce:    35.274,
      Tonne:    0.001,
    },
  },
  Temperature: {
    icon: "🌡️",
    color: "#B03A2E",
    units: { Celsius: 0, Fahrenheit: 0, Kelvin: 0 },
    special: true,
  },
  Time: {
    icon: "⏱️",
    color: "#C4913A",
    units: {
      Second:      1,
      Millisecond: 1000,
      Minute:      1 / 60,
      Hour:        1 / 3600,
      Day:         1 / 86400,
      Week:        1 / 604800,
    },
  },
  Data: {
    icon: "💾",
    color: "#1D6B4A",
    units: {
      Byte:     1,
      Kilobyte: 1 / 1024,
      Megabyte: 1 / 1048576,
      Gigabyte: 1 / 1073741824,
      Terabyte: 1 / (1024 ** 4),
      Bit:      8,
    },
  },
  Speed: {
    icon: "🚀",
    color: "#2D3A8C",
    units: {
      "m/s":  1,
      "km/h": 3.6,
      "mph":  2.23694,
      "knot": 1.94384,
    },
  },
};

function convertTemp(val, from, to) {
  let celsius;
  if (from === "Celsius")     celsius = val;
  else if (from === "Fahrenheit") celsius = (val - 32) * 5 / 9;
  else celsius = val - 273.15;

  if (to === "Celsius")     return celsius;
  if (to === "Fahrenheit")  return celsius * 9 / 5 + 32;
  return celsius + 273.15;
}

export default function UnitConverter() {
  useSEO({
    title:       "Unit Converter — Length, Mass, Temperature, Data & More Free",
    description: "Free online unit converter for students and engineers. Convert length, mass, temperature, time, data size and speed units instantly. Supports metres, kilograms, Celsius, Fahrenheit, KB/MB/GB and more.",
    canonical:   "https://studenttechhub.com/tools/unit-converter",
    keywords:    "unit converter, length converter, mass converter, temperature converter, data unit converter, km to miles, celsius to fahrenheit, kg to pounds, MB to GB, free unit converter online",
    ogTitle:     "Free Unit Converter — Length, Mass, Temp, Data & Speed | StudentTechHub",
    ogDesc:      "Convert between 6 categories of units — length, mass, temperature, time, data and speed. Free, instant, mobile-friendly.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Unit Converter",
      "description": "Free unit converter supporting length, mass, temperature, time, data size, and speed conversions for students and engineers.",
      "url": "https://studenttechhub.com/tools/unit-converter",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "author": { "@type": "Person", "name": "YK", "url": "https://studenttechhub.com/about" },
      "publisher": { "@type": "Organization", "name": "StudentTechHub", "url": "https://studenttechhub.com" },
    },
  });
  const [cat,    setCat]    = useState("Length");
  const [from,   setFrom]   = useState("Meter");
  const [to,     setTo]     = useState("Foot");
  const [value,  setValue]  = useState(1);

  const catDef = CATEGORIES[cat];
  const units  = Object.keys(catDef.units);

  // Reset from/to when category changes
  const changeCategory = (c) => {
    setCat(c);
    const u = Object.keys(CATEGORIES[c].units);
    setFrom(u[0]);
    setTo(u[1]);
    setValue(1);
  };

  const compute = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    if (catDef.special) {
      const r = convertTemp(v, from, to);
      return r.toFixed(4).replace(/\.?0+$/, "");
    }
    const inBase = v / catDef.units[from];
    const result = inBase * catDef.units[to];
    return result.toFixed(6).replace(/\.?0+$/, "");
  };

  const result = compute();

  const swap = () => { setFrom(to); setTo(from); };

  // All conversions from current value
  const allConversions = units.map(u => {
    const v = parseFloat(value);
    if (isNaN(v)) return { unit: u, val: "—" };
    let res;
    if (catDef.special) {
      res = convertTemp(v, from, u);
    } else {
      res = (v / catDef.units[from]) * catDef.units[u];
    }
    return { unit: u, val: res.toFixed(5).replace(/\.?0+$/, "") };
  });

  const selStyle = {
    padding: "12px 14px", borderRadius: 12, border: "1px solid var(--card-border)",
    background: "var(--bg2)", color: "var(--text)", fontSize: 14,
    outline: "none", cursor: "pointer", fontFamily: "inherit", width: "100%",
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "44px 24px 80px" }}>

      <Link to="/tools" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none", color: "var(--text2)", fontSize: 13, marginBottom: 28 }}>
        ← Back to Tools
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "#8B4A9C18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>⚖️</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#8B4A9C", textTransform: "uppercase", marginBottom: 4 }}>Utility Tool</div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, letterSpacing: -0.8 }}>Unit Converter</h1>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {Object.entries(CATEGORIES).map(([name, def]) => (
          <button key={name} onClick={() => changeCategory(name)} style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "8px 16px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600, fontSize: 13,
            border: cat === name ? `2px solid ${def.color}` : "1px solid var(--card-border)",
            background: cat === name ? def.color + "12" : "var(--card)",
            color: cat === name ? def.color : "var(--text2)", cursor: "pointer", transition: "all 0.18s",
          }}>
            <span style={{ fontSize: 15 }}>{def.icon}</span>{name}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "start" }}>

        {/* Converter panel */}
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, padding: "28px" }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 22 }}>Convert {cat}</div>

          {/* Value input */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>Value</label>
            <input
              type="number"
              value={value}
              onChange={e => setValue(e.target.value)}
              style={{ width: "100%", padding: "14px 16px", borderRadius: 14, border: "1px solid var(--card-border)", background: "var(--bg2)", color: "var(--text)", fontSize: 20, outline: "none", boxSizing: "border-box", fontFamily: "DM Mono, monospace" }}
            />
          </div>

          {/* From / Swap / To */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "end", marginBottom: 24 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} style={selStyle}>
                {units.map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
            <button onClick={swap} style={{
              background: "var(--bg2)", border: "1px solid var(--card-border)",
              borderRadius: 10, padding: "12px 14px", cursor: "pointer", fontSize: 18, lineHeight: 1,
              transition: "transform 0.3s", fontFamily: "inherit"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "rotate(180deg)"}
              onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg)"}
            >⇄</button>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>To</label>
              <select value={to} onChange={e => setTo(e.target.value)} style={selStyle}>
                {units.map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
          </div>

          {/* Result */}
          <div style={{ background: catDef.color + "10", border: `2px solid ${catDef.color}30`, borderRadius: 16, padding: "22px", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 6 }}>
              {value} {from} =
            </div>
            <div style={{ fontFamily: "DM Mono, monospace", fontSize: 32, fontWeight: 900, color: catDef.color, wordBreak: "break-all" }}>
              {result}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: catDef.color, marginTop: 4 }}>{to}</div>
          </div>
        </div>

        {/* All conversions */}
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "22px" }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>All {cat} conversions</div>
          <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 14 }}>from {value} {from}</div>
          {allConversions.map(({ unit, val }) => (
            <div key={unit} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "9px 0", borderBottom: "1px solid var(--border)",
              background: unit === to ? catDef.color + "08" : "transparent",
            }}>
              <span style={{ fontSize: 13, color: unit === to ? catDef.color : "var(--text2)", fontWeight: unit === to ? 700 : 400 }}>{unit}</span>
              <span style={{ fontFamily: "DM Mono, monospace", fontSize: 13, fontWeight: 700, color: unit === to ? catDef.color : "var(--text)" }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
