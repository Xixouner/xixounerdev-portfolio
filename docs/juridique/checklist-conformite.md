# Checklist conformité — XixounerDev

> État au 21/10/2026 (soir). Documents « vivants », à relire par un juriste avant tout contentieux.
> CGV opposables : https://xixouner.com/cgv — **v1.1** (B2B uniquement).

## Fait

- [x] **CGV v1.1 publiées** : `/cgv` (16 articles : commande, prix, paiement, PI, hébergement/réversibilité,
      données, responsabilité, résiliation, litiges). Prestations **réservées aux professionnels**.
- [x] **Mentions légales corrigées** : fausse mention « RC pro souscrite » retirée, lien CGV, adresse
      **Clermont-Ferrand**, aucune mention de médiateur (B2B uniquement).
- [x] **CGV acceptées dans le devis** : email + page de signature + confirmation + PDF du devis.
- [x] **Politique de confidentialité** existante (`/confidentialite`), Matomo sans cookies.
- [x] **Factur-X** : génération PDF/A-3 + XML EN 16931 déjà en place.
- [x] **Registre RGPD (brouillon)** : `registre-traitements.md`.
- [x] **Audit prospection** : chiffres et plan dans `prospection-conformite.md`
      + outil `audit-prospection-conformite.js` (lecture seule).
- [x] **Filtrage grand public** validé par Alexis et **implémenté** dans tous les chemins d'envoi
      (campagnes, relances, re-split, envois manuels), tests dédiés (45 vérifications).
- [x] **Analyse d'intérêt légitime (LIA)** rédigée : `lia-prospection.md`.
- [x] **SPF/DKIM/DMARC vérifiés** : SPF racine + sous-domaine, DKIM Resend, DMARC `p=none` à durcir.
- [x] **DPA archivés** (versions publiques) : dossier `dpa/` + empreintes SHA-256.
- [x] **Réception Indy activée** (21/10/2026).

## À faire — priorités

### P0 (avant nouveau client à enjeu)
- [ ] **RC pro** : souscription prévue le **22/10/2026** (Alexis). Voir `rc-pro.md`
      (garanties à exiger, questions aux assureurs, budget 15–40 €/mois).
- [ ] **Téléphone de contact** : absent des pages légales ; ajouter si souhaité (facultatif).

### P1 (données personnelles & prospection)
- [ ] **Registre des traitements** : formaliser le brouillon et le dater.
- [x] **DPA archivés** (versions publiques) — [ ] **acceptation dans les comptes fournisseurs**
      (action Alexis : Resend, Hetzner, Backblaze, GitHub).
- [ ] **Durées de conservation** : contact 3 ans, prospection 3 ans, facturation 10 ans, logs 6–12 mois.
- [ ] **Procédure violation de données** : qui prévient la CNIL sous 72 h, modèle de notification.
- [x] **LIA** rédigée ; [ ] validation formelle par Alexis (date à signer).
- [ ] **DMARC** : passer de `p=none` à `p=quarantine` après 2–4 semaines de surveillance.
- [ ] **Purge** : supprimer les invalides/bounces et purger à 3 ans.

### Facturation électronique — Indy
- [x] **Plateforme identifiée** : Indy, PA immatriculée DGFiP le 09/01/2026 (émission + réception +
      e-reporting, freemium).
- [x] **Réception activée** dans Indy (obligation en vigueur depuis septembre 2026).
- [ ] **Raccordement émission** avant le 1er septembre 2027 : import Factur-X ou API Indy
      (questions au support dans `facturation-electronique.md`).
- [ ] **Mentions obligatoires** des factures : SIRET, adresse Clermont-Ferrand, TVA 293 B, numéros, dates.

### Produit / contrats
- [ ] **CGU de l'espace outils** (V6) : à écrire **quand l'espace outils existera**.
- [ ] **Réversibilité** : préciser au devis le format d'export (HTML/MD/images/JSON/CSV) et le délai.
- [ ] **Assurance cyber** : option à évaluer (fuite de données, rançongiciel, frais de notification).

## Calendrier réglementaire à surveiller

- **Facturation électronique** : réception obligatoire depuis septembre 2026 ; émission PME/TPE/micro
  au 1er septembre 2027 (calendrier officiel à revérifier).
- **RGPD** : revue annuelle du registre, des sous-traitants, du LIA et des durées de conservation.

## Documents de référence

| Sujet | Fichier |
|---|---|
| CGV publiées | `src/lib/legal-cgv.ts` + page `/cgv` |
| Registre des traitements (brouillon) | `docs/juridique/registre-traitements.md` |
| Sous-traitants | `docs/juridique/sous-traitants.md` |
| DPA archivés | `docs/juridique/dpa/` (index `README.md`) |
| RC pro | `docs/juridique/rc-pro.md` |
| Facturation électronique | `docs/juridique/facturation-electronique.md` |
| Prospection (audit + plan) | `docs/juridique/prospection-conformite.md` |
| LIA prospection | `docs/juridique/lia-prospection.md` |
