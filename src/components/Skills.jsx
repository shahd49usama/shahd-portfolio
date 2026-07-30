import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="04 / SKILLS"
          title="Technical toolkit"
          description="Organized by domain — every skill listed carries equal weight."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-cardHover transition-shadow">
                <h3 className="font-mono text-xs tracking-[0.2em] text-navy-600 mb-4">
                  {group.category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-ink-700 bg-navy-700/[0.06] border border-navy-700/10 rounded-md px-3 py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
