"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FacilityCardProps {
  imageUrl: string;
  location: string;
  name: string;
  description: string;
  capabilities: string[];
  detailsLink: string;
  className?: string;
}

export function FacilityCard({
  imageUrl,
  location,
  name,
  description,
  capabilities,
  detailsLink,
  className,
}: FacilityCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-panel rounded-xl border border-white/5 overflow-hidden group hover:border-amber-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
    >
      {/* Facility Image */}
      <div className="h-56 relative overflow-hidden bg-slate-950 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md flex items-center gap-1.5 text-2xs font-semibold text-white">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          {location}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="font-title text-xl font-bold text-white mb-2">
            {name}
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            {description}
          </p>

          <h5 className="text-2xs font-bold text-slate-500 uppercase tracking-widest mb-3">
            Core Infrastructure
          </h5>
          <ul className="flex flex-col gap-2 list-none p-0 mb-6 text-xs text-slate-300">
            {capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={detailsLink}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-white transition-colors duration-300 w-fit"
        >
          View Plant Facilities
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
