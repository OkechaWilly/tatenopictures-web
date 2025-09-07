'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Your Name" required className="border p-3 rounded" />
      <input type="email" name="email" placeholder="Your Email" required className="border p-3 rounded" />
      <textarea name="message" placeholder="Your Message" required className="border p-3 rounded h-32" />
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Send Message
      </button>
      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
}
