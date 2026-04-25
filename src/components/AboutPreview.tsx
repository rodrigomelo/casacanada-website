"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  const t = useTranslations("about_preview");
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("title")}</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("text")}</p>
          <Link href="/sobre" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all">
            {t("cta")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
