"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export function CTA({ title, subtitle, buttonText, buttonHref }: CTAProps) {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto" aria-label="Call to Action">
      <motion.div
        className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
      >
        {/* Abstract metallic glow path */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(217,119,6,0.08)_0%,transparent_60%)] pointer-events-none" />

        <div className="flex flex-col gap-3 relative z-10 text-center md:text-left">
          <h3 className="font-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            {title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <Link
            href={buttonHref}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
