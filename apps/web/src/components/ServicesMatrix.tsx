import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface ServicesMatrixProps {
  locale: Locale;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section id="services" style={{ padding: "clamp(48px, 8vw, 72px) 0 clamp(36px, 6vw, 60px)" }}>
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.76rem",
              color: "var(--terracotta)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {t.capabilities_tag}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 500,
              marginTop: "6px",
              color: "var(--text)",
            }}
          >
            {t.capabilities_title}
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.9rem, 2.2vw, 0.98rem)",
              marginTop: "6px",
            }}
          >
            {t.capabilities_sub}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {t.services.map((srv, idx) => (
            <div
              key={srv.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "clamp(20px, 4vw, 32px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.02)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      color: "var(--border-dark)",
                      opacity: 0.25,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="craft-badge" style={{ fontSize: "0.68rem", padding: "2px 8px" }}>
                    CORE VERTICAL
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.2rem, 3vw, 1.35rem)",
                    fontWeight: 600,
                    marginBottom: "4px",
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {srv.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "12px",
                  }}
                >
                  {srv.subtitle}
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    marginBottom: "18px",
                  }}
                >
                  {srv.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "20px",
                  }}
                >
                  {srv.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px dashed var(--border)",
                  paddingTop: "14px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                {srv.metrics.map((m, mIdx) => (
                  <div key={mIdx} style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "clamp(0.8rem, 2.2vw, 0.92rem)",
                        fontWeight: 700,
                        color: "var(--text)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {m.val}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--text-dim)",
                        marginTop: "2px",
                        lineHeight: 1.2,
                      }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
