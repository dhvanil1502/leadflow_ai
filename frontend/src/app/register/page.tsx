"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import Link from "next/link";

export default function RegisterPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");

function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
e.preventDefault();
setError("");

if (password !== confirmPassword) {
  setError("Passwords do not match.");
  return;
}

alert(`Registration form submitted for ${name} (${email}).`);


}

return ( <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white"> <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl md:grid-cols-2">
{/* Branding panel */} <section className="hidden flex-col justify-between bg-gradient-to-br from-blue-600 to-indigo-900 p-10 md:flex"> <div> <h1 className="text-2xl font-bold tracking-tight">
LeadFlow<span className="text-blue-200"> AI</span> </h1>

        <p className="mt-20 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Start growing smarter
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight">
          Turn opportunities
          <br />
          into relationships.
        </h2>

        <p className="mt-5 max-w-sm leading-7 text-blue-100">
          Find business leads, organize your contacts, and manage your
          outreach from one workspace.
        </p>
      </div>

      <p className="mt-16 text-sm text-blue-200">
        Your next customer could be one search away.
      </p>
    </section>

    {/* Registration form */}
    <section className="flex flex-col justify-center p-8 sm:p-12">
      <div className="mb-8 md:hidden">
        <h1 className="text-2xl font-bold">
          LeadFlow<span className="text-blue-400"> AI</span>
        </h1>
      </div>

      <h2 className="text-3xl font-bold tracking-tight">
        Create your account
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Get started with your LeadFlow AI workspace.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Full name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <p className="mt-2 text-xs text-slate-500">
            Use at least 8 characters.
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Confirm password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Create account
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          href="/"
          className="font-semibold text-blue-400 transition hover:text-blue-300"
        >
          Sign in
        </Link>
      </p>

      <p className="mt-10 text-center text-xs text-slate-600">
        © 2026 LeadFlow AI. All rights reserved.
      </p>
    </section>
  </div>
</main>


);
}
