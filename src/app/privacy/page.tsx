import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalLayout";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description: "What we collect, why, and how to get it deleted.",
};

export default function Privacy() {
  return (
    <>
      <LegalPage title="Privacy Policy" updated="2 September 2026">
        <p>
          Revenue Media Lab operates revenuemedialab.com. This page explains what we collect, why,
          and how to have it removed. Short version: we collect what you type into our application
          form, we use it to decide whether we can help you and to contact you about it, and we
          don&rsquo;t sell it.
        </p>

        <h2>What we collect</h2>
        <p>When you submit the application form, we collect what you enter:</p>
        <ul>
          <li>Your name</li>
          <li>Your business email address</li>
          <li>Your phone number</li>
          <li>What you tell us about your business, its revenue range, and your bottleneck</li>
        </ul>
        <p>
          We don&rsquo;t ask for payment details anywhere on this site, and we don&rsquo;t collect
          any special categories of personal data.
        </p>

        <h2>Why we collect it</h2>
        <p>
          To assess whether your business is a fit for our service, to contact you about your
          application, and to prepare for a call if we book one. If you also opt in to our email
          list, we use your email to send you that.
        </p>

        <h2>Who we share it with</h2>
        <p>We use a small number of service providers to run this site and process applications:</p>
        <ul>
          <li>
            <strong>Vercel</strong> — hosting. Serves this site and processes requests to it.
          </li>
          <li>
            <strong>beehiiv</strong> — email. Stores your address if you subscribe, and sends the
            emails.
          </li>
          <li>
            <strong>Calendly</strong> — scheduling. Used only if you book a call, and subject to
            Calendly&rsquo;s own privacy policy.
          </li>
          <li>
            <strong>Automation and workflow tools</strong> — used to route applications to our
            team so we can respond.
          </li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share it with advertisers.
        </p>

        <h2>Cookies and tracking</h2>
        <p>
          We do not currently run any analytics, advertising pixels, or third-party tracking
          scripts on this site. If that changes, we&rsquo;ll update this page. Pages you reach
          through third parties, such as a Calendly booking page, are governed by their policies.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep applications for as long as we may reasonably need them for the enquiry, and
          email subscriptions until you unsubscribe. Every email we send has an unsubscribe link.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, export, or delete
          the personal information we hold about you, and to object to how we use it. Email us and
          we&rsquo;ll action it.
        </p>

        <h2>Contact</h2>
        <p>
          For anything on this page, including deletion requests, email{" "}
          <a href="mailto:jay@revenuemedialab.com">jay@revenuemedialab.com</a>.
        </p>
      </LegalPage>
      <Footer />
    </>
  );
}
