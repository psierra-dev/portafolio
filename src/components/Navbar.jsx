import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constans";
import { img } from "../assets";
const { menu, close } = img.icon;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollTop > 100 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full flex items-center p-3 fixed top-0 z-20 border-2  bg-primary   border-primary border-b-zinc-900">
      <div className="w-full  max-w-screen-xl m-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Pablo Sierra &nbsp;
            <span className="sm:block hidden"> | FullStack</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((n) => (
            <li
              key={n.id}
              className={`${
                active === n.title ? "text-secondary" : "text-white"
              } hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(n.title)}
            >
              <a href={`#${n.id}`}>{n.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain bg-white"
            onClick={() => setToggle(!toggle)}
          />

          <nav
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black flex flex-row border border-black border-l-secondary justify-center black-gradient absolute top-0 right-0 w-1/2 h-screen max-h-[900px] max-w-[500px] z-10`}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="absolute top-2 right-2 w-[28px] h-[28px] object-contain bg-white "
              onClick={() => setToggle(!toggle)}
            />
            <ul className="list-none flex  items-start flex-1 flex-col gap-4 my-7">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-lg hover:text-secondary ${
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
    </header>
  );
};

export default Navbar;
