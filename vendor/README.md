# Bibliothèques tierces

Fichiers copiés tels quels, sans modification, pour que le site n'ait besoin d'aucun CDN
(la politique de sécurité n'autorise que les scripts de ce dépôt).

| Fichier | Version | Taille | Origine |
|---|---|---|---|
| `gsap.min.js` | 3.15.1 | 72 Ko | paquet npm `gsap@3.15.1`, `dist/gsap.min.js`, via jsDelivr |
| `ScrollTrigger.min.js` | 3.15.1 | 44 Ko | paquet npm `gsap@3.15.1`, `dist/ScrollTrigger.min.js`, via jsDelivr |

Empreintes vérifiées le 24/11/2026 contre celles publiées par jsDelivr pour le paquet npm.

GSAP : https://gsap.com — licence « Standard No Charge » : https://gsap.com/standard-license

Pour mettre à jour : relancer `ajouter-gsap.ps1` du skill `site-client-pierre` avec `-Version` (ou sans, pour
la dernière version stable), puis noter ici la date de vérification.
