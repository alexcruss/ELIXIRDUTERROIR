/* Contenu du site : c'est ici qu'on modifie les produits, les fiches plantes et les épisodes.
   Les vues TikTok sont relevées le 29/10/2026. Les champs « prix » à null s'affichent « à confirmer ». */

const SITE = {
  whatsapp: '22896376439',
  whatsappAffiche: '+228 96 37 64 39',
  tiktok: 'https://www.tiktok.com/@_elizir',
  facebook: 'https://www.facebook.com/people/Elixir-du-Terroir/61583865537441/',
  instagram: 'https://www.instagram.com/elixirduterroir/',
  /* Photos : déposer le fichier dans img/ puis indiquer son chemin, ex. 'img/fondatrice.jpg'.
     Tant que c'est null, le site affiche l'illustration. */
  photos: {
    accueil: 'img/fondatrice.jpg',   // photo de profil TikTok (1080 × 1080), à remplacer par l'original
    portrait: null,  // format portrait 4:5, pour « Derrière la marque »
  },
};

/* « image » : photo du produit, découpée dans les visuels Facebook et TikTok de la marque (à remplacer par de vraies photos produit).
   Les descriptions reprennent les étiquettes et les publications de la marque.
   Sans image, le site dessine une bouteille à partir de « visuel ».
   « nomAConfirmer » : true ajoute la mention « nom à confirmer ». */
const PRODUITS = [
  {
    nom: 'Le Fruit Désir',
    format: 'Bouteille, prête à boire',
    categorie: 'Fertilité féminine',
    texte: "D'après son étiquette, une préparation de plantes pour accompagner la fertilité féminine et favoriser la conception. Dosage et durée de la cure expliqués sur WhatsApp.",
    prix: null,
    image: 'img/produits/fruit-desir.jpg',
    visuel: { type: 'liquide', liquide: '#6E1A26', etiquette: '#8C2333', bouchon: '#6FA35A', lignes: ['Le Fruit', 'Désir'] },
  },
  {
    nom: 'Le Fruit Désir, écorces',
    format: 'Écorces à préparer',
    categorie: 'Fertilité féminine',
    texte: "La même recette en écorces séchées, à préparer chez vous en suivant nos indications.",
    prix: null,
    image: 'img/produits/fruit-desir-ecorces.jpg',
    visuel: { type: 'ecorces', etiquette: '#8C2333', bouchon: '#6FA35A', lignes: ['Le Fruit', 'Désir'] },
  },
  {
    nom: 'VIRILIS',
    format: 'Bouteille, sans alcool',
    categorie: 'Bien-être intime',
    texte: "Un aphrodisiaque sans alcool, à base de plantes et de racines, pour raviver la complicité et les moments à deux.",
    prix: null,
    image: 'img/produits/virilis.jpg',
    visuel: { type: 'liquide', liquide: '#7A4A2A', etiquette: '#4C7A3C', bouchon: '#6FA35A', lignes: ['VIRILIS'] },
  },
  {
    nom: 'Mélange Spécial',
    format: 'Écorces et racines, avec alcool',
    categorie: 'Préparation maison',
    texte: "Une sélection de plantes au cœur de notre savoir-faire, fabriquée à Lomé. Mode d'emploi indiqué sur l'étiquette : deux petits verres, matin et soir.",
    prix: null,
    image: 'img/produits/melange-special.jpg',
    visuel: { type: 'ecorces', etiquette: '#F4EEE4', texteEtiquette: '#8C2333', bouchon: '#D9602B', lignes: ['Mélange', 'Spécial'] },
  },
  {
    nom: 'Antibiox',
    format: 'Poudre de plantes, en pot',
    categorie: 'Confort urinaire',
    texte: "Certaines plantes sont traditionnellement utilisées pour accompagner le confort urinaire. « Prenez soin de vous, simplement. »",
    prix: null,
    image: 'img/produits/antibiox.jpg',
    visuel: { type: 'feuilles', etiquette: '#8C2333', bouchon: '#2F8F3A', lignes: ['Antibiox'] },
  },
];

/* Visuels publiés sur Facebook et Instagram (dossier img/reseaux), chacun relié à sa publication. */
const RESEAUX = [
  { image: 'img/reseaux/p2.jpg', lien: 'https://www.instagram.com/elixirduterroir/p/DeXd5halJWM/', reseau: 'Instagram',
    alt: "Visuel « La nature a ses secrets, nous savons les valoriser » avec les bouteilles Le Fruit Désir et VIRILIS" },
  { image: 'img/reseaux/p1.jpg', lien: 'https://www.instagram.com/elixirduterroir/p/DeY-DoXAYpj/', reseau: 'Instagram',
    alt: "Visuel « Ravivez la flamme » présentant VIRILIS, formule sans alcool" },
  { image: 'img/reseaux/p3.jpg', lien: 'https://www.instagram.com/elixirduterroir/p/DeU5Gn8gazZ/', reseau: 'Instagram',
    alt: "Visuel « Un mélange, un savoir-faire » présentant le Mélange Spécial" },
  { image: 'img/reseaux/p7.jpg', lien: 'https://www.facebook.com/photo/?fbid=122141046753128851', reseau: 'Facebook',
    alt: "Visuel présentant le pot Antibiox entre deux feuilles" },
  { image: 'img/reseaux/p9.jpg', lien: 'https://www.facebook.com/photo/?fbid=122140950429128851', reseau: 'Facebook',
    alt: "Visuel « Des solutions naturelles existent, passez chez Élixir du Terroir pour des conseils adaptés »" },
  { image: 'img/reseaux/p4.jpg', lien: 'https://www.facebook.com/photo/?fbid=122147658921128851', reseau: 'Facebook',
    alt: "Visuel « Bienvenue octobre ! Prendre soin de soi, c'est aussi apprendre à écouter la nature »" },
];

/* Une fiche par vidéo. id = identifiant de la vidéo TikTok (fin de l'URL).
   « local » (nom en éwé ou en mina) est à compléter avec la cliente. */
const PLANTES = [
  { id: '7621260657631038741', titre: "Les plantes de l'asthme", cat: 'Respiration', vues: 198900,
    texte: "Au marché d'Akodésséwa, les plantes utilisées traditionnellement pour aider à mieux respirer. C'est notre vidéo la plus vue." },
  { id: '7583363110837308684', titre: 'Aubergine sauvage, corossol et citron', cat: 'Plantes à connaître', vues: 195900,
    latin: 'Solanum sp. · Annona muricata · Citrus limon',
    texte: "Trois ingrédients faciles à trouver. Plus de 4 500 personnes ont enregistré cette astuce." },
  { id: '7540468250598067461', titre: "Troubles de l'éjaculation", cat: 'Bien-être intime', vues: 129100,
    texte: "D'où vient le problème, ce qu'il faut changer dans ses habitudes et les solutions naturelles disponibles à la boutique." },
  { id: '7600507046844271893', titre: 'Les feuilles de teck', cat: 'Plantes à connaître', vues: 74400,
    latin: 'Tectona grandis',
    texte: "Beaucoup passent à côté sans les voir. Leurs vertus, et pourquoi on les utilise autant." },
  { id: '7538906898930683141', titre: 'Le gongoli', cat: 'Plantes à connaître', vues: 47300,
    texte: "Une plante de chez nous et ses usages, expliqués en vidéo." },
  { id: '7539552184875158789', titre: 'Oignon blanc et miel', cat: 'Bien-être intime', vues: 36100,
    latin: 'Allium cepa',
    texte: "Une recette simple, partagée pour les faiblesses d'érection.",
    recette: "Broyer 6 bulbes d'oignon blanc et en extraire le jus. Mélanger avec du miel. 2 cuillères, 3 fois par jour, pendant une semaine." },
  { id: '7538779621177756933', titre: 'Les feuilles de goyave', cat: 'Plantes à connaître', vues: 27500,
    latin: 'Psidium guajava',
    texte: "Le goyavier pousse dans beaucoup de cours. Ce que ses feuilles peuvent vous apporter." },
  { id: '7610129293280021780', titre: 'Thé de feuilles de mangue', cat: 'Sommeil & stress', vues: 21400,
    latin: 'Mangifera indica',
    texte: "Riches en antioxydants et en vitamines A, B et C, les feuilles de mangue sont utilisées pour calmer les nerfs et retrouver un sommeil paisible.",
    recette: "Prendre des feuilles pas trop mûres et les préparer en infusion." },
  { id: '7539143685338860806', titre: 'La papaye verte', cat: 'Plantes à connaître', vues: 7207,
    latin: 'Carica papaya',
    texte: "Pourquoi utiliser la papaye avant qu'elle soit mûre." },
  { id: '7620074089234877716', titre: 'Une astuce contre les hémorroïdes', cat: 'Confort digestif', vues: 5920,
    texte: "Beaucoup souffrent en silence. Une astuce naturelle bien connue ici, filmée au marché." },
  { id: '7539912288153701638', titre: "L'eau de gombo", cat: 'Plantes à connaître', vues: 4546,
    latin: 'Abelmoschus esculentus',
    texte: "Comment préparer l'eau de gombo, et à quoi elle sert." },
  { id: '7540253514790915333', titre: "L'éjaculation retardée", cat: 'Bien-être intime', vues: 4404,
    texte: "Stress, médicaments, alcool, diabète, habitudes : les causes possibles quand cela devient un vrai problème." },
  { id: '7539262850963868984', titre: 'La poudre de graines de mangue', cat: 'Plantes à connaître', vues: 3548,
    latin: 'Mangifera indica',
    texte: "Les graines qu'on jette d'habitude, transformées en poudre.",
    recette: "Couper les graines en morceaux, les sécher au soleil puis les broyer. 1 cuillère dans un verre d'eau, une fois par jour, pendant 3 à 4 semaines." },
  { id: '7580415227288653112', titre: 'Les fleurs de bananier', cat: 'Bien-être intime', vues: 1241,
    latin: 'Musa sp.',
    texte: "Une préparation sur la durée pour la vigueur sexuelle.",
    recette: "Faire bouillir 10 minutes. Boire matin et soir pendant 40 jours." },
  { id: '7607830352429616402', titre: 'Ail, gingembre, citron, curcuma', cat: 'Défenses naturelles', vues: 760,
    texte: "Les ajouter à vos repas peut aider votre corps à mieux se défendre." },
  { id: '7608232969886567698', titre: "Boire assez d'eau", cat: 'Hydratation', vues: 558,
    texte: "Un rappel simple : s'hydrater tout au long de la journée." },
];

/* Série « À la source » (playlist TikTok du même nom). */
const EPISODES = [
  { id: '7599000896743165240', date: '24 janv. 2026', titre: "Bienvenue dans l'aventure",
    texte: "Forêts, routes, marchés, plantes : le début des aventures herboristiques d'Élixir du Terroir." },
  { id: '7599746215432949012', date: '26 janv. 2026', titre: 'Partie 1 · Au village',
    texte: "Direction un village, à la rencontre de la terre, des plantes et de ceux qui transmettent le savoir." },
  { id: '7600135219726798101', date: '27 janv. 2026', titre: 'Partie 2 · La gardienne des plantes',
    texte: "Rencontre avec une femme qui garde les secrets des herbes, des écorces et des racines." },
  { id: '7600507046844271893', date: '28 janv. 2026', titre: 'Premier arrêt : le teck',
    texte: "Les vertus des feuilles de teck, devant lesquelles beaucoup passent sans savoir." },
  { id: '7601626759032966421', date: '31 janv. 2026', titre: 'Après la cueillette',
    texte: "Comment la plante s'utilise : matin et soir pendant 7 jours, puis 3 jours de pause." },
  { id: '7619777527736798485', date: '21 mars 2026', titre: "Au marché d'Akodésséwa",
    texte: "Au marché des féticheurs de Lomé, chaque racine et chaque feuille a une histoire." },
  { id: '7620074089234877716', date: '22 mars 2026', titre: 'Les hémorroïdes',
    texte: "Une astuce naturelle bien connue ici, pour ceux qui souffrent en silence." },
  { id: '7621260657631038741', date: '25 mars 2026', titre: 'Mieux respirer',
    texte: "Les plantes utilisées pour soulager l'asthme. Près de 200 000 vues." },
];
