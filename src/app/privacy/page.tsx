import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PepStack",
  description: "PepStack Privacy Policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: March 20, 2026
        </p>

        <div className="space-y-10 text-slate-400 leading-relaxed">
          <section>
            <p>
              PepStack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use the PepStack mobile application and
              related services (collectively, the &quot;Service&quot;). By using the Service, you
              agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-white mb-2">
              Account Information
            </h3>
            <p className="mb-4">
              When you create an account, we collect your name, email address, and
              authentication credentials. If you sign in via a third-party provider
              (e.g., Apple or Google), we receive basic profile information from that
              provider.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Health &amp; Wellness Data
            </h3>
            <p className="mb-4">
              PepStack allows you to log peptide dosing schedules, bloodwork results,
              body measurements, symptoms, and other health-related information. This
              data is provided voluntarily by you and is essential to the core
              functionality of the Service.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
            <p>
              We automatically collect information about how you interact with the
              Service, including device type, operating system, app version, session
              duration, feature usage, crash reports, and anonymized analytics. This
              data helps us improve the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Service</li>
              <li>
                Personalize your experience, including AI-powered insights and
                recommendations
              </li>
              <li>Process subscriptions and payments</li>
              <li>
                Send transactional communications (e.g., account verification,
                billing receipts)
              </li>
              <li>Respond to support requests and inquiries</li>
              <li>
                Detect, prevent, and address technical issues and security threats
              </li>
              <li>
                Comply with legal obligations and enforce our Terms of Service
              </li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information. We do not use your health data
              for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Data Storage &amp; Security
            </h2>
            <p className="mb-4">
              Your data is stored securely on infrastructure hosted by Supabase, which
              uses enterprise-grade encryption at rest (AES-256) and in transit
              (TLS 1.2+). We implement industry-standard security measures including
              row-level security policies, encrypted backups, and strict access
              controls.
            </p>
            <p>
              While we strive to protect your information, no method of electronic
              storage or transmission is 100% secure. We cannot guarantee absolute
              security, but we are committed to promptly notifying affected users in
              the event of a data breach as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-3">
              We use the following third-party services to operate PepStack:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-white font-medium">Stripe</span> — Payment
                processing. Stripe collects and processes your payment information
                directly. We do not store your full credit card number. Stripe&apos;s
                privacy policy applies to their handling of your data.
              </li>
              <li>
                <span className="text-white font-medium">RevenueCat</span> —
                Subscription management across platforms. RevenueCat processes
                subscription status and purchase history.
              </li>
              <li>
                <span className="text-white font-medium">OpenRouter</span> — AI
                model routing for intelligent features. When you use AI-powered
                features, anonymized or pseudonymized prompts may be sent to
                language model providers via OpenRouter. We minimize personally
                identifiable information in AI requests.
              </li>
            </ul>
            <p className="mt-4">
              Each third-party service is bound by their own privacy policies and data
              processing agreements. We only share the minimum data necessary for each
              service to function.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="mb-3">
              Depending on your location, you may have the following rights regarding
              your personal data:
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Under GDPR (European Economic Area)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <span className="text-white font-medium">Right of Access</span> —
                Request a copy of all personal data we hold about you
              </li>
              <li>
                <span className="text-white font-medium">Right to Rectification</span>{" "}
                — Correct inaccurate or incomplete data
              </li>
              <li>
                <span className="text-white font-medium">Right to Erasure</span> —
                Request deletion of your personal data
              </li>
              <li>
                <span className="text-white font-medium">Right to Portability</span> —
                Receive your data in a structured, machine-readable format
              </li>
              <li>
                <span className="text-white font-medium">
                  Right to Restrict Processing
                </span>{" "}
                — Limit how we use your data
              </li>
              <li>
                <span className="text-white font-medium">Right to Object</span> —
                Object to processing based on legitimate interests
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-2">
              Under CCPA (California)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <span className="text-white font-medium">Right to Know</span> — What
                personal information we collect, use, and share
              </li>
              <li>
                <span className="text-white font-medium">Right to Delete</span> —
                Request deletion of your personal information
              </li>
              <li>
                <span className="text-white font-medium">Right to Opt-Out</span> —
                Opt out of the sale of personal information (we do not sell your
                data)
              </li>
              <li>
                <span className="text-white font-medium">
                  Right to Non-Discrimination
                </span>{" "}
                — We will not discriminate against you for exercising your rights
              </li>
            </ul>

            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:support@pepstack.app"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                support@pepstack.app
              </a>
              . We will respond within 30 days (or sooner as required by law).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Children&apos;s Privacy
            </h2>
            <p>
              PepStack is not intended for use by individuals under the age of 13. We
              do not knowingly collect personal information from children under 13. If
              we become aware that we have inadvertently collected data from a child
              under 13, we will take steps to delete that information promptly. If you
              believe a child under 13 has provided us with personal data, please
              contact us at{" "}
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
              7. Data Retention
            </h2>
            <p>
              We retain your personal data for as long as your account is active or as
              needed to provide the Service. If you delete your account, we will remove
              your personal data within 30 days, except where retention is required by
              law (e.g., financial transaction records). Anonymized and aggregated data
              that cannot be used to identify you may be retained indefinitely for
              analytics and product improvement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. International Data Transfers
            </h2>
            <p>
              Your data may be processed in countries other than your own. When we
              transfer data internationally, we ensure appropriate safeguards are in
              place, including Standard Contractual Clauses (SCCs) or other mechanisms
              recognized by applicable data protection authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will notify you via email or through a prominent
              notice within the app at least 14 days before the changes take effect.
              Your continued use of the Service after the effective date constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your personal
              data, please contact us at:
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
