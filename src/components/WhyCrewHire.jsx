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

const PAINS = [
  {
    icon: '⏱',
    color: '#00E87A',
    pain: 'You spend 4+ hours a day on tasks that don\'t need you',
    reality: 'Replying to "Where is my order?" for the 40th time. Writing the same Instagram caption. Manually sending cart recovery emails at midnight. This is not founder work. This is operator work — and it\'s killing your ability to think.',
    fix: 'Your Support Agent answers every customer query 24/7. Your Content Agent writes every post. Your Sales Agent sends every recovery. You wake up to results, not tasks.',
  },
  {
    icon: '📉',
    color: '#7C6EF5',
    pain: 'Your CAC keeps rising but retention stays broken',
    reality: 'You spend ₹800 to acquire a customer, they buy once, and you never hear from them again. Meanwhile, the cost to re-acquire them through ads is going up every quarter. The math does not work.',
    fix: 'Your Retention Agent detects churn signals 30 days before a customer is lost. It sends win-back sequences, VIP offers, and repeat nudges automatically — turning one-time buyers into loyal customers without you lifting a finger.',
  },
  {
    icon: '😮‍💨',
    color: '#F5A623',
    pain: 'You\'re too small to afford a team but too big to do it alone',
    reality: 'A content manager costs ₹35,000/mo. A retention specialist ₹45,000/mo. A campaign manager ₹40,000/mo. A support person ₹25,000/mo. That\'s ₹1.45L/month just to have the basics covered — before salary hikes, leaves, or resignations.',
    fix: 'CrewHire Labs gives you all 10 roles starting at ₹4,999/mo. Every agent works 24 hours a day, never takes a day off, never asks for a raise, and gets smarter about your brand every single week.',
  },
  {
    icon: '🔧',
    color: '#FF6B6B',
    pain: 'Your tools don\'t talk to each other — and neither do they learn',
    reality: 'You\'re paying for Klaviyo, a scheduling tool, a support inbox, an analytics dashboard, and a content tool. None of them know what the others are doing. None of them know your brand. And none of them get better over time.',
    fix: 'CrewHire agents communicate with each other. When your Review Agent spots a return spike on a SKU, it tells your Sales Agent to stop pushing it and your Campaign Agent to pivot. One crew. One brain. All learning.',
  },
]

export default function WhyCrewHire() {
  const [ref, visible] = useInView()
  const [open, setOpen] = useState(0)

  return (
    <section id="why" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="terminal-text mb-4 opacity-50 tracking-widest">WHY CREWHIRE LABS</p>
          <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight mb-5"
            style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            You started your brand to build<br className="hidden md:block" /> something great.
            <span style={{
              background: 'linear-gradient(135deg,#00E87A,#00994F)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Not to manage tools.</span>
          </h2>
          <p className="text-[#4A5568] text-[14px] max-w-xl mx-auto leading-relaxed">
            Every D2C founder hits the same wall. The brand is growing, but you're drowning in operational work that doesn't need your brain. Here's what that actually looks like — and how CrewHire Labs fixes it permanently.
          </p>
        </div>

        {/* Pain accordion */}
        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {PAINS.map((item, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                open === i ? 'border-opacity-60' : 'border-[#1A1D23]'
              }`}
              style={{ borderColor: open === i ? `${item.color}50` : undefined }}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {/* Header */}
              <div className={`flex items-center gap-4 px-5 py-4 transition-colors ${open === i ? 'bg-[#0D0F12]' : 'bg-transparent hover:bg-[#0D0F12]/50'}`}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[16px] flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                  {item.icon}
                </div>
                <p className="font-display font-600 text-[14px] text-[#E8E6DF] flex-1 leading-snug">{item.pain}</p>
                <div className="w-5 h-5 rounded-full border border-[#2A2D33] flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', borderColor: open === i ? item.color : undefined }}>
                  <span className="text-[12px]" style={{ color: open === i ? item.color : '#4A5568' }}>+</span>
                </div>
              </div>

              {/* Expanded */}
              {open === i && (
                <div className="px-5 pb-5 bg-[#0D0F12]">
                  <div className="border-t border-[#1A1D23] pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="terminal-text text-[10px] opacity-40 mb-2">THE REALITY RIGHT NOW</p>
                      <p className="text-[#4A5568] text-[13px] leading-relaxed">{item.reality}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="terminal-text text-[10px] mb-2" style={{ color: item.color, opacity: 0.7 }}>HOW YOUR CREW FIXES THIS</p>
                      <p className="text-[#E8E6DF]/70 text-[13px] leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The bottom line */}
        <div className={`mt-14 max-w-3xl mx-auto border border-[#00E87A]/20 bg-[#00E87A]/5 rounded-2xl p-7 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="terminal-text text-[10px] text-[#00E87A] opacity-60 mb-3">THE BOTTOM LINE</p>
          <p className="font-display font-600 text-[16px] md:text-[18px] text-[#E8E6DF] leading-relaxed mb-3">
            "The gap between a ₹50L brand and a ₹5Cr brand is almost never the product. It's the operations. It's having the right team running the right systems every single day."
          </p>
          <p className="text-[#4A5568] text-[13px] leading-relaxed">
            CrewHire Labs gives you those operations — not as tools you manage, but as a crew that works. The same way a funded brand runs with a 10-person team, your brand runs with 10 AI agents. The only difference is the cost.
          </p>
        </div>

      </div>
    </section>
  )
}
