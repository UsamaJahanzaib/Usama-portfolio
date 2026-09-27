"use client";

import { FormEvent, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

   const supabaseResult = await supabase.from("contacts").insert([
  {
    name: form.name,
    email: form.email,
    company: form.company || null,
    message: form.message,
  },
]);

if (supabaseResult.error) {
  console.error("Supabase error:", supabaseResult.error);
  setLoading(false);
  setStatus(`Error: ${supabaseResult.error.message}`);
  return;
}

const emailResponse = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    company: form.company,
    message: form.message,
  }),
});

const emailResult = await emailResponse.json();

setLoading(false);

if (!emailResponse.ok) {
  console.error("Email error:", emailResult);
  setStatus(
    "Your message was saved, but the email notification could not be sent."
  );
  return;
}

    setForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    setStatus("Thanks! Your message has been sent successfully.");
  }

  return (
    <main className="mx-auto max-w-6xl px-5 pb-28 pt-36 lg:px-8">
      <p className="text-xs tracking-[.18em] text-[#9d91ff]">
        CONTACT
      </p>

      <h1 className="mt-4 max-w-3xl text-5xl font-semibold sm:text-7xl">
        Let&apos;s build something useful.
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
        Have an automation, AI agent, RAG system or AI application in mind?
        Reach out.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        {/* Contact Form */}
        <div className="glass rounded-3xl p-7 sm:p-10">
          <h2 className="text-2xl font-semibold">
            Start a conversation
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Tell me a little about your project and I&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Name
              </label>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none transition focus:border-[#9d91ff]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Email
              </label>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none transition focus:border-[#9d91ff]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Company
              </label>

              <input
                type="text"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                placeholder="Your company"
                className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none transition focus:border-[#9d91ff]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Message
              </label>

              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white outline-none transition focus:border-[#9d91ff]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={17} />

              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-zinc-400">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          <a
            href="mailto:usamajahanzaib81@gmail.com"
            className="glass block rounded-2xl p-7 transition hover:border-white/20"
          >
            <Mail />

            <h2 className="mt-8">Email</h2>

            <p className="mt-2 text-sm text-zinc-500">
              usamajahanzaib81@gmail.com
            </p>
          </a>

          <a
            href="https://linkedin.com/in/usamajahanzaib"
            target="_blank"
            rel="noopener noreferrer"
            className="glass block rounded-2xl p-7 transition hover:border-white/20"
          >
            <Linkedin />

            <h2 className="mt-8">LinkedIn</h2>

            <p className="mt-2 text-sm text-zinc-500">
              Connect professionally
            </p>
          </a>

          <a
            href="https://github.com/UsamaJahanzaib/Usama-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="glass block rounded-2xl p-7 transition hover:border-white/20"
          >
            <Github />

            <h2 className="mt-8">GitHub</h2>

            <p className="mt-2 text-sm text-zinc-500">
              View my code
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}