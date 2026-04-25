import { setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function ConsularPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const titles: Record<string,string> = { pt: "Serviço Consular", en: "Visa Services", fr: "Services Consulaires" };
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{titles[locale] || titles.pt}</h1>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{locale === "pt" ? "Há vinte e nove anos somos credenciados pelo Consulado Geral do Canadá a intermediar pedidos de Visto de Residência Temporária (visitas, turismo, estudos, negócios), Permissão de Estudos e Permissão de Trabalho." : locale === "fr" ? "Depuis vingt-neuf ans, nous sommes accrédités par le Consulat Général du Canada pour intermédiaire les demandes de visa de résidence temporaire, les permis d'études et de travail." : "For twenty-nine years we have been accredited by the Canadian Consulate General to process Temporary Resident Visa applications, Study Permits and Work Permits."}</p>
        <p>{locale === "pt" ? "Cada processo é analisado individualmente e gera uma lista personalizada dos documentos a serem apresentados, maximizando as chances de concessão." : locale === "fr" ? "Chaque dossier est analysé individuellement et génère une liste personnalisée des documents à fournir." : "Each application is analyzed individually and generates a personalized document checklist, maximizing approval chances."}</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10">{locale === "pt" ? "Tipos de Visto" : locale === "fr" ? "Types de Visa" : "Visa Types"}</h2>
        <ul className="space-y-2">
          <li>✅ {locale === "pt" ? "Visto de Visitante (Turismo / Negócios)" : locale === "fr" ? "Visiteur (Tourisme / Affaires)" : "Visitor Visa (Tourism / Business)"}</li>
          <li>✅ {locale === "pt" ? "Permissão de Estudos" : locale === "fr" ? "Permis d'Études" : "Study Permit"}</li>
          <li>✅ {locale === "pt" ? "Permissão de Trabalho" : locale === "fr" ? "Permis de Travail" : "Work Permit"}</li>
          <li>✅ {locale === "pt" ? "Autorização de Viagem Eletrônica (eTA)" : locale === "fr" ? "Autorisation de Voyage Électronique (AVE)" : "Electronic Travel Authorization (eTA)"}</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-10">{locale === "pt" ? "Como Funciona" : locale === "fr" ? "Comment Ça Marche" : "How It Works"}</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>{locale === "pt" ? "Entre em contato conosco" : locale === "fr" ? "Contactez-nous" : "Get in touch with us"}</li>
          <li>{locale === "pt" ? "Análise individual do seu caso" : locale === "fr" ? "Analyse individuelle de votre cas" : "Individual case analysis"}</li>
          <li>{locale === "pt" ? "Lista personalizada de documentos" : locale === "fr" ? "Liste personnalisée de documents" : "Personalized document checklist"}</li>
          <li>{locale === "pt" ? "Submissão do pedido ao Consulado" : locale === "fr" ? "Soumission au Consulat" : "Application submission to the Consulate"}</li>
          <li>{locale === "pt" ? "Acompanhamento até a decisão final" : locale === "fr" ? "Suivi jusqu'à la décision finale" : "Follow-up until final decision"}</li>
        </ol>
      </div>
    </div>
  );
}
