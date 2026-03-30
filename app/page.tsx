import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600; // 6h ISR

export default async function Home() {
  const posts = await getPublishedBlogPosts();
  const recentPosts = posts.slice(0, 3);

  const activites = [
    {
      title: "Barbecue en Mer",
      description:
        "Savourez un repas antillais authentique à bord, ancré dans une baie turquoise. Poissons grillés, rhum arrangé et musique créole au programme.",
      image: "/images/home-barbecue.jpeg",
      alt: "Barbecue en mer sur catamaran en Martinique",
      emoji: "🔥",
    },
    {
      title: "Soirée Nautique",
      description:
        "Regardez le coucher de soleil depuis le pont de votre catamaran, cocktail à la main. Une expérience magique que vous n'oublierez jamais.",
      image: "/images/home-soiree.jpeg",
      alt: "Soirée coucher de soleil sur catamaran en Martinique",
      emoji: "🌅",
    },
    {
      title: "Balade Famille",
      description:
        "Excursions sécurisées adaptées aux enfants. Snorkeling, dauphins, tortues marines et arrêts baignade dans des criques paradisiaques.",
      image: "/images/home-temoignages.jpeg",
      alt: "Balade en famille sur catamaran Martinique",
      emoji: "👨‍👩‍👧‍👦",
    },
  ];

  const destinations = [
    {
      name: "Plage des Salines",
      desc: "L'emblématique plage classée plus belle plage des Antilles. Eau turquoise et cocotiers à perte de vue.",
      image: "/images/home-salines.jpeg",
    },
    {
      name: "Îlets du François",
      desc: "Archipel de petites îles sauvages avec des baignades naturelles appelées «fonds blancs».",
      image: "/images/excursions-journee.jpeg",
    },
    {
      name: "Côte Caraïbe",
      desc: "Longez la côte sous-le-vent, aux eaux calmes et cristallines, paradis des catamarans.",
      image: "/images/excursions-balade-courte.jpeg",
    },
  ];

  const temoignages = [
    {
      nom: "Sophie & Marc",
      texte:
        "Une journée inoubliable ! Le capitaine était passionné et nous a emmenés dans des endroits qu'on n'aurait jamais trouvés seuls. Le barbecue en mer était délicieux.",
      note: 5,
      lieu: "Paris",
    },
    {
      nom: "Famille Leroux",
      texte:
        "Nos enfants de 6 et 9 ans ont adoré le snorkeling et ont vu des tortues ! L'équipe est attentive à la sécurité des plus petits. On recommande vivement !",
      note: 5,
      lieu: "Lyon",
    },
    {
      nom: "Amélie G.",
      texte:
        "Excursion au coucher de soleil magnifique. Le catamaran était impeccable et bien équipé. Un moment de pure magie aux Antilles.",
      note: 5,
      lieu: "Martinique",
    },
  ];

  const avantages = [
    {
      icon: "⚓",
      titre: "Stabilité & Confort",
      desc: "Le catamaran offre une stabilité supérieure aux voiliers classiques. Idéal contre le mal de mer.",
    },
    {
      icon: "☀️",
      titre: "Espaces Généreux",
      desc: "Grand filet avant pour se prélasser au soleil, larges ponts et cabines spacieuses.",
    },
    {
      icon: "🤿",
      titre: "Tirant d'eau Faible",
      desc: "Accès aux criques peu profondes inaccessibles aux autres bateaux. Découvrez des spots secrets.",
    },
    {
      icon: "🛡️",
      titre: "Sécurité Maximale",
      desc: "Tous nos partenaires sont certifiés et équipés selon la réglementation maritime française.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== 1. HERO ===== */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden w-full">
        <Image
          src="/images/home-hero.jpeg"
          alt="Catamaran voguant au coucher de soleil en Martinique"
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 tropical-overlay z-10" />
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0,50 C360,80 720,20 1080,50 C1260,65 1380,35 1440,50 L1440,80 L0,80 Z"
              fill="hsl(185 45% 96%)"
            />
          </svg>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8">
            <span className="text-secondary text-sm font-medium" style={{ fontFamily: "var(--font-poppins)" }}>
              🌊 Martinique · Caraïbes
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Découvrez la Martinique{" "}
            <span className="font-serif italic text-secondary">
              en Catamaran
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Excursions en mer, barbecues aux Antilles et balades inoubliables.
            Votre guide des meilleures sorties en catamaran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/excursions" className="btn-primary">
              Réserver une excursion
            </Link>
            <Link href="/guides" className="btn-ghost">
              Consulter nos guides
            </Link>
          </div>
          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { val: "150+", label: "Excursions par an" },
              { val: "98%", label: "Clients satisfaits" },
              { val: "12+", label: "Prestataires locaux" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-3xl font-bold text-secondary"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {s.val}
                </div>
                <div className="text-white/70 text-sm mt-1" style={{ fontFamily: "var(--font-open-sans)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. NOS ACTIVITÉS ===== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span
              className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Nos Activités
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Vivez des expériences{" "}
              <span className="font-serif italic gradient-text">uniques en mer</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activites.map((act) => (
              <div
                key={act.title}
                className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={act.image}
                    alt={act.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  <span className="absolute top-4 right-4 text-3xl">{act.emoji}</span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {act.title}
                  </h3>
                  <p
                    className="text-foreground/70 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/excursions" className="btn-primary inline-block">
              Voir toutes les excursions
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3. DESTINATIONS PHARES ===== */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-16">
            <span
              className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 block"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Destinations Phares
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Les joyaux de la{" "}
              <span className="font-serif italic gradient-text">Martinique</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
              <div
                key={dest.name}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${i === 0 ? "md:col-span-1 h-80" : "h-72"}`}
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name} vue depuis un catamaran en Martinique`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-white font-bold text-xl mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {dest.name}
                  </h3>
                  <p
                    className="text-white/80 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. POURQUOI UN CATAMARAN ===== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span
                className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Pourquoi choisir un catamaran ?
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Le moyen de navigation{" "}
                <span className="font-serif italic gradient-text">idéal aux Antilles</span>
              </h2>
              <div className="section-divider mb-8" />
              <p
                className="text-foreground/75 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Le catamaran s&apos;impose comme l&apos;embarcation reine de la Martinique.
                Stable, spacieux et accédant à des coins que les monojouques ne peuvent
                atteindre, il transforme chaque sortie en mer en véritable aventure caribéenne.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {avantages.map((av) => (
                  <div key={av.titre} className="glass-card p-5 rounded-2xl">
                    <span className="text-2xl mb-3 block">{av.icon}</span>
                    <h3
                      className="font-semibold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {av.titre}
                    </h3>
                    <p
                      className="text-foreground/65 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-open-sans)" }}
                    >
                      {av.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home-securite.jpeg"
                alt="Navigation sécurisée en catamaran en Martinique"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass px-6 py-4 rounded-2xl">
                  <p
                    className="text-foreground font-semibold text-sm"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    🛡️ Sécurité garantie
                  </p>
                  <p
                    className="text-foreground/70 text-xs mt-1"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    Tous nos partenaires sont certifiés par les Affaires Maritimes
                    et respectent la réglementation française.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. TÉMOIGNAGES ===== */}
      <section className="py-24 wave-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 text-white/10 text-9xl select-none font-serif">❝</div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-16">
            <span
              className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 block"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Témoignages
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Ce qu&apos;ils disent de{" "}
              <span className="font-serif italic text-secondary">leurs aventures</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((t) => (
              <div key={t.nom} className="glass rounded-3xl p-8 flex flex-col gap-4">
                <div className="flex gap-1 text-secondary text-lg">
                  {Array(t.note).fill("★")}
                </div>
                <p
                  className="text-white/85 leading-relaxed flex-1 font-serif italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{t.texte}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                    {t.nom[0]}
                  </div>
                  <div>
                    <p
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {t.nom}
                    </p>
                    <p
                      className="text-white/50 text-xs"
                      style={{ fontFamily: "var(--font-open-sans)" }}
                    >
                      {t.lieu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="relative h-72 rounded-3xl overflow-hidden max-w-3xl mx-auto">
              <Image
                src="/images/home-temoignages.jpeg"
                alt="Famille heureuse en catamaran en Martinique"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-white font-bold text-2xl mb-4"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Prêt pour votre aventure caribéenne ?
                  </p>
                  <Link href="/excursions" className="btn-ghost">
                    Voir les excursions disponibles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. GUIDES / BLOG ===== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span
                className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Guides &amp; Conseils
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Nos derniers articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Voir tout le blog →
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="h-full">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p
              className="text-center italic text-foreground/60 py-12 glass-card rounded-2xl"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Aucun article publié pour le moment.
            </p>
          )}
        </div>
      </section>

      {/* ===== 7. CTA FINAL ===== */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="glass-card rounded-[2rem] p-12">
            <span className="text-4xl mb-4 block">⛵</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Planifiez votre excursion dès maintenant
            </h2>
            <p
              className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Location sans permis, avec ou sans skipper, demi-journée ou journée complète.
              Trouvez la formule parfaite pour votre séjour en Martinique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/excursions" className="btn-primary">
                Explorer les excursions
              </Link>
              <Link
                href="/location-sans-permis"
                className="border-2 border-primary text-primary font-display font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Location sans permis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
