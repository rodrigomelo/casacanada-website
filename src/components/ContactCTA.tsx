"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Phone } from "lucide-react";

export function ContactCTA() {
  const t = useTranslations("contact_cta");
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-gray-400 text-lg">{t("text")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contato"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              {t("button")} <ArrowRight size={18} />
            </Link>
            <a href="tel:+551155056722"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/10">
              <Phone size={18} /> (11) 5505-6722
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
