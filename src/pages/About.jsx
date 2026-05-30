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
        <div className="flex flex-col sm:flex-row gap-6 mb-4">
          <img
            src="/founder.jpg"
            alt="Shiladitya Mallick — Founder CrewHire Labs"
            className="w-28 h-28 rounded-2xl object-cover object-top flex-shrink-0"
            style={{ filter: 'grayscale(15%) contrast(1.05)', border: '1px solid #1A1D23' }}
          />
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {['Head of eCommerce','D2C Brand Growth','AI Development','Software Engineering'].map(tag => (
                <span key={tag} className="terminal-text text-[10px] px-2 py-1 rounded-lg"
                  style={{ background: '#00E87A12', color: '#00E87A', border: '1px solid #00E87A25' }}>{tag}</span>
              ))}
            </div>
            <LP>I'm Shiladitya Mallick — a founder who has spent years working at the intersection of D2C brands and technology. As Head of eCommerce, I've built growth systems for brands and managed P&L. As a developer, I've built AI-powered tools from scratch. That combination is rare and it's exactly what CrewHire Labs is built from.</LP>
          </div>
        </div>
        <LP>I built CrewHire Labs because I kept seeing the same gap: D2C founders drowning in operational work that AI should be doing — and AI tools built by people who had never actually run a store, handled a festival launch, or dealt with 200 customer DMs in a single day.</LP>
        <LP>Content written by hand. Follow-ups missed. Campaigns delayed. Cart recoveries not sent. Churn detected too late. The tools existed — but they were 10 separate subscriptions needing specialists, and most D2C founders couldn't afford either.</LP>
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
          <p>Location: India</p>
        </div>
      </LegalSection>

    </LegalLayout>
  )
}
