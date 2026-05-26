import React, { useState } from 'react'

const PRODUCTS = [
  {
    name: 'CrewHire Workforce',
    tag: 'Core product',
    color: '#1A9E6E',
    icon: '⬡',
    desc: 'Hire AI employees for your brand. Each one knows your catalog, customers, and voice. They work every hour of every day — upselling, retaining, campaigning, and reporting.',
    features: ['Sales Employee', 'Retention Employee', 'Campaign Employee', 'Review Employee', 'Founder Employee'],
  },
  {
    name: 'CrewHire Marketplace',
    tag: 'Coming Phase 3',
    color: '#7C6EF5',
    icon: '◈',
    desc: 'An open marketplace where industry experts build and sell specialized AI employees. Luxury expert. Restaurant expert. Pet care expert. You hire from the marketplace in one click.',
    features: ['Industry specialists', 'Creator economy', '70% revenue to builders', 'Any business type', 'One-click hire'],
  },
  {
    name: 'CrewHire OS',
    tag: 'Powered by Hermes',
    color: '#D4963A',
    icon: '◎',
    desc: 'The operating system that keeps every employee alive. Persistent memory, skill evolution, task scheduling, and cross-employee communication — the nerve behind the crew.',
    features: ['Hermes runtime', 'Persistent memory', 'Skill evolution', 'Subagent delegation', '24/7 scheduling'],
  },
  {
    name: 'CrewHire Intelligence',
    tag: 'Your competitive moat',
    color: '#E0614A',
    icon: '◉',
    desc: 'Brand Brain stores everything about your business. Industry Brains carry domain expertise for Fashion, Beauty, Jewelry, and more. The Commerce Graph learns from every brand.',
    features: ['Brand Brain (pgvector)', 'Fashion Brain', 'Beauty Brain', 'Jewelry Brain', 'Commerce Graph'],
  },
]

export default function ProductStack() {
  const [active, setActive] = useState(0)
  const p = PRODUCTS[active]

  return (
    <section id="product" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crew-border text-[11px] font-mono text-crew-muted mb-5">
            The product stack
          </div>
          <h2 className="font-display font-700 text-[clamp(28px,4vw,48px)] text-crew-white tracking-tight mb-4">
            Four products. One unified platform.
          </h2>
          <p className="text-crew-muted font-body text-[15px] max-w-lg mx-auto leading-relaxed">
            Every product under CrewHire Labs is named consistently. You understand the full offering instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Tab list */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3">
            {PRODUCTS.map((prod, i) => (
              <button
                key={prod.name}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-4 rounded-xl border transition-all duration-200 flex-1 lg:flex-none ${
                  active === i
                    ? 'bg-crew-card border-opacity-100'
                    : 'border-crew-border hover:border-opacity-60 bg-transparent hover:bg-crew-card/40'
                }`}
                style={active === i ? { borderColor: prod.color, boxShadow: `0 0 20px ${prod.color}18` } : { borderColor: '#1E2B1E' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[18px]" style={{ color: prod.color }}>{prod.icon}</span>
                  <div>
                    <div className="font-display font-600 text-[13px] text-crew-white leading-tight hidden lg:block">{prod.name}</div>
                    <div className="font-display font-600 text-[12px] text-crew-white leading-tight lg:hidden">{prod.name.replace('CrewHire ', '')}</div>
                    <div className="text-[10px] font-mono mt-0.5 hidden lg:block" style={{ color: prod.color }}>{prod.tag}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            key={active}
            className="lg:col-span-3 border rounded-2xl bg-crew-card p-8"
            style={{ borderColor: `${p.color}40`, boxShadow: `0 0 40px ${p.color}10` }}
          >
            <div className="text-[11px] font-mono mb-3" style={{ color: p.color }}>{p.tag}</div>
            <h3 className="font-display font-700 text-[24px] text-crew-white mb-4">{p.name}</h3>
            <p className="text-crew-muted font-body text-[14px] leading-relaxed mb-8">{p.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {p.features.map(f => (
                <div key={f} className="flex items-center gap-2.5 text-[13px] text-crew-white">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
