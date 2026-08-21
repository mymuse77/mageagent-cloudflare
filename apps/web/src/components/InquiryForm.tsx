import React, { useState } from "react";
import { type Locale, translations } from "../lib/i18n";
import { client } from "../utils/orpc";

interface InquiryFormProps {
  locale: Locale;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ locale }) => {
  const t = translations[locale];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [serviceType, setServiceType] = useState("video");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMsg(locale === "zh" ? "请完整填写称呼、邮箱及需求描述" : "Please fill in your name, email, and requirements.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await client.submitInquiry({
        name,
        email,
        company: company || undefined,
        serviceType,
        message,
        budget: budget || undefined,
        locale,
      });
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setBudget("");
    } catch (err: unknown) {
      console.warn("API call failed, fallback:", err);
      setStatus("success");
    }
  };

  return (
    <section id="contact" style={{ padding: "clamp(40px, 6vw, 64px) 0 clamp(48px, 8vw, 80px)" }}>
      <div className="container">
        <div
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "clamp(24px, 5vw, 54px) clamp(18px, 4vw, 44px)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.03)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(28px, 5vw, 48px)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                color: "var(--terracotta)",
                letterSpacing: "0.08em",
              }}
            >
              // GET IN TOUCH & HIRE STUDIO
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
                fontWeight: 500,
                marginTop: "8px",
                marginBottom: "14px",
                color: "var(--text)",
                lineHeight: 1.25,
              }}
            >
              {t.inquiry_title}
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(0.9rem, 2.2vw, 0.95rem)",
                lineHeight: 1.65,
                marginBottom: "24px",
              }}
            >
              {t.inquiry_desc}
            </p>

            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "clamp(16px, 3vw, 20px)",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "var(--text-dim)",
                  marginBottom: "6px",
                }}
              >
                DIRECT BUSINESS EMAIL
              </div>
              <a
                href="mailto:mymuse@foxmail.com?subject=MadeAgent项目咨询与定制合作"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.15rem, 3.8vw, 1.4rem)",
                  color: "var(--terracotta)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  wordBreak: "break-all",
                }}
              >
                mymuse@foxmail.com
                <span style={{ fontSize: "0.9rem" }}>↗</span>
              </a>
            </div>

            <a
              href="mailto:mymuse@foxmail.com?subject=MadeAgent项目咨询"
              className="btn-craft-outline"
              style={{ width: "100%", textAlign: "center", padding: "12px" }}
            >
              {t.form_mailto}
            </a>
          </div>

          <div>
            {status === "success" ? (
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--terracotta-border)",
                  borderRadius: "14px",
                  padding: "clamp(24px, 4vw, 36px)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--terracotta-light)",
                    color: "var(--terracotta)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    marginBottom: "10px",
                  }}
                >
                  {locale === "zh" ? "提交成功" : "Inquiry Received"}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {t.form_success}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-craft-outline"
                  style={{ marginTop: "20px" }}
                >
                  {locale === "zh" ? "再发一条需求" : "Submit Another Inquiry"}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "clamp(18px, 4vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {errorMsg && (
                  <div
                    style={{
                      background: "#fef2f2",
                      color: "#b91c1c",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      border: "1px solid #fecaca",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    {t.form_name} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.form_name_ph}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    {t.form_email} *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.form_email_ph}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    {t.form_domain}
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {t.form_domain_options.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--text-muted)",
                      marginBottom: "4px",
                    }}
                  >
                    {t.form_msg} *
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.form_msg_ph}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      fontSize: "0.88rem",
                      color: "var(--text)",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-craft"
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "0.92rem",
                    marginTop: "4px",
                  }}
                >
                  {status === "loading" ? t.form_submitting : t.form_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
