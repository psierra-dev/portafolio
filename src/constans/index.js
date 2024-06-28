import { img } from "../assets/index";
const { tecnologias, projectsImg } = img;
import pruebaProject from "../assets/Projects/screet-inicio3.png";
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
  nextjs,
  sequelize,
  supabase,
  firebase,
  mongodb
} = tecnologias;

const { marketplace, translated, redsocial, presupuesto, chat } = projectsImg;
export const navLinks = [
  {
    id: "about",
    title: "Acerca",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "skill",
    title: "Habilidades",
  },
  {
    id: "contact",
    title: "Contacto",
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
    name: "typescript",
    icon: typescript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "sequelize",
    icon: sequelize,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "firebase",
    icon: firebase,
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
    name: "git",
    icon: git,
  },
  {
    name: "mongodb",
    icon: mongodb
  }
];

export const projects = [
  {
    id: 1,
    nombre: "Kiosko App",
    img: marketplace,
    descripcion:
      "El proyecto consiste en desarrollar un Marketplace de comercio electrónico que conecta a clientes con vendedores para la compra y venta de productos. La plataforma ofrecerá una interfaz intuitiva y atractiva tanto para los compradores como para los vendedores, facilitando así la interacción y transacción entre ambas partes.",
    technologies: technologies
      .map((t) => {
        const name = t.name;
        if (
          (name === "html" || name === "css",
          name === "reactjs" ||
            name === "nextjs" ||
            name === "typescript" ||
            name === "nodejs" ||
            name === "postgres" ||
            name === "express" ||
            name === "sequelize")
        ) {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
    link_web: "https://kisko-app.vercel.app",
    link_github: "https://github.com/PabloSA57/kiosko-app",
  },
  {
    id: 2,
    nombre: "Presupuesto",
    img: presupuesto,
    descripcion:
      "Es una aplicación web intuitiva y completa que te permite crear, gestionar y controlar presupuestos para tus proyectos de construcción de forma eficiente.",
    technologies: technologies
      .map((t) => {
        const name = t.name;
        if (
          (
            name === "reactjs" ||
            name === "nextjs" ||
            name === "typescript" ||
            name === "supabase")
        ) {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
    link_web: "https://presupuesto-web-one.vercel.app",
    link_github: "https://github.com/PabloSA57/presupuesto-web",
  },
  {
    id: 3,
    nombre: "Red Social",
    img: redsocial,
    descripcion:
      "El proyecto consiste en el desarrollo de una plataforma de redes sociales que permite a los usuarios conectarse, interactuar y compartir contenido entre sí. Esta red social proporcionará una experiencia dinámica y personalizada para los usuarios, fomentando la comunicación, la colaboración y el intercambio de ideas.",
    technologies: technologies
      .map((t) => {
        const name = t.name;
        if (
          name === "tailwind" ||
          name === "reactjs" ||
          name === "nextjs" ||
          name === "typescript" ||
          name === "supabase"
        ) {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
    link_web: "https://red-social-sigma.vercel.app",
    link_github: "https://github.com/PabloSA57/red-social",
  },
  {
    id: 4,
    nombre: "Translated",
    img: translated,
    descripcion:
      "El proyecto consiste en desarrollar una plataforma de traducción en línea que facilite la traducción de texto entre diferentes idiomas de manera rápida, precisa y confiable. Esta plataforma proporcionará herramientas avanzadas de traducción para satisfacer las necesidades de usuarios individuales, empresas y organizaciones que requieran servicios de traducción.",
    technologies: technologies
      .map((t) => {
        const name = t.name;
        if (
          name === "tailwind" ||
          name === "reactjs" ||
          name === "javascript"
        ) {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
    link_web: "https://translated-webapp.vercel.app",
    link_github: "https://github.com/PabloSA57/translated-webapp",
  },
  {
    id: 5,
    nombre: "Chat",
    img: chat,
    descripcion:
      "El proyecto consiste en desarrollar una plataforma de traducción en línea que facilite la traducción de texto entre diferentes idiomas de manera rápida, precisa y confiable. Esta plataforma proporcionará herramientas avanzadas de traducción para satisfacer las necesidades de usuarios individuales, empresas y organizaciones que requieran servicios de traducción.",
    technologies: technologies
      .map((t) => {
        const name = t.name;
        if (
          name === "reactjs" ||
          name === "tailwind" ||
          name === "typescript" ||
          name === "nodejs" ||
          name === "mongodb"
        ) {
          return t;
        }
        return false;
      })
      .filter((t) => t !== false),
    link_web: "https://chat-taupe-three-84.vercel.app",
    link_github: "https://github.com/PabloSA57/chat",
  },
];
