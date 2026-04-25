"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FileText, GraduationCap, Building2, CalendarDays, ArrowRight } from "lucide-react";

const services = [
  { key: "consular", href: "/servico-consular", icon: FileText, color: "bg-blue-50 text-blue-600 group-hover:bg-blue-100" },
  { key: "exchange", href: "/intercambio", icon: GraduationCap, color: "bg-amber-50 text-amber-600 group-hover:bg-amber-100" },
  { key: "missions", href: "/missoes-comerciais", icon: Building2, color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100" },
  { key: "events", href: "/eventos", icon: CalendarDays, color: "bg-purple-50 text-purple-600 group-hover:bg-purple-100" },
] as const;

export function ServicesGrid() {
  const t = useTranslations("services");
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t("title")}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Conheça todas as áreas em que podemos ajudar você</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ key, href, icon: Icon, color }) => (
            <Link key={key} href={href} className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${color}`}>
                <Icon size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{t(`${key}.title`)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t(`${key}.description`)}</p>
              <span className="inline-flex items-center gap-1 text-red-600 text-sm font-medium group-hover:gap-2 transition-all">
                Saiba mais <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
