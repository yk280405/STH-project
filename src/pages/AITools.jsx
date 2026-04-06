import { useState } from "react";
import { SectionHeader, Badge } from "../components/UI";
import useSEO from "../hooks/useSEO";

const CATEGORIES = [
  {
    id: "dev-env", title: "AI-Native Development Environments", icon: "💻", color: "#2D3A8C",
    desc: "Integrated AI environments that go beyond simple autocomplete — they understand your entire codebase.",
    tools: [
      { name: "Cursor", tag: "IDE", free: false, rating: 4.9, icon: "⚡", link: "https://cursor.com", tags: ["VS Code Fork", "Full Codebase", "Refactoring"], desc: "A VS Code fork that understands your entire codebase. Top choice for full-stack developers — brilliant for refactoring Spring Boot services or generating React components that match your existing patterns." },
      { name: "v0.dev", tag: "UI Gen", free: true, rating: 4.7, icon: "✨", link: "https://v0.dev", tags: ["React", "Tailwind", "UI Prototyping"], desc: "Describe any UI in plain English and get high-quality React code using Tailwind CSS and shadcn/ui. Excellent for rapid prototyping of layouts and e-commerce components." },
      { name: "GitHub Copilot", tag: "Autocomplete", free: false, rating: 4.8, icon: "🤖", link: "https://copilot.github.com", tags: ["VS Code", "All Languages", "Autocomplete"], desc: "Industry standard for line-by-line autocomplete. Essential for reducing mental load when writing repetitive CRUD operations, unit tests, or boilerplate Java code." },
      { name: "Tabnine", tag: "Autocomplete", free: true, rating: 4.3, icon: "⌨️", link: "https://tabnine.com", tags: ["Offline", "Privacy", "Free Tier"], desc: "Privacy-first AI code completion that works offline. Supports all major languages and IDEs. Great free alternative to Copilot for students on a budget." },
    ],
  },
  {
    id: "architecture", title: "System Architecture & Documentation", icon: "🏗️", color: "#1D6B4A",
    desc: "Manage complexity of multi-tier applications with clear visualization and AI-powered planning.",
    tools: [
      { name: "Eraser.io", tag: "Diagrams", free: true, rating: 4.6, icon: "📐", link: "https://eraser.io", tags: ["Architecture Diagrams", "Documentation", "AI Generate"], desc: "AI Architecture feature: describe a system ('Spring Boot backend with PostgreSQL and React frontend') and it generates professional diagrams and technical documentation automatically." },
      { name: "Notion AI", tag: "Productivity", free: false, rating: 4.4, icon: "📋", link: "https://notion.so", tags: ["Notes", "Project Mgmt", "Study Plans"], desc: "Ideal for project management. Summarize technical requirements, generate user stories, draft project briefs, create study plans, and manage all academic tasks in one place." },
      { name: "Linear + AI", tag: "Task Mgmt", free: false, rating: 4.5, icon: "📌", link: "https://linear.app", tags: ["Sprint Planning", "Auto-labeling", "Teams"], desc: "For tracking tasks and sprints — AI features auto-label issues and summarize long comment threads, vital when projects scale in complexity during 3rd and 4th year." },
    ],
  },
  {
    id: "research", title: "Specialized Research & Learning", icon: "🔬", color: "#8B4A9C",
    desc: "When standard search falls short for ML papers, framework errors, or deep technical topics.",
    tools: [
      { name: "Perplexity AI", tag: "Research", free: true, rating: 4.6, icon: "🔍", link: "https://perplexity.ai", tags: ["Cited Sources", "Stack Overflow", "Docs Search"], desc: "Search Engine on Steroids — provides cited answers from technical documentation, Stack Overflow, and GitHub. Much faster than manual browsing when you hit a Spring Security config error or obscure bug." },
      { name: "Consensus", tag: "Papers", free: true, rating: 4.5, icon: "📄", link: "https://consensus.app", tags: ["Research Papers", "ML", "AI/ML Students"], desc: "For AI and ML work — finds answers directly from peer-reviewed research papers. Helps you find the best algorithms for document summarization, video analysis, or final year ML projects." },
      { name: "Phind", tag: "Dev Search", free: true, rating: 4.4, icon: "👨‍💻", link: "https://phind.com", tags: ["Code Snippets", "Developer", "Debugging"], desc: "Search engine specifically optimized for developers. Prioritizes code snippets and technical explanations over general web results — great for debugging framework errors." },
    ],
  },
  {
    id: "api-data", title: "API & Data Management", icon: "🔌", color: "#C4913A",
    desc: "Test, document and manage your APIs smarter with AI-assisted tools.",
    tools: [
      { name: "Postman Postbot", tag: "API Testing", free: true, rating: 4.7, icon: "📡", link: "https://postman.com", tags: ["API Testing", "Auto Docs", "Spring Boot"], desc: "AI assistant inside Postman that automatically writes test scripts for your API endpoints and generates documentation based on request history. Massive time-saver for Spring Boot REST controllers." },
      { name: "ChatGPT", tag: "Learning", free: true, rating: 4.7, icon: "💬", link: "https://chatgpt.com", tags: ["Debugging", "DSA", "All-purpose"], desc: "Debug code, explain complex topics, solve DSA problems, write essays, generate SQL queries, explain error messages, and summarize research papers — an all-round learning assistant." },
      { name: "Claude", tag: "Learning", free: true, rating: 4.8, icon: "🧠", link: "https://claude.ai", tags: ["Code Review", "Long Context", "Analysis"], desc: "Long-context reasoning for in-depth explanations, code review, project planning, understanding large codebases, and analysing research papers. Best for complex reasoning tasks." },
    ],
  },
];

const ALL_TOOLS = CATEGORIES.flatMap(c => c.tools.map(t => ({ ...t, catId: c.id })));

function ToolCard({ tool: t, color, i }) {
  return (
    <div className="card-lift fade-up" style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 18, padding: "22px", animationDelay: `${i * 0.06}s` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{t.icon}</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15 }}>{t.name}</div>
            <Badge color={color}>{t.tag}</Badge>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#C4913A" }}>★ {t.rating}</span>
          <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10, background: t.free ? "#1D6B4A18" : "#B03A2E18", color: t.free ? "#1D6B4A" : "#B03A2E" }}>{t.free ? "FREE" : "PAID"}</span>
        </div>
      </div>
      <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65, marginBottom: 14 }}>{t.desc}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {t.tags.map(tag => <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, background: "var(--bg2)", color: "var(--text3)" }}>{tag}</span>)}
      </div>
      <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <button className="btn-ghost" style={{ fontSize: 12, padding: "7px 16px", width: "100%" }}>Try {t.name} ↗</button>
      </a>
    </div>
  );
}

export default function AITools() {
  useSEO({
    title: "AI Tools for Engineering Students — Cursor, Copilot, Perplexity & More",
    description: "Curated AI tools for engineering students — coding assistants, research tools, architecture helpers and productivity apps.",
    canonical: "https://studenttechhub.com/ai-tools",
    keywords: "AI tools for students, Cursor IDE, GitHub Copilot, Perplexity AI, v0.dev, Notion AI, engineering AI tools",
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [onlyFree, setOnlyFree] = useState(false);

  const visibleTools = ALL_TOOLS.filter(t => (activeCategory === "all" || t.catId === activeCategory) && (!onlyFree || t.free));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px 80px" }}>
      <SectionHeader label="🤖 AI Suite" labelColor="#8B4A9C" title="AI & Productivity Tools"
        subtitle="Curated AI tools that actually help engineering students — organised by what they're best for." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14, marginBottom: 36 }}>
        {CATEGORIES.map(c => (
          <button key={c.id} onClick={() => setActiveCategory(activeCategory === c.id ? "all" : c.id)}
            style={{ textAlign: "left", padding: "18px 20px", borderRadius: 16, fontFamily: "inherit", cursor: "pointer", border: activeCategory === c.id ? `2px solid ${c.color}` : "1px solid var(--card-border)", background: activeCategory === c.id ? c.color + "10" : "var(--card)", transition: "all 0.18s" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 13, color: activeCategory === c.id ? c.color : "var(--text)", marginBottom: 4 }}>{c.title}</div>
            <div style={{ fontSize: 11, color: "var(--text3)" }}>{c.tools.length} tools</div>
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 28, alignItems: "center" }}>
        <button onClick={() => setActiveCategory("all")} style={{ fontSize: 12, padding: "7px 16px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600, border: "none", background: activeCategory === "all" ? "var(--accent)" : "var(--card)", color: activeCategory === "all" ? "#fff" : "var(--text2)", cursor: "pointer" }}>
          All ({ALL_TOOLS.length})
        </button>
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer", userSelect: "none", marginLeft: "auto" }}>
          <div style={{ position: "relative", width: 36, height: 20 }}>
            <input type="checkbox" checked={onlyFree} onChange={e => setOnlyFree(e.target.checked)} style={{ opacity: 0, position: "absolute", width: "100%", height: "100%", cursor: "pointer", margin: 0 }} />
            <div style={{ width: 36, height: 20, borderRadius: 10, background: onlyFree ? "var(--accent)" : "var(--bg3)", transition: "background 0.2s" }} />
            <div style={{ position: "absolute", top: 2, left: onlyFree ? 18 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s", pointerEvents: "none" }} />
          </div>
          Free only
        </label>
      </div>

      {activeCategory === "all" ? (
        CATEGORIES.map(cat => {
          const tools = onlyFree ? cat.tools.filter(t => t.free) : cat.tools;
          if (!tools.length) return null;
          return (
            <div key={cat.id} style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, background: cat.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{cat.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>{cat.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2 }}>{cat.desc}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                {tools.map((t, i) => <ToolCard key={t.name} tool={t} color={cat.color} i={i} />)}
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {visibleTools.map((t, i) => {
            const cat = CATEGORIES.find(c => c.id === t.catId);
            return <ToolCard key={t.name} tool={t} color={cat?.color || "var(--accent)"} i={i} />;
          })}
        </div>
      )}

      {visibleTools.length === 0 && activeCategory !== "all" && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text2)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🤖</div>
          <div style={{ fontWeight: 600 }}>No tools match filters</div>
        </div>
      )}
    </div>
  );
}
