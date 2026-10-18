"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { projects, aiProject } from "@/data/portfolio";

function Card({ p, i }) {
  return (
    <Reveal delay={(i % 2) * 0.12}>
      <motion.a href={p.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -8 }}
        className="glass grad-border group block h-full rounded-2xl p-6 transition-shadow hover:shadow-glow">
        <div className="mb-5 grid h-36 place-items-center rounded-xl bg-gradient-to-br from-neon/10 to-violet/20">
          <span className="font-display text-3xl font-extrabold grad-text transition group-hover:scale-110">{p.name}</span>
        </div>
        <p className="text-xs uppercase tracking-widest text-neon">{p.tag}</p>
        <h3 className="mt-1 flex items-center justify-between font-display text-xl font-semibold">{p.name} <FiExternalLink className="text-slate-500 transition group-hover:text-neon" /></h3>
        <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (<li key={s} className="rounded bg-line/70 px-2 py-0.5 text-xs text-slate-300">{s}</li>))}
        </ul>
      </motion.a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Projects" sub="Live work you can visit" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (<Card key={p.name} p={p} i={i} />))}
      </div>
      <Reveal className="mt-6">
        <div className="glass grad-border rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-violet">AI / Computer Vision</p>
          <h3 className="mt-1 font-display text-xl font-semibold">{aiProject.name}</h3>
          <p className="mt-2 text-sm text-slate-400">{aiProject.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{aiProject.stack.map((s) => (<li key={s} className="rounded bg-line/70 px-2 py-0.5 text-xs">{s}</li>))}</ul>
        </div>
      </Reveal>
    </section>
  );
}
