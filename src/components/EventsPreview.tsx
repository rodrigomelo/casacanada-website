"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CalendarDays, MapPin } from "lucide-react";

const upcoming = [
  { title: "FICG International Film Festival", date: "17–25 Apr 2026", location: "Guadalajara, Mexico", url: "https://ficg.mx/" },
];

export function EventsPreview() {
  const t = useTranslations("events_preview");
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("title")}</h2>
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-red-600 mb-3"><CalendarDays size={18} /><span className="text-sm font-medium">{e.date}</span></div>
                <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm"><MapPin size={14} />{e.location}</div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">{t("none")}</p>
        )}
        <div className="text-center mt-8">
          <Link href="/eventos" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline">{t("more")}</Link>
        </div>
      </div>
    </section>
  );
}
