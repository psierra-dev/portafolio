import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";

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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Skill = ({ technologies, size = "10" }) => {
  return (
    <section className="w-full mt-10">
      <motion.ul
        className="container flex flex-row flex-wrap  gap-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((t, index) => (
          <motion.li key={t.name + index} variants={item} className="item">
            <div
              className={`w-8 h-8 rounded-full p-1 bg-white hover:scale-110`}
            >
              <img src={t.icon} alt="" className="w-full h-full" />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skill;
