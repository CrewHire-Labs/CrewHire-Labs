import LegalLayout, { LegalSection, LP, LL, LBox } from '../components/LegalLayout'

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules for using CrewHire Labs. Simple, fair, and written for founders — not lawyers."
      lastUpdated="MAY 2026"
    >

      <LBox label="PLAIN ENGLISH SUMMARY">
        Use CrewHire Labs to grow your business. Don't use it for anything illegal or harmful. Your brand data is yours — we just use it to power your agents. We provide the service as-is at this stage. You can cancel anytime. If something goes wrong, our liability is limited to what you paid us in the last 30 days.
      </LBox>

      <LegalSection title="Acceptance of terms">
        <LP>By accessing crewhirelabs.online or using any CrewHire Labs service, you agree to these Terms of Service. If you do not agree, please do not use the service.</LP>
        <LP>These terms apply to all users — individuals, brand owners, agencies, and businesses — using CrewHire Labs anywhere in the world.</LP>
      </LegalSection>

      <LegalSection title="Who provides this service">
        <LP>CrewHire Labs is operated by Shiladitya Mallick, an independent founder based in India.</LP>
        <div className="font-mono text-[12px] text-[#00E87A] bg-[#0D0F12] border border-[#1A1D23] rounded-lg px-4 py-3 space-y-1">
          <p>Contact: hello@crewhirelabs.online</p>
          <p>LinkedIn: linkedin.com/in/shiladityamallick</p>
          <p>Instagram: instagram.com/byshiladityamallick</p>
        </div>
      </LegalSection>

      <LegalSection title="What CrewHire Labs provides">
        <LP>CrewHire Labs provides AI-powered growth agents for D2C brands, including but not limited to:</LP>
        <LL items={[
          'AI agents for sales, retention, content, support, campaigns, analytics, and founder briefings',
          'Brand Brain — a memory system trained on your brand data',
          'Industry Brains — domain expertise for specific verticals',
          'A dashboard to manage, monitor, and interact with your AI crew',
          'Scheduled automations, reports, and cross-agent workflows',
        ]} />
      </LegalSection>

      <LegalSection title="Your account and responsibilities">
        <LP>When you create an account, you agree to:</LP>
        <LL items={[
          'Provide accurate information about yourself and your brand',
          'Keep your login credentials secure — you are responsible for all activity under your account',
          'Use the service only for lawful business purposes',
          'Not attempt to reverse-engineer, copy, or resell the CrewHire Labs platform',
          'Not use the AI agents to generate spam, misinformation, or harmful content',
          'Not use the service to violate any applicable law or regulation',
          'Be at least 18 years of age',
        ]} />
      </LegalSection>

      <LegalSection title="Your brand data">
        <LP><strong className="text-[#E8E6DF]">Your brand data belongs to you.</strong> When you upload catalogs, FAQs, tone guidelines, or any other brand information, you retain full ownership of that data.</LP>
        <LP>By uploading brand data, you grant CrewHire Labs a limited licence to use that data solely to:</LP>
        <LL items={[
          'Train and operate your Brand Brain agents',
          'Improve the quality of your AI crew\'s outputs',
          'Generate reports and analytics for your account',
        ]} />
        <LBox>
          We never use your brand data to train agents for other customers. We never sell your brand data. When you delete your account, your brand data is deleted within 30 days.
        </LBox>
      </LegalSection>

      <LegalSection title="Free trial and billing">
        <LP>Every CrewHire Labs plan includes a 7-day free trial. No credit card is required to start your trial.</LP>
        <LL items={[
          'Your trial begins the moment you create your account',
          'At the end of the trial, you will be prompted to choose a paid plan',
          'If you do not upgrade, your account is paused — your data is retained for 30 days',
          'All paid plans are billed monthly in advance — INR for India, USD for global',
          'You can cancel your subscription at any time — cancellation takes effect at the end of your current billing period',
          'Refunds are available within 7 days of a charge if you have not used more than 10% of your agent quota for that period',
          'Payment is processed by Razorpay (India) or Stripe (Global) — subject to their respective terms',
        ]} />
      </LegalSection>

      <LegalSection title="Acceptable use">
        <LP>You must not use CrewHire Labs to:</LP>
        <LL items={[
          'Generate content that is false, misleading, defamatory, or fraudulent',
          'Send unsolicited communications (spam) to customers without their consent',
          'Violate any applicable Indian or international law',
          'Infringe any third-party intellectual property rights',
          'Attempt to gain unauthorised access to any system or data',
          'Interfere with or disrupt the platform or its infrastructure',
          'Use the platform to harm, harass, or discriminate against any individual',
        ]} />
        <LP>CrewHire Labs reserves the right to suspend or terminate accounts that violate this policy, with or without notice depending on severity.</LP>
      </LegalSection>

      <LegalSection title="AI-generated content disclaimer">
        <LP>CrewHire Labs uses AI models to generate content, recommendations, campaigns, and reports for your brand. You acknowledge that:</LP>
        <LL items={[
          'AI-generated content should be reviewed before publishing or sending to customers',
          'CrewHire Labs does not guarantee the accuracy or fitness of any AI-generated output',
          'You are responsible for any content that your agents send or publish on your behalf',
          'AI models may occasionally produce errors, hallucinations, or unexpected results',
        ]} />
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <LP>CrewHire Labs is provided by an independent solo founder at an early stage of development. To the maximum extent permitted by applicable law:</LP>
        <LL items={[
          'CrewHire Labs is provided "as is" without warranty of any kind',
          'We do not guarantee uninterrupted availability or error-free operation',
          'Our total liability to you for any claim is limited to the amount you paid us in the 30 days prior to the claim',
          'We are not liable for any indirect, incidental, or consequential damages',
          'We are not liable for losses arising from AI agent errors, downtime, or third-party service failures',
        ]} />
        <LBox>
          This limitation does not affect your statutory rights under Indian consumer protection law or the DPDP Act 2023.
        </LBox>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <LP>The CrewHire Labs platform, brand, logo, and technology are owned by Shiladitya Mallick. You may not copy, modify, or distribute any part of the platform without express written permission.</LP>
        <LP>The SVG logo, agent architecture, Brand Brain technology, and CrewHire OS design are proprietary. All rights reserved.</LP>
      </LegalSection>

      <LegalSection title="Governing law">
        <LP>These Terms are governed by the laws of India. Any disputes will be resolved under the jurisdiction of the courts of India.</LP>
        <LP>For international users, these terms do not limit any mandatory consumer protection rights available in your jurisdiction.</LP>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <LP>We may update these Terms from time to time. For significant changes, we will notify you by email at least 14 days before they take effect. Continued use of the service after changes constitutes acceptance.</LP>
        <LP>The current version is always available at crewhirelabs.online/terms.</LP>
      </LegalSection>

      <LegalSection title="Contact">
        <LP>For any questions about these Terms:</LP>
        <div className="font-mono text-[12px] text-[#00E87A] bg-[#0D0F12] border border-[#1A1D23] rounded-lg px-4 py-3 space-y-1">
          <p>Email: hello@crewhirelabs.online</p>
          <p>Founder: Shiladitya Mallick</p>
          <p>Location: India</p>
        </div>
      </LegalSection>

    </LegalLayout>
  )
}
