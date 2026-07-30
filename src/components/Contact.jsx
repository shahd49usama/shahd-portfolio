import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: HiOutlineMail },
  { label: 'Phone', value: profile.phoneDisplay, href: `tel:+2${profile.phone}`, icon: HiOutlinePhone },
  {
    label: 'LinkedIn',
    value: 'shahd-usama',
    href: profile.linkedin,
    icon: FiLinkedin,
    external: true,
  },
  { label: 'GitHub', value: 'shahd49usama', href: profile.github, icon: FiGithub, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
        <Reveal className="flex flex-col items-center">
          <span className="font-mono text-xs tracking-[0.25em] text-cyan-300 mb-4">09 / CONTACT</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Let's talk about the internship
          </h2>
          <p className="mt-4 max-w-lg text-slate-300 leading-relaxed">
            Based in {profile.location} and open to the Summer Internship Program — Customer Support
            Engineer. Reach out through any channel below.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-left hover:bg-white/[0.07] hover:border-cyan-300/40 transition-colors"
              >
                <span className="w-9 h-9 rounded-md bg-white/5 text-cyan-300 flex items-center justify-center shrink-0">
                  <link.icon className="text-lg" />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-widest text-slate-400">
                    {link.label.toUpperCase()}
                  </span>
                  <span className="block text-sm font-medium">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-slate-400">
            <HiOutlineLocationMarker className="text-cyan-300" />
            {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
