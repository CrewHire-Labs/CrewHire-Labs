import React, { useState } from 'react'

const PLANS = [
  {
    name: 'Starter',
    price: { monthly: 199, annual: 166 },
    desc: 'For founders just getting started.',
    color: '#1A9E6E',
    features: [
      '5 AI employees',
      '1 brand',
      'Brand Brain setup',
      'Basic automations',
      'Workforce dashboard',
      'Email support',
    ],
    cta: 'Start free trial',
    hot: false,
  },
  {
    name: 'Growth',
    price: { monthly: 499, annual: 415 },
    desc: 'For brands ready to scale fast.',
    color: '#22D48A',
    features: [
      '10 AI employees',
      '1 brand',
      'Adaptive workforce',
      'Industry Brain included',
      'Cross-agent workflows',
      'Priority support',
    ],
    cta: 'Start free trial',
    hot: true,
  },
  {
    name: 'Scale',
    price: { monthly: 999, annual: 832 },
    desc: 'For multi-brand operators.',
    color: '#7C6EF5',
    features: [
      'Unlimited employees',
      'Multi-brand',
      'All Industry Brains',
      'Advanced automations',
      'Commerce Graph access',
      'Dedicated support',
    ],
    cta: 'Start free trial',
    hot: false,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    desc: 'Self-hosted. Custom. Private.',
    color: '#D4963A',
    features: [
      'Self-hosted deployment',
      'Private VPC',
      'Custom employee builds',
      'Dedicated onboarding',
      'SLA guarantee',
      'Audit logs',
    ],
    cta: 'Contact us',
    hot: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-28 px-6 border-t border-crew-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crew-border text-[11px] font-mono text-crew-muted mb-5">
            Pricing
          </div>
          <h2 className="font-display font-700 text-[clamp(28px,4vw,48px)] text-crew-white tracking-tight mb-4">
            Your first hire costs<br />zero salary.
          </h2>
          <p className="text-crew-muted font-body text-[15px] max-w-md mx-auto mb-8">
            7-day free trial on every plan. No credit card. If your crew delivers — and it will — you upgrade.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl border border-crew-border bg-crew-card">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-lg text-[12px] font-display font-500 transition-all ${
                !annual ? 'bg-crew-green text-crew-white' : 'text-crew-muted hover:text-crew-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-lg text-[12px] font-display font-500 transition-all flex items-center gap-2 ${
                annual ? 'bg-crew-green text-crew-white' : 'text-crew-muted hover:text-crew-white'
              }`}
            >
              Annual
              <span className="text-[10px] bg-crew-green-bright/20 text-crew-green-bright px-1.5 py-0.5 rounded-full font-mono">-17%</span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`relative border rounded-2xl p-6 bg-crew-card card-hover flex flex-col ${
                plan.hot ? 'border-crew-green glow-green' : 'border-crew-border'
              }`}
            >
              {plan.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crew-green text-crew-white text-[10px] font-display font-700 px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                  Most popular
                </div>
              )}

              <div className="mb-5">
                <div className="text-[11px] font-mono mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </div>
                <div className="font-display font-800 text-crew-white mb-1">
                  {plan.price.monthly ? (
                    <>
                      <span className="text-[32px]">
                        ${annual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-[13px] text-crew-muted font-400">/mo</span>
                    </>
                  ) : (
                    <span className="text-[24px]">Custom</span>
                  )}
                </div>
                <div className="text-[12px] text-crew-muted font-body">{plan.desc}</div>
              </div>

              <div className="h-px bg-crew-border mb-5" />

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[12px] text-crew-white/80">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center py-2.5 rounded-xl text-[13px] font-display font-600 transition-all ${
                  plan.hot
                    ? 'btn-primary'
                    : 'btn-ghost'
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Trial reassurance */}
        <div className="mt-12 text-center">
          <p className="text-[12px] font-mono text-crew-muted">
            All plans include a 7-day free trial · No credit card required · Cancel anytime
          </p>
        </div>

      </div>
    </section>
  )
}
