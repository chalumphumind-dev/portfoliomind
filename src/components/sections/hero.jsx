import { profile } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
            {profile.badge}
          </span>

          <div className="space-y-6">
            <div className="h-px w-16 bg-slate-200" />

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-6xl">
              {profile.headline}
            </h2>

            <p className="max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              {profile.introduction}
            </p>
          </div>

          <div className="grid max-w-xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">
                {profile.yearsOfExperience}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Years of professional experience
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">
                {profile.completedProjects}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Projects completed successfully
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 md:text-[15px]">
            {profile.summaryText}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-[2rem] bg-slate-200 blur-xl opacity-20" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}