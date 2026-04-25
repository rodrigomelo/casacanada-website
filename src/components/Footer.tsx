"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="" className="h-10 w-auto brightness-0 invert" />
              <span className="font-bold text-xl text-white">Casa <span className="text-red-400">Canadá</span></span>
            </Link>
            <p className="text-sm text-gray-400">Conectando Brasil e Canadá desde 1997.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">{t("services")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servico-consular" className="hover:text-red-400 transition-colors">{nav("consular")}</Link></li>
              <li><Link href="/intercambio" className="hover:text-red-400 transition-colors">{nav("exchange")}</Link></li>
              <li><Link href="/missoes-comerciais" className="hover:text-red-400 transition-colors">{nav("missions")}</Link></li>
              <li><Link href="/eventos" className="hover:text-red-400 transition-colors">{nav("events")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">{nav("contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} className="text-red-500" /><a href="tel:+551155056722" className="hover:text-white transition-colors">+55 (11) 5505-6722</a></li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-red-500" /><a href="mailto:casacanada@casacanada.com.br" className="hover:text-white transition-colors">casacanada@casacanada.com.br</a></li>
              <li className="flex items-start gap-2"><Clock size={16} className="text-red-500 mt-0.5" /><span>Seg-Sex, 9h–17h</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Casa Canadá © 1997–2026. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
