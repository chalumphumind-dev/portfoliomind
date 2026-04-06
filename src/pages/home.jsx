import Header from "../components/layout/header";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/project";
import Contact from "../components/sections/contact";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}