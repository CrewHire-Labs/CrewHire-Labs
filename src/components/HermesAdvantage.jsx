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
    body: 'Most AI tools reset every session. Hermes agents have three layers of persistent memory: what\'s happening now, what happened across all past sessions, and the skills they\'ve built from solving your brand\'s problems. An agent that ran your Diwali campaign last year already knows what worked — without you telling it again.',
    stat: '40% faster',
    statLabel: 'task completion after 20 learned skills vs fresh agents (Nous Research)',
  },
  {
    color: '#7C6EF5',
    title: 'They get better the longer you stay',
    body: 'Every week your agents are active, they synthesise what they learned into permanent skill files. If your Sales Agent discovers that messages sent on Tuesday mornings convert 2x better for your audience, it documents that pattern and applies it every week going forward. Without you noticing. Without you doing anything.',
    stat: '10ms',
    statLabel: 'memory retrieval latency — agents recall 10,000+ past interactions instantly',
  },
  {
    color: '#F5A623',
    title: 'They talk to each other — your whole crew thinks together',
    body: 'When your Review Agent detects a rise in complaints about a product, it doesn\'t just flag it for you. It immediately tells your Sales Agent to stop upselling that product, your Campaign Agent to pivot the messaging, and your Founder Agent to add it to your morning briefing. This coordination happens automatically — every hour, every day.',
    stat: '300+',
    statLabel: 'model integrations — agents route to the best LLM for each specific task',
  },
  {
    color: '#FF6B6B',
    title: 'Your brand is the brain — not a template',
    body: 'CrewHire agents don\'t use generic playbooks. Your Brand Brain — your catalog, your tone, your FAQs, your customer patterns — is what every agent reads before acting. An agent writing content for a luxury jewelry brand sounds completely different from one writing for a pet care D2C. Because they\'re trained on different brands. Yours is yours, permanently.',
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
              Your agents remember, learn, and compound their knowledge every single week.
            </p>
          </div>

          {/* Comparison — static vs Hermes */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14 transition-all duration-700 delay-150 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="border border-[#1A1D23] rounded-2xl p-6 bg-[#0D0F12]">
              <p className="terminal-text text-[10px] opacity-40 mb-4">EVERY OTHER AI TOOL</p>
              {[
                'Forgets everything when session ends',
                'Same output quality on day 1 and day 365',
                'No memory of what worked last time',
                'Needs re-briefing every single use',
                'Tools don\'t talk to each other',
                'Generic — not trained on your brand',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 py-2 border-b border-[#1A1D23] last:border-0">
                  <span className="text-red-500/60 text-[12px] mt-0.5 flex-shrink-0">✗</span>
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
                <div key={item} className="flex items-start gap-3 py-2 border-b border-[#1A1D23] last:border-0">
                  <span className="text-[#7C6EF5] text-[12px] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-[#E8E6DF]/80 text-[12px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hermes pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {HERMES_POINTS.map((pt, i) => (
              <div key={i}
                className={`border border-[#1A1D23] rounded-2xl p-6 bg-[#0D0F12] transition-all duration-700 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80 + 200}ms`, borderColor: `${pt.color}18` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: pt.color }} />
                  <div className="text-right">
                    <p className="font-display font-700 text-[20px]" style={{ color: pt.color }}>{pt.stat}</p>
                    <p className="terminal-text text-[9px] opacity-40 max-w-32 text-right leading-relaxed">{pt.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-display font-600 text-[14px] text-[#E8E6DF] mb-3 leading-snug">{pt.title}</h3>
                <p className="text-[#4A5568] text-[12px] leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOUNDER STORY SECTION ── */}
      <section className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref2}>
        <div className="max-w-4xl mx-auto">

          <div className={`transition-all duration-700 ${v2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="terminal-text mb-5 opacity-50 tracking-widest text-center">BUILT BY A FOUNDER. FOR FOUNDERS.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

              {/* Founder card */}
              <div className="md:col-span-1">
                <div className="border border-[#1A1D23] rounded-2xl p-6 bg-[#0D0F12] hud text-center">
                  {/* Avatar — initials */}
                  <div className="w-16 h-16 rounded-full border border-[#00E87A]/30 bg-[#00E87A]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-700 text-[20px] text-[#00E87A]">SM</span>
                  </div>
                  <h3 className="font-display font-700 text-[16px] text-[#E8E6DF] mb-1">Shiladitya Mallick</h3>
                  <p className="terminal-text text-[10px] opacity-40 mb-4">SOLO FOUNDER · KOLKATA, INDIA</p>

                  <div className="space-y-2">
                    <a href="https://www.linkedin.com/in/shiladityamallick/"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#1A1D23] hover:border-[#00E87A]/40 hover:text-[#00E87A] transition-all text-[12px] text-[#4A5568] font-body">
                      <span className="font-bold text-[13px]">in</span> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/byshiladityamallick/"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#1A1D23] hover:border-[#00E87A]/40 hover:text-[#00E87A] transition-all text-[12px] text-[#4A5568] font-body">
                      <span>◎</span> @byshiladityamallick
                    </a>
                    <a href="mailto:hello@crewhirelabs.online"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#1A1D23] hover:border-[#00E87A]/40 hover:text-[#00E87A] transition-all text-[12px] text-[#4A5568] font-body">
                      <span>✉</span> hello@crewhirelabs.online
                    </a>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="md:col-span-2 space-y-5">
                <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight leading-snug"
                  style={{ fontSize: 'clamp(22px,3.5vw,34px)' }}>
                  Why I built this — and why it being solo-built matters to you.
                </h2>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  I'm Shiladitya — a solo developer from Kolkata. I built CrewHire Labs because I kept watching the same thing happen: D2C founders in India building genuinely great products, but spending most of their time on work that didn't need their brain.
                </p>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  Replying to "Where is my order?" for the hundredth time. Writing the same caption format every week. Manually segmenting customers for a campaign that should be automatic. Chasing an influencer follow-up that an agent could handle in seconds.
                </p>

                <div className="border-l-2 border-[#00E87A]/40 pl-5 py-1">
                  <p className="text-[#E8E6DF]/80 text-[14px] leading-relaxed font-body italic">
                    "The tools existed. The problem was that using them required specialists, subscriptions, and stitching — and most D2C founders couldn't afford any of that. So I built a crew instead."
                  </p>
                </div>

                <p className="text-[#4A5568] text-[14px] leading-relaxed">
                  CrewHire Labs is not a corporate product built by a team that has never run a brand. It is built by someone who is also running a company on a zero budget, using the same agents I'm selling you. Our Lead Agent finds our customers. Our Content Agent writes our posts. Our Analytics Agent tells me every morning exactly how we're doing.
                </p>

                <div className="border border-[#00E87A]/20 bg-[#00E87A]/5 rounded-xl p-5">
                  <p className="terminal-text text-[10px] text-[#00E87A] opacity-60 mb-2">WHY SOLO-BUILT MEANS SOMETHING</p>
                  <p className="text-[#E8E6DF]/70 text-[13px] leading-relaxed">
                    A corporate SaaS company has shareholders, quarterly targets, and pricing teams. I have one mission: make this work for you, because my business only grows if yours does. When you contact me, you reach me directly — not a support ticket queue. When something breaks, I fix it. When you need something, you ask and I build it. That relationship does not exist with any enterprise software company.
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { val: '₹0', label: 'Infrastructure cost at launch' },
                    { val: '10', label: 'AI agents in your crew' },
                    { val: '24/7', label: 'Your crew never stops' },
                  ].map(s => (
                    <div key={s.val} className="text-center">
                      <p className="font-display font-700 text-[22px] text-[#00E87A]">{s.val}</p>
                      <p className="terminal-text text-[10px] opacity-35 leading-relaxed">{s.label}</p>
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
