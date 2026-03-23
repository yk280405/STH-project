import { Link } from "react-router-dom";
import { SectionHeader } from "../components/UI";
import useSEO from "../hooks/useSEO";

const MILESTONES = [
  { year: "2024", event: "Idea born — frustrated with scattered engineering resources online" },
  { year: "Early 2025", event: "Started building the platform — tools & core structure" },
  { year: "Mid 2025", event: "Launched with CGPA calculator, unit converter & tools hub" },
  { year: "Late 2025", event: "Added AI Tools section, Project Ideas bank & Subject Notes" },
  { year: "2026", event: "Full platform live — resources, guides, projects & more coming" },
];

const VALUES = [
  { icon: "🎯", title: "Student-First", desc: "Every feature is built with the student's real academic needs in mind — not SEO or ad revenue." },
  { icon: "💡", title: "Always Free", desc: "Core tools and resources will always be free. No paywalls on calculators or tutorials." },
  { icon: "🔄", title: "Kept Updated", desc: "Content is regularly reviewed and updated to match current syllabi and industry trends." },
  { icon: "⚡", title: "No Noise", desc: "Curated content only. No spam, no filler — just what actually helps students." },
];

export default function About() {
  useSEO({
    title:       "About StudentTechHub — Built by a Student, for Students",
    description: "Learn about StudentTechHub — a free platform built by an engineering student to give every student access to quality coding resources, tools, tech guides and project ideas.",
    canonical:   "https://studenttechhub.com/about",
    keywords:    "about StudentTechHub, student platform, free engineering tools, student resources India, engineering student website",
    ogTitle:     "About StudentTechHub | Built by a Student, for Students",
    ogDesc:      "The story behind StudentTechHub — a free all-in-one platform for engineering students built by YK.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About StudentTechHub",
      "url": "https://studenttechhub.com/about",
      "description": "StudentTechHub is a free platform built by an engineering student to help all students access quality resources, tools and guides.",
      "publisher": { "@type": "Organization", "name": "StudentTechHub", "url": "https://studenttechhub.com" },
    },
  });
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px 60px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label" style={{ color: "var(--accent)", marginBottom: 10 }}>✦ Our Story</div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.08, marginBottom: 22 }}>
            Built by a student,<br />
            <span style={{ background: "linear-gradient(120deg, var(--accent), var(--accent-alt))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>for students.</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--text2)", lineHeight: 1.75, maxWidth: 580, margin: "0 auto 32px" }}>
            StudentTechHub was born from frustration — too many great resources scattered across the internet,
            no single place built specifically for engineering students. So I built one.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/tools">
              <button className="btn-primary" style={{ fontSize: 14 }}>Try Free Tools →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <div className="section-label" style={{ color: "var(--accent-alt)" }}>✦ Mission</div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, letterSpacing: -0.8, marginBottom: 18, lineHeight: 1.2 }}>
              Democratize quality tech education
            </h2>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.8, marginBottom: 16 }}>
              Quality engineering education shouldn't depend on which college you attend or how much you can spend on courses.
              StudentTechHub gives every student — from tier-1 to tier-3 colleges — access to the same quality resources.
            </p>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.8 }}>
              Practical tools, curated learning content, and honest tech guides — all in one place to help students make smarter decisions about what to learn, what to build, and what to buy.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{
                background: "var(--card)", border: "1px solid var(--card-border)",
                borderRadius: 16, padding: "20px 18px"
              }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{v.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{v.title}</div>
                <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's Behind This — only YK */}
      <section style={{ background: "var(--bg2)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader label="✦ The Builder" labelColor="#2D3A8C" title="Who's Behind This?" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card-lift fade-up" style={{
              background: "var(--card)", border: "1px solid var(--card-border)",
              borderRadius: 22, padding: "40px 48px", textAlign: "center",
              maxWidth: 380, width: "100%",
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "#2D3A8C20", color: "#2D3A8C",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, fontWeight: 900, margin: "0 auto 18px",
                border: "2px solid #2D3A8C30",
                letterSpacing: -1,
              }}>YK</div>
              <div style={{ fontWeight: 900, fontSize: 22, marginBottom: 6, letterSpacing: -0.5 }}>YK</div>
              <div style={{ fontSize: 13, color: "#2D3A8C", fontWeight: 700, marginBottom: 16, letterSpacing: 0.3 }}>
                Founder & Developer
              </div>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7 }}>
                Engineering student who built StudentTechHub from scratch — because every student deserves great resources, free tools, and honest guidance in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 24px" }}>
        <SectionHeader label="✦ Journey" labelColor="#8B4A9C" title="How It Started" />
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1.5, background: "var(--border)" }} />
          {MILESTONES.map((m, i) => (
            <div key={m.year} className="fade-up" style={{ position: "relative", marginBottom: 28, animationDelay: `${i * 0.08}s` }}>
              <div style={{
                position: "absolute", left: -25, top: 4,
                width: 14, height: 14, borderRadius: "50%",
                background: "var(--accent)", border: "2px solid var(--bg)"
              }} />
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 0.5, marginBottom: 3 }}>{m.year}</div>
              <div style={{ fontSize: 14, color: "var(--text)", fontWeight: 500, lineHeight: 1.5 }}>{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple CTA — no GitHub */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 70%, var(--accent-alt)) 100%)",
            borderRadius: 24, padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
            <div style={{ fontSize: 38, marginBottom: 14 }}>🎓</div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 800, color: "#fff", letterSpacing: -0.6, marginBottom: 12 }}>
              Start using StudentTechHub today.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, maxWidth: 400, margin: "0 auto 28px", lineHeight: 1.65 }}>
              Free tools, curated resources and project ideas — all in one place, built just for students.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/tools">
                <button style={{ background: "#fff", color: "var(--accent)", border: "none", padding: "13px 28px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Try Free Tools →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
