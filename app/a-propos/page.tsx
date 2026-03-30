import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "À propos - Balades Catamaran Martinique",
  description:
    "Découvrez l'histoire de Balades Catamaran Martinique, votre guide indépendant dédié aux excursions nautiques en Martinique depuis 2018.",
};

export default function AProposPage() {
  const valeurs = [
    {
      emoji: "🌊",
      titre: "Authenticité caribéenne",
      desc: "Nous sélectionnons uniquement des prestataires locaux martiniquais qui partagent leur passion de la mer avec sincérité.",
    },
    {
      emoji: "🛡️",
      titre: "Sécurité avant tout",
      desc: "Nous ne référençons que des prestataires certifiés par les Affaires Maritimes. Votre sécurité est notre priorité absolue.",
    },
    {
      emoji: "🌿",
      titre: "Respect de l'environnement",
      desc: "Nous promouvons une navigation responsable : pas de mouillage sur corail, respect de la faune marine, gestion des déchets.",
    },
    {
      emoji: "💡",
      titre: "Information indépendante",
      desc: "Notre contenu éditorial est indépendant. Aucun prestataire ne peut influencer nos recommandations par un paiement.",
    },
  ];

  return (
    <div className="bg-background pt-12 min-h-screen pb-24">
      {/* Hero */}
      <div className="wave-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Notre Histoire
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            À propos de{" "}
            <span className="font-serif italic text-secondary">Balades Catamaran Martinique</span>
          </h1>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Le guide indépendant de référence pour les excursions en catamaran en Martinique.
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

      {/* Notre histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-equipe.jpeg"
                alt="Équipe locale de Balades Catamaran Martinique à la marina"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4">
                  <p
                    className="text-foreground font-semibold"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    🌊 Fondé en 2018 en Martinique
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-7">
              <div>
                <span
                  className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Notre mission
                </span>
                <h2
                  className="text-4xl font-bold text-foreground mb-5"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Votre boussole pour les excursions en mer
                </h2>
                <div className="section-divider mb-6" />
              </div>

              <p
                className="text-foreground/75 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Balades Catamaran Martinique est né en 2018 de la passion de deux amoureux
                de la mer : Jean-Pierre Delacroix, navigateur martiniquais de naissance, et
                Sophie Moreau, blogueuse voyage installée aux Antilles depuis 2015.
              </p>

              <p
                className="text-foreground/75 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Constatant le manque de ressources fiables et indépendantes pour les touristes
                souhaitant naviguer en catamaran en Martinique, ils ont créé cette plateforme
                éditoriale dédiée. Notre équipe a navigué sur tous les spots de l&apos;île et
                testé des dizaines de prestataires pour vous offrir les meilleures recommandations.
              </p>

              <p
                className="text-foreground/75 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Depuis 6 ans, nous avons aidé plus de 50 000 visiteurs à planifier leur
                excursion en catamaran idéale. Notre contenu est rédigé par des passionnés
                de navigation qui vivent en Martinique et connaissent ces eaux par cœur.
              </p>

              <div className="flex flex-wrap gap-6 mt-2">
                {[
                  { val: "50k+", label: "Lecteurs aidés" },
                  { val: "120+", label: "Excursions testées" },
                  { val: "6 ans", label: "D'expérience" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-3xl font-bold text-primary"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="text-foreground/60 text-sm mt-1"
                      style={{ fontFamily: "var(--font-open-sans)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <span
              className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 block"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Ce qui nous guide
            </span>
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Nos valeurs éditoriales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="glass-card rounded-3xl p-7 text-center">
                <span className="text-4xl block mb-4">{v.emoji}</span>
                <h3
                  className="font-bold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {v.titre}
                </h3>
                <p
                  className="text-foreground/65 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2
            className="text-2xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Une question ? Besoin d&apos;un conseil ?
          </h2>
          <p
            className="text-foreground/70 mb-7"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Notre équipe est disponible pour vous guider dans le choix de votre excursion
            en catamaran en Martinique.
          </p>
          <Link href="/contact" className="btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
