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
            Everyone treats writing like it sits next to editing and design. It sits before them.
          </p>
          <p>
            An editor makes an idea land better. A designer makes it look better. Neither decides
            what the idea is. That happens in a doc, in a sentence, before anyone opens a timeline.
            So if the writing is vague, everything downstream is expensive and vague.
          </p>

          <ArticleH2>What we owned</ArticleH2>
          <ul>
            <li>
              <strong>Leila&rsquo;s X and Threads.</strong> 100 tweets a month in her voice.
            </li>
            <li>
              <strong>Paid ads.</strong> 100 variations a month, plus conducting film sessions.
            </li>
            <li>
              <strong>YouTube.</strong> Concepts and briefs for her channel, and 7+ Community posts
              a week.
            </li>
            <li>
              <strong>Her newsletter launch.</strong> Every launch asset, plus coordination across
              marketing, design, tech and vendors.
            </li>
          </ul>
          <p>
            At that volume you can&rsquo;t rely on taste. Taste has bad days. So we wrote everything
            down in a playbook, <em>The Art of the Tweet</em>, and taught it to the team. 75+
            frameworks. Here&rsquo;s the part that matters.
          </p>

          <ArticleH2>Nobody writes for the small platforms</ArticleH2>
          <p>
            Threads and the YouTube Community tab get whatever already ran on Instagram. Then people
            look at the numbers and decide those platforms don&rsquo;t work.
          </p>
          <p>
            They work. Nobody writes for them. A Community post goes to people who already
            subscribed, which makes it a warmer audience than any feed you can buy into. Threads
            pays you for posting more, which X stopped doing a while ago.
          </p>
          <p>
            Neither one needs a camera, an editor, or a budget. The cheapest platforms to write for
            are the ones nobody staffs.
          </p>

          <ArticleH2>Write a premise, not a niche</ArticleH2>
          <p>
            Everyone says pick a niche. A niche only answers who you help, and it puts you in a room
            with everyone else who picked it. A premise answers what, how and why.
          </p>
          <Callout>
            <strong>Niche:</strong> &ldquo;I help entrepreneurs.&rdquo;
            <br />
            <br />
            <strong>Premise:</strong> &ldquo;I show entrepreneurs how to build a brand without
            selling their soul to the algorithm.&rdquo;
          </Callout>
          <p>
            If someone can&rsquo;t explain what you&rsquo;re about in one sentence after meeting
            you, you don&rsquo;t have one yet. James Clear is the Atomic Habits guy. Ryan Holiday is
            ancient stoicism for modern times. Pick your sentence or the internet picks it for you.
          </p>
          <p>We check a premise three ways:</p>
          <ul>
            <li>
              <strong>Legible.</strong> Your grandmother gets it. &ldquo;I optimize human
              performance&rdquo; fails. &ldquo;I help executives sleep better&rdquo; passes.
            </li>
            <li>
              <strong>Compelling.</strong> Someone wants it. &ldquo;I teach marketing&rdquo; fails.
              &ldquo;I show how to get customers without ads&rdquo; passes.
            </li>
            <li>
              <strong>Differentiated.</strong> Only you can say it. &ldquo;I help people lose
              weight&rdquo; fails. &ldquo;I help busy dads over 45 lose 30lbs without giving up
              beer&rdquo; passes.
            </li>
          </ul>
          <p>Easy to summarize. Hard to compete with.</p>

          <ArticleH2>Write values, not topics</ArticleH2>
          <p>
            Topics run out. You cover a topic and then you&rsquo;ve covered it. Values don&rsquo;t
            run out, because a value is a belief and you can argue a belief from a hundred angles
            without repeating yourself.
          </p>
          <p>Four questions get them out of someone:</p>
          <ol>
            <li>What&rsquo;s your personal quest?</li>
            <li>What do you believe that most people don&rsquo;t?</li>
            <li>What pisses you off?</li>
            <li>What hill are you willing to die on?</li>
          </ol>
          <p>A few of Leila&rsquo;s:</p>
          <ul>
            <li>Follow the plan, not your mood</li>
            <li>Do hard things</li>
            <li>Fall in love with boring</li>
            <li>Choose your friends and partner wisely</li>
            <li>Lead yourself first</li>
          </ul>
          <p>
            Once those are set, nobody stares at a blank page. Every post is a new way into a belief
            her audience already follows her for.
          </p>

          <ArticleH2>Three questions before writing</ArticleH2>
          <p>
            <strong>What am I trying to say?</strong> One idea per post. Two ideas and you can&rsquo;t
            tell which one people responded to.
          </p>
          <p>
            <strong>Who is this for?</strong> That decides the hook, because you can only write to
            someone&rsquo;s desire if you know whose desire it is.
          </p>
          <p>
            <strong>How do I make it stick?</strong> That&rsquo;s rhetoric.
          </p>

          <ArticleH3>Hooks</ArticleH3>
          <p>
            A hook works when it attaches to something people already want. A hot take. A shortcut.
            A lesson someone else paid for. We keep 50 formulas written down:
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
            Same idea, different construction. The second one lands and the first one gets scrolled
            past.
          </p>
          <Callout>
            &ldquo;Reading old books is important for your creativity&rdquo; becomes &ldquo;If you
            want new ideas, read old books.&rdquo;
            <br />
            <br />
            &ldquo;Trouble sleeping is often a lack of purpose&rdquo; becomes &ldquo;You don&rsquo;t
            need more sleep, you need a better reason to get out of bed.&rdquo;
            <br />
            <br />
            &ldquo;Fear is dangerous. Anger is destructive. Hate corrupts you&rdquo; becomes
            &ldquo;Fear leads to anger. Anger leads to hate. Hate leads to suffering.&rdquo;
          </Callout>

          <ArticleH2>Make quality checkable</ArticleH2>
          <p>
            At 100+ posts a month you can&rsquo;t review by feel, because feel is slow and nobody
            agrees. So the playbook is a checklist anyone on the team can apply:
          </p>
          <ul>
            <li>Third-grade reading level</li>
            <li>Active voice, present tense</li>
            <li>No adverbs. An adverb usually means a weak verb</li>
            <li>One comma a sentence. Two means cut the middle or split it</li>
            <li>&ldquo;Keep going,&rdquo; not &ldquo;don&rsquo;t stop&rdquo;</li>
            <li>Cut any word that doesn&rsquo;t change the meaning</li>
            <li>Single-line paragraphs, no title case, emojis almost never</li>
          </ul>

          <ArticleH3>How writers get better fast</ArticleH3>
          <ol>
            <li>
              <strong>Scroll.</strong> Read constantly. The best writers read more than they write.
            </li>
            <li>
              <strong>Study.</strong> Ask why you stopped scrolling.
            </li>
            <li>
              <strong>Save.</strong> Keep a file of the ones that stopped you.
            </li>
            <li>
              <strong>Scribe.</strong> Copy them by hand to feel the rhythm.
            </li>
            <li>
              <strong>Steal.</strong> Rewrite twice. Same structure, new topic. Then same topic, new
              structure.
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

          <ArticleH2>Write it so they never edit it</ArticleH2>
          <p>
            Sounding close to someone isn&rsquo;t the job. If they have to fix it, you&rsquo;ve made
            work for the person you were hired to free up.
          </p>
          <p>
            Leila posted our drafts as written. That&rsquo;s what gave back 6&ndash;10 hours of her
            week, and those hours went into filming and strategy instead of writing tweets.
          </p>

          <ArticleH2>Own the boring decisions too</ArticleH2>
          <p>
            We picked the newsletter platform, wrote the launch plan, and moved scheduling from
            Hootsuite to Buffer, which cut errors and cost at the same time.
          </p>
          <p>
            That&rsquo;s not writing. But it decides whether the writing goes out on time, and
            somebody owns it or nobody does.
          </p>

          <ArticleH2>TLDR:</ArticleH2>
          <ol>
            <li>Writing comes before editing and design, not next to them</li>
            <li>Write for the platforms nobody staffs</li>
            <li>Build on a premise, not a niche</li>
            <li>Write values, not topics</li>
            <li>Write it so well they publish it untouched</li>
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
