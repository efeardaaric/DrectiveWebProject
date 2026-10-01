"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/motion";

interface ButtonProps {
  text: string;
  href: string;
}

interface CTAProps {
  title: string;
  description: string;
  primaryButton: ButtonProps;
  secondaryButton: ButtonProps;
  className?: string;
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = "",
}: CTAProps) {
  return (
    <section className={`container-custom section-padding my-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeSmooth }}
        className="surface-panel px-8 py-12 text-center sm:px-12"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={primaryButton.href} className="btn-primary">
            {primaryButton.text}
          </a>
          <a href={secondaryButton.href} className="btn-secondary">
            {secondaryButton.text}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
