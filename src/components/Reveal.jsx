import { motion } from 'framer-motion'

/**
 * Wraps children in a subtle fade/rise-in-on-scroll animation.
 * Kept short and consistent so motion reads as intentional, not decorative.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
