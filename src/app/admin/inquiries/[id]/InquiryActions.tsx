"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { updateInquiryStatusAction, deleteInquiryAction } from "@/app/actions/inquiries";
import { Loader2, Trash2, Check, RefreshCw, AlertCircle } from "lucide-react";

interface InquiryActionsProps {
  id: string;
  currentStatus: "NEW" | "IN_PROGRESS" | "RESPONDED" | "CLOSED";
}

export function InquiryActions({ id, currentStatus }: InquiryActionsProps) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as "NEW" | "IN_PROGRESS" | "RESPONDED" | "CLOSED";
    setIsUpdating(true);
    setError(null);
    setSuccessMsg(null);

    const result = await updateInquiryStatusAction(id, newStatus);
    setIsUpdating(false);

    if (result.success) {
      setStatus(newStatus);
      setSuccessMsg("Status updated successfully.");
      // Auto-clear success message
      setTimeout(() => setSuccessMsg(null), 3000);
    } else {
      setError(result.error || "Failed to update status.");
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    const result = await deleteInquiryAction(id);
    if (result.success) {
      // Redirect back to inquiries list
      router.push("/admin/inquiries");
    } else {
      setIsDeleting(false);
      setShowConfirmDelete(false);
      setError(result.error || "Failed to delete inquiry.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Messages */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg flex items-center gap-2 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {successMsg && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg flex items-center gap-2 text-xs">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Status Selector Card */}
      <div className="bg-slate-900 border border-white/5 p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <label htmlFor="status-select" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Update Process Status
        </label>
        
        <div className="relative">
          <select
            id="status-select"
            value={status}
            onChange={handleStatusChange}
            disabled={isUpdating || isDeleting}
            className="w-full bg-slate-950 border border-white/8 focus:border-amber-500/50 rounded-lg py-2.5 px-4 text-sm text-slate-200 focus-visible:outline-none transition-colors appearance-none cursor-pointer disabled:bg-slate-950 disabled:text-slate-500"
          >
            <option value="NEW">New</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESPONDED">Responded</option>
            <option value="CLOSED">Closed</option>
          </select>
          {isUpdating && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
            </div>
          )}
        </div>
        
        <p className="text-2xs text-slate-500 leading-relaxed">
          Tag status shifts to track lead responses, pipeline audits, or contract closure logs.
        </p>
      </div>

      {/* Delete Inquiry Card */}
      <div className="bg-slate-900/50 border border-red-500/10 p-6 rounded-xl flex flex-col gap-4">
        <h4 className="font-title text-sm font-bold text-red-400">Danger Zone</h4>
        
        {!showConfirmDelete ? (
          <button
            type="button"
            onClick={() => setShowConfirmDelete(true)}
            disabled={isUpdating || isDeleting}
            className="w-full bg-red-950/20 border border-red-500/20 hover:bg-red-500/10 text-red-400 hover:text-red-300 font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete Proposal Entry
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-2xs text-slate-400 leading-relaxed">
              Confirm deletion: This action is permanent and deletes all message rows from the database.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 bg-red-650 hover:bg-red-750 text-white font-bold py-2 rounded-lg text-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {isDeleting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Trash2 className="w-3.5 h-3.5" />
                )}
                Confirm Delete
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmDelete(false)}
                disabled={isDeleting}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded-lg text-2xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
