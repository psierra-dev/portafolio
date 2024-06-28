import React from "react";
import perfil from "../assets/perfil.jpeg";
import Skill from "./Skill.jsx"
import About from "./About.jsx"
import ButtonLink from "./ButtonLink.jsx"
import { technologies } from "../constans";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (

      <div className=" flex flex-col md:w-[70%] lg:w-full gap-4 h-full justify-center">
        <section className="flex  gap-2 mb-2">
          <div className="flex gap-2">
            <img src={perfil} alt="" className=" w-16 rounded-full" />

            <div className=" ">
              <h4 className="text-xl font-bold text-opacity-10">
                Hola, soy Pablo Sierra
              </h4>
              <h1 className=" text-lg text-sky-600 font-medium ">
                 Desarrollador Web
              </h1>
            </div>
          </div>
        </section>
        <Skill technologies={technologies} />
                <About />
               
                <ul className="flex items-center gap-2 ">
                  <li>
                    <ButtonLink to="https://github.com/PabloSA57" target="_blank">
                    
                        <FaGithub />
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink
                      to="https://www.linkedin.com/in/pablo-sierra-543aa220b/"
                      target="_blank"
                    >
                        <FaLinkedin />
                    </ButtonLink>
                  </li>
                  <li>
                    <span className="text-xs">Psierra472@gmail.com</span>
                  </li>
                </ul>
                
               
    </div>

  );
};

export default Hero;
