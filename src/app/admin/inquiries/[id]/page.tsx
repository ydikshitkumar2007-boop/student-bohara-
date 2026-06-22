import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { InquiryActions } from "./InquiryActions";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Building, 
  Briefcase, 
  Calendar, 
  Clock,
  MessageSquare
} from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function InquiryDetailPage({ params }: PageProps) {
  // Await the params promise (Next.js 16 requirements)
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 1. Fetch details from PostgreSQL via Prisma
  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
  });

  if (!inquiry) {
    notFound();
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
    <div className="flex flex-col gap-6">
      {/* Back to list link */}
      <div>
        <Link
          href="/admin/inquiries"
          className="text-slate-400 hover:text-white flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-255 w-fit"
        >
          <ArrowLeft className="w-4 h-4 text-amber-500" />
          Back to Inquiries list
        </Link>
      </div>

      {/* Main Grid: Details left, Status updates right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Full Lead Details Card */}
        <div className="lg:col-span-8 glass-panel rounded-2xl border border-white/5 p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col gap-6">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Heading with Status Badge */}
          <div className="flex flex-wrap justify-between items-start gap-4 border-b border-white/5 pb-6">
            <div>
              <span className="text-2xs font-bold text-slate-500 tracking-wider uppercase block mb-1">
                Proposal ID: {inquiry.id.slice(0, 8)}...
              </span>
              <h3 className="font-title text-xl sm:text-2xl font-extrabold text-white">
                {inquiry.fullName}
              </h3>
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${getStatusBadge(inquiry.status)}`}>
              {inquiry.status.replace("_", " ")}
            </span>
          </div>

          {/* Info Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xs text-slate-500 uppercase font-semibold tracking-wider">Email Address</span>
                <a href={`mailto:${inquiry.email}`} className="text-white hover:text-amber-500 transition-colors font-medium">
                  {inquiry.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 flex-shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xs text-slate-500 uppercase font-semibold tracking-wider">Organization</span>
                <span className="text-white font-medium">
                  {inquiry.organization || <span className="text-slate-650 italic font-normal">Not Provided</span>}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 flex-shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xs text-slate-500 uppercase font-semibold tracking-wider">Business Division</span>
                <span className="text-white font-semibold uppercase tracking-wider text-xs">
                  {inquiry.division}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 flex-shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xs text-slate-500 uppercase font-semibold tracking-wider">Date Received</span>
                <span className="text-white font-medium">
                  {new Date(inquiry.createdAt).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Proposal Message Section */}
          <div className="flex flex-col gap-3 border-t border-white/5 pt-6">
            <span className="text-xs font-bold text-slate-450 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-500" />
              Inquiry Proposal Message Details
            </span>
            <div className="bg-slate-950 border border-white/8 p-6 rounded-xl text-slate-300 text-sm leading-relaxed whitespace-pre-wrap selection:bg-amber-600 selection:text-slate-950">
              {inquiry.message}
            </div>
          </div>
        </div>

        {/* Right Column: Status & Deletion Actions Panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <InquiryActions id={inquiry.id} currentStatus={inquiry.status as "NEW" | "IN_PROGRESS" | "RESPONDED" | "CLOSED"} />
        </div>
      </div>
    </div>
  );
}
