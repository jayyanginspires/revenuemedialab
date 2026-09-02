import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalLayout";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Terms of Use — ${SITE.name}`,
  description: "The terms that apply to using this website.",
};

export default function Terms() {
  return (
    <>
      <LegalPage title="Terms of Use" updated="2 September 2026">
        <p>
          These terms apply to revenuemedialab.com. By using the site you accept them. They cover
          the website only. Any engagement we enter into is governed by its own separate agreement.
        </p>

        <h2>What this site is</h2>
        <p>
          A marketing website. It describes what we do, shows examples of past work, and lets you
          apply to work with us. Submitting the application form is not an agreement, and
          doesn&rsquo;t oblige either of us to anything.
        </p>

        <h2>Results and examples</h2>
        <p>
          Case studies and figures on this site describe work we did for specific clients under
          their specific conditions. They are not typical, not guaranteed, and not a projection of
          what your business would achieve. Nothing here is a promise of income, revenue, or
          growth.
        </p>

        <h2>Accuracy</h2>
        <p>
          We keep this site accurate, but we don&rsquo;t warrant that it is complete or current,
          and we may change it at any time. Nothing on it is professional, legal, or financial
          advice.
        </p>

        <h2>Our content</h2>
        <p>
          The writing, design, frameworks, and images on this site belong to us or are used with
          permission. Client names, logos, and likenesses belong to those clients. You&rsquo;re
          welcome to quote or link to what&rsquo;s here with attribution. Don&rsquo;t republish it
          wholesale as your own.
        </p>

        <h2>Using the site</h2>
        <p>
          Don&rsquo;t submit false information, someone else&rsquo;s personal details, or anything
          unlawful. Don&rsquo;t attempt to disrupt the site or access parts of it you
          haven&rsquo;t been given access to.
        </p>

        <h2>Liability</h2>
        <p>
          The site is provided as is. To the extent the law allows, we aren&rsquo;t liable for loss
          arising from your use of it or reliance on anything published here.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="mailto:jay@revenuemedialab.com">jay@revenuemedialab.com</a>.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
