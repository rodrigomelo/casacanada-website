"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FileText, GraduationCap, Building2, CalendarDays } from "lucide-react";

const services = [
  { key: "consular", href: "/servico-consular", icon: FileText },
  { key: "exchange", href: "/intercambio", icon: GraduationCap },
  { key: "missions", href: "/missoes-comerciais", icon: Building2 },
  { key: "events", href: "/eventos", icon: CalendarDays },
] as const;

export function ServicesGrid() {
  const t = useTranslations("services");
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ key, href, icon: Icon }) => (
            <Link key={key} href={href} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Icon size={24} className="text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t(`${key}.title`)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(`${key}.description`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
