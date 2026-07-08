"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setIsError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus(result.message || "Message sent successfully!");
        form.reset();
      } else {
        setIsError(true);
        setStatus(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full bg-black/40 backdrop-blur-sm border border-gray-800 focus:border-amber-400 text-white px-4 py-3 rounded-lg outline-none transition-all duration-300 placeholder-gray-600 text-sm focus:ring-1 focus:ring-amber-400/20"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full bg-black/40 backdrop-blur-sm border border-gray-800 focus:border-amber-400 text-white px-4 py-3 rounded-lg outline-none transition-all duration-300 placeholder-gray-600 text-sm focus:ring-1 focus:ring-amber-400/20"
          />
        </div>
      </div>

      {/* Service Dropdown */}
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Interest
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full bg-black/40 backdrop-blur-sm border border-gray-800 focus:border-amber-400 text-white px-4 py-3 rounded-lg outline-none transition-all duration-300 text-sm focus:ring-1 focus:ring-amber-400/20 appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-neutral-900 text-gray-500">
              Select a service...
            </option>
            <option value="narrative" className="bg-neutral-900 text-white">
              Narrative Film & Documentary
            </option>
            <option value="events" className="bg-neutral-900 text-white">
              Event & Wedding Videography
            </option>
            <option value="stills" className="bg-neutral-900 text-white">
              Photography (Stills)
            </option>
            <option value="branded" className="bg-neutral-900 text-white">
              Branded Content & Motion Graphics
            </option>
            <option value="academy" className="bg-neutral-900 text-white">
              Academy & Training Program
            </option>
            <option value="general" className="bg-neutral-900 text-white">
              General Inquiry
            </option>
          </select>
          {/* Custom Chevron icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Project Brief / Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your visual goals, timeline, and project details..."
          className="w-full bg-black/40 backdrop-blur-sm border border-gray-800 focus:border-amber-400 text-white px-4 py-3 rounded-lg outline-none transition-all duration-300 placeholder-gray-600 text-sm focus:ring-1 focus:ring-amber-400/20 resize-y"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className={`w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800/55 font-semibold text-white px-6 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20 cursor-pointer flex items-center justify-center gap-2`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>

      {/* Feedback Message */}
      {status && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center text-sm font-medium mt-2 ${
            isError ? "text-rose-400" : "text-emerald-400"
          }`}
        >
          {status}
        </motion.p>
      )}
    </form>
  );
}
