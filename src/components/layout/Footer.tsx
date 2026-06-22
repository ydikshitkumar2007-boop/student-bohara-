"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/5 pt-16 pb-8" aria-label="Conglomerate Footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
        
        {/* Brand information panel */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 w-8 h-8 flex items-center justify-center rounded-lg font-bold font-title text-lg shadow-lg shadow-amber-500/20">
              B
            </span>
            <span className="font-title font-extrabold text-lg tracking-wider text-white">
              BOHARA <span className="text-amber-500 font-semibold">GROUP</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Bohara Group is a premier diversified corporate conglomerate delivering high-precision engineering in Metallurgy and technical textiles globally since 2001. We build trust through quality, safety, and sustainable manufacturing practices.
          </p>
          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Bohara Towers, BKC, Mumbai, MH - 400051, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <a href="tel:+912266889900" className="hover:text-white transition-colors">+91 (22) 6688 9900</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <a href="mailto:info@boharagroup.com" className="hover:text-white transition-colors">info@boharagroup.com</a>
            </div>
          </div>
        </div>

        {/* Links lists */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <h5 className="font-title text-xs font-bold text-white uppercase tracking-wider">
              Corporate
            </h5>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors">About Profile</Link></li>
              <li><Link href="/about#history" className="text-slate-400 hover:text-amber-500 transition-colors">Our Milestones</Link></li>
              <li><Link href="/about#leadership" className="text-slate-400 hover:text-amber-500 transition-colors">Leadership Board</Link></li>
              <li><Link href="/about#values" className="text-slate-400 hover:text-amber-500 transition-colors">Core Values</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h5 className="font-title text-xs font-bold text-white uppercase tracking-wider">
              Divisions
            </h5>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 text-sm">
              <li><Link href="/products" className="text-slate-400 hover:text-amber-500 transition-colors">All Products</Link></li>
              <li><Link href="/products#steel" className="text-slate-400 hover:text-amber-500 transition-colors">Steel Houseware</Link></li>
              <li><Link href="/products#textiles" className="text-slate-400 hover:text-amber-500 transition-colors">Textiles & Yarn</Link></li>
              <li><Link href="/facilities" className="text-slate-400 hover:text-amber-500 transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
            <h5 className="font-title text-xs font-bold text-white uppercase tracking-wider">
              Resources
            </h5>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 text-sm">
              <li><Link href="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">Inquiry Portal</Link></li>
              <li><Link href="/industries" className="text-slate-400 hover:text-amber-500 transition-colors">Markets Served</Link></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-1">HQ Locator <MapPin className="w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom licensing info */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; {currentYear} Bohara Group. All rights reserved. Manufactured with structural integrity.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Supply</Link>
          <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> ISO 9001:2015 Cert.</span>
        </div>
      </div>
    </footer>
  );
}
