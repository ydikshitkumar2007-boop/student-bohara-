import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/auth";
import { adminLogoutAction } from "@/app/actions/inquiries";
import { 
  LayoutDashboard, 
  Inbox, 
  LogOut, 
  ShieldAlert,
  Building
} from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await verifyAdminSession();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* 1. Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between flex-shrink-0 relative z-20">
        <div className="flex flex-col">
          {/* Sidebar Header Logo */}
          <div className="h-20 border-b border-white/5 px-6 flex items-center gap-3">
            <span className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 w-8 h-8 flex items-center justify-center rounded-lg font-bold font-title text-lg shadow-lg shadow-amber-500/20">
              B
            </span>
            <span className="font-title font-extrabold text-sm tracking-wider text-white">
              BOHARA <span className="text-amber-500 font-semibold">ADMIN</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 flex flex-col gap-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <LayoutDashboard className="w-4 h-4 text-amber-500" />
              Dashboard
            </Link>
            <Link
              href="/admin/inquiries"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Inbox className="w-4 h-4 text-amber-500" />
              Inquiries
            </Link>
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Building className="w-4 h-4 text-slate-500" />
              View Website
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer Logout Button */}
        <div className="p-4 border-t border-white/5">
          <form action={adminLogoutAction}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/5 border border-transparent hover:border-red-500/10 transition-all duration-200 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-20 bg-slate-900/40 border-b border-white/5 px-6 flex items-center justify-between relative z-10">
          <h1 className="font-title text-lg font-bold text-white tracking-wide">
            Corporate Operations Control
          </h1>
          <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded text-2xs font-bold text-amber-500 uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            Security Active
          </div>
        </header>

        {/* Content Portal */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
