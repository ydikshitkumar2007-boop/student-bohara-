"use client";

import React from "react";
import { AlertTriangle, RefreshCw, Server, ShieldAlert } from "lucide-react";

interface DashboardErrorStateProps {
  title: string;
  message: string;
}

export function DashboardErrorState({ title, message }: DashboardErrorStateProps) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(239,68,68,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Branding header */}
        <div className="flex flex-col items-center gap-3 mb-8 text-center">
          <span className="bg-red-500/10 border border-red-500/20 text-red-500 w-12 h-12 flex items-center justify-center rounded-xl font-bold font-title text-2xl shadow-xl shadow-red-500/5">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </span>
          <h2 className="font-title text-2xl font-extrabold text-white tracking-wide">
            {title}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Operational dashboard is locked because of a server-level configuration or database connectivity issue.
          </p>
        </div>

        {/* Error panel content */}
        <div className="glass-panel rounded-2xl border border-red-500/10 p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

          <div className="flex flex-col gap-6">
            {/* Error Message display block */}
            <div className="bg-red-950/20 border border-red-500/20 text-red-400 p-4 rounded-lg flex flex-col gap-2 text-xs font-mono leading-relaxed">
              <span className="font-bold text-red-300 uppercase tracking-wide flex items-center gap-1.5">
                <Server className="w-4 h-4" />
                Error Details:
              </span>
              <p className="break-all whitespace-pre-wrap">{message}</p>
            </div>

            {/* Troubleshooting matrix */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                Troubleshooting Checklist:
              </span>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-slate-400 text-xs leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>Verify Vercel environment configurations have <strong>DATABASE_URL</strong>, <strong>ADMIN_PASSWORD</strong>, and <strong>NEXT_PUBLIC_APP_URL</strong> defined.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>Verify your database server allows incoming connections from Vercel Serverless IP pools.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>If database table models are missing, run <code>npx prisma db push</code> or execute database migration pipelines locally.</span>
                </li>
              </ul>
            </div>

            {/* Retry trigger */}
            <button
              onClick={handleReload}
              className="bg-transparent border border-white/10 hover:border-amber-500/30 hover:bg-white/5 text-xs font-bold text-slate-300 hover:text-amber-500 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 w-full cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
