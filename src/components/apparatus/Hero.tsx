import { HERO, PROCESS_CTA, QUALIFY_CTA } from "@/lib/apparatus";
import { Flask } from "./Flask";
import { PlatformLogo } from "./PlatformLogo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] mx-auto grid max-w-[1320px] items-center gap-10 px-4 pb-10 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-14 lg:pt-14"
    >
      <div className="flex min-w-0 flex-col gap-[26px]">
        <span className="self-start rounded-full border-2 border-ink bg-glass px-4 py-2 text-[15px] font-semibold">
          {HERO.tag}
        </span>
        <h1 className="display-h1 hero-h1 m-0">
          {HERO.headlineLead}{" "}
          <span className="whitespace-nowrap">
            {/* 0.87em = Anton's cap height, so the icons match the letters */}
            <PlatformLogo platform="x" size="0.87em" labelled className="align-baseline" /> AND{" "}
            <PlatformLogo platform="linkedin" size="0.87em" labelled className="align-baseline" />
          </span>
        </h1>
        <p className="m-0 max-w-[600px] text-[19px] leading-[1.5] text-ink-soft sm:text-[21px]">{HERO.subhead}</p>
        <div className="flex flex-wrap items-center gap-3.5">
          <a href="#apply" className="btn-primary">
            {QUALIFY_CTA}
          </a>
          <a href="#process" className="btn-text">
            {PROCESS_CTA}
          </a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[360px] lg:max-w-none">
        <Flask />
      </div>
    </section>
  );
}
