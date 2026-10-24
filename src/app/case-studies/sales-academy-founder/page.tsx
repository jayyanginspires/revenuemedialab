import type { Metadata } from "next";
import { CaseStudyPage, Figure, Quote, Section, Step, Table } from "@/components/apparatus/CaseStudyPage";

const img = (name: string) => `/case-studies/sales-academy/${name}.jpg`;

export const metadata: Metadata = {
  title: "How we grew an 8-figure founder's LinkedIn to 20,000 followers in under 6 months | Revenue Media Lab",
  description:
    "The founder of the world's largest women's sales academy hadn't posted on LinkedIn in over 3 years. We were the only writer on her account as it went from no posts to 25,735 followers.",
};

export default function SalesAcademyFounderCaseStudy() {
  return (
    <CaseStudyPage
      id="case-sales-academy"
      title="How we grew an 8-figure founder's LinkedIn to 20,000 followers in under 6 months"
      dek={
        <p className="m-0">
          <strong className="text-ink">In under 6 months, her LinkedIn crossed 20,000 followers.</strong>{" "}
          Today it&apos;s at 25,735. We were the only writer on her LinkedIn during that time.
        </p>
      }
      stats={[
        { value: "0 → 25,735", label: "LinkedIn followers" },
        { value: "< 6 months", label: "to cross 20,000" },
        { value: "786", label: "reactions on her top post" },
        { value: "3 years", label: "since her last LinkedIn post" },
      ]}
      cta={{
        headline: "Your founder already has the audience somewhere. Let's bring it to LinkedIn.",
        body: "We take the ideas that already work on your founder's other channels, write them in their voice, and keep rerunning the winners.",
      }}
    >
      <Section title="Results">
        <Figure
          src={img("profile")}
          width={1175}
          height={800}
          alt="Her LinkedIn profile: I teach sales. Founder of the world's largest all-women remote sales academy. 25,735 followers."
          caption="Her LinkedIn profile today, at 25,735 followers."
        />
        <p>Her top posts:</p>
        <Table
          head={["Post", "Reactions", "Comments"]}
          rows={[
            ["Full-story reintroduction", "786", "195"],
            [`"$100k a year" breakdown, second run`, "651", "93"],
            ["Day-1 reintro teaser, rerun", "639", "69"],
            ["Letter to her 18-year-old self", "561", "39"],
            ["Day-1 reintro teaser", "546", "101"],
            [`"$100k a year" breakdown, first run`, "492", "95"],
            ["Full-story reintro, later run", "491", "65"],
            ["Engagement party photo", "485", "39"],
            [`"10 rich girl habits you can start right now"`, "314", "26"],
          ]}
        />
        <p>Here&apos;s how we did it, step by step.</p>
      </Section>

      <Section title="Where the account started">
        <p>
          She&apos;s an 8-figure founder. Her company is the largest all-women remote sales academy in the world, and
          it trains women in high-ticket sales. Her team&apos;s brand guide puts her at 1M+ followers on Instagram and
          500K+ on TikTok.
        </p>
        <p>The last time she posted on LinkedIn, she was still in college. That was over 3 years ago.</p>
        <p>So she already had the audience, the stories and years of proven ideas. LinkedIn was wide open.</p>
      </Section>

      <Section title="Our strategy">
        <p>
          We could have posted 5 polished sales tips a week. But people follow her because she sounds like their best
          friend who got rich, and polished tips would make her sound corporate.
        </p>
        <p>
          She had years of Instagram videos, and her view counts showed me which ideas already worked. And on LinkedIn, a
          loud, lowercase, funny founder stands out.
        </p>
        <p>So my job was simple: move what already worked on Instagram onto LinkedIn.</p>
        <p>
          Before we write anything, we ask one question: <strong>when people hear this founder&apos;s name, what should they think?</strong>
        </p>
        <p>
          Your brand is what people associate you with. Nike shows up next to winning athletes over and over, so you
          think of winning.
        </p>
        <p>
          You can reverse engineer that. Pick the outcome you want, figure out what you need to be associated with to get
          it, and write about that on purpose.
        </p>
        <p>We use 3 levers for this. We call it PTL:</p>
        <ul>
          <li>
            <strong>Power:</strong> she has what you want. Money, status, expertise.
          </li>
          <li>
            <strong>Trust:</strong> following her advice gets you a result.
          </li>
          <li>
            <strong>Likeness:</strong> she&apos;s like you, so you&apos;re willing to listen.
          </li>
        </ul>
        <p>
          She had proof for all 3. Power was a line like &quot;I became a millionaire at 23.&quot; Trust was her sales
          tips. Likeness was where she started: in college, she was a barista, a social media intern and a DoorDash
          driver at the same time.
        </p>
        <Table
          head={["Lever", "What it means", "Post type", "Her proof"]}
          rows={[
            ["Power", "She has what they want", "Reintro and big wins", "$70k in 3 months, a million-dollar team by 22"],
            ["Trust", "Her advice works", "Value posts", "Tips built from questions her community was already asking"],
            ["Likeness", "She's like them", "Personal stories", "Her wedding day, her wins, life outside work, where she started"],
          ]}
        />
        <p className="text-[15px] italic text-muted">
          PTL: what each type of post builds. Takes that argue the other side of a belief run across all 3.
        </p>
        <p>
          Each week of posts covers all 3. Why? Power without likeness comes off as flexing. If a draft doesn&apos;t
          build any of them, we cut it.
        </p>
        <p>
          Since she was coming back after 3 years, the order was: reintroduce her, test a lot of ideas, find the outliers,
          double down, and keep rerunning the winners.
        </p>
        <Table
          head={["Phase", "What we did"]}
          rows={[
            ["1. Reintroduce", "Who she is, who she helps, what to expect"],
            ["2. Test wide", "Value, provocative, personal and story posts"],
            ["3. Find outliers", "Which posts beat her average, and why"],
            ["4. Double down", "Rerun winners, new hooks on proven bodies"],
            ["5. Compound", "20,000+ followers, same loop keeps running"],
          ]}
        />
      </Section>

      <Section title="Our process">
        <Step title="1. Made a reintroduction post">
          <p>
            People need to know who you are and why you&apos;re back before they take your advice. So we didn&apos;t
            start with tips.
          </p>
          <p>The reintro ran over 2 days.</p>
          <p>
            Day 1 was a teaser: 8 short lines that opened with &quot;well well well... look who&apos;s back,&quot; said
            she&apos;d been MIA for 3 years, and promised &quot;sales tips, frameworks, and the occasional unhinged
            story.&quot; It got 546 reactions and 101 comments.
          </p>
          <p>Day 2 was the full story: who she is, who she helps, and what she&apos;d post going forward. It opened like this:</p>
          <Quote>
            <p>
              hi, i&apos;m back.
              <br />
              i haven&apos;t posted on linkedin in three years. a lot has happened.
              <br />
              at 18, i was juggling three jobs to pay tuition at [her college]. insecure. broke. convinced i was meant for
              more but completely lost on how to get there.
            </p>
          </Quote>
          <p>
            Then it covers the proof: $70k in 3 months selling pest control door to door, top rep, and a million-dollar
            sales team by 22. It ends with who she&apos;s talking to and one clear ask.
          </p>
          <Figure
            src={img("reintro-day2")}
            width={1116}
            height={975}
            alt="Her full-story reintro post in the feed: hi, i'm back. i haven't posted on linkedin in three years. 786 reactions, 195 comments."
            caption={`Day 2, the full-story reintro, as it shows in the feed: 2 lines, then "more" (photo trimmed). 786 reactions and 195 comments.`}
          />
          <p>
            On LinkedIn, your hook is the first 1 to 3 lines before someone has to click &quot;more.&quot; Hers says
            she&apos;s back and that a lot has happened in 3 years. So you click.
          </p>
          <p>
            Reintros do well for 2 reasons. You get to show your credibility through a story, and people have something
            easy to comment (&quot;welcome back!&quot; and &quot;congrats!&quot;).
          </p>
          <p>
            A Director at LinkedIn told us a normal post today goes about 90% to people in your network and 10% to
            strangers. Meaning: on a comeback, the people who already know you drive the early engagement.
          </p>
          <p>The full story got 786 reactions and 195 comments.</p>
          <p>
            So we reran it. After a wave of new followers, one version opened with &quot;got a bunch of new followers
            recently... so allow me to reintroduce myself.&quot; Later versions opened with &quot;hi, nice to meet
            you&quot; and &quot;hi, i&apos;m back. i haven&apos;t shared an update in a bit.&quot;
          </p>
          <p>
            We reran the day-1 teaser too, and swapped &quot;after 3 years MIA&quot; for who she is and what she teaches.
            That version got 639 reactions and 69 comments, up from 546 reactions the first time.
          </p>
          <Figure
            src={img("reintro-teaser")}
            width={1175}
            height={966}
            alt="Day-1 teaser rerun: well well well... look who's back. i teach sales. i've personally mentored over 9,000+ women. 639 reactions, 69 comments."
            caption="The day-1 teaser, rerun with who she is and what she teaches. 639 reactions and 69 comments."
          />
        </Step>

        <Step title="2. Turned her best Instagram videos into LinkedIn posts">
          <p>A post that does well on one platform will probably do well on another.</p>
          <p>
            So we pulled her highest-performing Instagram videos, transcribed them, and turned the transcripts into
            LinkedIn posts.
          </p>
          <Table
            head={["Step", "What happens"]}
            rows={[
              ["1. Proven source", "Her top IG reels, plus questions from her academy's community"],
              ["2. Transcribe and mine", "Pull the lines, stories and takes that already landed"],
              ["3. Write in her voice", "Lowercase, like texting a friend. Read it out loud"],
              ["4. Battle-test hooks", "3 hooks per post, pick the strongest"],
              ["5. Publish", "Pick one of 4 post types"],
              ["6. Outlier check", "Did it beat her average? If not, change the angle or the hook and try again"],
              ["7. Hall of Fame", "Save the post and the hook separately"],
              ["8. Replay it", "Rerun at 90 days, rewrite and post at 30 days"],
            ]}
          />
          <p className="text-[15px] italic text-muted">
            How Instagram videos become LinkedIn posts, and how the winners get rerun.
          </p>
          <p>My rules for the rewrite:</p>
          <ul>
            <li>
              <strong>Keep her words.</strong> The transcript is your voice reference, so don&apos;t swap in synonyms you
              like better.
            </li>
            <li>
              <strong>Cut the rambling, keep the specifics.</strong> The numbers and names make it believable.
            </li>
            <li>
              <strong>Put the point in the first 2 lines,</strong> before LinkedIn&apos;s &quot;see more&quot; cut.
            </li>
            <li>
              <strong>Turn spoken steps into numbered steps</strong> people can save.
            </li>
          </ul>
          <p>Here&apos;s point 2 of one of her money listicles:</p>
          <Quote>
            <p>
              2/ your degree is not a financial plan. i got my masters degree by 22... then i started applying w my fancy
              degree and you know what i got back? a $65k a year office job.
            </p>
          </Quote>
          <p>That listicle got 155 reactions and 12 comments.</p>
          <p>
            Later, the same $65k offer showed up in a letter to her 18-year-old self, which opens on her buying her sixth
            rental property at 25. That one got 561 reactions and 39 comments. A detail from point 2 of a list ended up
            carrying its own post.
          </p>
          <p>
            For value posts, we used AI to scrape the top questions her audience was asking inside her academy&apos;s
            community. Then we turned each question into a tip.
          </p>
          <p>
            They open the way you&apos;d answer a friend: &quot;someone asked me why i switched from door-to-door sales
            to high ticket sales. it got me thinking. here&apos;s why...&quot;
          </p>
          <p>
            This is part of the Content Multiplication System we use on our own content: test ideas where it&apos;s cheap,
            find the outliers, and post the winners everywhere else. On my account, ideas start as tweets. On
            hers, they started as Instagram videos.
          </p>
          <Figure
            src={img("multiplication-system")}
            width={1150}
            height={816}
            alt="The Content Multiplication System diagram: X as the idea playground, a weekly review of outliers, a Hall of Fame, and winners repurposed into Instagram, long-form posts, reels, newsletter, YouTube and podcast."
            caption="The full Content Multiplication System, as we run it on my own account, where X is the testing ground. On her account, Instagram played that role."
          />
        </Step>

        <Step title="3. Posted opinions that go against a common belief">
          <p>Value posts build trust. For reach, we took beliefs her audience held and argued the other side.</p>
          <p>
            One post opened with &quot;Broke at 19. Rich at 25.&quot; and told people to stop networking. Another said the
            idea that stacking cash is &quot;soulless&quot; is the worst money advice she&apos;s ever seen:
          </p>
          <Quote>
            <p>
              &quot;If you believe that making money is evil, then you&apos;ll never get rich bcuz you&apos;ll always
              have this internal tension inside of you.&quot;
            </p>
          </Quote>
          <p>People who agree comment. People who disagree comment more. And more comments means more reach.</p>
          <p>
            The networking post goes after a common enemy (networking for its own sake). The &quot;soulless&quot; post
            says out loud what a lot of her readers already half-believe: guilt about money is holding them back.
          </p>
          <p>
            2 rules here. We only wrote takes she would defend out loud, and we put the belief in line 1 so the reader
            knows which side she&apos;s on.
          </p>
        </Step>

        <Step title="4. Posted about her personal life">
          <p>Most people in sales only post about sales. We didn&apos;t.</p>
          <p>She posted about her life, her wedding day, her big wins, and stuff outside of work.</p>
          <p>
            A post from her engagement party, captioned &quot;engagement partiiiii,&quot; got 485 reactions, 39 comments
            and a ton of congratulations.
          </p>
          <Figure
            src={img("engagement-party")}
            width={836}
            height={575}
            alt="Her engagement party photo post. 485 reactions, 39 comments."
            caption="The engagement party post. 485 reactions and 39 comments."
          />
          <p>
            Why does this work? People want to work with people they like, and they can&apos;t like you if they don&apos;t
            know you. If you only post information, you sound like ChatGPT.
          </p>
          <p>And when your buyer can see the person behind the offer, buying from you feels safer.</p>
        </Step>

        <Step title="5. Wrote 3 hooks for every post and picked the best one">
          <p>
            Your hook is 90% of a post&apos;s performance. So we write 3 for every post and pick the best one. I call it
            battle testing.
          </p>
          <Quote>
            <p>&quot;When you have written your headline, you have spent eighty cents out of your dollar.&quot; David Ogilvy</p>
          </Quote>
          <p>
            A LinkedIn hook has 2 parts: a callout and a promise. The callout says who the post is for. The promise tells
            the reader what they&apos;ll get out of it.
          </p>
          <p>Then we check each hook 4 ways:</p>
          <ul>
            <li>
              <strong>Benefit:</strong> why should I care?
            </li>
            <li>
              <strong>Relevance:</strong> who is this for?
            </li>
            <li>
              <strong>Credibility:</strong> why listen to her?
            </li>
            <li>
              <strong>Perceived effort:</strong> how easy does it look to read?
            </li>
          </ul>
          <p>
            Last, we run the Name Test: cover her name and photo. If you can&apos;t tell it&apos;s her, the hook is too
            generic.
          </p>
          <p>
            Here&apos;s my favorite example from her account. The first version of this post was &quot;I became a
            millionaire at 23. 8 rich girl habits that I wish I started sooner.&quot; It got 82 reactions and 6 comments.
          </p>
          <Figure
            src={img("habits-v1")}
            width={1175}
            height={758}
            alt="The first version of the rich girl habits post. 82 reactions, 6 comments."
            caption="The first version. 82 reactions and 6 comments."
          />
          <p>
            About 5 weeks later, we rewrote it as &quot;10 rich girl habits you can start right now.&quot; The rewrite got
            314 reactions and 26 comments, and other accounts reshared it with notes like &quot;Absolute gold here.&quot;
          </p>
          <Figure
            src={img("habits-v2")}
            width={1150}
            height={1000}
            alt="The rewrite, 10 rich girl habits you can start right now. 314 reactions, 26 comments."
            caption="The rewrite. 314 reactions and 26 comments."
          />
          <p>
            Same opening line. Same habits in the same order. We split &quot;never buy fake&quot; into its own point,
            added one about her aura, and changed the hook from looking back (&quot;wish I started sooner&quot;) to doing
            something today (&quot;start right now&quot;).
          </p>
          <p>Here&apos;s habit #1 before:</p>
          <Quote>
            <p>
              &quot;i want your card to sound like that when you put it down for dinner. put everything on credit and
              build your score but if you don&apos;t have the money in your account don&apos;t spend it. i never pull out
              my debit card. stack those flight points girrrrrl&quot;
            </p>
          </Quote>
          <p>And after:</p>
          <Quote>
            <p>
              &quot;use it like a debit card &amp; pay it off every month. ur credit score goes up &amp; you get points on
              everything you&apos;re already buying. stack those flight points girrrrrl&quot;
            </p>
          </Quote>
          <p>Same idea, tighter body, new hook. The rewrite got almost 4x the reactions.</p>
        </Step>

        <Step title="6. Wrote the way she talks">
          <p>
            We write her posts like we&apos;re texting a friend. Mostly lowercase, with &quot;u&quot; and
            &quot;ur,&quot; and lines like &quot;stack those flight points girrrrrl.&quot;
          </p>
          <p>Read every post out loud. If it sounds weird, rewrite it.</p>
          <Figure
            src={img("voice-breakdown")}
            width={1150}
            height={716}
            alt="Steps 6 and 7 from the LinkedIn breakdown of her account: raw writing style, and repeat what works."
            caption="Steps 6 and 7 from my LinkedIn breakdown of her account."
          />
          <p>
            Founders ask me all the time if ghostwritten posts will sound like AI. The posts built from her Instagram
            videos started from her own transcripts, so they sounded like her from the first draft.
          </p>
          <p>
            When we use AI to help, we write in first person, vary sentence length, use no em dashes, and read every
            draft out loud.
          </p>
        </Step>

        <Step title="7. Reran the posts that did well">
          <p>When a post does better than average, we call it an &quot;outlier.&quot;</p>
          <p>
            Each week, we looked at the top 3 and bottom 3 posts (we call it a T3B3) and wrote one line on why each one
            won or missed. Outliers went into a Hall of Fame, the top 10% of everything we posted, and their hooks got
            saved separately.
          </p>
          <p>Then we used the 3Rs:</p>
          <ul>
            <li>
              <strong>Repost</strong> it about 90 days later. A lot of the audience missed it the first time.
            </li>
            <li>
              <strong>Remix</strong> it about 30 days later with a new hook on a body that already worked, or the same
              idea in a new format.
            </li>
            <li>
              <strong>Repurpose</strong> it on other platforms.
            </li>
          </ul>
          <p>
            Her &quot;$100k a year&quot; breakdown got 492 reactions the first time. About 2 months later, we ran it again,
            and the second run got 651.
          </p>
          <Figure
            src={img("100k-rerun")}
            width={1175}
            height={1382}
            alt="The $100k a year rerun post, breaking a six-figure salary down to $190 left at the end of the month. 651 reactions, 93 comments."
            caption={`The "$100k a year" rerun, from the hook to the $190 left. 651 reactions and 93 comments. The first run got 492 reactions and 95 comments.`}
          />
          <p>
            Same with the reintro. The day-2 story came back almost word for word under &quot;hi, i&apos;m back. i
            haven&apos;t shared an update in a bit,&quot; and got 491 reactions.
          </p>
          <Figure
            src={img("reintro-later")}
            width={1175}
            height={1016}
            alt="A later run of the full-story reintro: hi, i'm back. i haven't shared an update in a bit. 491 reactions, 65 comments."
            caption="A later run of the full-story reintro with a new second line. 491 reactions and 65 comments."
          />
          <p>Double down, double down, double down.</p>
          <p>Reach was half the job. The other half was getting the right people to the offer.</p>
          <p>
            The rich-girl listicles reach women who may have never thought about sales. Then several posts end with one
            easy ask: comment &quot;SALES&quot; or &quot;CLASS&quot; to get an invite to her free masterclass.
          </p>
          <p>
            Her &quot;$100k a year&quot; post, for example, breaks a six-figure salary down to $190 left at the end of the
            month, then asks readers to comment &quot;CLASS.&quot;
          </p>
          <Table
            head={["Layer", "Posts"]}
            rows={[
              ["Reach wide", "Provocative takes, personal stories, listicles anyone can share"],
              ["Earn trust", "Value posts built from questions her community asked"],
              ["Capture current demand", "A clear CTA on the post: comment a word, get the invite to her free masterclass"],
            ]}
          />
          <p className="text-[15px] italic text-muted">Reach a wide audience first, then point the buyers to the offer.</p>
          <p>
            LinkedIn has said it&apos;s deprioritizing walls of low-effort comments like &quot;comment yes if you
            agree.&quot; So we used comment-a-word CTAs to collect leads, and judged reach by the posts that started a
            conversation.
          </p>
        </Step>
      </Section>

      <Section title="End state">
        <p>
          She went from no posts in 3 years to 25,735 followers, with a reintro she can rerun every time a new wave of
          followers shows up and a Hall of Fame of posts that already worked.
        </p>
      </Section>
    </CaseStudyPage>
  );
}
