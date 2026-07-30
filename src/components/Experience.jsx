import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="05 / EXPERIENCE"
          title="Training & experience"
          description="A hop-by-hop path through hands-on programs, freelance work, and applied training."
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-slate-200" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.org}-${job.period}`} delay={(i % 4) * 0.05} className="relative">
                <span
                  className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-navy-700"
                  aria-hidden="true"
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-display font-semibold text-lg text-ink-900">
                    {job.org} <span className="text-slate-400 font-normal">— {job.role}</span>
                  </h3>
                  <span className="font-mono text-xs text-navy-600 tracking-wide whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {job.points.map((point) => (
                    <li key={point} className="text-slate-600 text-sm leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
