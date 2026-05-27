import { useRef, useEffect, useState } from 'react'
import { useGeo } from '../GeoContext'

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

export default function Pricing() {
  const { geo, loading } = useGeo()
  const [ref, visible] = useInView()
  const plans = geo?.plans ?? []

  return (
    <section id="pricing" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="terminal-text mb-4 opacity-50 tracking-widest">PRICING</p>
          <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight mb-4"
            style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            Your first hire costs<br className="hidden md:block" /> zero salary.
          </h2>
          <p className="text-[#4A5568] text-[14px] max-w-md mx-auto mb-4">
            7-day free trial on every plan. No credit card. Your crew delivers — then you upgrade.
          </p>
          {!loading && geo && (
            <p className="terminal-text text-[11px] opacity-40">
              {geo.flag} {geo.code === 'IN' ? 'INDIA · INR · RAZORPAY · UPI · NET BANKING' : 'GLOBAL · USD · STRIPE · PAYPAL'}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div key={plan.key}
              className={`relative card-dark rounded-2xl p-6 flex flex-col transition-all duration-700 ${plan.hot ? 'glow-green' : ''}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                borderColor: plan.hot ? 'rgba(0,232,122,0.35)' : undefined,
              }}>
              {plan.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00E87A] text-[#060608] text-[10px] font-display font-700 px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="mb-5">
                <p className="terminal-text text-[10px] mb-2 text-[#00E87A]">{plan.name.toUpperCase()}</p>
                <div className="font-display font-800 text-[#E8E6DF] mb-1">
                  <span style={{ fontSize: plan.price.length > 6 ? '18px' : '26px' }}>{plan.price}</span>
                  <span className="text-[12px] text-[#4A5568] font-400">{plan.period}</span>
                </div>
                <p className="text-[#4A5568] text-[12px]">{plan.desc}</p>
              </div>
              <div className="h-px bg-[#1A1D23] mb-5" />
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[12px] text-[#E8E6DF]/70">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5 bg-[#00E87A]" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.payment && (
                <p className="terminal-text text-[10px] opacity-30 mb-3">{plan.payment}</p>
              )}
              <a href={plan.cta === 'Contact us' ? 'mailto:hello@crewhirelabs.online' : '#waitlist'}
                className={`block text-center py-3 rounded-xl text-[13px] font-display font-600 transition-all ${plan.hot ? 'btn-primary' : 'btn-ghost'}`}>
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="text-center terminal-text text-[11px] opacity-25 mt-10">
          ALL PLANS · 7-DAY FREE TRIAL · NO CREDIT CARD · CANCEL ANYTIME
        </p>
      </div>
    </section>
  )
}
