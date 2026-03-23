import { Link } from "react-router-dom";
import { SectionHeader } from "../components/UI";
import useSEO from "../hooks/useSEO";

const TOOLS = [
  {
    id: "cgpa",
    path: "/tools/cgpa",
    icon: "🎓",
    title: "CGPA Calculator",
    desc: "Calculate your semester CGPA and cumulative GPA with subject-wise grade input.",
    color: "#2D3A8C",
    features: ["Subject-wise input", "Credit weighting", "CGPA → % conversion"],
    badge: "Most Used",
  },
  {
    id: "percentage",
    path: "/tools/percentage",
    icon: "📊",
    title: "Percentage Calculator",
    desc: "Convert marks to percentage, find your grade, and calculate weighted averages.",
    color: "#C4913A",
    features: ["Marks → Percentage", "CGPA → Percentage", "Grade finder"],
    badge: "Quick & Easy",
  },
  {
    id: "number-converter",
    path: "/tools/number-converter",
    icon: "🔢",
    title: "Number System Converter",
    desc: "Instantly convert between Binary, Decimal, Octal and Hexadecimal.",
    color: "#1D6B4A",
    features: ["Binary ↔ Decimal", "Octal ↔ Hex", "Step-by-step output"],
    badge: "CS Essential",
  },
  {
    id: "unit-converter",
    path: "/tools/unit-converter",
    icon: "⚖️",
    title: "Unit Converter",
    desc: "Convert length, mass, temperature, time and data units in one place.",
    color: "#8B4A9C",
    features: ["Length, Mass, Time", "Temperature", "Data units (KB/MB/GB)"],
    badge: "Multi-purpose",
  },
];

export default function Tools() {
  useSEO({
    title:       "Free Student Utility Tools — CGPA, Percentage, Converter",
    description: "Free online tools for engineering students — CGPA calculator, percentage calculator, binary/hex number converter and unit converter. No login, no ads, instant results.",
    canonical:   "https://studenttechhub.com/tools",
    keywords:    "student tools, CGPA calculator, percentage calculator, number system converter, unit converter, free engineering tools, student utility tools online",
    ogTitle:     "Free Student Utility Tools | StudentTechHub",
    ogDesc:      "CGPA calculator, percentage converter, number system converter, unit converter — all free for engineering students.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Student Utility Tools",
      "description": "Collection of free utility tools for engineering students including CGPA calculator, percentage calculator, number system converter and unit converter.",
      "url": "https://studenttechhub.com/tools",
      "publisher": { "@type": "Organization", "name": "StudentTechHub", "url": "https://studenttechhub.com" },
    },
  });
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader
        label="🔧 Utility Suite"
        labelColor="#C4913A"
        title="Student Utility Tools"
        subtitle="Free, instant calculators and converters — no login, no ads, just results."
      />

      {/* Tool cards grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 22,
        marginBottom: 56,
      }}>
        {TOOLS.map((tool, i) => (
          <Link key={tool.id} to={tool.path} style={{ textDecoration: "none" }}>
            <div
              className="card-lift fade-up"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: 20,
                padding: "28px 26px",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                animationDelay: `${i * 0.08}s`,
                cursor: "pointer",
              }}
            >
              {/* Top color bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: 3, background: tool.color, opacity: 0.85,
              }} />

              {/* Badge */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                fontSize: 10, fontWeight: 700, padding: "3px 10px",
                borderRadius: 20, background: tool.color + "18", color: tool.color,
                letterSpacing: 0.4, textTransform: "uppercase",
              }}>{tool.badge}</div>

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: tool.color + "15",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 26,
                marginBottom: 18,
              }}>{tool.icon}</div>

              <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 8, color: "var(--text)" }}>
                {tool.title}
              </div>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65, marginBottom: 18 }}>
                {tool.desc}
              </p>

              {/* Features list */}
              <div style={{ marginBottom: 22 }}>
                {tool.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: tool.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "var(--text2)" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: 14, borderTop: "1px solid var(--border)",
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: tool.color }}>
                  Open Tool →
                </span>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: tool.color + "15",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, color: tool.color,
                }}>→</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom info strip */}
      <div style={{
        background: "var(--card)", border: "1px solid var(--card-border)",
        borderRadius: 18, padding: "24px 28px",
        display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
      }}>
        <div style={{ fontSize: 32 }}>⚡</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>All tools are 100% free</div>
          <div style={{ fontSize: 13, color: "var(--text2)" }}>
            No sign-up, no ads inside tools, no data collected. Works on mobile too.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Free Forever", "Works Offline", "Mobile Friendly"].map(t => (
            <div key={t} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text3)", letterSpacing: 0.5 }}>✓ {t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
