# Conformité prospection — audit et plan (21/10/2026)

> Prestations **B2B uniquement**. La prospection par email vers des professionnels reste possible
> sur la base de l'**intérêt légitime** (RGPD) et du régime de la prospection électronique
> (art. L.34-5 CPCE : information et droit d'opposition). Ce document n'est pas un avis juridique.

## Audit de la base (lecture seule, 21/10/2026)

| Indicateur | Valeur |
|---|---|
| Fiches prospects (actifs + archive) | **10 729** |
| Fiches avec email | 10 729 |
| Adresses grand public / personnelles (gmail, orange, free, hotmail…) | **5 082 (47,4 %)** |
| Désabonnés | 238 |
| Emails invalides | 258 |
| Prospects ayant répondu | 6 |
| Lignes de journal | 70 888 |
| Envois sur 30 derniers jours | **0 (prospection en pause)** |
| Oppositions/désabos journalisés | 325 |
| Campagnes (fichiers de campagne) | 14 (dont 9 closes, 0 en pause) |

**Lecture :** la pause est le bon moment pour requalifier la base. Près d'une adresse sur deux est
une adresse grand public : contacter ces boîtes en B2B est à la fois peu qualifié (ce n'est pas
l'adresse de l'entreprise) et risqué pour la délivrabilité et les plaintes.

## Ce qui est déjà en place (à conserver)

- **Footer de désinscription visible** dans les emails (obligation L.34-5 CPCE), lien `/desabo/<id>`.
- **Liste noire `no-contact.json`** : adresse exacte pour les domaines grand public, domaine entier
  pour les vrais domaines d'entreprise ; workflow RGPD d'effacement avec attestation PDF.
- **Journal append-only** de tous les envois et événements (70 888 lignes, traçabilité).
- **Campagnes avec marqueurs `.paused` / `.closed`** : aucune relance sur un chunk en pause.
- **Prospection actuellement à l'arrêt** (0 envoi sur 30 jours).

## Risques identifiés

1. **Volume et ciblage** : 47 % d'adresses grand public ; les contacter ressemble à du B2C déguisé.
2. **Base légale non documentée** : l'intérêt légitime doit être formalisé (test de mise en balance).
3. **Réputation d'envoi** : Resend est aujourd'hui utilisé pour le transactionnel et la prospection ;
   un pic de plaintes peut impacter tous les emails (devis, formulaires clients).
4. **Sources** : les données viennent de pages professionnelles publiques ; ne jamais enrichir avec
   des emails personnels ou des données sensibles.
5. **Conservation** : pas de règle de purge automatique au-delà de 3 ans sans contact.

## Politique cible (à valider par Alexis avant mise en œuvre)

1. **Cibler les adresses professionnelles uniquement** : exclure les domaines grand public et les
   adresses manifestement personnelles. La base éligible tombe à environ **5 647** fiches ;
   c'est un choix de qualité, pas une perte.
2. **Documenter l'intérêt légitime** : finalité (proposer un site/outil à des artisans), catégories
   de données, minimisation, attentes raisonnables, test de balance, durée 3 ans.
3. **Opt-out immédiat** : lien visible conservé, opposition traitée sous 24 h, `no-contact.json`
   prioritaire, jamais de relance après opposition.
4. **Séparer marketing et transactionnel** : domaine/ESP dédié à la prospection si l'envoi reprend,
   avec SPF/DKIM/DMARC et montée en volume progressive.
5. **Contenu honnête et identifiable** : identité, adresse, objet clair, pas de fausse urgence.
6. **Purge et conservation** : suppression des bounces/invalides, purge à 3 ans après le dernier contact.
7. **Documentation** : consigner les sources, les campagnes, les volumes et les oppositions.

## Plan d'action priorisé

| Priorité | Action | Statut |
|---|---|---|
| **P0** | Audit de base reproductible (`audit-prospection-conformite.js`) | ✅ fait |
| **P0** | Décider du filtrage des adresses grand public avant toute reprise | ⏳ à valider par Alexis |
| **P1** | Rédiger le document d'intérêt légitime (LIA) et l'archiver | ⏳ à faire |
| **P1** | Vérifier SPF/DKIM/DMARC du domaine d'envoi | ⏳ à faire |
| **P2** | ESP marketing dédié si volume > quelques centaines/mois | ⏳ à arbitrer |
| **P2** | Purge automatique à 3 ans + suppression des invalides | ⏳ à faire |

## Outil

```sh
cd /home/deploy/crm-xixouner && node audit-prospection-conformite.js        # résumé lisible
cd /home/deploy/crm-xixouner && node audit-prospection-conformite.js --json # JSON
```

Lecture seule : ne modifie ni la base, ni le journal, ni les campagnes.
