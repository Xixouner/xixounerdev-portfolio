# Facturation électronique — état et prochaines étapes

## Où on en est (21/10/2026)

- XixounerDev produit déjà des factures **Factur-X** : PDF/A-3 avec XML EN 16931 embarqué
  (`facture-utils.js`), XML sauvegardé à côté du PDF.
- Le compte de banque/comptabilité est chez **Indy**, qui est une **Plateforme Agréée (PA, ex-PDP)**
  immatriculée par la DGFiP le **09/01/2026** (parmi les 73 premières sur 149) :
  périmètre **émission + réception + e-reporting**, freemium.
  Sources : [fiche Indy — Cabinet Digital](https://www.cabinetdigital.fr/plateformes-dematerialisation/indy/),
  [page Indy facturation électronique](https://www.indy.fr/facturation-electronique/).
- ✅ **La réception est activée dans Indy (21/10/2026, Alexis).** C'était l'urgence : la réception
  des factures électroniques est obligatoire depuis septembre 2026.

## Reste à faire — émission

| Étape | Échéance | Statut |
|---|---|---|
| Réception des factures électroniques | depuis septembre 2026 | ✅ activée dans Indy |
| Raccordement de l'**émission** (Factur-X) | avant le 1er septembre 2027 | ⏳ à préparer |

### Questions à poser au support Indy

- Existe-t-il une **API** pour déposer une facture Factur-X (PDF + XML) et récupérer les statuts ?
- Quel est le format d'import accepté (Factur-X PDF/A-3, XML seul) et les limites ?
- Comment sont gérés les **acomptes**, les **avoirs** et les devis signés ?
- L'adresse de réception Annuaire est-elle une adresse email dédiée ou un identifiant SIREN ?
- Le plan gratuit couvre-t-il l'émission et la réception, ou seulement la facturation simple ?
- Comment prouver la conformité en cas de contrôle (journaux, pistes d'audit) ?

### Deux options techniques (à trancher après réponse du support)

1. **Indy plateforme d'émission** : les factures sont créées dans Indy ; le PDF interne reste une
   copie. Simple, mais double saisie possible.
2. **Factur-X interne + dépôt via Indy** : continuer à générer dans `business-server.js` et déposer
   le fichier dans Indy (import/API). Moins de rupture, mais dépend de l'API/import.

### Autres points

- Configurer l'**e-reporting** si des prestations B2C ou internationales sont facturées
  (aujourd'hui B2B uniquement).
- Archiver les factures électroniques **10 ans** (Indy + copie locale).
- Vérifier les mentions obligatoires (SIRET, adresse Clermont-Ferrand, TVA 293 B, numéros, dates).
- Le calendrier officiel doit être revérifié avant décision (les dates ont déjà bougé une fois).
