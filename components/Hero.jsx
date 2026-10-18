"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";
import { site, stats } from "@/data/portfolio";

const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.2]);
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <motion.div style={{ y }} className="floaty absolute -left-24 top-32 h-72 w-72 rounded-full bg-neon/20 blur-[110px]" aria-hidden />
      <motion.div style={{ y }} className="floaty absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-violet/25 blur-[120px]" aria-hidden />
      <motion.div style={{ opacity: fade }} variants={{ show: { transition: { staggerChildren: 0.15 } } }} initial="hidden" animate="show"
        className="relative mx-auto w-full max-w-6xl">
        <motion.p variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neon">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available immediately
        </motion.p>
        <motion.h1 variants={item} className="font-display text-5xl font-extrabold leading-tight sm:text-7xl">
          Hi, I&apos;m <span className="grad-text">{site.name}</span>
        </motion.h1>
        <motion.h2 variants={item} className="mt-4 text-2xl font-semibold text-slate-200 sm:text-3xl">{site.role}</motion.h2>
        <motion.p variants={item} className="mt-3 text-neon">{site.tagline}</motion.p>
        <motion.p variants={item} className="mt-6 max-w-2xl text-slate-400">{site.summary}</motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <a href={site.resume} className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon to-violet px-6 py-3 font-semibold text-bg shadow-glow transition hover:scale-105"><FiDownload /> Download Resume</a>
          <a href="#contact" className="flex items-center gap-2 rounded-lg border border-neon/40 px-6 py-3 transition hover:bg-neon/10"><FiMail /> Contact me</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center rounded-lg border border-line transition hover:border-neon hover:text-neon"><FiGithub size={20} /></a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-lg border border-line transition hover:border-neon hover:text-neon"><FiLinkedin size={20} /></a>
        </motion.div>
        <motion.dl variants={item} className="mt-12 flex gap-10">
          {stats.map((s) => (
            <div key={s.label}><dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold grad-text">{s.value}{s.suffix}</dd>
              <p className="text-xs uppercase tracking-wider text-slate-500">{s.label}</p></div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
