import LegalLayout, { LegalSection, LP, LL, LBox } from '../components/LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How CrewHire Labs collects, uses, and protects your personal data. Written in plain English."
      lastUpdated="MAY 2026"
    >

      <LBox label="PLAIN ENGLISH SUMMARY">
        We collect your email and brand name when you join the waitlist or sign up. We use it to contact you about your trial and account. We don't sell your data. Ever. We store your brand data securely to power your AI agents. You can ask us to delete everything at any time.
      </LBox>

      <LegalSection title="Who we are">
        <LP>CrewHire Labs is an AI growth platform for D2C brands, operated as an independent startup by Shiladitya Mallick, based in Kolkata, West Bengal, India.</LP>
        <LP>For any privacy-related questions, contact us at:</LP>
        <div className="font-mono text-[12px] text-[#00E87A] bg-[#0D0F12] border border-[#1A1D23] rounded-lg px-4 py-3 space-y-1">
          <p>Email: hello@crewhirelabs.online</p>
          <p>LinkedIn: linkedin.com/in/shiladityamallick</p>
          <p>Instagram: instagram.com/byshiladityamallick</p>
        </div>
      </LegalSection>

      <LegalSection title="What data we collect">
        <LP>We collect only what we need to provide the service. Nothing more.</LP>
        <LL items={[
          'Email address — when you join the waitlist or sign up for a trial',
          'Brand name — optional, when you join the waitlist',
          'Brand data you upload — catalog, FAQs, tone guidelines, policies (used only to train your Brand Brain)',
          'Usage data — how you use the dashboard (anonymous, no personal identification)',
          'IP address and country — for automatic region detection (India vs Global). Not stored permanently.',
          'Payment information — handled entirely by Razorpay (India) or Stripe (Global). We never see your card details.',
        ]} />
      </LegalSection>

      <LegalSection title="How we use your data">
        <LP>We use your data only for these purposes:</LP>
        <LL items={[
          'Sending you your trial access and account information',
          'Powering your AI agents — your brand data is fed only to your own Brand Brain',
          'Sending product updates and important service notices (you can unsubscribe anytime)',
          'Improving our AI models — only in anonymised, aggregated form. Never brand-specific.',
          'Processing payments through Razorpay (India) or Stripe (Global)',
        ]} />
        <LBox>
          We do not sell your data. Ever. We do not use advertising trackers. Your brand data is never used to train other customers' agents.
        </LBox>
      </LegalSection>

      <LegalSection title="DPDP Act 2023 compliance (India)">
        <LP>CrewHire Labs complies with India's Digital Personal Data Protection Act 2023. As a data fiduciary, we:</LP>
        <LL items={[
          'Collect only data that is necessary for the stated purpose',
          'Obtain your explicit consent before collecting personal data',
          'Allow you to withdraw consent at any time by emailing hello@crewhirelabs.online',
          'Delete your personal data within 30 days of a valid erasure request',
          'Notify you within 72 hours if a data breach affects your personal data',
          'Do not process data of anyone under 18 years of age',
          'Retain personal data only as long as necessary to provide the service',
        ]} />
      </LegalSection>

      <LegalSection title="Your rights">
        <LP>You have the following rights over your personal data at any time:</LP>
        <LL items={[
          'Right to access — request a copy of all data we hold about you',
          'Right to erasure — request complete deletion of your account and all data',
          'Right to correction — request correction of any inaccurate information',
          'Right to withdraw consent — stop all processing at any time',
          'Right to data portability — request your brand data in a readable format',
          'Right to lodge a complaint — with the Data Protection Board of India',
        ]} />
        <LP>Email hello@crewhirelabs.online with subject "Data Request". We respond within 7 business days.</LP>
      </LegalSection>

      <LegalSection title="Third-party services we use">
        <LL items={[
          'Supabase — database and authentication (GDPR compliant)',
          'Cloudflare — CDN, hosting, and edge routing',
          'Razorpay — payment processing for Indian customers (RBI regulated)',
          'Stripe — payment processing for global customers (PCI DSS Level 1)',
          'Formspree — waitlist email collection (GDPR compliant)',
          'Google Gemini / Groq — AI inference (data not retained for training per enterprise terms)',
          'ipapi.co — country detection from IP address (anonymous, not stored)',
        ]} />
        <LP>We do not use Google Analytics, Meta Pixel, or any advertising tracking tools.</LP>
      </LegalSection>

      <LegalSection title="Cookies">
        <LP>We use minimal, essential storage only — no advertising or tracking cookies:</LP>
        <LL items={[
          'ch_geo_v2 — stores your detected region (India/Global) in localStorage. Not a tracking cookie.',
          'ch_waitlist — stores your waitlist submission locally as a backup. Never transmitted.',
          'Supabase session token — keeps you logged in. Essential only.',
        ]} />
      </LegalSection>

      <LegalSection title="Data security">
        <LL items={[
          'All data transmitted over HTTPS (TLS 1.3) — enforced by Cloudflare',
          'Database encrypted at rest — Supabase managed encryption',
          'Brand Brain data isolated per brand — no cross-brand data access possible',
          'No credit card data stored — handled entirely by Razorpay/Stripe',
          'Production data access limited to the founder only at this stage',
        ]} />
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <LP>If we make significant changes to this Privacy Policy, we will notify you by email at least 14 days before the changes take effect. The current version is always available at crewhirelabs.online/privacy.</LP>
      </LegalSection>

      <LegalSection title="Contact">
        <div className="font-mono text-[12px] text-[#00E87A] bg-[#0D0F12] border border-[#1A1D23] rounded-lg px-4 py-3 space-y-1">
          <p>Email: hello@crewhirelabs.online</p>
          <p>Response time: within 7 business days</p>
          <p>Data Protection Contact: Shiladitya Mallick</p>
          <p>Location: Kolkata, West Bengal, India</p>
        </div>
      </LegalSection>

    </LegalLayout>
  )
}
