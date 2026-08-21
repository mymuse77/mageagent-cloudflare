import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { type Locale } from "../lib/i18n";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ServicesMatrix } from "../components/ServicesMatrix";
import { AirgapHighlight } from "../components/AirgapHighlight";
import { InquiryForm } from "../components/InquiryForm";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [locale, setLocale] = useState<Locale>("zh");

  const handleToggleLocale = () => {
    setLocale((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <Header locale={locale} onToggleLocale={handleToggleLocale} />
      <main>
        <Hero locale={locale} />
        <ServicesMatrix locale={locale} />
        <AirgapHighlight locale={locale} />
        <InquiryForm locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
