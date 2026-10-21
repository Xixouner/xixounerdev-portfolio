# Procédure — violation de données personnelles

> Version 1.0 — 21/10/2026. Responsable : Alexis Trechot (XixounerDev).
> Obligation RGPD : notification à la CNIL sous **72 h** si la violation est susceptible d'engendrer
> un risque pour les droits et libertés (art. 33), information des personnes si risque élevé (art. 34).

## 1. Qu'est-ce qu'une violation ?

Tout accès, perte, modification ou divulgation non autorisée de données personnelles, notamment :
- accès non autorisé à un serveur, un compte, une base ou un fichier ;
- email envoyé à la mauvaise personne (fichier de prospects, factures) ;
- perte ou vol d'un appareil, d'une sauvegarde, d'une clé ;
- rançongiciel, effacement accidentel, bug exposant des données ;
- fuite chez un sous-traitant (Resend, Hetzner, Backblaze…) qui notifie XixounerDev.

## 2. Fiche réflexe — les 6 premiers gestes

1. **Constater et noter** : date/heure, ce qui s'est passé, données et personnes concernées,
   support (copie d'écran, logs) — ne rien effacer.
2. **Contenir** : couper l'accès compromis (mot de passe, session, service), isoler la machine,
   révoquer les clés concernées.
3. **Évaluer le risque** : données sensibles ? volume ? personnes identifiables ? accès déjà
   exploité ? risque d'usurpation ou de préjudice ?
4. **Décider** : notification CNIL sous 72 h si risque ; information des personnes si risque élevé.
5. **Corriger** : colmater la cause (correctif, restauration, rotation de secrets), vérifier que
   la faille est fermée.
6. **Documenter** : remplir le registre des violations ci-dessous, même si la CNIL n'est pas notifiée
   (obligation de tenir un registre interne).

## 3. Qui fait quoi

| Qui | Rôle |
|---|---|
| **Alexis Trechot** | Décide, notifie la CNIL, informe les personnes, tient le registre |
| **Sous-traitants** (Resend, Hetzner, Backblaze…) | Notifient XixounerDev « sans délai » après avoir connaissance d'une violation (DPA) |
| **Clients concernés** | Informés si leurs données sont touchées et le risque élevé |

Pas de DPO désigné (non obligatoire pour cette activité) ; contact : contact@xixouner.com.

## 4. Notification CNIL (téléservice)

- Téléservice : https://notifications.cnil.fr (rubrique « Notifier une violation »).
- Contenu : nature de la violation, catégories et volume de personnes/données, conséquences probables,
  mesures prises ou envisagées.
- Si toutes les informations ne sont pas disponibles sous 72 h : notifier en **notification
  incomplète**, puis compléter.
- Conserver l'accusé de réception et les échanges.

## 5. Modèle — information des personnes concernées

> Objet : Information sur un incident relatif à vos données personnelles
>
> Bonjour,
>
> Nous vous informons qu'un incident affectant [nature de l'incident] a concerné certaines de vos
> données ([types de données]) le [date]. Nous avons pris les mesures suivantes : [mesures].
> Nous vous recommandons [action recommandée]. Pour toute question : contact@xixouner.com.
>
> Nous regrettons cet incident et restons à votre disposition.

## 6. Registre des violations (à tenir à jour)

| Date | Nature | Données/personnes | Risque | CNIL (oui/non, date) | Personnes informées | Mesures | Clôturé |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
