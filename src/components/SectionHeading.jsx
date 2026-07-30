import Reveal from './Reveal.jsx'

/**
 * eyebrow: short mono label, styled like a route/port tag (e.g. "02 / EDUCATION")
 * title: the human-readable section title
 * description: optional supporting sentence
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-3 ${alignment} max-w-2xl mb-12 md:mb-16`}>
      <span className="font-mono text-xs tracking-[0.25em] text-navy-600 flex items-center gap-2">
        <span className="h-px w-6 bg-cyan-400" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
        {title}
      </h2>
      {description && <p className="text-slate-600 leading-relaxed">{description}</p>}
    </Reveal>
  )
}
