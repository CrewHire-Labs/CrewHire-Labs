const ITEMS = [
  'Hermes agents remember every interaction — forever. No resets. No starting over.',
  'Lead Agent found 12 new D2C brands on Shopify India today — DMs sent automatically',
  'Content Agent published SEO blog — written in brand tone, score 94/100, zero human effort',
  'Analytics Agent: CrewHire MRR tracking live — every rupee accounted for',
  'Your Sales Agent gets smarter every week — learns what works for YOUR brand specifically',
  'Retention Agent flagged 6 at-risk customers — win-back sequences launched automatically',
  'Support Agent resolved 9 queries in 3 minutes — founder never saw them',
  'Hermes self-improvement loop: agents 40% faster after 20 learned brand skills',
  'Campaign Agent drafted Diwali campaign — 3 variants ready, all in your brand voice',
  'Founder Agent morning brief delivered — wins, issues, priorities. 8am every day.',
  'Brand Brain updated — all agents now know your new product launch details',
  'One solo founder. One product. Running on the same agents we sell you.',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="border-y border-[#1A1D23] bg-[#080A0D] py-3.5 overflow-hidden">
      <div className="flex anim-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-10">
            <span className="w-1 h-1 rounded-full bg-[#00E87A] opacity-50 flex-shrink-0" />
            <span className="terminal-text text-[11px] opacity-40">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
