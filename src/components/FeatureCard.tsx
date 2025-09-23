'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cardHover, staggerItem } from '@/lib/motion'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
      className={`group ${className}`}
    >
      <motion.div
        variants={cardHover}
        className="glass p-6 lg:p-8 rounded-xl hover:glass-strong transition-all duration-300 h-full"
      >
        <div
          className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-lg mb-6 transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #cc972b 70%, #b88a2a 100%)' }}
        >
          <span style={{ color: '#fff', filter: 'drop-shadow(0 2px 8px #cc972b)' }}>
            {icon}
          </span>
        </div>
        
        <h3 className="font-heading font-semibold text-lg lg:text-xl text-foreground mb-4 group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-foreground/70 text-sm lg:text-base leading-relaxed">
          {description}
        </p>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}


