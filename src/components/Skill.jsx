import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import ScrollAutomatic from "./scroll-automatic/ScrollAutomatic";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Skill = ({ technologies, size = "10" }) => {
  return (
    <div className="container-slide mt-4">
      <div className="slide">
        {technologies.map((t, index) => (
          <div
            className={`w-6 h-6 m-2 rounded-full p-1 bg-gray-200 hover:scale-110`}
          >
            <img src={t.icon} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>

      <div className="slide">
        {technologies.map((t, index) => (
          <div
            className={`w-6 h-6 m-2 rounded-full p-1 bg-gray-200 hover:scale-110`}
          >
            <img src={t.icon} alt="" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
