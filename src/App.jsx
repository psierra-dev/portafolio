import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { technologies } from "./constans";


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#010101]">
        <Navbar />
        <main className="mx-auto min-h-screen px-3 flex flex-col gap-20 md:px-12 max-w-screen-xl lg:px-12 lg:grid lg:grid-cols-12 lg:gap-6">
            <section className=" gap-4 lg:sticky lg:top-0 lg:col-span-6  pt-16 lg:pt-20  lg:py-20  lg:max-h-screen  lg:py-24">
                <Hero />
               
            </section>

            <section className="flex flex-col lg:pt-24 gap-20 lg:col-span-6 lg:py-24">
              <Project />

              <section className="flex flex-col gap-4" id="skill">
                <h2 className="text-lg text-white">Habilidades</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col w-full bg-[#080808]  p-3 rounded-md justify-center items-center gap-2">
                  <span className="text-lg text-blue-400">Frontend</span>
                  <p className="text-[14px] text-gray-200">Diseño responsivo y móvil primero</p>
                </div>
                <div className="flex flex-col bg-[#080808]  w-full   p-3 rounded-md justify-center items-center gap-2">
                  <span className="text-lg text-blue-400">Backend</span>
                  <p className="text-[14px] text-gray-200">Creación de APIs RESTful</p>
                </div>
                <div className="flex flex-col w-full bg-[#080808]  p-3 rounded-md justify-center items-center gap-2">
                  <span className="text-lg text-blue-400">Ui/Ux</span>
                  <p className="text-[14px] text-gray-200">Creacion de interfaces web</p>
                </div>
                <div className="flex flex-col w-full bg-[#080808]  p-3 rounded-md justify-center items-center gap-2">
                  <span className="text-lg text-blue-400">DataBase</span>
                  <p className="text-[14px] text-gray-200">Diseño y optimización</p>
                </div>

                </div>
              </section>
              <Contact />
            </section>
        </main>

        <footer className="p-2 md:hidden w-full flex justify-center">
          <small>Pablo Sierra</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
