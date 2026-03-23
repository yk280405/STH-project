import { useState } from "react";
import { SectionHeader, Badge } from "../components/UI";

const TOOLS = [
  { name: "GitHub Copilot",    cat: "Coding",      icon: "🤖", color: "#2D3A8C", free: false, rating: 4.8, desc: "AI pair programmer that suggests code inline inside VS Code, JetBrains & more. Game-changer for productivity.",    link: "#", tags: ["VS Code", "IntelliJ", "Autocomplete"] },
  { name: "ChatGPT",           cat: "Learning",    icon: "💬", color: "#1D6B4A", free: true,  rating: 4.7, desc: "Debug code, explain complex topics, solve DSA problems, write essays & summarize research papers instantly.",    link: "#", tags: ["GPT-4", "Coding", "Research"] },
  { name: "Claude by Anthropic",cat:"Learning",    icon: "🧠", color: "#8B4A9C", free: true,  rating: 4.8, desc: "Long-context reasoning for in-depth explanations, code review, project planning & understanding research papers.", link: "#", tags: ["200K context", "Code Review", "Analysis"] },
  { name: "GitHub Copilot Chat",cat: "Coding",     icon: "💻", color: "#2D3A8C", free: false, rating: 4.6, desc: "Ask questions about your codebase, get explanations, write tests and fix bugs conversationally inside your IDE.", link: "#", tags: ["IDE Chat", "Unit Tests", "Bug Fix"] },
  { name: "Perplexity AI",     cat: "Research",    icon: "🔍", color: "#B03A2E", free: true,  rating: 4.5, desc: "AI-powered search engine with cited sources. Perfect for research, finding papers, and fact-checking.",           link: "#", tags: ["Cited Sources", "Research", "Search"] },
  { name: "Notion AI",         cat: "Productivity",icon: "📋", color: "#C4913A", free: false, rating: 4.4, desc: "Summarize lecture notes, generate study plans, create flashcards & manage your academic life in one place.",     link: "#", tags: ["Notes", "Study Plans", "Productivity"] },
  { name: "v0 by Vercel",      cat: "UI/Design",   icon: "✨", color: "#1D6B4A", free: true,  rating: 4.5, desc: "Generate beautiful React UI components from plain text prompts. Perfect for frontend project work.",             link: "#", tags: ["React", "UI Gen", "Tailwind"] },
  { name: "Tabnine",           cat: "Coding",      icon: "⚡", color: "#2D3A8C", free: true,  rating: 4.3, desc: "Code completion AI that works with all major languages. Privacy-first, works offline, free tier available.",    link: "#", tags: ["Offline", "Privacy", "All Languages"] },
  { name: "Otter.ai",          cat: "Productivity",icon: "🎙️",color: "#8B4A9C", free: true,  rating: 4.2, desc: "Auto-transcribes lectures, meetings and voice notes with AI summaries. Saves hours of manual note-taking.",     link: "#", tags: ["Transcription", "Lecture Notes", "Free tier"] },
  { name: "Grammarly",         cat: "Writing",     icon: "✍️", color: "#1D6B4A", free: true,  rating: 4.5, desc: "AI writing assistant for emails, reports, internship applications and academic submissions.",                   link: "#", tags: ["Grammar", "Style", "Browser"] },
  { name: "Wolfram Alpha",     cat: "Learning",    icon: "🔢", color: "#C4913A", free: true,  rating: 4.6, desc: "Computational knowledge engine for maths, physics, chemistry & engineering calculations with step-by-step.",    link: "#", tags: ["Maths", "Physics", "Step-by-Step"] },
  { name: "Quillbot",          cat: "Writing",     icon: "📝", color: "#B03A2E", free: true,  rating: 4.1, desc: "Paraphrase, summarize and improve writing quality for academic submissions and reports.",                       link: "#", tags: ["Paraphrase", "Summarize", "Academic"] },
];

const CATS = ["All", "Coding", "Learning", "Research", "Productivity", "UI/Design", "Writing"];

export default function AITools() {
  const [cat, setCat] = useState("All");
  const [onlyFree, setOnlyFree] = useState(false);

  const filtered = TOOLS.filter(t =>
    (cat === "All" || t.cat === cat) && (!onlyFree || t.free)
  );

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader
        label="🤖 AI Suite"
        labelColor="#8B4A9C"
        title="AI & Productivity Tools"
        subtitle="Curated AI tools that actually help students — not just hype."
      />

      {/* Filter bar */}
      <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", flex: 1 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              fontSize: 12, padding: "7px 16px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600,
              border: "1px solid var(--card-border)",
              background: cat === c ? "var(--accent)" : "var(--card)",
              color: cat === c ? "#fff" : "var(--text2)", cursor: "pointer", transition: "all 0.18s"
            }}>{c}</button>
          ))}
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer", userSelect: "none" }}>
          <div style={{ position: "relative", width: 36, height: 20 }}>
            <input type="checkbox" checked={onlyFree} onChange={e => setOnlyFree(e.target.checked)}
              style={{ opacity: 0, position: "absolute", width: "100%", height: "100%", cursor: "pointer", margin: 0 }} />
            <div style={{ width: 36, height: 20, borderRadius: 10, background: onlyFree ? "var(--accent)" : "var(--bg3)", transition: "background 0.2s" }} />
            <div style={{ position: "absolute", top: 2, left: onlyFree ? 18 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s", pointerEvents: "none" }} />
          </div>
          Free only
        </label>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
        {filtered.map((t, i) => (
          <div key={t.name} className="card-lift fade-up" style={{
            background: "var(--card)", border: "1px solid var(--card-border)",
            borderRadius: 18, padding: "22px", animationDelay: `${i * 0.06}s`
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: 13, background: t.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{t.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                  <Badge color={t.color}>{t.cat}</Badge>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#C4913A" }}>★ {t.rating}</span>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10, background: t.free ? "#1D6B4A18" : "#B03A2E18", color: t.free ? "#1D6B4A" : "#B03A2E" }}>{t.free ? "FREE" : "PAID"}</span>
              </div>
            </div>

            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65, marginBottom: 16 }}>{t.desc}</p>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {t.tags.map(tag => (
                <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)", letterSpacing: 0.3 }}>{tag}</span>
              ))}
            </div>

            <button className="btn-ghost" style={{ fontSize: 12, padding: "7px 16px", width: "100%" }}>
              Try {t.name} ↗
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🤖</div>
          <div style={{ fontWeight: 600 }}>No tools match your filters</div>
        </div>
      )}
    </div>
  );
}
