import { projects } from "../../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#fcfcfb]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            Work Experinced
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950">
            Project & Daily Task
          </h3>
          <p className="mt-6 text-base leading-8 text-slate-500">
            A curated selection of projects demonstrating my experience in
            business analysis, operational improvement, and cross-functional
            collaboration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Project
              </p>

              <h4 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                {project.title}
              </h4>

              <div className="mt-5 h-px w-12 bg-slate-200 transition-all duration-300 group-hover:w-20" />

              <p className="mt-6 text-sm leading-7 text-slate-500">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}