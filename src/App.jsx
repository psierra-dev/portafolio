import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import { img } from "./assets";
import Contact from "./components/Contact";
import { technologies } from "./constans";

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
                  {img.iconRed.map((icon) => (
                    <li>
                      <img src={icon} alt="" className="w-7 h-7" />
                    </li>
                  ))}
                  <li className="text-sm">Psierra472@gmail.com</li>
                </ul>
              </div>
            </section>

            <section className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
              <Project />
            </section>
          </div>
        </main>

        <footer className="p-2 md:hidden">
          <small>Pablo Sierra</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
