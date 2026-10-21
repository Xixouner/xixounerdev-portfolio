# Checklist conformité — XixounerDev

> État au 21/10/2026. Documents « vivants », à relire par un juriste avant tout contentieux.
> Les CGV publiées sur https://xixouner.com/cgv sont la version opposable (v1.0 du 21/10/2026).

## Fait

- [x] **CGV v1.0 publiées** : `/cgv` (16 articles : commande, prix, paiement, PI, hébergement/réversibilité, données, responsabilité, résiliation, litiges).
- [x] **Mentions légales corrigées** : la mention « assurance RC pro souscrite » (fausse) est retirée ;
      lien CGV ajouté ; médiation cadrée (B2B / B2C avec coordonnées avant commande).
- [x] **Politique de confidentialité** existante (`/confidentialite`), Matomo sans cookies.
- [x] **Factur-X** : génération PDF/A-3 + XML EN 16931 déjà en place.

## À faire — priorités

### P0 (avant nouveau client à enjeu)
- [ ] **RC pro** : souscrire (voir `rc-pro.md`). Estimation 15–40 €/mois. En micro-BIC la prime n'est
      pas déductible, mais le coût d'un sinistre l'est encore moins.
- [x] **Adresse harmonisée (21/10/2026)** : **Clermont-Ferrand** sur le site, dans les CGV et dans
      les données de facturation (`business-xixouner/data.json`). Les anciennes factures gardent leur
      adresse d'origine (documents historiques, ne pas modifier).
- [ ] **Téléphone de contact** : absente des pages légales ; ajouter si on veut rassurer (facultatif).

### Non applicable — prestations B2B uniquement (décision Alexis 21/10/2026)
XixounerDev ne vend pas aux consommateurs : pas de médiateur de la consommation ni de droit de
rétractation à prévoir. Les CGV et les mentions légales le précisent explicitement (vente réservée
aux professionnels).

### P1 (données personnelles)
- [ ] **Registre des traitements** : formaliser à partir de `registre-traitements.md` (brouillon prêt).
- [ ] **DPA / sous-traitants** : archiver les DPA de Resend, Hetzner, Backblaze (action Alexis :
      accès aux comptes fournisseurs) ; vérifier les transferts hors UE (CCT). Liste dans `sous-traitants.md`.
- [ ] **Durées de conservation** : contact 3 ans, prospection 3 ans, facturation 10 ans, logs 6–12 mois.
- [ ] **Procédure violation de données** : qui prévient la CNIL sous 72 h, modèle de notification.

### P2 (facturation électronique)
- [ ] **Choisir une plateforme agréée (PA/PDP)** avant l'échéance d'émission applicable.
      Factur-X est déjà produit ; il reste à raccorder la plateforme et à tester un flux complet.
- [ ] Vérifier les mentions obligatoires des factures (SIRET, adresse, TVA 293 B, numéro, dates).

### P2 (produit / contrats)
- [ ] **CGU de l'espace outils** (V6) : à écrire **quand l'espace outils existera** (rien à publier
      aujourd'hui, le produit n'est pas encore construit).
- [ ] **Clause CGV dans les devis** : ajouter la référence + lien CGV dans le devis envoyé et sur la
      page de signature électronique (acceptation explicite).
- [ ] **Réversibilité** : préciser au devis le format d'export (HTML/MD/images/JSON/CSV) et le délai.
- [ ] **Assurance cyber** : option à évaluer (fuite de données, rançongiciel, frais de notification).

## Calendrier réglementaire à surveiller

- **Facturation électronique** : réception obligatoire pour toutes les entreprises à partir de
  septembre 2026 ; émission progressive (grandes entreprises/ETI en 2026, PME/micro en 2027).
  Vérifier la version en vigueur du calendrier officiel avant de s'engager.
- **RGPD** : revue annuelle du registre et des sous-traitants.

## Documents de référence

| Sujet | Fichier |
|---|---|
| CGV publiées | `src/lib/legal-cgv.ts` + page `/cgv` |
| Registre des traitements (brouillon) | `docs/juridique/registre-traitements.md` |
| Sous-traitants | `docs/juridique/sous-traitants.md` |
| RC pro | `docs/juridique/rc-pro.md` |
| Facturation électronique | `docs/juridique/facturation-electronique.md` |
