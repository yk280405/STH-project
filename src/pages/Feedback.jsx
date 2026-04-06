import { useState } from "react";
import useSEO from "../hooks/useSEO";

/**
 * HOW TO SET UP (one-time, 2 minutes):
 * 1. Go to https://formspree.io  →  Sign up free (no credit card)
 * 2. Click "New Form" → name it "STHub Feedback"
 * 3. Copy your form ID (looks like: xpwzgkqr)
 * 4. Replace YOUR_FORMSPREE_ID below with that ID
 *
 * Formspree free plan: 50 submissions/month, sends email to your account email.
 * To change where emails go: Formspree dashboard → Settings → Notifications
 */
const FORMSPREE_ID = "xpqokbnw"; // ← Replace this
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const TYPES = ["Suggestion", "Bug Report", "Content Request", "General Feedback", "Other"];

export default function Feedback() {
  useSEO({
    title: "Share Feedback — StudentTechHub",
    description: "Share your feedback, suggestions or report issues with StudentTechHub.",
    canonical: "https://studenttechhub.com/feedback",
  });

  const [form, setForm]     = useState({ name: "", email: "", type: "Suggestion", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) return;
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name:    form.name    || "Anonymous",
          email:   form.email   || "Not provided",
          type:    form.type,
          message: form.message,
          _subject: `[STHub Feedback] ${form.type} from ${form.name || "Anonymous"}`,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", type: "Suggestion", message: "" });
      } else {
        setStatus("error");
      }
    } catch (_) {
      setStatus("error");
    }
  };

  const inp = {
    width: "100%", padding: "12px 16px", borderRadius: 12,
    border: "1.5px solid var(--card-border)", background: "var(--bg2)",
    color: "var(--text)", fontSize: 14, outline: "none",
    fontFamily: "inherit", boxSizing: "border-box", transition: "border-color 0.2s",
  };
  const fo = e => (e.target.style.borderColor = "var(--accent)");
  const bl = e => (e.target.style.borderColor = "var(--card-border)");

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "52px 24px 80px" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ fontSize: 52, marginBottom: 16, animation: "float 3s ease-in-out infinite" }}>💬</div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>Your Voice Matters</div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 900, letterSpacing: -0.8, marginBottom: 12 }}>Share Your Feedback</h1>
        <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.75, maxWidth: 460, margin: "0 auto" }}>
          Suggestion, bug, or content request? Every message helps make STHub better for all students.
        </p>
      </div>

      {/* Success */}
      {status === "sent" && (
        <div className="fade-in" style={{ background: "var(--card)", border: "1px solid #1D6B4A40", borderRadius: 20, padding: "52px 32px", textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
          <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 10, letterSpacing: -0.4 }}>Feedback received!</h2>
          <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.75, maxWidth: 360, margin: "0 auto 24px" }}>
            Thanks for taking the time. Your message has been sent successfully and will be reviewed.
          </p>
          <button onClick={() => setStatus("idle")} className="btn-primary" style={{ fontSize: 13 }}>Send Another →</button>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="fade-in" style={{ background: "#B03A2E10", border: "1px solid #B03A2E30", borderRadius: 14, padding: "16px 20px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>⚠️</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#B03A2E", marginBottom: 2 }}>Submission failed</div>
            <div style={{ fontSize: 12, color: "var(--text2)" }}>
              Please email directly at{" "}
              <a href="mailto:ykohli2801@gmail.com" style={{ color: "var(--accent)", fontWeight: 600 }}>ykohli2801@gmail.com</a>
            </div>
          </div>
          <button onClick={() => setStatus("idle")} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text3)", padding: 0 }}>✕</button>
        </div>
      )}

      {/* Form */}
      {status !== "sent" && (
        <div style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 20, padding: "32px", boxShadow: "var(--shadow-card)" }}>
          <form onSubmit={handleSubmit}>

            {/* Name + Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>
                  Name <span style={{ color: "var(--text3)", fontWeight: 400 }}>(optional)</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={e => set("name", e.target.value)}
                  placeholder="e.g. Rahul"
                  style={inp} onFocus={fo} onBlur={bl}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>
                  Your Email <span style={{ color: "var(--text3)", fontWeight: 400 }}>(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={e => set("email", e.target.value)}
                  placeholder="your@email.com"
                  style={inp} onFocus={fo} onBlur={bl}
                />
              </div>
            </div>

            {/* Type */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 8 }}>Feedback Type</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {TYPES.map(t => (
                  <button key={t} type="button" onClick={() => set("type", t)} style={{
                    fontSize: 12, padding: "7px 14px", borderRadius: 20, fontFamily: "inherit", fontWeight: 600, cursor: "pointer", transition: "all 0.18s",
                    border: form.type === t ? "2px solid var(--accent)" : "1.5px solid var(--card-border)",
                    background: form.type === t ? "var(--accent-soft)" : "transparent",
                    color: form.type === t ? "var(--accent)" : "var(--text2)",
                  }}>{t}</button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text2)", display: "block", marginBottom: 6 }}>
                Message <span style={{ color: "#B03A2E" }}>*</span>
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={e => set("message", e.target.value)}
                placeholder="What's on your mind? Suggestions, bugs, content you want..."
                rows={5}
                style={{ ...inp, resize: "vertical", lineHeight: 1.7 }}
                onFocus={fo} onBlur={bl}
              />
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>{form.message.length} characters</div>
            </div>

            <button
              type="submit"
              disabled={!form.message.trim() || status === "sending"}
              className="btn-primary"
              style={{ width: "100%", padding: 14, fontSize: 15, fontWeight: 700, opacity: (!form.message.trim() || status === "sending") ? 0.6 : 1 }}
            >
              {status === "sending" ? "Sending..." : "Send Feedback →"}
            </button>

            <div style={{ marginTop: 14, textAlign: "center", fontSize: 11, color: "var(--text3)", lineHeight: 1.7 }}>
              Your message is sent securely via Formspree<br />
              Or email directly:{" "}
              <a href="mailto:ykohli2801@gmail.com" style={{ color: "var(--text2)", fontWeight: 600 }}>ykohli2801@gmail.com</a>
            </div>
          </form>
        </div>
      )}

      {/* Info strip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 20 }}>
        {[
          ["⚡", "Every message read",    "No bots, real human"],
          ["🔒", "Privacy first",         "Data handled by Formspree"],
          ["🛠️", "Shapes the platform",  "Your ideas become features"],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 14, padding: "16px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
            <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 3 }}>{title}</div>
            <div style={{ fontSize: 11, color: "var(--text3)", lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
