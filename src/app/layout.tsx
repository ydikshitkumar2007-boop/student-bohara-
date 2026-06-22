import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/custom/JsonLd";

// Google Fonts configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Metadata Strategy for Search Engines
export const metadata: Metadata = {
  metadataBase: new URL("https://boharagroup.com"),
  title: {
    default: "Bohara Group | Global Metallurgy & Textile Manufacturers",
    template: "%s | Bohara Group",
  },
  description:
    "Official corporate portal of Bohara Group. A premier conglomerate delivering high-grade 304 stainless steel housewares and GOTS-certified organic yarn spinning globally.",
  keywords: [
    "Bohara Group",
    "Bohra Group",
    "Stainless Steel Houseware",
    "Textile Manufacturing",
    "Industrial Conglomerate",
    "304 Cookware",
    "Yarn Spinning",
    "Global Exports India",
  ],
  authors: [{ name: "Bohara Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boharagroup.com",
    siteName: "Bohara Group",
    images: [
      {
        url: "/assets/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Bohara Group Corporate Portal Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bohara Group | Global Metallurgy & Textile Manufacturers",
    description: "Industry leaders in stainless steel cookware fabrication and automated yarn looming.",
    images: ["/assets/hero_bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bohara Group",
  "alternateName": "Bohara Group Corporate",
  "url": "https://boharagroup.com",
  "logo": "https://boharagroup.com/favicon.ico",
  "description": "Bohara Group is an international diversified manufacturer supplying high-grade metallurgy housewares and automated spinning textiles to global supply chains.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bohara Towers, 5th Floor, Bandra Kurla Complex",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400051",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-22-6688-9900",
    "contactType": "customer service",
    "email": "info@boharagroup.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["en", "hi"]
  },
  "sameAs": [
    "https://twitter.com/boharagroup",
    "https://linkedin.com/company/boharagroup"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-600 selection:text-slate-950">
        <JsonLd schema={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
