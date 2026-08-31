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
              We owned the written layer at Acquisition.com. Leila Hormozi&rsquo;s tweets and
              threads, plus the accessory written platforms across both brands.
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
            Writing is not a parallel function to editing or design. It sits upstream. Editing and
            design refine the idea. Writing defines it. Every ad, carousel, reel, email and script
            begins as written thought.
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
            We wrote the playbook the team writes from, <em>The Art of the Tweet</em>. 75+
            frameworks. Here are the parts that do the most work.
          </p>

          <ArticleH2>Write a premise, not a niche</ArticleH2>
          <p>
            Conventional wisdom says pick a niche. A niche is saturated. A premise is memorable.
          </p>
          <Callout>
            <strong>Niche:</strong> &ldquo;I help entrepreneurs.&rdquo; That&rsquo;s WHO.
            <br />
            <br />
            <strong>Premise:</strong> &ldquo;I show entrepreneurs how to build a brand without
            selling their soul to the algorithm.&rdquo; That&rsquo;s WHAT, HOW and WHY.
          </Callout>
          <p>
            People will ask, &ldquo;what&rsquo;s this person about?&rdquo; If you aren&rsquo;t
            intentional about what you want them to say, you build a brand by default instead of by
            design. James Clear is the Atomic Habits guy. Ryan Holiday is ancient stoicism for
            modern times.
          </p>
          <p>Three checks on a premise:</p>
          <ul>
            <li>
              <strong>Legible.</strong> Grandma can understand it. &ldquo;I optimize human
              performance&rdquo; is weak. &ldquo;I help executives sleep better&rdquo; is strong.
            </li>
            <li>
              <strong>Compelling.</strong> It creates desire. &ldquo;I teach marketing&rdquo; is
              weak. &ldquo;I show how to get customers without ads&rdquo; is strong.
            </li>
            <li>
              <strong>Differentiated.</strong> Only you can claim it. &ldquo;I help people lose
              weight&rdquo; is weak. &ldquo;I help busy dads over 45 lose 30lbs without giving up
              beer&rdquo; is strong.
            </li>
          </ul>
          <p>The goal is to be easy to summarize and hard to compete with.</p>

          <ArticleH2>Write values, not topics</ArticleH2>
          <p>
            The next thing people tell you is to pick your topics. Topics are too broad, and
            they&rsquo;re impersonal. Values are the things that support your premise.
          </p>
          <p>Four questions get them out of someone:</p>
          <ol>
            <li>What&rsquo;s your personal quest?</li>
            <li>What do you believe strongly that most people don&rsquo;t?</li>
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
            Values matter because they&rsquo;re magnets. They attract people who believe the same
            things. They&rsquo;re also repeatable, which makes it easy to say the same thing a
            thousand different ways.
          </p>

          <ArticleH2>Three questions before writing</ArticleH2>
          <p>
            <strong>What am I trying to say?</strong> The best posts express one idea. If you
            confuse, you lose. One idea also lets you tell whether that idea resonated.
          </p>
          <p>
            <strong>Who is this for?</strong> This determines your hook. When you know who
            you&rsquo;re writing to, you can reverse engineer what they want.
          </p>
          <p>
            <strong>How do I make it memorable?</strong> This is rhetoric.
          </p>

          <ArticleH3>Hooks</ArticleH3>
          <p>
            Hooks work because they play to what people already desire. Everyone loves hot takes,
            life hacks and lessons. We keep 50 formulas written down:
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
            Rhetoric is the art of transferring information from one brain to another in the most
            effective way possible. Same idea, better construction:
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

          <ArticleH2>Writing guidelines</ArticleH2>
          <p>Every draft gets checked against these before it goes out:</p>
          <ul>
            <li>Keep everything below a third-grade reading level</li>
            <li>Present voice</li>
            <li>Active, not passive</li>
            <li>Avoid adverbs. Adverbs usually mean lame verbs</li>
            <li>Short sentences. Usually one comma. Two commas means cut the middle or split it</li>
            <li>Positive language. &ldquo;Keep going,&rdquo; not &ldquo;don&rsquo;t stop&rdquo;</li>
            <li>Remove redundant and unnecessary words</li>
            <li>Single-line paragraphs, no title case, emojis sparingly</li>
          </ul>

          <ArticleH3>How writers get better fast</ArticleH3>
          <ol>
            <li>
              <strong>Scroll.</strong> Get on X and read. The best writers are avid readers.
            </li>
            <li>
              <strong>Study.</strong> Why did you stop scrolling?
            </li>
            <li>
              <strong>Save.</strong> Build an inspiration library.
            </li>
            <li>
              <strong>Scribe.</strong> Handcopy on paper to feel the rhythm and structure.
            </li>
            <li>
              <strong>Steal.</strong> Rewrite two ways. Same structure, different topic. Same topic,
              different structure.
            </li>
          </ol>
          <Callout>
            <strong>Original:</strong> Rich people buy time. Poor people buy stuff.
            <br />
            <br />
            <strong>Same structure, different topic:</strong> Winners get better. Losers get bitter.
            <br />
            <br />
            <strong>Same topic, different structure:</strong> If you want to build wealth, buy time.
            If you want to stay poor, buy stuff.
          </Callout>

          <ArticleH2>Voice replication at scale</ArticleH2>
          <p>
            Capturing another person&rsquo;s voice across 100+ posts a month with near-zero
            revisions is a specialized skill that&rsquo;s easy to underestimate. Leila published
            directly from our drafts.
          </p>
          <p>
            That freed 6&ndash;10 hours of her week, which went back into filming, strategy and
            creative direction.
          </p>

          <ArticleH2>TLDR:</ArticleH2>
          <ol>
            <li>Writing sits upstream of editing and design</li>
            <li>Build on a premise, not a niche</li>
            <li>Write values, not topics</li>
            <li>One idea per post</li>
            <li>Check every draft against the guidelines before it goes out</li>
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
