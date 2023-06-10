import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { img } from "./assets";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <section className="mx-auto min-h-screen px-6 md:px-12 max-w-screen-xl lg:px-20">
          <div className="lg:flex lg:justify-between lg:gap-4 ">
            <section className="lg:sticky lg:top-0 pt-20  md:py-20 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-1/2 lg:py-24">
              <div>
                <Hero />

                <About />
              </div>

              <ul className="flex gap-5 ">
                {img.iconRed.map((icon) => (
                  <li>
                    <img src={icon} alt="" className="w-8 h-8" />
                  </li>
                ))}
              </ul>
            </section>

            <main className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
              <Project />

              <Contact />
            </main>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
