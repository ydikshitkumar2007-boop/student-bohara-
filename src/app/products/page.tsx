import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { ProductCard } from "@/components/custom/ProductCard";
import { ServiceCard } from "@/components/custom/ServiceCard";
import { CTA } from "@/components/custom/CTA";
import { JsonLd } from "@/components/custom/JsonLd";

export const metadata: Metadata = {
  title: "Products & Services | Stainless Steel & Textiles Division",
  description:
    "Review Bohara Group's high-grade stainless steel housewares and yarn-spinning fabric solutions, built for hospitality and retail brands.",
  alternates: {
    canonical: "https://boharagroup.com/products",
  },
  openGraph: {
    title: "Products & Services | Stainless Steel & Textiles Division | Bohara Group",
    description: "Review Bohara Group's high-grade stainless steel housewares and yarn-spinning fabric solutions, built for hospitality and retail brands.",
    url: "https://boharagroup.com/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Services | Stainless Steel & Textiles Division | Bohara Group",
    description: "Review Bohara Group's high-grade stainless steel housewares and yarn-spinning fabric solutions, built for hospitality and retail brands.",
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
      "name": "Products & Services",
      "item": "https://boharagroup.com/products"
    }
  ]
};

interface ProductItem {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  specs: string[];
  ctaLink: string;
}

const PRODUCTS: ProductItem[] = [
  {
    imageUrl: "/assets/steel_division.png",
    category: "Metallurgy & Stamping",
    title: "Stainless Steel Culinary & Houseware",
    description: "Tri-ply bottom induction pots, gastronorm commercial catering containers, serving platters, and kitchen utensils engineered for hospitality and institutional usage.",
    specs: ["Material Grades: SUS 304, SUS 316 L", "Stamping Press: 200T to 800T press", "Compliance: FDA certified food-grade"],
    ctaLink: "/contact?division=steel",
  },
  {
    imageUrl: "/assets/textile_division.png",
    category: "Spinning & Weaving",
    title: "Industrial Yarn & Fabric Weaving",
    description: "Organic combed cotton yarn (20s to 120s count), custom-woven uniform fabrics, corporate shirting materials, and technical apparel textiles.",
    specs: ["Yarn Counts: 20s to 120s combed", "Loom capacity: 3.5 Million meters/year", "Compliance: OEKO-TEX Standard 100"],
    ctaLink: "/contact?division=textile",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />

      <main className="pt-20">
        {/* Banner Section */}
        <section className="bg-slate-900 border-b border-white/5 py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              What We Create
            </span>
            <h1 className="font-title text-4xl sm:text-5xl font-extrabold text-white">
              Products & Services
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Delivering high-performance goods crafted on world-class production lines.
            </p>
          </div>
        </section>

        {/* 1. PRODUCT CATEGORIES */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <SectionHeader
            badge="Product Catalog"
            title="Conglomerate Divisions"
            subtitle="Explore specifications across our primary metallurgy and textile lines."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRODUCTS.map((prod, idx) => (
              <ProductCard
                key={idx}
                imageUrl={prod.imageUrl}
                category={prod.category}
                title={prod.title}
                description={prod.description}
                specs={prod.specs}
                ctaLink={prod.ctaLink}
              />
            ))}
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section className="bg-slate-900/40 border-y border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Custom Capabilities"
              title="Contract OEM & Manufacturing Services"
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
          </div>
        </section>

        {/* 3. MANUFACTURING CAPABILITIES */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3 block">
                Quality Systems
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Verifiable Metallurgy and Fiber Standards
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                All production lines are governed by real-time computerized verification. For metallurgy, this means verifying SUS 304 food-grade specifications. For textiles, it means ensuring combed card yarn counts remain trace-compliant under OEKO-TEX and GOTS standards.
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Spectrophotometer color dye matching.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Hydraulic deep drawing up to 2.5mm steel.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  ISO 9001:2015 traceability audits.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-white/5 p-8 rounded-xl">
              <h4 className="font-title text-lg font-bold text-white mb-4">OEM Supply Terms</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                We accommodate contract OEM manufacturing with global delivery terms. Supply contracts specify minimum volume boundaries, customized stamping dies schedules, and port dispatch details.
              </p>
              <div className="bg-amber-500/5 border border-amber-500/10 p-4 rounded text-xs text-amber-500 font-semibold">
                Custom sample sets can be formulated within 15 business days following technical CAD approvals.
              </div>
            </div>
          </div>
        </section>

        {/* 4. INDUSTRIES SERVED */}
        <section className="bg-slate-900/50 border-t border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Markets Served"
              title="Supporting Critical Sectors Globally"
              subtitle="Our materials and engineering outputs satisfy criteria across diverse vertical fields."
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

        {/* 5. CTA */}
        <CTA
          title="Scale Your Supply Operations Today"
          subtitle="Contact our corporate sales division in Mumbai for custom quotes, technical drawings, or contract OEM supply terms."
          buttonText="Initiate Sales Consultation"
          buttonHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
