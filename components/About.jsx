import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { site } from "@/data/portfolio";
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-5 py-24">
      <SectionTitle title="About" sub="Who I am" />
      <Reveal><p className="text-lg leading-relaxed text-slate-300">{site.summary}</p></Reveal>
    </section>
  );
}
