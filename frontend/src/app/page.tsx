"use client";



import { useState } from "react";
import type { SyntheticEvent } from "react";
export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Email entered: ${email}`);
    console.log("email :",email," password: ",password)
    setEmail("")
    setPassword("")
  }


return ( 
<main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white"> 
  <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl md:grid-cols-2">


    {/* Left panel — Branding */}
    <section className="hidden flex-col justify-between bg-gradient-to-br from-blue-600 to-indigo-900 p-10 md:flex">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          LeadFlow<span className="text-blue-200"> AI</span>
        </h1>

        <p className="mt-20 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
          Smarter outreach starts here
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight">
          Find the right leads.
          <br />
          Build real connections.
        </h2>

        <p className="mt-5 max-w-sm leading-7 text-blue-100">
          Discover businesses, identify potential customers, and manage
          your outreach from one simple workspace.
        </p>
      </div>

      <p className="mt-16 text-sm text-blue-200">
        Find leads. Build relationships. Grow your business.
      </p>
    </section>

    {/* Right panel — Login form */}
    <section className="flex flex-col justify-center p-8 sm:p-12">
      <div className="mb-8 md:hidden">
        <h1 className="text-2xl font-bold">
          LeadFlow<span className="text-blue-400"> AI</span>
        </h1>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Sign in to continue to your workspace.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <a
              href="#forgot-password"
              className="text-sm text-blue-400 transition hover:text-blue-300"
            >
              Forgot password?
            </a>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-slate-600 accent-blue-500"
          />

          <label
            htmlFor="remember"
            className="text-sm text-slate-400"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Sign in
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-semibold text-blue-400 transition hover:text-blue-300"
        >
          Create an account
        </a>
      </p>

      <p className="mt-10 text-center text-xs text-slate-600">
        © 2026 LeadFlow AI. All rights reserved.
      </p>
    </section>
  </div>
</main>

);
}
