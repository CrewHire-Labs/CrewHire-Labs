import { useRef, useEffect, useState } from 'react'

const STEPS = [
  { n: '01', color: '#00E87A',
    title: 'Start your free trial',
    desc: 'Sign up at crewhirelabs.online. No credit card. 7 days free. We detect your region automatically — India or Global — and show you the right plan.' },
  { n: '02', color: '#7C6EF5',
    title: 'Feed your Brand Brain',
    desc: 'Upload your catalog, connect Shopify, describe your tone, add FAQs. Brand Brain ingests everything — this is what makes your crew know your business deeply.' },
  { n: '03', color: '#F5A623',
    title: 'Hire your AI growth team',
    desc: 'Browse agents by team — Revenue, Marketing, Growth, Operations. Click Hire. 60-second config. Your agents activate and start working immediately.' },
  { n: '04', color: '#FF6B6B',
    title: 'Watch your crew work 24/7',
    desc: 'Real-time dashboard shows every action. Upsells sent. Content published. Churn risks caught. Campaigns drafted. Morning briefing delivered. Every day. No days off.' },
]

function useInView() {
  const ref = useRef(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, v]
}

export default function HowItWorks() {
  const [ref, visible] = useInView()
  return (
    <section id="how" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="terminal-text mb-4 opacity-50 tracking-widest">HOW IT WORKS</p>
          <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight mb-4"
            style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            From signup to crew working<br className="hidden md:block" /> in under an hour.
          </h2>
          <p className="text-[#4A5568] text-[14px] max-w-md mx-auto">
            No engineers. No complex setup. No config hell. Just hire and go.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.n} className="card-dark rounded-2xl p-6 relative hud transition-all duration-700"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                borderColor: `${s.color}20`,
              }}>
              <div className="font-mono text-[11px] font-500 mb-5 px-2 py-1 rounded-md w-fit"
                style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}25` }}>
                {s.n}
              </div>
              <h3 className="font-display font-600 text-[15px] text-[#E8E6DF] mb-3 leading-snug">{s.title}</h3>
              <p className="text-[#4A5568] text-[13px] leading-relaxed">{s.desc}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#2A2D33] text-xl">›</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
