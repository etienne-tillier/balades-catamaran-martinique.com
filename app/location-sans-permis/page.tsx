import Link from "next/link";

export const metadata = {
  title: "Location Catamaran Sans Permis en Martinique",
  description:
    "Louez un catamaran sans permis en Martinique. Tout ce qu'il faut savoir : règles, zones autorisées, prestataires proposant la location avec skipper.",
};

const faqs = [
  {
    q: "Peut-on louer un catamaran sans permis en Martinique ?",
    r: "Oui, sous conditions. La navigation sans permis est autorisée dans une zone côtière de 300 mètres du rivage pour les bateaux de moins de 6 CV. Au-delà, un skipper professionnel certifié est obligatoire.",
  },
  {
    q: "Qu'est-ce qu'une location avec skipper ?",
    r: "C'est la solution la plus répandue en Martinique : vous louez le catamaran avec un capitaine professionnel à bord. Vous profitez de l'expérience nautique sans vous soucier de la navigation.",
  },
  {
    q: "Quel budget prévoir pour une location sans permis ?",
    r: "Entre 300€ et 800€ par jour pour un catamaran 4-8 personnes avec skipper. Sans skipper (zones restreintes), comptez 150€ à 400€ selon la taille du bateau.",
  },
  {
    q: "Y a-t-il une caution ?",
    r: "Oui, une caution de 500€ à 2000€ est généralement demandée selon le bateau. Elle est restituée à l'issue de la location si aucun dommage n'est constaté.",
  },
  {
    q: "Peut-on naviguer jusqu'aux îlets du François sans permis ?",
    r: "Non. Les îlets du François se trouvent à plusieurs kilomètres de la côte. Cette excursion nécessite obligatoirement un skipper certifié. Consultez nos prestataires.",
  },
  {
    q: "Quelle est l'assurance nécessaire ?",
    r: "Pour une location avec skipper professionnel, l'assurance responsabilité civile est incluse dans la prestation. Sans skipper, vous devez contracter votre propre assurance plaisance.",
  },
];

const zonesNavigation = [
  {
    zone: "Zone côtière (0-300m)",
    permis: "Sans permis possible",
    moteur: "< 6 CV",
    exemples: "Plage locale, snorkeling côtier",
    recommande: true,
  },
  {
    zone: "Navigation côtière (300m-6nm)",
    permis: "Permis côtier requis",
    moteur: "Toute puissance",
    exemples: "Balade côtière, mouillages",
    recommande: false,
  },
  {
    zone: "Navigation hauturière (>6nm)",
    permis: "Permis hauturier requis",
    moteur: "Toute puissance",
    exemples: "Îlets du François, Saintes",
    recommande: false,
  },
];

export default function LocationSansPermisPage() {
  return (
    <div className="bg-background pt-12 min-h-screen">
      {/* Hero */}
      <div className="wave-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Guide pratique
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Location Sans Permis{" "}
            <span className="font-serif italic text-secondary">en Martinique</span>
          </h1>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Tout ce que vous devez savoir sur la location de catamaran sans permis en Martinique :
            règles, zones autorisées, prix et alternatives avec skipper.
          </p>
        </div>
      </div>

      {/* Wave transition */}
      <div className="overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z"
            fill="hsl(185 60% 25%)"
          />
        </svg>
      </div>

      {/* Info box */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card rounded-3xl p-8 flex gap-5 items-start">
            <span className="text-4xl shrink-0">⚓</span>
            <div>
              <h2
                className="text-xl font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                La solution recommandée : location avec skipper professionnel
              </h2>
              <p
                className="text-foreground/75 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                En Martinique, la grande majorité des touristes optent pour la <strong>location avec
                skipper professionnel certifié</strong>. Cela permet de naviguer librement partout
                sans contrainte de permis, tout en bénéficiant de l&apos;expertise d&apos;un
                capitaine local qui connaît les meilleurs spots, les courants et les conditions météo.
                C&apos;est plus sûr, plus convivial et souvent moins cher qu&apos;une location solo.
              </p>
              <Link
                href="/excursions"
                className="mt-4 inline-block text-primary font-semibold hover:text-secondary transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Voir nos excursions avec skipper →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zones de navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-10"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Zones de navigation en Martinique
          </h2>
          <div className="space-y-4">
            {zonesNavigation.map((z) => (
              <div
                key={z.zone}
                className={`glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 ${
                  z.recommande ? "border-2 border-primary/30" : ""
                }`}
              >
                <div className="md:w-64 shrink-0">
                  <div className="flex items-center gap-3">
                    {z.recommande ? (
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm">✓</span>
                    ) : (
                      <span className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/50 text-sm">→</span>
                    )}
                    <h3
                      className="font-bold text-foreground"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {z.zone}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 flex-1">
                  <div>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-poppins)" }}>Permis</p>
                    <p className={`font-medium text-sm ${z.recommande ? "text-primary" : "text-foreground/70"}`} style={{ fontFamily: "var(--font-open-sans)" }}>{z.permis}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-poppins)" }}>Motorisation</p>
                    <p className="font-medium text-sm text-foreground/70" style={{ fontFamily: "var(--font-open-sans)" }}>{z.moteur}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-poppins)" }}>Exemples</p>
                    <p className="font-medium text-sm text-foreground/70" style={{ fontFamily: "var(--font-open-sans)" }}>{z.exemples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-3xl font-bold text-foreground text-center mb-10"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Foire aux questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="glass-card rounded-2xl p-6 group cursor-pointer"
              >
                <summary
                  className="font-semibold text-foreground list-none flex items-center justify-between gap-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {faq.q}
                  <svg className="w-5 h-5 text-primary shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p
                  className="mt-4 text-foreground/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {faq.r}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2
            className="text-2xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Prêt à naviguer en Martinique ?
          </h2>
          <p
            className="text-foreground/70 mb-7"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Consultez nos excursions avec skipper professionnel ou contactez-nous pour un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/excursions" className="btn-primary">Voir les excursions</Link>
            <Link
              href="/comparatif-prestataires"
              className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Comparer les prestataires
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
