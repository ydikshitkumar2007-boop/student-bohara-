"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  iconName: keyof typeof Icons;
  title: string;
  description: string;
  stepNumber?: string;
  className?: string;
}

export function ServiceCard({
  iconName,
  title,
  description,
  stepNumber,
  className,
}: ServiceCardProps) {
  // Dynamically resolve icon element
  const IconComponent = Icons[iconName] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      className={cn(
        "glass-panel rounded-xl p-8 border border-white/5 shadow-lg relative overflow-hidden group hover:border-amber-500/20 hover:-translate-y-1.5 transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {/* Top border glow path */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-amber-500/30 transition-all duration-500" />

      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
          {IconComponent && <IconComponent className="w-5 h-5" />}
        </div>
        {stepNumber && (
          <span className="font-title text-3xl font-extrabold text-white/5 group-hover:text-amber-500/10 transition-colors duration-300">
            {stepNumber}
          </span>
        )}
      </div>

      <h4 className="font-title text-xl font-bold text-white mb-3">
        {title}
      </h4>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-0">
        {description}
      </p>
    </motion.div>
  );
}
