# Élixir du Terroir · L'essence pure de la tradition

Site vitrine d'**Élixir du Terroir**, herboristerie traditionnelle à Lomé (Togo), connue sur TikTok sous [@_elizir](https://www.tiktok.com/@_elizir).

**En ligne : [alexcruss.github.io/ELIXIRDUTERROIR](https://alexcruss.github.io/ELIXIRDUTERROIR/)**

> Version maquette : les informations encore à valider avec la cliente portent la mention « à confirmer » sur le site.

## Ce que fait le site

- Présente la marque, la fondatrice et la boutique de Lomé
- Montre les préparations (Le Fruit Désir, Mélange Spécial, plantes au détail), avec commande par WhatsApp et message prérempli
- Regroupe les astuces TikTok en **fiches plantes** filtrables, avec la vidéo lisible sur place
- Reprend la série « À la source » (villages, marché d'Akodésséwa) épisode par épisode
- Répond aux questions fréquentes des abonnés : où trouver, noms des plantes, précautions, confidentialité

## Modifier le contenu

Presque tout se change dans **`js/data.js`**, sans toucher au reste :

| Pour… | Modifier |
|---|---|
| Ajouter ou changer un produit, un prix | `PRODUITS` (mettre le prix en texte, ex. `'10 000 F'`) |
| Ajouter une fiche plante | `PLANTES` : l'`id` est la fin de l'URL de la vidéo TikTok |
| Ajouter un épisode « À la source » | `EPISODES` |
| Ajouter les photos | déposer le fichier dans `img/`, puis renseigner `SITE.photos` |
| Changer le numéro WhatsApp | `SITE.whatsapp` (et les liens `wa.me` de `index.html`) |

Les textes fixes (fondatrice, boutique, FAQ) sont dans `index.html`.

## À demander à la cliente

- [ ] Prénom et nom de la fondatrice, et quelques lignes sur son parcours
- [ ] Adresse exacte de la boutique et jours d'ouverture
- [ ] Prix des produits, et nom du flacon à étiquette verte (« VIR…S », sans alcool), illisible sur la photo
- [ ] Orthographe voulue : « Mélange Spécial » (site) ou « Mélange Spéciale » (étiquette)
- [ ] Moyens de paiement et zones de livraison
- [ ] Logo en haute définition (SVG ou PNG transparent)
- [ ] Photos : l'original de la photo d'accueil (pour l'instant la photo de profil TikTok, signée « RFE »), un portrait, chaque produit
- [ ] Noms locaux (éwé, mina) des plantes des fiches
- [ ] Agrément de tradipraticienne éventuel, à afficher
- [ ] Autres réseaux (Facebook, Instagram, WhatsApp Business)

## Technique

- HTML, CSS et JavaScript sans dépendance, conçu d'abord pour le téléphone et léger à charger
- Polices Cormorant Garamond et Jost (Google Fonts)
- Vidéos : lecteur officiel TikTok, chargé seulement quand on clique
- Déploiement automatique sur GitHub Pages à chaque push sur `main` (`.github/workflows/static.yml`)

```
index.html      la page
css/style.css   la mise en forme
js/data.js      le contenu modifiable
js/main.js      l'affichage, les filtres et la fenêtre vidéo
img/            les photos à venir
```

## Réalisation

[Pierre Kossi DEGBOEVI](https://alexcruss.github.io/portfolio/)
