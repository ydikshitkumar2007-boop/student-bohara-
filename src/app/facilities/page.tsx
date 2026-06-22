import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { FacilityCard } from "@/components/custom/FacilityCard";
import { CTA } from "@/components/custom/CTA";
import { JsonLd } from "@/components/custom/JsonLd";

export const metadata: Metadata = {
  title: "Production Facilities | Plant Infrastructure & Logistics",
  description:
    "Explore Bohara Group's high-tech manufacturing plants in Gujarat and Rajasthan, equipped with 800T presses, automated looms, and ISO quality labs.",
  alternates: {
    canonical: "https://boharagroup.com/facilities",
  },
  openGraph: {
    title: "Production Facilities | Plant Infrastructure & Logistics | Bohara Group",
    description: "Explore Bohara Group's high-tech manufacturing plants in Gujarat and Rajasthan, equipped with 800T presses, automated looms, and ISO quality labs.",
    url: "https://boharagroup.com/facilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Facilities | Plant Infrastructure & Logistics | Bohara Group",
    description: "Explore Bohara Group's high-tech manufacturing plants in Gujarat and Rajasthan, equipped with 800T presses, automated looms, and ISO quality labs.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://boharagroup.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Production Facilities",
      "item": "https://boharagroup.com/facilities"
    }
  ]
};

interface FacilityItem {
  imageUrl: string;
  location: string;
  name: string;
  description: string;
  capabilities: string[];
  detailsLink: string;
}

const FACILITIES: FacilityItem[] = [
  {
    imageUrl: "/assets/steel_division.png",
    location: "Gujarat, India",
    name: "Plant I: Gujarat Metallurgy",
    description: "Heavy stamping, metallurgy processing, and commercial cookware finishing.",
    capabilities: ["800T Hydraulic stamping press", "Vacuum annealing furnace", "Automated mirror polishing"],
    detailsLink: "/contact?division=steel",
  },
  {
    imageUrl: "/assets/textile_division.png",
    location: "Rajasthan, India",
    name: "Plant II: Rajasthan Spinning",
    description: "Spinning, yarn count formulation, and fabric looming center.",
    capabilities: ["High-speed ring frames", "Computerized air-jet looms", "Dyeing & GOTS certification facility"],
    detailsLink: "/contact?division=textile",
  },
  {
    imageUrl: "/assets/hero_bg.png",
    location: "Mumbai, India",
    name: "BKC Testing Laboratories",
    description: "Corporate headquarters hosting metallurgy and textile quality labs.",
    capabilities: ["Chemical spectrometer metal tester", "Tensile strength checking", "Spectrophotometer dye validation"],
    detailsLink: "/contact?division=procurement",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />

      <main className="pt-20">
        {/* Banner Section */}
        <section className="bg-slate-900 border-b border-white/5 py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Infrastructure
            </span>
            <h1 className="font-title text-4xl sm:text-5xl font-extrabold text-white">
              Production Facilities
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Explore our vertically integrated plants, metallurgy stamping presses, and laboratory testing grids.
            </p>
          </div>
        </section>

        {/* 1. PRODUCTION PLANTS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader
            badge="Locations"
            title="Our Manufacturing Infrastructure"
            subtitle="Three specialized facilities engineered for high-volume contract output and continuous quality auditing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITIES.map((facility, idx) => (
              <FacilityCard
                key={idx}
                imageUrl={facility.imageUrl}
                location={facility.location}
                name={facility.name}
                description={facility.description}
                capabilities={facility.capabilities}
                detailsLink={facility.detailsLink}
              />
            ))}
          </div>
        </section>

        {/* 2. MANUFACTURING EQUIPMENT */}
        <section className="bg-slate-900/40 border-y border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Machinery Pool"
              title="State-of-the-Art Technology Matrix"
              subtitle="Investing in robotic precision and automated looms to maintain consistent material specifications."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <h4 className="font-title font-bold text-white text-base mb-3">Metallurgical Pressing</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">
                  Hydraulic deep drawing presses up to 800T capacities. Optimized for smooth draw actions on 2.0mm steel plates without tearing structural boundaries.
                </p>
              </div>
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <h4 className="font-title font-bold text-white text-base mb-3">Automated Air-Jet Looms</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">
                  Computerized weft insertion loom grids maintaining weaving densities up to 400 threads count. Continuous warp tension tracking ensures zero loom stops.
                </p>
              </div>
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <h4 className="font-title font-bold text-white text-base mb-3">Emission Spectrometry</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">
                  Optical emission spectrometer units located in our testing labs. Verify exact trace elements composition of raw steel ingots within 90 seconds of melt dispatch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. QUALITY CONTROL & CERTIFICATIONS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                Compliance
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-white">
                Quality Verification Certifications
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Bohara Group operates with total compliance to global manufacturing standard frameworks. Our quality management systems are ISO audited, and our supply lines are certified for food contact safety and environmental sustainability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-900 border border-white/5 p-4 rounded flex items-center gap-3">
                  <span className="text-amber-500 text-lg font-bold">ISO</span>
                  <span className="text-slate-300 text-xs font-semibold">9001:2015 Quality Management</span>
                </div>
                <div className="bg-slate-900 border border-white/5 p-4 rounded flex items-center gap-3">
                  <span className="text-amber-500 text-lg font-bold">ISO</span>
                  <span className="text-slate-300 text-xs font-semibold">14001:2015 Environmental System</span>
                </div>
                <div className="bg-slate-900 border border-white/5 p-4 rounded flex items-center gap-3">
                  <span className="text-amber-500 text-lg font-bold">GOTS</span>
                  <span className="text-slate-300 text-xs font-semibold">Global Organic Textile Standard</span>
                </div>
                <div className="bg-slate-900 border border-white/5 p-4 rounded flex items-center gap-3">
                  <span className="text-amber-500 text-lg font-bold">FDA</span>
                  <span className="text-slate-300 text-xs font-semibold">FDA & EU Food Contact Approved</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-slate-900 border border-white/5 p-8 rounded-xl">
              <h4 className="font-title text-lg font-bold text-white mb-4">Laboratory Auditing Processes</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                All production batches are indexed and samples are held for 12 months. Laboratories perform regular mechanical pull tests, salt spray corrosion tests, and yarn dye fastness checks.
              </p>
              <div className="bg-amber-500/5 border border-amber-500/10 p-4 rounded text-xs text-amber-500 font-semibold leading-relaxed">
                Inspection certificates (such as EN 10204 3.1 chemical reports) are automatically dispatched with every export shipping container bill.
              </div>
            </div>
          </div>
        </section>

        {/* 4. GLOBAL LOGISTICS */}
        <section className="bg-slate-900/50 border-t border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                Logistics
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-white">
                Port Dispatch Pipelines
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Our plant coordinates are linked directly to major cargo routes, facilitating fast transit. Raw material inputs and finished export dispatches are tracked digitally via container tracking keys.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded border border-white/5">
                <h5 className="font-title font-bold text-amber-500 text-xs uppercase tracking-wider mb-2">Mumbai BKC Hub</h5>
                <p className="text-slate-400 text-2xs leading-relaxed mb-0">Coordination of export clearances, maritime freight contracts, and custom documents approvals.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded border border-white/5">
                <h5 className="font-title font-bold text-amber-500 text-xs uppercase tracking-wider mb-2">Mundra Port Route</h5>
                <p className="text-slate-400 text-2xs leading-relaxed mb-0">Plant I (Gujarat) metal products dispatch within 24 hours of final packaging.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded border border-white/5">
                <h5 className="font-title font-bold text-amber-500 text-xs uppercase tracking-wider mb-2">Kandla Port Route</h5>
                <p className="text-slate-400 text-2xs leading-relaxed mb-0">Plant II (Rajasthan) textile shipments routed for Middle East and European destination markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <CTA
          title="Review Our Manufacturing Setup"
          subtitle="Partner with Bohara Group for secure, scalable B2B contract manufacturing. Get in touch with our engineering directors."
          buttonText="Submit Technical RFP"
          buttonHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
