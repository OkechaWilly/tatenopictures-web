"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setIsError(false);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus(result.message || "Thank you. Your enquiry has been sent.");
        form.reset();
      } else {
        setIsError(true);
        setStatus(result.message || "We could not send your enquiry. Please try again.");
      }
    } catch {
      setIsError(true);
      setStatus("Something went wrong. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const field = "w-full border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(184,91,61,.12)] placeholder:text-[#9B9B93]";

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-semibold text-[var(--ink)]">Your name
          <input type="text" name="name" required placeholder="Your name" className={field}/>
        </label>
        <label className="flex flex-col gap-2 text-xs font-semibold text-[var(--ink)]">Email address
          <input type="email" name="email" required placeholder="you@example.com" className={field}/>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-xs font-semibold text-[var(--ink)]">What are you looking for?
        <select name="service" required defaultValue="" className={field}>
          <option value="" disabled>Select a service</option>
          <option value="film">Film & documentary production</option>
          <option value="music-video">Music video production</option>
          <option value="events">Wedding & event films</option>
          <option value="photography">Photography</option>
          <option value="post-production">Editing & colour grading</option>
          <option value="creative">Creative visuals & design</option>
          <option value="academy">Academy & community programme</option>
          <option value="general">Something else</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs font-semibold text-[var(--ink)]">A little about your project
        <textarea name="message" required rows={5} placeholder="What are you planning? Include any useful details, dates or links." className={field + " resize-y"}/>
      </label>
      <button type="submit" disabled={isLoading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">{isLoading ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span></button>
      {status && <p role="status" className={`text-sm ${isError ? "text-red-700" : "text-green-800"}`}>{status}</p>}
    </form>
  );
}
