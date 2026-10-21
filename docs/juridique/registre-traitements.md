# Registre des traitements (brouillon)

> Article 30 RGPD. **Version 1.0 — 21/10/2026.** Responsable : Alexis Trechot (XixounerDev),
> SIRET 999 699 101 00013, Clermont-Ferrand. Contact : contact@xixouner.com.
> Les DPA des sous-traitants sont archivés dans `dpa/` ; la procédure en cas de violation est
> dans `procedure-violation-donnees.md`.

| # | Traitement | Finalité | Base légale | Données | Personnes | Destinataires / sous-traitants | Conservation | Mesures |
|---|---|---|---|---|---|---|---|---|
| 1 | Formulaire de contact du site | Répondre à une demande de devis | Consentement + intérêt légitime (réponse) | Nom, email, message, type de projet, budget | Prospects | Resend (emails), hébergeur Hetzner | 3 ans après le dernier contact | TLS, honeypot, rate limiting, pas de revente |
| 2 | Prospection B2B par email | Faire connaître l'offre à des professionnels | Intérêt légitime (art. 6.1.f RGPD), cadre B2B | Nom, commerce, email professionnel, ville, campagne | Prospects professionnels | Resend, CRM interne | 3 ans après le dernier contact ; suppression immédiate sur opposition | Opt-out dans chaque email, liste no-contact, bounces supprimés, journal des envois |
| 3 | Gestion des clients | Exécution des prestations, support | Exécution du contrat | Nom, coordonnées, projet, échanges | Clients | Hetzner, Resend, outils internes | Durée du contrat + 3 ans | Accès restreint, sauvegardes chiffrées |
| 4 | Facturation et comptabilité | Obligations légales et fiscales | Obligation légale (art. 6.1.c) | Nom, adresse, SIREN/SIRET, montants, factures | Clients | Outil de facturation interne, comptable le cas échéant | 10 ans (art. L.123-22 C. com.) | Factur-X, sauvegardes |
| 5 | Hébergement et maintenance des sites clients | Fournir le service | Exécution du contrat / sous-traitance | Contenus du site, données visiteurs (formulaires, stats) | Visiteurs, clients | Hetzner, Matomo auto-hébergé | Durée du contrat + 30 jours (réversibilité) | Instance isolée par client, TLS, sauvegardes, accès restreint |
| 6 | Statistiques Matomo | Mesurer l'audience des sites | Intérêt légitime | Pages vues, clics, IP tronquée/anonymisée, user-agent | Visiteurs | Matomo auto-hébergé (aucun tiers) | 13 mois | Sans cookies, filtrage robots, anonymisation |
| 7 | Emails transactionnels des sites (formulaires, avis) | Livrer les demandes aux clients | Exécution du contrat | Nom, email, message | Visiteurs | Resend | 3 ans max | TLS, rate limiting, anti-spam |
| 8 | Avis Google affichés sur un site client | Preuve sociale | Intérêt légitime du client | Note, texte, auteur public | Auteurs d'avis publics | Google Places API, cache serveur | Cache 12 h ; pas de stockage durable | API appelée avec quota, cache, fallback statique |

## Points à vérifier

- DPA signés/archivés avec Resend, Hetzner, Backblaze (voir `sous-traitants.md`).
- Transferts hors UE : vérifier les clauses contractuelles types et la localisation.
- Procédure de violation de données : notification CNIL sous 72 h + information des personnes si risque élevé.
- Registre à réviser une fois par an et à chaque nouveau traitement (ex. espace outils V6).

## Validation

- [x] Registre rédigé le 21/10/2026.
- [ ] Validé formellement par Alexis (date : ________).
- [ ] Revue annuelle ou à chaque nouveau traitement.

## Registre des violations de données

| Date | Nature | Données/personnes | Risque | CNIL (date) | Personnes informées | Mesures | Clôturé |
|---|---|---|---|---|---|---|---|
| — | Aucune violation connue à ce jour | — | — | — | — | — | — |
