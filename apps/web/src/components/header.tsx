import React, { useState } from "react";
import { type Locale, translations } from "../lib/i18n";

interface HeaderProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export const Header: React.FC<HeaderProps> = ({ locale, onToggleLocale }) => {
  const t = translations[locale];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(248, 246, 240, 0.94)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        <a
          href="#"
          onClick={closeMenu}
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
              flexShrink: 0,
            }}
          >
            M
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              MadeAgent <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>Studio</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
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

        {/* Mobile Nav Toggle & Language Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="mobile-nav-toggle-wrap">
          <button
            onClick={onToggleLocale}
            className="btn-craft-outline"
            style={{
              padding: "5px 10px",
              fontSize: "0.74rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
            }}
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            style={{ minWidth: "40px", minHeight: "40px" }}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="animate-slide-down"
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 24px 28px",
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href="#services"
              onClick={closeMenu}
              style={{
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text)",
                padding: "8px 0",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              {t.nav_services}
            </a>
            <a
              href="#airgap"
              onClick={closeMenu}
              style={{
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text)",
                padding: "8px 0",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              {t.nav_airgap}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              style={{
                textDecoration: "none",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text)",
                padding: "8px 0",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              {t.nav_contact}
            </a>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-craft"
                style={{ width: "100%", textAlign: "center", padding: "12px" }}
              >
                {t.hire_btn}
              </a>
              <a
                href="mailto:mymuse@foxmail.com"
                style={{
                  textAlign: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--terracotta)",
                  textDecoration: "none",
                }}
              >
                mymuse@foxmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
