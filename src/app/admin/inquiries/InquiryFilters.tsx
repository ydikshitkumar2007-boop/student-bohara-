"use client";

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search, Filter, RotateCcw } from "lucide-react";

export function InquiryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Component local states initialized from current URL search params
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [division, setDivision] = useState(searchParams.get("division") || "");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (status) params.set("status", status);
    if (division) params.set("division", division);
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch("");
    setStatus("");
    setDivision("");
    router.push(pathname);
  };

  return (
    <div className="glass-panel rounded-2xl border border-white/5 p-6 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <form onSubmit={handleSearchSubmit} className="flex flex-col lg:flex-row gap-4 items-end">
        {/* Search Input */}
        <div className="flex-1 flex flex-col gap-1.5 w-full">
          <label htmlFor="search-input" className="text-2xs font-bold text-slate-400 uppercase tracking-wider">
            Search Term
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="search-input"
              type="text"
              placeholder="Search name, email, company, or message text..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-white/8 focus:border-amber-500/50 rounded-lg py-2.5 pl-11 pr-4 text-xs text-white placeholder-slate-650 focus-visible:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="w-full lg:w-48 flex flex-col gap-1.5">
          <label htmlFor="status-select" className="text-2xs font-bold text-slate-400 uppercase tracking-wider">
            Status
          </label>
          <select
            id="status-select"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="w-full bg-slate-950 border border-white/8 focus:border-amber-500/50 rounded-lg py-2.5 px-4 text-xs text-slate-300 focus-visible:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Statuses</option>
            <option value="NEW">New</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESPONDED">Responded</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>

        {/* Division Dropdown */}
        <div className="w-full lg:w-48 flex flex-col gap-1.5">
          <label htmlFor="division-select" className="text-2xs font-bold text-slate-400 uppercase tracking-wider">
            Division
          </label>
          <select
            id="division-select"
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
            }}
            className="w-full bg-slate-950 border border-white/8 focus:border-amber-500/50 rounded-lg py-2.5 px-4 text-xs text-slate-300 focus-visible:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Divisions</option>
            <option value="steel">Steel Metallurgy</option>
            <option value="textile">Textile Weaving</option>
            <option value="export">Global Export</option>
            <option value="procurement">General Procurement</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 w-full lg:w-auto flex-shrink-0">
          <button
            type="submit"
            className="flex-1 lg:flex-initial bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Filter className="w-3.5 h-3.5" />
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-slate-900 border border-white/8 hover:border-white hover:bg-white/5 text-white font-bold px-4 py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="Reset Filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
