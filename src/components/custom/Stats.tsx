"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export interface StatItem {
  value: number;
  suffix?: string;
  description: string;
}

interface StatsProps {
  items: StatItem[];
}

export function Stats({ items }: StatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-slate-900 border-y border-white/5 py-14 px-6 overflow-hidden" aria-label="Corporate Milestones">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-center"
      >
        {items.map((item, idx) => (
          <StatBox key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}

function StatBox({ item }: { item: StatItem }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const end = item.value;
    const duration = 2000; // 2 seconds
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const val = Math.floor(easeProgress * end);
      
      setCurrentVal(val);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentVal(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, item.value]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-title text-4xl sm:text-5xl font-extrabold text-amber-500 flex items-baseline leading-none mb-3">
        <span ref={ref}>{currentVal}</span>
        {item.suffix && <span className="text-xl sm:text-2xl font-bold ml-0.5">{item.suffix}</span>}
      </div>
      <p className="text-slate-400 text-xs sm:text-sm max-w-[180px] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
