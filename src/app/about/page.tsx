import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { JsonLd } from "@/components/custom/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Heritage, Leadership & Core Values",
  description:
    "Explore the corporate story, milestones, leadership profiles, and ESG commitments of Bohara Group since 2001.",
  alternates: {
    canonical: "https://boharagroup.com/about",
  },
  openGraph: {
    title: "About Us | Heritage, Leadership & Core Values | Bohara Group",
    description: "Explore the corporate story, milestones, leadership profiles, and ESG commitments of Bohara Group since 2001.",
    url: "https://boharagroup.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Heritage, Leadership & Core Values | Bohara Group",
    description: "Explore the corporate story, milestones, leadership profiles, and ESG commitments of Bohara Group since 2001.",
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
      "name": "About Us",
      "item": "https://boharagroup.com/about"
    }
  ]
};

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    number: "01",
    title: "Uncompromising Quality",
    description: "We source only premium grade raw materials (such as food-grade 304/316 stainless steel and GOTS cotton), ensuring structural stability and product safety.",
  },
  {
    number: "02",
    title: "Technological Innovation",
    description: "We invest heavily in automated manufacturing, robotics, and digital laboratory instruments to eliminate dimensional human error.",
  },
  {
    number: "03",
    title: "Corporate Integrity",
    description: "Our operations are built on total transaction transparency, clean labor conditions, and fair value contracts with suppliers and clients.",
  },
  {
    number: "04",
    title: "Eco Sustainability",
    description: "From circular waste treatment in Rajasthan spinning parks to recycling raw steel scrap, we actively target lower industrial carbon outputs.",
  },
];

interface LeaderItem {
  name: string;
  role: string;
  bio: string;
}

const LEADERS: LeaderItem[] = [
  {
    name: "Rajesh Bohara",
    role: "Chairman & Managing Director",
    bio: "Pioneered the group's entry into metal processing in 2001. Oversees global trade relations and corporate expansion.",
  },
  {
    name: "Sanjay Bohara",
    role: "Executive Director - Textiles",
    bio: "Brought ring-spinning and loom automation technologies to the Rajasthan plant in 2009. Leads GOTS organic supply chains.",
  },
  {
    name: "Dr. Amrita Sen",
    role: "Chief of Materials Engineering",
    bio: "Holds a PhD in Metallurgy. Directs quality validation testing laboratories and ISO certification frameworks.",
  },
];

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2001",
    title: "The Inception",
    description: "Bohara Group begins operations in Mumbai with a single metallurgy cold-rolling press.",
  },
  {
    year: "2009",
    title: "Textile Expansion",
    description: "Commissioned the Rajasthan spinning plant, trading cotton yarns and fabrics globally.",
  },
  {
    year: "2016",
    title: "Robotic Stamping & Exports",
    description: "Upgraded Plant I with robotic stamping cells, initiating direct culinary exports to European ports.",
  },
  {
    year: "2023",
    title: "GOTS & ISO 14001 Standards",
    description: "Transitioned to solar-grid power arrays and GOTS organic textile traceable supply lines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      
      <main className="pt-20">
        {/* Banner Section */}
        <section className="bg-slate-900 border-b border-white/5 py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Who We Are
            </span>
            <h1 id="about-heading" className="font-title text-4xl sm:text-5xl font-extrabold text-white">
              Corporate Profile
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A history of industrial integrity, driving progress through manufacturing excellence.
            </p>
          </div>
        </section>

        {/* Company Story & Mission/Vision */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white">
                Building the Future of Manufacturing
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded at the turn of the century, Bohara Group has grown from a specialized metal processing unit into an international conglomerate. By integrating state-of-the-art automation and maintaining a strong commitment to quality, we supply essential inputs across metallurgy and textile industries globally.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our plants are equipped with high-precision fabrication systems, and our logistics network spans across major international ports, facilitating seamless raw material sourcing and product exports.
              </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-slate-900 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h4 className="font-title text-base font-bold text-amber-500 mb-2">Our Mission</h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-0 leading-relaxed">
                  To produce exceptional quality industrial products that empower businesses and elevate standards, operating with rigorous adherence to ethical practices and environmental sustainability.
                </p>
              </div>
              <div className="bg-slate-900 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h4 className="font-title text-base font-bold text-amber-500 mb-2">Our Vision</h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-0 leading-relaxed">
                  To stand as a global benchmark of manufacturing capability, constantly innovating across technologies to satisfy changing market requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="border-t border-white/5 pt-20">
            <SectionHeader
              badge="Foundations"
              title="Our Core Values"
              subtitle="The four pillars that guide our corporate behavior, operational decisions, and partner relationships."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val) => (
                <div key={val.number} className="bg-slate-900 border border-white/5 p-6 rounded-xl hover:border-amber-500/10 transition-colors duration-300">
                  <div className="font-title text-3xl font-extrabold text-amber-500/15 mb-4">{val.number}</div>
                  <h4 className="font-title text-base font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-0">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-slate-900/40 border-y border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Governance"
              title="Executive Leadership"
              subtitle="Meet the directors guiding the group's industrial expansion and operational governance."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEADERS.map((leader, idx) => (
                <div key={idx} className="bg-slate-900 border border-white/5 p-8 rounded-xl flex flex-col justify-between h-full">
                  <div>
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                      {leader.role}
                    </span>
                    <h4 className="font-title text-xl font-bold text-white mb-4">{leader.name}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-0">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Timeline */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader
            badge="Timeline"
            title="Milestones & Evolution"
            subtitle="Our journey of steady growth, infrastructure scale, and international reach."
          />

          <div className="relative max-w-2xl mx-auto pl-8 border-l border-white/5 flex flex-col gap-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-slate-950 border-3 border-amber-500 rounded-full" />
                
                <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                  <span className="font-title text-lg font-extrabold text-amber-500 block mb-2">
                    {item.year}
                  </span>
                  <h4 className="font-title text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
