import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { technologies } from "./constans";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <main className="mx-auto min-h-screen px-3 md:px-12 max-w-screen-xl lg:px-20">
          <div className="lg:flex lg:justify-between lg:gap-6 ">
            <section className="lg:sticky lg:top-0 pt-16 md:pt-20  md:py-20 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-1/2 lg:py-24">
              <div className=" flex flex-col h-full justify-center">
                <Hero />

                <Skill technologies={technologies} />
                <About />
                <ul className="flex items-center gap-2 mt-10 ">
                  <li>
                    <Link to="https://github.com/PabloSA57" target="_blank">
                      <span className="text-lg hover:text-secondary">
                        <FaGithub />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/in/pablo-sierra-543aa220b/"
                      target="_blank"
                    >
                      <span className="text-lg hover:text-secondary">
                        <FaLinkedin />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span className="text-xs">Psierra472@gmail.com</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
              <Project />
              <Contact />
            </section>
          </div>
        </main>

        <footer className="p-2 md:hidden w-full flex justify-center">
          <small>Pablo Sierra</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
