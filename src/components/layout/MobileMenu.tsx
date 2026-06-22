"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, Phone, Mail, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavItem } from "./Navbar";

interface MobileMenuProps {
  items: NavItem[];
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ items, onClose, pathname }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close drawer on escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when menu is active
    document.body.style.overflow = "hidden";
    
    // Accessibility: Set focus to container
    containerRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-50 md:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation drawer"
    >
      {/* Backdrop overlay filter */}
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Menu container */}
      <motion.div
        ref={containerRef}
        tabIndex={-1}
        className="relative w-full max-w-sm h-full bg-slate-900 border-l border-white/5 p-8 flex flex-col justify-between shadow-2xl focus:outline-none"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
            <span className="font-title font-extrabold text-lg text-white">
              BOHARA <span className="text-amber-500 font-semibold">GROUP</span>
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-amber-500"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links menu list */}
          <nav className="mb-12">
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              {items.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "text-lg font-semibold transition-colors block py-1",
                        isActive ? "text-amber-500" : "text-slate-300 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: items.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className={cn(
                    "text-lg font-semibold transition-colors block py-1",
                    pathname === "/contact" ? "text-amber-500" : "text-slate-300 hover:text-white"
                  )}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>

        {/* Footer corporate info shortcuts */}
        <div className="border-t border-white/5 pt-8">
          <h5 className="font-title text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Corporate Sales
          </h5>
          <div className="flex flex-col gap-4 mb-6">
            <a
              href="tel:+912266889900"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              +91 (22) 6688 9900
            </a>
            <a
              href="mailto:info@boharagroup.com"
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              info@boharagroup.com
            </a>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="w-full btn btn-primary bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-lg flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-300"
          >
            Submit Technical Inquiry
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
