import type { Metadata } from "next";
import { CaseStudyPage, Figure, Section, Step, Table } from "@/components/apparatus/CaseStudyPage";

const img = (name: string) => `/case-studies/advisory-ceo/${name}.jpg`;

export const metadata: Metadata = {
  title: "How we wrote tweets for a busy CEO without ever interviewing them | Revenue Media Lab",
  description:
    "About a year as a CEO's copywriter on X: 446 tweets live, nearly 26 million impressions and 953,701 likes, without one interview.",
};

const TOP_TWEETS: [string, string, string][] = [
  ["One of the most underrated skills you can learn is the ability to ignore your mood and stick with the plan.", "1,247,616", "46,001"],
  ["The quickest way to become more confident is to become more competent.", "733,877", "28,295"],
  ["5 reasons why you should go for it: You're gonna die. / Fuck your mood. Follow the plan. / The price of authenticity is being disliked. / Your new life will cost you your old one. / The only way out of uncertainty is through it.", "614,742", "30,231"],
  ["I don't care how talented you are or how much potential you may have, if you can't consistently do things when you don't feel like doing them, you'll never build anything worth having.", "565,413", "14,817"],
  ["The fastest way to become appropriately confident is to become dangerously competent.", "553,470", "26,501"],
  ["The price of success is hate. The price of authenticity is being disliked. The price of improving yourself is loneliness.", "430,345", "12,456"],
  ["A sign of an intelligent person is their ability to learn from anyone, even those they dislike.", "386,734", "15,090"],
  ["Sooner or later you realize everything comes down to your ability to stick with the plan despite whatever emotions you may feel.", "361,229", "14,656"],
  ["The fastest way to spot a successful person: watch how quickly they make decisions, respond to messages, and turn ideas into action. Speed is king.", "326,541", "11,211"],
  ["You become an adult when you realize everything eventually comes down to your ability to stick with what you said you'd do despite whatever emotions you may feel.", "287,710", "17,552"],
];

const HOOKS = [
  "Harsh truth: / Brutal truth: / Hard truth:",
  "A lesson I wish I learned earlier:",
  "A lesson that took me too long to learn:",
  "Hot take: / A hill I'll die on:",
  "Life hack: / Life cheat code: / Life pro tip:",
  "A major cheat code in life:",
  "Trust me: / Trust me on this:",
  "I'm [age]. Trust me on this:",
  "Reminder: / Friendly reminder:",
  "A pattern I've noticed: / Observation:",
  "Underrated life advice:",
  "Reminder to self: / Note to self:",
  "The older I get, the more I realize",
  "One thing I've learned:",
  "After [# years of ___], here's what I know:",
  "The smartest people I know have this in common:",
  "A pattern I've noticed in the most successful people I know:",
  "A subtle superpower:",
  "Something that took me way too long to realize:",
  "Underrated sign of maturity:",
  "One of the quickest ways to [negative outcome]:",
  "No one tells you this when you're young:",
  "A lost skill: / Underrated skill:",
  "A truth you need to embrace asap:",
  "Never forget this:",
  "Advice for my younger self:",
  "One of the most overlooked skills:",
  "Truth I learned later in life:",
  "A mentor once told me:",
  "How to win: / How to get ahead:",
  "How to beat 99% of people:",
  "Question of the day:",
  "[person] said something that hit me:",
  "Underrated truth: / I'm convinced that...",
  "I can't stop thinking about this...",
  "I don't know who needs to hear this but...",
  "Everyone needs to hear this...",
  "The future belongs to those who...",
];

export default function AdvisoryCeoCaseStudy() {
  return (
    <CaseStudyPage
      id="case-ceo"
      title="How we wrote tweets for a busy CEO without ever interviewing them"
      dek={
        <>
          <p className="m-0">
            <strong className="text-ink">
              For about a year, we were the copywriter for a busy CEO&apos;s X account. They approved 469 of our tweets,
              and 446 went live on their account.
            </strong>{" "}
            Those posts did nearly 26 million impressions and 953,701 likes without us interviewing them once.
          </p>
          <p className="m-0 mt-3 text-[15px] italic text-muted">
            We pulled lifetime numbers from the X API and counted each tweet once, at its first posting.
          </p>
        </>
      }
      stats={[
        { value: "446 of 469", label: "approved tweets found live on X" },
        { value: "25.95M", label: "impressions (nearly 26 million)" },
        { value: "953,701", label: "likes" },
        { value: "35.8K", label: "median impressions per post" },
      ]}
      cta={{
        headline: "Want your founder's ideas on X without the interviews?",
        body: "We find what your founder has already said in podcasts, livestreams and old posts, put every tweet next to its source, and they approve in one doc.",
      }}
    >
      <Section title="Results">
        <p>The median post did about 36,000 impressions. 49 of them cleared 100,000, and the biggest one did 1.2 million:</p>
        <Figure
          src={img("top-tweet")}
          width={1166}
          height={413}
          alt="Tweet: One of the most underrated skills you can learn is the ability to ignore your mood and stick with the plan. 1.2M views, 46K likes."
        />
        <p>The top 10 most-viewed approved tweets we wrote:</p>
        <Table head={["#", "Tweet", "Impressions", "Likes"]} rows={TOP_TWEETS.map(([t, i, l], k) => [k + 1, t, i, l])} />
      </Section>

      <Section title="Where we started">
        <p>
          They were the CEO of a big company. Which means they were busy, and there was no time for weekly interviews.
        </p>
        <p>
          So we never talked to them about their tweets. Our job was to learn their voice well enough that they&apos;d
          read a tweet and think, &quot;yep, I&apos;d say that.&quot;
        </p>
      </Section>

      <Section title="How we thought through the solution">
        <p>
          Tweets are the most concise way to express an idea. You&apos;re compressing an idea into 280 characters, and
          you can&apos;t compress an idea you don&apos;t have.
        </p>
        <p>So with a busy founder, you find what they&apos;ve already said and compress it.</p>
        <p>
          Their ideas were everywhere: podcast episodes, YouTube videos, internal meetings, workshops, and messages to
          their team. So I wouldn&apos;t say we wrote their tweets completely on their behalf. It was more like remixing
          things we knew they&apos;d said and valued before.
        </p>
        <p>
          The best way to write high-performing new tweets is to look at high-performing old ones. Their old tweets
          showed me what their audience already liked. Their values told me what they&apos;d say again and again.
        </p>
        <p>
          Then there&apos;s trust. They needed to read a tweet and know it was theirs, in a few seconds, without asking
          me where it came from.
        </p>
        <p>So we put every tweet next to the words it came from.</p>
        <Table
          head={["Sources", "Mine", "Remix", "Ship in the doc"]}
          rows={[
            [
              "Their top tweets (sorted by likes, tagged by theme), podcast episodes and livestreams, workshops and internal meetings, handbooks, docs and team messages",
              "Pull the line, the value, the proven structure",
              "Same topic, new format. New topic, same format. Or combine 2 winners",
              `Put the source line next to the new tweet, "so you know it is your words/voice"`,
            ],
          ]}
        />
      </Section>

      <Section title="Our process">
        <Step title="1. Listed every place they already talk">
          <p>
            We pulled from podcast episodes, a YouTube video, a media team feedback meeting, an internal workshop, and a
            message they&apos;d sent their team.
          </p>
          <p>
            We labeled each source, like &quot;old proven tweets,&quot; &quot;affiliate workshop quote,&quot; &quot;idea
            from sales handbook&quot; or &quot;from livestream.&quot;
          </p>
        </Step>

        <Step title="2. Studied their top tweets">
          <p>
            We made a big list of their top 20 tweets of all time. Then we built a sheet of their top 499, sorted by
            likes and tagged by theme.
          </p>
          <p>Why both? Sorting by likes shows you what worked. Tagging by theme shows you why.</p>
          <p>
            They had already posted &quot;The price of success is hate.&quot; and &quot;The price of authenticity is
            being disliked.&quot; as one-liners, and both had done well. In our first batch, we stacked them and added a
            third line:
          </p>
          <Figure
            src={img("stacked-tweet")}
            width={1166}
            height={413}
            alt="Tweet: The price of success is hate. The price of authenticity is being disliked. The price of improving yourself is loneliness. 430.3K views, 12K likes."
            caption="Remixed from 2 of their older tweets."
          />
          <p>
            Our breakdown of 2,116 posts found short text (under 280 characters) had the highest average likes and
            reposts of any format, and long single posts beat threads. Their 10 most-viewed approved tweets were all
            under 280 characters, with no link.
          </p>
          <p>We put the phrases they repeated into a words bank, so the next draft used their words instead of mine.</p>
        </Step>

        <Step title="3. Figured out their core values">
          <p>Values are magnets. Your values attract people who believe in the same things.</p>
          <p>
            On top of that, they&apos;re repeatable. They make it easy to say the same idea in 1,000 different ways. If
            you look at an account&apos;s best posts, they&apos;re usually 5 or 6 values said over and over again.
          </p>
          <p>To find them, we answered 4 questions from what they&apos;d said on their podcast, in their livestreams, and in their old tweets:</p>
          <ul>
            <li>What&apos;s their personal quest?</li>
            <li>What do they believe strongly that most people don&apos;t?</li>
            <li>What pisses them off?</li>
            <li>What hill are they willing to (metaphorically) die on?</li>
          </ul>
          <p>Some of the values we identified:</p>
          <ul>
            <li>F*ck your mood, follow the plan</li>
            <li>Do hard things</li>
            <li>Fall in love with boring</li>
            <li>Choose your friends and partner wisely</li>
            <li>Lead yourself first</li>
          </ul>
          <p>
            They&apos;d been posting &quot;F*ck your mood, follow the plan&quot; for years, so we kept finding new ways to
            say it. By my count, at least 17 of their tweets that went live were some version of it, and together they
            did about 3.7 million impressions.
          </p>
          <p>
            One of them, &quot;One of the most underrated skills you can learn is the ability to ignore your mood and
            stick with the plan,&quot; did 1.2 million impressions on its own.
          </p>
        </Step>

        <Step title="4. Used a remixing checklist">
          <p>The most quotable people don&apos;t say new things. They say obvious things in non-obvious ways.</p>
          <p>There are 2 main ways to remix:</p>
          <ul>
            <li>Same structure, different topic</li>
            <li>Same topic, different structure</li>
          </ul>
          <p>For example, if we said, &quot;Rich people buy time. Poor people buy stuff.&quot;</p>
          <p>Same structure, different topic: &quot;Winners get better. Losers get bitter.&quot;</p>
          <p>
            Same topic, different structure: &quot;If you want to build wealth, buy time. If you want to stay poor, buy
            stuff.&quot;
          </p>
          <p>
            Batch 1 had &quot;The quickest way to become more confident is to become more competent.&quot; In batch 3, we
            kept the structure and changed the words:
          </p>
          <Figure
            src={img("original-tweet")}
            width={1166}
            height={408}
            alt="Tweet: The quickest way to become more confident is to become more competent. 733.8K views, 28K likes."
            caption="The original. 733.8K views, 28K likes."
          />
          <Figure
            src={img("remix-tweet")}
            width={1166}
            height={408}
            alt="Tweet: The fastest way to become appropriately confident is to become dangerously competent. 553.4K views, 26K likes."
            caption="The remix. 553.4K views, 26K likes."
          />
          <p>Other high-performing templates we used:</p>
          <ul>
            <li>If you want X, do Y</li>
            <li>You don&apos;t need X, you need Y</li>
            <li>X is overrated. Y is underrated</li>
            <li>The older I get, the more I...</li>
            <li>The fastest way to __ is to ___</li>
            <li>Lack of X has killed more dreams than Y</li>
            <li>Life improves dramatically when you ___</li>
          </ul>
          <p>Pro tip: if you want to write mega bangers, take 2 bangers and combine them.</p>
          <Figure
            src={img("threads-combine")}
            width={1175}
            height={1441}
            alt="A semi-outlier post about who you marry (1.9K likes) and a previous top Threads hook, I'm 32. Trust me on this (10.1K likes), combined into their best performing Threads post ever (25.3K likes)."
          />
        </Step>

        <Step title="5. Put the source next to every tweet">
          <p>
            Starting with batch 5, we put every one of their tweets right next to its source, &quot;so you know it is
            your words/voice,&quot; as the doc put it.
          </p>
          <p>
            Why does this matter? A tweet with no source makes them ask, &quot;Did I say this?&quot; A tweet next to their
            own words answers that before they ask. So their few minutes go to approving.
          </p>
          <Table
            head={[`Source ("your words/voice")`, "New tweet", "Founder mark"]}
            rows={[
              [`Old proven tweet: "Rich people buy time. Poor people buy stuff."`, "If you want to build wealth, buy time. If you want to stay poor, buy stuff.", "Approved (bold), scheduled (crossed out), green from batch 6"],
              ["Old proven tweet, same structure, new topic", "Winners get better. Losers get bitter.", "Approved (bold), waiting to schedule"],
              ["Livestream: a point about consistency [quote from the livestream]", "[Tweet that restates the point] Needs one specific example", "Yellow: tweak"],
              ["None. Copywriter idea.", "Success takes hard work.", "Red: generic and unclear"],
            ]}
          />
          <p className="text-[15px] italic text-muted">
            Example rows from the batch doc layout. We put the source on the left and the new tweet on the right.
          </p>
        </Step>

        <Step title="6. Added specific details to generic tweets">
          <p>When a tweet is generic, you have 2 options:</p>
          <ul>
            <li>
              <strong>Chunk up:</strong> go broader, to the bigger principle.
            </li>
            <li>
              <strong>Chunk down:</strong> add details the reader can picture.
            </li>
          </ul>
          <p>We chunked down more, because founders approve specific tweets.</p>
          <p>
            &quot;Move fast&quot; is vague. &quot;The fastest way to spot a successful person: watch how quickly they make
            decisions, respond to messages, and turn ideas into action&quot; gives the reader 3 actions they can picture
            someone doing.
          </p>
          <p>For every vague word, we ask ourselves, &quot;what the hell do we mean?&quot;</p>
          <Table
            head={["Fix", "Before", "After"]}
            rows={[
              ["Too concise to land", "You don't need accountability. You need integrity.", "Most people don't need more accountability, they need more integrity. Accountability = doing the right thing because someone else is watching. Integrity = doing the right thing because you are watching."],
              ["Motivational poster", "Do one more when it hurts. That's the rep that counts.", "In the gym, the last rep hurts the most and matters the most. In business, the hardest conversation hurts the most and pays the most."],
              ["Too many undefined words", "Small margins build massive gaps.", "The older I get, the more I realize everything is details. Calling leads within 60 seconds vs. 60 minutes. One extra follow-up vs. stopping at three. Testing 10 headlines vs. settling for the first one."],
            ]}
          />
          <p>Before anything went in a batch, we ran it through a short checklist:</p>
          <ul>
            <li>What&apos;s the one idea?</li>
            <li>Who is it for?</li>
            <li>Could we say it in fewer words? Simpler words?</li>
            <li>Can we use a more specific number or timeframe?</li>
            <li>Does line 1 make them read line 2?</li>
            <li>Could any guru have written it? If so, tie it to the founder&apos;s method or mistake.</li>
          </ul>
        </Step>

        <Step title="7. Used psychology and rhetorical devices">
          <p>
            One of my favorite ways to make a tweet perform better is &quot;Aspirational Identity Framing.&quot; This is
            when you describe a behavior through the lens of a group people want to belong to:
          </p>
          <ul>
            <li>Describe a desirable identity (successful, high performer, disciplined, rich).</li>
            <li>List behaviors that signal that identity.</li>
            <li>Readers compare themselves to that standard.</li>
            <li>If they aspire to that identity, they lean in and engage.</li>
          </ul>
          <p>So instead of saying &quot;Move fast and get things done quickly,&quot; we wrote this:</p>
          <Figure
            src={img("speed-tweet")}
            width={1175}
            height={566}
            alt="Tweet: The fastest way to spot a successful person: watch how quickly they make decisions, respond to messages, and turn ideas into action. Speed is king. First post 11K likes, 326K views."
          />
          <p>
            Rhetorical devices are techniques writers use to persuade, get an emotional reaction, or make a message more
            memorable.
          </p>
          <p>
            One example is antithetical parallelism. You repeat a sentence structure (&quot;Lack of X has killed more
            dreams than lack of Y&quot;), which creates rhythm. Then you contrast 2 opposing ideas inside it
            (&quot;focus&quot; vs. &quot;talent&quot;) to show which one matters.
          </p>
          <p>
            So instead of &quot;Focus is more important than talent,&quot; you write &quot;Lack of focus has killed more
            dreams than lack of talent.&quot; That one went live on their account:
          </p>
          <Figure
            src={img("focus-tweet")}
            width={1166}
            height={358}
            alt="Tweet: Lack of focus has killed more dreams than lack of talent. 252.2K views, 10K likes."
          />
          <p>The other devices we used, with examples from my breakdown:</p>
          <Table
            head={["Device", "Instead of", "Write"]}
            rows={[
              ["Juxtaposition", "Reading old books is important for your creativity.", "If you want new ideas, read old books."],
              ["Contrast", "When you have trouble sleeping, it's often due to your lack of purpose.", "You don't need more sleep, you need a better reason to get out of bed."],
              ["Before/After", "Fear is a sign to lean in.", "I used to be terrified of putting myself out there. But every great thing in my life has been a result of embracing discomfort and doing it anyway. Fear is a sign to lean in."],
              ["Repetition", "We must act quickly, with determination and unity.", "We must act now. We must act decisively. We must act together."],
              ["Alliteration", "Fake friends lie to you.", "Fake friends make false promises."],
              ["Parallelism", "They like reading, to write, and skiing.", "They like reading, writing, and skiing."],
              ["Metaphor/Simile", "Overthinking is bad. You need to take real action.", "Trying to think your way out of overthinking is like trying to snort your way out of a crack addiction."],
              ["Antithesis", "Want to stand out? Get started.", "The quickest way to get ahead is to get started."],
              ["Anadiplosis", "Fear is dangerous. Anger is destructive. Hate corrupts you.", "Fear leads to anger. Anger leads to hate. Hate leads to suffering."],
            ]}
          />
          <p>
            One rule on contrast: &quot;You don&apos;t blah, you blah&quot; with nothing underneath reads like AI. We only
            used it when the tweet still made sense.
          </p>
        </Step>

        <Step title="8. Used proven hooks and wrote 3 first lines for every tweet">
          <p>On X, the first line&apos;s only job is to get the second line read.</p>
          <p>
            Short text posts work best: 1 to 4 lines, one idea, no link. Put 2 ideas in one tweet and the reader gets
            confused (and you can&apos;t tell which one landed).
          </p>
          <p>There are proven hook formulas that give tweets some flavor. These are the ones from my breakdown:</p>
          <ul className="grid gap-x-6 md:grid-cols-2">
            {HOOKS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p>For every tweet, we wrote 3 options and checked each one 4 ways:</p>
          <ul>
            <li>
              <strong>Benefit:</strong> why should they care?
            </li>
            <li>
              <strong>Relevance:</strong> who is it for?
            </li>
            <li>
              <strong>Credibility:</strong> why listen to this founder?
            </li>
            <li>
              <strong>Perceived effort:</strong> how fast and easy does it feel to read?
            </li>
          </ul>
          <p>
            Then I ran the Name Test: cover the founder&apos;s name and photo. Could someone tell it was them? If not,
            it&apos;s too generic.
          </p>
          <p>The hook formulas are great to start with. The goal is a hook that passes the Name Test without one.</p>
          <p>Formatting rules we held every tweet to:</p>
          <ul>
            <li>Use single-line paragraphs. Start short, then go longer once you have their attention.</li>
            <li>End on the strongest line, and don&apos;t explain the punchline.</li>
            <li>Use sentence case or all lowercase (if that&apos;s the founder&apos;s style). Don&apos;t Capitalize Every Word.</li>
            <li>Don&apos;t use em dashes. Readers now see them as a sign of AI.</li>
            <li>Put links in the reply. In our breakdown, a link in the main post cut likes by about two-thirds.</li>
          </ul>
        </Step>

        <Step title="9. Had them approve tweets in the doc">
          <p>They approved tweets right in the batch docs by bolding them.</p>
          <p>Once we scheduled an approved tweet, we crossed it out. From batch 6 on, we highlighted it green too.</p>
          <Table
            head={["Step", "What happens"]}
            rows={[
              ["1. Write the batch", "We put each tweet next to its source"],
              ["2. Founder opens the doc", "They bold the tweets they approve"],
              ["3. Schedule approved tweets", "We cross each one out once it's scheduled"],
              ["4. Study the approvals", `We pull them into their own tab "so I could see the patterns"`],
              ["5. Write the next batch", "We double down on what got approved and what is working elsewhere"],
            ]}
          />
          <p>
            We pulled their approved tweets into their own tab &quot;so we could see the patterns.&quot; Each bolded line
            taught me something about their voice, and so did each tweet they skipped.
          </p>
        </Step>

        <Step title="10. Said the same idea in different ways">
          <p>
            Once you know an angle works, the question becomes: how much can you double down without the audience
            getting bored?
          </p>
          <p>
            &quot;Sooner or later you realize everything comes down to your ability to stick with the plan despite
            whatever emotions you may feel.&quot; did 361K impressions.
          </p>
          <p>
            A later batch said it again: &quot;You become an adult when you realize everything eventually comes down to
            your ability to stick with what you said you&apos;d do despite whatever emotions you may feel.&quot; That one
            did 288K.
          </p>
          <p>
            We also stacked old winners into one post. This list reused at least 3 lines they&apos;d already posted and
            done well with: &quot;Fuck your mood. Follow the plan.&quot;, &quot;The price of authenticity is being
            disliked.&quot; and &quot;Your new life will cost you your old one.&quot;
          </p>
          <Figure
            src={img("list-tweet")}
            width={1166}
            height={646}
            alt="Tweet: 5 reasons why you should go for it, a list stacking earlier winners. 614.7K views, 30K likes."
            caption="A list tweet that stacks their earlier winners."
          />
          <p>
            Batch 4 repeated their past winners and added relationship tweets, because relationship content was working
            for them on Instagram. I also left myself a note in the doc: &quot;Pull more from lives than old tweets.&quot;
          </p>
          <p>Each post does one of 3 jobs:</p>
          <ul>
            <li>
              <strong>Reach</strong> posts pull in new people with broad advice.
            </li>
            <li>
              <strong>Authority</strong> posts are tactical breakdowns.
            </li>
            <li>
              <strong>Resonance</strong> posts are the founder&apos;s story, mistakes, and life outside work, like the
              relationship tweets.
            </li>
          </ul>
          <p>Founders tend to skip the personal posts, so we kept them in the plan on purpose.</p>
          <p>We also used what we call the 3Rs:</p>
          <ul>
            <li>
              <strong>Repost</strong> a winner about 90 days later. Most of the audience didn&apos;t see it the first time.
            </li>
            <li>
              <strong>Repurpose</strong> it onto other platforms: a LinkedIn post, a newsletter section, a short video
              script.
            </li>
            <li>
              <strong>Remix</strong> it with a new template, or combine 2 winners into one.
            </li>
          </ul>
          <p>
            The speed tweet I wrote did 326K views the first time. When we posted it again later, it did another 180K,
            with 10K likes against 11K the first time:
          </p>
          <Figure
            src={img("speed-repost")}
            width={1175}
            height={683}
            alt="The speed tweet: first post 11K likes and 326K views, repost 10K likes and 180K views."
          />
          <p>
            That lines up with our X training guide: reposted winners regularly land at 60% to 100% of the
            original&apos;s likes. We call this &quot;test, then invest.&quot;
          </p>
          <p>
            To know which tweets to repost, we kept a Hall of Fame: each post that beat the account&apos;s average likes
            or impressions, with the date, topic, template and why it won.
          </p>
        </Step>
      </Section>

      <Section title="End state">
        <p>
          446 of the 469 tweets they approved went live, with nearly 26 million impressions and 953,701 likes. And we
          never talked to them about any of them.
        </p>
        <p>
          By the later batches, we put every tweet next to its source, they approved everything in one doc, and their
          bolded tweets told me what to write next.
        </p>
        <p>At RML, these are now standing rules:</p>
        <ul>
          <li>The founder approves in batch once a week.</li>
          <li>Their edits come first on 2 questions: is it true, and does it sound like them?</li>
          <li>We log every cut in a &quot;why it got cut&quot; doc.</li>
          <li>We never publish a number, name, or claim the founder hasn&apos;t confirmed.</li>
        </ul>
      </Section>
    </CaseStudyPage>
  );
}
