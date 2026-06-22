"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  divisionContext?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  authorName,
  authorRole,
  companyName,
  divisionContext,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-panel rounded-xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between h-full group hover:border-amber-500/10 transition-colors duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {/* Absolute decorative Quote background */}
      <Quote className="absolute top-6 right-6 w-12 h-12 text-white/3 pointer-events-none group-hover:text-amber-500/5 transition-colors duration-300" />

      <div className="flex flex-col gap-6 relative z-10">
        {divisionContext && (
          <span className="inline-block text-2xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/5 px-3 py-1 rounded border border-amber-500/10 w-fit">
            {divisionContext}
          </span>
        )}
        <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed mb-0">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="border-t border-white/5 pt-6 mt-8 relative z-10 flex flex-col gap-1">
        <h5 className="font-title font-bold text-white text-sm">
          {authorName}
        </h5>
        <p className="text-slate-400 text-xs">
          {authorRole}, <span className="text-slate-300 font-semibold">{companyName}</span>
        </p>
      </div>
    </motion.div>
  );
}
