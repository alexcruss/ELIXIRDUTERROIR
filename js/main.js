/* Rendu des sections à partir de js/data.js, menu mobile, filtres et fenêtre vidéo. */

const waLien = (message) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
const formatVues = (n) => new Intl.NumberFormat('fr-FR', { notation: 'compact', maximumFractionDigits: 1 }).format(n);
const echapper = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ICONE = (id) => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

/* ── Bouteilles dessinées (en attendant les photos des produits) ── */
let compteurSvg = 0;

function morceaux(type, graine) {
  let s = graine * 7919 + 17;
  const alea = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const teintes = type === 'feuilles'
    ? ['#4C7A3C', '#5E8C4A', '#7FA36B', '#93B47A', '#3F6B33']
    : ['#5A3520', '#6B4226', '#8A5A36', '#A87445', '#C08A55'];
  let svg = '';
  for (let i = 0; i < 90; i++) {
    const x = 16 + alea() * 88, y = 74 + alea() * 214, r = Math.round(alea() * 180);
    const c = teintes[Math.floor(alea() * teintes.length)];
    svg += type === 'feuilles'
      ? `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="9" ry="3.6" fill="${c}" transform="rotate(${r} ${x.toFixed(1)} ${y.toFixed(1)})"/>`
      : `<rect x="${(x - 7).toFixed(1)}" y="${(y - 2.5).toFixed(1)}" width="${(9 + alea() * 9).toFixed(1)}" height="5" rx="2" fill="${c}" transform="rotate(${r} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }
  return svg;
}

function bouteille({ type = 'liquide', liquide = '#6E1A26', etiquette = '#8C2333', texteEtiquette = '#fff', bouchon = '#6FA35A', lignes = [] }) {
  const id = `btl-${++compteurSvg}`;
  const forme = 'M48 30h24v16c0 9 6 15 14 22 9 8 14 17 14 30v168c0 12-8 18-18 18H38c-10 0-18-6-18-18V98c0-13 5-22 14-30 8-7 14-13 14-22z';
  const contenu = type === 'liquide'
    ? `<rect x="0" y="92" width="120" height="210" fill="${liquide}"/><rect x="0" y="92" width="120" height="5" fill="#fff" opacity=".2"/>`
    : `<rect x="0" y="70" width="120" height="230" fill="${type === 'feuilles' ? '#2F5228' : '#3E2616'}" opacity=".55"/>${morceaux(type, compteurSvg)}`;
  const texte = lignes.map((l, i) =>
    `<text x="60" y="${190 + i * 17}" text-anchor="middle" font-family="Montserrat, 'Century Gothic', Arial, sans-serif" font-size="12" font-weight="700" fill="${texteEtiquette}">${echapper(l)}</text>`).join('');
  return `<svg viewBox="0 0 120 300" aria-hidden="true">
    <defs><clipPath id="${id}"><path d="${forme}"/></clipPath></defs>
    <ellipse cx="60" cy="293" rx="46" ry="5" fill="#000" opacity=".18"/>
    <rect x="43" y="5" width="34" height="27" rx="5" fill="${bouchon}"/>
    <rect x="43" y="25" width="34" height="4" fill="#000" opacity=".14"/>
    <g clip-path="url(#${id})"><rect width="120" height="300" fill="#fff" opacity=".16"/>${contenu}</g>
    <path d="${forme}" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>
    <rect x="21" y="150" width="78" height="80" rx="3" fill="${etiquette}"/>
    <rect x="25" y="154" width="70" height="72" rx="2" fill="none" stroke="${texteEtiquette}" stroke-opacity=".45"/>
    <text x="60" y="169" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="5.2" letter-spacing=".9" fill="${texteEtiquette}" opacity=".85">ÉLIXIR DU TERROIR</text>
    ${texte}
    <rect x="27" y="104" width="6" height="150" rx="3" fill="#fff" opacity=".22"/>
  </svg>`;
}

/* ── Photos déclarées dans SITE.photos ── */
document.querySelectorAll('[data-photo]').forEach((cadre) => {
  const chemin = SITE.photos[cadre.dataset.photo];
  if (!chemin) return;
  const img = new Image();
  img.alt = cadre.dataset.alt;
  img.onload = () => cadre.classList.add('has-photo');
  img.src = chemin;
  cadre.prepend(img);
});

/* ── Accueil ── */
document.getElementById('hero-bouteilles').innerHTML = [
  bouteille(PRODUITS[0].visuel),
  bouteille(PRODUITS[2].visuel),
  bouteille(PRODUITS[1].visuel),
].join('');

/* ── Vignette de vidéo : image de couverture TikTok enregistrée dans img/videos/<id>.jpg ── */
const vignette = (id, titre, vues) => `
  <button class="thumb" type="button" data-video="${id}" data-titre="${echapper(titre)}" aria-label="Voir la vidéo : ${echapper(titre)}">
    <img src="img/videos/${id}.jpg" alt="" loading="lazy" decoding="async">
    <span class="thumb-play">${ICONE('i-play')}</span>
    ${vues ? `<span class="thumb-vues">${ICONE('i-play')}${formatVues(vues)} vues</span>` : ''}
  </button>`;

/* ── Produits ── */
document.getElementById('produits-liste').innerHTML = PRODUITS.map((p) => `
  <article class="product reveal">
    <div class="product-visual${p.image ? ' photo' : ''}">${p.image
      ? `<img src="${p.image}" alt="${echapper(p.nom)}" loading="lazy" decoding="async">`
      : bouteille(p.visuel)}</div>
    <div class="product-body">
      <span class="chip" data-cat="${echapper(p.categorie)}">${echapper(p.categorie)}</span>
      <h3>${echapper(p.nom)}${p.nomAConfirmer ? ' <span class="tbc">nom à confirmer</span>' : ''}</h3>
      <p class="format">${echapper(p.format)}</p>
      <p>${echapper(p.texte)}</p>
      <div class="product-foot">
        <span class="price">${p.prix ? echapper(p.prix) : 'Prix <span class="tbc">à confirmer</span>'}</span>
        <a class="btn btn-wa btn-sm" href="${waLien(`Bonjour Élixir du Terroir, je voudrais des informations sur « ${p.nom} ».`)}">${ICONE('i-wa')}Commander</a>
      </div>
    </div>
  </article>`).join('');

/* ── Plantes & astuces ── */
const listePlantes = document.getElementById('plantes-liste');
listePlantes.innerHTML = PLANTES.map((p) => `
  <article class="plant" data-cat="${echapper(p.cat)}">
    ${vignette(p.id, p.titre, p.vues)}
    <span class="chip" data-cat="${echapper(p.cat)}">${echapper(p.cat)}</span>
    <h3>${echapper(p.titre)}</h3>
    ${p.latin ? `<p class="latin">${echapper(p.latin)}</p>` : ''}
    ${p.local ? `<p class="latin">Nom local : ${echapper(p.local)}</p>` : ''}
    <p>${echapper(p.texte)}</p>
    ${p.recette ? `<div class="recette"><strong>Montré dans la vidéo</strong>${echapper(p.recette)}</div>` : ''}
    <div class="plant-actions">
      <button class="btn btn-ghost btn-sm" type="button" data-video="${p.id}" data-titre="${echapper(p.titre)}">${ICONE('i-play')}Voir la vidéo</button>
      <a class="btn-lien" href="${waLien(`Bonjour, j'ai vu votre vidéo « ${p.titre} ». J'aimerais un conseil.`)}">Demander conseil</a>
    </div>
  </article>`).join('');

const categories = [...new Set(PLANTES.map((p) => p.cat))];
const filtres = document.getElementById('filtres');
filtres.innerHTML = ['Tout', ...categories].map((c, i) => {
  const n = c === 'Tout' ? PLANTES.length : PLANTES.filter((p) => p.cat === c).length;
  return `<button class="filter" type="button" data-filtre="${echapper(c)}" aria-pressed="${i === 0}">${echapper(c)}<span>${n}</span></button>`;
}).join('');
filtres.addEventListener('click', (e) => {
  const bouton = e.target.closest('.filter');
  if (!bouton) return;
  filtres.querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-pressed', String(b === bouton)));
  const choix = bouton.dataset.filtre;
  listePlantes.querySelectorAll('.plant').forEach((carte) => {
    carte.hidden = choix !== 'Tout' && carte.dataset.cat !== choix;
  });
});

/* ── À la source ── */
document.getElementById('episodes-liste').innerHTML = EPISODES.map((ep, i) => `
  <article class="episode">
    ${vignette(ep.id, ep.titre)}
    <span class="num">${String(i + 1).padStart(2, '0')}</span>
    <span class="date">${echapper(ep.date)}</span>
    <h3>${echapper(ep.titre)}</h3>
    <p>${echapper(ep.texte)}</p>
    <button class="btn btn-clair btn-sm" type="button" data-video="${ep.id}" data-titre="${echapper(ep.titre)}">${ICONE('i-play')}Regarder</button>
  </article>`).join('');

/* ── Sur nos réseaux : visuels Facebook et Instagram, reliés à leur publication ── */
document.getElementById('reseaux-liste').innerHTML = RESEAUX.map((r) => `
  <a class="post" href="${r.lien}" target="_blank" rel="noopener" aria-label="Voir la publication sur ${r.reseau}">
    <img src="${r.image}" alt="${echapper(r.alt)}" loading="lazy" decoding="async">
    <span class="post-reseau">${ICONE(r.reseau === 'Instagram' ? 'i-ig' : 'i-fb')}${r.reseau}</span>
  </a>`).join('');

/* ── Liens WhatsApp avec message prérempli ── */
document.querySelectorAll('[data-wa]').forEach((a) => { a.href = waLien(a.dataset.wa); });

/* ── Fenêtre vidéo (lecteur officiel TikTok, chargé seulement au clic) ── */
const modale = document.getElementById('video-modal');
const lecteur = document.getElementById('video-player');

function ouvrirVideo(id, titre) {
  document.getElementById('video-titre').textContent = titre;
  document.getElementById('video-lien').href = `${SITE.tiktok}/video/${id}`;
  document.getElementById('video-wa').href = waLien(`Bonjour, j'ai vu votre vidéo « ${titre} ». J'aimerais un conseil.`);
  lecteur.innerHTML = `<iframe src="https://www.tiktok.com/player/v1/${id}?autoplay=1&rel=0&description=1&music_info=0" title="${echapper(titre)}" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  if (typeof modale.showModal === 'function') modale.showModal();
  else window.open(`${SITE.tiktok}/video/${id}`, '_blank', 'noopener');
}

document.addEventListener('click', (e) => {
  const bouton = e.target.closest('[data-video]');
  if (bouton) ouvrirVideo(bouton.dataset.video, bouton.dataset.titre);
});
modale.querySelector('.modal-close').addEventListener('click', () => modale.close());
modale.addEventListener('click', (e) => { if (e.target === modale) modale.close(); });
modale.addEventListener('close', () => { lecteur.innerHTML = ''; });

/* ── Menu mobile ── */
const nav = document.getElementById('nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const ouvert = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(ouvert));
  toggle.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

/* ── Apparition au défilement ── */
const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('visible'); observateur.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observateur.observe(el));

document.getElementById('annee').textContent = new Date().getFullYear();
