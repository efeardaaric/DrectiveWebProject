'use client'

import { motion } from 'framer-motion'
import { marquee } from '@/lib/motion'

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Node.js', 'Express.js', 'Firebase', 'Supabase', 'Prisma',
  'MongoDB', 'PostgreSQL', 'Unity', 'C#', 'Unreal Engine',
  'Godot', 'Photon', 'Mirror', 'Netcode', 'Blender',
  'Vercel', 'GitHub', 'Docker', 'Kubernetes', 'AWS',
  'Google Cloud', 'Azure', 'TensorFlow', 'PyTorch', 'OpenAI',
  'LangChain', 'Pandas', 'NumPy'
]

export default function LogoMarquee() {
  return (
    <section className="section-padding py-12 lg:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-heading font-semibold text-lg text-foreground/70 mb-2">
            Güvenilen Teknolojiler
          </h3>
          <p className="text-foreground/50 text-sm">
            {technologies.join(', ')}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            variants={marquee}
            animate="animate"
            className="flex space-x-6 lg:space-x-8"
            style={{ width: 'max-content' }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-sm font-medium text-foreground/80">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
