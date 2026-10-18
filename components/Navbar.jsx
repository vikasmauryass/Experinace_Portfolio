"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/portfolio";

const links = ["about", "tech-stack", "projects", "experience", "education", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass shadow-glow" : ""}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold">
          <span className="grad-text">VM</span> <span className="text-white">{site.name}</span>
        </a>
        <ul className="hidden gap-7 text-sm capitalize text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l}><a className="transition hover:text-neon" href={`#${l}`}>{l.replace("-", " ")}</a></li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-white" /><span className="mt-1.5 block h-0.5 w-6 bg-white" /><span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </nav>
      {open && (
        <ul className="glass flex flex-col gap-4 px-5 py-5 capitalize md:hidden" onClick={() => setOpen(false)}>
          {links.map((l) => (<li key={l}><a href={`#${l}`}>{l.replace("-", " ")}</a></li>))}
        </ul>
      )}
    </motion.header>
  );
}
