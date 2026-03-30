import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Excursions en Catamaran Martinique - Toutes nos formules",
  description:
    "Découvrez toutes nos excursions en catamaran en Martinique : balade courte 2h, demi-journée, journée complète. Barbecue en mer, snorkeling, coucher de soleil.",
};

export default function ExcursionsPage() {
  const excursions = [
    {
      id: "balade-cote-caraibe",
      titre: "Balade Côte Caraïbe",
      duree: "2h",
      type: "Courte balade",
      prix: "À partir de 45€/pers.",
      description:
        "Parfaite introduction aux merveilles maritimes de la Martinique. Longez la côte sous-le-vent et découvrez la beauté des eaux calmes de la mer Caraïbe.",
      image: "/images/excursions-balade-courte.jpeg",
      alt: "Balade en catamaran sur la côte Caraïbe de Martinique",
      emoji: "⚓",
      inclus: ["Équipement snorkeling", "Boissons fraîches", "Skipper certifié"],
      highlights: ["Arrêt baignade", "Observation faune marine", "Vue côte tropicale"],
    },
    {
      id: "journee-ilets-francois",
      titre: "Journée Îlets du François",
      duree: "7h",
      type: "Journée complète",
      prix: "À partir de 85€/pers.",
      description:
        "L'excursion phare de la Martinique ! Cap sur les fameux fonds blancs et les îlets sauvages du François. Barbecue antillais et snorkeling au programme.",
      image: "/images/excursions-journee.jpeg",
      alt: "Journée en catamaran aux îlets du François en Martinique",
      emoji: "🌿",
      inclus: ["Déjeuner antillais", "Boissons incluses", "Équipement complet", "Guide local"],
      highlights: ["Fonds blancs", "Barbecue en mer", "Snorkeling", "Îlets sauvages"],
    },
    {
      id: "coucher-soleil",
      titre: "Coucher de Soleil Romantique",
      duree: "3h",
      type: "Soirée",
      prix: "À partir de 65€/pers.",
      description:
        "La magie de la Martinique au crépuscule. Cocktails, musique créole et spectacle d'un coucher de soleil antillais depuis le pont de votre catamaran.",
      image: "/images/home-soiree.jpeg",
      alt: "Coucher de soleil romantique en catamaran Martinique",
      emoji: "🌅",
      inclus: ["Cocktails de bienvenue", "Tapas antillais", "Musique live"],
      highlights: ["Vue panoramique", "Ambiance romantique", "Photos coucher de soleil"],
    },
    {
      id: "barbecue-mer",
      titre: "Barbecue en Mer",
      duree: "5h",
      type: "Demi-journée",
      prix: "À partir de 75€/pers.",
      description:
        "L'expérience gastronomique en mer ! Ancrage dans une baie secrète, plongée, puis repas antillais grillé à bord. Une combinaison parfaite de mer et de saveurs.",
      image: "/images/home-barbecue.jpeg",
      alt: "Barbecue en mer sur catamaran en Martinique",
      emoji: "🔥",
      inclus: ["Repas complet", "Boissons", "Snorkeling", "Skipper + cuisinier"],
      highlights: ["Poissons frais grillés", "Accras martiniquais", "Baignade en baie secrète"],
    },
    {
      id: "famille-enfants",
      titre: "Excursion Famille avec Enfants",
      duree: "5h",
      type: "Famille",
      prix: "À partir de 55€/pers.",
      description:
        "Spécialement conçue pour les familles, cette excursion garantit sécurité et fun. Les enfants adorent le snorkeling pour observer les tortues marines.",
      image: "/images/home-temoignages.jpeg",
      alt: "Excursion en famille sur catamaran Martinique",
      emoji: "👨‍👩‍👧‍👦",
      inclus: ["Équipement enfants", "Guide nature marine", "Repas adapté"],
      highlights: ["Observation tortues", "Snorkeling sécurisé", "Plage privée"],
    },
    {
      id: "plage-salines",
      titre: "Salines depuis la Mer",
      duree: "6h",
      type: "Destination",
      prix: "À partir de 80€/pers.",
      description:
        "Rejoignez la plus belle plage des Antilles par la mer, loin des foules ! Déjeuner antillais sur la plage et navigation en eaux turquoises.",
      image: "/images/home-salines.jpeg",
      alt: "Plage des Salines vue depuis un catamaran Martinique",
      emoji: "🏖️",
      inclus: ["Accès plage privée", "Pique-nique antillais", "Équipement snorkeling"],
      highlights: ["Les Salines sans foule", "Eaux cristallines", "Plage paradisiaque"],
    },
  ];

  return (
    <div className="bg-background pt-12 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/excursions-hero.jpeg"
          alt="Flotte de catamarans en Martinique prête pour une excursion"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 tropical-overlay" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl animate-fade-in-up">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Excursions en Catamaran
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Choisissez votre{" "}
            <span className="font-serif italic text-secondary">aventure</span>
          </h1>
          <p
            className="text-xl text-white/80 max-w-2xl leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            De la balade côtière de 2h à la journée complète aux îlets, trouvez l&apos;excursion
            parfaite pour votre séjour en Martinique.
          </p>
          <div className="flex flex-wrap gap-3">
            {["2h", "Demi-journée", "Journée complète", "Famille", "Romantique"].map((tag) => (
              <span
                key={tag}
                className="glass px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Liste excursions */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((exc) => (
              <article
                key={exc.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={exc.image}
                    alt={exc.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-2xl">{exc.emoji}</span>
                    <span
                      className="badge-nautique"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {exc.duree}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p
                      className="text-secondary font-bold text-xl"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {exc.prix}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="text-primary text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {exc.type}
                  </span>
                  <h2
                    className="text-xl font-bold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {exc.titre}
                  </h2>
                  <p
                    className="text-foreground/70 text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {exc.description}
                  </p>

                  {/* Inclus */}
                  <div className="mb-5">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Inclus
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {exc.inclus.map((item) => (
                        <li
                          key={item}
                          className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                          style={{ fontFamily: "var(--font-open-sans)" }}
                        >
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="block text-center btn-primary w-full"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA bas */}
          <div className="mt-16 text-center glass-card rounded-3xl p-10">
            <h2
              className="text-2xl font-bold text-foreground mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Besoin d&apos;un conseil personnalisé ?
            </h2>
            <p
              className="text-foreground/70 mb-6 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Vous ne savez pas quelle excursion choisir ? Contactez-nous et nous vous aiderons
              à trouver la formule idéale selon vos envies et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Nous contacter
              </Link>
              <Link href="/comparatif-prestataires" className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300" style={{ fontFamily: "var(--font-poppins)" }}>
                Comparer les prestataires
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
