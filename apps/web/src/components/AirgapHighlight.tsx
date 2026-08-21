import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface AirgapHighlightProps {
  locale: Locale;
}

export const AirgapHighlight: React.FC<AirgapHighlightProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section id="airgap" style={{ padding: "40px 0 60px" }}>
      <div className="container">
        <div
          style={{
            background: "#1f1d1a",
            color: "#f8f6f0",
            borderRadius: "18px",
            padding: "48px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
            boxShadow: "0 12px 36px rgba(31, 29, 26, 0.2)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.76rem",
                color: "var(--terracotta)",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              // AIR-GAPPED CRITICAL SYSTEM GUARANTEE
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.25,
                marginBottom: "16px",
                color: "#ffffff",
              }}
            >
              {t.airgap_banner_title}
            </h2>
            <p
              style={{
                color: "#a8a29e",
                fontSize: "0.95rem",
                lineHeight: 1.65,
              }}
            >
              {t.airgap_banner_desc}
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                margin: 0,
                padding: 0,
              }}
            >
              {t.airgap_features.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "0.92rem",
                    color: "#e7e5e4",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "var(--terracotta)",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
