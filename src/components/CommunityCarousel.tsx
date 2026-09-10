import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import photo1 from "@/assets/gallery-1.png";
import photo2 from "@/assets/gallery-2.png";
import photo3 from "@/assets/gallery-3.png";
import photo4 from "@/assets/gallery-4.png";
import photo5 from "@/assets/gallery-5.png";
import photo6 from "@/assets/gallery-6.png";
import photo7 from "@/assets/gallery-7.png";
import photo8 from "@/assets/gallery-8.png";

const PHOTOS: { src: string; caption: string }[] = [
  { src: photo1, caption: "Dipping in the ice" },
  { src: photo2, caption: "Ice Cabin at Olympiabad Sauna" },
  { src: photo3, caption: "Nordbad" },
  { src: photo4, caption: "Lunch at the Hütte" },
  { src: photo5, caption: "Networking at Dantebad" },
  { src: photo6, caption: "Cheers from Phoenixbad" },
  { src: photo7, caption: "Summer hiking" },
  { src: photo8, caption: "Cosimawellenbad" },
];

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}

export function CommunityCarousel() {
  const rowRef = useRef<HTMLUListElement>(null);
  const [photos, setPhotos] = useState(PHOTOS);
  // Keep the static HTML and first client render identical, then shuffle.
  useEffect(() => setPhotos(shuffle(PHOTOS)), []);
  const [overflows, setOverflows] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const canScroll = el.scrollWidth - el.clientWidth > 4;
    setOverflows(canScroll);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    measure();
    const el = rowRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const page = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !overflows) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const el = rowRef.current;
      if (!el) return;
      const isEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      if (isEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
      }
    }, 8000);
    return () => window.clearInterval(id);
  }, [paused, overflows]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul
        ref={rowRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {photos.map((photo, i) => (
          <li
            key={`${photo.caption}-${i}`}
            className="w-[39vw] shrink-0 snap-start sm:w-[23vw] lg:w-[15rem]"
          >
            <figure>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={photo.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="pointer-events-none aspect-[4/3] w-full select-none object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs text-muted-foreground">
          No devices in the spa, but sometimes we still get together for a consentual selfie :)
        </p>
        {overflows && (
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Scroll photos left"
              onClick={() => page(-1)}
              disabled={atStart}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary disabled:opacity-35 disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll photos right"
              onClick={() => page(1)}
              disabled={atEnd}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary disabled:opacity-35 disabled:hover:border-border disabled:hover:text-foreground"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
