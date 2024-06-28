import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, className, ...props }) => {
    let style = "grid place-content-center border-[1px] border-neutral-600 rounded-lg text-lg h-8 w-8 hover:text-sky-700"

    if(className) {
        style += className 
    }
  return (
    <Link {...props} className={style}>
      <span>{children}</span>
    </Link>
  );
};

export default ButtonLink;