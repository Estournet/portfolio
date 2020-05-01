import { androidLanguage, nodeLanguage, reactLanguage } from "./languages";

export const projects = [
  {
    name: "Pêche",
    logo: "peche_logo.png",
    banner: "peche_banner.png",
    shortDescription: "Pêche est une application de gestion de dette que j'ai créée pour ma famille et moi. Elle nous permet de savoir qui doit rembourser. Vous ne pourrez pas l'utiliser sur le Play Store, ayant restreint l'accès à mes proches uniquement.",
    descriptions: [
      "Pêche est une application de gestion de dette que j'ai créée pour ma famille et moi. Elle nous permet de savoir qui doit rembourser qui. Vous ne pourrez pas l'utiliser sur le Play Store, ayant restreint l'accès à mes proches uniquement.",
      "J'ai écrit cette application en Java, il y a environ deux ans maintenant. Je continue de temps en temps à y faire des mises à jour. La base de données que j'utilise est Firebase. Je voulais essayer ce service et il s'avère très pratique. L'application fonctionne donc en temps réel, tout s'actualise dès qu'une modification est faite par un autre utilisateur."
    ],
    languages: [androidLanguage],
    link: "https://play.google.com/store/apps/details?id=com.vincent.peche",
    screenshots: [
      {
        fileName: "screenshot_peche_1.png",
        description: ""
      },
      {
        fileName: "screenshot_peche_2.png",
        description: ""
      },
      {
        fileName: "screenshot_peche_3.png",
        description: ""
      },
      {
        fileName: "screenshot_peche_4.png",
        description: ""
      }
    ]
  },
  {
    name: "Lucy",
    logo: "lucy_logo.png",
    banner: "lucy_banner.png",
    shortDescription: "Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste le plus de messages etc.",
    descriptions: [
      "Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste le plus de messages etc.",
      "C'est un site front-end uniquement, c'est à dire que tout est fait sur la machine du client. C'est pour cela que, sur des grosses conversations, cela prend un peu de temps pour tout calculer. Le site a été fait en React avec un Material UI et charts.js pour le design. Il permet donc de visualiser des statistiques mais aussi de chiffrer et déchiffrer des conversation. C'est pourquoi certaines conversations vous seront inaccessibles.",
      "Je vous invite, bien évidemment, à tester le site avec la conversation de test 'Pokémon Version Rouge' ou bien avec votre propre conversation Facebook ! (Promis, je garde aucune donnée)."
    ],
    languages: [reactLanguage, nodeLanguage],
    link: "https://estournet.github.io/lucy/",
    screenshots: [
      {
        fileName: "screenshot_lucy_1.png",
        description: ""
      },
      {
        fileName: "screenshot_lucy_2.png",
        description: ""
      }
    ]
  },
  {
    name: "Écarlate",
    logo: "ecarlate_logo.png",
    banner: "ecarlate_banner.png",
    shortDescription: "Mon projet de stage de fin d'études. Pendant 6 mois, j'ai développé Écarlate, un site de gestion de projet, qui présente les projets de façon globale et, ainsi, permet en un seul coup d'oeil de voir quels projets méritent une attention particulière.",
    descriptions: [
      "Mon projet de stage de fin d'études. Pendant 6 mois, j'ai développé Écarlate, un site de gestion de projet, qui présente les projets de façon globale et, ainsi, permet en un seul coup d'oeil de voir quels projets méritent une attention particulière.",
      "On peut créer des projets et, semaine après semaine, mettre à jour l'état du projet et souligner les soucis potentiels. On a donc les developpeurs et chefs de projets qui mettent à jour les projets dont ils s'occupent et les managers qui peuvent consulter, d'un seul coup d'oeil, l'état de tous les projets. Le site permet notament d'avoir des utilisateurs avec différents privilèges, qui leur permet d'effectuer certaines actions (ajouter, supprimer, modifier...). Il a donc fallu gérer en front-end ainsi qu'en back-end que chaque utilisateur avait le droit d'effectuer une action.",
      "J'ai développé ce site en totale autonomie, j'ai donc pu choisir les technologies à utiliser, la charte graphique, les outils que je veux utiliser... J'ai donc fait le site en React, en utilisant notamment les libraires Material-UI, React Router, Redux. Le back-end est un serveur Node.JS avec le framework hapijs, qui permet de créer facilement des API REST. Enfin, la base de données est une base MongoDB classique. Il a aussi fallu rendre le site facilement déployable, j'ai donc fait un petit script Docker pour que Jenkins puisse déployer le site automatiquement.",
      "Vous ne pouvez, cenpendant, pas voir le projet, le projet étant interne à l'entreprise. Seules quelques captures d'écran sont disponibles."
    ],
    languages: [reactLanguage, nodeLanguage],
    screenshots: [
      {
        fileName: "screenshot_ecarlate_1.png",
        description: ""
      },
      {
        fileName: "screenshot_ecarlate_2.png",
        description: ""
      },
      {
        fileName: "screenshot_ecarlate_3.png",
        description: ""
      },
      {
        fileName: "screenshot_ecarlate_4.png",
        description: ""
      },
      {
        fileName: "screenshot_ecarlate_5.png",
        description: ""
      },
      {
        fileName: "screenshot_ecarlate_6.png",
        description: ""
      }

    ]
  }
];
