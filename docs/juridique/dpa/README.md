# DPA archivés — 21/10/2026

Versions publiques des **accords de traitement des données** (DPA / AVV) des sous-traitants.
Objectif : pouvoir produire le document applicable en cas de demande client, de contrôle ou de litige.

> ⚠️ **Archiver ≠ accepter.** Selon le fournisseur, l'acceptation se fait dans le compte (case à
> cocher, signature électronique, onglet légal). La colonne « À faire dans le compte » rappelle ce
> qui reste à faire côté Alexis — je ne peux pas signer à sa place.

| Fichier | Fournisseur | Rôle | Source | Version archivée | SHA-256 | À faire dans le compte |
|---|---|---|---|---|---|---|
| `resend-dpa-2026.pdf` | Resend | Emails transactionnels + prospection | https://resend.com/static/documents/resend-dpa-signed.pdf | version en ligne au 21/10/2026 | `f028a0d8…44c42ef` | Accepter/télécharger le DPA depuis le dashboard Resend |
| `hetzner-dpa-en-2026.pdf` | Hetzner Online GmbH | Hébergement (serveurs, sites, bases) | https://www.hetzner.com/AV/DPA_en.pdf | version en ligne au 21/10/2026 | `fdb71eb2…00eaefe` | Valider l'AVV dans Robot/Cloud (données personnelles) |
| `backblaze-dpa-27sep2021.pdf` | Backblaze | Sauvegardes chiffrées hors site | https://www.backblaze.com/company/policy/dpa-for-eea-eu-residents | 27/09/2021 | `3748c625…6f966dcd` | Vérifier la version en vigueur dans le compte B2 |
| `github-dpa-2026.pdf` | GitHub | Hébergement du code | https://github.com/customer-terms/github-data-protection-agreement | capture du 21/10/2026 | `338bd540…55e47d` | Accepter les customer terms (compte GitHub) |

## Autres sous-traitants (lien seulement)

| Fournisseur | Rôle | Document |
|---|---|---|
| Google Cloud (Places API) | Avis Google en direct sur un site client | [Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum) |
| Namecheap | Noms de domaine | Conditions registrar ; DPA sur demande |
| Matomo (auto-hébergé) | Statistiques | Pas de sous-traitant tiers : XixounerDev est responsable de l'instance |

## Vérifications

- [x] Documents publics téléchargés et horodatés le 21/10/2026.
- [x] Empreintes SHA-256 enregistrées (intégrité).
- [ ] Acceptation dans les comptes fournisseurs (Alexis).
- [ ] Revue annuelle : vérifier la version en vigueur et re-télécharger si besoin.

## Notes

- Les DPA couvrent les **données personnelles** ; les engagements de sécurité et de localisation
  sont dans les conditions du fournisseur. En cas de transfert hors UE, vérifier les clauses
  contractuelles types (CCT) dans le document.
- Conserver ces PDF dans le dépôt privé et dans la sauvegarde chiffrée.
