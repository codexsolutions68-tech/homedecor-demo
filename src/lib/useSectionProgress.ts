"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns 0..1 progress of how far the viewport has scrolled through a tall
 * section: 0 when the section's top just reaches the top of the viewport,
 * 1 when the section's bottom reaches the top of the viewport.
 */
export function useSectionProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? -rect.top / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, p)));
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return progress;
}
