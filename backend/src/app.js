import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

// ── Middleware ──────────────────────────────────
// express.json() lets the server read JSON request bodies.
// cors() allows the frontend (on a different port) to call this API.
app.use(express.json());
app.use(cors());

// ── Routes ─────────────────────────────────────
// Every route defined in routes/index.js will be prefixed with /api.
// Example: router.post("/auth/register") → POST /api/auth/register
app.use("/api", router);

export default app;
