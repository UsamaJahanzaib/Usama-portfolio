import{ArrowUpRight}from"lucide-react";const p = [
  [
    "AI Lead Qualification & CRM Automation",
    "AI AUTOMATION",
    "End-to-end lead qualification, CRM updates, personalized outreach and reply detection.",
    "/projects/ai-lead-qualification"
  ]
];export default function Projects(){return <main className="mx-auto max-w-6xl px-5 pb-28 pt-36 lg:px-8"><p className="text-xs tracking-[.18em] text-[#9d91ff]">PROJECTS</p><h1 className="mt-4 text-5xl font-semibold sm:text-7xl">Selected systems.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">Practical AI engineering across automation, agents, retrieval and computer vision.</p><div className="mt-14 space-y-5">{p.map(x=><a href={x[3]} key={x[0]} className="glass block rounded-3xl p-8 hover:border-white/20"><div className="flex justify-between"><span className="text-xs tracking-[.18em] text-[#9d91ff]">{x[1]}</span><ArrowUpRight/></div><h2 className="mt-16 text-2xl font-medium">{x[0]}</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">{x[2]}</p></a>)}</div></main>}