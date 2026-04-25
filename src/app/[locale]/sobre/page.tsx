import { setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const timeline = [
  { year: "1997", pt: "Fundação da Casa Canadá", en: "Casa Canadá founded", fr: "Fondation de Casa Canadá" },
  { year: "1997", pt: "Credenciamento junto ao Consulado Geral do Canadá", en: "Accreditation with the Canadian Consulate General", fr: "Accréditation auprès du Consulat Général du Canada" },
  { year: "2000s", pt: "Expansão para missões comerciais e eventos", en: "Expansion into trade missions and events", fr: "Expansion vers missions commerciales et événements" },
  { year: "2026", pt: "Quase 30 anos conectando Brasil e Canadá", en: "Nearly 30 years connecting Brazil and Canada", fr: "Près de 30 ans reliant le Brésil et le Canada" },
];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{locale === "pt" ? "Sobre Nós" : locale === "fr" ? "À Propos" : "About Us"}</h1>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{locale === "pt" ? "A Casa Canadá foi criada em 1997 com o objetivo de incrementar o intercâmbio comercial e cultural entre o Brasil e o Canadá. Para tanto, nossas principais áreas de atuação, direta ou através de renomados parceiros, são: visto consular, intercâmbio para estudos, missões comerciais, organização de eventos profissionais, tradução e interpretação, passagens aéreas e demais serviços relacionados com viagens." : locale === "fr" ? "Casa Canadá a été fondée en 1997 pour renforcer les échanges commerciaux et culturels entre le Brésil et le Canada. Nos domaines d'activité incluent : services consulaires, études à l'étranger, missions commerciales, organisation d'événements, traduction et interprétation, et services de voyage." : "Casa Canadá was founded in 1997 to strengthen commercial and cultural exchange between Brazil and Canada. Our main areas of activity, directly or through renowned partners, include: consular visa services, study abroad programs, trade missions, professional event organization, translation and interpretation, air tickets and other travel-related services."}</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10">{locale === "pt" ? "Nossa História" : locale === "fr" ? "Notre Histoire" : "Our History"}</h2>
        <div className="not-prose space-y-4 mt-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">{item.year}</span>
              <span className="text-gray-700 mt-0.5">{item[locale as keyof typeof item] as string}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
