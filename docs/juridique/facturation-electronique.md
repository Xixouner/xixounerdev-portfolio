# Facturation électronique — état et prochaines étapes

> XixounerDev produit déjà des factures au format **Factur-X** : PDF/A-3 avec XML EN 16931 embarqué
> (`facture-utils.js`). C'est la première brique de la réforme française de la facturation électronique.

## Ce qui est déjà fait

- Génération automatique des factures PDF + XML Factur-X à la signature d'un devis.
- Numérotation séquentielle, mentions TVA 293 B, SIRET.
- Sauvegarde des factures et des XML.

## Ce qui manque

- [ ] **Choisir une plateforme agréée (PA / PDP)** pour l'émission et la réception via l'annuaire.
- [ ] **Se raccorder** et tester un flux complet (émission, réception, statuts de cycle de vie).
- [ ] **Archiver** les factures électroniques conformément aux obligations (durée 10 ans, format lisible).
- [ ] Vérifier les échéances applicables à l'activité (réception septembre 2026 ; émission progressive
      selon la taille — micro-entreprise : 2027, à confirmer sur le calendrier officiel).

## Rappel des échéances (à vérifier avant décision)

| Étape | Échéance indicative |
|---|---|
| Réception de factures électroniques obligatoire | septembre 2026 |
| Émission — grandes entreprises et ETI | septembre 2026 |
| Émission — PME et micro-entreprises | septembre 2027 |

## Prochaine action

Demander des devis à 2–3 plateformes agréées ( ex. : PDP généralistes) et vérifier l'inclusion de
l'API, du stockage légal et de l'annuaire. Ne pas attendre l'échéance d'émission pour se raccorder.
