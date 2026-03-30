import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité - Balades Catamaran Martinique",
  description:
    "Politique de confidentialité de balades-catamaran-martinique.com. Données collectées, droits des utilisateurs, contact DPO.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-4xl animate-fade-in-up">
        <div className="text-center mb-14">
          <span
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Vos données personnelles
          </span>
          <h1
            className="text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Politique de Confidentialité
          </h1>
          <div className="section-divider mx-auto" />
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              1. Responsable du traitement
            </h2>
            <div className="space-y-2 text-foreground/75" style={{ fontFamily: "var(--font-open-sans)" }}>
              <p><strong className="text-foreground">Entité :</strong> BCM Media SARL</p>
              <p><strong className="text-foreground">Adresse :</strong> 12 Rue de la Marina, 97290 Le Marin, Martinique</p>
              <p>
                <strong className="text-foreground">DPO — Contact :</strong>{" "}
                <a href="mailto:dpo@balades-catamaran-martinique.com" className="text-primary hover:text-secondary transition-colors">
                  dpo@balades-catamaran-martinique.com
                </a>
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              2. Données collectées
            </h2>
            <div className="space-y-6 text-foreground/75 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              <p>Notre site collecte les données suivantes :</p>
              <div className="space-y-4">
                {[
                  {
                    titre: "Données de navigation (cookies analytiques)",
                    desc: "Pages visitées, durée de visite, provenance du trafic. Ces données sont anonymisées et servent uniquement à améliorer l'expérience utilisateur.",
                    base: "Intérêt légitime",
                  },
                  {
                    titre: "Données de contact volontaire",
                    desc: "Si vous nous contactez par email, nous conservons votre adresse email et le contenu de votre message pour vous répondre.",
                    base: "Exécution pré-contractuelle",
                  },
                  {
                    titre: "Cookies techniques",
                    desc: "Nécessaires au bon fonctionnement du site. Ne requièrent pas de consentement.",
                    base: "Nécessité technique",
                  },
                ].map((item) => (
                  <div key={item.titre} className="glass-card rounded-2xl p-5">
                    <p className="font-semibold text-foreground mb-2">{item.titre}</p>
                    <p className="text-sm text-foreground/65 mb-2">{item.desc}</p>
                    <span className="badge-nautique text-xs">{item.base}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              3. Durée de conservation
            </h2>
            <ul className="space-y-3 text-foreground/75" style={{ fontFamily: "var(--font-open-sans)" }}>
              {[
                "Données de navigation : 13 mois maximum",
                "Messages de contact : 3 ans à compter du dernier contact",
                "Cookies techniques : durée de la session ou 12 mois",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              4. Vos droits (RGPD)
            </h2>
            <p className="text-foreground/75 mb-5 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)
              et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "👁️", droit: "Droit d'accès", desc: "Obtenir une copie de vos données personnelles" },
                { icon: "✏️", droit: "Droit de rectification", desc: "Corriger des données inexactes vous concernant" },
                { icon: "🗑️", droit: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                { icon: "⏸️", droit: "Droit à la limitation", desc: "Restreindre le traitement dans certains cas" },
                { icon: "📤", droit: "Droit à la portabilité", desc: "Récupérer vos données dans un format structuré" },
                { icon: "🚫", droit: "Droit d'opposition", desc: "S'opposer au traitement de vos données" },
              ].map((d) => (
                <div key={d.droit} className="glass-card rounded-2xl p-4 flex gap-3">
                  <span className="text-2xl shrink-0">{d.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "var(--font-poppins)" }}>{d.droit}</p>
                    <p className="text-foreground/60 text-xs mt-1" style={{ fontFamily: "var(--font-open-sans)" }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 glass-card rounded-2xl p-5">
              <p className="text-foreground/75 text-sm leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
                Pour exercer ces droits, contactez notre DPO :{" "}
                <a href="mailto:dpo@balades-catamaran-martinique.com" className="text-primary hover:text-secondary transition-colors font-medium">
                  dpo@balades-catamaran-martinique.com
                </a>
                {" "}— Réponse sous 30 jours.
                En cas de litige non résolu, vous pouvez saisir la CNIL :{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              5. Cookies
            </h2>
            <p className="text-foreground/75 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              Notre site utilise des cookies pour assurer son bon fonctionnement et analyser notre audience.
              Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels. Cette action
              peut limiter certaines fonctionnalités du site. Pour plus d&apos;informations sur les cookies,
              consultez le site de la CNIL.
            </p>
          </section>

          <div className="pt-4 border-t border-border flex flex-wrap gap-6 justify-between items-center">
            <p className="text-foreground/50 text-sm" style={{ fontFamily: "var(--font-open-sans)" }}>
              Dernière mise à jour : mars 2026
            </p>
            <Link
              href="/mentions-legales"
              className="text-primary hover:text-secondary transition-colors text-sm font-medium"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              ← Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
