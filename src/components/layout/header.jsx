import { profile } from "../../data/portfolioData";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold tracking-[-0.02em] text-slate-950 dark:text-white md:text-xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            {profile.role}
          </p>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 p-1.5 dark:border-slate-800 dark:bg-slate-900/80">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-black hover:text-slate-100 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-900"
            >
              About
            </a>
            <a
              href="#experience"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-black hover:text-slate-100 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-900"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-black hover:text-slate-100 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-900"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-black hover:text-slate-100 dark:text-slate-400 dark:hover:bg-white dark:hover:text-slate-900"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg transition hover:bg-slate-100"
            >
            {darkMode ? "☀️" : "🌙"}
        </button>
        </div>
      </div>
    </header>
  );
}