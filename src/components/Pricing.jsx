import { useState, useRef, useEffect } from 'react'
import { useGeo } from '../GeoContext'

const INDIA_PLANS = [
  {
    key: 'starter', name: 'Starter', price: '₹4,999', period: '/mo',
    color: '#00E87A', hot: false,
    desc: 'For founders just starting. Prove it works first.',
    features: ['5 AI agents', '1 brand', 'Founder + Sales + Support', 'Brand Brain setup', 'Dashboard access', 'Email support'],
    cta: 'Start free trial',
  },
  {
    key: 'growth', name: 'Growth', price: '₹14,999', period: '/mo',
    color: '#00E87A', hot: true,
    desc: 'Full crew activated. For brands ready to scale.',
    features: ['10 AI agents', '1 brand', 'All agent teams', 'Industry Brain', 'Cross-agent workflows', 'Priority support'],
    cta: 'Start free trial',
    paymentNote: 'Razorpay · UPI · Cards · Net Banking',
  },
  {
    key: 'scale', name: 'Scale', price: '₹39,999', period: '/mo',
    color: '#7C6EF5', hot: false,
    desc: 'For agencies and multi-brand operators.',
    features: ['10 agents', 'Multiple brands', 'All Industry Brains', 'Advanced automations', 'White-label option', 'Dedicated support'],
    cta: 'Start free trial',
  },
  {
    key: 'enterprise', name: 'Enterprise', price: '₹75k–2L+', period: '/mo',
    color: '#F5A623', hot: false,
    desc: 'Custom agents. Private infra. Dedicated setup.',
    features: ['Custom agents', 'Private deployment', 'Dedicated infra', 'SLA guarantee', 'Custom onboarding', 'Audit logs'],
    cta: 'Contact us',
  },
]

const GLOBAL_PLANS = [
  {
    key: 'starter', name: 'Starter', price: '$149', period: '/mo',
    color: '#00E87A', hot: false,
    desc: 'For founders just starting. Prove it works first.',
    features: ['5 AI agents', '1 brand', 'Founder + Sales + Support', 'Brand Brain setup', 'Dashboard access', 'Email support'],
    cta: 'Start free trial',
  },
  {
    key: 'growth', name: 'Growth', price: '$399', period: '/mo',
    color: '#00E87A', hot: true,
    desc: 'Full crew activated. For brands ready to scale.',
    features: ['10 AI agents', '1 brand', 'All agent teams', 'Industry Brain', 'Cross-agent workflows', 'Priority support'],
    cta: 'Start free trial',
    paymentNote: 'Stripe · PayPal · All major cards',
  },
  {
    key: 'scale', name: 'Scale', price: '$999', period: '/mo',
    color: '#7C6EF5', hot: false,
    desc: 'For agencies and multi-brand operators.',
    features: ['Unlimited agents', 'Multiple brands', 'All Industry Brains', 'Advanced automations', 'Priority support', 'Commerce Graph'],
    cta: 'Start free trial',
  },
  {
    key: 'enterprise', name: 'Enterprise', price: '$3k–$15k+', period: '/mo',
    color: '#F5A623', hot: false,
    desc: 'Self-hosted. Custom workforce. Dedicated environment.',
    features: ['Self-hosted', 'Private VPC', 'Custom employees', 'Dedicated onboarding', 'SLA guarantee', 'Audit logs'],
    cta: 'Contact us',
  },
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

export default function Pricing() {
  const { isIndia, toggle } = useGeo()
  const [ref, visible] = useInView()
  const plans = isIndia ? INDIA_PLANS : GLOBAL_PLANS

  return (
    <section id="pricing" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="terminal-text mb-4 opacity-50 tracking-widest">PRICING</p>
          <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight mb-4"
            style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            Your first hire costs<br className="hidden md:block" /> zero salary.
          </h2>
          <p className="text-[#4A5568] text-[14px] max-w-md mx-auto mb-8">
            7-day free trial on every plan. No credit card. Your crew delivers — then you upgrade.
          </p>

          {/* Currency toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl border border-[#1A1D23] bg-[#0D0F12]">
            <button onClick={() => toggle(true)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-display font-600 transition-all ${isIndia ? 'bg-[#00E87A] text-[#060608]' : 'text-[#4A5568] hover:text-[#E8E6DF]'}`}>
              🇮🇳 India — INR
            </button>
            <button onClick={() => toggle(false)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-display font-600 transition-all ${!isIndia ? 'bg-[#00E87A] text-[#060608]' : 'text-[#4A5568] hover:text-[#E8E6DF]'}`}>
              🌍 Global — USD
            </button>
          </div>

          {/* Context line */}
          <p className="terminal-text text-[11px] opacity-40 mt-3">
            {isIndia ? 'RAZORPAY · UPI · CARDS · NET BANKING' : 'STRIPE · PAYPAL · ALL MAJOR CARDS'}
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div key={plan.key}
              className={`relative card-dark rounded-2xl p-6 flex flex-col transition-all duration-700 ${plan.hot ? 'glow-green' : ''}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                borderColor: plan.hot ? '#00E87A40' : undefined,
              }}>

              {plan.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00E87A] text-[#060608] text-[10px] font-display font-700 px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                  Most popular
                </div>
              )}

              <div className="mb-5">
                <p className="terminal-text text-[10px] mb-2" style={{ color: plan.color }}>{plan.name.toUpperCase()}</p>
                <div className="font-display font-800 text-[#E8E6DF] mb-1">
                  <span style={{ fontSize: plan.price.length > 7 ? '18px' : '26px' }}>{plan.price}</span>
                  <span className="text-[12px] text-[#4A5568] font-400">{plan.period}</span>
                </div>
                <p className="text-[#4A5568] text-[12px]">{plan.desc}</p>
              </div>

              <div className="h-px bg-[#1A1D23] mb-5" />

              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[12px] text-[#E8E6DF]/70">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={plan.cta === 'Contact us' ? 'mailto:hello@crewhirelabs.online' : '#waitlist'}
                className={`block text-center py-3 rounded-xl text-[13px] font-display font-600 transition-all ${
                  plan.hot ? 'btn-primary' : 'btn-ghost'
                }`}>
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Trial note */}
        <p className="text-center terminal-text text-[11px] opacity-30 mt-10">
          ALL PLANS · 7-DAY FREE TRIAL · NO CREDIT CARD · CANCEL ANYTIME
        </p>

      </div>
    </section>
  )
}
