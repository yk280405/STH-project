import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";

// ✅ Live pages
import Home      from "./pages/Home";
import About     from "./pages/About";
import Tools     from "./pages/Tools";
import Resources from "./pages/Resources";
import Notes     from "./pages/Notes";
import NotFound  from "./pages/NotFound";

// ✅ Individual tool pages (live)
import CGPACalculator       from "./pages/tools/CGPACalculator";
import PercentageCalculator from "./pages/tools/PercentageCalculator";
import NumberConverter      from "./pages/tools/NumberConverter";
import UnitConverter        from "./pages/tools/UnitConverter";

// 🚧 Coming soon — swap these out one by one as you build them
import ComingSoon from "./pages/ComingSoon";

import { lightTheme, darkTheme, globalCSS } from "./styles/theme";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function AppContent({ dark, setDark }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar dark={dark} setDark={setDark} />
      <main style={{ flex: 1 }}>
        <Routes>

          {/* ✅ LIVE */}
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />

          {/* ✅ LIVE — Tools hub + individual tools */}
          <Route path="/tools"                  element={<Tools />} />
          <Route path="/tools/cgpa"             element={<CGPACalculator />} />
          <Route path="/tools/percentage"       element={<PercentageCalculator />} />
          <Route path="/tools/number-converter" element={<NumberConverter />} />
          <Route path="/tools/unit-converter"   element={<UnitConverter />} />

          {/* ✅ LIVE */}
          <Route path="/resources" element={<Resources />} />

          {/* 🚧 COMING SOON — replace <ComingSoon /> with the real page when ready */}
          <Route path="/guides"    element={<ComingSoon />} />
          <Route path="/ai-tools"  element={<ComingSoon />} />
          <Route path="/projects"  element={<ComingSoon />} />
          <Route path="/notes"     element={<Notes />} />
          <Route path="/search"    element={<ComingSoon />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("sth-dark");
      if (saved !== null) return saved === "true";
    } catch (_) {}
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
  });

  useEffect(() => {
    try { localStorage.setItem("sth-dark", dark); } catch (_) {}
  }, [dark]);

  useEffect(() => {
    if (!document.getElementById("sth-fonts")) {
      const link = document.createElement("link");
      link.id   = "sth-fonts";
      link.rel  = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const theme = dark ? darkTheme : lightTheme;
    let style = document.getElementById("sth-global");
    if (!style) {
      style = document.createElement("style");
      style.id = "sth-global";
      document.head.appendChild(style);
    }
    style.textContent = globalCSS(theme);
  }, [dark]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent dark={dark} setDark={setDark} />
    </BrowserRouter>
  );
}
