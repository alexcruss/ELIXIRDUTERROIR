/* Animations du site avec GSAP (vendor/gsap.min.js) et ScrollTrigger.
   Règles : jamais de boucle, jamais de contenu caché (l'opacité n'est JAMAIS touchée : une capture
   de la page entière, un lecteur pressé ou un robot doit tout voir sans défiler), et rien du tout
   quand la personne a demandé moins de mouvement (voir anim-tete.js). Les blocs glissent de quelques
   pixels en entrant, les chiffres comptent une fois. À charger après GSAP et après main.js.
   Appeler ce fichier avec un numéro de version (anim.js?v=2), à augmenter à chaque modification :
   GitHub Pages garde les fichiers dix minutes. */
(function () {
  var racine = document.documentElement;
  if (!window.gsap || !window.ScrollTrigger || !racine.classList.contains('anim')) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* 1. Entrée du haut de page : le texte reste visible dès le premier affichage (c'est lui que Google
        mesure pour le LCP), seuls les éléments montent doucement, l'un après l'autre. */
  var texte = document.querySelectorAll('.hero-text > *');
  if (texte.length) {
    gsap.fromTo(texte, { y: 26 },
      { y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, clearProps: 'transform' });
  }
  /* Les trois préparations du haut de page montent chacune à leur tour. */
  var bouteilles = document.querySelectorAll('#hero-bouteilles svg');
  if (bouteilles.length) {
    gsap.fromTo(bouteilles, { y: 56 },
      { y: 0, duration: 1, ease: 'power3.out', stagger: 0.14, delay: 0.25, clearProps: 'transform' });
  }
  /* Les feuilles derrière glissent à peine, en sens inverse. */
  var feuilles = document.querySelector('.arch-leaves');
  if (feuilles) {
    gsap.fromTo(feuilles, { y: -18 }, { y: 0, duration: 1.2, ease: 'power2.out', clearProps: 'transform' });
  }

  /* 2. Apparition au défilement : seulement les blocs qui sont sous la partie visible au chargement.
        Ils sont décalés de 28 px puis remontent en entrant. Pas d'opacité : ils restent lisibles
        même si la personne ne défile jamais. */
  var limite = window.innerHeight * 0.92;
  var selecteurs = [
    '.section-head', '.step', '.product', '.bandeau', '.plant',
    '.portrait', '.fondatrice-grid > div:last-child', '.reseaux-liens', '.post',
    '.infos li', '.map-ph', '.faq details'
  ];
  /* Les épisodes défilent de côté sur téléphone : seulement sur grand écran, où ils sont en grille. */
  if (window.matchMedia('(min-width: 1040px)').matches) selecteurs.push('.episode');

  var cibles = gsap.utils.toArray(selecteurs.join(', ')).filter(function (e) {
    return e.getBoundingClientRect().top > limite;
  });
  if (cibles.length) {
    gsap.set(cibles, { y: 28 });
    ScrollTrigger.batch(cibles, {
      start: 'top 92%',
      once: true,
      onEnter: function (lot) {
        gsap.to(lot, { y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.09,
          overwrite: true, clearProps: 'transform' });
      }
    });
  }

  /* 3. Chiffres : la vraie valeur reste écrite dans le HTML (<strong data-to="63" data-suffix=" K">63 K</strong>).
        Elle ne passe à 0 qu'au moment où le chiffre entre à l'écran, puis il compte, une seule fois. */
  document.querySelectorAll('[data-to]').forEach(function (n, i) {
    var fin = parseInt(n.getAttribute('data-to'), 10);
    var suffixe = n.getAttribute('data-suffix') || '';
    var etat = { v: 0 };
    ScrollTrigger.create({
      trigger: n, start: 'top 95%', once: true,
      onEnter: function () {
        n.textContent = '0' + suffixe;
        gsap.to(etat, { v: fin, duration: 1.6, delay: 0.4 + i * 0.15, ease: 'power2.out',
          onUpdate: function () { n.textContent = Math.round(etat.v) + suffixe; },
          onComplete: function () { n.textContent = fin + suffixe; } });
      }
    });
  });

  /* Les positions changent quand les images arrivent, quand on filtre les fiches ou ouvre une question. */
  function recalculer() { ScrollTrigger.refresh(); }
  window.addEventListener('load', recalculer);
  var filtres = document.getElementById('filtres');
  if (filtres) filtres.addEventListener('click', function () { setTimeout(recalculer, 60); });
  var faq = document.querySelector('.faq-list');
  if (faq) faq.addEventListener('toggle', function () { setTimeout(recalculer, 60); }, true);
})();
