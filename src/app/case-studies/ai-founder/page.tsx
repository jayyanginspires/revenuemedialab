import type { Metadata } from "next";
import { Applied, CaseStudyPage, Figure, Section, Step, Table } from "@/components/apparatus/CaseStudyPage";

const img = (name: string) => `/case-studies/ai-founder/${name}.jpg`;

export const metadata: Metadata = {
  title: "How we grew a founder's LinkedIn from 19,000 to 33,544 followers | Revenue Media Lab",
  description:
    "He set a 3-month goal of +50%. We passed it in month 1. The 6-step system behind a founder's LinkedIn, from research to the week after a hit.",
};

export default function AiFounderCaseStudy() {
  return (
    <CaseStudyPage
      id="case-2x-founder"
      title="How we grew a founder's LinkedIn from 19,000 to 33,544 followers in about 2 months"
      subtitle="He set a 3-month goal of +50%. We passed it month 1."
      dek={
        <p className="m-0">
          We wrote the LinkedIn posts for a 2x founder who sold his first company and is bootstrapping his second.
          He also invests in early-stage startups. In our first week of posting, we wrote a post that got 8,501
          reactions. His best post before us had 485.
        </p>
      }
      stats={[
        { value: "19K → 33.5K", label: "LinkedIn followers in about 2 months" },
        { value: "+50%", label: "3-month goal, passed in month 1" },
        { value: "8,501", label: "reactions on a first-week post" },
        { value: "485", label: "reactions on his best post before us" },
      ]}
      cta={{
        headline: "Want your founder's next post to beat their best one?",
        body: "If your founder has a story worth telling and no time to post, we'll write it for them. We start with their interviews and old posts, so they don't sit for weekly calls, and we double down on what hits.",
      }}
    >
      <Figure
        src={img("followers-chart")}
        width={1016}
        height={560}
        alt="Line chart of LinkedIn followers: 19,000 on Dec 28, 25,959 on Jan 21, 30,953 on Jan 24 and 33,544 on Mar 4, crossing the +50% goal line of 28,500."
        caption="Followers from our KPI tracker. He crossed the +50% line between Jan 21 and Jan 24, about 10 days after the 8,501-reaction post."
      />

      <Section title="Before us, his best posts came from big life moments years apart">
        <p>
          He&apos;d been posting for about 9 months, on and off. His top posts announced the sale of his first company in
          2021 and told the story of his Ironman 3 years later.
        </p>
        <Figure
          src={img("posts-beat-best")}
          width={1086}
          height={370}
          alt="Bar chart: his best post before us had 485 reactions. Our posts: career advice list 8,501, red flags list 5,705, seed-strapping post 642, a decade of sacrifice 487."
          caption="You don't need big news to beat your best post. Our 4 came from lessons and stories he already had."
        />
      </Section>

      <Section title="The system: 6 steps, from research to the week after a hit">
        <p>Research goes in, and the reactions tell us what to write next: a Part 2, a remix, or a tighter list.</p>
        <Figure
          src={img("system")}
          width={1130}
          height={680}
          alt="Diagram of the 6-step system: 1 Founder Cheatsheet, 2 Remix Rule, 3 3-Rank Idea Bank, 4 Lesson Story Number, 5 Write 15 Post 10, 6 Accordion Method, which feeds back into the idea bank."
          caption="Steps 1 to 5 make the posts. Step 6 starts when one hits, and what we learn goes back into the idea bank."
        />

        <Step title="1. The Founder Cheatsheet: one questionnaire instead of weekly interviews">
          <p>
            A busy founder doesn&apos;t have time for weekly interviews, and most of what you need is already on the
            record. So send one questionnaire, then do the research yourself:
          </p>
          <ul>
            <li>Podcast interviews, saved as transcripts so you can search them</li>
            <li>Old blog posts, articles and their personal site</li>
            <li>The posts the founder considers their best</li>
          </ul>
          <p>Put the answers and the research on one page. The goals answer also tells you who to write for.</p>
          <Applied>
            his goal was growing his businesses, so we wrote for 3 audiences: the ecommerce brands his software company
            sells to, founders raising money, and anyone building a career.
          </Applied>
          <Figure
            src={img("cheatsheet")}
            width={1133}
            height={775}
            alt="Personal Brand Cheatsheet: template questions on goals, brands you respect, topics, sources, achievements, life-changing events, mistakes and CTA, with short versions of the founder's answers."
            caption={`Ask for mistakes as directly as wins. "Depression post-exit" was one line on his list, and it became the last point of the 8,501-reaction post.`}
          />
          <p>Here are the questions, so you can copy them:</p>
          <ol>
            <li>
              <strong>Goals:</strong> What does success look like in 3 months? In 12 months?
            </li>
            <li>
              <strong>Brands you respect:</strong> Which 1 to 5 personal brands would you emulate, and what do you like
              about each one?
            </li>
            <li>
              <strong>Topics:</strong> What 3 to 5 topics should the account cover, and which matter most?
            </li>
            <li>
              <strong>Sources:</strong> Links to the interviews, articles and old posts we can draw from.
            </li>
            <li>
              <strong>Achievements:</strong> What would make a good headline? Don&apos;t be humble, and use numbers.
            </li>
            <li>
              <strong>Life-changing events:</strong> One-liners we can turn into stories.
            </li>
            <li>
              <strong>Mistakes:</strong> &quot;Be as vulnerable as you can here.&quot;
            </li>
            <li>
              <strong>CTA:</strong> Where should engagement go?
            </li>
          </ol>
        </Step>

        <Step title="2. The Remix Rule: turn old posts into new ones">
          <p>
            Old posts hold ideas already in the founder&apos;s words. Remix the short ones that didn&apos;t get their full
            story.
          </p>
          <ol>
            <li>Find a short post with a strong idea, like a list of one-liners.</li>
            <li>Keep the hook and the idea.</li>
            <li>Add what it was missing: the stories and the numbers.</li>
          </ol>
          <Applied>
            his biggest post started as a list of 7 lessons he&apos;d posted 2 months before we started, one line each.
            We kept his opener and gave each line a story.
          </Applied>
        </Step>

        <Step title="3. The 3-Rank Idea Bank: know what to write next and how to write it">
          <p>Keep the ideas in one database. Give each 3 ranks and a note, then write the top one first:</p>
          <ul>
            <li>
              <strong>Founder rank:</strong> what the founder is excited to say, so approvals come quickly.
            </li>
            <li>
              <strong>Writer rank:</strong> whether there&apos;s a hook and a proof story.
            </li>
            <li>
              <strong>Audience rank:</strong> whether the topic or format has done well before.
            </li>
            <li>
              <strong>The note:</strong> a few words on what to change, plus a link to the post it builds on, like
              &quot;Expand on these points&quot; or &quot;Reframe hook.&quot;
            </li>
          </ul>
          <Figure
            src={img("idea-bank")}
            width={1016}
            height={436}
            alt="Content idea bank table: ideas with a founder rank, a note on how to write each, and a status."
            caption={`The note on the top row was 4 words: "Expand on these points." It pointed at his old list of 7 lessons, and the expanded post got 8,501 reactions.`}
          />
        </Step>

        <Step title="4. Lesson, Story, Number: give each one-liner proof only the founder has">
          <p>Anyone can write a bulleted lesson, so they come out generic. Give each point 3 parts:</p>
          <ol>
            <li>
              <strong>Lesson:</strong> the one-liner, in the founder&apos;s words.
            </li>
            <li>
              <strong>Story:</strong> a moment from their life when it proved true.
            </li>
            <li>
              <strong>Number:</strong> one figure that shows it happened.
            </li>
          </ol>
          <Figure
            src={img("career-post")}
            width={1133}
            height={580}
            alt="LinkedIn post opening: I'm 45. After 25 years building startups, selling a company for near 9 figures, and advising dozens of founders, here are 9 pieces of brutally honest career advice. 8,501 reactions, 841 comments, 416 reposts."
            caption="We kept his opener and added one credibility line, so a stranger knows by line 2 that he has lived the advice. It got 8,501 reactions, 841 comments and 416 reposts."
          />
          <Applied>
            &quot;Never waste a good crisis&quot; became: &quot;In 2018, our growth stalled from 100% to 15% YoY
            growth... 2 years later we sold the company after our highest profit year ever.&quot; When a lesson had no
            story yet, the research filled it: &quot;With $750k in funding, we scaled [his first company] to $100M+ in
            revenue.&quot;
          </Applied>
          <Table
            head={["His one-liner", "The point in the post"]}
            rows={[
              [
                `"You just need to create one 'true believer' to get started."`,
                `"Create one 'true believer.' To get momentum, you don't need 1,000 customers or investors. You need one customer who believes in you. Find them, deliver beyond expectations, and they'll become your biggest advocate."`,
              ],
              [
                `"God made you whole. There is no hole to fill."`,
                `"God made you whole. There's no hole to fill. When I sold my company, I thought the money would fix everything (my insecurities, my fears, my self-worth). Spoiler: it didn't."`,
              ],
            ]}
          />
        </Step>

        <Step title="5. Write 15, Post 10: cut the points anyone else could have written">
          <p>A list is only as strong as its weakest point. So draft 15 points for a post of 10, then cut 5.</p>
          <p>The test: cover the founder&apos;s name. If another expert could have written the point, cut it.</p>
          <Figure
            src={img("red-flags-draft")}
            width={1133}
            height={483}
            alt="The red flags draft: 10 points kept and 5 struck out, including 'Founders who don't listen'."
            caption="His red flags draft had 15 points. We posted 10."
          />
          <Figure
            src={img("red-flags-post")}
            width={1133}
            height={660}
            alt="LinkedIn post: 10 red flags I look for as an angel investor. I've invested in 50+ startups. 5,705 reactions, 650 comments."
            caption="The hook makes one promise and backs it in one line. It got 5,705 reactions and 650 comments."
          />
          <Applied>
            &quot;Founders who don&apos;t listen&quot; could have come from any investor, so it went. &quot;First-time
            founders obsess over features. Second-time founders obsess over distribution.&quot; could only come from
            someone who has started 2 companies, so it stayed.
          </Applied>
        </Step>

        <Step title="6. Use the Accordion Method: reach new people with a hit, then keep them with the founder's story">
          <p>
            A post that hits opens the accordion wide, and a lot of new people see the founder for the first time. Then
            you close it in. For the next 4 days, post the founder&apos;s story so the new people stay.
          </p>
          <Applied>his career advice post hit on a Monday. Here&apos;s his week:</Applied>
          <Figure
            src={img("week-after-hit")}
            width={1133}
            height={373}
            alt="The week after the hit, reactions per post: Monday the hit 8,501, Tuesday Part 2 266, Wednesday reintroduction 333, Thursday a personal story 487, Friday a proven story 291."
            caption="The follow-ups don't need to go viral. Their job is to tell new followers who he is, and Thursday's personal story still beat his old best with 487 reactions."
          />
          <ul>
            <li>
              <strong>Day 2, Part 2:</strong> more from the same list. Ours was 10 more pieces of career advice.
            </li>
            <li>
              <strong>Day 3, the reintroduction:</strong> who the founder is, using the template below.
            </li>
            <li>
              <strong>Day 4, a personal story:</strong> the person behind the advice. Ours was the decade he spent
              sacrificing his health and family for his first company.
            </li>
            <li>
              <strong>Day 5, a remix:</strong> a post that worked before, rewritten. We kept the best lines of his
              Ironman post, cut the setup to 3 short lines, and turned his excuses into a list.
            </li>
          </ul>
          <p>Here&apos;s the reintroduction template, with each part labeled:</p>
          <Figure
            src={img("reintro-template")}
            width={943}
            height={766}
            alt="Reintroduction post with 7 labeled parts: open on the hit, welcome the new people, who you are in one line, the origin story with numbers, what you're working on now, one personal detail, the invite."
            caption="Each part answers a question a new follower has: who is this, why should I listen, and what will I get if I stay?"
          />
          <ol>
            <li>Open on the hit in plain words.</li>
            <li>Welcome the new people.</li>
            <li>Say who you are in one line.</li>
            <li>Tell the origin story with 1 or 2 numbers.</li>
            <li>List what you&apos;re working on now.</li>
            <li>Add one personal detail.</li>
            <li>Close with an invite.</li>
          </ol>
        </Step>
      </Section>
    </CaseStudyPage>
  );
}
