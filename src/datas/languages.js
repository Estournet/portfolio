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


export const languagesSections = [
  {
    sectionName: "Langages web",
    languages: [
      {
        name: "React",
        icon: faReact
      },
      {
        name: "PHP",
        icon: faPhp
      },
      {
        name: "Node.js",
        icon: faNodeJs
      },
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
      {
        name: "Android",
        icon: faAndroid
      },
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
