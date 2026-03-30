import Link from "next/link";

export const metadata = {
  title: "Guides Catamaran Martinique - Conseils & Informations pratiques",
  description:
    "Tous nos guides pratiques pour réussir votre excursion en catamaran en Martinique. Où aller, quoi prévoir, budget, sécurité, réglementation.",
};

const guides = [
  {
    id: "premiere-fois-catamaran",
    emoji: "🧭",
    categorie: "Débutants",
    titre: "Première fois en catamaran : le guide complet",
    resume:
      "Vous n'avez jamais navigué en catamaran ? Pas de panique. Découvrez comment se passe une excursion type, ce que vous pouvez attendre et comment vous préparer au mieux pour une première sortie en mer réussie.",
    points: [
      "Comment se déroule une sortie en catamaran",
      "Les équipements mis à disposition",
      "Conseils contre le mal de mer",
      "Ce qu'il faut emporter",
    ],
  },
  {
    id: "budget-excursion-martinique",
    emoji: "💶",
    categorie: "Budget",
    titre: "Budget pour une excursion en catamaran en Martinique",
    resume:
      "Combien ça coûte ? Des balades de 2h à 45€ aux journées complètes à 100€, voici un panorama honnête des tarifs pratiqués en Martinique et des astuces pour réserver au meilleur prix.",
    points: [
      "Tarifs moyens par type d'excursion",
      "Quand réserver pour économiser",
      "Formules tout inclus vs à la carte",
      "Aides et bons plans pour familles",
    ],
  },
  {
    id: "reglementation-nautique-martinique",
    emoji: "📋",
    categorie: "Réglementation",
    titre: "Réglementation nautique en Martinique",
    resume:
      "Martinique = territoire français = droit maritime français. Voici tout ce que vous devez savoir sur les règles de navigation, les zones protégées et les certifications requises pour naviguer dans les eaux martiniquaises.",
    points: [
      "Permission côtière et permis mer",
      "Zones naturelles protégées",
      "Réglementation de la PRÉFMAR",
      "Droits et devoirs du passager",
    ],
  },
  {
    id: "meilleure-periode-catamaran-martinique",
    emoji: "📅",
    categorie: "Météo & Saisons",
    titre: "Meilleure période pour naviguer en Martinique",
    resume:
      "Carême ou hivernage ? Saison sèche ou saison des pluies ? Notre guide météo vous aide à choisir la période idéale pour votre excursion en catamaran selon vos envies et votre budget.",
    points: [
      "Calendrier des saisons martiniquaises",
      "Périodes à éviter (houle, cyclones)",
      "Meilleurs mois pour les familles",
      "Impact de la météo sur les tarifs",
    ],
  },
  {
    id: "securite-catamaran-martinique",
    emoji: "🛡️",
    categorie: "Sécurité",
    titre: "Sécurité en mer : ce que vous devez savoir",
    resume:
      "La sécurité maritime est primordiale. Voici comment vérifier les certifications d'un prestataire, les équipements de sécurité obligatoires et les bons réflexes à adopter en mer.",
    points: [
      "Certifications obligatoires des skippers",
      "Équipements de sécurité à bord",
      "Procédures d'urgence",
      "Comment vérifier un prestataire",
    ],
  },
  {
    id: "snorkeling-martinique-catamaran",
    emoji: "🤿",
    categorie: "Activités",
    titre: "Snorkeling depuis un catamaran en Martinique",
    resume:
      "La Martinique offre des spots de snorkeling exceptionnels. Fonds blancs, récifs coralliens, tortues marines… Voici les meilleurs sites accessibles en catamaran et nos conseils pour une session parfaite.",
    points: [
      "Top 5 des spots de snorkeling",
      "Bestiaire sous-marin martiniquais",
      "Équipement conseillé",
      "Règles de respect de l'environnement",
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-background pt-12 min-h-screen">
      {/* Hero */}
      <div className="wave-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Guides &amp; Conseils
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Guides Pratiques{" "}
            <span className="font-serif italic text-secondary">Catamaran Martinique</span>
          </h1>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Tout ce que vous devez savoir avant de naviguer en Martinique. Budget, météo,
            sécurité, réglementation et recommandations d&apos;experts locaux.
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

      {/* Grille des guides */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article
                key={guide.id}
                className="glass-card rounded-3xl p-7 flex flex-col group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-4xl shrink-0">{guide.emoji}</span>
                  <div>
                    <span
                      className="badge-nautique text-xs"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {guide.categorie}
                    </span>
                    <h2
                      className="text-lg font-bold text-foreground mt-2 leading-snug group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {guide.titre}
                    </h2>
                  </div>
                </div>

                <p
                  className="text-foreground/70 text-sm leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {guide.resume}
                </p>

                <ul className="space-y-2 mb-6">
                  {guide.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-foreground/65"
                      style={{ fontFamily: "var(--font-open-sans)" }}
                    >
                      <svg
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/blog"
                  className="mt-auto text-primary font-semibold text-sm hover:text-secondary transition-colors flex items-center gap-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Lire sur le blog →
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Blog */}
          <div className="mt-16 wave-bg rounded-3xl py-12 px-8 text-center text-white">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Vous avez d&apos;autres questions ?
            </h2>
            <p
              className="text-white/75 mb-6 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Retrouvez nos articles complets et conseils d&apos;experts sur notre blog nautique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-ghost">
                Consulter le blog
              </Link>
              <Link href="/contact" className="bg-secondary text-white font-semibold px-8 py-4 rounded-full hover:bg-secondary/85 hover:-translate-y-1 transition-all duration-300" style={{ fontFamily: "var(--font-poppins)" }}>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
