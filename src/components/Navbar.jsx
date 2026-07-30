import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [activeId, setActiveId] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-50/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display font-semibold text-lg text-ink-900 tracking-tight flex items-center gap-2"
        >
          <span className="w-7 h-7 rounded bg-navy-700 text-cyan-300 text-xs font-mono flex items-center justify-center">
            SU
          </span>
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeId === link.id
                    ? 'text-navy-700 bg-navy-700/5'
                    : 'text-slate-600 hover:text-navy-700'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('contact')
          }}
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-navy-700 text-white text-sm font-medium px-4 py-2 hover:bg-navy-800 transition-colors"
        >
          Contact Me
        </a>

        <button
          className="md:hidden text-2xl text-ink-900"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-200 px-6 py-4">
          <ul className="flex flex-col gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md ${
                    activeId === link.id ? 'text-navy-700 bg-navy-700/5' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
