import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/custom/ContactForm";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { JsonLd } from "@/components/custom/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Global Business Inquiry Portal",
  description:
    "Get in touch with Bohara Group Bandra Kurla Complex (BKC) headquarters in Mumbai, or contact our metallurgy and textile plants directly.",
  alternates: {
    canonical: "https://boharagroup.com/contact",
  },
  openGraph: {
    title: "Contact Us | Global Business Inquiry Portal | Bohara Group",
    description: "Get in touch with Bohara Group Bandra Kurla Complex (BKC) headquarters in Mumbai, or contact our metallurgy and textile plants directly.",
    url: "https://boharagroup.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Global Business Inquiry Portal | Bohara Group",
    description: "Get in touch with Bohara Group Bandra Kurla Complex (BKC) headquarters in Mumbai, or contact our metallurgy and textile plants directly.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Bohara Group",
  "description": "Submit business proposals and contact corporate offices or factories.",
  "url": "https://boharagroup.com/contact",
  "mainEntity": [
    {
      "@type": "LocalBusiness",
      "name": "Bohara Group Corporate HQ",
      "image": "https://boharagroup.com/assets/hero_bg.png",
      "telephone": "+91-22-6688-9900",
      "email": "info@boharagroup.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bohara Towers, 5th Floor, Bandra Kurla Complex",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400051",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ]
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
      "name": "Contact",
      "item": "https://boharagroup.com/contact"
    }
  ]
};

interface OfficeDetail {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

const OFFICES: OfficeDetail[] = [
  {
    name: "Corporate Head Office (Mumbai)",
    address: "Bohara Towers, 5th Floor, Bandra Kurla Complex, Mumbai, MH - 400051, India",
    phone: "+91 (22) 6688 9900",
    email: "info@boharagroup.com",
    hours: "09:00 AM - 06:00 PM (IST), Mon - Sat",
  },
  {
    name: "Plant I Office (Gujarat Metallurgy)",
    address: "Industrial Zone II, Sector A, Mundra Port Road, Gujarat, India",
    phone: "+91 (28) 3824 4500",
    email: "steel.sales@boharagroup.com",
    hours: "08:00 AM - 05:00 PM (IST), Mon - Sat",
  },
  {
    name: "Plant II Office (Rajasthan Weaving)",
    address: "Integrated Textile Park, Looming Block C, Rajasthan, India",
    phone: "+91 (29) 4721 8900",
    email: "textile.sales@boharagroup.com",
    hours: "08:00 AM - 05:00 PM (IST), Mon - Sat",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={[contactPageSchema, breadcrumbSchema]} />
      <Navbar />

      <main className="pt-20">
        {/* Banner Section */}
        <section className="bg-slate-900 border-b border-white/5 py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="font-title text-4xl sm:text-5xl font-extrabold text-white">
              Contact & Inquiries
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Connect with our corporate board or submit structural contract proposals globally.
            </p>
          </div>
        </section>

        {/* Form and info grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3 block">
                  Communication Channels
                </span>
                <h2 className="font-title text-3xl font-extrabold text-white mb-4">
                  Global Sales & Proposals
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-0">
                  Select your target division in the inquiry form, and a dedicated sales coordinator will review your CAD drawings, yarn count specs, or shipping requirements.
                </p>
              </div>

              <div className="flex flex-col gap-6 text-sm text-slate-300">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider">Mailing Address</h5>
                    <p>Bohara Towers, BKC, Mumbai - 400051, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider">Corporate Lines</h5>
                    <p><a href="tel:+912266889900" className="hover:text-amber-500 transition-colors">+91 (22) 6688 9900</a></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider">Emails</h5>
                    <p><a href="mailto:info@boharagroup.com" className="hover:text-amber-500 transition-colors">info@boharagroup.com</a></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h5 className="font-title font-bold text-white text-xs uppercase tracking-wider">Work Hours</h5>
                    <p>09:00 AM - 06:00 PM (IST), Monday to Saturday</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Styled Container */}
              <div className="bg-slate-900 border border-white/5 rounded-xl p-6 h-56 relative overflow-hidden flex flex-col items-center justify-center text-center">
                {/* Abstract grid pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-gold-600)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-3xl mb-3 animate-bounce">📍</span>
                  <h4 className="font-title text-base font-bold text-white mb-1">Mumbai BKC HQ Map</h4>
                  <p className="text-slate-400 text-2xs mb-4">Coordinate: 19.0607° N, 72.8636° E</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white text-2xs font-bold px-4 py-2 rounded-md transition-colors"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* 2. OFFICE LOCATIONS LIST */}
        <section className="bg-slate-900/40 border-t border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Global Network"
              title="Office Locations & Plants"
              subtitle="Get in touch with local plant management and sales branches directly."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OFFICES.map((office, idx) => (
                <div key={idx} className="bg-slate-900 border border-white/5 p-6 rounded-lg flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-title text-lg font-bold text-white mb-3">
                      {office.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {office.address}
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4 flex flex-col gap-2 text-2xs text-slate-300">
                    <div><strong>Phone:</strong> {office.phone}</div>
                    <div><strong>Email:</strong> {office.email}</div>
                    <div><strong>Hours:</strong> {office.hours}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
