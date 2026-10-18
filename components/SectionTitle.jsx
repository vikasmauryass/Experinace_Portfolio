import Reveal from "./Reveal";
export default function SectionTitle({ title, sub }) {
  return (
    <Reveal className="mb-12">
      <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
        <span className="grad-text">{title}</span>
      </h2>
      {sub && <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{sub}</p>}
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-violet" />
    </Reveal>
  );
}
