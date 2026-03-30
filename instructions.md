## Description
## Balades Catamaran Martinique

**balades-catamaran-martinique.com** est un site spécialisé dans l'écosystème touristique des excursions en catamaran en Martinique. Le site se positionne comme une plateforme complète dédiée aux sorties en mer, couvrant la location de catamarans, les balades accompagnées, les barbecues en mer, et les soirées nautiques.

L'objectif principal est de générer des leads qualifiés pour les prestataires locaux tout en servant de guide expert pour les touristes souhaitant réserver des expériences maritimes authentiques. Le contenu se structure autour de guides pratiques (types de sorties, durées, tarifs), de comparatifs des prestataires, et d'informations essentielles sur la réglementation nautique martiniquaise. Le public cible comprend les touristes en séjour en Martinique, les croisiéristes, et les locaux cherchant des activités de loisir maritime. Le site vise à devenir la référence SEO sur la requête "catamaran Martinique" et ses déclinaisons long-tail.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Balades Catamaran Martinique
- Domaine : balades-catamaran-martinique.com
- Type de site : money site (génération de leads)
- Thématiques : Tourisme nautique, excursions catamaran, Martinique
- Objectif business : Lead generation pour prestataires + affiliation activités
- Audience cible : Touristes en Martinique, croisiéristes, locaux cherchant loisirs maritimes

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : tropical, maritime, luxueux, aventurier, authentique
- **Références visuelles mentales** : eaux turquoise des Caraïbes, voiles blanches gonflées par les alizés, couchers de soleil antillais, plages de sable noir volcanique, végétation tropicale luxuriante
- **Émotions à évoquer** chez le visiteur : évasion, liberté maritime, détente tropicale, aventure sécurisée, authenticité caribéenne

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

Les images suivantes ont été générées et sont disponibles sur le bucket :

**Page d'accueil :**
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-home-hero-catamaran-sunset.jpeg
- Section activités - Barbecue : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-home-activites-barbecue-mer.jpeg
- Section activités - Soirée : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-home-activites-soiree-catamaran.jpeg
- Section destinations - Plage des Salines : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-home-destinations-salines.jpeg
- Section témoignages : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-home-temoignages-famille-catamaran.jpeg
- Section guide - Sécurité : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-home-guide-securite-mer.jpeg

**Page Excursions :**
- Hero excursions : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-excursions-hero-flotte-catamarans.jpeg
- Balade courte : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-excursions-balade-cote-caraibe.jpeg
- Journée complète : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-excursions-journee-ilots-francois.jpeg

**Page À propos :**
- Équipe locale : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/balades-catamaran-martinique-com-about-equipe-locale-marina.jpeg

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à ces références (turquoise des eaux martiniquaises, blanc des voiles, doré des couchers de soleil, vert émeraude de la végétation tropicale)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : inspirée du turquoise des eaux caribéennes
   - Couleur secondaire (secondary) : blanc nautique des voiles et catamarans
   - Couleur d'accent (accent) : doré chaleureux des couchers de soleil antillais
   - Couleur de fond (background) : beige sable des plages martiniquaises
   - Variante hover : turquoise plus profond
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers tropical et maritime :
  - Titre principal : Poppins (moderne, lisible, évoque la fraîcheur tropicale)
  - Corps de texte : Open Sans (excellente lisibilité, web-friendly)
  - Accents : Playfair Display pour les citations et éléments premium

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Catamaran Martinique | Balades & Excursions en Mer"
- **Méta-description principale** pour la home : "Réservez votre balade en catamaran en Martinique. Excursions, barbecues en mer, location sans permis. Guide complet des meilleures sorties maritimes."
- **Open Graph title** : "Balades Catamaran Martinique - Excursions Paradisiaques"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation maritime)
  - `app/globals.css` (créer la palette UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/excursions/*`, `/guides/*`)

## 4. Contenu & structure à mettre en place
- Types de contenus à garder : blog, guides pratiques, comparatifs prestataires, fiches excursions
- **Sections obligatoires sur la page d'accueil** (`/`) :
  - Hero ("Découvrez la Martinique en Catamaran", sous-titre sur expériences uniques, CTA "Réserver une excursion")
  - Section "Nos Activités" (barbecues en mer, soirées, balades courtes/longues)
  - Section "Destinations Phares" (Salines, îlets du François, côte Caraïbe)
  - Mise en avant d'articles guides ("Guide du débutant", "Que prévoir pour une sortie")
  - Bloc témoignages avec photos de familles heureuses
  - Section "Pourquoi Choisir un Catamaran" (avantages vs autres bateaux)
- Pages importantes : `/excursions`, `/guides`, `/comparatif-prestataires`, `/location-sans-permis`
- Clusters thématiques : excursions par durée (2h, demi-journée, journée), par type (famille, romantique, aventure), par zone géographique

## 5. Domaine expiré - URLs à reconstruire
- Aucune ancienne URL à reconstruire (nouveau domaine)

## 6. Consignes éditoriales
- Ton à respecter : expert mais accessible, enthousiaste sans être trop commercial, rassurant sur la sécurité
- Types d'articles attendus : guides pratiques ("Première fois en catamaran", "Budget excursion Martinique"), comparatifs prestataires, récits d'excursions, conseils saisonniers
- Contraintes à éviter : promesses irréalistes sur météo, prix fixes sans mention "à partir de", négligence des aspects sécurité

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=balades-catamaran-martinique.com, BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec navigation maritime (Accueil, Excursions, Guides, Prestataires, Contact)
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- Logos (`/public/logo.svg` avec ancre et voile, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Téléchargement et intégration des 10 images pré-générées
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system tropical
❌ Copier-coller des couleurs d'un site nautique existant
❌ Utiliser des images génériques de bateaux (utiliser les images pré-générées spécifiques Martinique)
❌ Créer un design "yacht club européen" au lieu de "Caraïbes authentiques"
❌ Laisser des placeholders de couleurs dans le code final
❌ Négliger l'aspect mobile (crucial pour touristes en déplacement)