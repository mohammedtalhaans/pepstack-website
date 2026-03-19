import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PepStack",
  description: "PepStack Terms of Service. Please read these terms carefully before using our app.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-10"
        >
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: March 20, 2026
        </p>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using PepStack (&quot;the Service&quot;), you agree to be bound
              by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
              you may not access or use the Service. These Terms constitute a legally
              binding agreement between you and PepStack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Description of Service
            </h2>
            <p>
              PepStack is a mobile application that helps users track peptide dosing
              schedules, log bloodwork results, monitor body measurements and symptoms,
              and access AI-powered health insights. The Service is designed as a
              personal tracking and organizational tool for individuals managing
              peptide protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Medical Disclaimer
            </h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-5 text-yellow-200/80">
              <p className="font-semibold text-yellow-200 mb-2">
                Important: PepStack is NOT a medical device and does NOT provide
                medical advice.
              </p>
              <p className="mb-3">
                The Service is intended for informational and tracking purposes only.
                Nothing in PepStack should be construed as professional medical advice,
                diagnosis, or treatment. The AI-powered features provide general
                informational insights and are not a substitute for consultation with
                a qualified healthcare professional.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health
                provider with any questions you may have regarding a medical condition,
                treatment protocol, or medication. Never disregard professional medical
                advice or delay in seeking it because of information provided by
                PepStack.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. User Accounts
            </h2>
            <p className="mb-3">
              To use certain features of the Service, you must create an account. When
              creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password and account credentials</li>
              <li>
                Accept responsibility for all activities that occur under your account
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate these
              Terms or that remain inactive for an extended period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Subscription &amp; Payment
            </h2>

            <h3 className="text-lg font-semibold text-white mb-2">Billing</h3>
            <p className="mb-4">
              PepStack offers both free and premium subscription tiers. Premium
              features require a paid subscription. All payments are processed securely
              through Stripe. By subscribing, you authorize us to charge your selected
              payment method on a recurring basis.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Auto-Renewal
            </h3>
            <p className="mb-4">
              Subscriptions automatically renew at the end of each billing period
              (monthly or annually) unless you cancel before the renewal date. You can
              manage or cancel your subscription at any time through the app settings
              or your app store account.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Refund Policy
            </h3>
            <p>
              Refunds for subscriptions purchased through the App Store or Google Play
              are subject to the respective platform&apos;s refund policies. For
              subscriptions purchased directly through PepStack, we offer a full refund
              within 7 days of the initial purchase. After this period, refunds are
              provided at our discretion. To request a refund, contact{" "}
              <a
                href="mailto:support@pepstack.app"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                support@pepstack.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Acceptable Use
            </h2>
            <p className="mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Violate any applicable local, state, national, or international law or
                regulation
              </li>
              <li>
                Upload, share, or distribute content that is harmful, threatening,
                abusive, defamatory, or otherwise objectionable
              </li>
              <li>
                Attempt to gain unauthorized access to the Service, other user
                accounts, or our systems and networks
              </li>
              <li>
                Use the Service to distribute unsolicited promotional content or spam
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the Service
              </li>
              <li>
                Use automated tools, bots, or scrapers to access the Service without
                our written consent
              </li>
              <li>
                Share dosing advice or medical guidance with other users through any
                feature of the Service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Intellectual Property
            </h2>
            <p className="mb-4">
              The Service, including its design, source code, features, content, logos,
              and trademarks, is the exclusive property of PepStack and is protected by
              copyright, trademark, and other intellectual property laws. You may not
              copy, modify, distribute, sell, or lease any part of the Service without
              our prior written consent.
            </p>
            <p>
              You retain ownership of the data and content you input into PepStack. By
              using the Service, you grant us a limited license to process, store, and
              display your content solely for the purpose of providing the Service to
              you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Data &amp; Privacy
            </h2>
            <p>
              Your use of the Service is also governed by our{" "}
              <Link
                href="/privacy"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </Link>
              , which describes how we collect, use, store, and protect your personal
              information and health data. By using the Service, you consent to the
              practices described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, PepStack and its
              officers, directors, employees, and agents shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of profits, data, or health outcomes,
              arising from your use of or inability to use the Service.
            </p>
            <p>
              In no event shall our total liability to you exceed the amount you have
              paid to PepStack in the twelve (12) months preceding the claim. This
              limitation applies regardless of the legal theory on which the claim is
              based.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
              any kind, whether express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Service will be
              uninterrupted, error-free, or completely secure, or that any health
              insights or data presented will be accurate or complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. Termination
            </h2>
            <p className="mb-4">
              We may suspend or terminate your access to the Service at any time, with
              or without cause, and with or without notice. Upon termination, your
              right to use the Service ceases immediately. You may delete your account
              at any time through the app settings.
            </p>
            <p>
              Upon account deletion, we will remove your personal data in accordance
              with our Privacy Policy. Provisions of these Terms that by their nature
              should survive termination shall remain in effect, including ownership
              provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the
              laws of the United States, without regard to conflict of law principles.
              Any disputes arising from or relating to these Terms or the Service shall
              be resolved through binding arbitration in accordance with the rules of
              the American Arbitration Association, unless you opt out of arbitration
              within 30 days of accepting these Terms by contacting{" "}
              <a
                href="mailto:support@pepstack.app"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                support@pepstack.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              13. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make
              material changes, we will notify you via email or through a prominent
              notice within the app at least 14 days before the changes take effect.
              Your continued use of the Service after the effective date constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              14. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact
              us at:
            </p>
            <div className="mt-3">
              <p className="text-white font-medium">PepStack</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@pepstack.app"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  support@pepstack.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
