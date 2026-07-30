import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { leadership } from '../data/content.js'
import { HiOutlineUserGroup } from 'react-icons/hi'

export default function Leadership() {
  return (
    <section id="leadership" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading eyebrow="08 / LEADERSHIP" title="Leadership & activities" />

        <div className="grid md:grid-cols-2 gap-5">
          {leadership.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.06}>
              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-cardHover transition-shadow h-full">
                <div className="shrink-0 w-10 h-10 rounded-md bg-navy-700 text-cyan-300 flex items-center justify-center">
                  <HiOutlineUserGroup className="text-lg" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink-900">{item.title}</h3>
                  <p className="text-sm text-navy-600 font-medium mt-0.5">{item.org}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
