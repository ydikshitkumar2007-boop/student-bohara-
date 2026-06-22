"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products" },
  { label: "Facilities", href: "/facilities" },
  { label: "Industries", href: "/industries" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle transparent to blurred header transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "h-20 bg-slate-950/75 border-b border-white/8 backdrop-blur-lg shadow-lg shadow-black/30"
            : "h-24 bg-transparent border-b border-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <div className="max-w-7xl h-full mx-auto px-6 flex items-center justify-between">
          {/* Logo brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Bohara Group Home">
            <span className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 w-9 h-9 flex items-center justify-center rounded-lg font-bold font-title text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              B
            </span>
            <span className="font-title font-extrabold text-lg tracking-wider text-white">
              BOHARA <span className="text-amber-500 font-semibold group-hover:text-amber-400 transition-colors duration-300">GROUP</span>
            </span>
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors relative py-2",
                        isActive ? "text-white" : "text-slate-400 hover:text-white"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="btn btn-primary bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-amber-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile navigation overlay drawer */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            items={NAV_ITEMS}
            onClose={() => setIsOpen(false)}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
}
