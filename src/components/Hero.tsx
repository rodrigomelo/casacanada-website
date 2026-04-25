"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-gray-900 to-gray-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-red-300 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            {new Date().getFullYear() - 1997} anos conectando dois países
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contato"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg shadow-red-600/25">
              {t("cta")} <ArrowRight size={18} />
            </Link>
            <a href="tel:+551155056722"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/10">
              📞 (11) 5505-6722
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
