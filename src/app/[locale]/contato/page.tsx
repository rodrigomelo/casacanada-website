import { setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-12">{t("title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2"><ContactForm /></div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4 h-fit">
          <h2 className="font-semibold text-lg text-gray-900">{t("info.company")}</h2>
          <div className="space-y-3">
            <a href="tel:+551155056722" className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors"><Phone size={18} className="text-red-600" />+55 (11) 5505-6722</a>
            <a href="mailto:casacanada@casacanada.com.br" className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors"><Mail size={18} className="text-red-600" />casacanada@casacanada.com.br</a>
            <div className="flex items-start gap-3 text-gray-600"><Clock size={18} className="text-red-600 mt-0.5" /><span>{t("info.hours")}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
