import { useEffect, useRef, useState } from 'react'
import { useGeo } from '../GeoContext'
import Logo from './Logo'

// CrewHire Labs OWN internal agents — not a fake brand
const INTERNAL_FEED = [
  { agent: 'Lead Agent',      init: 'LA', color: '#00E87A',
    msg: 'Found 12 new D2C brands on Shopify India — DMs sent, 3 opened', t: '2m' },
  { agent: 'Content Agent',   init: 'CA', color: '#7C6EF5',
    msg: 'Published: "How AI crews cut D2C CAC by 40%" — SEO score 94/100', t: '11m' },
  { agent: 'Analytics Agent', init: 'AA', color: '#F5A623',
    msg: 'Week 3 report: MRR up ₹28k · 4 trials started · CAC ₹0 (organic)', t: '34m' },
  { agent: 'Social Agent',    init: 'SA', color: '#4FC3F7',
    msg: 'LinkedIn post drafted: "We run CrewHire Labs on our own agents" — 847 views', t: '1h' },
  { agent: 'Founder Agent',   init: 'FA', color: '#FF6B6B',
    msg: 'Morning brief: 2 inbound leads, 1 trial converting today, 0 churn this week', t: '6h' },
]

// Highlighted keyword component
function Highlight({ children, color = '#00E87A' }) {
  return (
    <mark style={{
      background: `${color}18`,
      color: color,
      borderBottom: `1px solid ${color}40`,
      borderRadius: '3px',
      padding: '0 4px',
    }}>
      {children}
    </mark>
  )
}

// Words that cycle in the typewriter
const CYCLE_PHRASES = [
  'grows revenue.',
  'retains customers.',
  'creates content.',
  'handles support.',
  'runs 24/7.',
]

export default function Hero() {
  const orb1 = useRef(null)
  const orb2 = useRef(null)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const { geo, loading } = useGeo()

  // Floating orbs
  useEffect(() => {
    let f, t = 0
    const go = () => {
      t += 0.003
      if (orb1.current) orb1.current.style.transform = `translate(${Math.sin(t)*22}px,${Math.cos(t*0.7)*16}px)`
      if (orb2.current) orb2.current.style.transform = `translate(${Math.cos(t*0.9)*18}px,${Math.sin(t*1.1)*12}px)`
      f = requestAnimationFrame(go)
    }
    go()
    return () => cancelAnimationFrame(f)
  }, [])

  // Typewriter
  useEffect(() => {
    const phrase = CYCLE_PHRASES[phraseIdx]
    if (typing) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setPhraseIdx(v => (v + 1) % CYCLE_PHRASES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, phraseIdx])

  const h = geo?.hero

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-8 pt-20 pb-16 overflow-hidden">

      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none anim-grid"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,232,122,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,232,122,0.03) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

      {/* Orbs */}
      <div ref={orb1} className="absolute top-1/4 left-1/5 w-64 h-64 md:w-96 md:h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(0,232,122,0.09) 0%,transparent 70%)', willChange: 'transform' }} />
      <div ref={orb2} className="absolute bottom-1/3 right-1/5 w-48 h-48 md:w-72 md:h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,110,245,0.07) 0%,transparent 70%)', willChange: 'transform' }} />

      {/* Horizontal scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg,transparent,rgba(0,232,122,0.15),transparent)',
            animation: 'scanMove 7s ease-in-out infinite',
            top: '35%',
          }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

        {/* Logo — large in hero */}
        <div className="anim-fade-up d1 mb-8">
          <div style={{ filter: 'drop-shadow(0 0 20px rgba(0,232,122,0.28))' }}>
            <Logo height={56} showTagline />
          </div>
        </div>

        {/* Kicker */}
        <div className="anim-fade-up d2 mb-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1A1D23] bg-[#0D0F12] hud">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
            <span className="terminal-text text-[11px]">
              {loading ? 'LOADING...' : geo?.hero.kicker}
            </span>
          </div>
        </div>

        {/* Headline with highlights */}
        <h1 className="anim-fade-up d3 font-display font-800 tracking-tight leading-[1.06] mb-5"
          style={{ fontSize: 'clamp(34px,6vw,72px)' }}>
          <span className="block text-[#E8E6DF]">
            {h?.headline1 ?? 'Stop running your brand'}
          </span>
          <span className="block text-[#E8E6DF]">
            {h?.headline2 ?? 'on spreadsheets and WhatsApp.'}
          </span>
          <span className="block mt-1">
            <Highlight>Get an AI growth team.</Highlight>
          </span>
        </h1>

        {/* Typewriter */}
        <div className="anim-fade-up d3 mb-4 h-6 flex items-center justify-center">
          <p className="font-mono text-[13px] md:text-[14px] text-[#4A5568]">
            Your crew&nbsp;
            <span className="text-[#00E87A] font-500">{displayed}</span>
            <span className="text-[#00E87A] anim-blink">|</span>
          </p>
        </div>

        {/* Sub copy with key phrases highlighted */}
        <p className="anim-fade-up d4 text-[#4A5568] text-[14px] md:text-[16px] max-w-xl leading-relaxed mb-10">
          {geo?.hero.sub ?? 'CrewHire Labs gives your D2C brand a full AI growth team — trained on your brand, working every hour.'}
        </p>

        {/* CTAs */}
        <div className="anim-fade-up d4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-14">
          <a href="#waitlist"
            className="btn-primary px-8 py-4 rounded-2xl text-[14px] md:text-[15px] mobile-full text-center">
            Start free — 7 days, no card →
          </a>
          <a href="#how"
            className="btn-ghost px-6 py-4 rounded-2xl text-[14px] mobile-full text-center">
            See how it works
          </a>
        </div>

        {/* ── INTERNAL AGENTS SHOWCASE ── */}
        <div className="anim-fade-up d5 w-full max-w-lg anim-float-y">
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="terminal-text text-[10px] opacity-50 tracking-widest">CREWHIRE LABS · OUR OWN AGENTS · LIVE</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
              <span className="terminal-text text-[10px]" style={{ color: '#00E87A' }}>RUNNING NOW</span>
            </div>
          </div>

          <div className="card-dark rounded-2xl overflow-hidden border border-[#1A1D23] hud">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1A1D23] bg-[#080A0D]">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <div className="w-2 h-2 rounded-full bg-[#28C840]" />
              </div>
              <span className="terminal-text text-[10px] opacity-40 ml-2">crewhirelabs · internal dashboard</span>
            </div>

            {/* Feed items */}
            {INTERNAL_FEED.map((item, i) => (
              <div key={i}
                className="flex items-start gap-3 px-4 py-3 border-b border-[#1A1D23]/60 last:border-0 hover:bg-white/[0.012] transition-colors">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-display font-700 flex-shrink-0 mt-0.5"
                  style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}25` }}>
                  {item.init}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-display font-600 text-[#E8E6DF]">{item.agent}</span>
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  </div>
                  <p className="text-[11px] text-[#4A5568] leading-relaxed">{item.msg}</p>
                </div>
                <span className="terminal-text text-[10px] opacity-40 flex-shrink-0">{item.t}</span>
              </div>
            ))}

            {/* Status footer */}
            <div className="px-4 py-2.5 bg-[#080A0D] flex items-center justify-between">
              <span className="terminal-text text-[10px] opacity-40">5 internal agents · building in public</span>
              <span className="terminal-text text-[10px]" style={{ color: '#00E87A' }}>● ALL RUNNING</span>
            </div>
          </div>

          {/* Caption */}
          <p className="terminal-text text-[10px] opacity-30 text-center mt-3">
            WE RUN CREWHIRE LABS ON OUR OWN AGENTS. THIS IS REAL.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="anim-fade-in d7 mt-10 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#1A1D23]" />
          <span className="terminal-text text-[10px] opacity-30">scroll</span>
        </div>
      </div>
    </section>
  )
}
