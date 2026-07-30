import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { achievements } from '../data/content.js'
import { HiOutlineStar } from 'react-icons/hi'

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="03 / ACHIEVEMENTS"
          title="Milestones worth noting"
          description="A snapshot of results across academics, teams, and leadership."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-xl border border-slate-200 bg-gradient-to-br from-navy-950 to-navy-800 text-white p-6 shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition-all duration-300">
                <HiOutlineStar className="text-cyan-300 text-xl mb-4" />
                <h3 className="font-display font-semibold text-lg leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
