"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  bgImageUrl: string;
}

export function Hero({
  badge,
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  bgImageUrl,
}: HeroProps) {
  // Staggered entry animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24" aria-label="Hero Introduction">
      {/* Background image optimizing for LCP priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageUrl}
          alt="Bohara Group abstract premium metallurgy metal background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/85 to-slate-950/75 z-1" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column copywriting content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4"
            variants={itemVariants}
          >
            {badge}
          </motion.span>
          <motion.h1
            className="font-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <Link
              href={primaryCtaHref}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-lg flex items-center gap-1.5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              {primaryCtaText}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href={secondaryCtaHref}
              className="bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300"
            >
              {secondaryCtaText}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column glassmorphism visual dashboard */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <div className="glass-panel rounded-2xl p-6 border border-white/8 shadow-2xl relative overflow-hidden">
            {/* Visual shine overlay */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            
            <div className="flex items-center gap-1.5 border-b border-white/5 pb-4 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="font-title text-2xs font-semibold text-slate-500 uppercase tracking-widest ml-3">
                Live Production Metrics
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-white/3 border border-white/3 p-4 rounded-lg">
                <span className="text-sm text-slate-400">Total Extruded Output</span>
                <span className="font-title font-extrabold text-white text-base">98.4% Efficiency</span>
              </div>
              <div className="flex justify-between items-center bg-white/3 border border-white/3 p-4 rounded-lg">
                <span className="text-sm text-slate-400">Daily Melt Pressing</span>
                <span className="font-title font-extrabold text-white text-base">120 Metric Tons</span>
              </div>
              <div className="flex justify-between items-center bg-white/3 border border-white/3 p-4 rounded-lg">
                <span className="text-sm text-slate-400">Export Customs Status</span>
                <span className="font-title font-extrabold text-amber-500 text-base">Cleared (EX-9024)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
