"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function AboutPreview() {
  const t = useTranslations("about_preview");
  const stats = [
    { value: "29+", label: { pt: "Anos de experiência", en: "Years of experience", fr: "Ans d'expérience" } },
    { value: "1000+", label: { pt: "Vistos processados", en: "Visas processed", fr: "Visas traités" } },
    { value: "10+", label: { pt: "Setores atendidos", en: "Sectors served", fr: "Secteurs desservis" } },
  ];
  const locale = typeof window !== 'undefined' ? document.documentElement.lang || 'pt' : 'pt';

  return (
    <section className="py-14 md:py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{t("text")}</p>
            <Link href="/sobre" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline">
              {t("cta")} →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center border border-gray-100">
                <div className="text-3xl font-bold text-red-600 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label[locale as keyof typeof s.label] || s.label.pt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
