"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24">
      <SectionTitle title="Experience" sub="Professional journey" />
      <div className="relative pl-8">
        <motion.span className="absolute left-[7px] top-0 w-px origin-top bg-gradient-to-b from-neon to-violet"
          initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 1.6 }} />
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={0.05} className="relative mb-10" x={-30} y={0}>
            <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-2 border-neon bg-bg shadow-glow" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                <span className="text-sm text-neon">{e.period}</span>
              </div>
              <p className="text-slate-400">{e.company} • {e.place}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300 marker:text-neon">
                {e.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
