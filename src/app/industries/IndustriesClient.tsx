"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Utensils, 
  ShoppingBag, 
  Factory, 
  Car, 
  HardHat, 
  Landmark, 
  Shirt, 
  Globe, 
  ShieldCheck, 
  Truck, 
  ArrowUpRight, 
  ArrowRight,
  Layers,
  ChevronRight,
  Anchor,
  Box,
  FileCheck
} from "lucide-react";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { CTA } from "@/components/custom/CTA";

// Structured industry item data with tags, features, and icons
interface IndustryItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  description: string;
  features: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    icon: Utensils,
    title: "Hospitality & HORECA",
    tag: "Culinary & Catering",
    description: "Heavy-duty SUS 304/316 stainless steel GN containers, induction cookware, and hollowware designed for commercial kitchens, hotels, and cruise lines.",
    features: ["Certified food-grade SUS 304", "Multi-ply impact bonded bottoms", "Dishwasher & oven compliant specifications"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & Consumer Goods",
    tag: "OEM Branding & Distribution",
    description: "Reliable white-label manufacturing of premium consumer cookware, tableware, and kitchen tools under global retailer and luxury houseware brands.",
    features: ["Bespoke mirror & satin finishes", "Custom logo etching and tooling", "Retail-ready packaging solutions"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    tag: "Contract Stamping & Components",
    description: "Providing custom steel stamping, high-force deep drawing, and technical sheet metal inputs for secondary assembly lines and industrial equipment.",
    features: ["200T to 800T press lines", "High-tolerance drawing operations", "Annealing & surface treatment"],
  },
  {
    icon: Car,
    title: "Automotive",
    tag: "Technical Materials",
    description: "Technical textile inputs for acoustic dampening, cabin soundproofing, and custom rubber-molded structural washers or components.",
    features: ["Acoustic insulation fabrics", "High-temperature vulcanized rubber", "Strict TS 16949-grade compliance"],
  },
  {
    icon: HardHat,
    title: "Construction",
    tag: "Reinforcements & Fabrics",
    description: "High-tensile reinforcement meshes, architectural tension fabric structures, and specialized metallurgy components for modern architectural systems.",
    features: ["High-strength technical mesh", "Weatherproof tension membranes", "Anti-corrosive structural elements"],
  },
  {
    icon: Landmark,
    title: "Government & Institutions",
    tag: "Volume Sourcing Contracts",
    description: "Public-sector and defense contract supplier of bulk institutional cafeteria stainless sets, heavy workwear, and tactical textile gear.",
    features: ["Large-scale delivery agreements", "Strict military-spec fabrics", "Consolidated port dispatch logs"],
  },
  {
    icon: Shirt,
    title: "Textile & Apparel",
    tag: "Automated Yarn & Looming",
    description: "Spinning premium organic cotton combed yarns (20s to 120s count) and weaving uniform, workwear, and premium shirting fabrics on high-speed air-jet looms.",
    features: ["GOTS certified organic cotton", "Color-fast dye batch validation", "Annual capacity of 3.5 Million meters"],
  },
  {
    icon: Globe,
    title: "Global Export Markets",
    tag: "International Trade Lanes",
    description: "Direct customs-cleared container logistics serving ports across Europe, the GCC region, and North America from our strategic industrial hubs.",
    features: ["Mundra and Kandla port routes", "Standard 20ft & 40ft container optimization", "Automated custom clearance indexing"],
  },
];

interface SolutionPillar {
  number: string;
  title: string;
  description: string;
}

const SOLUTIONS: SolutionPillar[] = [
  {
    number: "01",
    title: "Flexible OEM Blueprints",
    description: "We customize our hydraulic stamping dies and modify spinning frame parameters directly from customer-submitted CAD files or yarn specifications.",
  },
  {
    number: "02",
    title: "Material Transparency Reports",
    description: "Every dispatch is validated in our BKC testing laboratories, accompanied by metallurgical spectrometry data or GOTS raw material tracking certificates.",
  },
  {
    number: "03",
    title: "Commercial Volatility Shielding",
    description: "Through Long Term Supply Agreements (LTA) and commodity indexations, we shield partners from sudden metallurgical or cotton price shifts.",
  },
];

export function IndustriesClient() {
  // Animation settings using the approved ease bezier tuple
  const animEase = [0.4, 0, 0.2, 1] as const;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: animEase,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.02)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(217,119,6,0.02)_0%,transparent_50%)] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5" aria-labelledby="hero-heading">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <motion.span
            className="text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full uppercase tracking-wider"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: animEase }}
          >
            Enterprise Supply Solutions
          </motion.span>

          <motion.h1
            id="hero-heading"
            className="font-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: animEase }}
          >
            Industries We <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Serve</span>
          </motion.h1>

          <motion.p
            className="text-slate-350 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: animEase }}
          >
            Bohara Group operates as an essential manufacturing link across metallurgy, textiles, and consumer goods. Our capacity is scaled to deliver precision-grade components and spun cotton inputs to major global sectors.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: animEase }}
          >
            <a
              href="#sectors-grid"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-lg flex items-center gap-1.5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Explore Sectors
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact?inquiry=quote"
              className="bg-transparent border border-white/10 hover:border-white hover:bg-white/5 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 text-sm"
            >
              Request Industrial Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INDUSTRIES GRID SECTION */}
      <section id="sectors-grid" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Market Segments"
          title="Our Industrial Footprint"
          subtitle="Precision engineering, raw material compliance, and circular supply pipelines optimized for high-volume corporate consumption."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between h-full group hover:border-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/2 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Visual glow on card hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(217,119,6,0.015)_0%,transparent_40%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_90%_10%,rgba(217,119,6,0.04)_0%,transparent_50%)] transition-all duration-500" />
                
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xs font-bold text-slate-500 tracking-widest uppercase">
                      {`0${idx + 1}`}
                    </span>
                  </div>

                  <div>
                    <span className="text-2xs font-bold text-amber-500/80 uppercase tracking-widest block mb-1">
                      {ind.tag}
                    </span>
                    <h3 className="font-title text-xl font-extrabold text-white group-hover:text-amber-500 transition-colors duration-300">
                      {ind.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="border-t border-white/5 pt-4 mt-2">
                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                      {ind.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-2xs text-slate-300 font-medium">
                          <ChevronRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS SECTION */}
      <section className="bg-slate-900/40 border-y border-white/5 py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: animEase }}
          >
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Supply Integration
            </span>
            <h2 className="font-title text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Powering Volume Supply Chains with Direct Vertical Integration
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Bohara Group operates adjacent production ecosystems under a single holding framework. This vertical structure allows us to custom-synthesize steel alloys and looms weaving formulas to exact specifications, bypassing traditional broker margins.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {SOLUTIONS.map((sol, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-title font-extrabold text-sm flex-shrink-0">
                    {sol.number}
                  </div>
                  <div>
                    <h4 className="font-title font-bold text-white text-base leading-snug">
                      {sol.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 bg-slate-950 border border-white/5 p-8 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: animEase }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <h3 className="font-title text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              Custom Sourcing Agreements
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Our business development teams work alongside your supply chain officers to establish rolling delivery cycles. We dedicate manufacturing cells at our Rajasthan and Gujarat complexes specifically to contract specifications, guaranteeing volume slots.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-white/3 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xs font-title font-extrabold text-amber-500 uppercase tracking-widest bg-amber-500/15 border border-amber-500/20 px-2 py-0.5 rounded">
                  Capacity
                </span>
                <span className="text-xs text-slate-300 font-medium">Guaranteed seasonal allocation lines</span>
              </div>
              <div className="bg-white/3 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xs font-title font-extrabold text-amber-500 uppercase tracking-widest bg-amber-500/15 border border-amber-500/20 px-2 py-0.5 rounded">
                  Hedging
                </span>
                <span className="text-xs text-slate-300 font-medium">Indexed raw materials pricing plans</span>
              </div>
              <div className="bg-white/3 border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-xs font-title font-extrabold text-amber-500 uppercase tracking-widest bg-amber-500/15 border border-amber-500/20 px-2 py-0.5 rounded">
                  Testing
                </span>
                <span className="text-xs text-slate-300 font-medium">Full lab traceability with dispatches</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. GLOBAL REACH SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <SectionHeader
          badge="Logistics Matrix"
          title="Global Reach & Port Infrastructure"
          subtitle="From our BKC headquarters, we synchronize international freight channels to guarantee container arrivals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div
            className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-amber-500/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: animEase }}
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20">
              <Anchor className="w-6 h-6" />
            </div>
            <h3 className="font-title text-lg font-bold text-white">Direct Port Gateways</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">
              Our factories route export dispatches directly through Mundra and Kandla ports, keeping transport channels clear and fast.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-amber-500/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: animEase }}
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-title text-lg font-bold text-white">Container Optimizations</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">
              Cargo configurations are calculated by shipping algorithms to optimize space inside 20ft and 40ft containers, reducing freight overhead.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-900/60 p-8 rounded-2xl border border-white/5 flex flex-col items-center gap-4 hover:border-amber-500/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: animEase }}
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 border border-amber-500/20">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-title text-lg font-bold text-white">Customs Coordination</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">
              Direct digital integration with customs clearance gateways prevents delays and gets cargos moving on high-traffic shipping lanes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. WHY INDUSTRIES CHOOSE BOHARA GROUP */}
      <section className="bg-slate-900/50 border-t border-white/5 py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Pillars of Choice"
            title="Sustained Corporate Partnership"
            subtitle="The core operational capabilities that establish Bohara Group as a trusted manufacturing partner."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="flex flex-col items-start p-8 bg-slate-950 border border-white/5 rounded-2xl hover:border-amber-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: animEase }}
            >
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-title font-bold text-white text-base mb-2">Quality Assurance</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-0">
                Rigorous testing on raw alloys and combed cotton counts. Mechanical stress tests ensure batch consistency.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-start p-8 bg-slate-950 border border-white/5 rounded-2xl hover:border-amber-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: animEase }}
            >
              <Factory className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-title font-bold text-white text-base mb-2">Production Capacity</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-0">
                Backed by computerized loom arrays and stamping forces up to 800T, packing over 12 Million units annually.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-start p-8 bg-slate-950 border border-white/5 rounded-2xl hover:border-amber-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: animEase }}
            >
              <Truck className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-title font-bold text-white text-base mb-2">Timely Delivery</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-0">
                Proximity to Mundra and Kandla ports keeps dispatches on strict schedule and prevents customs congestion.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-start p-8 bg-slate-950 border border-white/5 rounded-2xl hover:border-amber-500/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: animEase }}
            >
              <Globe className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-title font-bold text-white text-base mb-2">Global Certifications</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-0">
                ISO 9001:2015, ISO 14001:2015, FDA food contact approved alloys, and GOTS-certified organic cotton.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <CTA
        title="Submit an Industrial Proposal"
        subtitle="Coordinate with our corporate trade sales teams in Mumbai to initiate supply chain audits, inspect lab data, or request custom quotes."
        buttonText="Request Industrial Quote"
        buttonHref="/contact?inquiry=quote"
      />
    </div>
  );
}
