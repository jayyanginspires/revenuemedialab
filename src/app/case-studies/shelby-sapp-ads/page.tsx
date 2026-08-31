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
  title: `How we applied the 6Ps to Shelby Sapp's Meta ads — ${SITE.name}`,
  description:
    "Running the 6Ps of copyTHINKING on She Sells Academy: sourcing from sales calls, lifestyle positioning, stacked proof, and the filters every batch passes before it ships.",
};

export default function ShelbySappAdsCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <CaseStudyHero
          headline="How We Applied the 6Ps to Shelby Sapp's Meta Ads"
          dek={
            <>
              We write Shelby Sapp&rsquo;s Meta ads. In 6 months they&rsquo;ve done 8 figures in
              profit at an average 3&ndash;4x ROAS.
            </>
          }
          stats={[
            { value: "8 figures", label: "In Profit" },
            { value: "3–4x", label: "Average ROAS" },
            { value: "6", label: "Months" },
            { value: "500k+", label: "Women Trained" },
          ]}
          image={{
            src: "/images/shelby-sapp-ads.jpg",
            alt: "Shelby Sapp, founder of She Sells Academy.",
            caption: "Shelby Sapp, founder of She Sells Academy.",
          }}
        />

        <CaseStudyArticle>
          <p>
            Shelby runs She Sells Academy, the largest women&rsquo;s high-ticket sales training
            company in the world.
          </p>
          <p>
            Before we write a single hook for any client, we run their brand through the 6Ps of
            copyTHINKING:
          </p>
          <ul>
            <li>
              <strong>People.</strong> Who is your offer for?
            </li>
            <li>
              <strong>Positioning.</strong> Why you over anyone else?
            </li>
            <li>
              <strong>Promise.</strong> What do they get?
            </li>
            <li>
              <strong>Proof.</strong> Why trust you?
            </li>
            <li>
              <strong>Priority.</strong> Why act now?
            </li>
            <li>
              <strong>Process.</strong> How does it work?
            </li>
          </ul>
          <p>Here&rsquo;s what we found for Shelby, and how each P turned into ads.</p>

          <ArticleH2>1/ People</ArticleH2>
          <p>
            Shelby&rsquo;s avatar: women 24 to 35 working service jobs like nursing, teaching, HR,
            bartending, and food service. They&rsquo;re overworked and underpaid, watching other
            women online build income and freedom while they clock 40+ hours for a paycheck that
            doesn&rsquo;t move. They want in on the remote income game without starting a business,
            building an audience, or becoming an influencer.
          </p>
          <p>We pull from three sources every batch to write to her.</p>

          <ArticleH3>Sales call transcripts</ArticleH3>
          <p>
            We download every recorded discovery call and student interview and extract three
            things:
          </p>
          <ul>
            <li>Exact objections buyers voice when they hesitate</li>
            <li>Exact reasons they give when they say yes</li>
            <li>Exact language they use to describe their current life</li>
          </ul>
          <p>Then we build two indexes.</p>
          <p>
            <strong>The Objection Index.</strong> Every hesitation buyers voice (time, money,
            self-belief, spouse, past failures), each matched to an ad angle that dismantles it
            before the buyer can raise it.
          </p>
          <p>
            <strong>The Desire Index.</strong> Every reason a buyer gave for saying yes (income
            ceiling, geographic freedom, quitting the nursing shift, buying her mom a house, ending
            the Sunday-night dread), each turned into a hook.
          </p>
          <p>The rule is to write ads in the buyer&rsquo;s exact words.</p>
          <p>Here&rsquo;s an example. A student wrote in her application:</p>
          <Callout>
            &ldquo;I&rsquo;ve been a stay at home mom for a few years and with my kids in school I
            feel like I finally have time to do something for myself and make some damn
            money.&rdquo;
          </Callout>
          <p>The ad hook that came out of it:</p>
          <Callout>
            &ldquo;If you&rsquo;ve been looking for a way to make money around your kids&rsquo;
            schedule without starting a business, you need to hear this.&rdquo;
          </Callout>

          <ArticleH3>Top-performing organic content</ArticleH3>
          <p>
            Every client already has data on what stops their audience. We pull it. For Shelby, we
            sorted every Reel, LinkedIn carousel, and TikTok by views, saves, and shares, and
            reverse-engineered the hook DNA. If a piece of organic stopped 4 million people, the
            same hook stops them in a paid feed.
          </p>
          <p>
            We tagged every top hook by category (aspirational lifestyle, damaging admission,
            reframe, math, first-person confession) and built a library organized by which category
            outperformed which avatar segment. Winning organic ports straight to paid.
          </p>

          <ArticleH3>Viral tweets</ArticleH3>
          <p>
            Money, career-change, remote-work, and creator-economy Twitter produce hook formats
            every week. We adapt the ones that stop a scroll in one feed into ads that stop a scroll
            in another. The result is a running library of viral tweet structures, so we pull from
            proven scaffolding instead of inventing hooks from scratch.
          </p>

          <ArticleH2>2/ Positioning</ArticleH2>
          <p>Shelby&rsquo;s positioning is lifestyle urgency.</p>
          <p>
            She sells lifestyle, with sales as the mechanism to get there. The destination is the
            Porsche, the 10am Pilates class on a Tuesday, the water-view dream home, the trip to
            Positano with the girls.
          </p>
          <p>
            Every hook, body, and CTA leads with the lifestyle. Money is downstream. The clearer and
            more specific we paint the aspirational life, and the more deprived a reader feels for
            not having it yet, the harder the ad converts.
          </p>
          <p>
            <strong>Anti-positioning.</strong> We distance from everything her avatar distrusts:
            Shopify stores, TikTok Shop, UGC, dropshipping, MLM, crypto, hustle-culture
            bro-science. Every ad body rejects those angles by name so the reader knows
            Shelby&rsquo;s opportunity is different.
          </p>

          <ArticleH2>3/ Promise</ArticleH2>
          <p>The promise is the identity the reader steps into.</p>
          <p>
            For Shelby, that identity is a woman making $10&ndash;30k/mo in remote income with
            control over her schedule and where she lives. We can&rsquo;t write that as a dollar
            promise in ads for compliance reasons, so we translate it into the lifestyle it buys:
            Pilates at 10am on a Tuesday instead of a nursing shift, a trip to Positano booked
            without checking her bank account, a mortgage on the water paid from her laptop.
          </p>
          <p>
            The masterclass has its own promise, which we spell out in every CTA:
          </p>
          <ul>
            <li>How to close your first high-ticket deal</li>
            <li>How to land your first offer</li>
            <li>The blueprint from $0 to $10k/mo</li>
          </ul>
          <p>
            Specificity converts. Vague CTAs like &ldquo;come learn with us&rdquo; don&rsquo;t.
          </p>

          <ArticleH2>4/ Proof</ArticleH2>
          <p>Three layers of proof stack inside every long-form Shelby ad.</p>
          <p>
            <strong>Personal.</strong> Shelby went from $8/hr as a barista to running the biggest
            company in her niche.
          </p>
          <p>
            <strong>Student.</strong> Sabrina left teaching to hit $50k/mo. Moms hit $8k in their
            first month. Nurses quit their jobs in 90 days. Women in grad school with $0 to their
            name are stacking $20k months.
          </p>
          <p>
            <strong>Numbers.</strong> Shelby has trained 500,000+ women live and personally mentored
            9,000+ of them. The creator economy is a $480B industry (Goldman Sachs, 2024).
          </p>
          <p>Here&rsquo;s how those layers stack inside one of the top-performing ads.</p>

          <ArticleH3>Hook</ArticleH3>
          <Callout>
            &ldquo;If you have 4 hours free a day, you have enough time to be making an extra $4000
            a month.&rdquo;
          </Callout>
          <ul>
            <li>Time-to-income math that&rsquo;s concrete and immediate</li>
            <li>Uses &ldquo;you&rdquo; as direct address</li>
            <li>
              Sells a math equation the reader can visualize herself doing tonight, instead of a
              business, program, or side hustle
            </li>
          </ul>

          <ArticleH3>Body: explainer archetype</ArticleH3>
          <ul>
            <li>
              Rejects what the audience distrusts: &ldquo;It&rsquo;s not launching a Shopify store,
              it&rsquo;s not UGC, it&rsquo;s not some TikTok side hustle.&rdquo;
            </li>
            <li>Names the skill: &ldquo;It&rsquo;s high ticket sales.&rdquo;</li>
            <li>
              Explains it in plain language: &ldquo;You take the Zoom call with someone who already
              booked. You walk them through the program. You answer their questions. If it&rsquo;s a
              fit, you close the deal.&rdquo;
            </li>
            <li>
              Proof cluster: &ldquo;Moms hitting $8K their first month. Nurses quitting their jobs in
              90 days.&rdquo;
            </li>
            <li>
              Personal credibility: &ldquo;I was broke, fired, scammed&hellip; then I learned this
              one skill.&rdquo;
            </li>
            <li>
              Market opportunity: &ldquo;$300B industry, thousands of coaches need closers right
              now.&rdquo;
            </li>
          </ul>

          <ArticleH3>CTA: specific, with personality</ArticleH3>
          <ul>
            <li>
              Names what they&rsquo;ll learn (&ldquo;close your first high-ticket deal, land your
              dream client&rdquo;)
            </li>
            <li>Anchors the time (&ldquo;Tuesday at 8PM EST&rdquo;)</li>
            <li>
              Uses Shelby&rsquo;s voice (&ldquo;tell your man you&rsquo;re busy Tuesday
              night&rdquo;)
            </li>
          </ul>
          <p>
            Every element traces back to a sales-call objection, a viral organic hook, or a viral
            tweet structure we adapted.
          </p>

          <ArticleH2>5/ Priority</ArticleH2>
          <p>Pain motivates faster than pleasure, so we build in all three levers.</p>
          <p>
            <strong>Scarcity.</strong> The masterclass runs once a week, Tuesday at 8pm EST. Miss it
            and you wait until next Tuesday. For scarcity we use: &ldquo;because of the software
            placement side of the program, spots are limited.&rdquo; It&rsquo;s believable and
            compliance-safe.
          </p>
          <p>
            <strong>Urgency.</strong> Every CTA anchors to the specific date and time.
          </p>
          <p>
            <strong>Cost of inaction.</strong> This is the strongest lever for this avatar.
            She&rsquo;s watching other women build income while she stays in a job that&rsquo;s
            going nowhere. Two lines from our top ads:
          </p>
          <Callout>
            &ldquo;The most dangerous financial plan is assuming your employer will keep paying
            you.&rdquo;
            <br />
            <br />
            &ldquo;The women who learn this in December are booking their first paid calls by
            February. The women still making vision boards in January are six weeks behind before
            they even start.&rdquo;
          </Callout>

          <ArticleH2>6/ Process</ArticleH2>
          <p>
            A good process explains why other solutions fail, creates a believable path, feels
            different from what the buyer&rsquo;s been sold before, and is easy to understand.
          </p>
          <p>
            For Shelby, we explain high-ticket sales in every ad body using the middleman frame.
            It&rsquo;s the most reused explanation across the entire account:
          </p>
          <Callout>
            &ldquo;Successful coaches and creators are selling $3k, $5k, $10k programs. Their inbox
            is flooded, their calendars are full. But they don&rsquo;t have time to take every call.
            That&rsquo;s where you step in. You take the Zoom call with someone who already booked.
            You walk them through the program. You answer their questions. If it&rsquo;s a fit, you
            close the deal. Coach gets a client. Buyer gets what they want. You made a $500&ndash;
            $1,000 commission.&rdquo;
          </Callout>
          <p>Every element in that explanation is:</p>
          <ul>
            <li>Concrete (Zoom, calendar, commission)</li>
            <li>Believable — you&rsquo;re not cold-selling, the buyer already booked</li>
            <li>
              Different from what she&rsquo;s been sold before — she doesn&rsquo;t need to build a
              store or grow an audience
            </li>
            <li>Easy to understand — four short sentences describe the job</li>
          </ul>
          <p>
            That paragraph appears in some form in almost every top-performing Shelby ad
            we&rsquo;ve shipped.
          </p>

          <ArticleH2>The foundation layer</ArticleH2>
          <p>
            Once we&rsquo;ve mapped the 6Ps for a client, we compress the answers into four
            documents that become the single source of truth for every future ad:
          </p>
          <ul>
            <li>
              <strong>Story Bible.</strong> Verified facts, backstory canon, banned claims.
            </li>
            <li>
              <strong>Voice Profile.</strong> Register, syntax, quoted examples.
            </li>
            <li>
              <strong>Strategy Doc.</strong> Avatar, awareness levels, hook rules, CTA rules, offer
              positioning.
            </li>
            <li>
              <strong>Sourcing Playbook.</strong> The sources we pull from for future ads.
            </li>
          </ul>
          <p>
            An edit to one document flows to all four. That&rsquo;s what stops voice drift when we
            scale to volume.
          </p>

          <ArticleH2>The filters</ArticleH2>
          <p>Three filters run on every batch before it ships.</p>

          <ArticleH3>1/ Body rotation</ArticleH3>
          <p>
            We rotate four body archetypes across every batch so no two ads inside a set feel like
            siblings:
          </p>
          <ul>
            <li>
              <strong>Explainer.</strong> Explains what high-ticket sales is in plain language.
            </li>
            <li>
              <strong>Story.</strong> Walks the buyer from where she is to where Shelby&rsquo;s
              students are.
            </li>
            <li>
              <strong>Reframe.</strong> Flips a common belief the buyer holds.
            </li>
            <li>
              <strong>Math.</strong> Puts concrete numbers on hours, income timelines, and lifestyle
              economics.
            </li>
          </ul>
          <p>If a batch has three Story ads and no Math, we rewrite before we ship.</p>

          <ArticleH3>2/ The Kill List</ArticleH3>
          <p>
            A permanent, evolving inventory of AI-sounding patterns and banned brand tells. Every
            draft gets checked against it before it ships. The current Shelby Kill List bans:
          </p>
          <ul>
            <li>Juxtaposition (&ldquo;not X, but Y&rdquo;)</li>
            <li>Corrective fragments (&ldquo;no, no, just&rdquo;)</li>
            <li>Em dashes</li>
            <li>&ldquo;actually,&rdquo; &ldquo;real,&rdquo; &ldquo;really&rdquo; as intensifiers</li>
            <li>
              Fragment stacking (&ldquo;no cold calling, no knocking doors, no meetings&rdquo;)
            </li>
            <li>Metadiscourse announcing what a sentence is about to say</li>
            <li>
              Stock openers (&ldquo;here&rsquo;s the thing,&rdquo; &ldquo;that&rsquo;s the thing
              nobody talks about&rdquo;)
            </li>
            <li>Dramatic single-word endings</li>
            <li>Dollar-sign earnings in hooks (compliance)</li>
            <li>
              Framing that positions Shelby as a closer instead of the coach who teaches closers
            </li>
          </ul>
          <p>
            Every new pattern we catch gets added. The list has almost doubled since month one.
          </p>

          <ArticleH3>3/ The Final Gate</ArticleH3>
          <p>
            Every ad goes through a discrete anti-AI review before delivery. Any line that fails
            gets fixed or killed.
          </p>

          <ArticleH2>How we ran it</ArticleH2>
          <ol>
            <li>Map the client&rsquo;s 6Ps in a strategy session</li>
            <li>Download every recorded sales call, discovery call, and student interview</li>
            <li>Pull the client&rsquo;s top organic content, sorted by views, saves, and shares</li>
            <li>Extract hook DNA from every top piece into a categorized library</li>
            <li>Build the Objection Index and Desire Index from the transcripts</li>
            <li>
              Compress everything into four docs: Story Bible, Voice Profile, Strategy Doc, Sourcing
              Playbook
            </li>
            <li>Plan every batch for variety before writing, rotating body archetypes across the set</li>
            <li>Draft using exact language from the transcripts</li>
            <li>Check every draft against the Kill List</li>
            <li>Run the Final Gate before shipping</li>
            <li>
              Log winners and losers. Update the Kill List. Retemplate winners. Diagnose losers. Run
              it again.
            </li>
          </ol>
          <p>Every batch sharpens the system.</p>
          <p>Every ad we shipped came from something a buyer said out loud.</p>

          <ArticleH2>TLDR:</ArticleH2>
          <ol>
            <li>Write in the buyer&rsquo;s exact words</li>
            <li>Lead with the lifestyle, not the money</li>
            <li>Stack personal, student, and market proof</li>
            <li>Rotate body archetypes so no batch repeats itself</li>
            <li>Run every draft through the Kill List</li>
          </ol>
        </CaseStudyArticle>

        <div className="pb-20">
          <CaseStudyClosing prompt="Ready to run the 6Ps on your brand? Book a call here." />
        </div>
      </main>
      <Footer />
    </>
  );
}
