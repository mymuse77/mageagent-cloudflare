import React from "react";
import { type Locale, translations } from "../lib/i18n";

interface HeaderProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export const Header: React.FC<HeaderProps> = ({ locale, onToggleLocale }) => {
  const t = translations[locale];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(248, 246, 240, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "var(--text)",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "var(--text)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            M
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              MadeAgent <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>Studio</span>
            </span>
          </div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <a
              href="#services"
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t.nav_services}
            </a>
            <a
              href="#airgap"
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t.nav_airgap}
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t.nav_contact}
            </a>
          </nav>

          <button
            onClick={onToggleLocale}
            className="btn-craft-outline"
            style={{
              padding: "6px 14px",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
            }}
            title="Switch Language / 切换语言"
          >
            {locale === "zh" ? "EN / 中文" : "中文 / EN"}
          </button>

          <a href="#contact" className="btn-craft">
            {t.hire_btn}
          </a>
        </div>
      </div>
    </header>
  );
};
