# Page /offres — brouillon (à publier après le pilote)

> Statut : **brouillon**, non publié. Aucune route, aucun lien de navigation, aucune entrée sitemap
> tant qu'un client pilote n'a pas utilisé l'espace outils en conditions réelles.
> Démo publique : https://demo.xixouner.com

## Titre

**Vos échéances, vos devis et vos clients au même endroit — 99 €/mois**

## Accroche

Vous ne payez pas un site qui dort. Vous payez un outil qui vous rappelle ce qui compte :
les échéances qui tombent, les devis sans réponse, les factures impayées, les interventions à prévoir.

## Ce que fait l'outil

| Outil | Concrètement |
|---|---|
| **Échéances & rappels** | TVA, URSSAF, contrôles, contrats : rappel automatique à J-30, J-7 et J-1 par email |
| **Devis & factures** | Création, numérotation, PDF prêt à envoyer au client, suivi des impayés et relances |
| **Carnet clients** | Fiche client, historique des interventions, prochaine action à faire |

Inclus aussi : tableau de bord unique, journal des actions, export de toutes vos données en un clic
(JSON ou CSV), sauvegarde quotidienne chiffrée, accès par lien email (aucun mot de passe à retenir).

## Ce que l'outil ne fait pas

Pas de comptabilité, pas de TVA, pas de liasse fiscale, pas de paie. Il **rappelle et organise** ;
il ne produit aucun chiffre fiscal à votre place — et c'est volontaire.

## Mise en place

1. Un échange de 30 minutes pour cadrer vos échéances et vos clients.
2. Votre instance est créée et déployée sur votre sous-domaine (ex. `outils.votrenom.fr`).
3. Vos données restent chez vous : instance dédiée, export possible à tout moment.

## Engagement

- **99 € HT/mois**, sans engagement de durée, résiliable à tout moment.
- Données exportables en un clic ; suppression définitive 30 jours après la résiliation.
- Aucune donnée partagée avec d'autres clients : une instance, une base, par client.

## Questions fréquentes

**Faut-il installer quelque chose ?** Non : un navigateur suffit, sur ordinateur comme sur téléphone.

**Mes données sont-elles protégées ?** Chaque client a son instance isolée, chiffrée en transit (TLS),
sauvegardée chaque jour. Les échanges de données sont encadrés par un accord de sous-traitance (DPA).

**Et si j'arrête ?** Vous récupérez un export complet (JSON + CSV) et nous supprimons l'instance.

## Bloc d'appel à l'action

> **Voir la démo** : https://demo.xixouner.com
> **En parler** : contact@xixouner.com — 30 minutes, sans engagement.

---

## Checklist de publication (après le pilote)

- [ ] Retours du client pilote intégrés (au moins une itération).
- [ ] Page `src/app/offres/page.tsx` créée avec le contenu ci-dessus.
- [ ] Lien ajouté dans le pied de page (et éventuellement le menu).
- [ ] `sitemap.ts` mis à jour ; metadata `title`/`description` dédiées.
- [ ] Vérification mobile (375 px) et contrastes.
- [ ] `run-tests.sh` du site (88 tests) vert après ajout.
- [ ] Mention de l'offre cohérente dans `docs/juridique/` (CGV : abonnement, résiliation, données).
