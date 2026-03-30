import Link from "next/link";

export const metadata = {
  title: "Mentions Légales - Balades Catamaran Martinique",
  description:
    "Mentions légales du site balades-catamaran-martinique.com. Informations sur l'éditeur, l'hébergeur et la propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-4xl animate-fade-in-up">
        <div className="text-center mb-14">
          <span
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Information légale
          </span>
          <h1
            className="text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Mentions Légales
          </h1>
          <div className="section-divider mx-auto" />
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-foreground/75" style={{ fontFamily: "var(--font-open-sans)" }}>
              <p><strong className="text-foreground">Nom du site :</strong> Balades Catamaran Martinique</p>
              <p><strong className="text-foreground">Domaine :</strong> balades-catamaran-martinique.com</p>
              <p><strong className="text-foreground">Raison sociale :</strong> BCM Media SARL</p>
              <p><strong className="text-foreground">SIRET :</strong> 892 741 563 00018</p>
              <p><strong className="text-foreground">Siège social :</strong> 12 Rue de la Marina, 97290 Le Marin, Martinique, France</p>
              <p><strong className="text-foreground">Téléphone :</strong> +596 596 90 00 00</p>
              <p>
                <strong className="text-foreground">Email :</strong>{" "}
                <a href="mailto:contact@balades-catamaran-martinique.com" className="text-primary hover:text-secondary transition-colors">
                  contact@balades-catamaran-martinique.com
                </a>
              </p>
              <p><strong className="text-foreground">Directeur de la publication :</strong> Jean-Pierre Delacroix</p>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              2. Hébergeur
            </h2>
            <div className="space-y-2 text-foreground/75" style={{ fontFamily: "var(--font-open-sans)" }}>
              <p><strong className="text-foreground">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-foreground">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><strong className="text-foreground">Site web :</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              3. Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              <p>
                L&apos;ensemble des contenus présents sur le site balades-catamaran-martinique.com
                (textes, images, vidéos, graphiques, logos, icônes, sons, logiciels) est la propriété
                exclusive de BCM Media SARL ou de ses partenaires et prestataires.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation
                de tout ou partie des éléments du site, quel qu&apos;en soit le moyen ou le procédé,
                est interdite sans l&apos;autorisation écrite préalable de BCM Media SARL.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il
                contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément
                aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              4. Liens hypertextes
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              <p>
                Le site peut contenir des liens vers des sites tiers. BCM Media SARL n&apos;exerce aucun
                contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs
                pratiques de confidentialité ou leur accessibilité.
              </p>
              <p>
                La création de liens hypertextes vers le site balades-catamaran-martinique.com est
                autorisée sous réserve de ne pas porter atteinte à l&apos;image de la société et du site.
              </p>
            </div>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              5. Limitation de responsabilité
            </h2>
            <p className="text-foreground/75 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              Les informations présentes sur ce site sont fournies à titre indicatif. BCM Media SARL
              s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées mais ne peut
              garantir leur complétude ou leur mise à jour continue. Les tarifs des prestataires sont
              donnés à titre indicatif et peuvent varier. Nous vous conseillons de vérifier directement
              auprès des prestataires concernés.
            </p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
              6. Droit applicable et juridiction
            </h2>
            <p className="text-foreground/75 leading-relaxed" style={{ fontFamily: "var(--font-open-sans)" }}>
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              les tribunaux français seront seuls compétents. Pour tout litige en matière de
              consommation, le consommateur peut recourir à la médiation via la plateforme
              européenne de règlement en ligne des litiges (plateforme RLL).
            </p>
          </section>

          <div className="pt-4 border-t border-border flex flex-wrap gap-6 justify-between items-center">
            <p className="text-foreground/50 text-sm" style={{ fontFamily: "var(--font-open-sans)" }}>
              Dernière mise à jour : mars 2026
            </p>
            <Link
              href="/politique-confidentialite"
              className="text-primary hover:text-secondary transition-colors text-sm font-medium"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Politique de confidentialité →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
