import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { InquiryFilters } from "./InquiryFilters";
import { Prisma, Inquiry } from "@prisma/client";
import { 
  Inbox, 
  User, 
  Calendar, 
  Building, 
  Briefcase 
} from "lucide-react";

import { DashboardErrorState } from "@/components/custom/DashboardErrorState";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
    division?: string;
  }>;
}

export default async function InquiriesPage({ searchParams }: PageProps) {
  // Await the searchParams promise (Next.js 16 App Router requirement)
  const params = await searchParams;
  const search = params.search || "";
  const status = params.status || "";
  const division = params.division || "";

  // 1. Build dynamic Prisma search parameters
  const whereClause: Prisma.InquiryWhereInput = {};

  if (status) {
    whereClause.status = status;
  }

  if (division) {
    whereClause.division = division;
  }

  if (search.trim()) {
    whereClause.OR = [
      { fullName: { contains: search } },
      { email: { contains: search } },
      { organization: { contains: search } },
      { message: { contains: search } },
    ];
  }

  // 2. Fetch matched rows from database
  let inquiries: Inquiry[] = [];
  let dbError: string | null = null;

  try {
    console.log("InquiriesPage [Start]: Executing findMany queries...");
    inquiries = await prisma.inquiry.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });
    console.log(`InquiriesPage [Success]: Found ${inquiries.length} rows.`);
  } catch (err) {
    console.error("InquiriesPage [Error]: Database query failed!", err);
    dbError = err instanceof Error ? err.message : String(err);
  }

  if (dbError) {
    return (
      <DashboardErrorState
        title="Database Connection Error"
        message={`An error occurred while fetching the inquiries list. Technical Details: ${dbError}`}
      />
    );
  }

  // Helper to resolve status badge styling
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
      {/* Header */}
      <div>
        <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          Inquiry Management
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Review, status-tag, search, and manage incoming leads and proposals.
        </p>
      </div>

      {/* Interactive filter and search controls */}
      <InquiryFilters />

      {/* Listing Database Results */}
      <div className="glass-panel rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden flex flex-col gap-4">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="flex justify-between items-center px-2">
          <span className="text-xs font-semibold text-slate-400">
            Found {inquiries.length} {inquiries.length === 1 ? "inquiry" : "inquiries"}
          </span>
        </div>

        {inquiries.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-white/5 rounded-xl bg-white/1 text-slate-500 text-sm flex flex-col items-center gap-2">
            <Inbox className="w-8 h-8 text-slate-650" />
            No matching inquiry entries found. Try adjusting your search query or filter tags.
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-slate-400 font-medium text-xs uppercase tracking-wider">
                  <th className="py-4 px-4">Contact Detail</th>
                  <th className="py-4 px-4">Company</th>
                  <th className="py-4 px-4">Division</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {inquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-white/2 transition-colors">
                    {/* Name + Email */}
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

                    {/* Created Date */}
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

                    {/* CTA Details Button */}
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
