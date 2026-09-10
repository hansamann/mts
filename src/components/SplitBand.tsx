import { useEffect, useRef, useState } from "react";

type SplitBandProps = {
  src: string;
  eyebrow?: string;
  title: React.ReactNode;
};

export function SplitBand({ src, eyebrow, title }: SplitBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && setInView(true),
      { threshold: 0.15 },
    );
    observer.observe(el);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return () => observer.disconnect();

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const progress =
          (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(Math.max(-1, Math.min(1, progress)) * 48);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate grid min-h-[30vh] grid-cols-1 overflow-hidden md:min-h-[30vh] md:grid-cols-2 lg:min-h-[60vh]"
    >
      {/* Left half — full-bleed image, top to bottom */}
      <div
        className={`relative isolate h-[22vh] overflow-hidden transition-all duration-700 ease-out md:h-full ${
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
      </div>

      {/* Right half — gradient + content */}
      <div className="relative isolate flex items-center overflow-hidden">
        <div aria-hidden="true" className="gradient-motion">
          <span />
        </div>
        <div
          style={{ containerType: "inline-size" }}
          className={`relative z-10 w-full px-8 py-8 transition-all delay-100 duration-700 ease-out md:px-16 md:py-16 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h3
            className="display-xl whitespace-nowrap text-left text-ink text-[clamp(2rem,12cqw,9rem)]"
            style={{ textIndent: "-0.062em" }}
          >
            {title}
          </h3>
          {eyebrow && (
            <p className="mt-6 whitespace-pre-line text-sm font-bold uppercase tracking-[0.22em] text-ink/80">
              {eyebrow}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
