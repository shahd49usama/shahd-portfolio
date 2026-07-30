import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="06 / PROJECTS"
          title="Selected projects"
          description="Ordered by relevance to customer-facing technical support work."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.06}>
              <article className="h-full flex flex-col rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="font-display font-semibold text-lg text-ink-900">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">{project.summary}</p>

                <ul className="mt-4 space-y-1.5">
                  {project.points.map((point) => (
                    <li key={point} className="text-slate-600 text-sm leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="font-mono text-[11px] tracking-widest text-slate-400 mb-2">TECHNOLOGIES</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-navy-700 bg-navy-700/[0.06] rounded px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-[11px] tracking-widest text-slate-400 mb-2">
                    SKILLS DEMONSTRATED
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((s) => (
                      <span key={s} className="text-xs text-cyan-700 bg-cyan-400/10 rounded px-2 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
