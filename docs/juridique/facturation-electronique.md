# Facturation électronique — état et prochaines étapes

## Où on en est (21/10/2026)

- XixounerDev produit déjà des factures **Factur-X** : PDF/A-3 avec XML EN 16931 embarqué
  (`facture-utils.js`), XML sauvegardé à côté du PDF.
- Le compte de banque/comptabilité est chez **Indy**. Indy est une **Plateforme Agréée (PA, ex-PDP)**
  immatriculée par la DGFiP le **09/01/2026** (parmi les 73 premières plateformes sur 149) :
  périmètre **émission + réception + e-reporting**, accessible aux indépendants, en freemium.
  Sources : [fiche Indy — Cabinet Digital](https://www.cabinetdigital.fr/plateformes-dematerialisation/indy/),
  [page Indy facturation électronique](https://www.indy.fr/facturation-electronique/).

## Échéances

| Étape | Échéance |
|---|---|
| Réception de factures électroniques obligatoire | **depuis septembre 2026** → à activer sans attendre |
| Émission — grandes entreprises et ETI | septembre 2026 |
| Émission — PME, TPE et micro-entreprises | **1er septembre 2027** |

Le calendrier officiel doit être revérifié avant décision (les dates ont déjà bougé une fois).
Source : [Indy — guide facturation électronique](https://www.indy.fr/guide/facturation/electronique/).

## À faire dans Indy (action Alexis)

1. Se connecter à Indy → section **Facturation électronique**.
2. Vérifier les informations entreprise : SIREN `999699101`, adresse **Clermont-Ferrand**, email.
3. **Activer la réception** : désigner Indy comme plateforme agréée (mandat) et récupérer l'adresse
   de réception Annuaire. C'est l'urgence : la réception est obligatoire depuis septembre 2026.
4. **Tester une réception** : demander une facture électronique de test (Indy ou un fournisseur
   raccordé) et vérifier qu'elle arrive bien dans Indy avec son XML.
5. **Émission** : vérifier comment déposer les Factur-X produits par `business-server.js` :
   import manuel du PDF/XML dans Indy, ou API si disponible. À défaut, émettre les factures
   directement dans Indy et conserver le PDF interne comme copie de travail.
6. Configurer l'**e-reporting** si des prestations B2C ou internationales sont facturées.
7. Archiver les factures électroniques **10 ans** (Indy + copie locale).

## Questions à poser au support Indy

- Existe-t-il une **API** pour déposer une facture Factur-X (PDF + XML) et récupérer les statuts ?
- Quel est le format d'import accepté (Factur-X PDF/A-3, XML seul) et les limites ?
- Comment sont gérés les **acomptes**, les **avoirs** et les devis signés ?
- L'adresse de réception Annuaire est-elle une adresse email dédiée ou un identifiant SIREN ?
- Le plan gratuit couvre-t-il l'émission et la réception, ou seulement la facturation simple ?
- Comment prouver la conformité en cas de contrôle (journaux, pistes d'audit) ?

## Décision technique à prendre

Deux options, à trancher après réponse du support :

1. **Indy plateforme d'émission** : les factures sont créées dans Indy ; le PDF interne reste une
   copie. Simple, mais double saisie possible.
2. **Factur-X interne + dépôt via Indy** : continuer à générer dans `business-server.js` et déposer
   le fichier dans Indy (import/API). Moins de rupture, mais dépend de l'API/import.

Tant que l'émission n'est pas raccordée, **ne pas retarder la réception** : c'est l'obligation
déjà en vigueur.
