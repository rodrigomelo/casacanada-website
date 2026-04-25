import { setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const sectors = [
  { icon: "✈️", pt: "Aeronáutica", en: "Aviation", fr: "Aéronautique" },
  { icon: "🌾", pt: "Agricultura", en: "Agriculture", fr: "Agriculture" },
  { icon: "🧬", pt: "Biotecnologia", en: "Biotechnology", fr: "Biotechnologie" },
  { icon: "🛡️", pt: "Defesa e Segurança", en: "Defense & Security", fr: "Défense et Sécurité" },
  { icon: "🎓", pt: "Educação", en: "Education", fr: "Éducation" },
  { icon: "🚗", pt: "Indústria Automotiva", en: "Automotive Industry", fr: "Industrie Automobile" },
  { icon: "🌿", pt: "Meio-Ambiente", en: "Environment", fr: "Environnement" },
  { icon: "🏥", pt: "Saúde", en: "Health", fr: "Santé" },
  { icon: "📡", pt: "Telecomunicações", en: "Telecommunications", fr: "Télécommunications" },
  { icon: "🚂", pt: "Transporte Ferroviário", en: "Rail Transport", fr: "Transport Ferroviaire" },
];

export default async function MissionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{locale === "pt" ? "Missões Comerciais" : locale === "fr" ? "Missions Commerciales" : "Trade Missions"}</h1>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{locale === "pt" ? "Organizamos missões comerciais nos mais diferentes setores, conectando empresas brasileiras e canadenses para oportunidades de negócios mútuas." : locale === "fr" ? "Nous organisons des missions commerciales dans différents secteurs, reliant entreprises brésiliennes et canadiennes." : "We organize trade missions across various sectors, connecting Brazilian and Canadian companies for mutual business opportunities."}</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10">{locale === "pt" ? "Setores de Atuação" : locale === "fr" ? "Secteurs d'Activité" : "Sectors"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose mt-6">
          {sectors.map((s, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
              <span className="text-2xl">{s.icon}</span>
              <span className="font-medium text-gray-700">{s[locale as keyof typeof s] as string}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
