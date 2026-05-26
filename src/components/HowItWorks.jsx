import React from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Start your free trial',
    desc: 'Sign up at crewhirelabs.online. No credit card. Your 7-day trial starts immediately. Your brand gets its own workspace.',
    color: '#1A9E6E',
  },
  {
    num: '02',
    title: 'Feed your Brand Brain',
    desc: 'Upload your catalog, connect Shopify, paste your brand tone and FAQs. The Brand Brain ingests everything — this is what makes your crew know your business.',
    color: '#7C6EF5',
  },
  {
    num: '03',
    title: 'Hire your AI employees',
    desc: 'Browse the employee roster. Click Hire. Fill a short config — their role, focus areas, schedule. Your employee activates in under 60 seconds.',
    color: '#D4963A',
  },
  {
    num: '04',
    title: 'Watch your crew work',
    desc: 'Open your dashboard. Watch them go. Upsells sent. Churn risks flagged. Campaigns drafted. Briefings delivered. 24 hours a day, every day.',
    color: '#E0614A',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-crew-border">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crew-border text-[11px] font-mono text-crew-muted mb-5">
            How it works
          </div>
          <h2 className="font-display font-700 text-[clamp(28px,4vw,48px)] text-crew-white tracking-tight mb-4">
            From signup to crew<br />working in under an hour.
          </h2>
          <p className="text-crew-muted font-body text-[15px] max-w-md mx-auto">
            No engineers needed. No complex setup. Just hire and go.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-crew-border" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Number dot */}
                <div
                  className="w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 font-mono text-[13px] font-500 relative z-10"
                  style={{
                    borderColor: `${step.color}40`,
                    background: `${step.color}12`,
                    color: step.color,
                  }}
                >
                  {step.num}
                </div>

                <h3 className="font-display font-600 text-[16px] text-crew-white mb-3">{step.title}</h3>
                <p className="text-crew-muted font-body text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employees grid */}
        <div className="mt-20">
          <div className="text-[11px] font-mono text-crew-muted text-center mb-8 tracking-widest uppercase">
            Employees you can hire today
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Sales',     icon: '↗', color: '#1A9E6E', desc: 'Upsell & cross-sell' },
              { name: 'Retention', icon: '♾', color: '#7C6EF5', desc: 'LTV & reactivation' },
              { name: 'Campaign',  icon: '◈', color: '#D4963A', desc: 'Festivals & offers' },
              { name: 'Review',    icon: '◎', color: '#5BA3D4', desc: 'Sentiment & patterns' },
              { name: 'Product',   icon: '▣', color: '#C45FAD', desc: 'SKU performance' },
              { name: 'Founder',   icon: '◉', color: '#E0614A', desc: 'Daily intelligence' },
            ].map(emp => (
              <div
                key={emp.name}
                className="border border-crew-border rounded-xl p-4 bg-crew-card text-center card-hover cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] mx-auto mb-3"
                  style={{ background: `${emp.color}15`, color: emp.color, border: `1px solid ${emp.color}30` }}
                >
                  {emp.icon}
                </div>
                <div className="font-display font-600 text-[12px] text-crew-white mb-1">{emp.name}</div>
                <div className="text-[10px] font-mono text-crew-muted">{emp.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
