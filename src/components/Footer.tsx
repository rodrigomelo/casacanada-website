"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="" className="h-9 w-auto " />
              <span className="font-bold text-xl text-white">Casa <span className="text-red-500">Canadá</span></span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">Conectando Brasil e Canadá desde 1997. Serviços consulares, intercâmbio, missões comerciais e eventos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{t("services")}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/servico-consular" className="hover:text-white transition-colors">{nav("consular")}</Link></li>
              <li><Link href="/intercambio" className="hover:text-white transition-colors">{nav("exchange")}</Link></li>
              <li><Link href="/missoes-comerciais" className="hover:text-white transition-colors">{nav("missions")}</Link></li>
              <li><Link href="/eventos" className="hover:text-white transition-colors">{nav("events")}</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">{nav("about")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{nav("contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5"><Phone size={15} className="text-red-500 shrink-0" /><a href="tel:+551155056722" className="hover:text-white transition-colors">+55 (11) 5505-6722</a></li>
              <li className="flex items-center gap-2.5"><Mail size={15} className="text-red-500 shrink-0" /><a href="mailto:casacanada@casacanada.com.br" className="hover:text-white transition-colors break-all">casacanada@casacanada.com.br</a></li>
              <li className="flex items-start gap-2.5"><Clock size={15} className="text-red-500 shrink-0 mt-0.5" /><span>Seg–Sex, 9h–17h</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-600">
          <p>Casa Canadá © 1997–2026. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
