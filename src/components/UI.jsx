export function SectionHeader({ label, labelColor = "var(--accent)", title, subtitle, action }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
      <div>
        <div className="section-label" style={{ color: labelColor }}>{label}</div>
        <h2 style={{ fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, letterSpacing: -0.8, lineHeight: 1.1 }}>{title}</h2>
        {subtitle && <p style={{ color: "var(--text2)", fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>{subtitle}</p>}
      </div>
      {action && <button className="btn-ghost" style={{ fontSize: 12, flexShrink: 0 }}>{action} →</button>}
    </div>
  );
}

export function Card({ children, style = {}, className = "", onClick }) {
  return (
    <div
      className={`card-lift ${className}`}
      onClick={onClick}
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderRadius: 18,
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        ...style
      }}
    >
      {children}
    </div>
  );
}

export function ScoreBar({ score, max = 10, color = "var(--accent)" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, height: 4, borderRadius: 2, background: "var(--bg3)", overflow: "hidden" }}>
        <div style={{
          width: `${(score / max) * 100}%`, height: "100%",
          borderRadius: 2, background: color,
          transition: "width 0.8s cubic-bezier(0.22,1,0.36,1)"
        }} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, minWidth: 26 }}>{score}</span>
    </div>
  );
}

export function Badge({ children, color, bg }) {
  return (
    <span className="tag-pill" style={{
      background: bg || (color + "18"),
      color: color || "var(--accent)"
    }}>
      {children}
    </span>
  );
}

export function StatCard({ number, label, icon }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 24px" }}>
      <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 4 }}>{icon} {label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", letterSpacing: -1 }}>{number}</div>
    </div>
  );
}

export function GlowDot({ color = "#4ade80" }) {
  return (
    <span style={{
      display: "inline-block", width: 7, height: 7, borderRadius: "50%",
      background: color, animation: "pulse 2s infinite"
    }} />
  );
}
