"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  const t = useTranslations("contact_cta");
  return (
    <section className="py-16 md:py-24 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
        <p className="text-lg text-white/80 mb-8">{t("text")}</p>
        <Link href="/contato" className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
          {t("button")} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
