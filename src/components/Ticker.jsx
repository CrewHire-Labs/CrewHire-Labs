const ITEMS = [
  '14 cart recoveries sent while founder slept',
  'Diwali campaign drafted in 38 seconds',
  '6 churn risks flagged and rescued automatically',
  'SEO blog published — zero human effort',
  'Return query resolved in 12 seconds',
  'Instagram caption batch: 7 posts ready',
  'Morning briefing: revenue up 12% WoW',
  'VIP customer identified — loyalty offer sent',
  'SKU risk detected — Sales Agent notified',
  'WhatsApp blast scheduled for Eid campaign',
  '₹2.4L influenced by AI crew this week',
  'Support Agent resolved 9 queries — 0 escalations',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="border-y border-[#1A1D23] bg-[#080A0D] py-3.5 overflow-hidden">
      <div className="flex anim-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-10">
            <span className="w-1 h-1 rounded-full bg-[#00E87A] opacity-60 flex-shrink-0" />
            <span className="terminal-text opacity-50 text-[11px]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
