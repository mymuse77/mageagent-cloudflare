import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "clamp(36px, 6vw, 48px) 0 clamp(28px, 4vw, 36px)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: "4px",
              }}
            >
              MadeAgent <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>Studio</span>
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
              {t.brand_sub} · madeagent.cc
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "14px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
            }}
          >
            <a
              href="mailto:mymuse@foxmail.com"
              style={{
                color: "var(--terracotta)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              mymuse@foxmail.com
            </a>
            <span style={{ color: "var(--border)" }}>|</span>
            <span style={{ color: "var(--text-dim)" }}>Cloudflare Edge Runtime</span>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.78rem",
            color: "var(--text-dim)",
            gap: "10px",
          }}
        >
          <div>{t.footer_text}</div>
          <div>{t.footer_tech}</div>
        </div>
      </div>
    </footer>
  );
};
