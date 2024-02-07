import React from "react";
import { Link } from "react-router-dom";

import { projects } from "../constans";

import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const CardProject = ({ project }) => {
  return (
    <figure className="relative rounded-xl md:p-4   gap-3">
      <div className="w-full  h-auto  overflow-x-auto  flex justify-center  rounded-xl">
        <img
          className="w-full h-full rounded-xl "
          src={project?.img}
          alt="image of project"
          width="384"
          height="512"
        />
      </div>

      <div className="flex justify-between items-center w-full my-1">
        <Link to={project.link_web} target="_blank">
          <div className="flex items-center hover:text-secondary">
            <h2 className="text-md font-semibold m-0 w-fit">
              {project?.nombre}
            </h2>
            <span className="">
              <FiLink />
            </span>
          </div>
        </Link>

        <Link to={project.link_github} target="_blank">
          <span className="hover:text-secondary text-md">
            <FaGithub />
          </span>
        </Link>
      </div>
      <div className="">
        <p className="text-sm font-medium text-gray-400">
          {project?.descripcion}
        </p>
      </div>

      <div className="flex gap-2 mt-2">
        {project.technologies.map((t) => (
          <div className="w-6 h-6 bg-white rounded-full p-1">
            <img className="w-full h-full" src={t.icon} alt="tech" />
          </div>
        ))}
      </div>
    </figure>
  );
};

const Project = () => {
  return (
    <div>
      <h2 className="text-lg text-white mb-2">Proyectos</h2>
      <ul className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6">
        {projects?.map((project) => (
          <li className="">
            <CardProject project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
