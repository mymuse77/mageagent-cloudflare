import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface ServicesMatrixProps {
  locale: Locale;
}

export const ServicesMatrix: React.FC<ServicesMatrixProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <section id="services" style={{ padding: "72px 0 60px" }}>
      <div className="container">
        <div style={{ marginBottom: "36px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
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
              fontSize: "clamp(2rem, 3.6vw, 2.6rem)",
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
              fontSize: "0.98rem",
              marginTop: "6px",
            }}
          >
            {t.capabilities_sub}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {t.services.map((srv, idx) => (
            <div
              key={srv.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.02)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--terracotta)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(196, 77, 45, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.02)";
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "var(--border-dark)",
                      opacity: 0.25,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="craft-badge" style={{ fontSize: "0.7rem", padding: "2px 8px" }}>
                    CORE VERTICAL
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    marginBottom: "6px",
                    color: "var(--text)",
                    lineHeight: 1.3,
                  }}
                >
                  {srv.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "14px",
                  }}
                >
                  {srv.subtitle}
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {srv.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
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
                  paddingTop: "16px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                }}
              >
                {srv.metrics.map((m, mIdx) => (
                  <div key={mIdx} style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: "var(--text)",
                      }}
                    >
                      {m.val}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-dim)",
                        marginTop: "2px",
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
