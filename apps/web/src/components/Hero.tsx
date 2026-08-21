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
        padding: "clamp(48px, 8vw, 84px) 0 clamp(36px, 6vw, 64px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div style={{ marginBottom: "18px" }}>
          <span className="craft-badge" style={{ fontSize: "clamp(0.7rem, 2.2vw, 0.76rem)" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--terracotta)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {t.status_pill}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.95rem, 5.2vw, 3.8rem)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
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
              display: "inline",
            }}
          >
            {t.hero_title_highlight}
          </em>
        </h1>

        <p
          style={{
            fontSize: "clamp(0.98rem, 2.5vw, 1.12rem)",
            color: "var(--text-muted)",
            maxWidth: "740px",
            lineHeight: 1.65,
            marginBottom: "32px",
          }}
        >
          {t.hero_desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <a
            href="#contact"
            className="btn-craft"
            style={{ padding: "12px 26px", fontSize: "0.92rem" }}
          >
            {t.hero_cta_primary}
          </a>
          <a
            href="#services"
            className="btn-craft-outline"
            style={{ padding: "12px 22px", fontSize: "0.92rem" }}
          >
            {t.hero_cta_secondary}
          </a>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 16px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "999px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              color: "var(--text)",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span style={{ color: "var(--text-dim)", whiteSpace: "nowrap" }}>{t.hero_email_hint}</span>
            <a
              href="mailto:mymuse@foxmail.com"
              style={{
                color: "var(--terracotta)",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
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
