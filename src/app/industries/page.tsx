import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesClient } from "./IndustriesClient";
import { JsonLd } from "@/components/custom/JsonLd";

export const metadata: Metadata = {
  title: "Industries Served | Corporate Supply Chain Solutions",
  description:
    "Explore how Bohara Group supports critical sectors globally—from hospitality and retail consumer goods to automotive suppliers, construction, and government contracts.",
  alternates: {
    canonical: "https://boharagroup.com/industries",
  },
  openGraph: {
    title: "Industries Served | Corporate Supply Chain Solutions | Bohara Group",
    description: "Explore how Bohara Group supports critical sectors globally—from hospitality and retail consumer goods to automotive suppliers, construction, and government contracts.",
    url: "https://boharagroup.com/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries Served | Corporate Supply Chain Solutions | Bohara Group",
    description: "Explore how Bohara Group supports critical sectors globally—from hospitality and retail consumer goods to automotive suppliers, construction, and government contracts.",
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
      "name": "Industries served",
      "item": "https://boharagroup.com/industries"
    }
  ]
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <Navbar />
      <main>
        <IndustriesClient />
      </main>
      <Footer />
    </>
  );
}
