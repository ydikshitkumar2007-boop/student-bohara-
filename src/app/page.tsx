import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/custom/Hero";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { CTA } from "@/components/custom/CTA";
import { Stats, StatItem } from "@/components/custom/Stats";
import { ServiceCard } from "@/components/custom/ServiceCard";
import { ProductCard } from "@/components/custom/ProductCard";
import { FacilityCard } from "@/components/custom/FacilityCard";
import { TestimonialCard } from "@/components/custom/TestimonialCard";
import { ContactForm } from "@/components/custom/ContactForm";
import { JsonLd } from "@/components/custom/JsonLd";

export const metadata: Metadata = {
  title: "Bohara Group | Global Metallurgy & Textile Manufacturers",
  description:
    "Official corporate portal of Bohara Group. A premier conglomerate delivering high-grade 304 stainless steel housewares and GOTS-certified organic yarn spinning globally.",
  alternates: {
    canonical: "https://boharagroup.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bohara Group",
  "url": "https://boharagroup.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://boharagroup.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
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
    }
  ]
};

// Counter stats data
const STAT_ITEMS: StatItem[] = [
  { value: 25, suffix: "+", description: "Years of Corporate Heritage & Trust" },
  { value: 50, suffix: "+", description: "Countries across Europe, Americas & Gulf Served" },
  { value: 3, suffix: "", description: "Fully Automated High-tech Manufacturing Plants" },
  { value: 12, suffix: "M+", description: "Annual Industrial Units Packed & Dispatched" },
];

export default function Home() {
  return (
    <>
      <JsonLd schema={[websiteSchema, breadcrumbSchema]} />
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <Hero
          badge="Conglomerate Excellence"
          title="Pioneering Industrial Production, Redefining Global Standards."
          subtitle="Bohara Group is an international diversified manufacturer supplying high-grade metallurgy housewares and automated spinning textiles to global supply chains for over two decades."
          primaryCtaText="Explore Products"
          primaryCtaHref="#products"
          secondaryCtaText="Submit Inquiry"
          secondaryCtaHref="#contact"
          bgImageUrl="/assets/hero_bg.png"
        />

        {/* 2. COMPANY INTRODUCTION */}
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="about-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-block text-xs font-bold text-amber-500 uppercase tracking-widest">
                Who We Are
              </span>
              <h2 id="about-heading" className="font-title text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Precision in Manufacture,<br />Integrity in Commerce.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                For 25 years, Bohara Group has operated at the intersection of heavy engineering and commercial reliability. As a unified conglomerate, we manage state-of-the-art smelting, precision stamping, and automated weaving facilities across major industrial zones.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our commitment is simple: providing global supply chains with certified inputs, manufactured under strict ISO standards, with absolute environmental transparency and zero-defect quality control.
              </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-slate-900 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h4 className="font-title text-base font-bold text-amber-500 mb-2">Our Mission</h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-0">
                  To produce exceptional quality industrial products that empower businesses and elevate standards, operating with rigorous adherence to ethical practices and environmental sustainability.
                </p>
              </div>
              <div className="bg-slate-900 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h4 className="font-title text-base font-bold text-amber-500 mb-2">Our Vision</h4>
                <p className="text-slate-400 text-xs sm:text-sm mb-0">
                  To stand as a global benchmark of manufacturing capability, constantly innovating across technologies to satisfy changing market requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE US SECTION */}
        <section className="bg-slate-900/50 border-y border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="The Bohara Advantage"
              title="Engineered for High-Volume Supply Chains"
              subtitle="The four pillars that guide our corporate behavior, operational decisions, and partner relationships."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-white/5 p-8 rounded-xl">
                <div className="font-title text-3xl font-extrabold text-amber-500/20 mb-4">01</div>
                <h4 className="font-title text-lg font-bold text-white mb-2">Uncompromising Quality</h4>
                <p className="text-slate-400 text-sm mb-0">
                  We source only premium grade raw materials—including food-safe SUS 304/316 stainless steels and GOTS-certified organic cotton—ensuring long-term chemical stability.
                </p>
              </div>
              <div className="bg-slate-900 border border-white/5 p-8 rounded-xl">
                <div className="font-title text-3xl font-extrabold text-amber-500/20 mb-4">02</div>
                <h4 className="font-title text-lg font-bold text-white mb-2">Robotic Automation</h4>
                <p className="text-slate-400 text-sm mb-0">
                  Our lines employ automated stamping, computerized looms, and digital spectrometry to maintain dimensional tolerances and eliminate human error in high volumes.
                </p>
              </div>
              <div className="bg-slate-900 border border-white/5 p-8 rounded-xl col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="font-title text-3xl font-extrabold text-amber-500/20 mb-4">03</div>
                <h4 className="font-title text-lg font-bold text-white mb-2">Certified Integrity</h4>
                <p className="text-slate-400 text-sm mb-0">
                  All plants operate under ISO 9001:2015 frameworks. Products undergo rigorous tensile, thermal, and food-safety audits before dispatch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SERVICES OVERVIEW */}
        <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader
            badge="Operational Services"
            title="Custom Fabrication & Engineering"
            subtitle="Beyond standard catalog supply, Bohara Group provides contract manufacturing services optimized for custom OEM production."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              iconName="Hammer"
              title="Custom Stamping & Deep Drawing"
              description="Transforming heavy-gauge sheet steel into structural culinary components using high-force hydraulic stamping presses."
              stepNumber="01"
            />
            <ServiceCard
              iconName="Cpu"
              title="Yarn count Formulation"
              description="Formulating custom fiber blends and yarn counts optimized for specialized industrial apparel and technical textiles."
              stepNumber="02"
            />
            <ServiceCard
              iconName="ShieldCheck"
              title="Contract Quality Audits"
              description="Batch spectrophotometer color checking, chemical metal validation, and thermal stress tests in certified labs."
              stepNumber="03"
            />
          </div>
        </section>

        {/* 5. PRODUCTS OVERVIEW */}
        <section id="products" className="bg-slate-900/30 border-t border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Product Verticals"
              title="Our Primary Industrial Output"
              subtitle="Delivering high-performance goods crafted on world-class production lines."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProductCard
                imageUrl="/assets/steel_division.png"
                category="Metallurgy & Stamping"
                title="Stainless Steel Culinary & Houseware"
                description="Tri-ply bottom induction pots, gastronorm commercial catering containers, serving platters, and kitchen utensils engineered for hospitality and institutional usage."
                specs={["Material Grades: SUS 304, SUS 316 L", "Stamping Press: 200T to 800T press", "Compliance: FDA certified food-grade"]}
                ctaLink="#contact"
              />
              <ProductCard
                imageUrl="/assets/textile_division.png"
                category="Spinning & Weaving"
                title="Industrial Yarn & Fabric Weaving"
                description="Organic combed cotton yarn (20s to 120s count), custom-woven uniform fabrics, corporate shirting materials, and technical apparel textiles."
                specs={["Yarn Counts: 20s to 120s combed", "Loom capacity: 3.5 Million meters/year", "Compliance: OEKO-TEX Standard 100"]}
                ctaLink="#contact"
              />
            </div>
          </div>
        </section>

        {/* 6. PRODUCTION FACILITIES */}
        <section id="facilities" className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader
            badge="Infrastructure"
            title="Manufacturing Plants & Infrastructure"
            subtitle="A look into our vertically integrated facilities, heavy stamping infrastructure, and quality control laboratories."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FacilityCard
              imageUrl="/assets/steel_division.png"
              location="Gujarat, India"
              name="Plant I: Gujarat Metallurgy"
              description="Heavy stamping, metallurgy processing, and commercial cookware finishing."
              capabilities={["800T Hydraulic stamping press", "Vacuum annealing furnace", "Automated mirror polishing"]}
              detailsLink="#contact"
            />
            <FacilityCard
              imageUrl="/assets/textile_division.png"
              location="Rajasthan, India"
              name="Plant II: Rajasthan Spinning"
              description="Spinning, yarn count formulation, and fabric looming center."
              capabilities={["High-speed ring frames", "Computerized air-jet looms", "Dyeing & GOTS certification facility"]}
              detailsLink="#contact"
            />
            <FacilityCard
              imageUrl="/assets/hero_bg.png"
              location="Mumbai, India"
              name="BKC Testing Laboratories"
              description="Corporate headquarters hosting metallurgy and textile quality labs."
              capabilities={["Chemical spectrometer metal tester", "Tensile strength checking", "Spectrophotometer dye validation"]}
              detailsLink="#contact"
            />
          </div>
        </section>

        {/* 7. INDUSTRIES SERVED */}
        <section className="bg-slate-900/50 border-y border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Markets Served"
              title="Supporting Critical Sectors Globally"
              subtitle="Our materials and engineering outputs satisfy criteria across diverse vertical fields."
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <span className="text-3xl mb-3 block">🏨</span>
                <h5 className="font-title font-bold text-white text-sm">Hospitality & HORECA</h5>
              </div>
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <span className="text-3xl mb-3 block">🛍️</span>
                <h5 className="font-title font-bold text-white text-sm">Retail Brands (OEM)</h5>
              </div>
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <span className="text-3xl mb-3 block">🛡️</span>
                <h5 className="font-title font-bold text-white text-sm">Security Forces Workwear</h5>
              </div>
              <div className="bg-slate-900 border border-white/5 p-6 rounded-lg">
                <span className="text-3xl mb-3 block">🚗</span>
                <h5 className="font-title font-bold text-white text-sm">Automotive & Industrial</h5>
              </div>
            </div>
          </div>
        </section>

        {/* 8. STATISTICS SECTION */}
        <Stats items={STAT_ITEMS} />

        {/* 9. TESTIMONIALS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader
            badge="Testimonials"
            title="Validation from Corporate Clients"
            subtitle="How procurement and supply chain officers rate their partnership with Bohara Group."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Bohara Group's deep-drawing stamping capability has allowed us to scale our premium cookware lines without quality issues. Their delivery timelines and materials certifications are impeccable."
              authorName="Marcus Vance"
              authorRole="VP of Supply Chain"
              companyName="Culinary Solutions Corp"
              divisionContext="Stainless Steel Client"
            />
            <TestimonialCard
              quote="Our uniform lines demand absolute consistency in fabric color and thread strength. Bohara's automated loom facility delivers batch-to-batch uniformity that is unmatched."
              authorName="Director of Procurement"
              authorRole="Head Sourcing Agent"
              companyName="Global Security Uniforms Ltd"
              divisionContext="Textiles Client"
            />
          </div>
        </section>

        {/* 10. CTA SECTION */}
        <CTA
          title="Scale Your Supply Operations Today"
          subtitle="Connect with our corporate export sales division in Mumbai for custom quotes, technical drawings, or contract OEM supply terms."
          buttonText="Initiate Sales Consultation"
          buttonHref="#contact"
        />

        {/* 11. CONTACT FORM & ADDRESS */}
        <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Address Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="inline-block text-xs font-bold text-amber-500 uppercase tracking-widest">
                Contact Details
              </span>
              <h2 className="font-title text-3xl font-extrabold text-white leading-tight">
                Get in Touch
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Have custom dimensions, specific metal grades, or fabric counts? Complete the form and our coordinators will reach out.
              </p>

              <div className="flex flex-col gap-6 text-slate-300 text-sm">
                <div>
                  <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider mb-2">Corporate HQ</h5>
                  <p>Bohara Towers, 5th Floor, Bandra Kurla Complex, Mumbai, MH - 400051, India</p>
                </div>
                <div>
                  <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider mb-2">Phone Lines</h5>
                  <p><a href="tel:+912266889900" className="hover:text-amber-500 transition-colors">+91 (22) 6688 9900</a></p>
                </div>
                <div>
                  <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider mb-2">Emails</h5>
                  <p><a href="mailto:info@boharagroup.com" className="hover:text-amber-500 transition-colors">info@boharagroup.com</a></p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
