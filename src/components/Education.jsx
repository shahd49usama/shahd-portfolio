import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { education } from '../data/content.js'
import { HiOutlineAcademicCap } from 'react-icons/hi'

export default function Education() {
  return (
    <section id="education" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading eyebrow="02 / EDUCATION" title="Education" />

        <Reveal>
          <div className="rounded-xl border border-slate-200 bg-white shadow-card p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
            <div className="w-12 h-12 rounded-lg bg-navy-700 text-cyan-300 flex items-center justify-center shrink-0">
              <HiOutlineAcademicCap className="text-2xl" />
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink-900">{education.degree}</h3>
              <p className="text-navy-700 font-medium mt-1">{education.university}</p>
              <p className="font-mono text-xs text-slate-500 mt-2 tracking-wide">
                {education.period} · {education.location}
              </p>
              <p className="text-slate-600 leading-relaxed mt-4 max-w-2xl">{education.note}</p>
            </div>

            <div className="md:text-right shrink-0">
              <p className="font-mono text-xs text-slate-400 tracking-widest">CGPA</p>
              <p className="font-display text-3xl font-semibold text-navy-700">{education.gpa}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
