import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full mt-10 hover:bg-gray-900 p-2 rounded-md">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <h2 className="text-lg text-white">About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="text-white text-md"
      >
        Soy desarrollador web fullstack con un año de experiencia. Me encuentro
        aprendiendo el stack de javascript donde llevé a cabo diferentes
        proyectos con React, Redux, Node, Express, Postgressql, etc.
        <br />
        Actualmente estoy estudiando en el Instituto politécnico de Córdoba,
        específicamente en la tecnicatura de Desarrollador web y móvil. A través
        del mismo voy aprendiendo Python y Mysql, llevando a cabo el desarrollo
        de una página web con dichas tecnologías, implementado la modalidad de
        trabajo Scrum.
      </motion.p>
    </div>
  );
};

export default About;

const textVariant = (delay) => {
  return {
    hidden: {
      x: -50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.2,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
