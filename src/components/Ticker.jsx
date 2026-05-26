import React from 'react'

const ITEMS = [
  '12 upsells sent while you slept',
  'Campaign drafted in 40 seconds',
  '8 churn risks flagged automatically',
  'SKU return rate detected & acted on',
  'Eid campaign — 3 variants ready',
  'VIP customer identified & rewarded',
  'Morning briefing delivered at 8am',
  'New review sentiment analysed instantly',
  'Cross-sell sequence activated',
  'Brand Brain updated with new catalog',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="border-y border-crew-border bg-crew-card py-4 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-8">
            <span className="w-1.5 h-1.5 rounded-full bg-crew-green flex-shrink-0" />
            <span className="text-[12px] font-mono text-crew-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
