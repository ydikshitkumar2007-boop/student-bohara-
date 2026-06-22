"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  specs?: string[];
  ctaLink: string;
  className?: string;
}

export function ProductCard({
  imageUrl,
  category,
  title,
  description,
  specs,
  ctaLink,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-slate-900 border border-white/5 rounded-xl overflow-hidden group hover:border-amber-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {/* Product Image Frame */}
      <div className="h-60 relative overflow-hidden bg-slate-950 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      {/* Card Content Grid */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <span className="inline-block text-2xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            {category}
          </span>
          <h4 className="font-title text-xl font-bold text-white mb-3">
            {title}
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Optional Spec specifications */}
          {specs && specs.length > 0 && (
            <ul className="flex flex-col gap-2 list-none p-0 mb-6 border-t border-white/5 pt-4 text-xs text-slate-400">
              {specs.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {spec}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href={ctaLink}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-white transition-colors duration-300 w-fit"
        >
          View Technical Catalog
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
