import { useState } from "react";
import { SectionHeader, ScoreBar, Badge } from "../components/UI";

const LAPTOPS = [
  { name: "Lenovo IdeaPad Slim 3", price: "₹35,000", tag: "Best Budget", score: 8.8, specs: "Ryzen 5 5500U / 8GB / 512GB SSD", display: "15.6\" FHD IPS", battery: "10h", weight: "1.65kg", color: "#2D3A8C", pros: ["Great battery", "Value for money", "Thin & light"], cons: ["No dedicated GPU", "Average speakers"] },
  { name: "HP Pavilion 15", price: "₹48,000", tag: "🏆 Most Popular", score: 9.2, specs: "Intel i5-1335U / 16GB / 512GB SSD", display: "15.6\" FHD IPS", battery: "8.5h", weight: "1.75kg", color: "#1D6B4A", pros: ["Excellent build", "16GB RAM standard", "Good display"], cons: ["Slightly heavy", "Fan noise under load"] },
  { name: "ASUS VivoBook 15", price: "₹40,000", tag: "Best Display", score: 8.9, specs: "Ryzen 5 / 8GB / 512GB SSD", display: "15.6\" OLED / FHD", battery: "7h", weight: "1.7kg", color: "#8B4A9C", pros: ["Vivid OLED display", "Compact design", "Fast SSD"], cons: ["Average battery", "Plastic build"] },
  { name: "Acer Aspire 7", price: "₹58,000", tag: "Code + Game", score: 9.0, specs: "i5-12450H / GTX 1650 / 16GB", display: "15.6\" FHD 144Hz", battery: "6h", weight: "2.1kg", color: "#B03A2E", pros: ["Dedicated GPU", "144Hz display", "Good cooling"], cons: ["Heavy", "Short battery"] },
];

const GADGETS = [
  { name: "boAt Airdopes 141", price: "₹1,299", cat: "Earbuds", icon: "🎧", rating: 4.3, desc: "30h playtime, ENx mic, solid bass for calls & music" },
  { name: "Logitech MX Keys Mini", price: "₹8,500", cat: "Keyboard", icon: "⌨️", rating: 4.6, desc: "Compact wireless keyboard, perfect for coders" },
  { name: "Portronics Mport", price: "₹999", cat: "USB Hub", icon: "🔌", rating: 4.1, desc: "7-in-1 USB-C hub, HDMI + USB 3.0 + SD card" },
  { name: "Xiaomi Redmi Pad SE", price: "₹15,000", cat: "Tablet", icon: "📱", rating: 4.4, desc: '11" FHD display, great for note-taking & reading' },
  { name: "Portronics Power Stand", price: "₹799", cat: "Stand", icon: "💻", rating: 4.5, desc: "Adjustable laptop stand, aluminium, foldable" },
  { name: "NB02 Noise Cancelling", price: "₹2,499", cat: "Headphones", icon: "🎵", rating: 4.2, desc: "Over-ear, 40h battery, ANC for focus study sessions" },
];

const TABS = ["Laptops", "Gadgets", "Student Deals"];

export default function Guides() {
  const [tab, setTab] = useState("Laptops");
  const [compare, setCompare] = useState([]);

  const toggleCompare = (name) =>
    setCompare(c => c.includes(name) ? c.filter(n => n !== name) : c.length < 2 ? [...c, name] : c);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader
        label="💻 Buying Guide"
        labelColor="#B03A2E"
        title="Tech Guides & Recommendations"
        subtitle="Honest picks for students on a budget — updated regularly."
      />

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 36, background: "var(--bg2)", borderRadius: 14, padding: 4, width: "fit-content" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "9px 20px", borderRadius: 11, fontFamily: "inherit",
            border: "none", fontSize: 13, fontWeight: 600,
            background: tab === t ? "var(--card)" : "transparent",
            color: tab === t ? "var(--text)" : "var(--text2)",
            cursor: "pointer", transition: "all 0.2s",
            boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none"
          }}>{t}</button>
        ))}
      </div>

      {/* Laptops Tab */}
      {tab === "Laptops" && (
        <>
          {compare.length > 0 && (
            <div className="fade-in" style={{
              background: "var(--card)", border: "1px solid var(--card-border)",
              borderRadius: 16, padding: "14px 20px", marginBottom: 24,
              display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap"
            }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>📊 Comparing:</span>
              {compare.map(n => <Badge key={n} color="var(--accent)">{n}</Badge>)}
              {compare.length === 2 && <span style={{ fontSize: 12, color: "var(--text2)", marginLeft: 8 }}>Select laptops to compare specs side-by-side</span>}
              <button onClick={() => setCompare([])} style={{ marginLeft: "auto", fontSize: 12, color: "var(--text3)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Clear</button>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {LAPTOPS.map((l, i) => (
              <div key={l.name} className="card-lift fade-up" style={{
                background: "var(--card)", border: compare.includes(l.name) ? `2px solid ${l.color}` : "1px solid var(--card-border)",
                borderRadius: 18, padding: "24px", position: "relative", overflow: "hidden",
                animationDelay: `${i * 0.07}s`
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: l.color }} />
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                  <div style={{ fontSize: 36 }}>💻</div>
                  <Badge color={l.color}>{l.tag}</Badge>
                </div>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{l.name}</div>
                <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 14, fontFamily: "DM Mono, monospace" }}>{l.specs}</div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                  {[["🖥", l.display], ["🔋", l.battery], ["⚖️", l.weight]].map(([ico, v]) => (
                    <div key={v} style={{ background: "var(--bg2)", borderRadius: 8, padding: "6px 10px", fontSize: 11, color: "var(--text2)" }}>{ico} {v}</div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: "var(--text3)", marginBottom: 6 }}>SCORE</div>
                  <ScoreBar score={l.score} color={l.color} />
                </div>

                <div style={{ marginBottom: 16 }}>
                  {l.pros.map(p => <div key={p} style={{ fontSize: 12, color: "#1D6B4A", marginBottom: 3 }}>✓ {p}</div>)}
                  {l.cons.map(p => <div key={p} style={{ fontSize: 12, color: "#B03A2E", marginBottom: 3 }}>✗ {p}</div>)}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontWeight: 900, fontSize: 20, color: l.color }}>{l.price}</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => toggleCompare(l.name)} style={{
                      fontSize: 11, padding: "6px 12px", borderRadius: 8,
                      border: "1px solid var(--card-border)", background: compare.includes(l.name) ? l.color : "transparent",
                      color: compare.includes(l.name) ? "#fff" : "var(--text2)",
                      cursor: "pointer", fontFamily: "inherit"
                    }}>Compare</button>
                    <button className="btn-gold" style={{ fontSize: 11, padding: "6px 14px" }}>View Deal ↗</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Gadgets Tab */}
      {tab === "Gadgets" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {GADGETS.map((g, i) => (
            <div key={g.name} className="card-lift fade-up" style={{
              background: "var(--card)", border: "1px solid var(--card-border)",
              borderRadius: 16, padding: "22px", animationDelay: `${i * 0.06}s`
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--bg2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{g.icon}</div>
                <div>
                  <Badge color="var(--accent)">{g.cat}</Badge>
                  <div style={{ fontWeight: 700, fontSize: 14, marginTop: 4 }}>{g.name}</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 14 }}>{g.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>Rating</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#C4913A" }}>★ {g.rating}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>Price</div>
                  <div style={{ fontWeight: 800, fontSize: 16, color: "var(--accent)" }}>{g.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Deals Tab */}
      {tab === "Student Deals" && (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎁</div>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Student Deals & Discounts</div>
          <p style={{ color: "var(--text2)", fontSize: 14, maxWidth: 400, margin: "0 auto 24px" }}>
            GitHub Student Pack, JetBrains, Notion, Figma, and more — all free for verified students.
          </p>
          {[
            ["GitHub Student Developer Pack", "Free", "100+ tools including Copilot, domains, cloud credits", "#2D3A8C"],
            ["JetBrains All Products Pack", "Free", "All IDEs including IntelliJ, PyCharm, WebStorm", "#8B4A9C"],
            ["Notion for Students", "Free Pro", "Unlimited pages, AI features for students", "#1D6B4A"],
            ["Figma Education", "Free Pro", "Full professional plan with student email", "#B03A2E"],
            ["AWS Educate", "₹2500+ Credits", "Cloud computing credits for projects & labs", "#C4913A"],
          ].map(([name, badge, desc, color]) => (
            <div key={name} className="card-lift" style={{
              background: "var(--card)", border: "1px solid var(--card-border)",
              borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center",
              gap: 16, marginBottom: 12, textAlign: "left"
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🎓</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{name}</div>
                <div style={{ fontSize: 12, color: "var(--text2)" }}>{desc}</div>
              </div>
              <Badge color={color}>{badge}</Badge>
              <button className="btn-ghost" style={{ fontSize: 11, padding: "6px 14px", flexShrink: 0 }}>Get →</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
