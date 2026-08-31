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
  TableOfContents,
  TryThis,
} from "@/components/CaseStudyLayout";
import { WorkbookCapture } from "@/components/WorkbookCapture";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `The Marketing Philosophy Behind Everything I Do — ${SITE.name}`,
  description:
    "Six years of marketing advice: current vs. future demand, the PTL framework for building brand, the content multiplication system, and how to capture demand with ads.",
};

export default function MarketingMiniCourse() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <CaseStudyHero
          eyebrow="Free mini course"
          headline="The Marketing Philosophy Behind Everything I Do"
          dek={
            <>
              The marketing philosophy behind everything I do. Six years of advice, for clients and
              for myself.
            </>
          }
          stats={[
            { value: "NYT", label: "Bestseller" },
            { value: "Guinness", label: "World Record" },
            { value: "500k+", label: "Followers" },
            { value: "6 yrs", label: "Of Advice" },
          ]}
        />

        <CaseStudyArticle>
          <p>
            I&rsquo;ve helped launch a book to become a New York Times best-seller. I&rsquo;ve
            helped another break a Guinness World Record for the fastest-selling non-fiction book in
            under 24 hours. My own books have become Amazon best-sellers.
          </p>
          <p>
            I&rsquo;ve worked behind the scenes with some of the biggest personal brands in
            business, and grown my own audience to over 500,000 followers.
          </p>
          <p>
            I only say all that for people who don&rsquo;t know who I am or why they should keep
            reading. Because in this essay, I&rsquo;m going to share 6 years of marketing advice:
            the philosophy behind everything I do, for clients and for myself.
          </p>

          <TableOfContents
            minutes={13}
            items={[
              { id: "what-is-marketing", label: "What is marketing?" },
              { id: "two-types-of-demand", label: "Future demand vs. current demand" },
              { id: "create-future-demand", label: "How to create future demand" },
              { id: "why-brand-matters", label: "Why brand matters" },
              { id: "content-multiplication", label: "The content multiplication system" },
              { id: "capture-current-demand", label: "How to capture current demand" },
              { id: "how-they-play-together", label: "How they play together" },
              { id: "hot-take-on-branding", label: "A hot take on branding" },
              { id: "apply-this", label: "If you want to apply this to your own business" },
              { id: "recap", label: "Recap" },
            ]}
          />

          <ArticleH2 id="what-is-marketing">What is marketing?</ArticleH2>
          <p>
            Marketing is the process of reaching and converting customers. If you can get in front
            of the right people, and then convince them to buy your thing, you win.
          </p>
          <p>
            Why is marketing important? When you have more demand than supply, it&rsquo;s hard not
            to win.
          </p>
          <p>
            The mental model I like to give people is this: imagine I tripled the number of leads
            coming into your business. What would happen? If you&rsquo;re a decent business owner,
            your business would probably grow.
          </p>
          <p>
            In an age where AI can create pretty much anything, the ability to create distribution,
            to make yourself oversubscribed with demand, is only getting more powerful.
          </p>
          <p>When you do marketing right:</p>
          <ul>
            <li>Strangers DM you asking about a problem you posted about weeks ago</li>
            <li>Prospects bring up your posts on calls before you even pitch</li>
            <li>Other founders start asking how you&rsquo;re getting inbound</li>
            <li>Your best customers found you through a post, not a referral</li>
          </ul>
          <p>
            So that&rsquo;s step one: understanding what marketing is. Step two is realizing there
            are actually 2 types of demand.
          </p>

          <ArticleH2 id="two-types-of-demand">Future demand vs. current demand</ArticleH2>
          <p>
            What&rsquo;s the likelihood you buy a new car in the next 2 weeks? Probably low. What
            about in the next 20 years? Probably a lot higher.
          </p>
          <p>
            My goal isn&rsquo;t to right hook you right now. It&rsquo;s to increase your affinity to
            my brand so that when you enter the buying window, you think of my brand first.
          </p>
          <p>
            There are 2 types of demand: current demand and future demand. Current demand is getting
            you to use our product or service now. Future demand is the amount of possible demand
            your brand could have in the future.
          </p>
          <p>
            Most people view marketing as capturing current demand, because it&rsquo;s easy to track
            and attribute, so we allocate more of our time there. Traditional marketers call this
            direct response marketing.
          </p>
          <Callout>
            Great marketers view marketing as capturing current demand and creating future demand.
            Not everything that can be measured matters. Not everything that matters can be
            measured.
          </Callout>
          <p>
            Let&rsquo;s talk about creating future demand first, then capturing current demand.
          </p>

          <ArticleH2 id="create-future-demand">How to create future demand</ArticleH2>
          <p>Future demand is the byproduct of brand.</p>
          <p>
            Brand is the association between two things: one you know about, and one you don&rsquo;t
            know about yet. Branding is teaching. If I point at a tree and say &ldquo;tree,&rdquo;
            kids will associate the tree with the sound &ldquo;tree.&rdquo;
          </p>
          <p>
            Bad branding is when your audience makes the associations for you. Good branding is when
            your audience associates you with the things you want to be associated with. So ask
            yourself: what do you need to be associated with for your audience to want to buy from
            you?
          </p>
          <p>
            My favorite way to build these associations is a framework I call PTL: Power, Trust,
            Likeness.
          </p>

          <ArticleH3>Power</ArticleH3>
          <p>
            Power is your ability to affect change in the world, showing that you have what others
            want. That could be money, cars, a mansion. It could be your network, your skill set,
            your results.
          </p>
          <p>
            Power is relative. A bartender has power in the bar, because they control who gets a
            drink and how fast. Once they step outside the bar, that power is gone.
          </p>
          <p>
            A famous investor has power in a meeting with founders, because the founders want their
            money. But that same investor has low power compared to the coach at a kids&rsquo;
            soccer game.
          </p>
          <p>You can show power 2 main ways:</p>
          <ul>
            <li>
              Verbally (&ldquo;Last year my portfolio did $250m in revenue&rdquo;)
            </li>
            <li>Visually (a picture of your big building)</li>
          </ul>
          <TryThis>What do your customers want, both internally and externally?</TryThis>

          <ArticleH3>Trust</ArticleH3>
          <p>Trust is the belief that following your direction will produce a good result.</p>
          <p>
            Trust comes from evidence. Belief without evidence is faith. Trust is built when I tell
            you to do something, you do it, and a good thing happens. Each time that happens, the
            likelihood you comply with me in the future goes up.
          </p>
          <p>
            Parents have high trust with their kids because they&rsquo;ve spent years giving
            directions that produced good results. Eat your vegetables and you&rsquo;ll grow. Wear
            sunscreen and you won&rsquo;t burn. Don&rsquo;t talk to strangers and you&rsquo;ll stay
            safe.
          </p>
          <p>
            Martha Stewart has high trust with her audience because for decades she&rsquo;s given
            step-by-step directions, her recipes, that produced good results in their kitchens. If
            you follow her cake recipe and it comes out right, the next time she shares a recipe,
            you&rsquo;ll go grab your flour.
          </p>
          <TryThis>
            What step-by-step directions can you give your customers to get positive results? For
            example:
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Use these 50 hooks in your content</li>
              <li>Read this book on storytelling</li>
              <li>Use this tool to automate posting your content</li>
            </ul>
          </TryThis>

          <ArticleH3>Likeness</ArticleH3>
          <p>Likeness is how similar you are to the person you&rsquo;re trying to influence.</p>
          <p>
            In psychology, this is called the in-group effect. An in-group is a social group an
            individual identifies with. People show favoritism, trust, and empathy toward members of
            their in-group, and skepticism or bias toward people outside it. That similarity shows
            up 2 ways:
          </p>
          <ul>
            <li>Physical attributes (how someone looks, how they dress, their age)</li>
            <li>
              Values (what they believe, where they&rsquo;re from, what they care about, how they
              speak)
            </li>
          </ul>
          <TryThis>
            What are your customers&rsquo; internal and external attributes? For example:
            ex-athletes who wear athletic clothing, mid-30s to 40s, work a 9-to-5, want to get back
            in shape, want to feel athletic and powerful, and want to take agency over their life.
          </TryThis>
          <p>
            To build an influential brand, demonstrate those 3 things, power, trust, and likeness,
            over and over and over again.
          </p>

          <ArticleH3>A note on going viral</ArticleH3>
          <p>
            Going viral does matter. People often say you only need 1,000 true fans to make a living
            online.
          </p>
          <p>
            Sure, but your first 1,000 followers are not going to be your first 1,000 true fans.
            You&rsquo;re probably going to have to get to 10,000 or 100,000 followers and nurture
            them into fans.
          </p>
          <p>There are 2 approaches:</p>
          <ul>
            <li>
              Stay super niche, only talk about one thing, and become known for that one thing, only
              reaching the people who are interested in it right now
            </li>
            <li>
              Be yourself, reach many people, educate them about your interests, raise their
              awareness level, and turn them into customers over time
            </li>
          </ul>
          <p>
            Personally, I&rsquo;d rather build cities than one skyscraper. I think you have more
            fun, can do it for longer, and build a more durable brand.
          </p>

          <WorkbookCapture />

          <ArticleH2 id="why-brand-matters">Why brand matters</ArticleH2>
          <p>
            We all know a business survives because of one equation: LTV to CAC. Basically, how much
            does it cost to acquire a customer, and how much do you make from them over their
            lifetime? The best businesses have a high LTV:CAC ratio.
          </p>
          <p>You know what increases that ratio? Brand.</p>
          <p>On the CAC side:</p>
          <ul>
            <li>
              Increases the number of leads you get (one piece of content can reach millions of
              people)
            </li>
            <li>
              Increases the conversion rate of those leads (they feel like they already know, like,
              and trust you, they&rsquo;re pre-sold)
            </li>
          </ul>
          <p>On the LTV side:</p>
          <ul>
            <li>
              Customers are willing to pay more, buy more frequently, and stay longer (they give you
              the benefit of the doubt)
            </li>
          </ul>
          <p>
            And here&rsquo;s a 201-level benefit for the more advanced business owners: brand also
            improves your LTGPPE-to-CAT ratio, your lifetime gross profit per employee versus your
            cost to acquire talent.
          </p>
          <ul>
            <li>You get more talent</li>
            <li>Higher-quality talent</li>
            <li>For cheaper</li>
            <li>That stay longer</li>
            <li>And are already pre-sold into your beliefs and values</li>
          </ul>

          <ArticleH2 id="content-multiplication">The content multiplication system</ArticleH2>
          <p>
            What do all the top personal brands have in common? They&rsquo;re prolific.
          </p>
          <p>
            I learned this lesson from Noah Kagan. When I was 17, I worked as his head of content.
            He&rsquo;d always repeat this phrase: test, then invest.
          </p>
          <p>
            Our north star goal was growing his email newsletter ahead of his book launch. So we
            asked: of the platforms we&rsquo;re posting on, which one is driving the most email
            subscribers? Why don&rsquo;t we double down on that?
          </p>
          <p>
            On X, of the content we&rsquo;re posting, which formats are driving the most email
            subscribers? Why don&rsquo;t we double down on that?
          </p>
          <p>
            And if we&rsquo;re going to double down, how do we test before we invest? We&rsquo;d
            post tweets, see what worked, then expand the winners into Twitter threads.
          </p>
          <p>
            That&rsquo;s how the content multiplication system was born. This is how I still run my
            content today:
          </p>
          <ol>
            <li>I tweet 4 to 10 times a day (idea playground)</li>
            <li>My AI assistant Stanley flags which tweets outperform our average</li>
            <li>
              I take that tweet and find 4 to 5 others like it and post them as an Instagram carousel
            </li>
            <li>
              I voice-note it, clean it up, and post it as a long-form article or LinkedIn post
            </li>
            <li>If that article does well, I clean it up further and send it as a newsletter</li>
            <li>If that newsletter does well, I turn it into a YouTube video</li>
            <li>I take the audio and put it on Spotify and Apple Podcasts</li>
          </ol>
          <p>
            I also repost my bangers every 90 days, and rewrite or remix them with other bangers to
            create new mega-bangers:
          </p>
          <ul>
            <li>Same idea, new format</li>
            <li>New idea, same format</li>
          </ul>
          <p>
            By year 5 or 6, you&rsquo;re mostly playing your best hits, just like singers do. Now you
            have a compounding machine, and people call you lucky.
          </p>
          <p>The way to do this:</p>
          <ul>
            <li>Hall of fame</li>
            <li>Repost</li>
            <li>Remix</li>
            <li>Repurpose</li>
          </ul>
          <p>
            If you master this skill, the world is yours. But making content is only half the
            equation. Now let&rsquo;s talk about how to get paid today, how to capture current
            demand.
          </p>

          <ArticleH2 id="capture-current-demand">How to capture current demand</ArticleH2>
          <p>
            Organic content is great for creating future demand and getting people aware of you.
            Direct response, or ads, is where you right hook your audience.
          </p>
          <p>
            Organic content widens the outer circle, the number of people who are aware of you. Paid
            ads widen the inner circle, the number of people who actually buy from you.
          </p>
          <p>
            The goal of your content is to educate your audience about a problem they may have. The
            goal of your ads is to speak to the people who already have that problem.
          </p>
          <p>
            When you write ads, talk more about pain aversion than promise. If you can articulate
            someone&rsquo;s pain better than they can, they&rsquo;ll believe you have the ability to
            solve it. Focus on their pain, not your pitch.
          </p>
          <p>
            Here&rsquo;s a pro tip: some of the best ads I&rsquo;ve ever produced came from
            downloading all the sales calls of customers who bought our product and using AI to
            analyze why they bought. Then we used their exact words and said them back to the
            customer in the ads.
          </p>
          <p>So if they bought because they wanted:</p>
          <ul>
            <li>More freedom to travel the world</li>
            <li>A career with uncapped upside</li>
            <li>More flexibility to be with their kids</li>
          </ul>
          <p>Then we&rsquo;d say those things back to them in the ads:</p>
          <Callout>
            &ldquo;Are you a woman who wants more freedom to travel the world?&rdquo;
            <br />
            <br />
            &ldquo;Are you tired of being overworked and underpaid, and want to finally be paid for
            your hard work?&rdquo;
            <br />
            <br />
            &ldquo;Have you ever felt a little guilty for having to be at work while your kids get
            raised by a nanny?&rdquo;
          </Callout>
          <p>
            That&rsquo;s the empathy map: pulling the exact language your customers already use and
            mirroring it back to them.
          </p>
          <p>
            Hooks are the 80/20 of the ad. Battle-test your hooks by recording multiple, then
            kaleidoscoping them with a body. One tip we&rsquo;ve found: specificity (like &ldquo;$1m
            a year&rdquo;) plus scarcity (like &ldquo;invite to HQ for a private workshop&rdquo;)
            wins.
          </p>
          <p>Where do winning hooks come from?</p>
          <ul>
            <li>Your previous ads</li>
            <li>Your free content</li>
            <li>Other people&rsquo;s ads</li>
            <li>Other people&rsquo;s free content</li>
            <li>Platform-specific ad libraries</li>
          </ul>
          <p>
            The body of the ad, what I call the meat, usually falls into one of 3 buckets:
          </p>
          <ul>
            <li>
              Testimonial ads (podcast style, parade of proof, lifecycle ad, raw testimonial,
              walk-and-talk rant style)
            </li>
            <li>Education ads (like whiteboard explainer ads)</li>
            <li>Story ads (lifestyle ads and straight storytelling)</li>
          </ul>
          <p>And the CTA needs to answer:</p>
          <ul>
            <li>What to do</li>
            <li>How to do it</li>
            <li>When to do it</li>
            <li>What they get for doing it</li>
            <li>What happens next (optional)</li>
          </ul>

          <ArticleH2 id="how-they-play-together">How they play together</ArticleH2>
          <p>
            Brand makes the circle bigger. Direct response converts the 1%. It&rsquo;s no longer
            organic versus paid. It&rsquo;s explore with organic, exploit with paid.
          </p>
          <p>
            My own content strategy comes down to finding underpriced opportunities. Sahil was first
            to Twitter threads. Hormozi was first to reels. Substack has notes. Right now, I&rsquo;m
            treating LinkedIn like Twitter, posting 3 times a day, because the format is underpriced
            there.
          </p>

          <ArticleH2 id="hot-take-on-branding">A hot take on branding</ArticleH2>
          <p>
            I&rsquo;ve been told I need to make my visual background more memorable, that I should
            wear the same color shirt so people recognize me. Those hacks and gimmicks are not
            branding. They&rsquo;re easy to do, and easy to &ldquo;deconstruct&rdquo; into breakdown
            videos.
          </p>
          <p>
            But Hormozi isn&rsquo;t Hormozi because of his nose strips or his flannels. His audience
            cares about those details because they feel deeply influenced by him. How? Power, trust,
            likeness.
          </p>

          <ArticleH2 id="apply-this">If you want to apply this to your own business</ArticleH2>
          <p>A few questions worth sitting with:</p>
          <ul>
            <li>If I tripled your leads, what would happen?</li>
            <li>What do you need to be associated with?</li>
            <li>
              How can you demonstrate power? What does your audience want, internally and
              externally?
            </li>
            <li>
              How can you demonstrate trust? What step-by-step directions can you give them?
            </li>
            <li>
              How can you demonstrate likeness? What are their internal and external attributes?
            </li>
            <li>How are you going to leverage one piece of content into many?</li>
            <li>What&rsquo;s in your hall of fame?</li>
            <li>
              Have you transcribed your sales calls to find out why people actually buy?
            </li>
            <li>Have you built an empathy map?</li>
            <li>What are your winning hooks?</li>
            <li>What&rsquo;s an underpriced opportunity you could be first to?</li>
          </ul>

          <ArticleH2 id="recap">Recap</ArticleH2>
          <p>
            There are 2 types of demand: current and future. To create future demand, demonstrate
            power, trust, and likeness. Brand improves your LTV to CAC. Use the content
            multiplication system to be prolific. Run ads that target pain to capture current
            demand.
          </p>
          <p>This is how you win in marketing in 2027 and beyond.</p>
          <WorkbookCapture heading="Take the workbook with you" />
        </CaseStudyArticle>

        <div className="pb-20">
          <CaseStudyClosing prompt="If you want help dialing in your own marketing systems, speak with my team." />
        </div>
      </main>
      <Footer />
    </>
  );
}
