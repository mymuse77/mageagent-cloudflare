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
        padding: "48px 0 36px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
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
            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
              {t.brand_sub} · madeagent.cc
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
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
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.8rem",
            color: "var(--text-dim)",
            gap: "12px",
          }}
        >
          <div>{t.footer_text}</div>
          <div>{t.footer_tech}</div>
        </div>
      </div>
    </footer>
  );
};
