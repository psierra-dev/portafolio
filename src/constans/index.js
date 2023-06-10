import { img } from "../assets/index";
const { tecnologias, projectsImg } = img;

const {
  html,
  css,
  javascript,
  express,
  postgres,
  tailwind,
  reactjs,
  typescript,
  nodejs,
  git,
} = tecnologias;

const { perfil } = projectsImg;
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git",
    icon: git,
  },
];

export const projects = [
  {
    id: 1,
    nombre: "Kiosko-app",
    img: perfil,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 2,
    nombre: "Autoservice-app",
    img: perfil,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 3,
    nombre: "Autoservice-app",
    img: perfil,
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 4,
    nombre: "Autoservice-app",
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
  {
    id: 4,
    nombre: "Autoservice-app",
    descripcion:
      "loren sdksopdks dodsdsdlmslmdls skdsd sdkmskldks d,.smdksd smdksdopsdmaksd sdospkdoKmkm a sodksdk",
    technologies: technologies
      .map((t) => {
        if (t.name === "reactjs" || t.name === "git") {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
  },
];
