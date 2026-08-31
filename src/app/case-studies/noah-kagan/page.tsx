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
  title: `How we helped Noah Kagan gain 35,000+ email subscribers in 6 months — ${SITE.name}`,
  description: "How we built a content multiplication system for Noah Kagan's Million Dollar Weekend launch.",
};

export default function NoahKaganCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <CaseStudyHero
          headline="How We Helped Noah Kagan Gain 35,000+ Active Email Subscribers in 6 Months"
          dek={
            <>
              We ran social and email content for Noah Kagan while he launched{" "}
              <em>Million Dollar Weekend</em>.
            </>
          }
          stats={[
            { value: "35,000+", label: "Email Subscribers" },
            { value: "75,000", label: "New Followers" },
            { value: "6", label: "Months" },
            { value: "100,000+", label: "Copies Sold" },
          ]}
          image={{
            src: "/images/noah-kagan-case-study.jpg",
            alt: "Jay Yang and Noah Kagan holding copies of Million Dollar Weekend at the book launch.",
            caption: "At the Million Dollar Weekend launch.",
          }}
        />

        <CaseStudyArticle>
          <p>
            In 6 months we added 35,000 active email subscribers and 75,000 new followers across
            his accounts. Million Dollar Weekend became a New York Times bestseller and crossed
            100,000 copies.
          </p>
          <p>
            He was running AppSumo at the same time, so we only got about an hour of his time each
            week. Everything we published had to come out of that hour.
          </p>
          <p>
            So we built a content multiplication system. A CMS is a process to take one idea and
            turn it into multiple pieces of content across multiple mediums.
          </p>
          <p>
            The top creators are all prolific. They put out more good content than everyone else,
            and usually that&apos;s because they have a big team behind them spending six figures
            a month. We didn&apos;t have that.
          </p>

          <ArticleH2>Find the content type that works</ArticleH2>
          <p>
            The goal was to grow the newsletter ahead of the book launch, so we worked backwards
            from that into numbers we could actually track.
          </p>
          <p>
            Then we tested a lot of different content types against it. The ones that drove the
            most email subscribers were Noah&apos;s personal founder stories. Working with Mark
            Zuckerberg, building AppSumo, career advice from someone who&apos;d been doing this
            for 20 years.
          </p>

          <Callout>
            <strong>The Name Test.</strong> Cover your profile picture and your name and just read
            the hook. Could someone tell it was you who wrote it? If they can&apos;t, your content
            is too generic. Your content should be one-of-one.
          </Callout>

          <p>Here&apos;s a post we wrote with Noah:</p>

          <Callout>
            I was employee #30 at Facebook. Then I got fired. Now I&apos;m the CEO of a $100
            million company. 10 non-obvious lessons I learned from working directly under Mark
            Zuckerberg:
          </Callout>

          <p>
            &quot;I was employee number 30 at Facebook&quot; is the credibility. &quot;$100
            million company&quot; is the benefit. &quot;10 lessons I learned&quot; is the
            relevance, because anyone can learn from lessons. And the framing lowers the
            perceived effort, because it would take you years to learn those lessons on your own
            and here they are in one post.
          </p>
          <p>
            Cover the name on that and you still know who wrote it. The more of your personal
            story and credibility you weave into your hooks, the more your content stands out,
            and the harder it is for anyone else to copy what you&apos;re doing.
          </p>
          <p>So we stopped spreading ourselves across everything else and went where only Noah could go.</p>

          <ArticleH2>Build a Hall of Fame</ArticleH2>
          <p>
            Every week we ran T3B3. What were the top 3 pieces of content? What were the bottom
            3? How do we double down on the ones that did well and cut what didn&apos;t?
          </p>
          <p>
            The top 10% of everything Noah had ever posted went into a doc we called the Hall of
            Fame. What you rank them by depends on what you&apos;re optimizing for.
          </p>
          <p>We saved the hooks separately from the posts, which matters later.</p>
          <p>
            We kept a second list of Noah&apos;s core ideas, the things he actually believes.
            There were 17 of them. A few:
          </p>
          <ul>
            <li>NOW, not HOW</li>
            <li>Test, then invest</li>
            <li>Persistence beats resistance</li>
            <li>You only need to be right once to win</li>
            <li>The best marketing is a great product</li>
            <li>Never forget the taco (be weird, be you)</li>
          </ul>

          <ArticleH2>Say the same thing in a bunch of different ways</ArticleH2>
          <p>
            Once we had our top posts, it was about figuring out how to say the same thing in a
            bunch of different ways. We call this the 3Rs.
          </p>

          <ArticleH3>1/ Repost</ArticleH3>
          <p>We repost all of our top posts every 90 days.</p>
          <p>
            People get weird about reposting. But less than half your audience saw it the first
            time, and the ones who did need to be reminded more than they need to be taught.
          </p>
          <p>Change the hook, change the image, modify the body, and post it again.</p>

          <ArticleH3>2/ Repurpose</ArticleH3>
          <p>
            We&apos;d test an idea as a tweet first. If it worked, we&apos;d write it up as a
            longer post. Then Noah would record a podcast on it. We&apos;d take the podcast,
            transcribe it, and write the transcript into the newsletter. The newsletter became a
            Twitter thread. The thread became a LinkedIn post.
          </p>
          <p>Noah only had to record once a week. Everything else came out of that one recording.</p>
          <p>Then we ran 3 CTAs around every newsletter:</p>
          <ul>
            <li>
              <strong>Pre-CTA</strong> the day before: &quot;tomorrow we&apos;ll talk about X.&quot;
            </li>
            <li>
              <strong>CTA</strong> the day it went out: &quot;I just talked about this.&quot;
            </li>
            <li>
              <strong>Post-CTA</strong> the day after: &quot;yesterday I talked about this.&quot;
            </li>
          </ul>

          <ArticleH3>3/ Remix</ArticleH3>
          <p>Remixing is taking two things that already worked and combining them into one new post.</p>
          <p>
            Every post has 2 jobs. The hook has to stop someone, and the body has to land. Most
            posts only do one of them well. So when you have a post where the idea landed but not
            many people saw it, and a hook from somewhere else that pulled a lot of people in, you
            put the hook on the post and both halves are already proven.
          </p>
          <p>How we ran it:</p>
          <ol>
            <li>Find your outliers</li>
            <li>Collect your best hooks in their own file, separate from your best posts</li>
            <li>Put the hooks on the posts</li>
          </ol>
          <p>A remix can beat both of the posts it came from.</p>
        </CaseStudyArticle>

        <div className="pb-20">
          <CaseStudyClosing prompt="If you'd like us to help you design a content multiplication system that drives qualified leads, you can book a call here." />
        </div>
      </main>
      <Footer />
    </>
  );
}
