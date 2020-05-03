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
import {
  faAndroid,
  faCss3Alt,
  faDocker,
  faGit,
  faHtml5,
  faJava,
  faLinux,
  faNodeJs,
  faPhp,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const reactLanguage = {
  name: "React",
  icon: faReact
};
export const androidLanguage = {
  name: "Android",
  icon: faAndroid
};
export const nodeLanguage = {
  name: "Node.js",
  icon: faNodeJs
};

export const languagesSections = [
  {
    sectionName: "Langages web",
    languages: [
      reactLanguage,
      {
        name: "PHP",
        icon: faPhp
      },
      nodeLanguage,
      {
        name: "HTML 5",
        icon: faHtml5
      },
      {
        name: "CSS 3",
        icon: faCss3Alt
      }
    ]
  },
  {
    sectionName: "Langages classiques",
    languages: [
      {
        name: "Java",
        icon: faJava
      },
      androidLanguage,
      {
        name: "C"
      }
    ]
  },
  {
    sectionName: "Bases de données",
    languages: [
      {
        name: "MySQL",
        icon: faDatabase
      },
      {
        name: "MongoDB",
        icon: faDatabase
      },
      {
        name: "Firebase",
        icon: faDatabase
      }
    ]
  },
  {
    sectionName: "Divers",
    languages: [
      {
        name: "GNU/Linux",
        icon: faLinux
      },
      {
        name: "Git",
        icon: faGit
      },
      {
        name: "Docker",
        icon: faDocker
      }
    ]
  }
];
