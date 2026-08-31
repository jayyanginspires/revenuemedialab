import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArticleH2,
  ArticleH3,
  Callout,
  CaseStudyArticle,
  CaseStudyClosing,
  CaseStudyHero,
} from "@/components/CaseStudyLayout";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `How we built the written engine at Acquisition.com — ${SITE.name}`,
  description:
    "Owning the written layer at Acquisition.com: Leila Hormozi's tweets and threads, the accessory written platforms across both brands, and the playbook that made high volume repeatable.",
};

export default function LeilaHormoziCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <CaseStudyHero
          headline="How We Built the Written Engine at Acquisition.com"
          dek={
            <>
              We owned the written layer at Acquisition.com &mdash; Leila Hormozi&rsquo;s tweets and
              threads, and the accessory written platforms across both brands.
            </>
          }
          stats={[
            { value: "100/mo", label: "Tweets For Leila" },
            { value: "100/mo", label: "Ad Variations" },
            { value: "7+/wk", label: "Community Posts" },
            { value: "75+", label: "Frameworks Written" },
          ]}
          image={{
            src: "/images/leila-hormozi.jpg",
            alt: "Leila Hormozi.",
            caption: "Leila Hormozi, co-founder of Acquisition.com.",
          }}
        />

        <CaseStudyArticle>
          <p>
            Most media teams treat writing as a production task sitting alongside editing and
            design. It isn&rsquo;t. It sits upstream of both.
          </p>
          <p>
            Editing and design refine an idea. Writing decides what the idea is. Every ad, carousel,
            reel, email and script starts as a written thought, which means the written layer either
            makes the rest of the machine work or quietly caps it.
          </p>

          <ArticleH2>What we owned</ArticleH2>
          <ul>
            <li>
              <strong>Leila&rsquo;s X and Threads.</strong> 100 tweets a month, written in her voice.
            </li>
            <li>
              <strong>Paid ads.</strong> 100 ad variations a month, plus conducting film sessions on
              set.
            </li>
            <li>
              <strong>YouTube Community.</strong> 7+ posts a week on Leila&rsquo;s channel.
            </li>
            <li>
              <strong>YouTube briefs.</strong> Concepts and briefs for Leila&rsquo;s channel.
            </li>
            <li>
              <strong>Leila&rsquo;s newsletter launch.</strong> Copy leadership on every launch
              asset, plus coordination across marketing, design, tech and outside vendors.
            </li>
          </ul>
          <p>
            Volume like that only survives on a system. So we wrote one down, taught it, and made it
            the standard: <em>The Art of the Tweet</em>, 75+ frameworks. Here is what&rsquo;s in it.
          </p>

          <ArticleH2>The platforms everyone writes off</ArticleH2>
          <p>
            Threads and a YouTube Community tab get treated as places to cross-post whatever already
            ran somewhere else. That&rsquo;s why they underperform for most brands: nobody writes
            for them, so nobody reads them.
          </p>
          <p>
            We wrote them as their own surfaces, and they returned reach far out of proportion to
            the effort. A Community post reaches subscribers who already opted into the channel,
            which is a warmer audience than any feed, and Threads rewards volume in a way X
            doesn&rsquo;t.
          </p>
          <p>
            Neither needs a film crew, an editor or a budget. That&rsquo;s the whole argument for
            the written layer in one line: the cheapest surfaces to produce for are the ones most
            teams never staff.
          </p>

          <ArticleH2>Write a premise, not a niche</ArticleH2>
          <p>
            The standard advice is to pick a niche. But a niche is saturated, and it only answers
            who. A premise answers what, how and why, and that&rsquo;s what people repeat when
            they describe you.
          </p>
          <Callout>
            <strong>Niche:</strong> &ldquo;I help entrepreneurs.&rdquo;
            <br />
            <br />
            <strong>Premise:</strong> &ldquo;I show entrepreneurs how to build a brand without
            selling their soul to the algorithm.&rdquo;
          </Callout>
          <p>
            The test is whether someone can explain what you&rsquo;re about in one sentence after
            meeting you. James Clear is the Atomic Habits guy. Ryan Holiday is ancient stoicism for
            modern times. If you&rsquo;re not deliberate about that sentence, you get one by default
            instead of by design.
          </p>
          <p>We run every premise through three checks:</p>
          <ul>
            <li>
              <strong>Legible.</strong> Your grandmother understands it. &ldquo;I optimize human
              performance&rdquo; fails. &ldquo;I help executives sleep better&rdquo; passes.
            </li>
            <li>
              <strong>Compelling.</strong> It creates desire. &ldquo;I teach marketing&rdquo; fails.
              &ldquo;I show how to get customers without ads&rdquo; passes.
            </li>
            <li>
              <strong>Differentiated.</strong> Only you can claim it. &ldquo;I help people lose
              weight&rdquo; fails. &ldquo;I help busy dads over 45 lose 30lbs without giving up
              beer&rdquo; passes.
            </li>
          </ul>
          <p>The goal is to be easy to summarize and hard to compete with.</p>

          <ArticleH2>Write values, not topics</ArticleH2>
          <p>
            Topics are broad and impersonal. Values are magnets: they attract people who believe the
            same things, and they&rsquo;re infinitely repeatable, which is what lets you say the
            same thing a thousand different ways without repeating yourself.
          </p>
          <p>Four questions surface them:</p>
          <ol>
            <li>What&rsquo;s your personal quest?</li>
            <li>What do you believe strongly that most people don&rsquo;t?</li>
            <li>What pisses you off?</li>
            <li>What hill are you willing to die on?</li>
          </ol>
          <p>A few of Leila&rsquo;s:</p>
          <ul>
            <li>Follow the plan, not your mood — discipline beats motivation</li>
            <li>Do hard things — that&rsquo;s where growth lives</li>
            <li>Fall in love with boring — consistency compounds</li>
            <li>Choose your friends and partner wisely — environment is destiny</li>
            <li>Lead yourself first</li>
          </ul>
          <p>
            Once the values are fixed, ideation stops being a blank page. Every post is a new angle
            on a belief the audience already follows her for.
          </p>

          <ArticleH2>Three questions per post</ArticleH2>
          <p>
            <strong>What am I trying to say?</strong> The best posts carry one idea. Two ideas
            confuse the reader and make it impossible to tell which one resonated.
          </p>
          <p>
            <strong>Who is this for?</strong> This decides the hook. Knowing the reader lets you
            reverse-engineer what they want.
          </p>
          <p>
            <strong>How do I make it memorable?</strong> This is where rhetoric comes in.
          </p>

          <ArticleH3>Hooks</ArticleH3>
          <p>
            Hooks work because they attach to something people already want — a hot take, a
            shortcut, a lesson. We keep 50 formulas documented. A handful:
          </p>
          <Callout>
            <strong>Harsh truth:</strong> You&rsquo;re gonna die. People will move on in weeks, not
            years. Do what you want.
            <br />
            <br />
            <strong>A lesson I wish I learned earlier:</strong> No one is coming to save you. If you
            want to change your life, it&rsquo;s on you.
            <br />
            <br />
            <strong>Reminder:</strong> Your 9&ndash;5 isn&rsquo;t killing your dreams. Wasting your
            5&ndash;9 is.
          </Callout>

          <ArticleH3>Rhetoric</ArticleH3>
          <p>
            Rhetoric is how you move an idea from one brain to another with the least loss. Same
            idea, different construction, and the second one lands:
          </p>
          <Callout>
            <strong>Juxtaposition.</strong> &ldquo;Reading old books is important for your
            creativity&rdquo; becomes &ldquo;If you want new ideas, read old books.&rdquo;
            <br />
            <br />
            <strong>Contrast.</strong> &ldquo;Trouble sleeping is often due to a lack of
            purpose&rdquo; becomes &ldquo;You don&rsquo;t need more sleep, you need a better reason
            to get out of bed.&rdquo;
            <br />
            <br />
            <strong>Anadiplosis.</strong> &ldquo;Fear is dangerous. Anger is destructive. Hate
            corrupts you&rdquo; becomes &ldquo;Fear leads to anger. Anger leads to hate. Hate leads
            to suffering.&rdquo;
          </Callout>

          <ArticleH2>The rules that survive volume</ArticleH2>
          <p>
            At 100+ posts a month, quality can&rsquo;t depend on taste. It has to be checkable. So
            the playbook is a checklist:
          </p>
          <ul>
            <li>Third-grade reading level, always</li>
            <li>Active voice, present tense</li>
            <li>No adverbs — an adverb usually means a weak verb</li>
            <li>One comma per sentence; two means cut the middle or split it</li>
            <li>Positive framing — &ldquo;keep going&rdquo; over &ldquo;don&rsquo;t stop&rdquo;</li>
            <li>Cut every word that doesn&rsquo;t change the meaning</li>
            <li>Single-line paragraphs, no title case, emojis sparingly if at all</li>
          </ul>

          <ArticleH2>How writers get better fast</ArticleH2>
          <p>The training loop we teach is five steps:</p>
          <ol>
            <li>
              <strong>Scroll.</strong> Read constantly. The best writers are the heaviest readers.
            </li>
            <li>
              <strong>Study.</strong> Ask why you stopped scrolling.
            </li>
            <li>
              <strong>Save.</strong> Build an inspiration library.
            </li>
            <li>
              <strong>Scribe.</strong> Hand-copy the best ones to feel the rhythm.
            </li>
            <li>
              <strong>Steal.</strong> Rewrite twice — same structure, different topic; then same
              topic, different structure.
            </li>
          </ol>
          <Callout>
            <strong>Original:</strong> Rich people buy time. Poor people buy stuff.
            <br />
            <br />
            <strong>Same structure, new topic:</strong> Winners get better. Losers get bitter.
            <br />
            <br />
            <strong>Same topic, new structure:</strong> If you want to build wealth, buy time. If you
            want to stay poor, buy stuff.
          </Callout>

          <ArticleH2>Replicating a voice at scale</ArticleH2>
          <p>
            Writing in someone else&rsquo;s voice across 100+ posts a month, with near-zero
            revisions, is narrower than it looks. The bar isn&rsquo;t sounding close. The bar is
            publishing straight from the draft.
          </p>
          <p>
            That&rsquo;s the bar we hit with Leila. The moment a principal has to edit, the leverage
            disappears and you&rsquo;ve made more work for the person you were meant to free up.
          </p>
          <Callout>
            Owning the written pipeline gave back 6&ndash;10 leadership hours a week, redirected
            into filming, strategy and creative direction instead of drafting posts.
          </Callout>

          <ArticleH2>Owning the boring decisions</ArticleH2>
          <p>
            Owning a function means owning the infrastructure under it. We wrote the memos behind
            which newsletter platform to build on, the launch strategy and rollout plan for
            Leila&rsquo;s newsletter, and the move from Hootsuite to Buffer for scheduling, which
            cut manual errors and monthly cost at once.
          </p>
          <p>None of that is writing. All of it decides whether the writing ships on time.</p>

          <ArticleH2>TLDR:</ArticleH2>
          <ol>
            <li>Treat writing as upstream of every other format</li>
            <li>Build on a premise, not a niche</li>
            <li>Write values, not topics</li>
            <li>Make quality checkable so it survives volume</li>
            <li>Hit the bar where drafts publish without rewrites</li>
          </ol>
        </CaseStudyArticle>

        <div className="pb-20">
          <CaseStudyClosing prompt="If you'd like us to build the written engine behind your brand, you can book a call here." />
        </div>
      </main>
      <Footer />
    </>
  );
}
