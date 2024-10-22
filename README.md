Description du Système de Gestion Automatisée de Présence

Contexte du Projet

Bonjour chers amis et merci d’avoir bien voulue nous rejoindre dans le développement d’ une application web innovante destinée à automatiser la gestion de la présence dans divers établissements tels que les écoles, universités, et campus. Comme vous le savez déja, le process de présence auquelles nous avons souvent été confronté au Bénin est celui consistant à faire l’appel nom par nom de tous les concernés jusqu’au dernier. Cette derniere bien qu’éfficace sur certains point révelle divers failles notemment le fait qu’elle est souvent sujette à l’injustice, le désordre et elle est vorace en terme de temps. La belle preuve est que nous en aons fais les frais l’an passé. C’est donc afin de combatre ces situations qu’a immergée l’idée de mettre en commun nos compétences tech pour développer une solution qui puisse non seulement révolutionner la présence non seulement à Epitech mais aussi sur toute l’étendue du territoire nationnale dès que l’école approuvera notre réussite.
Objectif

L'application vise à améliorer l'efficacité et la sécurité des procédures de présence, permettant ainsi aux utilisateurs de gagner du temps tout en garantissant une meilleure précision et transparence. Pour cela, nous seront ammenés à developper une application wab de prise et gestion de la présence se basant sur la reconnaissance faciale des membres du groupe et la génération de code QR par sessions.

Fonctionnalités
Gestion des Groupes:
    • Création de Groupes: Les utilisateurs peuvent créer plusieurs groupes pour différents cours, classes, ou événements.
    • Ajout et Retrait d'Utilisateurs: Il est possible d'ajouter ou de retirer des membres dans les groupes, soit individuellement, soit en masse (bulking).
    • Visualisation de la Liste des Groupes: Une interface permet de voir tous les groupes existants, de les rechercher par nom, et de les filtrer selon des critères spécifiques.
    • Suppression et Modification des Groupes: Les utilisateurs peuvent supprimer des groupes obsolètes, éditer les descriptions de groupes, et mettre à jour les informations du profil de groupe.
    • La possibilité pour un utilisateur ou un groupe d’avoir un profil visible par tous doit être pris en compte.
Gestion de la Présence:
    • Méthodes de Présence: Les utilisateurs peuvent enregistrer la présence à l'aide de deux méthodes principales:
        ◦ Caméra: La reconnaissance faciale est utilisée pour vérifier la présence des utilisateurs à l'aide de la caméra de celui qui lance la présence. Chaque utilisateur disposant d’une banque d’image de son visage, l’admin n’aura qu’a filmer les membres de la promo en face de lui pour que l’app les authentifie.
        ◦ Code QR: Chaque session génère un code QR unique qui change à des intervalles de temps définis pour des raisons de sécurité. Les participants scannent le code QR pour marquer leur présence.
    • Lancement et Planification de Sessions: Les administrateurs peuvent lancer des sessions de présence en temps réel ou planifier des sessions à l'avance. Les rappels de présence peuvent également être programmés pour notifier les membres.
    • Rapports de Présence: Les administrateurs peuvent visualiser les rapports de présence pour les groupes qu'ils gèrent, tandis que les utilisateurs réguliers peuvent voir leur propre statut (présent/absent) dans les groupes auxquels ils appartiennent. Les rapports peuvent être téléchargés au format .xlsx.
    • Calendrier: chaque utilisateur à partir de son calendar (comme schendule qui est sur nos intranet) doit pouvoir voir les cessions de présences qu’il a soi meme planifé pour ses groupes ou qui ont été planifiés par d’autres groupes.
Notifications:
    • Demandes d'Adhésion: Les utilisateurs reçoivent des notifications lorsqu'ils envoient ou reçoivent des demandes pour rejoindre des groupes. Les administrateurs sont avertis des nouvelles demandes d'adhésion et peuvent les approuver ou les refuser.
    • Rappels de Planification de Session: Les utilisateurs reçoivent des notifications pour rappeler les sessions de présence planifiées. Ces rappels assurent que les membres soient informés des sessions à venir et qu'ils puissent se préparer en conséquence.
    • Alertes de Présence: Les utilisateurs reçoivent des notifications pour les informer lorsqu'ils ont été marqués comme présents pour une session. Ces alertes peuvent également inclure des informations sur l'heure et le lieu de la session.
      
Adhésion des Utilisateurs:
    • Demandes d'Adhésion: Les utilisateurs peuvent envoyer des demandes pour rejoindre des groupes spécifiques.
    • Gestion des Demandes: Les administrateurs de groupes peuvent approuver ou refuser les demandes d'adhésion reçues.
Approche Technique
Technologies Utilisées:
L'application est construite en utilisant des technologies modernes telles que :
    • Front-end: React est utilisé pour créer une interface utilisateur réactive et intuitive.
    • Back-end:  php, node.js et autres pouvant etre utilisé pour gérer les opérations côté serveur et interagir avec la base de données mais autres.
    • Base de Données: Une base de données SQL pour stocker les informations des utilisateurs, des groupes, et des sessions de présence.
    • Sécurité: Implémentation de mesures de sécurité robustes, y compris la modification dynamique des codes QR et des protocoles sécurisés pour la reconnaissance faciale.
Interface Utilisateur:
L'interface est conçue pour être conviviale et accessible, avec une navigation claire et des éléments interactifs permettant une gestion facile des groupes et des sessions de présence. J’ai déja commencer et diposé à quoi ça ressemble actuellement. Je compte beaucoup sur vous pour le critiquer au max(bonne comme pertinente) et m’aider à faire remonter les insuffisance. Merci d’avance les gars.
4. Collaboration en Équipe
Membres de l'Équipe:
Le projet est développé par une équipe de cinq personnes, chacune apportant des compétences spécifiques:
    • Développeur Front-end: Responsable de la conception et du développement de l'interface utilisateur.
      - Brouhane
      - Samuel John Ross
      - Jean-Batîste
    • Développeur Back-end: Gère la logique côté serveur et les interactions avec la base de données.
      - Patricko
      - Diren
      - Rakib
      - Fania.s
    • Chef de Projet: Brouhane.
Rôles et Responsabilités:
Chaque membre de l'équipe a un rôle défini pour assurer l'efficacité du processus de développement, la qualité du code, et le respect des normes de sécurité. Mais tous désistement aussi est accepté. Certe c’est un peu difficile vue la disponibilité chargée de chacun mais avec de l’organisation, de la volonté et de rigueur je suis sûre que nous finirons dans les temps. Donc let’s go les gars 😀😀😀.

5. Plan de Mise en Œuvre
Phases de Développement:
    1. Phase de Planification coté front et coté back: 14 Octorbre au 03 Novembre 2024;
    2. Développement front + back-end: 03 Novembre au 15 Décembre 2024.
    3. Tests: 15 Décembre au 29 Décembre  2024.
    4. Déploiement de la version beta et début de la promotion: Janvier 2025.
       
Tests et Assurance Qualité:

Les tests incluront des vérifications unitaires, des tests d'intégration, et des essais d'utilisabilité pour s'assurer que l'application répond aux besoins des utilisateurs et fonctionne de manière fiable.

Conclusion
Avantages du Système:
    • Automatisation et précision accrue du suivi des présences.
    • Sécurité renforcée grâce à la reconnaissance faciale et aux codes QR dynamiques.
    • Gain de temps et réduction des tâches administratives pour les enseignants et administrateurs.
Perspectives Futures:
    • Extension des fonctionnalités pour inclure des options de gestion avancée des utilisateurs et des rapports analytiques et statistiaque (Au fait j’ai pas d’inspi pour ce qu’on mettra coté home donc 😅😅😅).
    • Scalabilité pour intégrer plus d'établissements et de types d'organisations.