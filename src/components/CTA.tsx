"use client";
import React from "react";

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
  className = ''
}: CTAProps) {
  return (
    <section className={`rounded-2xl p-8 border text-center grid gap-3 max-w-4xl mx-auto my-12 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-foreground/60 mb-4">{description}</p>
      <div className="flex gap-4 justify-center">
        <a
          href={primaryButton.href}
          className="px-6 py-3 rounded-xl bg-yellow-400 text-foreground font-medium hover:bg-yellow-500 transition-colors duration-300"
        >
          {primaryButton.text}
        </a>
        <a
          href={secondaryButton.href}
          className="px-6 py-3 rounded-xl border border-foreground/20 font-medium hover:bg-foreground/5 transition-colors duration-300"
        >
          {secondaryButton.text}
        </a>
      </div>
    </section>
  );
}
