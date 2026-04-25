import { setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{locale === "pt" ? "Eventos" : locale === "fr" ? "Événements" : "Events"}</h1>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>{locale === "pt" ? "Coordenamos a participação de brasileiros e canadenses em eventos internacionais, notadamente festivais, congressos e feiras, nas áreas de cinema e conteúdo audiovisual, moda, arquitetura e construção, hotelaria, alimentação, turismo, meio-ambiente e tecnologia." : locale === "fr" ? "Nous coordonnons la participation à des événements internationaux dans les domaines du cinéma, de la mode, de l'architecture, de l'hôtellerie, du tourisme, de l'environnement et de la technologie." : "We coordinate participation in international events including festivals, congresses and trade fairs in film, fashion, architecture, hospitality, food, tourism, environment and technology."}</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10">{locale === "pt" ? "Próximos Eventos" : locale === "fr" ? "Événements à Venir" : "Upcoming Events"}</h2>
        <div className="not-prose mt-6">
          <a href="https://ficg.mx/" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
            <p className="text-sm text-red-600 font-medium mb-2">17–25 Abr 2026 · Guadalajara, Mexico</p>
            <h3 className="text-lg font-semibold text-gray-900">FICG International Film Festival</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
