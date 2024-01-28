import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div id="about" className="w-full mt-4 bg-[#100F14] p-3 rounded-md">
      <h2 className="text-lg text-white">About</h2>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="text-white text-md"
      >
        Soy un apasionado desarrollador web con un firme compromiso de crear
        experiencias digitales cautivadoras y funcionales. Mi viaje en el mundo
        del desarrollo comenzó con una curiosidad insaciable y una fascinación
        por la creación de tecnologías impactantes.
      </motion.p>
    </motion.div>
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
