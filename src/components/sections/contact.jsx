import { profile } from "../../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            Contact
          </p>

          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-slate-950">
            Let us connect professionally
          </h3>

          <p className="mt-6 text-base leading-8 text-slate-500">
            Thank you for visiting my portfolio. Should you wish to discuss a
            professional opportunity, collaboration, or project, I would be
            pleased to hear from you.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              {profile.email}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}