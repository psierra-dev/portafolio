import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { projects, technologies } from "../constans";
import github from "../assets/github.png";

const CardProject = ({ project }) => {
  return (
    <div className="relative text-center   rounded-xl  hover:bg-slate-600 gap-3">
      <div className="w-full h-auto bg-[#202E4B] rounded-xl">
        <img
          className="w-full h-auto rounded-xl"
          src={project?.img}
          alt=""
          width="384"
          height="512"
        />
      </div>

      <div className="flex w-full p-2">
        <h2 className="text-lg m-0 w-fit">{project?.nombre}</h2>
      </div>
      <div className="p-2">
        <p className="text-md font-medium">{project?.descripcion}</p>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div>
      <h2 className="text-lg text-white mb-2">Proyectos</h2>
      <ul className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6">
        {projects?.map((project) => (
          <motion.li
            className=""
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <CardProject project={project} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
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
