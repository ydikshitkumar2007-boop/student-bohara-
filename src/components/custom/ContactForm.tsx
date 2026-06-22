"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitInquiryAction } from "@/app/actions/inquiries";

// 1. Define Zod Inquiry validation schema
const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid work email address." }),
  organization: z.string().optional(),
  division: z.enum(["steel", "textile", "export", "procurement"], {
    message: "Please select a target business division.",
  }),
  message: z.string().min(20, { message: "Message details must be at least 20 characters." }),
  antispam: z.literal(true, {
    message: "Inquiry legitimacy verification check is required.",
  }),

});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);

  // Initialize React Hook Form with Zod schema resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  // Server-side action integration to save into PostgreSQL
  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitError(false);
    try {
      const result = await submitInquiryAction({
        name: data.name,
        email: data.email,
        organization: data.organization || "",
        division: data.division,
        message: data.message,
        antispam: data.antispam
      });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setIsSubmitError(true);
      }
    } catch (err) {
      console.error("Contact Form submit error:", err);
      setIsSubmitError(true);
    }
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
    setIsSubmitError(false);
  };

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl p-8 shadow-2xl relative min-h-[480px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="inquiry-form-key"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-title text-2xl font-bold text-white mb-2">
              Send a Business Inquiry
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Complete the form below to connect directly with our procurement, exports, or metallurgy divisions.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-name" className="text-xs font-semibold text-slate-400">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    placeholder="John Doe"
                    className={cn(
                      "bg-slate-800/80 border border-white/8 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all",
                      errors.name && "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    )}
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-2xs font-semibold text-red-500" aria-live="assertive">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-email" className="text-xs font-semibold text-slate-400">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    placeholder="john@company.com"
                    className={cn(
                      "bg-slate-800/80 border border-white/8 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all",
                      errors.email && "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    )}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-2xs font-semibold text-red-500" aria-live="assertive">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Organization */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-org" className="text-xs font-semibold text-slate-400">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="form-org"
                    placeholder="ACME Corporation"
                    className="bg-slate-800/80 border border-white/8 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    {...register("organization")}
                  />
                </div>

                {/* Target Division */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-div" className="text-xs font-semibold text-slate-400">
                    Business Division <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="form-div"
                    className={cn(
                      "bg-slate-800/80 border border-white/8 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none",
                      errors.division && "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                    )}
                    {...register("division")}
                  >
                    <option value="" disabled>Select a division...</option>
                    <option value="steel">Stainless Steel & Houseware</option>
                    <option value="textile">Textile & Apparel Supply</option>
                    <option value="export">International Export Sales</option>
                    <option value="procurement">Vendor Partnerships</option>
                  </select>
                  {errors.division && (
                    <span className="text-2xs font-semibold text-red-500" aria-live="assertive">
                      {errors.division.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-msg" className="text-xs font-semibold text-slate-400">
                  Message / Proposal Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="form-msg"
                  rows={4}
                  placeholder="Please describe your bulk procurement requirements or industrial stamping details..."
                  className={cn(
                    "bg-slate-800/80 border border-white/8 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none",
                    errors.message && "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                  )}
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-2xs font-semibold text-red-500" aria-live="assertive">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Anti-spam Verification Checkbox */}
              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    {...register("antispam")}
                  />
                  <div className="w-5 h-5 bg-slate-800 rounded border border-white/8 flex items-center justify-center text-slate-950 peer-checked:bg-amber-500 peer-checked:border-amber-500 transition-all">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-950 hidden peer-checked:block" />
                  </div>
                  <span className="text-xs text-slate-400">
                    I verify that this is a legitimate procurement proposal. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.antispam && (
                  <span className="text-2xs font-semibold text-red-500" aria-live="assertive">
                    {errors.antispam.message}
                  </span>
                )}
              </div>

              {/* Feedback Warning */}
              {isSubmitError && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold p-3.5 rounded-lg">
                  An unexpected network error occurred. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 disabled:opacity-50 transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processing proposal...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-box-key"
            className="flex flex-col items-center text-center p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-title text-2xl font-bold text-white mb-3">
              Inquiry Submitted Successfully
            </h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-8">
              Thank you for contacting Bohara Group. A sales coordinator from your target division will review your inquiry and reach out within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="btn btn-outline border-white/20 hover:border-white hover:bg-white/5 text-white font-bold px-6 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
