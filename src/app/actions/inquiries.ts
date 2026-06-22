"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { setSessionCookie, clearSessionCookie } from "@/lib/auth";

// Zod schema for client inquiry submission
const clientInquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid work email address." }),
  organization: z.string().optional().default(""),
  division: z.enum(["steel", "textile", "export", "procurement"], {
    message: "Please select a target business division.",
  }),
  message: z.string().min(20, { message: "Message details must be at least 20 characters." }),
  antispam: z.literal(true, {
    message: "Legitimacy verification check is required.",
  }),
});

export async function submitInquiryAction(formData: {
  name: string;
  email: string;
  organization?: string;
  division: string;
  message: string;
  antispam: boolean;
}) {
  try {
    // Validate inputs
    const validated = clientInquirySchema.parse(formData);

    // Save in database using Prisma
    await prisma.inquiry.create({
      data: {
        fullName: validated.name,
        email: validated.email,
        organization: validated.organization,
        division: validated.division,
        message: validated.message,
        status: "NEW",
      },
    });

    // Revalidate dashboard and inquiries paths
    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/inquiries");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to submit inquiry:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || "Validation failed." };
    }
    return { success: false, error: "Internal server error. Please try again." };
  }
}

// Zod schema for login action
const loginSchema = z.object({
  password: z.string().min(1, { message: "Password is required." }),
});

export async function adminLoginAction(formData: FormData) {
  const passwordInput = formData.get("password") as string;
  
  const validation = loginSchema.safeParse({ password: passwordInput });
  if (!validation.success) {
    return { success: false, error: validation.error.issues[0].message };
  }

  const correctPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (passwordInput !== correctPassword) {
    return { success: false, error: "Invalid admin password credentials." };
  }

  // Set session cookie
  await setSessionCookie();

  // Redirect to dashboard page
  redirect("/admin/dashboard");
}

export async function adminLogoutAction() {
  await clearSessionCookie();
  redirect("/admin/login");
}

export async function updateInquiryStatusAction(id: string, status: "NEW" | "IN_PROGRESS" | "RESPONDED" | "CLOSED") {
  try {
    await prisma.inquiry.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/inquiries");
    revalidatePath(`/admin/inquiries/${id}`);

    return { success: true };
  } catch (error) {
    console.error("Failed to update inquiry status:", error);
    return { success: false, error: "Database update error." };
  }
}

export async function deleteInquiryAction(id: string) {
  try {
    await prisma.inquiry.delete({
      where: { id },
    });

    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/inquiries");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete inquiry:", error);
    return { success: false, error: "Database delete error." };
  }
}
