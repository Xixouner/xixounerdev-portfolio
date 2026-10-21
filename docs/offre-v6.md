# Offre V6 — brouillon de la page /offres

> **Ne pas publier avant le feu vert V6.** Décision Alexis du 20/10 : l'offre cible est
> **500 € HT de création + 99 €/mois, site ET espace outils inclus**, sans option ni palier.
> L'espace outils n'est pas encore construit : publier « 99 €/mois outils inclus »
> aujourd'hui serait une promesse non tenue.

## Phrase commerciale (à répéter telle quelle)

> « Vous avez un site **ET** un outil qui gère vos échéances et vos relances. »

C'est cette phrase qui justifie les 99 €/mois face au 49 €/mois historique de Speed Elec.

## Modèle

- **Création : 500 € HT** (devis détaillé, pas de frais cachés).
- **Abonnement : 99 €/mois tout inclus** — site, hébergement, TLS, sauvegardes, monitoring, mises à jour, et **espace outils client**.
- **Aucun palier, aucune option payante.**
- **Speed Elec reste à 49 €/mois** (tarif historique, ne bouge pas).
- **Une instance par client** : base et fichiers propres, aucune donnée partagée.

## Périmètre de l'espace outils (décidé)

- Rappels d'échéances fiscales et sociales (dates publiques, notifications avant l'échéance).
- Devis et factures : création, envoi, suivi payé/impayé, relance automatique.
- Suivi de trésorerie lisible, alerte avant découvert.
- Carnet de clients et d'interventions, historique par client.
- Rappels de rendez-vous et relances de devis sans réponse.
- Tableau de bord unique : ce qui est fait, ce qui arrive, ce qui coince.

**Hors périmètre (décision Alexis) :** aucun calcul comptable ou fiscal (TVA, liasse,
simulateur de charges). L'outil **rappelle et organise**, il ne calcule pas.

## Conditions avant publication

- [ ] Garde-fou V6 respecté : 2 jours consécutifs de suite verte (145/145), feu vert au plus tôt le 22/10.
- [ ] Espace outils déployé et testé sur au moins 1 client pilote (instance dédiée).
- [ ] Page /offres réécrite avec la phrase commerciale, le périmètre honnête et la FAQ tarifs.
- [ ] Home, layout (JSON-LD/Offer), meta descriptions et FAQ mis à jour (plus aucune mention des 49 €/mois hors Speed Elec).
- [ ] Ancienne grille (hébergement 15 €, monitoring 9 €, AuditBot) retirée ou explicitement archivée.
- [ ] Formulaire de contact : champ « budget » aligné sur 500 € + 99 €.
- [ ] Tests `npm test`, `npm run build`, déploiement vérifié (HTTP 200 + contenu).

## Après publication

- [ ] Mettre à jour le devis type (D2026-0005) et le CRM (champ offre).
- [ ] Vérifier la cohérence avec les emails de prospection (ne plus annoncer 49 €/mois).
