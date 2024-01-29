import React from "react";
import perfil from "../assets/perfil.jpeg";
const Hero = () => {
  return (
    <section className="flex  gap-2 mb-2">
      <div className="flex flex-col">
        <img src={perfil} alt="" className=" w-16 rounded-full" />

        <div className=" mt-2">
          <h1 className="text-[32px] sm:text-[38px] font-bold text-opacity-10">
            Soy <span className=" text-secondary">Pablo Sierra.</span>
          </h1>
          <h3 className=" text-md font-semibold ">
            Desarrollador Web Fullstack
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
