const ITEMS = [
  'Lead Agent found 12 new D2C brands on Shopify India today',
  'Content Agent published SEO blog — score 94/100',
  'Analytics Agent: MRR up ₹28k this week · CAC ₹0 organic',
  'Social Agent drafted LinkedIn post — 847 impressions',
  'Founder Agent morning brief delivered — 0 churn this week',
  'AI growth team running campaigns while founder sleeps',
  'Sales Agent recovered 3 abandoned carts — ₹18,400 saved',
  'Retention Agent flagged 6 churn risks — rescue sequences started',
  'Support Agent resolved 9 queries — zero escalations',
  'Campaign Agent drafted Diwali offer — 3 variants ready',
  'Partnership Agent: 2 influencer responses received',
  'Analytics Agent: ROAS 4.2x this month — up from 2.8x',
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
