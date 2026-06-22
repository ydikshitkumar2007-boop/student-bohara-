import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { Inquiry } from "@prisma/client";
import { 
  Inbox, 
  AlertCircle, 
  Hourglass, 
  CheckCircle2, 
  ArrowRight,
  User,
  Calendar,
  Building,
  Briefcase
} from "lucide-react";

import { DashboardErrorState } from "@/components/custom/DashboardErrorState";

export const dynamic = "force-dynamic";

function checkEnvironmentVariables() {
  const missing: string[] = [];
  if (!process.env.DATABASE_URL) missing.push("DATABASE_URL");
  if (!process.env.ADMIN_PASSWORD) missing.push("ADMIN_PASSWORD");
  if (!process.env.NEXT_PUBLIC_APP_URL) missing.push("NEXT_PUBLIC_APP_URL");

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}

export default async function DashboardPage() {
  console.log("DashboardPage [Start]: Executing environment checks...");
  try {
    checkEnvironmentVariables();
    console.log("DashboardPage [Success]: Environment checks passed.");
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : String(err);
    console.error("DashboardPage [Error]: Environment checks failed!", err);
    return (
      <DashboardErrorState
        title="Configuration Error"
        message={errMessage}
      />
    );
  }

  console.log("DashboardPage [Start]: Connecting and querying database metrics...");

  let totalCount = 0;
  let newCount = 0;
  let inProgressCount = 0;
  let closedCount = 0;
  let recentInquiries: Inquiry[] = [];
  let dbError: string | null = null;

  try {
    const [tCount, nCount, ipCount, cCount, rInquiries] = await Promise.all([
      prisma.inquiry.count().then(res => { console.log("DashboardPage [Query]: count inquiries success"); return res; }),
      prisma.inquiry.count({ where: { status: "NEW" } }).then(res => { console.log("DashboardPage [Query]: count NEW inquiries success"); return res; }),
      prisma.inquiry.count({ where: { status: "IN_PROGRESS" } }).then(res => { console.log("DashboardPage [Query]: count IN_PROGRESS inquiries success"); return res; }),
      prisma.inquiry.count({ where: { status: "CLOSED" } }).then(res => { console.log("DashboardPage [Query]: count CLOSED inquiries success"); return res; }),
      prisma.inquiry.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }).then(res => { console.log("DashboardPage [Query]: findMany inquiries success"); return res; }),
    ]);
    totalCount = tCount;
    newCount = nCount;
    inProgressCount = ipCount;
    closedCount = cCount;
    recentInquiries = rInquiries;
    console.log("DashboardPage [Success]: Queries resolved successfully.");
  } catch (err) {
    console.error("DashboardPage [Error]: Database queries execution failed!", err);
    dbError = err instanceof Error ? err.message : String(err);
  }

  if (dbError) {
    return (
      <DashboardErrorState
        title="Database Connection Error"
        message={`An error occurred while communicating with the database. Please ensure your database is active and the connection string is valid. Details: ${dbError}`}
      />
    );
  }

  // Helper to resolve status badge colors
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-amber-500/10 border-amber-500/20 text-amber-500";
      case "IN_PROGRESS":
        return "bg-blue-500/10 border-blue-500/20 text-blue-500";
      case "RESPONDED":
        return "bg-purple-500/10 border-purple-500/20 text-purple-500";
      case "CLOSED":
        return "bg-green-500/10 border-green-500/20 text-green-500";
      default:
        return "bg-slate-500/10 border-slate-500/20 text-slate-400";
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Page Title */}
      <div>
        <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          Dashboard Overview
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Monitor recent lead volumes, division workloads, and review commercial proposals.
        </p>
      </div>

      {/* 2. METRICS CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total Inquiries */}
        <div className="glass-panel rounded-2xl p-6 border border-white/5 flex items-center justify-between shadow-lg">
          <div className="flex flex-col gap-1">
            <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest">
              Total Inquiries
            </span>
            <span className="font-title text-3xl font-extrabold text-white">
              {totalCount}
            </span>
          </div>
          <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-slate-300">
            <Inbox className="w-5 h-5" />
          </div>
        </div>

        {/* Card 2: New Inquiries */}
        <div className="glass-panel rounded-2xl p-6 border border-white/5 flex items-center justify-between shadow-lg">
          <div className="flex flex-col gap-1">
            <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest">
              New Leads
            </span>
            <span className="font-title text-3xl font-extrabold text-amber-500">
              {newCount}
            </span>
          </div>
          <div className="w-12 h-12 bg-amber-500/5 border border-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        {/* Card 3: In Progress */}
        <div className="glass-panel rounded-2xl p-6 border border-white/5 flex items-center justify-between shadow-lg">
          <div className="flex flex-col gap-1">
            <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest">
              Active Audits
            </span>
            <span className="font-title text-3xl font-extrabold text-blue-400">
              {inProgressCount}
            </span>
          </div>
          <div className="w-12 h-12 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
            <Hourglass className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Card 4: Closed */}
        <div className="glass-panel rounded-2xl p-6 border border-white/5 flex items-center justify-between shadow-lg">
          <div className="flex flex-col gap-1">
            <span className="text-2xs font-bold text-slate-400 uppercase tracking-widest">
              Closed Deals
            </span>
            <span className="font-title text-3xl font-extrabold text-green-400">
              {closedCount}
            </span>
          </div>
          <div className="w-12 h-12 bg-green-500/5 border border-green-500/10 rounded-xl flex items-center justify-center text-green-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. RECENT INQUIRIES LIST */}
      <div className="glass-panel rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden flex flex-col gap-6">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-title text-lg font-bold text-white">
              Recent Proposals
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              Review details of the latest incoming catalog and OEM contract requests.
            </p>
          </div>
          <Link
            href="/admin/inquiries"
            className="text-amber-500 hover:text-amber-400 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
          >
            All Inquiries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {recentInquiries.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-white/5 rounded-xl bg-white/1 text-slate-500 text-sm flex flex-col items-center gap-2">
            <Inbox className="w-8 h-8 text-slate-650" />
            No inquiries received yet. Submit the contact form to see them here instantly.
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-slate-400 font-medium text-xs uppercase tracking-wider">
                  <th className="py-4 px-4">Contact</th>
                  <th className="py-4 px-4">Company</th>
                  <th className="py-4 px-4">Division</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {recentInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-white/2 transition-colors">
                    {/* Contact Details */}
                    <td className="py-4 px-4 flex flex-col gap-0.5">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-500" />
                        {inq.fullName}
                      </span>
                      <span className="text-xs text-slate-400">{inq.email}</span>
                    </td>

                    {/* Company */}
                    <td className="py-4 px-4">
                      <span className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-500" />
                        {inq.organization || <span className="text-slate-600">N/A</span>}
                      </span>
                    </td>

                    {/* Division */}
                    <td className="py-4 px-4">
                      <span className="text-xs font-semibold uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded border border-white/5 text-slate-300 flex items-center gap-1.5 w-fit">
                        <Briefcase className="w-3 h-3 text-slate-400" />
                        {inq.division}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-4">
                      <span className={`text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getStatusBadge(inq.status)}`}>
                        {inq.status.replace("_", " ")}
                      </span>
                    </td>

                    {/* Creation Date */}
                    <td className="py-4 px-4">
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {new Date(inq.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </td>

                    {/* Action Link */}
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/admin/inquiries/${inq.id}`}
                        className="bg-transparent border border-white/10 hover:border-amber-500/30 text-xs font-bold text-slate-300 hover:text-amber-500 px-3.5 py-1.5 rounded transition-all duration-200"
                      >
                        Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
