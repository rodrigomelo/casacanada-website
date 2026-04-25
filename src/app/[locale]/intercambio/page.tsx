import { setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function ExchangePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const titles: Record<string,string> = { pt: "Intercâmbio para Estudos", en: "Study Abroad", fr: "Études au Canada" };
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{titles[locale] || titles.pt}</h1>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{locale === "pt" ? "Em parceria com organizações renomadas, oferecemos orientação e demais serviços para viagens ao Canadá, com objetivos de estudos de idioma inglês e francês, cursos livres, de especialização, graduação e pós-graduação." : locale === "fr" ? "En partenariat avec des organisations renommées, nous offrons des conseils et services pour les voyages au Canada pour des études de langues, des cours libres, de spécialisation et de cycles supérieurs." : "In partnership with renowned organizations, we offer guidance and services for trips to Canada for English and French language studies, general courses, specialization, undergraduate and graduate programs."}</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10">{locale === "pt" ? "Programas Disponíveis" : locale === "fr" ? "Programmes Disponibles" : "Available Programs"}</h2>
        <ul className="space-y-2">
          <li>🎓 {locale === "pt" ? "Cursos de Idiomas (Inglês e Francês)" : locale === "fr" ? "Cours de Langues (Anglais et Français)" : "Language Courses (English and French)"}</li>
          <li>📚 {locale === "pt" ? "Cursos Livres e de Especialização" : locale === "fr" ? "Cours Libres et de Spécialisation" : "General and Specialization Courses"}</li>
          <li>🎓 {locale === "pt" ? "Graduação" : locale === "fr" ? "Premier Cycle" : "Undergraduate Programs"}</li>
          <li>🎓 {locale === "pt" ? "Pós-Graduação" : locale === "fr" ? "Cycles Supérieurs" : "Graduate Programs"}</li>
          <li>🌍 {locale === "pt" ? "Programas de Férias" : locale === "fr" ? "Programmes de Vacances" : "Holiday Programs"}</li>
        </ul>
      </div>
    </div>
  );
}
