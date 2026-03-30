import Link from "next/link";

export const metadata = {
  title: "Comparatif Prestataires Catamaran Martinique - Choisissez le meilleur",
  description:
    "Comparatif des meilleurs prestataires d'excursions en catamaran en Martinique. Tarifs, prestations, certifications et avis clients pour faire le bon choix.",
};

const prestataires = [
  {
    nom: "Martinique Catamaran",
    zone: "Le Marin · Grande Anse",
    note: 4.9,
    avis: 324,
    specialite: "Journées complètes & Barbecue",
    description:
      "Référence incontestable depuis 15 ans. Flotte de catamarans modernes, skippers passionnés et cuisine antillaise authentique. Idéal pour les familles et groupes.",
    tarif: "À partir de 75€/pers.",
    certifications: ["AFF", "Permis Mer", "BEES Voile"],
    avantages: [
      "Flotte de 8 catamarans",
      "Guichet en ligne",
      "Petit-déjeuner inclus",
      "Repas antillais complet",
    ],
    type: "Référence",
    couleur: "primary",
  },
  {
    nom: "Caraïbes Voiles",
    zone: "Fort-de-France · Trois-Îlets",
    note: 4.7,
    avis: 198,
    specialite: "Excursions premium & Coucher de soleil",
    description:
      "Spécialiste des sorties haut de gamme et romantiques. Petits groupes garantis (max 12 pers.), cocktails d'exception et expérience VIP personnalisée.",
    tarif: "À partir de 95€/pers.",
    certifications: ["Captain 200 miles", "PSTC", "ISO 9001"],
    avantages: [
      "Groupes limités à 12 pers.",
      "Cocktails premium",
      "WiFi à bord",
      "Photos professionnelles offertes",
    ],
    type: "Premium",
    couleur: "secondary",
  },
  {
    nom: "Ti'Voilou Martinique",
    zone: "Sainte-Anne · Diamant",
    note: 4.6,
    avis: 156,
    specialite: "Familles & Débutants",
    description:
      "Le spécialiste des sorties accessibles aux enfants et aux débutants. Pédagogique, sécurisé et convivial. Les enfants peuvent même tenir la barre sous surveillance.",
    tarif: "À partir de 45€/pers.",
    certifications: ["Permis Mer", "Brevet SST"],
    avantages: [
      "Enfants -12 ans à moitié prix",
      "Gilets de sauvetage enfants",
      "Initiation navigation",
      "Snorkeling guidé",
    ],
    type: "Famille",
    couleur: "primary",
  },
  {
    nom: "Sud Atlantique Croisières",
    zone: "Le François · Le Vauclin",
    note: 4.8,
    avis: 87,
    specialite: "Fonds Blancs & Îlets",
    description:
      "L'expert des fonds blancs du François. Accès exclusif à des spots secrets inaccessibles aux grands voiliers. Snorkeling d'exception parmi les tortues marines.",
    tarif: "À partir de 80€/pers.",
    certifications: ["Capitaine 200 miles", "Brevet Plongée"],
    avantages: [
      "Spots secrets exclusifs",
      "Guide naturaliste à bord",
      "Matériel snorkeling pro",
      "Petit groupe (max 10)",
    ],
    type: "Nature",
    couleur: "primary",
  },
];

const criteres = [
  { titre: "Certifications", desc: "Vérifiez que le skipper détient le Permis Côtier ou Hauturier selon la distance de la côte.", icon: "📜" },
  { titre: "Assurances", desc: "Tout prestataire doit posséder une assurance responsabilité civile professionnelle maritime.", icon: "🛡️" },
  { titre: "Taille du groupe", desc: "Privilégiez les petits groupes (max 12 personnes) pour une expérience plus authentique.", icon: "👥" },
  { titre: "Inclusions", desc: "Comparez le rapport qualité-prix : repas, boissons, équipement snorkeling, transferts.", icon: "✅" },
];

export default function ComparatifPrestatairesPage() {
  return (
    <div className="bg-background pt-12 min-h-screen">
      {/* Hero */}
      <div className="wave-bg py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span
            className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Guide d&apos;achat
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Comparatif Prestataires{" "}
            <span className="font-serif italic text-secondary">Catamaran</span>
          </h1>
          <p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Notre sélection indépendante des meilleurs prestataires d&apos;excursions
            en catamaran en Martinique, avec critères de choix et tarifs indicatifs.
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

      {/* Critères de sélection */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className="text-2xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Comment choisir son prestataire ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteres.map((c) => (
              <div key={c.titre} className="glass-card p-6 rounded-2xl text-center">
                <span className="text-3xl block mb-3">{c.icon}</span>
                <h3
                  className="font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {c.titre}
                </h3>
                <p
                  className="text-foreground/65 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste prestataires */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {prestataires.map((p, i) => (
              <article
                key={p.nom}
                className="glass-card rounded-3xl p-8 flex flex-col md:flex-row gap-8 group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Rang */}
                <div className="flex flex-col items-center justify-center md:w-24 shrink-0">
                  <div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    #{i + 1}
                  </div>
                  <span
                    className="badge-nautique mt-3 text-center"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {p.type}
                  </span>
                </div>

                {/* Infos */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2
                        className="text-2xl font-bold text-foreground"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {p.nom}
                      </h2>
                      <p
                        className="text-primary text-sm font-medium"
                        style={{ fontFamily: "var(--font-open-sans)" }}
                      >
                        📍 {p.zone}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-secondary text-xl">★</span>
                        <span className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>{p.note}</span>
                        <span className="text-foreground/50 text-sm" style={{ fontFamily: "var(--font-open-sans)" }}>({p.avis} avis)</span>
                      </div>
                      <p className="text-secondary font-bold mt-1" style={{ fontFamily: "var(--font-poppins)" }}>{p.tarif}</p>
                    </div>
                  </div>

                  <p
                    className="text-foreground/70 leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.avantages.map((av) => (
                      <span
                        key={av}
                        className="text-xs bg-primary/8 text-primary rounded-full px-3 py-1 border border-primary/15"
                        style={{ fontFamily: "var(--font-open-sans)" }}
                      >
                        ✓ {av}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-foreground/5 text-foreground/60 rounded-full px-3 py-1 border border-foreground/10"
                        style={{ fontFamily: "var(--font-open-sans)" }}
                      >
                        🏅 {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3 md:w-40 shrink-0">
                  <Link
                    href="/excursions"
                    className="block text-center bg-primary text-white font-semibold px-4 py-3 rounded-xl hover:bg-primary/85 transition-colors text-sm"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Voir excursions
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-center border border-primary text-primary font-semibold px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors text-sm"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Demander devis
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Note légale */}
          <div className="mt-12 glass-card rounded-2xl p-6 text-center">
            <p
              className="text-foreground/60 text-sm italic"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              ℹ️ Les tarifs indiqués sont des prix indicatifs &quot;à partir de&quot; susceptibles d&apos;évoluer.
              Les notes proviennent de moyennes de différentes plateformes d&apos;avis.
              Vérifiez toujours directement auprès des prestataires.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Besoin d&apos;aide pour choisir ?
          </h2>
          <p className="text-foreground/70 mb-6" style={{ fontFamily: "var(--font-open-sans)" }}>
            Consultez notre guide des excursions ou contactez-nous pour un conseil personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/excursions" className="btn-primary">Voir les excursions</Link>
            <Link href="/guides" className="border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all" style={{ fontFamily: "var(--font-poppins)" }}>Lire nos guides</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
