# Conformité prospection — audit, filtrage et plan (21/10/2026)

> Prestations **B2B uniquement**. Prospection par email vers des professionnels sur la base de
> l'**intérêt légitime** (RGPD, voir `lia-prospection.md`) et du régime de la prospection
> électronique (art. L.34-5 CPCE : information et droit d'opposition). Ce document n'est pas un
> avis juridique.

## Audit de la base (lecture seule, 21/10/2026)

| Indicateur | Valeur |
|---|---|
| Fiches prospects (actifs + archive) | **10 729** |
| Fiches avec email | **10 470** |
| Adresses grand public / personnelles (gmail, orange, free, hotmail…) | **5 058 (48,3 %)** |
| Désabonnés | 238 |
| Emails invalides marqués (adresses purgées le 21/10) | 259 |
| Prospects ayant répondu | 6 |
| Lignes de journal | 70 888 |
| Envois sur 30 derniers jours | **36 770** (50 137 sur 90 j) |
| Oppositions/désabos journalisés | 325 |
| Campagnes (fichiers de campagne) | 14 (dont 9 closes, 0 en pause) |

Outil reproductible : `crm-xixouner/audit-prospection-conformite.js` (lecture seule, `--json`).

## Décision et mise en œuvre du filtrage (21/10/2026)

**Décision Alexis : le filtrage des adresses grand public est validé.** Mise en œuvre technique :

- `email-utils.js` centralise `DOMAINES_GRAND_PUBLIC`, `estAdresseGrandPublic()` et
  `estCibleProspection()` (email délivrable **et** adresse professionnelle).
- `envoyer-campagne.js` : les cibles passent par `estCibleProspection()`.
- `relance-eligibilite.js` : une adresse grand public est un motif de blocage de relance.
- `resplit-ab.js` : le re-split ne garde que des cibles professionnelles.
- `envoyer-mail-prospect.js` (envoi manuel) : refuse une adresse grand public, sauf exception
  explicite `FORCE_GRAND_PUBLIC=1`.
- `rgpd-suppression.js` : la liste des domaines grand public vient du même module (LOI UNIQUE).
- Tests : `test-email-validation-unique.js` vérifie le comportement **et** que chaque chemin
  d'envoi applique bien le filtre (45 vérifications).

**Effet** : plus aucun envoi de prospection vers une adresse grand public, quel que soit le chemin.
La base éligible passe d'environ 10 729 à **~5 647** fiches — c'est un gain de qualité, pas une
perte : ce sont les seules adresses réellement professionnelles.

## Configuration email vérifiée (DNS, 21/10/2026)

| Élément | Valeur constatée | État |
|---|---|---|
| SPF racine | `v=spf1 ip4:65.108.90.46 include:spf.sendinblue.com include:amazonses.com -all` | ✅ présent |
| SPF sous-domaine d'envoi | `send.xixouner.com` → `v=spf1 include:amazonses.com ~all` | ✅ (standard Resend/SES) |
| MX sous-domaine d'envoi | `feedback-smtp.eu-west-1.amazonses.com` | ✅ |
| DKIM | `resend._domainkey.xixouner.com` présent | ✅ |
| DMARC | `v=DMARC1; p=none; rua=mailto:contact@xixouner.com; fo=1` | ⚠️ à durcir |

**Recommandations DNS :**
1. Passer DMARC à `p=quarantine` (puis `p=reject`) après 2 à 4 semaines de surveillance sans échec.
2. Retirer `include:spf.sendinblue.com` si Brevo n'est plus utilisé (réduit la surface SPF).
3. Vérifier l'alignement From/Return-Path et l'authentification réelle d'un email envoyé
   (en-têtes `Authentication-Results`).
4. Revue annuelle des enregistrements.

## Ce qui est déjà en place (à conserver)

- **Footer de désinscription visible** dans les emails (obligation L.34-5 CPCE), lien `/desabo/<id>`.
- **Liste noire `no-contact.json`** : adresse exacte pour les domaines grand public, domaine entier
  pour les vrais domaines d'entreprise ; workflow RGPD d'effacement avec attestation PDF.
- **Journal append-only** de tous les envois et événements (70 888 lignes, traçabilité).
- **Campagnes avec marqueurs `.paused` / `.closed`** : aucune relance sur un chunk en pause.
- **Prospection actuellement à l'arrêt** (0 envoi sur 30 jours).

## Plan d'action priorisé

| Priorité | Action | Statut |
|---|---|---|
| **P0** | Audit de base reproductible (`audit-prospection-conformite.js`) | ✅ fait |
| **P0** | Filtrage des adresses grand public avant reprise | ✅ implémenté et testé |
| **P0** | Analyse d'intérêt légitime (LIA) | ✅ validée par Alexis le 21/10 (`lia-prospection.md`) |
| **P1** | SPF/DKIM/DMARC vérifiés ; plan de durcissement prêt (`dmarc.md`) | ✅ vérifié / ⏳ application DNS |
| **P1** | DPA archivés + guide d'acceptation (`dpa/ACCEPTATION.md`) | ✅ archivés / ⏳ comptes |
| **P2** | ESP marketing dédié si volume > quelques centaines/mois | ⏳ à arbitrer |
| **P2** | Purge RGPD (invalides + 3 ans) | ✅ appliquée le 21/10 : 258 adresses retirées, 0 fiche > 3 ans (voir `purge-prospection-20261021.md`) |

## Pause TOTALE du cycle (22/10/2026, décision Alexis)

Le scraping et tout le cycle de prospection sont **arrêtés** :

| Arrêté | Comment |
|---|---|
| Scraping massif et rotation (`rotation-nuit.sh`, `campagne-nuit.sh`, `auto-enchainement.sh`) | crons commentés + garde-fou dans les scripts |
| Pipeline post-scraping (`pipeline-auto.sh`) | garde-fou |
| Envoi des campagnes (`envoi-attente.sh`) | cron commenté + garde-fou |
| Relances automatiques (`relance-auto.js`) | cron commenté + garde-fou |
| Maintenance de la base (`nettoyer-prospects.js`) et santé relances (`check-relance-health.js`) | crons commentés |

**Interrupteur global** : le fichier `crm-xixouner/PROSPECTION-EN-PAUSE` bloque toute exécution des
points d'entrée ci-dessus, même lancée à la main. Les copies de test (bacs à sable) ne sont pas
concernées.

**Ce qui continue** : services web, webhooks Resend (désabo, bounces, réponses), synchronisation du
registre emails, surveillance, sauvegardes, tests, facturation, monitoring.

**Reprise** : supprimer `PROSPECTION-EN-PAUSE`, puis restaurer le crontab sauvegardé dans
`backups/code-20261021-191619/pause-prospection-*/crontab-avant-pause.txt`.

## Incident du 22/10/2026 — plainte et pause de la prospection

Une personne (`s***@gmail.com`) a demandé l'arrêt des envois et la suppression de son adresse,
après **3 contacts** (email du 10/10, relances des 13/10 et 21/10). Traitement immédiat :

- suppression RGPD exécutée (**référence `RGPD-20261022-484`**) : email vidé de la fiche, adresse
  inscrite dans `no-contact.json`, historique neutralisé, attestation PDF générée ;
- vérifications : `estExclu()` vrai, `estCibleProspection()` faux, relances bloquées ;
- **prospection mise en pause le 22/10/2026 à 07:06** : crons `relance-auto.js --send` et
  `envoi-attente.sh` commentés (sauvegarde du crontab dans
  `backups/code-20261021-191619/pause-prospection-20261022-070652/`). Réactivation après validation.

L'audit a aussi révélé que le volume était **très supérieur à ce qui était affiché** : le champ
`date` du journal n'existait pas (c'est `ts`), donc l'outil annonçait « 0 envoi » alors que
**36 770 emails/relances ont été envoyés sur 30 jours** (50 137 sur 90 jours). L'outil est corrigé ;
la prospection reste en pause jusqu'à une décision explicite.

## Purge RGPD appliquée (21/10/2026)

Dry-run puis application : **258 adresses invalides retirées** (19 actives + 239 archivées),
aucune fiche supprimée (0 fiche > 3 ans), historique conservé, sauvegarde préalable dans
`crm-xixouner/backups/avant-purge-rgpd-2026-10-21T20-42-45-110Z/`. Intégrité et comparaison
JSON ↔ SQLite vérifiées après coup. Détail : `purge-prospection-20261021.md`.

## Décisions prises le 21/10/2026

- Prestations **B2B uniquement** (pas de médiateur, pas de rétractation B2C).
- **Filtrage grand public validé** et appliqué à tous les chemins d'envoi.
- Rédaction du **LIA** et vérification DNS ; DPA archivés.

## Outil

```sh
cd /home/deploy/crm-xixouner && node audit-prospection-conformite.js        # résumé lisible
cd /home/deploy/crm-xixouner && node audit-prospection-conformite.js --json # JSON
```

Lecture seule : ne modifie ni la base, ni le journal, ni les campagnes.
