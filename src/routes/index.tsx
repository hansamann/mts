import { createFileRoute } from "@tanstack/react-router";
import {
  Flame,
  MapPin,
  MessageSquare,
  MonitorOff,
  Layers,
  Footprints,
  Droplets,
  Wallet,

} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ImageBand } from "@/components/ImageBand";
import { SplitBand } from "@/components/SplitBand";

import { CommunityCarousel } from "@/components/CommunityCarousel";

import { CodeOfConductDialog } from "@/components/CodeOfConductDialog";
import { LINK_CALENDAR, LINK_DISCORD } from "@/lib/links";
import band1Asset from "@/assets/band-1-dark.jpg";
const band1 = band1Asset;
import band2Asset from "@/assets/band-2-wide.png";
const band2 = band2Asset;
import heroOverlay from "@/assets/hero-overlay.png";

const TITLE = "Munich Tech Sauna — Step out of the inbox, step into the heat";
const DESCRIPTION =
  "A relaxed after-work meetup where tech-minded people unwind together in the sauna.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHO_WE_ARE = [
  {
    icon: Flame,
    title: "40+ sauna visits since 2023",
    body: "We've been showing up consistently and warming up the community one session at a time.",
  },
  {
    icon: MapPin,
    title: "Rotating saunas across Munich",
    body: "We also explore various sauna infusions, enhancing the health benefits of the experience.",
  },
  {
    icon: MessageSquare,
    title: "Tech talk, no pressure",
    body: "Chat about tech, life, or whatever comes up. No agenda, no formal talks, just good people unwinding.",
  },
  {
    icon: MonitorOff,
    title: "No laptops, no slides",
    body: "Leave the deck at the office. This is a place for real conversations, not presentations.",
  },
];

const FAQS = [
  {
    q: "Why meet in a sauna?",
    a: "It's about creating a space for genuine, meaningful and honest conversations, where status, titles, and appearances matter less.",
  },
  {
    q: "What do people talk about?",
    a: "Everything from AI, startups, and software to books, science, travel, careers, and life. There are no presentations or pitches, just conversations.",
  },
  {
    q: "What is the dress code?",
    a: "You're welcome to wrap yourself in a towel and go at your own pace. We follow German sauna etiquette: no swimsuits inside the sauna. Please bring two large towels, one to wrap yourself and one to sit on, so no skin touches the wood.",
  },
  {
    q: "Do I have to work in tech?",
    a: "Not at all. We welcome anyone who prefers thoughtful conversations about technology, startups, science, or interesting ideas.",
  },
  {
    q: "Cost?",
    a: "Just buy a 4-hour sauna ticket at the entrance. We usually meet directly inside the sauna area. Don't worry if you are late, you will find us inside.",
  },
  {
    q: "Is it safe for women?",
    a: "Absolutely. Women are a regular part of our meetups, and we make sure everyone to feel comfortable and welcomed. Any inappropriate behavior, or unwanted attention is not tolerated.",
  },
];

const BRING = [
  { icon: Layers, label: "TOWELS" },
  { icon: Footprints, label: "Slippers" },
  { icon: Droplets, label: "Water bottle" },
  { icon: Wallet, label: "Some cash" },
];

const QUOTES = [
  {
    quote: "It's a relaxed, welcoming space where curious minds connect as equals.",
    author: "ANDREAS",
  },
  {
    quote: "An unconventional meetup, but a really cool idea with a friendly community.",
    author: "Emili",
  },
  {
    quote:
      "In the cold, I like to go into the heat from time to time. Mixing networking and the spa is an amazing idea",
    author: "Jonas",
  },
  {
    quote: "It's the perfect mix of relaxation, community, and inspiring conversations.",
    author: "Natalie",
  },
];

function Index() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        {/* 1 — Hero */}
        <section className="relative isolate flex min-h-[60svh] items-start overflow-hidden pb-[60px] pt-24 md:min-h-[30svh] md:items-end md:pb-[60px] lg:min-h-[74svh]">
          <div aria-hidden="true" className="gradient-motion">
            <span />
          </div>

          <img
            src={heroOverlay}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-[40%] w-auto max-w-none md:h-[80%] lg:h-full"
            style={{ mixBlendMode: "hard-light", opacity: 1 }}
          />

          <div className="shell relative z-10">
            <p className="reveal mb-5 text-xs font-bold uppercase tracking-[0.18em] text-ink/70 md:text-sm">
              Meetup in the sauna
            </p>
            <h1 className="display-xl reveal max-w-[16ch] text-ink">
              <span className="block text-[0.9em]">STEP INTO</span>
              THE HEAT
            </h1>
            <p className="reveal mt-4 max-w-xl text-base font-semibold text-ink/80 md:max-w-[28.8rem] md:text-lg lg:max-w-xl">
              A relaxed after-work meetup where tech-minded people unwind together in the sauna
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4">
              <a
                href={LINK_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-heat"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)" }}

              >
                Join Discord
              </a>
              <a
                href={LINK_CALENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline-heat !text-ink"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)" }}

              >
                Calendar
              </a>
            </div>
          </div>
        </section>

        {/* 2 — Upcoming events */}
        <section className="section-pad border-t border-border !pt-10 md:!pt-14">
          <div className="shell">
            <h3 className="display-md text-center">Upcoming events</h3>
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="overflow-hidden rounded-3xl bg-card shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] [transform:translateZ(0)]">
                <iframe
                  src="https://lu.ma/embed/calendar/cal-6K0AaZr12PW4uBL/events"
                  title="Munich Tech Sauna events calendar"
                  loading="lazy"
                  allowFullScreen
                  className="block h-[34rem] w-full rounded-3xl border-0"
                />
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href={LINK_CALENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-heat"
                >
                  Check our event calendar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Split band with statement */}
        <SplitBand src={band1} eyebrow={"NO PHONES\n\nNO SLIDES"} title="Digital Detox" />


        {/* 4 — Who we are */}
        <section className="section-pad">
          <div className="shell">
            <h2 className="display-lg text-center">Who we are</h2>
            <ul className="mt-14 grid border-t border-border md:grid-cols-2 lg:grid-cols-4 lg:border-t">
              {WHO_WE_ARE.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex min-w-0 flex-col border-b border-border px-0 py-10 md:border-l-0 md:border-r md:border-b md:px-8 md:py-12 md:[&:nth-child(even)]:border-r-0 md:[&:nth-child(n+3)]:border-b-0 lg:border-l lg:border-r-0 lg:border-b-0 lg:[&:first-child]:border-l-0"
                >
                  <div className="flex items-center gap-3 md:block">
                    <Icon className="h-6 w-6 shrink-0 text-[#F9602C] md:h-14 md:w-14" strokeWidth={1.25} aria-hidden="true" />
                    <h4 className="mt-0 text-xl font-extrabold uppercase leading-tight tracking-[-0.02em] md:mt-10 md:text-base md:font-bold lg:text-2xl lg:font-extrabold">
                      {title}
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="mt-32 text-center text-lg font-semibold uppercase tracking-[0.12em] md:text-xl">
              Our community throughout the years
            </h3>
            <div className="mt-12">
              <CommunityCarousel />
            </div>
          </div>
        </section>


        {/* 5 — Image band, no text */}
        <ImageBand src={band2} decorativeOnly />

        {/* 6 — For real? */}
        <section className="section-light section-pad">
          <div className="shell">
            <h2 className="display-lg text-center">For real?</h2>
            <div className="mt-14 grid border-t border-foreground/30 md:grid-cols-2">
              {FAQS.map(({ q, a }, i) => {
                const isLastRowDesktop = i >= FAQS.length - (FAQS.length % 2 === 0 ? 2 : 1);
                const isLastMobile = i === FAQS.length - 1;
                return (
                <div
                  key={q}
                  className={`min-w-0 border-foreground/30 py-10 md:py-12 md:even:border-l md:even:border-l-foreground/30 md:even:pl-10 md:odd:pr-10 ${
                    isLastMobile ? "" : "border-b"
                  } ${isLastRowDesktop ? "md:border-b-0" : "md:border-b"}`}
                >
                  <h5 className="text-base font-extrabold uppercase leading-tight tracking-[-0.01em] text-foreground md:text-lg">
                    {q}
                  </h5>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {a}
                  </p>
                </div>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <CodeOfConductDialog />
            </div>
          </div>

        </section>


        {/* 8 — Quotes */}
        <section className="border-t border-border" style={{ paddingBlock: "clamp(2.25rem, 5vw, 4.5rem)" }}>
          <div className="shell">
            <h3 className="display-md text-center">Munich's most unique meetup</h3>
            <div className="mt-20 grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
              {QUOTES.map(({ quote, author }, i) => (
                <figure
                  key={author}
                  className="relative flex flex-col items-start rounded-2xl bg-secondary px-6 pb-8 pt-14 text-left md:px-7"
                >
                  <span aria-hidden="true" className="text-4xl leading-none text-primary">
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                    {quote}
                  </blockquote>
                  <figcaption className="mt-6 text-base font-bold uppercase tracking-[-0.01em] text-primary">
                    {author}
                  </figcaption>
                </figure>
              ))}

            </div>
          </div>
        </section>

        {/* 7 — What to bring? */}
        <section className="section-light" style={{ paddingBlock: "clamp(2.25rem, 5vw, 4.5rem)" }}>
          <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col justify-center">
              <h2 className="display-lg">What to bring?</h2>
              <p className="mt-8 text-base leading-relaxed text-foreground md:text-lg">
                Slippers, 2-3 towels, some cash, and a water bottle. One towel is for sitting or
                lying on in the sauna to keep the benches clean and comfortable.
              </p>
              <p className="mt-8 border-l-2 border-primary pl-6 text-xs uppercase italic leading-relaxed tracking-[0.06em] text-foreground md:text-sm">
                Bonus points if you rock a classic sauna hat to keep your head cool and your style
                hot.
              </p>
            </div>
            <ul className="grid grid-cols-2 self-start md:grid-cols-4 lg:grid-cols-2">
              {BRING.map(({ icon: Icon, label }, i) => (
                <li
                  key={label}
                  className={`flex aspect-square flex-col items-center justify-center gap-4 p-6 text-center border-foreground/30 ${
                    i % 2 === 0 ? "border-r" : ""
                  } ${i < 2 ? "border-b" : ""} md:border-b-0 md:border-r md:[&:nth-child(4)]:border-r-0 lg:border-r-0 lg:border-b-0 lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(-n+2)]:border-b`}
                >
                  <Icon className="h-14 w-14 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* 10 — Closing CTA */}
        <section className="section-pad relative isolate overflow-hidden">
          <div aria-hidden="true" className="gradient-motion">
            <span />
          </div>
          <div className="shell relative z-10 text-center">
            <h2 className="display-lg mx-auto max-w-[18ch] text-center text-ink">
              Are you ready to step into the heat?
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={LINK_CALENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-heat"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)" }}
              >
                Check our event calendar
              </a>
              <a
                href={LINK_DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline-heat !text-ink"
                style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)" }}
              >
                Discord
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
