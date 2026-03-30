export const metadata = {
  title: "Contact - Balades Catamaran Martinique",
  description:
    "Contactez notre équipe pour toute question sur les excursions en catamaran en Martinique. Conseil gratuit et réponse sous 48h.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-5xl animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Parlons ensemble
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Contact
          </h1>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Informations */}
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Une question sur vos excursions en catamaran ?
            </h2>
            <p
              className="text-lg text-foreground/75 leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Notre équipe basée en Martinique est disponible pour vous conseiller sur le choix
              de votre excursion, les meilleurs prestataires selon votre profil, ou pour toute
              question pratique sur la navigation dans les eaux martiniquaises.
            </p>

            {/* Délai */}
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⏱️</span>
                <h3
                  className="font-bold text-foreground"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Réponse rapide garantie
                </h3>
              </div>
              <p
                className="text-foreground/70 text-sm"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Nous nous engageons à répondre à toutes vos demandes dans les{" "}
                <strong>48h ouvrées</strong>. Pour les questions urgentes liées à une réservation
                imminente, précisez-le dans votre message.
              </p>
            </div>

            {/* Email principal */}
            <div className="glass-card rounded-3xl p-8">
              <h3
                className="font-bold text-secondary text-lg mb-3"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                📧 Notre adresse email
              </h3>
              <p
                className="text-foreground/70 mb-3 text-sm"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Écrivez-nous directement pour vos demandes de conseil, de devis ou d&apos;information :
              </p>
              <a
                href="mailto:contact@balades-catamaran-martinique.com"
                className="text-2xl font-bold text-primary hover:text-secondary transition-colors block break-all"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                contact@balades-catamaran-martinique.com
              </a>
            </div>

            {/* Ce qu'on peut faire */}
            <div className="space-y-3">
              <h3
                className="font-bold text-foreground"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                On peut vous aider pour :
              </h3>
              <ul className="space-y-2">
                {[
                  "Choisir la meilleure excursion selon votre profil",
                  "Recommander un prestataire de confiance",
                  "Estimer un budget pour votre groupe",
                  "Répondre à vos questions sur la réglementation nautique",
                  "Conseils pour les familles avec enfants",
                  "Planifier une sortie romantique ou d'anniversaire",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-foreground/70 text-sm"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carte infos utiles */}
          <div className="space-y-6">
            <div className="wave-bg rounded-3xl p-8 text-white">
              <h3
                className="text-xl font-bold mb-5 text-secondary"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Informations pratiques
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    titre: "Localisation",
                    texte: "Martinique, France (Antilles françaises)\nFuseau horaire : UTC-4",
                  },
                  {
                    icon: "💬",
                    titre: "Langues",
                    texte: "Français (principal)\nAnglais (disponible)",
                  },
                  {
                    icon: "📅",
                    titre: "Disponibilité",
                    texte: "Lundi → Vendredi\n9h00 → 18h00 (heure locale)",
                  },
                  {
                    icon: "🌊",
                    titre: "Saison haute",
                    texte: "Décembre → Avril\n(Carême → temps idéal pour naviguer)",
                  },
                ].map((info) => (
                  <div key={info.titre} className="flex gap-3">
                    <span className="text-2xl shrink-0">{info.icon}</span>
                    <div>
                      <p
                        className="font-semibold text-sm text-secondary"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {info.titre}
                      </p>
                      <p
                        className="text-white/75 text-sm leading-relaxed whitespace-pre-line"
                        style={{ fontFamily: "var(--font-open-sans)" }}
                      >
                        {info.texte}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Liens rapides */}
            <div className="glass-card rounded-3xl p-7">
              <h3
                className="font-bold text-foreground mb-5"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Ressources utiles
              </h3>
              <div className="space-y-3">
                {[
                  { href: "/excursions", label: "Voir toutes les excursions" },
                  { href: "/guides", label: "Nos guides pratiques" },
                  { href: "/comparatif-prestataires", label: "Comparer les prestataires" },
                  { href: "/location-sans-permis", label: "Location sans permis" },
                  { href: "/blog", label: "Lire le blog" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group text-sm"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    <svg
                      className="w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
