"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4 mb-14 max-w-3xl",
        isCenter ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {badge && (
        <span className="inline-block text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="font-title text-3xl sm:text-4xl font-extrabold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
