"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);

    // smooth anchor links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -70 }); }
    };
    document.addEventListener("click", onClick);
    return () => { cancelAnimationFrame(id); document.removeEventListener("click", onClick); lenis.destroy(); };
  }, []);
  return children;
}
