"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const upcoming = [
  { title: "FICG International Film Festival", date: "17–25 Abr 2026", location: "Guadalajara, Mexico", url: "https://ficg.mx/" },
];

export function EventsPreview() {
  const t = useTranslations("events_preview");
  return (
    <section className="py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t("title")}</h2>
          <Link href="/eventos" className="text-red-600 font-medium text-sm hover:underline hidden sm:inline-flex items-center gap-1">
            {t("more")} →
          </Link>
        </div>
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            {upcoming.map((e, i) => (
              <a key={i} href={e.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-red-200 hover:shadow-md transition-all">
                <div className="bg-red-50 rounded-lg p-3 text-red-600 shrink-0">
                  <CalendarDays size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{e.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin size={13} /> {e.location}
                  </p>
                  <p className="text-xs text-red-600 font-medium mt-2">{e.date}</p>
                </div>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-red-400 shrink-0 mt-1 transition-colors" />
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">{t("none")}</p>
        )}
        <div className="mt-6 sm:hidden">
          <Link href="/eventos" className="text-red-600 font-medium text-sm hover:underline inline-flex items-center gap-1">
            {t("more")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
