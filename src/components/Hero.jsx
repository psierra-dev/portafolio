import React from "react";
import { styles } from "../style";
import perfil from "../assets/perfil2.jpeg";
import Skill from "./Skill";
import { technologies } from "../constans";

const Hero = () => {
  return (
    <section className="flex gap-2">
      <div>
        <h1 className="text-5xl font-bold">Pablo Sierra</h1>
        <h3 className="text-lg font-medium mt-2">
          Desarrollador Web Fullstack
        </h3>

        <Skill technologies={technologies} />
      </div>
    </section>
  );
};

export default Hero;
