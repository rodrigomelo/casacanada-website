"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";

const locales = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/servico-consular", label: t("consular") },
    { href: "/intercambio", label: t("exchange") },
    { href: "/missoes-comerciais", label: t("missions") },
    { href: "/eventos", label: t("events") },
    { href: "/sobre", label: t("about") },
    { href: "/contato", label: t("contact") },
  ];

  return (
    <>
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+551155056722" className="flex items-center gap-1 hover:text-red-400 transition-colors">
              <Phone size={14} /> +55 (11) 5505-6722
            </a>
            <a href="mailto:casacanada@casacanada.com.br" className="hidden sm:flex items-center gap-1 hover:text-red-400 transition-colors">
              <Mail size={14} /> casacanada@casacanada.com.br
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Globe size={14} className="mr-1" />
            {locales.map((l) => (
              <Link key={l.code} href={pathname || "/"} locale={l.code}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${locale === l.code ? "bg-red-600 text-white font-semibold" : "hover:bg-white/10"}`}>
                {l.flag} {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="" className="h-10 w-auto" />
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">Casa <span className="text-red-600">Canadá</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.href ? "bg-red-50 text-red-600" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.href ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-50"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
