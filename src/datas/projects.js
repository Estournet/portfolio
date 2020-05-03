/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */
import { bannerEcarlate, bannerLucy, bannerPeche } from "assets";
import { androidLanguage, nodeLanguage, reactLanguage } from "datas/languages";

export const projects = [
  {
    name: "Pêche",
    banner: bannerPeche,
    shortDescription: "Pêche est une application de gestion de dette que j'ai créée pour ma famille et moi. Elle nous permet gérer nos remboursements (essence, courses etc).",
    languages: [androidLanguage],
    link: "https://play.google.com/store/apps/details?id=com.vincent.peche"
  },
  {
    name: "Lucy",
    banner: bannerLucy,
    shortDescription: "Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste le plus de messages, quelles sont les periodes de forte activité etc.",
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
