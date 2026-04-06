import { profile } from "../../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200/80 bg-[#fcfcfb]"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            About
          </p>

          <h3 className="text-4xl font-semibold tracking-[-0.03em] text-slate-950">
            A professional introduction
          </h3>

          <div className="h-px w-16 bg-slate-200" />
        </div>

        <div className="space-y-8">
          <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {profile.aboutParagraphOne}
          </p>

          <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {profile.aboutParagraphTwo}
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Focus Area
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Business analysis, process improvement, and cross-functional
                collaboration across digital and operational environments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Working Style
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Structured, detail-oriented, and outcome-driven, with a strong
                emphasis on clarity, stakeholder alignment, and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}