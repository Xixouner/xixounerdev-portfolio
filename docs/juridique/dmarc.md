# Plan DMARC — durcissement et surveillance

> État au 21/10/2026. Le DNS est géré chez le registrar/bureau d'enregistrement ; les changements
> se font dans la zone DNS de **xixouner.com**.

## État actuel

| Élément | Valeur constatée |
|---|---|
| SPF racine | `v=spf1 ip4:65.108.90.46 include:spf.sendinblue.com include:amazonses.com -all` |
| SPF sous-domaine d'envoi | `send.xixouner.com` → `v=spf1 include:amazonses.com ~all` |
| MX sous-domaine d'envoi | `feedback-smtp.eu-west-1.amazonses.com` |
| DKIM | `resend._domainkey.xixouner.com` présent |
| DMARC | `v=DMARC1; p=none; rua=mailto:contact@xixouner.com; fo=1` |

## Cible

```
v=DMARC1; p=quarantine; pct=100; rua=mailto:contact@xixouner.com; fo=1; adkim=s; aspf=s
```
Puis, après stabilisation :
```
v=DMARC1; p=reject; pct=100; rua=mailto:contact@xixouner.com; fo=1; adkim=s; aspf=s
```

## Procédure de bascule (2 à 4 semaines)

1. **Semaine 0 — surveillance** : garder `p=none`, vérifier les rapports agrégés
   (`rua`). Objectif : identifier tout expéditeur légitime non authentifié.
2. **Semaine 1** : passer à `p=quarantine; pct=25` pendant 3–5 jours.
3. **Semaine 2** : `p=quarantine; pct=100`.
4. **Semaine 3–4** : vérifier l'absence d'échec sur les flux attendus (Resend, emails transactionnels).
5. **Ensuite** : passer à `p=reject`.
6. **Rollback immédiat** : revenir à `p=none` si un flux légitime casse, puis analyser.

## Vérifications avant bascule

- [ ] SPF racine : retirer `include:spf.sendinblue.com` si Brevo n'est plus utilisé.
- [ ] Vérifier que chaque expéditeur légitime est couvert par SPF **ou** DKIM.
- [ ] Tester un email réel : en-têtes `Authentication-Results` (spf, dkim, dmarc = pass).
- [ ] Vérifier l'alignement From/Return-Path (`send.xixouner.com` pour Resend).
- [ ] Prévoir un outil/lecture des rapports DMARC (rapports XML `rua`).
- [ ] Ne pas durcir pendant une campagne d'envoi importante.

## Points de vigilance

- DMARC `p=none` ne protège pas contre l'usurpation : c'est un mode d'observation.
- Un sous-domaine d'envoi (`send.`) peut avoir sa propre politique DMARC ; vérifier
  `_dmarc.send.xixouner.com` si Resend y envoie.
- Revoir la politique après tout changement d'ESP ou de domaine.
