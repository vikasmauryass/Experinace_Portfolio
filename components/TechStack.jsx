"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { skillGroups, skillBars } from "@/data/portfolio";

// node graph (viewBox 720x300)
const nodes = {
  node: { x: 70, y: 150, label: "Node.js", w: 100 },
  express: { x: 300, y: 150, label: "Express.js", w: 120 },
  redis: { x: 300, y: 50, label: "Redis", w: 90 },
  micro: { x: 300, y: 250, label: "Microservices", w: 140 },
  api: { x: 560, y: 80, label: "REST API", w: 110 },
  mongo: { x: 560, y: 150, label: "Mongoose", w: 110 },
  docker: { x: 560, y: 220, label: "Docker", w: 100 },
};
const edges = [["node","redis"],["node","express"],["node","micro"],["express","api"],["express","mongo"],["micro","docker"],["redis","api"],["express","docker"]];
const path = (a, b) => {
  const A = nodes[a], B = nodes[b];
  const x1 = A.x + A.w / 2, x2 = B.x - B.w / 2;
  const mx = (x1 + x2) / 2;
  return `M${x1} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${x2} ${B.y}`;
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Tech Stack" sub="Tools I build with" />
      <Reveal>
        <div className="glass grad-border overflow-x-auto rounded-2xl p-4">
          <svg viewBox="0 0 720 300" className="mx-auto min-w-[560px]" role="img" aria-label="Backend technology graph">
            <defs>
              <linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient>
            </defs>
            {edges.map(([a, b], i) => (
              <motion.path key={a + b} d={path(a, b)} fill="none" stroke="url(#g)" strokeWidth="1.6"
                initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.9 }}
                viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 + i * 0.12 }} />
            ))}
            {Object.entries(nodes).map(([k, n], i) => (
              <motion.g key={k} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring" }} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
                <rect x={n.x - n.w / 2} y={n.y - 20} width={n.w} height="40" rx="12" fill="#0e1426" stroke="url(#g)" />
                <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#e6ecff" fontSize="14" fontWeight="600">{n.label}</text>
              </motion.g>
            ))}
          </svg>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-5 font-display text-lg font-semibold">Skills</h3>
            <ul className="space-y-4">
              {skillBars.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-1 flex justify-between text-sm"><span>{s.name}</span><span className="text-slate-500">{s.level}%</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-line">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-neon to-violet"
                      initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <div className="space-y-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-neon">{g.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-md border border-line bg-bg/60 px-3 py-1 text-xs text-slate-300 transition hover:border-neon hover:text-neon">{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
