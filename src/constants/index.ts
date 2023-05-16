import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  threejs,

} from "../assets";
import { AngularSvg } from "../components/icons/AngularSvg";
import { CssSvg } from "../components/icons/CssSvg";
import { GithubSvg } from "../components/icons/GithubSvg";
import { GraphqlSvg } from "../components/icons/GraphqlSvg";
import { HtmlSvg } from "../components/icons/HtmlSvg";
import { JavascriptSvg } from "../components/icons/JavascriptSvg";
import { ReactSvg } from "../components/icons/ReactSvg";
import { TestingTubeSvg } from "../components/icons/TestingTubeSvg";
import { TypescriptSvg } from "../components/icons/TypescriptSvg";
import ImageNiftyTab from '../assets/imgs/image-nifttytab.png';
import ImageNiftyWeb from '../assets/imgs/image-niftyweb.png';
import ImageSalomon from '../assets/imgs/salomon.jpg'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experiencia",
  }, {
    id: "projects",
    title: "Proyectos",
  },
];

const techSkills = [
  {
    title: "Angular",
    subtitle: 'Intermedio',
    icon: AngularSvg,
  },
  {
    title: "React",
    subtitle: 'Intermedio',
    icon: ReactSvg,
  }, {
    title: "Html5",
    subtitle: 'Avanzado',
    icon: HtmlSvg
  }, {
    title: "Css3",
    subtitle: 'Intermedio',
    icon: CssSvg
  },
  {
    title: "Javascript",
    subtitle: 'Intermedio',
    icon: JavascriptSvg,
  },
  {
    title: "Typescript",
    subtitle: 'Intermedio',
    icon: TypescriptSvg,
  }, {
    title: "Github",
    subtitle: 'Intermedio',
    icon: GithubSvg,
  }, {
    title: "Graphql",
    subtitle: 'Intermedio',
    icon: GraphqlSvg,
  }, {
    title: "Testing",
    subtitle: 'Basic',
    icon: TestingTubeSvg,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Salomon Software",
    icon: ImageSalomon,
    iconBg: "#383E56",
    date: "Jul 2019 - May 2022",
    points: [
      "Participación en el diseño de nuevas funcionalidades.",
      "Estructuración de componentes reutilizables en angular.",
      "Consumo de Apis en Rest y Graphql",
      "Identificar y dar solución a los problemas asegurando la calidad del código y las buenas prácticas.",
    ],
  }
];

const projects = [
  {
    name: "Niftytab",
    description:
      "Extension para chrome que permite guardar los tabs haciendo que el navegador tenga mejor rendimiento",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Chrome",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: ImageNiftyTab,
    source_code_link: "https://github.com/RuxTsuki/niftytab",
  }, {
    name: "Niftyweb",
    description:
      "Pagina informativa sobre la Extension para chrome Niftytab",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mui",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: ImageNiftyWeb,
    source_code_link: "https://github.com/RuxTsuki/niftyweb",
  },
];

export { techSkills, technologies, experiences, projects };