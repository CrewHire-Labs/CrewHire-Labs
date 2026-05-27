import { useState, useRef, useEffect } from 'react'

const TEAMS = [
  {
    id: 'revenue',
    label: 'Revenue Team',
    color: '#00E87A',
    icon: '↗',
    desc: 'Sells more, recovers lost carts, keeps customers coming back.',
    agents: [
      { name: 'Sales Agent', tasks: ['Cart recovery', 'Upsell sequences', 'Product recommendations', 'Offer triggers'], phase: 1 },
      { name: 'Retention Agent', tasks: ['Churn alerts', 'Win-back campaigns', 'VIP detection', 'Repeat nudges'], phase: 2 },
      { name: 'Support Agent', tasks: ['FAQ responses', 'Return handling', 'Order queries', 'Escalation alerts'], phase: 1 },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing Team',
    color: '#7C6EF5',
    icon: '◈',
    desc: 'Creates content, runs campaigns, handles every channel.',
    agents: [
      { name: 'Content Agent', tasks: ['Blogs & SEO', 'Email copy', 'Product descriptions', 'Landing pages'], phase: 1 },
      { name: 'Social Agent', tasks: ['Instagram captions', 'Reels scripts', 'Trend analysis', 'Hashtag sets'], phase: 2 },
      { name: 'Campaign Agent', tasks: ['Festival offers', 'WhatsApp blasts', 'Launch planning', 'Discount logic'], phase: 2 },
    ],
  },
  {
    id: 'growth',
    label: 'Growth Team',
    color: '#F5A623',
    icon: '⬡',
    desc: 'Finds partners, generates leads, expands the brand.',
    agents: [
      { name: 'Partnership Agent', tasks: ['Influencer outreach', 'Affiliate connects', 'Agency pipeline', 'Collab tracking'], phase: 3 },
      { name: 'Lead Agent', tasks: ['Brand discovery', 'DM outreach', 'Follow-up sequences', 'Pipeline mgmt'], phase: 3 },
    ],
  },
  {
    id: 'ops',
    label: 'Operations Team',
    color: '#FF6B6B',
    icon: '◎',
    desc: 'Tracks every number. Briefs the founder every morning.',
    agents: [
      { name: 'Analytics Agent', tasks: ['MRR tracking', 'ROAS reports', 'LTV analysis', 'Return rate alerts'], phase: 3 },
      { name: 'Founder Agent', tasks: ['Daily briefing', 'Win/loss summary', 'Priority actions', 'Business pulse'], phase: 1 },
    ],
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

export default function Agents() {
  const [active, setActive] = useState('revenue')
  const [ref, visible] = useInView()
  const team = TEAMS.find(t => t.id === active)

  return (
    <section id="agents" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23]" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="terminal-text mb-4 opacity-50 tracking-widest">THE AI CREW</p>
          <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight mb-4"
            style={{ fontSize: 'clamp(26px,4vw,44px)' }}>
            4 teams. 10 agents.<br className="hidden md:block" /> All trained on your brand.
          </h2>
          <p className="text-[#4A5568] text-[14px] max-w-md mx-auto">
            Each agent knows your catalog, your tone, your customers. They talk to each other. They never sleep.
          </p>
        </div>

        {/* Team tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {TEAMS.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[13px] font-display font-500 transition-all duration-200 ${
                active === t.id ? 'text-[#060608]' : 'border-[#1A1D23] text-[#4A5568] hover:text-[#E8E6DF] hover:border-[#2A2D33] bg-transparent'
              }`}
              style={active === t.id ? { background: t.color, borderColor: t.color } : {}}>
              <span>{t.icon}</span>
              <span className="hidden sm:inline">{t.label}</span>
              <span className="sm:hidden">{t.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Team panel */}
        <div key={active} className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Team info */}
          <div className="card-dark rounded-2xl p-6 hud lg:col-span-1"
            style={{ borderColor: `${team.color}25` }}>
            <div className="text-3xl mb-4" style={{ color: team.color }}>{team.icon}</div>
            <h3 className="font-display font-700 text-[18px] text-[#E8E6DF] mb-3">{team.label}</h3>
            <p className="text-[#4A5568] text-[13px] leading-relaxed mb-6">{team.desc}</p>
            <div className="pt-4 border-t border-[#1A1D23]">
              <p className="terminal-text opacity-40 mb-2">AGENTS IN THIS TEAM</p>
              <p className="font-display font-600 text-[28px]" style={{ color: team.color }}>{team.agents.length}</p>
            </div>
          </div>

          {/* Agents */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {team.agents.map((agent, i) => (
              <div key={agent.name} className="card-dark rounded-2xl p-5 transition-all duration-500"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  borderColor: `${team.color}15`,
                }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-display font-700"
                    style={{ background: `${team.color}15`, color: team.color, border: `1px solid ${team.color}25` }}>
                    {agent.name.slice(0,2).toUpperCase()}
                  </div>
                  <span className="terminal-text text-[9px] opacity-40">
                    {agent.phase === 1 ? 'PHASE 1' : agent.phase === 2 ? 'PHASE 2' : 'PHASE 3'}
                  </span>
                </div>
                <h4 className="font-display font-600 text-[13px] text-[#E8E6DF] mb-3">{agent.name}</h4>
                <div className="space-y-1.5">
                  {agent.tasks.map(task => (
                    <div key={task} className="flex items-center gap-2 text-[11px] text-[#4A5568]">
                      <div className="w-0.5 h-0.5 rounded-full flex-shrink-0" style={{ background: team.color }} />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Internal use note */}
        <div className="mt-8 p-4 rounded-xl border border-[#1A1D23] bg-[#0D0F12] flex items-start gap-3">
          <span className="terminal-text text-[10px] px-2 py-1 rounded" style={{ background: '#00E87A15', color: '#00E87A', border: '1px solid #00E87A25' }}>INFO</span>
          <p className="text-[#4A5568] text-[12px] leading-relaxed">
            <span className="text-[#E8E6DF] font-500">CrewHire Labs itself runs on these agents.</span> Our Content Agent writes this website copy. Our Lead Agent finds D2C brands. Our Founder Agent briefs the team every morning. We eat our own product — and our public dashboard shows it live.
          </p>
        </div>

      </div>
    </section>
  )
}
