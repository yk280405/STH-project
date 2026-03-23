import { useEffect } from "react";

/**
 * useSEO — dynamically sets all SEO-relevant tags for each page.
 *
 * @param {Object} options
 * @param {string} options.title        - Page title (shown in browser tab & Google)
 * @param {string} options.description  - Meta description (shown in Google snippet)
 * @param {string} options.canonical    - Canonical URL (e.g. https://studenttechhub.com/tools/cgpa)
 * @param {string} options.keywords     - Comma-separated keywords
 * @param {string} options.ogTitle      - Open Graph title (WhatsApp/Twitter previews)
 * @param {string} options.ogDesc       - Open Graph description
 * @param {string} options.ogImage      - Open Graph image URL
 * @param {Object} options.jsonLd       - JSON-LD structured data object
 */
export default function useSEO({
  title,
  description,
  canonical,
  keywords,
  ogTitle,
  ogDesc,
  ogImage = "https://studenttechhub.com/og-image.png",
  jsonLd,
} = {}) {
  useEffect(() => {
    const SITE = "StudentTechHub";
    const fullTitle = title ? `${title} | ${SITE}` : SITE;

    // ── Title ──────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper: upsert a <meta> tag ────────────────────────────────────────
    const setMeta = (selector, attr, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = selector.replace("meta[", "").replace("]", "").split('="');
        el.setAttribute(attrName.replace(/"/g, ""), attrVal?.replace(/"/g, "") || "");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: upsert a <link> tag ────────────────────────────────────────
    const setLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Standard meta ──────────────────────────────────────────────────────
    setMeta('meta[name="description"]',        "content", description);
    setMeta('meta[name="keywords"]',           "content", keywords);
    setMeta('meta[name="robots"]',             "content", "index, follow");
    setMeta('meta[name="author"]',             "content", "YK — StudentTechHub");

    // ── Open Graph ─────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]',       "content", ogTitle || fullTitle);
    setMeta('meta[property="og:description"]', "content", ogDesc  || description);
    setMeta('meta[property="og:image"]',       "content", ogImage);
    setMeta('meta[property="og:type"]',        "content", "website");
    setMeta('meta[property="og:site_name"]',   "content", SITE);
    setMeta('meta[property="og:url"]',         "content", canonical || window.location.href);

    // ── Twitter Card ───────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]',        "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]',       "content", ogTitle || fullTitle);
    setMeta('meta[name="twitter:description"]', "content", ogDesc  || description);
    setMeta('meta[name="twitter:image"]',       "content", ogImage);

    // ── Canonical URL ──────────────────────────────────────────────────────
    setLink("canonical", canonical);

    // ── JSON-LD Structured Data ────────────────────────────────────────────
    const existingLd = document.querySelector('script[data-seo="jsonld"]');
    if (jsonLd) {
      const script = existingLd || document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo", "jsonld");
      script.textContent = JSON.stringify(jsonLd);
      if (!existingLd) document.head.appendChild(script);
    } else if (existingLd) {
      existingLd.remove();
    }

    // ── Cleanup on unmount ─────────────────────────────────────────────────
    return () => {
      document.title = SITE;
    };
  }, [title, description, canonical, keywords, ogTitle, ogDesc, ogImage, jsonLd]);
}
