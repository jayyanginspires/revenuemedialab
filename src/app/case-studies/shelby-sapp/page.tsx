import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArticleH2,
  Callout,
  CaseStudyArticle,
  CaseStudyClosing,
  CaseStudyHero,
} from "@/components/CaseStudyLayout";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `How we grew Shelby Sapp's LinkedIn to 20,000 followers in under 6 months — ${SITE.name}`,
  description: "How we restarted a dormant LinkedIn account from zero momentum to 20,000 followers.",
};

export default function ShelbySappCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <CaseStudyHero
          headline="How We Grew Shelby Sapp's LinkedIn to 20,000 Followers in Under 6 Months"
          dek="Shelby founded the world's largest all-women remote sales academy. She hadn't posted on LinkedIn in over three years."
          stats={[
            { value: "20,000+", label: "Followers" },
            { value: "<6", label: "Months" },
            { value: "3 Yrs", label: "Dormant Before" },
          ]}
          image={{
            src: "/images/shelby-sapp-case-study.png",
            alt: "LinkedIn post announcing Shelby Sapp's follower growth results.",
            caption: "The post announcing the results.",
          }}
        />

        <CaseStudyArticle>
          <p>We grew Shelby Sapp&apos;s LinkedIn to 20,000 followers in under 6 months. Here&apos;s how.</p>

          <ArticleH2>1/ Reintroduction post</ArticleH2>
          <p>
            Shelby hadn&apos;t posted here in over 3 years, so we had to reintroduce her to the
            LinkedIn world. Who she is, who she helps, and what to expect going forward.
          </p>
          <p>
            These do well because they let you flex your credibility. People know what to expect
            from you, and a reintroduction is easy to comment on, root for, and say congrats to.
          </p>

          <ArticleH2>2/ Value posts</ArticleH2>
          <p>
            We used AI to scrape the top questions her audience was already asking inside her She
            Sells community. Then we turned those questions and pain points into actionable tips.
          </p>

          <ArticleH2>3/ Contrarian takes</ArticleH2>
          <p>
            We&apos;d take a belief her audience holds and argue the other side. One post opened
            with &quot;Broke at 19. Rich at 25.&quot; and told people to stop networking. Another
            called the idea that &quot;money is soulless&quot; the worst advice she&apos;s ever
            heard.
          </p>

          <Callout>More comments = more reach.</Callout>

          <ArticleH2>4/ Personal stories</ArticleH2>
          <p>
            Most people in sales only post about sales. We didn&apos;t. We had Shelby talk about
            her life, her wedding day, her big wins, and stuff outside of work.
          </p>
          <p>People want to work with people they like, and they can&apos;t like you if they don&apos;t know you.</p>

          <ArticleH2>5/ Hooks</ArticleH2>
          <p>
            Your hook is 90% of a post&apos;s performance. We write 3 for every post and pick the
            best one. We call it battle testing.
          </p>

          <ArticleH2>6/ Raw writing style</ArticleH2>
          <p>We write Shelby&apos;s posts like we&apos;re texting a friend. Lowercase and conversational.</p>

          <Callout>stack those flight points girrrrrl.</Callout>

          <p>Read your writing out loud. If it sounds weird, rewrite it.</p>

          <ArticleH2>7/ Repeat what works</ArticleH2>
          <p>
            When a post does better than average, we call it an &quot;outlier.&quot; We schedule
            the post again 90 days later, then rewrite it for 30 days later.
          </p>
          <p>That way we&apos;re always remixing and reposting what already works. Double down, double down, double down.</p>
        </CaseStudyArticle>

        <div className="pb-20">
          <CaseStudyClosing prompt="If you'd like us to help you design a content system that drives qualified leads, you can book a call here." />
        </div>
      </main>
      <Footer />
    </>
  );
}
