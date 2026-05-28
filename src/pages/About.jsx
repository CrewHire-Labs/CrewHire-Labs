import LegalLayout, { LegalSection, LP, LL, LBox } from '../components/LegalLayout'

export default function About() {
  return (
    <LegalLayout
      title="About CrewHire Labs"
      subtitle="Who we are, why we built this, and where we're going."
      lastUpdated="MAY 2026"
    >

      <LBox label="THE ONE-LINE VERSION">
        CrewHire Labs is built by a solo founder in Kolkata who believes every D2C brand deserves a world-class growth team — regardless of budget, team size, or how early they are.
      </LBox>

      <LegalSection title="The founder">
        <LP>Hi — I'm Shiladitya Mallick, a solo developer and founder based in Kolkata, West Bengal. I built CrewHire Labs because I kept seeing the same problem: D2C founders in India working 16-hour days doing manually what AI should be doing for them.</LP>
        <LP>Content written by hand. Customer follow-ups missed. Campaigns delayed because no one had time. Cart recoveries not sent. Churn not detected until too late.</LP>
        <LP>The tools existed. The problem was that they were 10 separate subscriptions, each needing a specialist to run them — and most D2C founders couldn't afford either the tools or the people.</LP>
        <LP>So I built a crew. One place. AI agents trained on your brand. Working 24/7. For a fraction of one hire.</LP>
        <div className="flex flex-wrap gap-3 mt-4">
          <a href="https://www.linkedin.com/in/shiladityamallick/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1A1D23] bg-[#0D0F12] text-[12px] text-[#4A5568] hover:text-[#00E87A] hover:border-[#00E87A]/40 transition-all font-body">
            <span className="text-[14px]">in</span> LinkedIn — Shiladitya Mallick
          </a>
          <a href="https://www.instagram.com/byshiladityamallick/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1A1D23] bg-[#0D0F12] text-[12px] text-[#4A5568] hover:text-[#00E87A] hover:border-[#00E87A]/40 transition-all font-body">
            <span className="text-[14px]">◎</span> Instagram — @byshiladityamallick
          </a>
          <a href="mailto:hello@crewhirelabs.online"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1A1D23] bg-[#0D0F12] text-[12px] text-[#4A5568] hover:text-[#00E87A] hover:border-[#00E87A]/40 transition-all font-body">
            <span className="text-[14px]">✉</span> hello@crewhirelabs.online
          </a>
        </div>
      </LegalSection>

      <LegalSection title="What we're building">
        <LP>CrewHire Labs is an AI growth platform for D2C brands. The product is structured around four components:</LP>
        <LL items={[
          'CrewHire Workforce — the customer product. Brands hire AI agents, onboard them with brand data, and watch them work.',
          'CrewHire OS — powered by Hermes, the runtime that gives every agent persistent memory, scheduling, and the ability to communicate with each other.',
          'CrewHire Intelligence — the Brand Brain (per-brand memory), Industry Brains (domain expertise), and Commerce Graph (cross-brand learning).',
          'CrewHire Marketplace — coming in Year 3. Creators build and sell specialist agents. 70% to creators, 30% to CrewHire.',
        ]} />
        <LP>We start with D2C brands in India. We expand to global brands in Year 1. We open to every business type in Year 2 onwards.</LP>
      </LegalSection>

      <LegalSection title="We run on our own agents">
        <LP>CrewHire Labs itself is run by its own AI agents. This is not a demo — it is how we actually operate:</LP>
        <LL items={[
          'Lead Agent — finds and outreaches to D2C founders on Shopify India',
          'Content Agent — writes our SEO blogs, emails, and social posts',
          'Analytics Agent — tracks our MRR, leads, and agent activity daily',
          'Social Agent — manages our Instagram and LinkedIn presence',
          'Founder Agent — delivers a morning briefing every day at 8am',
        ]} />
        <LBox label="BUILD IN PUBLIC">
          We share everything publicly — our MRR, our active brands, what our agents did today. If our own agents can grow CrewHire Labs, they can grow your brand too. That is the product demonstration.
        </LBox>
      </LegalSection>

      <LegalSection title="The 10-year vision">
        <LP>Year 1: AI growth team for Indian D2C founders. Prove the model. Get to 100 brands.</LP>
        <LP>Year 2: Industry Brains for Fashion, Beauty, Jewelry, Salon. Expand globally. Reach 100 brands milestone.</LP>
        <LP>Year 3: Open CrewHire Marketplace — any expert can build and sell specialist agents. Platform fees model.</LP>
        <LP>Year 5: Universal AI workforce platform — any business, any industry, any country.</LP>
        <LP>Year 10: The operating layer for SMBs globally. The AWS of AI business employees.</LP>
      </LegalSection>

      <LegalSection title="The tech stack">
        <LP>Built entirely on a zero-cost infrastructure stack — because the best proof of capital efficiency is profitable from day one:</LP>
        <LL items={[
          'React + Vite + Tailwind → Cloudflare Pages (hosting)',
          'Supabase — Postgres + pgvector + Auth + Realtime',
          'Oracle Cloud Always Free — 4 ARM cores, 24GB RAM, Hermes runtime',
          'Upstash Redis — task queue and event bus',
          'Gemini Flash + Groq — LLM layer (free tier at MVP)',
          'Razorpay (India) + Stripe (Global) — payments',
        ]} />
        <LP>Infrastructure cost at launch: ₹0/month. First paying brand = 100% gross margin.</LP>
      </LegalSection>

      <LegalSection title="Contact">
        <LP>For partnerships, press, enterprise enquiries, or just to say hello:</LP>
        <div className="font-mono text-[12px] text-[#00E87A] bg-[#0D0F12] border border-[#1A1D23] rounded-lg px-4 py-3 space-y-1">
          <p>Email: hello@crewhirelabs.online</p>
          <p>LinkedIn: linkedin.com/in/shiladityamallick</p>
          <p>Instagram: instagram.com/byshiladityamallick</p>
          <p>Location: Kolkata, West Bengal, India</p>
        </div>
      </LegalSection>

    </LegalLayout>
  )
}
