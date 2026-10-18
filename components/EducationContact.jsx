"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiDownload } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { education, site } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-5 py-24">
      <SectionTitle title="Education" sub="Academic background" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="glass grad-border h-full rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{e.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{e.place}</p>
              <p className="mt-3 text-sm text-neon">{e.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const rows = [
    { icon: FiMail, text: site.email, href: `mailto:${site.email}` },
    { icon: FiPhone, text: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: FiLinkedin, text: "LinkedIn", href: site.linkedin },
    { icon: FiGithub, text: "GitHub", href: site.github },
    { icon: FiMapPin, text: site.location },
  ];
  return (
    <section id="contact" className="mx-auto max-w-4xl px-5 py-24">
      <SectionTitle title="Contact" sub="Let's build something" />
      <Reveal>
        <div className="glass grad-border rounded-2xl p-8">
          <p className="max-w-xl text-slate-300">I&apos;m open to full-time roles and freelance work. Send me a message and I&apos;ll get back to you quickly.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {rows.map(({ icon: I, text, href }) => (
              <li key={text}>
                {href ? (
                  <motion.a whileHover={{ x: 6 }} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-line bg-bg/50 px-4 py-3 transition hover:border-neon hover:text-neon"><I /> {text}</motion.a>
                ) : (<span className="flex items-center gap-3 rounded-lg border border-line bg-bg/50 px-4 py-3"><I /> {text}</span>)}
              </li>
            ))}
          </ul>
          <a href={site.resume} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-neon to-violet px-6 py-3 font-semibold text-bg shadow-glow transition hover:scale-105"><FiDownload /> Download Full Resume</a>
        </div>
      </Reveal>
      <p className="mt-16 text-center text-xs text-slate-500">© {new Date().getFullYear()} {site.name}. Built with Next.js.</p>
    </section>
  );
}
