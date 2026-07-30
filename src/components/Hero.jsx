import { motion } from 'framer-motion'
import { HiOutlineDownload, HiOutlineMail } from 'react-icons/hi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-navy-700/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.3em] text-cyan-300 mb-6 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
            </span>
            AVAILABLE FOR SUMMER INTERNSHIP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight"
          >
            {profile.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-lg md:text-xl text-slate-200 font-medium"
          >
            {profile.role}
            <span className="text-cyan-300"> — {profile.targetRole}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-slate-300 leading-relaxed"
          >
            {profile.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="/Shahd_Usama_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 text-navy-950 text-sm font-semibold px-5 py-3 hover:bg-cyan-300 transition-colors"
            >
              <HiOutlineDownload className="text-base" />
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white text-sm font-medium px-5 py-3 hover:bg-white/10 transition-colors"
            >
              <FiLinkedin className="text-base" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white text-sm font-medium px-5 py-3 hover:bg-white/10 transition-colors"
            >
              <FiGithub className="text-base" />
              GitHub
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 text-slate-300 text-sm font-medium px-2 py-3 hover:text-cyan-300 transition-colors"
            >
              <HiOutlineMail className="text-base" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Signature element: a diagnostic/status panel — echoing the
            network-terminal world she's training in, without gimmick. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 font-mono text-sm"
        >
          <div className="flex items-center gap-1.5 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-2 text-xs text-slate-400 tracking-wide">profile_status.log</span>
          </div>
          <ul className="space-y-3.5">
            {profile.status.map((row) => (
              <li key={row.label} className="flex items-center justify-between gap-4">
                <span className="text-slate-400">{row.label}</span>
                <span className="text-cyan-300 text-right">{row.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
            <span className="text-cyan-300">&gt;</span> mission: resolve technical issues clearly,
            calmly, and on time.
            <span className="inline-block w-1.5 h-3.5 bg-cyan-300 align-middle ml-1 animate-blink" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
