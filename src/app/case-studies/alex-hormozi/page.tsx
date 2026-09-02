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
  title: `How we helped break a Guinness World Record book launch — ${SITE.name}`,
  description:
    "Writing ad copy for the launch of Alex Hormozi's $100M Money Models: the 6Ps, optimising for AOV over CPL, battle-testing hooks, and kaleidoscoping winners.",
};

export default function AlexHormoziCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <CaseStudyHero
          headline="How We Helped Break a Guinness World Record Book Launch"
          stats={[
            { value: "2,917,443", label: "Copies Sold" },
            { value: "$105M", label: "Launch Revenue" },
            { value: "1,500+", label: "Pieces Filmed" },
            { value: "2,600+", label: "Ads Run" },
          ]}
          image={{
            src: "/images/guinness-certificate.jpg",
            alt: "Guinness World Records certificate awarded to Jay Yang for taking part in the fastest-selling non-fiction book record.",
            caption:
              "The fastest-selling non-fiction book — $100M Money Models, 2,917,443 copies, 17 August 2025.",
          }}
        />

        <CaseStudyArticle>
          <p>
            We wrote ad copy for the launch of Alex Hormozi&rsquo;s <em>$100M Money Models</em>.
          </p>
          <p>
            It sold 2,917,443 copies and took the Guinness World Record for fastest-selling
            non-fiction book. The launch did $105M.
          </p>
          <p>We filmed over 1,500 pieces of creative and ran over 2,600 ads.</p>
          <p>Here&rsquo;s how:</p>

          <ArticleH2>Use the 6Ps</ArticleH2>
          <p>
            Copywriting was never about the writing. It&rsquo;s about the thinking behind the words.
          </p>
          <p>
            Identity callouts, outcome hooks, promise hooks &mdash; they all work. But if you
            don&rsquo;t know why they work, all you can do is repeat them. Instead, I want to teach
            you how to fish.
          </p>
          <p>Before we write copy, we first write down our answers to the 6Ps.</p>
          <p>
            <strong>People.</strong> Who is this for? You can&rsquo;t answer &ldquo;why should they
            choose us&rdquo; until you answer &ldquo;who is they.&rdquo; Here it was business
            owners, and a much wider range than you&rsquo;d think. Some could already identify what
            was broken in their business. Some had never heard of Alex. We had to write for both.
          </p>
          <p>
            <strong>Positioning.</strong> Where your product already sits in your buyer&rsquo;s
            head. A money model was a concept that no one understood yet, we made sure our hooks
            addressed that: &ldquo;Honest question, when&rsquo;s the first time you ever heard of a
            money model? That&rsquo;s because it&rsquo;s never been talked about before.&rdquo;
          </p>
          <p>
            <strong>Promise.</strong> Where you&rsquo;re helping them get to. Steve Jobs
            didn&rsquo;t say 5 gigabytes of storage, he said 1,000 songs in your pocket. Ours was
            &ldquo;a good money model can get customers to pay you two times, 10 times, or a hundred
            times more in half the time,&rdquo; and for the person who thinks they need funding,
            &ldquo;you can scale as fast as you want without raising any money at all.&rdquo;
          </p>
          <p>
            <strong>Proof.</strong> Why they should believe you. Trust is belief with evidence.
            Belief without evidence is faith. Alex runs a $250M portfolio, he sold two thirds of his
            last company for $46.2M, and over a million people bought his last two books. The deaf
            and mute test: if you were deaf and mute and could only point to what&rsquo;s in the
            room, what proof could you point to?
          </p>
          <p>
            <strong>Priority.</strong> Why now instead of later. We jog toward pleasure, we sprint
            from pain. The event ran live once with no replays, and the bonuses disappeared when it
            started.
          </p>
          <p>
            <strong>Process.</strong> How it works, and why the other ways don&rsquo;t. &ldquo;A
            money model is a sequence of offers that compound. The instinct is to grow by adding
            customers. You grow by getting more out of the ones you already have.&rdquo;
          </p>
          <p>
            Once you&rsquo;ve answered those 6, you should feel like you have too much to say. Then
            you start writing.
          </p>

          <ArticleH2>Optimize for AOV, not CPL</ArticleH2>
          <p>
            Most people optimize for cost per lead because it&rsquo;s the first number that comes
            back. But if you optimize for lowest CPL, Meta will cater toward the people who are
            easiest to get their email, not necessarily the ones who will buy your product.
          </p>
          <p>
            We ran the same creative in two campaigns, one optimized for registrations and one for
            purchases. Registrations came back at a $5 CPL and $17 CPL for the second.
          </p>
          <Callout>
            The $5 leads ended up worth on average $20 each. The $17 leads ended up worth on average
            $189.
          </Callout>
          <p>
            Two caveats to consider: you need enough purchase volume for the platform to learn on,
            and you need something above the free registration worth optimizing toward. Ours was the
            book pre-order, and above that a roughly $300 order for 15 copies that unlocked two of
            Alex&rsquo;s internal handbooks.
          </p>

          <ArticleH2>Battle test your hooks</ArticleH2>
          <p>
            Instead of writing ads from scratch, we went looking for material that was already
            validated. Some came from Alex&rsquo;s tweets, because a post that performed well shows
            it resonates with the audience we&rsquo;re trying to reach. Others came from $100M Leads
            2 years earlier, from old Gym Launch and Skool ads, from excerpts off the pages of the
            book, and from a sales letter he&rsquo;d mailed to his list that we had him read on
            camera.
          </p>

          <p>
            Not everyone seeing these ads was in the same place. Some had never heard of Alex,
            others had followed him for years. So we sorted the hooks into buckets by who each one
            was for.
          </p>

          <ArticleH3>Secret</ArticleH3>
          <p>
            For someone who has no idea who Alex is and needs a reason to stop scrolling.
          </p>
          <Callout>
            There&rsquo;s a reason I&rsquo;ve never talked about this publicly before&hellip;
            <br />
            <br />
            I&rsquo;ve sworn my entire team to secrecy about this until today&hellip;
          </Callout>

          <ArticleH3>Time invested</ArticleH3>
          <p>Proof, for someone deciding whether this is serious.</p>
          <Callout>
            2,190 days. That&rsquo;s how long I&rsquo;ve been perfecting what I&rsquo;m about to
            show you.
          </Callout>

          <ArticleH3>Question</ArticleH3>
          <p>A pattern interrupt, aimed at someone scrolling past on autopilot.</p>
          <Callout>
            Well this is awkward&hellip; I don&rsquo;t see your email on my list.
            <br />
            <br />
            I mustache you a question.{" "}
            <em className="text-muted">(Alex wearing a big fake mustache)</em>
          </Callout>

          <ArticleH3>Vulnerable</ArticleH3>
          <p>For someone who already knows the work is hard.</p>
          <Callout>
            I lost money on my first two real estate deals, my crypto trades, my bad hires, 6 failed
            businesses and 9 failed partnerships. But the crazy thing about entrepreneurship is that
            you only need to win once.
          </Callout>

          <ArticleH3>Outcome</ArticleH3>
          <p>
            For someone who already knows Alex and just needs the payoff stated plainly.
          </p>
          <Callout>
            You can grow as big as you want, without raising a dime, if you get this one thing
            right.
          </Callout>

          <p>
            If you only write in that last bucket, you cap your own reach, because you&rsquo;re
            talking to people who already know you.
          </p>
                    <p>
            If you only write in that last bucket, you cap your own reach, because you&rsquo;re
            talking to people who already know you.
          </p>
          <p>These are the ones that came out on top:</p>
          <ul>
            <li>I&rsquo;m gonna tell you a secret.</li>
            <li>The rumors are true.</li>
            <li>Quick question, can I get your email address?</li>
            <li>Wanna hear something insane?</li>
            <li>I&rsquo;m throwing a party.</li>
            <li>Business owners, check this out.</li>
            <li>That&rsquo;s weird, I don&rsquo;t see you on the list.</li>
            <li>
              In the next 60 seconds, I&rsquo;m gonna show you the system that&rsquo;s responsible
              for the vast majority of my material wealth.
            </li>
          </ul>
                    <p>
            Notice how almost none of them mention the book. People don&rsquo;t want to buy a book,
            they want to buy an outcome.
          </p>

          <ArticleH2>Kaleidoscope your winners</ArticleH2>
          <p>
            Kaleidoscoping means taking an ad that already won, breaking it into its parts (hook,
            body, CTA), and rebuilding it one change at a time. This is how you can &ldquo;double
            down&rdquo; on your winners.
          </p>
          <p>A few ways to kaleidoscope your ad:</p>

          <ArticleH3>Change the prop, keep the line</ArticleH3>
          <p>
            &ldquo;Wanna hear something insane&rdquo; ran against a data stack, a giant tennis ball,
            a news microphone, a giant purple paper wall, a money bin, and a ping pong table. The
            line shifts slightly with each one, so six props against three versions of the line is
            eighteen ads out of a single idea:
          </p>
          <Callout>
            Wanna hear something insane?
            <br />
            <br />
            You want to hear something completely insane?
            <br />
            <br />
            You guys wanna hear something completely insane?
          </Callout>
          <p>
            &ldquo;That&rsquo;s weird, I don&rsquo;t see you on the list&rdquo; got a clipboard, an
            ancient scroll, and a magnifying glass.
          </p>

          <ArticleH3>Change the line, keep the prop</ArticleH3>
          <p>
            &ldquo;Quick question, what&rsquo;s your email address?&rdquo; won early, so we rewrote
            it a dozen ways before we touched anything else:
          </p>
          <Callout>
            Quick question, what&rsquo;s your email address?
            <br />
            <br />
            Real quick question. What&rsquo;s your email address?
            <br />
            <br />
            Real quick question, what&rsquo;s your email address? Because I wanna send you a
            gazillion dollars of free value.
            <br />
            <br />
            Real quick question, what&rsquo;s your email? And the reason I ask is &rsquo;cause I
            wanna send you a gazillion dollars of free stuff.
          </Callout>
          <p>
            The idea is identical in all of them. What changes is how fast it reaches the
            question, whether a reason comes attached, and the wording. Then we cut each one at 40
            seconds and again at 50.
          </p>

          <ArticleH3>Make the joke bigger</ArticleH3>
          <p>One bit about the book being big turned into a shot list:</p>
          <ul>
            <li>Tiny book, just Alex</li>
            <li>Tiny book, 2 morph suits</li>
            <li>Regular book, just Alex</li>
            <li>Regular book, 2 morph suits</li>
            <li>Giant book, just Alex</li>
            <li>Giant book, 2 morph suits</li>
            <li>Super giant book, stable</li>
            <li>Super giant book, falling over</li>
          </ul>
          <p>That&rsquo;s 8 shots out of one joke. And the script escalated with the prop:</p>
          <Callout>
            &ldquo;This is gonna be my biggest book ever. No, not like that. This is gonna be my
            biggest book.&rdquo;
          </Callout>
          <p>became</p>
          <Callout>
            &ldquo;This is gonna be my biggest book ever. No, not like that. This is gonna be my
            biggest book. Well, not even like that. This is gonna be my biggest book ever. Actually,
            not even like that. This is gonna be my biggest book ever.&rdquo;
          </Callout>

          <ArticleH3>Swap the first line, keep the body</ArticleH3>
          <p>
            Everyone the ad reaches sees the hook, but only the people it convinced ever reach the
            body. So the body burns out far slower than the hook, which makes it the part worth
            keeping when you swap the opening line.
          </p>
          <Callout>
            &ldquo;You should learn how to have an active income before you&rsquo;re trying to learn
            how to make passive income.&rdquo;
            <br />
            <br />
            &ldquo;Poor people stay poor because they try to make a passive income before they
            increase their active income.&rdquo;
          </Callout>
          <p>
            The first one is advice you can take or leave. The second one calls you poor, so you
            read the rest to argue with it.
          </p>
          <Callout>
            &ldquo;Wealth is transferred through education, not assets.&rdquo;
            <br />
            <br />
            &ldquo;The greatest financial gift you can give another human being is not assets, but
            education.&rdquo;
          </Callout>
          <p>
            You agree with the first one and keep scrolling. The second makes you think about a
            specific person.
          </p>
          <Callout>
            &ldquo;For the love of God, if you&rsquo;ve got $10,000 saved up in your bank account,
            don&rsquo;t buy crypto. Invest in you.&rdquo;
            <br />
            <br />
            &ldquo;I&rsquo;ll read you a quote from Charlie Munger. He said, &lsquo;The first
            $100,000 is a b*tch, but you got to do it.&rsquo;&rdquo;
          </Callout>
          <p>
            Same body under both. We pulled Alex out as the source and put Charlie Munger in his
            place, so Alex is agreeing with him instead of telling you himself. That lands easier on
            someone who hasn&rsquo;t decided about Alex yet.
          </p>

          <ArticleH3>Change the camera</ArticleH3>
          <p>
            We shot every ad on a Sony, an iPhone, and selfie style, so we could see whether the
            polished version or the phone version did better.
          </p>

          <ArticleH3>Re-cut it instead of reshooting</ArticleH3>
          <p>
            An editor can pull a dozen more versions out of a winner without anyone going back on
            camera: change the speed, add captions, put a headline over the top, re-crop it.
          </p>

          <ArticleH3>Change who says it</ArticleH3>
          <p>
            We rewrote Alex&rsquo;s winning scripts in third person and had Leila read them. In
            one of them Alex had said &ldquo;I even had to delay it by an extra six months.&rdquo;
            We had Leila say &ldquo;we even had to delay it.&rdquo;
          </p>
          <ArticleH2>TLDR:</ArticleH2>
          <ol>
            <li>Use the 6Ps</li>
            <li>Optimize for AOV, not CPL</li>
            <li>Battle test your hooks</li>
            <li>Kaleidoscope your winners</li>
          </ol>
        </CaseStudyArticle>

        <div className="pb-20">
          <CaseStudyClosing prompt="If you'd like us to help you build the ad system behind a launch like this, you can book a call here." />
        </div>
      </main>
      <Footer />
    </>
  );
}
