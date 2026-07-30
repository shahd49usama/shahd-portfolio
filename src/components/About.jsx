import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { profile } from '../data/content.js'
import { HiOutlineChip, HiOutlineChatAlt2, HiOutlineLightningBolt } from 'react-icons/hi'

const pillars = [
  {
    icon: HiOutlineChip,
    title: 'Technical Grounding',
    text: 'Networking, troubleshooting, and programming fundamentals built through structured engineering coursework and Cisco training.',
  },
  {
    icon: HiOutlineChatAlt2,
    title: 'Clear Communication',
    text: 'Comfortable translating technical detail into plain language for real clients under real deadlines.',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Fast, Steady Learner',
    text: 'Five concurrent training tracks in under a year — proof of a habit, not a one-off effort.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionHeading eyebrow="01 / ABOUT" title="PROFESSIONAL SUMMARY
" />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <Reveal delay={0.05}>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed">{profile.about}</p>
          </Reveal>

          <div className="grid gap-5">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.1 + i * 0.06}>
                <div className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50/60 p-5 shadow-card hover:shadow-cardHover transition-shadow">
                  <div className="shrink-0 w-10 h-10 rounded-md bg-navy-700 text-cyan-300 flex items-center justify-center">
                    <pillar.icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink-900">{pillar.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
