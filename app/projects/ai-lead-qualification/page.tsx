import { Check } from "lucide-react";

export default function Case() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-28 pt-36 lg:px-8">
      {/* Back to Projects */}
      <a href="/projects" className="text-sm text-zinc-500 hover:text-white">
        ← All projects
      </a>

      {/* Header */}
      <p className="mt-10 text-xs tracking-[.18em] text-[#9d91ff]">
        AI AUTOMATION · CASE STUDY
      </p>

      <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
        AI Lead Qualification & CRM Automation
      </h1>

      <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
        An end-to-end lead engine built with n8n, Gemini, Gmail and Google
        Sheets for a fictional US home-renovation business.
      </p>

      {/* Demo Video */}
      <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
        <video
          className="w-full"
          controls
          preload="metadata"
          playsInline
        >
          <source
            src="/lead-qualification-demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Problem */}
      <section className="mt-20 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs tracking-[.18em] text-[#9d91ff]">
            THE PROBLEM
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Manual lead handling slows sales.
          </h2>
        </div>

        <p className="leading-8 text-zinc-500">
          The system captures inbound leads, uses AI to understand buying
          intent, scores and routes them, updates the CRM, sends personalized
          responses, detects replies and follows up when necessary.
        </p>
      </section>

      {/* Workflow */}
      <section className="mt-20">
        <p className="text-xs tracking-[.18em] text-[#9d91ff]">
          WORKFLOW
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Lead Webhook",
            "AI Qualification",
            "CRM + Sales Alert",
            "Personalized Email",
            "Reply Detection",
            "Follow-up",
            "CRM Status",
            "Sales Handoff",
          ].map((x, i) => (
            <div className="glass rounded-2xl p-5" key={x}>
              <span className="text-xs text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="mt-5 font-medium">{x}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-20 glass rounded-3xl p-8">
        <p className="text-xs tracking-[.18em] text-[#9d91ff]">
          TECH STACK
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "n8n",
            "Gemini",
            "Gmail",
            "Google Sheets",
            "Webhooks",
          ].map((x) => (
            <span
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400"
              key={x}
            >
              <Check
                className="mr-2 inline text-[#00e5a8]"
                size={15}
              />
              {x}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}