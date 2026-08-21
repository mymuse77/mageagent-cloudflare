import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface AirgapHighlightProps {
  locale: Locale;
}

export const AirgapHighlight: React.FC<AirgapHighlightProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section id="airgap" style={{ padding: "clamp(30px, 6vw, 48px) 0 clamp(40px, 6vw, 60px)" }}>
      <div className="container">
        <div
          style={{
            background: "#1f1d1a",
            color: "#f8f6f0",
            borderRadius: "18px",
            padding: "clamp(28px, 5vw, 48px) clamp(20px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(24px, 4vw, 40px)",
            alignItems: "center",
            boxShadow: "0 12px 36px rgba(31, 29, 26, 0.2)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                color: "var(--terracotta)",
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              // AIR-GAPPED CRITICAL SYSTEM GUARANTEE
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)",
                fontWeight: 400,
                lineHeight: 1.25,
                marginBottom: "14px",
                color: "#ffffff",
              }}
            >
              {t.airgap_banner_title}
            </h2>
            <p
              style={{
                color: "#a8a29e",
                fontSize: "clamp(0.88rem, 2.2vw, 0.95rem)",
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
              padding: "clamp(18px, 3vw, 24px)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                    gap: "10px",
                    fontSize: "clamp(0.85rem, 2vw, 0.92rem)",
                    color: "#e7e5e4",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: "var(--terracotta)",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      lineHeight: 1.2,
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
