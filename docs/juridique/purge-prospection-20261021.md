# Purge RGPD de la prospection — rapport du 21/10/2026

> Décision Alexis : filtrage grand public validé ; purge réelle autorisée après dry-run.
> Script : `crm-xixouner/purge-prospection-rgpd.js` (dry-run par défaut, `--apply` explicite).

## Dry-run (avant purge)

| Catégorie | Actifs | Archive |
|---|---|---|
| Adresses marquées `emailInvalide` | 19 | 239 |
| Fiches sans activité > 3 ans | 0 | 0 |
| Total fiches | 9 253 | 1 476 |

Aucune suppression de fiche prévue ; aucune fiche > 3 ans.

## Application

- **258 adresses invalides retirées** (19 actives + 239 archivées) : champ `email` vidé,
  `emailInvalide` conservé, date de purge inscrite (`emailPurgeLe`).
- Aucune fiche supprimée ; historique conservé.
- Sauvegarde avant purge : `crm-xixouner/backups/avant-purge-rgpd-2026-10-21T20-42-45-110Z/`
  (`prospects-actifs.json` + `prospects-archive.json`).
- Entrée ajoutée au journal append-only (traçabilité).

## Vérifications après purge

- `crm-data.js` : **intégrité OK**, journal cohérent, 9 chunks clos cohérents.
- Comparaison JSON ↔ SQLite : **aucune perte** (prospects, événements, campagnes, emails).
- Audit prospection : 10 729 fiches, **10 471 avec email**, 5 059 adresses grand public (48,3 %),
  238 désabonnés, 258 invalides marqués, 0 envoi sur 30 j.
- Les désabonnés restent protégés par `no-contact.json` (370 entrées) ; leurs fiches gardent
  l'historique, l'email n'est plus dans la fiche.

## Effet

- Les 258 adresses invalides ne peuvent plus être utilisées par erreur (elles étaient déjà bloquées
  par `emailInvalide`, mais la donnée n'est plus conservée).
- Les fiches restent exploitables pour les statistiques et l'historique.
