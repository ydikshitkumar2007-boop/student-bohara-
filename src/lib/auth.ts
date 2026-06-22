import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "bohara_admin_session";
const SESSION_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

// Helper to get 32-byte key from ADMIN_PASSWORD environment variable
function getEncryptionKey(): Buffer {
  const password = process.env.ADMIN_PASSWORD || "admin123";
  return crypto.createHash("sha256").update(password).digest();
}

// Encrypt payload to a tamper-proof session string
export function encryptSession(payload: Record<string, unknown>): string {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(12); // GCM recommended IV length is 12 bytes
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  let encrypted = cipher.update(JSON.stringify(payload), "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag().toString("hex");
  return `${iv.toString("hex")}:${encrypted}:${authTag}`;
}

// Decrypt session string to a JS object
export function decryptSession(sessionStr: string): Record<string, unknown> | null {
  try {
    const parts = sessionStr.split(":");
    if (parts.length !== 3) return null;

    const iv = Buffer.from(parts[0], "hex");
    const encrypted = Buffer.from(parts[1], "hex");
    const authTag = Buffer.from(parts[2], "hex");

    const key = getEncryptionKey();
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encrypted.toString("hex"), "hex", "utf8");
    decrypted += decipher.final("utf8");

    const payload = JSON.parse(decrypted);
    
    // Check expiration
    if (payload.expiresAt && Date.now() > payload.expiresAt) {
      return null;
    }

    return payload;
  } catch (error) {
    console.error("Session decryption error:", error);
    return null;
  }
}

// Set secure session cookie
export async function setSessionCookie() {
  const payload = {
    isAdmin: true,
    expiresAt: Date.now() + SESSION_EXPIRY,
  };
  const token = encryptSession(payload);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60, // 24 hours in seconds
    path: "/",
  });
}

// Clear session cookie
export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// Verify request session
export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  if (!cookie) return false;

  const session = decryptSession(cookie.value);
  return session !== null && session.isAdmin === true;
}
