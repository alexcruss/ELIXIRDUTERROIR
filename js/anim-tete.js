/* Chargé dans l'en-tête : marque la page « animée » avant le premier affichage, sauf si la personne
   a demandé moins de mouvement dans son système. Sans cette marque, aucune animation ne démarre. */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('anim');
})();
