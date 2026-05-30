import { useRef, useEffect, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, v]
}

const HERMES_POINTS = [
  {
    color: '#00E87A',
    title: 'Your agents remember everything — forever',
    body: 'Most AI tools reset every session. Hermes agents have three layers of persistent memory: what\'s happening now, what happened across all past sessions, and skills they\'ve built from solving your brand\'s specific problems. An agent that ran your Diwali campaign last year already knows what worked — without you telling it again.',
    stat: '40%',
    statLabel: 'faster task completion after 20 learned skills vs fresh agents',
  },
  {
    color: '#7C6EF5',
    title: 'They get better the longer you stay',
    body: 'Every week your agents are active, they synthesise what they learned into permanent skill files. If your Sales Agent discovers Tuesday morning messages convert 2x better for your audience, it documents that and applies it every week forward. Without you noticing. Without you doing anything.',
    stat: '10ms',
    statLabel: 'memory retrieval — agents recall 10,000+ past interactions instantly',
  },
  {
    color: '#F5A623',
    title: 'They talk to each other — your whole crew thinks together',
    body: 'When your Review Agent detects rising complaints about a product, it tells your Sales Agent to stop upselling it, your Campaign Agent to pivot messaging, and your Founder Agent to add it to your morning briefing. All automatically. Every hour. Every day.',
    stat: '300+',
    statLabel: 'model integrations — agents route to the best LLM for each specific task',
  },
  {
    color: '#FF6B6B',
    title: 'Your brand is the brain — not a template',
    body: 'Agents don\'t use generic playbooks. Your Brand Brain — your catalog, tone, FAQs, customer patterns — is what every agent reads before acting. A luxury jewelry brand\'s crew sounds completely different from a pet care D2C crew. Because they\'re trained on different brands. Yours is yours, permanently.',
    stat: '0',
    statLabel: 'brand data shared across customers — your Brand Brain is fully isolated',
  },
]

export default function HermesAdvantage() {
  const [ref1, v1] = useInView()
  const [ref2, v2] = useInView()

  return (
    <>
      {/* ── HERMES SECTION ── */}
      <section className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref1}>
        <div className="max-w-6xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-700 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#534AB7]/40 bg-[#534AB7]/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C6EF5] anim-pulse-dot" />
              <span className="terminal-text text-[10px] text-[#7C6EF5]">POWERED BY HERMES OS</span>
            </div>
            <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight mb-5"
              style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
              Your AI crew doesn't just work.<br className="hidden md:block" />
              <span style={{
                background: 'linear-gradient(135deg,#7C6EF5,#534AB7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>It grows with your brand. Forever.</span>
            </h2>
            <p className="text-[#4A5568] text-[14px] max-w-xl mx-auto leading-relaxed">
              Every other AI tool gives you a static assistant that forgets everything when you close the tab.
              Hermes — the operating system behind every CrewHire agent — was built specifically to solve this.
              Your agents remember, learn, and compound knowledge every single week.
            </p>
          </div>

          {/* Comparison */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14 transition-all duration-700 delay-150 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="border border-[#1A1D23] rounded-2xl p-6 bg-[#0D0F12]">
              <p className="terminal-text text-[10px] opacity-40 mb-4">EVERY OTHER AI TOOL</p>
              {[
                'Forgets everything when session ends',
                'Same quality on day 1 and day 365',
                'No memory of what worked last time',
                'Needs re-briefing every single use',
                'Tools don\'t talk to each other',
                'Generic — not trained on your brand',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 py-2.5 border-b border-[#1A1D23] last:border-0">
                  <span className="text-red-500/50 text-[12px] mt-0.5 flex-shrink-0">✗</span>
                  <span className="text-[#4A5568] text-[12px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="border border-[#7C6EF5]/30 rounded-2xl p-6 bg-[#0D0F12]"
              style={{ boxShadow: '0 0 30px rgba(124,110,245,0.08)' }}>
              <p className="terminal-text text-[10px] text-[#7C6EF5] opacity-70 mb-4">CREWHIRE LABS ON HERMES</p>
              {[
                'Permanent memory across every session',
                'Gets measurably better every week of use',
                'Learns which tactics work for YOUR brand',
                'Already knows your brand from day one',
                'All agents coordinate automatically',
                'Trained exclusively on your Brand Brain',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 py-2.5 border-b border-[#1A1D23] last:border-0">
                  <span className="text-[#7C6EF5] text-[12px] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-[#E8E6DF]/80 text-[12px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Hermes pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HERMES_POINTS.map((pt, i) => (
              <div key={i}
                className={`border border-[#1A1D23] rounded-2xl p-6 bg-[#0D0F12] transition-all duration-700`}
                style={{ transitionDelay: `${i * 80 + 200}ms`, borderColor: `${pt.color}18`,
                  opacity: v1 ? 1 : 0, transform: v1 ? 'translateY(0)' : 'translateY(20px)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: pt.color }} />
                  <div className="text-right">
                    <p className="font-display font-700 text-[22px]" style={{ color: pt.color }}>{pt.stat}</p>
                    <p className="terminal-text text-[9px] opacity-35 max-w-28 text-right leading-relaxed">{pt.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-display font-600 text-[14px] text-[#E8E6DF] mb-3 leading-snug">{pt.title}</h3>
                <p className="text-[#4A5568] text-[12px] leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref2}>
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${v2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            <p className="terminal-text mb-10 opacity-50 tracking-widest text-center">BUILT BY A FOUNDER. FOR FOUNDERS.</p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

              {/* ── Founder card ── */}
              <div className="md:col-span-4">
                <div className="border border-[#1A1D23] rounded-2xl overflow-hidden bg-[#0D0F12] hud">

                  {/* Photo */}
                  <div className="relative">
                    <img
                      src="/founder.jpg"
                      alt="Shiladitya Mallick — Founder, CrewHire Labs"
                      className="w-full aspect-square object-cover object-top"
                      style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                    />
                    {/* Green overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16"
                      style={{ background: 'linear-gradient(to top, #0D0F12, transparent)' }} />
                    {/* Live badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#060608]/80 border border-[#1A1D23]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
                      <span className="terminal-text text-[9px] text-[#00E87A]">BUILDING NOW</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-display font-700 text-[17px] text-[#E8E6DF] mb-0.5">Shiladitya Mallick</h3>
                    <p className="terminal-text text-[10px] opacity-40 mb-4">FOUNDER · CREWHIRE LABS</p>

                    {/* Background tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {['Head of eCommerce','D2C Brand Growth','AI Development','Software Engineering'].map(tag => (
                        <span key={tag} className="terminal-text text-[9px] px-2 py-1 rounded-lg"
                          style={{ background: '#00E87A12', color: '#00E87A', border: '1px solid #00E87A25' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Social links */}
                    <div className="space-y-2">
                      <a href="https://www.linkedin.com/in/shiladityamallick/"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-[#1A1D23] hover:border-[#00E87A]/40 hover:text-[#00E87A] transition-all text-[12px] text-[#4A5568] font-body">
                        <span className="font-bold text-[13px]">in</span>
                        <span>LinkedIn</span>
                      </a>
                      <a href="https://www.instagram.com/byshiladityamallick/"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-[#1A1D23] hover:border-[#00E87A]/40 hover:text-[#00E87A] transition-all text-[12px] text-[#4A5568] font-body">
                        <span>◎</span>
                        <span>@byshiladityamallick</span>
                      </a>
                      <a href="mailto:hello@crewhirelabs.online"
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-[#1A1D23] hover:border-[#00E87A]/40 hover:text-[#00E87A] transition-all text-[12px] text-[#4A5568] font-body">
                        <span>✉</span>
                        <span>hello@crewhirelabs.online</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Story ── */}
              <div className="md:col-span-8 space-y-5">
                <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight leading-snug"
                  style={{ fontSize: 'clamp(22px,3vw,34px)' }}>
                  Why I built this — and why it matters that it wasn't built by a corporation.
                </h2>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  I've spent years working at the intersection of D2C brands and technology — as Head of eCommerce, building growth systems for brands, and as a developer building AI-powered tools. That combination is rare. Most eCommerce people don't code. Most developers have never run a brand's P&L.
                </p>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  I built CrewHire Labs because I kept seeing the same gap on both sides. D2C founders drowning in operational work that AI should be doing for them. And AI tools being built by people who had never actually run a store, managed a campaign, or dealt with a flood of customer DMs on a festival launch day.
                </p>

                <div className="border-l-2 border-[#00E87A]/40 pl-5 py-1">
                  <p className="text-[#E8E6DF]/80 text-[14px] leading-relaxed font-body italic">
                    "I know what a Head of eCommerce actually needs from an AI crew — because I've been that person. I know what breaks, what wastes time, and what actually moves revenue. That's what I built CrewHire Labs around."
                  </p>
                </div>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  CrewHire Labs itself runs on its own agents. Our Lead Agent finds our customers. Our Content Agent writes our posts and emails. Our Analytics Agent tracks our MRR every morning. I'm not selling you something I haven't used myself.
                </p>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  And because this is solo-built — when you email me, you reach me. When something needs fixing, I fix it. When a D2C founder tells me what their crew should do differently, I build it. That direct relationship with the person who built the product is something no enterprise software company can offer you.
                </p>

                {/* Why solo matters */}
                <div className="border border-[#00E87A]/20 bg-[#00E87A]/5 rounded-xl p-5">
                  <p className="terminal-text text-[10px] text-[#00E87A] opacity-60 mb-3">WHY SOLO-BUILT MEANS SOMETHING FOR YOU</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: '◎', title: 'No shareholders', body: 'No quarterly targets forcing bad product decisions. Every feature exists because a founder needed it.' },
                      { icon: '◈', title: 'Direct access', body: 'You email the founder. Not a ticket queue. Not a support bot. The person who built it.' },
                      { icon: '⬡', title: 'Shared mission', body: 'My revenue only grows if your brand grows. Our incentives are perfectly aligned — always.' },
                    ].map(item => (
                      <div key={item.title}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#00E87A] text-[13px]">{item.icon}</span>
                          <span className="font-display font-600 text-[12px] text-[#E8E6DF]">{item.title}</span>
                        </div>
                        <p className="text-[#4A5568] text-[11px] leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { val: '₹0', label: 'Infra cost at launch' },
                    { val: '10', label: 'AI agents in your crew' },
                    { val: '24/7', label: 'Crew never stops' },
                  ].map(s => (
                    <div key={s.val} className="text-center border border-[#1A1D23] rounded-xl py-4 bg-[#0D0F12]">
                      <p className="font-display font-700 text-[22px] text-[#00E87A]">{s.val}</p>
                      <p className="terminal-text text-[10px] opacity-35 leading-relaxed mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
