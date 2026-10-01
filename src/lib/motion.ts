import { Variants } from 'framer-motion'

export const easeSmooth = [0.22, 1, 0.36, 1] as const

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeSmooth },
  },
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeSmooth },
  },
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeSmooth },
  },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeSmooth },
  },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
}

export const heroTitle: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeSmooth },
  },
}

export const heroSubtitle: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeSmooth, delay: 0.15 },
  },
}

export const heroDescription: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeSmooth, delay: 0.28 },
  },
}

export const heroButtons: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth, delay: 0.4 },
  },
}

export const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -6,
    transition: { duration: 0.35, ease: easeSmooth },
  },
}

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.25, ease: easeSmooth },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.12 },
  },
}

export const parallaxBg: Variants = {
  initial: { scale: 1.06, opacity: 0.25 },
  animate: {
    scale: 1,
    opacity: 0.12,
    transition: { duration: 1.4, ease: easeSmooth },
  },
}

export const marquee: Variants = {
  animate: {
    x: [0, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 28,
        ease: 'linear',
      },
    },
  },
}

export const sectionReveal: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeSmooth },
  },
}

export const navItem: Variants = {
  initial: { opacity: 0, y: -8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeSmooth },
  },
}

export const mobileMenu: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeSmooth },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: easeSmooth },
  },
}

export const revealImage: Variants = {
  initial: { opacity: 0, scale: 1.04 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easeSmooth },
  },
}

export const listRow: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeSmooth },
  },
}
