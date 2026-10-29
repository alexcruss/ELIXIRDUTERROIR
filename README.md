# Élixir du Terroir · L'essence pure de la tradition

Site vitrine d'**Élixir du Terroir**, herboristerie traditionnelle à Zanguéra, Lomé (Togo). Réseaux : [TikTok @_elizir](https://www.tiktok.com/@_elizir) · [Facebook](https://www.facebook.com/people/Elixir-du-Terroir/61583865537441/) · [Instagram @elixirduterroir](https://www.instagram.com/elixirduterroir/).

**En ligne : [alexcruss.github.io/ELIXIRDUTERROIR](https://alexcruss.github.io/ELIXIRDUTERROIR/)**

> Version maquette : les informations encore à valider avec la cliente portent la mention « à confirmer » sur le site.

## Ce que fait le site

- Présente la marque, la fondatrice et la boutique de Zanguéra
- Montre les préparations (Le Fruit Désir, VIRILIS, Mélange Spécial, Antibiox, plantes au détail), avec commande par WhatsApp et message prérempli
- Affiche les visuels publiés sur Facebook et Instagram, avec les liens vers les trois réseaux
- Regroupe les astuces TikTok en **fiches plantes** filtrables, avec la vidéo lisible sur place
- Reprend la série « À la source » (villages, marché d'Akodésséwa) épisode par épisode
- Répond aux questions fréquentes des abonnés : où trouver, noms des plantes, précautions, confidentialité

## Modifier le contenu

Presque tout se change dans **`js/data.js`**, sans toucher au reste :

| Pour… | Modifier |
|---|---|
| Ajouter ou changer un produit, un prix | `PRODUITS` (mettre le prix en texte, ex. `'10 000 F'`) |
| Ajouter une fiche plante | `PLANTES` : l'`id` est la fin de l'URL de la vidéo TikTok ; enregistrer sa miniature dans `img/videos/<id>.jpg` |
| Ajouter un épisode « À la source » | `EPISODES` |
| Changer les visuels « Sur nos réseaux » | `RESEAUX` (image dans `img/reseaux/`, lien vers la publication) |
| Ajouter les photos | déposer le fichier dans `img/`, puis renseigner `SITE.photos` |
| Changer le numéro WhatsApp | `SITE.whatsapp` (et les liens `wa.me` de `index.html`) |

Les textes fixes (fondatrice, boutique, FAQ) sont dans `index.html`.

## À demander à la cliente

- [ ] Prénom et nom de la fondatrice, et quelques lignes sur son parcours
- [ ] Repère précis de la boutique à Zanguéra (rue, point de repère) et jours d'ouverture
- [ ] Prix des produits, et le nom du flacon rouge à étiquette blanche « Traitement… » vu sur les photos
- [ ] Moyens de paiement et zones de livraison
- [ ] Logo en haute définition (SVG ou PNG transparent) : le site utilise pour l'instant le logo détouré d'un visuel TikTok (`img/logo-vert.png` pour fond clair, `img/logo-blanc.png` pour fond foncé, `img/favicon.png`)
- [ ] Photos : l'original de la photo d'accueil (pour l'instant la photo de profil TikTok, signée « RFE »), un portrait, chaque produit
- [ ] Noms locaux (éwé, mina) des plantes des fiches
- [ ] Agrément de tradipraticienne éventuel, à afficher
- [ ] Compte WhatsApp Business et fiche Google Business Profile (voir plus bas)

## Technique

- HTML, CSS et JavaScript sans dépendance, conçu d'abord pour le téléphone et léger à charger
- Police Montserrat (Google Fonts), proche de Century Gothic ; Century Gothic, Tahoma et Arial en secours
- Vidéos : miniatures enregistrées dans `img/videos/` (une par vidéo, nommée avec son identifiant TikTok) ; le lecteur officiel TikTok se charge seulement au clic
- Produits : photos découpées dans les visuels Facebook et TikTok de la marque (`img/produits/`), à remplacer par de vraies photos produit
- Déploiement automatique sur GitHub Pages à chaque push sur `main` (`.github/workflows/static.yml`)

## Référencement Google

Déjà en place dans le site :

- titre et description avec les mots que les gens tapent (« herboristerie », « plantes médicinales », « Lomé », « Zanguéra ») ;
- adresse canonique, aperçu de partage (Facebook, WhatsApp) et image d'aperçu ;
- données structurées lues par Google : la boutique (adresse, téléphone, réseaux), le site et la FAQ ;
- `sitemap.xml` avec la page et les photos produits.

À faire une fois, avec un compte Google :

1. **Search Console** ([search.google.com/search-console](https://search.google.com/search-console)) : ajouter la propriété « Préfixe de l'URL » `https://alexcruss.github.io/ELIXIRDUTERROIR/`, choisir la validation par **balise HTML**, coller la balise à l'endroit prévu dans `<head>` de `index.html`, publier, puis cliquer sur « Valider ».
2. Dans Search Console, menu **Sitemaps** : envoyer `sitemap.xml`. Puis **Inspection de l'URL** sur l'adresse du site → « Demander l'indexation ».
3. **Google Business Profile** ([business.google.com](https://business.google.com)) : à créer par la cliente avec son propre compte. Catégorie « Herboristerie », adresse à Zanguéra, téléphone, horaires, lien vers le site. C'est ce qui la fera apparaître sur Google Maps quand on cherche « herboriste Lomé ».
4. Plus tard : un nom de domaine à elle (par exemple `elixirduterroir.com` ou `.tg`) donnera un site plus facile à retenir et à référencer. Il faudra alors mettre à jour l'adresse canonique, `og:url`, les données structurées et `sitemap.xml`.

```
index.html      la page
css/style.css   la mise en forme
js/data.js      le contenu modifiable
js/main.js      l'affichage, les filtres et la fenêtre vidéo
img/            photo d'accueil, produits/, reseaux/ et videos/ (miniatures)
sitemap.xml     plan du site pour Google
```

## Réalisation

[Pierre Kossi DEGBOEVI](https://alexcruss.github.io/portfolio/)
