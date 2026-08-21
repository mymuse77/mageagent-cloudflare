import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface HeroProps {
  locale: Locale;
}

export const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section
      style={{
        padding: "84px 0 64px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div style={{ marginBottom: "20px" }}>
          <span className="craft-badge">
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--terracotta)",
                display: "inline-block",
              }}
            />
            {t.status_pill}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
            fontWeight: 500,
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            maxWidth: "920px",
            color: "var(--text)",
          }}
        >
          {t.hero_title_prefix}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--terracotta)",
              fontWeight: 500,
            }}
          >
            {t.hero_title_highlight}
          </em>
        </h1>

        <p
          style={{
            fontSize: "1.12rem",
            color: "var(--text-muted)",
            maxWidth: "740px",
            lineHeight: 1.65,
            marginBottom: "36px",
          }}
        >
          {t.hero_desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <a
            href="#contact"
            className="btn-craft"
            style={{ padding: "12px 28px", fontSize: "0.95rem" }}
          >
            {t.hero_cta_primary}
          </a>
          <a
            href="#services"
            className="btn-craft-outline"
            style={{ padding: "12px 24px", fontSize: "0.95rem" }}
          >
            {t.hero_cta_secondary}
          </a>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "999px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text)",
            }}
          >
            <span style={{ color: "var(--text-dim)" }}>{t.hero_email_hint}</span>
            <a
              href="mailto:mymuse@foxmail.com"
              style={{
                color: "var(--terracotta)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              mymuse@foxmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
