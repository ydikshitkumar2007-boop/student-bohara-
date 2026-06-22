"use client";

import React, { useState } from "react";
import Link from "next/link";
import { adminLoginAction } from "@/app/actions/inquiries";
import { Lock, ArrowLeft, Loader2, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const result = await adminLoginAction(formData);
      if (result && !result.success) {
        setError(result.error || "Authentication failed.");
        setIsSubmitting(false);
      } else if (result && result.success) {
        // Clean client-side redirection
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      console.error("Login submission error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,119,6,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Back to website shortcut */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-slate-400 hover:text-white flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4 text-amber-500" />
        Back to Website
      </Link>

      <div className="w-full max-w-md relative z-10">
        {/* Branding Title */}
        <div className="flex flex-col items-center gap-3 mb-8 text-center">
          <span className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 w-12 h-12 flex items-center justify-center rounded-xl font-bold font-title text-2xl shadow-xl shadow-amber-500/20">
            B
          </span>
          <h2 className="font-title text-2xl font-extrabold text-white tracking-wide">
            Bohara Group Portal
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Enter administrative credentials to access operations dashboard.
          </p>
        </div>

        {/* Glassmorphic Panel Form */}
        <div className="glass-panel rounded-2xl border border-white/5 p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg flex items-start gap-2.5 text-xs sm:text-sm animate-shake">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-xs font-bold text-slate-300 uppercase tracking-wider"
                >
                  Admin Access Password
                </label>
                <span className="text-[10px] text-amber-500 font-semibold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Demo Key: admin123
                </span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  required
                  autoFocus
                  className="w-full bg-slate-900 border border-white/8 focus:border-amber-500/50 rounded-lg py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-650 focus-visible:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 disabled:hover:translate-y-0 transition-all duration-300 w-full text-sm cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  Verifying Credentials...
                </>
              ) : (
                "Unlock Dashboard"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
