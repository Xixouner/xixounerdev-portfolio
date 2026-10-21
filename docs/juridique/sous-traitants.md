# Sous-traitants et services tiers

> Liste des destinataires de données utilisés par XixounerDev. Vérifier/archiver les DPA (Data Processing
> Agreements) et les clauses de transfert hors UE. Statut au 21/10/2026.

| Service | Rôle | Données concernées | Localisation | DPA / statut |
|---|---|---|---|---|
| **Hetzner Online GmbH** | Hébergement VPS (sites, outils, emails) | Données des sites clients, bases, sauvegardes locales | Allemagne (UE) | DPA standard à archiver |
| **Resend** | Envoi/reçeption d'emails (formulaires, prospection, réponses) | Noms, emails, contenus des messages | États-Unis (vérifier CCT / localisation) | DPA + clauses contractuelles à archiver |
| **Backblaze B2** | Sauvegardes chiffrées hors site | Bases, configs, fichiers `.env` chiffrés GPG | États-Unis | DPA à archiver ; chiffrement côté client |
| **Matomo (auto-hébergé)** | Statistiques d'audience | Pages vues, données anonymisées | VPS Hetzner | Aucun tiers |
| **Google Places API** | Avis Google en direct sur un site client | Avis publics, aucune donnée visiteur | Google (UE/US) | Conditions API ; quota côté serveur |
| **Namecheap** | Noms de domaine | Données de contact domaine (WHOIS) | États-Unis | Conditions registrar |
| **GitHub** | Hébergement du code | Code source (pas de données clients en clair) | États-Unis | DPA GitHub |
| **DeepSeek / OpenClaw** *(assistant interne)* | Aide à l'exploitation et à la rédaction | Extraits techniques, jamais de données clients complètes | UE/US selon API | À cadrer : ne pas transmettre de données personnelles |

## Actions

- [ ] Archiver les DPA dans un dossier `docs/juridique/dpa/` (PDF).
- [ ] Vérifier les mécanismes de transfert hors UE (CCT) pour Resend et Backblaze.
- [ ] Mettre à jour cette liste à chaque nouveau service (ex. paiement en ligne, PDP).
- [ ] Mentionner les sous-traitants dans la politique de confidentialité (déjà listés pour partie).
