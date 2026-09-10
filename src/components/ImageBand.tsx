import { useEffect, useRef, useState } from "react";

type ImageBandProps = {
  src: string;
  children?: React.ReactNode;
  decorativeOnly?: boolean;
  align?: "center" | "bottom-left";
  tint?: boolean;
};

export function ImageBand({
  src,
  children,
  decorativeOnly = false,
  align = "center",
  tint = false,
}: ImageBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(Math.max(-1, Math.min(1, progress)) * 110);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      {...(decorativeOnly ? { "aria-hidden": "true" as const } : {})}
      className="relative isolate h-[48vh] min-h-[18rem] w-full overflow-hidden md:h-[60vh]"
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1080}
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.3)`, filter: "brightness(1.25) contrast(1.02)" }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      {tint && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,96,44,0.45)_0%,rgba(226,52,34,0.75)_100%)] mix-blend-multiply"
        />
      )}
      {children && (
        <div
          className={`relative flex h-full px-6 md:px-12 ${
            align === "bottom-left" ? "items-end pb-8 md:pb-12" : "items-center"
          }`}
        >
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}
