export interface CgvSection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export const cgvData = {
  title: "Conditions générales de vente",
  version: "1.1",
  updatedAt: "21 octobre 2026",
  intro:
    "Les présentes conditions générales de vente (les « CGV ») régissent les relations contractuelles entre XixounerDev, entrepreneur individuel établi à Clermont-Ferrand (France), et tout professionnel (le « Client ») qui commande une prestation de création de site web, d'hébergement, de maintenance ou d'outillage web.",
  sections: [
    {
      id: "objet",
      title: "1. Objet et champ d'application",
      paragraphs: [
        "Les présentes CGV s'appliquent à toutes les prestations proposées par XixounerDev : création de sites web, refonte, hébergement, maintenance, développement d'outils sur mesure, audit et conseil.",
        "Les Prestations sont réservées exclusivement aux Clients professionnels : entrepreneurs, sociétés, associations et personnes morales. XixounerDev ne propose pas ses Prestations aux consommateurs au sens du Code de la consommation ; toute commande émanant d'un consommateur est refusée.",
        "Toute commande implique l'acceptation sans réserve des présentes CGV, qui prévalent sur les conditions d'achat du Client, sauf accord écrit contraire.",
      ],
    },
    {
      id: "definitions",
      title: "2. Définitions",
      paragraphs: [
        "« Prestation » : toute création, développement, hébergement, maintenance ou service réalisé par XixounerDev pour le Client.",
        "« Site » : l'ensemble des pages, contenus et éléments techniques livrés au Client.",
        "« Espace outils » : l'application web de suivi et d'organisation mise à disposition du Client dans le cadre de son abonnement, le cas échéant.",
        "« Livrable » : élément produit par XixounerDev dans le cadre de la Prestation (code, contenus, maquettes, documentation).",
      ],
    },
    {
      id: "commande",
      title: "3. Devis et formation du contrat",
      paragraphs: [
        "Toute Prestation fait l'objet d'un devis gratuit, détaillé et sans engagement, valable 30 jours à compter de sa date d'émission.",
        "Le contrat est formé à la date d'acceptation du devis par le Client : signature électronique, ou retour écrit valant acceptation, ou versement de l'acompte prévu.",
        "Le devis accepté et les présentes CGV constituent l'intégralité de l'accord entre les parties. Toute modification du périmètre fait l'objet d'un avenant chiffré.",
      ],
    },
    {
      id: "prix",
      title: "4. Prix et facturation",
      paragraphs: [
        "Les prix sont exprimés en euros. XixounerDev est entrepreneur individuel et n'est pas assujetti à la TVA : « TVA non applicable, article 293 B du Code général des impôts ».",
        "Le prix de la création et l'abonnement mensuel sont ceux figurant au devis accepté. L'abonnement couvre l'hébergement, la maintenance, les mises à jour de sécurité, les sauvegardes et les modifications simples convenues.",
        "Toute prestation supplémentaire non prévue au devis fait l'objet d'un devis complémentaire ou d'une facturation au temps passé, après accord écrit du Client.",
        "Les factures sont émises à la commande, à la livraison et mensuellement pour l'abonnement. Elles sont conformes aux exigences de la facturation électronique (format Factur-X) et transmises par voie électronique.",
      ],
    },
    {
      id: "paiement",
      title: "5. Modalités de paiement",
      paragraphs: [
        "Sauf mention contraire au devis, un acompte de 30 % est dû à la commande et le solde à la livraison, avant la mise en ligne du Site.",
        "L'abonnement mensuel est payable d'avance, par prélèvement, virement ou tout autre moyen convenu. Le défaut de paiement entraîne la suspension de l'hébergement et de la maintenance après mise en demeure restée sans effet pendant 15 jours.",
        "Conformément aux articles L.441-10 et suivants du Code de commerce, tout retard de paiement entraîne de plein droit des pénalités égales à trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire de recouvrement de 40 €. Ces montants s'appliquent entre professionnels.",
      ],
    },
    {
      id: "execution",
      title: "6. Exécution des prestations et délais",
      paragraphs: [
        "XixounerDev exécute les Prestations selon les règles de l'art et dans les délais indiqués au devis. Les délais sont indicatifs et courent à compter de la réception de l'ensemble des éléments nécessaires (contenus, accès, validation).",
        "Le Client dispose d'un délai de 7 jours après livraison pour signaler par écrit les non-conformités au devis. Passé ce délai, le Site est réputé accepté, sans préjudice des garanties légales.",
        "Les retards imputables au Client (contenus manquants, validations tardives, accès non fournis) décalent les délais d'autant et peuvent donner lieu à facturation complémentaire.",
      ],
    },
    {
      id: "obligations-client",
      title: "7. Obligations du Client",
      paragraphs: [
        "Le Client fournit dans les délais les contenus, images, textes, accès et validations nécessaires à la Prestation.",
        "Le Client garantit détenir les droits sur les contenus qu'il fournit et être responsable de leur licéité. Il garantit XixounerDev contre toute réclamation de tiers à ce titre.",
        "Le Client désigne un interlocuteur unique habilité à valider les livrables et à prendre les décisions relatives au projet.",
        "Le Client s'engage à ne pas utiliser les Prestations à des fins illicites et à respecter les conditions d'utilisation des services tiers intégrés (hébergement, envoi d'emails, statistiques).",
      ],
    },
    {
      id: "propriete",
      title: "8. Propriété intellectuelle",
      paragraphs: [
        "Les méthodes, composants réutilisables, bibliothèques, gabarits et code générique développés par XixounerDev restent sa propriété exclusive. Le Client bénéficie d'un droit d'utilisation non exclusif et non transférable, limité à la durée de l'abonnement.",
        "Les contenus fournis par le Client restent sa propriété. Le Client autorise XixounerDev à les utiliser exclusivement pour la réalisation de la Prestation.",
        "Les développements spécifiques au Client, s'ils sont identifiés comme tels au devis, peuvent être cédés au Client après paiement intégral du prix. Cette cession ne porte pas sur les composants génériques.",
        "Le nom de domaine enregistré pour le Client lui appartient ; il est enregistré à son nom ou transféré sur demande.",
        "XixounerDev peut citer le projet dans son portfolio et sur ses supports commerciaux, sauf refus écrit du Client.",
      ],
    },
    {
      id: "hebergement",
      title: "9. Hébergement, maintenance et réversibilité",
      paragraphs: [
        "Chaque Client dispose d'une instance dédiée : ses propres fichiers et sa propre base de données, hébergés sur l'infrastructure de XixounerDev. Aucune donnée n'est partagée entre deux Clients.",
        "L'hébergement comprend la mise en ligne, le certificat TLS, les sauvegardes régulières et la surveillance de la disponibilité. Il s'agit d'une obligation de moyens : XixounerDev ne garantit pas une disponibilité permanente, notamment en cas de maintenance, de panne de l'hébergeur, d'attaque informatique ou d'événement de force majeure.",
        "En cas de résiliation, le Client peut demander la réversibilité : export de ses contenus (textes, images, données de son espace), transfert du nom de domaine s'il en est propriétaire, et remise des fichiers sources dans les conditions prévues au devis. Les données sont conservées 30 jours après la fin du contrat, puis supprimées, sous réserve des obligations légales de conservation (notamment comptables).",
      ],
    },
    {
      id: "donnees",
      title: "10. Données personnelles",
      paragraphs: [
        "Les parties respectent le Règlement général sur la protection des données (UE 2016/679) et la loi Informatique et Libertés.",
        "Pour les données collectées sur son Site (formulaires, statistiques), le Client est responsable du traitement. XixounerDev agit en qualité de sous-traitant pour l'hébergement et la maintenance, dans le cadre d'un accord écrit le cas échéant.",
        "Les données du Client et de ses visiteurs ne sont utilisées que pour les finalités du contrat. XixounerDev met en œuvre les mesures techniques et organisationnelles raisonnables (chiffrement TLS, sauvegardes, contrôle d'accès) et notifie sans délai toute violation de données dont il aurait connaissance.",
        "Les sous-traitants et services tiers utilisés (hébergement, envoi d'emails, statistiques) sont décrits dans la politique de confidentialité du site xixouner.com.",
      ],
    },
    {
      id: "responsabilite",
      title: "11. Garanties et responsabilité",
      paragraphs: [
        "XixounerDev est soumis à une obligation de moyens. Il ne peut être tenu responsable des dommages indirects (perte de chiffre d'affaires, perte de chance, perte de données non sauvegardées, préjudice d'image).",
        "Sauf faute lourde ou dolosive, la responsabilité totale de XixounerDev, toutes causes confondues, est limitée au montant total hors taxes effectivement payé par le Client au titre de la Prestation concernée sur les douze derniers mois.",
        "Le Client reste responsable de ses contenus, de ses accès, de ses sauvegardes externes éventuelles et de l'usage de ses outils.",
        "XixounerDev peut souscrire une assurance responsabilité civile professionnelle couvrant son activité.",
      ],
    },
    {
      id: "force-majeure",
      title: "12. Force majeure",
      paragraphs: [
        "Aucune partie ne peut être tenue responsable d'un manquement dû à un événement de force majeure au sens de l'article 1218 du Code civil (catastrophe naturelle, panne généralisée d'infrastructure ou d'hébergeur, cyberattaque de grande ampleur, décision administrative, etc.).",
        "Les obligations suspendues reprennent à la fin de l'événement. Si celui-ci dure plus de 60 jours, chaque partie peut résilier le contrat sans indemnité.",
      ],
    },
    {
      id: "resiliation",
      title: "13. Résiliation",
      paragraphs: [
        "L'abonnement mensuel est conclu sans engagement de durée. Il peut être résilié par chaque partie avec un préavis écrit de 30 jours, par email.",
        "En cas de manquement grave du Client (défaut de paiement, usage illicite, non-respect des présentes CGV) non réparé dans les 15 jours suivant une mise en demeure, XixounerDev peut suspendre les Prestations ou résilier le contrat de plein droit.",
        "La résiliation prend effet à la fin de la période mensuelle en cours. Les sommes dues au titre de la période sont exigibles. Les dispositions relatives à la propriété intellectuelle, aux données personnelles, à la confidentialité et à la responsabilité survivent à la résiliation.",
      ],
    },
    {
      id: "confidentialite",
      title: "14. Confidentialité",
      paragraphs: [
        "Chaque partie s'engage à préserver la confidentialité des informations de l'autre partie dont elle aurait connaissance à l'occasion du contrat (informations techniques, commerciales, données clients) et à ne les utiliser que pour les besoins de la Prestation.",
        "Cette obligation perdure pendant toute la durée du contrat et trois ans après son terme.",
      ],
    },
    {
      id: "litiges",
      title: "15. Réclamations et règlement des litiges",
      paragraphs: [
        "Les parties recherchent d'abord une solution amiable à tout différend. Le Client peut adresser une réclamation écrite à contact@xixouner.com ; une réponse est apportée sous 15 jours ouvrés.",
        "À défaut d'accord amiable, tout litige relève de la compétence exclusive des tribunaux du ressort du siège de XixounerDev, sauf disposition légale contraire.",
      ],
    },
    {
      id: "droit-applicable",
      title: "16. Droit applicable et dispositions diverses",
      paragraphs: [
        "Les présentes CGV sont soumises au droit français.",
        "Si une clause des CGV était déclarée nulle ou inapplicable, les autres clauses resteraient en vigueur.",
        "XixounerDev peut modifier les présentes CGV à tout moment. La version applicable est celle en vigueur à la date de la commande ; toute nouvelle version est publiée sur cette page avec sa date de mise à jour.",
        "Les CGV sont rédigées en français. En cas de traduction, la version française fait foi.",
      ],
    },
  ] as CgvSection[],
};
