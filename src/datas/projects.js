import { bannerEcarlate, bannerLucy, bannerPeche } from "assets";
import { androidLanguage, nodeLanguage, reactLanguage } from "datas/languages";

export const projects = [
  {
    name: "Pêche",
    banner: bannerPeche,
    shortDescription: "Pêche est une application de gestion de dette que j'ai créée pour ma famille et moi. Elle nous permet de savoir qui doit rembourser.",
    languages: [androidLanguage],
    link: "https://play.google.com/store/apps/details?id=com.vincent.peche"
  },
  {
    name: "Lucy",
    banner: bannerLucy,
    shortDescription: "Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste le plus de messages etc.",
    languages: [reactLanguage, nodeLanguage],
    link: "https://estournet.github.io/lucy/"
  },
  {
    name: "Écarlate",
    banner: bannerEcarlate,
    shortDescription: "Mon projet de stage de fin d'études. Pendant 6 mois, j'ai développé Écarlate, un site de gestion de projet, qui présente les projets de façon globale et, ainsi, permet en un seul coup d'oeil de voir quels projets méritent une attention particulière.",
    languages: [reactLanguage, nodeLanguage]
  }
];
