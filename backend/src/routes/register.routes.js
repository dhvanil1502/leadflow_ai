import { Router } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import prisma from "../database/db.js";

const router = Router();

// ──────────────────────────────────────────────
// Health check – just proves the server is alive
// GET /api/health
// ──────────────────────────────────────────────
router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ──────────────────────────────────────────────
// Zod schema – describes what valid input looks like
//   • name  : at least 1 character
//   • email : must look like an email
//   • password : at least 8 characters
// ──────────────────────────────────────────────
const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// ──────────────────────────────────────────────
// Register endpoint
// POST /api/auth/register
// ──────────────────────────────────────────────
router.post("/auth/register", async (req, res) => {
  // 1. Validate input ───────────────────────────
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    // Zod gives us a structured list of what went wrong.
    // We pick the first human-readable message for simplicity.
    const firstIssue = result.error.issues[0].message;
    return res.status(400).json({ error: firstIssue });
  }

  const { name, email, password } = result.data;

  try {
    // 2. Check if email is already taken ──────────
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // 3. Hash the password ────────────────────────
    //    Cost factor 10 is a safe default (≈100 ms per hash).
    const passwordHash = await bcrypt.hash(password, 10);

    // 4. Create the user row ──────────────────────
    const user = await prisma.user.create({
      data: { name, email, passwordHash },
    });

    // 5. Respond with safe fields only ────────────
    //    We intentionally leave out passwordHash.
    return res.status(201).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error("Register error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
