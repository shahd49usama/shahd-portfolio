import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { certifications } from '../data/content.js'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading eyebrow="07 / CERTIFICATIONS" title="Certifications & courses" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 0.05}>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/60 p-5 shadow-card hover:shadow-cardHover transition-shadow h-full">
                <HiOutlineBadgeCheck className="text-navy-700 text-xl mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-ink-900 text-sm leading-snug">{cert.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                  <span
                    className={`inline-block mt-2 font-mono text-[10px] tracking-widest px-2 py-0.5 rounded ${
                      cert.status === 'In Progress'
                        ? 'bg-cyan-400/10 text-cyan-700'
                        : 'bg-navy-700/[0.06] text-navy-700'
                    }`}
                  >
                    {cert.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
