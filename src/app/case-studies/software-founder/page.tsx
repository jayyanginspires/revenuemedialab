import type { Metadata } from "next";
import { CaseStudyPage, Figure, Section, Step, Table } from "@/components/apparatus/CaseStudyPage";

const img = (name: string) => `/case-studies/software-founder/${name}.jpg`;

export const metadata: Metadata = {
  title: "How we got a busy founder 3x more posts over 100K impressions | Revenue Media Lab",
  description:
    "For about 20 months we wrote every post on a 9-figure software founder's X account without one interview. Posts over 100K impressions went from 6.5% to 22%.",
};

export default function SoftwareFounderCaseStudy() {
  return (
    <CaseStudyPage
      id="case-software-founder"
      title="How we got a busy founder 3x more posts over 100K impressions without any interviews"
      subtitle="Before the content multiplication system, about 1 in 15 posts topped 100K impressions. After, more than 1 in 5 did."
      dek={
        <>
          <p className="m-0">
            For about 20 months, we wrote every post on the X account of a 9-figure software founder and podcaster who
            was launching a book. We never interviewed them once.
          </p>
          <p className="m-0 mt-4">
            In the 6 months after we built the system, the median post did 30,157 impressions, up from 12,210 in the 6
            months before. X followers grew from about 138,000 to 158,689. The account also helped add about 35K email
            subscribers ahead of the book launch.
          </p>
        </>
      }
      stats={[
        { value: "6.5% → 22%", label: "posts over 100K impressions" },
        { value: "16.7% → 58.5%", label: "posts over 250 likes" },
        { value: "12,210 → 30,157", label: "median impressions per post" },
        { value: "~35K", label: "email subscribers added before the book launch" },
      ]}
      cta={{
        headline: "Want this system for your founder?",
        body: "If your founder has years of podcasts and videos but no time for interviews, we'd build this for them, starting with the research.",
      }}
    >
      <Figure
        src={img("results-bars")}
        width={1133}
        height={516}
        alt="Before and after bars, 6 months each: posts over 100K impressions 6.5% to 22%, posts over 250 likes 16.7% to 58.5%, weeks with a 100K+ post 38.5% to 81.5%."
        caption="Posts over 100K went from 6.5% to 22%, and posts over 250 likes went from 16.7% to 58.5%."
      />
      <Figure
        src={img("weekly-chart")}
        width={1133}
        height={466}
        alt="Posts over 100K impressions per week, Sep 2023 to Aug 2024. Before the system, 10 of 26 weeks had one. After it went in, 22 of 27 weeks did."
        caption="From March 2024 on, 22 of 27 weeks had at least one post over 100K impressions."
      />

      <Section title="The founder had 138K followers on X and no time for interviews">
        <p>
          They had a book on the way and wanted X to help grow their email list. In our first 6 months, only 10 of 26
          weeks had a post over 100K.
        </p>
      </Section>

      <Section title={`We built the system around the founder's own rule, "test, then invest"`}>
        <p>
          In February 2024, we set it up to make small bets and put more behind the winners. The founder&apos;s time
          stayed close to zero, so research and data did the job interviews usually do.
        </p>
        <Figure
          src={img("system")}
          width={1000}
          height={958}
          alt="The system we built: 1 deep research, then a weekly loop of 2 Hall of Fame, 3 to 5 writing tools, 6 battle-test hooks, 7 double down. Goal: more posts over 100K."
          caption="Research feeds a weekly loop. The posts that win shape what we write and replay next."
        />

        <Step title="1. We spent 50 hours researching the founder before we started">
          <p>
            We went through Google results down to page 3, YouTube videos from over a decade ago, and the podcast
            interviews they&apos;d given. We audited the newsletter too, from the signup page to the welcome email. The
            traffic data showed X and LinkedIn had a ton of room to grow.
          </p>
          <p>
            That research became our source library. We took ideas that had already worked on their podcast or YouTube
            channel and rewrote them for X.
          </p>
          <Figure
            src={img("newsletter-thread")}
            width={1133}
            height={460}
            alt="Tweet: Being an introvert is NOT a disadvantage. How to get rich (even if you're an introvert). 265.9K views, 892 bookmarks."
            caption="We rewrote one of their newsletters as this thread. It did 265,955 impressions and 892 bookmarks, our top post that week."
          />
        </Step>

        <Step title="2. Our Hall of Fame turned a 2019 post into 11.1M impressions">
          <p>
            Any post over 250 likes went into a Hall of Fame in Notion, and we tagged each one by topic. We checked it
            before writing anything new.
          </p>
          <Figure
            src={img("hall-of-fame-replay")}
            width={1133}
            height={908}
            alt="2019 original tweet about a friend with 25,000 Gmail emails, 1,065 likes, and the 2024 replay almost word for word, 11.1M impressions."
            caption="The founder's 2019 one-liner got 1,065 likes. We posted it again almost word for word in 2024, and it did 11.1M impressions."
          />
        </Step>

        <Step title="3. We wrote down the founder's core ideas, and one thread that used 4 of them did 1M impressions">
          <p>
            We pulled out the ideas the founder had repeated for years and tagged the Hall of Fame by each one. That
            showed us what the audience wanted more of. The &quot;don&apos;t quit your job&quot; thread carried 4 of them
            in 10 steps and did 1,013,671 impressions.
          </p>
          <Table
            head={["Core idea", "Post", "Impressions"]}
            rows={[
              ["Persistence beats resistance", `"I'm the CEO of a $100 million business. But the first 10 years of my career:"`, "1,610,768"],
              ["Don't quit your job, set a freedom number", `"Please don't quit your job and 'go all in'."`, "1,013,671"],
              ["Build wealth with your day job first", `"I became a millionaire by age 30 working day jobs."`, "167,358"],
            ]}
          />
        </Step>

        <Step title="4. We created hook templates from posts that were already winning">
          <p>
            We studied the top posts on the founder&apos;s account and on accounts like James Clear&apos;s and Justin
            Welsh&apos;s. The structures that kept winning became templates. Each template sits next to the proven post
            it came from, plus a version written from the founder&apos;s own story.
          </p>
          <Table
            head={["Template", "Skeleton", "Post", "Impressions"]}
            rows={[
              ["Past vs. Present", "I am [credibility]. But [concession]. Here are # [lessons].", `"I'm the CEO of a $100 million business. But I've tried (and failed) to build 10+ startups before."`, "435,563"],
              ["Learn from my mistakes", "I'm [age]. When I was young, I [mistake].", `"My #1 regret in life: I wish I had taken myself and dating more seriously in my 20s."`, "1,237,527"],
              ["Friend story", "My friend [did something surprising]", `"My friend had 25,000 emails in Gmail..."`, "11,097,348"],
              ["Step by step", "[Credibility]. Here's how to [result]:", `"Please don't quit your job and 'go all in'... Here's how you can do it:"`, "1,013,671"],
            ]}
          />
        </Step>

        <Step title="5. One credibility line helped take a career post from 43,908 to 1.6M impressions">
          <p>We score every hook on this formula:</p>
          <Figure
            src={img("hook-formula")}
            width={1133}
            height={583}
            alt="Virality equals Benefit times Relevance times Credibility, divided by Perceived Effort."
            caption="A hook spreads when the top of the formula scores high and the effort scores low."
          />
          <Figure
            src={img("hook-breakdown")}
            width={1133}
            height={636}
            alt="A tweet annotated with credibility (employee #30 at Facebook), benefit ($100 million/year company), relevance (10 lessons I learned) and perceived effort."
          />
          <p>
            &quot;Employee #30 at Facebook&quot; is the credibility, &quot;$100 million/year company&quot; is the
            benefit, and &quot;10 lessons I learned&quot; is the relevance. Years of lessons in one post lowers the
            effort.
          </p>
          <p>The formula told us what to fix. We posted the same career story 3 times and kept rewriting the top:</p>
          <Table
            head={["Date", "First line", "Impressions"]}
            rows={[
              ["Dec 2023", `"End of year reminder to keep going..."`, "43,908"],
              ["Feb 2024", `"I'm the CEO of an $80 million business. But the first 10 years of my career:"`, "244,851"],
              ["Mar 2024", `"I'm the CEO of a $100 million business. But the first 10 years of my career:"`, "1,610,768"],
            ]}
          />
          <Figure
            src={img("credibility-line")}
            width={991}
            height={1441}
            alt="Before, Dec 2023: End of year reminder to keep going, 43,908 impressions. After, Mar 2024, with a credibility line added: I'm the CEO of a $100 million business, 1.6M impressions."
            caption={`Adding "I'm the CEO of a $100 million business" on top helped take the career post from 43,908 impressions to 1.6M.`}
          />
          <p>
            In July, we reposted a 435,563-impression thread without the credibility line, and it got about half the
            engagement.
          </p>
        </Step>

        <Step title="6. We battle-tested 3 hooks for every post after one thread flopped">
          <p>
            In February, a thread about the company&apos;s culture handbook died. From then on, we wrote 3 first lines
            for every post and posted the one that scored highest on the formula.
          </p>
          <p>
            Each hook also had to pass the Name Test from our best practices page: &quot;If you cover your name and
            profile picture, can people still tell it&apos;s your writing?&quot;
          </p>
          <p>
            So we tied our tips to the founder&apos;s own story, like failing at 10+ startups before building a 9-figure
            business.
          </p>
        </Step>

        <Step title="7. New hooks turned a 10,086-impression post into 225,228">
          <p>Once a post worked, we posted it again or gave it a new hook. New hooks did the most for posts that missed the first time.</p>
          <Figure
            src={img("new-hook-person")}
            width={1133}
            height={1416}
            alt="Before: Recently interviewed Peter Maldonado on the podcast, 10,086 views. After: This is Peter Maldonado, 225,228 views."
            caption="Leading with the person instead of the podcast took this post from 10,086 impressions to 225,228 in 3 days."
          />
          <Figure
            src={img("new-hook-process")}
            width={1113}
            height={1433}
            alt="Before: a product announcement, 8,972 views. After: the same numbers with Here's our 5-step process to launch winning products, 133,988 views."
            caption="Promising a 5-step process instead of announcing a product took this post from 8,972 impressions to 133,988."
          />
          <Figure
            src={img("replay")}
            width={1133}
            height={1186}
            alt="My #1 regret in life tweet: first post 1.2M impressions, replay with the same opening 2.3M impressions."
            caption="We posted this one again 3 months later with the same opening. It did 2.3M impressions, almost double the first time."
          />
          <p>By July 2024, 2 of the top 3 posts on the account were replays.</p>
        </Step>
      </Section>
    </CaseStudyPage>
  );
}
