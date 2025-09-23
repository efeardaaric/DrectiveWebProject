'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { sectionReveal } from '@/lib/motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={sectionReveal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      className={`section-padding py-16 lg:py-24 ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  )
}

