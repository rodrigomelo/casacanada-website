"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{t("title")}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">{t("subtitle")}</p>
          <Link href="/servico-consular" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            {t("cta")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
