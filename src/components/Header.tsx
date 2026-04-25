"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/images/logo.png" alt="" className="h-9 w-auto" />
          <span className="font-bold text-lg text-gray-900 ">Casa <span className="text-red-600">Canadá</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.href ? "text-red-600 bg-red-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}>
              {link.label}
            </Link>
          ))}
          <div className="ml-3 pl-3 border-l border-gray-200 flex items-center gap-1">
            {locales.map((l) => (
              <Link key={l.code} href={pathname || "/"} locale={l.code}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${locale === l.code ? "bg-red-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
                {l.flag}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="tel:+551155056722" className="p-2 text-gray-500 hover:text-red-600">
            <Phone size={20} />
          </a>
          <button className="p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === link.href ? "text-red-600 bg-red-50" : "text-gray-600 hover:bg-gray-50"}`}>
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100 flex items-center gap-1 px-3">
              {locales.map((l) => (
                <Link key={l.code} href={pathname || "/"} locale={l.code} onClick={() => setMobileOpen(false)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${locale === l.code ? "bg-red-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
                  {l.flag} {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
