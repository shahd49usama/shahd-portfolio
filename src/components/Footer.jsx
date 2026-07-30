import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>Built with React · Vite · Tailwind CSS</span>
      </div>
    </footer>
  )
}
