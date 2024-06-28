import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constans";

import { MdOutlineMenu, MdClose } from "react-icons/md";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full flex items-center py-3 bg-[#000000] md:px-12 px-1 lg:px-20 fixed top-0 z-20 border-2 border-primary border-b-zinc-900">
      <div className="mx-auto max-w-screen-xl w-full   flex justify-between  items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            PS &nbsp;
            <span className="sm:block hidden"> | FullStack</span>
          </p>
        </Link>
          <nav>
            <ul className="list-none hidden md:flex flex-row gap-10">
              {navLinks.map((n) => (
                <li
                  key={n.id}
                  className={`${
                    active === n.title ? "text-secondary" : "text-white"
                  } hover:text-secondary text-md font-medium cursor-pointer`}
                  onClick={() => setActive(n.title)}
                >
                  <a href={`#${n.id}`}>{n.title}</a>
                </li>
              ))}
            </ul>

          </nav>
            
        <div className="md:hidden relative">
          <button
            className="text-white text-xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? <MdOutlineMenu /> : <MdClose />}
          </button>

          {toggle && (
            <div className="fixed  right-0 left-0  bottom-0 top-[54px] flex justify-end bg-[#141414bf] z-40">
              <div className="w-[70%] px-4 bg-[#000000]">
                <nav className={` `}>
                  <ul className="list-none flex   flex-1 flex-col gap-4 my-7">
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`font-poppins cursor-pointer text-md md:text-md font-normal md:font-semibold hover:text-secondary ${
                          active === nav.title ? "text-secondary" : "text-white"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
