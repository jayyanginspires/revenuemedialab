import { PROCESS, SCHEDULE, STAGE_COLORS } from "@/lib/apparatus";
import { PlatformLogo } from "./PlatformLogo";

// Label text uses the darker *-text tones so it passes AA on bench.
const LABEL_COLORS = ["text-raw-text", "text-mid-1-text", "text-mid-2-text", "text-solution-dark"];

const panel = "rounded-[28px] border-2 border-ink bg-glass p-6";

function StageRow({ i, children }: { i: number; children: React.ReactNode }) {
  const s = PROCESS.stages[i];
  return (
    <div data-stage={i} className="flex gap-4 md:gap-6">
      {/* Gutter: the pipe overlay draws through here. These circles are the
          measuring anchors and the no-JS fallback; they hide once the pipe
          mounts. */}
      <div aria-hidden="true" className="flex w-6 shrink-0 justify-center md:w-20">
        <span
          data-pipe="valve"
          className="valve-fallback mt-1 block h-6 w-6 shrink-0 rounded-full border-[3px] border-ink md:mt-0 md:h-11 md:w-11"
          style={{ background: STAGE_COLORS[i] }}
        />
      </div>
      <div className="grid min-w-0 flex-1 items-start gap-8 pb-16 md:grid-cols-2 md:pb-[72px]">
        <div data-reveal className="flex min-w-0 flex-col gap-3">
          <span className={`text-[16px] font-bold ${LABEL_COLORS[i]}`}>{s.label}</span>
          <h3 className="m-0 text-[28px] font-bold leading-[1.1] md:text-[34px]">{s.title}</h3>
          <p className="m-0 max-w-[60ch] text-[18px] leading-[1.55] text-ink-soft">{s.body}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

// Stage 4: a week of scheduled posts. The X/LinkedIn switch is a static
// label showing both channels run from the same queue, not a control.
function ScheduleCard() {
  return (
    <div data-reveal className="relative pt-7">
      <p
        className="margin-note absolute -top-1 right-2 m-0 rotate-[3deg] text-[24px]"
        style={{ color: "var(--solution-dark)" }}
      >
        {SCHEDULE.note}
      </p>
      <div className="rounded-[28px] border-2 border-ink bg-glass p-5 shadow-[0_6px_0_var(--ink)] md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span aria-hidden="true" className="flex rounded-full border-2 border-ink p-[3px] text-[13px] font-bold">
            <span className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-white">
              <PlatformLogo platform="x" size="14px" /> X
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1">
              <PlatformLogo platform="linkedin" size="14px" /> LinkedIn
            </span>
          </span>
          <span className="text-[13px] font-bold text-solution-dark">{SCHEDULE.label}</span>
        </div>
        <ul className="m-0 mt-3 flex list-none flex-col p-0">
          {SCHEDULE.posts.map((post) => (
            <li
              key={post.when}
              data-anim="post-row"
              className="flex gap-3 border-b-2 border-dashed border-rule py-3.5"
            >
              <span aria-hidden="true" className="h-9 w-9 shrink-0 rounded-full border-2 border-ink bg-glass-tint" />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div className="flex items-baseline justify-between gap-3">
                  <strong className="text-[14px]">{post.author}</strong>
                  <span className="shrink-0 text-[13px] text-muted">{post.when}</span>
                </div>
                <p className="m-0 text-[14px] leading-[1.45] text-ink-soft">{post.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="m-0 mt-3 flex items-center justify-between gap-4 text-[13px] font-semibold">
          <span className="text-muted">{SCHEDULE.more}</span>
          <span className="text-solution-dark">{SCHEDULE.article}</span>
        </p>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="relative z-[1] mx-auto max-w-[1320px] scroll-mt-6 px-4 pb-0 pt-4 sm:px-6">
      <div data-pipe="turn" className="h-0" />
      <div className="mt-12 pl-10 md:pl-[104px]">
        <h2 className="display-h2 m-0 mb-3 max-w-[900px]">{PROCESS.headline}</h2>
        <p className="m-0 mb-12 max-w-[620px] text-[19px] leading-[1.5] text-ink-soft">{PROCESS.intro}</p>
      </div>

      <StageRow i={0}>
        <div data-reveal className={`${panel} flex flex-col gap-4`}>
          {/* The one ask of the founder; drops in first, then the sources. */}
          <div data-anim="chip" className="rounded-[20px] bg-ink px-5 py-4">
            <p className="m-0 text-[17px] font-bold text-white">{PROCESS.interview.title}</p>
            <p className="m-0 mt-1.5 text-[15px] font-semibold" style={{ color: "var(--raw)" }}>
              {PROCESS.interview.detail}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PROCESS.sources.map((src) => (
              <span
                key={src}
                data-anim="chip"
                className="rounded-full border-2 border-ink bg-raw-pale px-3.5 py-2 text-[14px] font-semibold"
              >
                {src}
              </span>
            ))}
          </div>
        </div>
      </StageRow>

      <StageRow i={1}>
        <ul data-reveal className={`${panel} m-0 flex list-none flex-col gap-3.5`}>
          {PROCESS.storyBible.map((row, idx) => (
            <li
              key={row.item}
              className={`flex items-center justify-between gap-4 ${
                idx < PROCESS.storyBible.length - 1 ? "border-b-2 border-dashed border-rule pb-3" : ""
              }`}
            >
              <span className="flex flex-col gap-0.5">
                <strong className="text-[17px]">{row.item}</strong>
                <span className="text-[14px] text-ink-soft">{row.question}</span>
              </span>
              {row.distilled ? (
                <span className="grid text-right text-[14px] font-bold">
                  <span data-anim="status-final" className="col-start-1 row-start-1 text-solution-dark">
                    Distilled
                  </span>
                  <span
                    data-anim="status-pending"
                    aria-hidden="true"
                    className="invisible col-start-1 row-start-1 text-mid-1-text"
                  >
                    In the condenser
                  </span>
                </span>
              ) : (
                <span className="text-[14px] font-bold text-mid-1-text">In the condenser</span>
              )}
            </li>
          ))}
        </ul>
      </StageRow>

      <StageRow i={2}>
        <div data-reveal className="flex min-w-0 flex-col gap-3.5">
          <p className="m-0 flex items-center justify-between gap-4 rounded-full border-2 border-ink bg-glass px-5 py-3.5 text-[16px]">
            <strong>{PROCESS.approval.label}</strong>
            <span className="flex items-center gap-2 font-bold text-solution-dark">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
                <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {PROCESS.approval.value}
            </span>
          </p>
          <p className="m-0 -rotate-[1.5deg] rounded-[24px_24px_24px_8px] border-2 border-ink bg-raw-pale px-5 py-[18px] text-[15px] leading-[1.6] text-[#4A3A1E]">
            so <s data-anim="strike" className="strike">um, basically</s> the thing nobody tells you about
            enterprise is <s data-anim="strike" className="strike">like, it&apos;s kind of, you know</s> your
            champion is doing your job for you. if they can&apos;t explain you in one sentence you&apos;re dead.
          </p>
          <div
            data-anim="post"
            className="rotate-1 rounded-[24px_24px_8px_24px] border-2 border-ink bg-glass p-5 text-[16px] leading-[1.55] shadow-[0_6px_0_var(--solution)]"
          >
            <strong className="mb-2 block">{PROCESS.afterByline}</strong>
            {PROCESS.afterPost}
          </div>
        </div>
      </StageRow>

      <StageRow i={3}>
        <ScheduleCard />
      </StageRow>
    </section>
  );
}
