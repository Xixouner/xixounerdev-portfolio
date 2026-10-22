# Registre des demandes RGPD

> Traçabilité des demandes d'accès, d'opposition et d'effacement. Une entrée par demande.
> Les emails sont **masqués** dans ce registre ; la preuve complète (email + attestation) est
> archivée dans `crm-xixouner/rgpd/` (dossier privé, hors dépôt).

| Date | Demandeur (masqué) | Type de demande | Référence | Actions effectuées | Preuve | Statut |
|---|---|---|---|---|---|---|
| 22/10/2026 | `s***@gmail.com` | Opposition + effacement (art. 17 et 21 RGPD) | `RGPD-20261022-484` | Email vidé dans la fiche, fiche marquée `rgpd`, adresse inscrite dans `no-contact.json`, historique de contact neutralisé, journal append-only complété | `rgpd/attestation-rgpd-RGPD-20261022-484-…pdf` + JSON | Traité le 22/10/2026 |

## Procédure pour une nouvelle demande

1. Répondre au demandeur sous 24 h (accusé de réception + confirmation).
2. Lancer la suppression :
   `CRM_ALLOW_PROD_WRITE=1 node -e "require('/home/deploy/crm-xixouner/rgpd-suppression.js').executerSuppression('<email>', {expediteur, objet, mailRecu, dateMail})"`
3. Vérifier : aucun email actif restant hors journal/attestation, `estExclu()` vrai, `estCibleProspection()` faux.
4. Resynchroniser le miroir SQLite (`resyncNow()`), vérifier la comparaison JSON ↔ SQLite.
5. Ajouter une ligne dans ce registre.
6. Conserver l'attestation PDF dans `crm-xixouner/rgpd/` (rétention : durée de la preuve, accès restreint).

## Rappels

- La demande d'opposition **n'a pas à être motivée** ; elle est traitée immédiatement.
- Ne jamais recontacter une personne après opposition (liste `no-contact.json` prioritaire).
- En cas de doute sur une demande d'accès (art. 15), fournir les données détenues sur la personne
  sous 1 mois, sauf exception légale.
