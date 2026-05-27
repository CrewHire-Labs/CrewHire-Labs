import { useEffect, useRef, useState } from 'react'
import { useGeo } from '../GeoContext'

const FEED = [
  { agent: 'Sales', init: 'SA', color: '#00E87A',   msg: 'Cart recovery sent to 14 customers — ₹42,800 recovered', t: '1m' },
  { agent: 'Content', init: 'CA', color: '#7C6EF5', msg: 'SEO blog drafted: "Best skincare routine for Indian skin"', t: '8m' },
  { agent: 'Retention', init: 'RA', color: '#F5A623',msg: 'Churn alert: 6 customers inactive 28+ days — rescue started', t: '22m' },
  { agent: 'Support', init: 'SU', color: '#4FC3F7', msg: 'Resolved 9 return queries — 0 escalations needed', t: '1h' },
  { agent: 'Founder', init: 'FA', color: '#FF6B6B', msg: 'Morning brief ready — revenue up 12% WoW, 3 action items', t: '6h' },
]

const TYPEWORDS = ['Sales.', 'Retention.', 'Content.', 'Support.', 'Growth.']

export default function Hero() {
  const orbRef = useRef(null)
  const orb2Ref = useRef(null)
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const { isIndia } = useGeo()

  /* floating orbs */
  useEffect(() => {
    let frame, t = 0
    const animate = () => {
      t += 0.004
      if (orbRef.current) orbRef.current.style.transform = `translate(${Math.sin(t)*25}px,${Math.cos(t*0.7)*18}px)`
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${Math.cos(t*0.9)*20}px,${Math.sin(t*1.1)*14}px)`
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  /* typewriter */
  useEffect(() => {
    const word = TYPEWORDS[wordIdx]
    let i = displayed.length
    if (typing) {
      if (i < word.length) {
        const tid = setTimeout(() => setDisplayed(word.slice(0, i+1)), 80)
        return () => clearTimeout(tid)
      } else {
        const tid = setTimeout(() => setTyping(false), 1600)
        return () => clearTimeout(tid)
      }
    } else {
      if (i > 0) {
        const tid = setTimeout(() => setDisplayed(word.slice(0, i-1)), 45)
        return () => clearTimeout(tid)
      } else {
        setWordIdx(v => (v + 1) % TYPEWORDS.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, wordIdx])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 md:px-8 pt-24 pb-16 overflow-hidden grid-bg">

      {/* Moving grid */}
      <div className="absolute inset-0 anim-grid opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,232,122,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,232,122,0.04) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

      {/* Orbs */}
      <div ref={orbRef} className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(0,232,122,0.1) 0%,transparent 70%)', willChange: 'transform' }} />
      <div ref={orb2Ref} className="absolute bottom-1/3 right-1/5 w-56 h-56 md:w-72 md:h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,110,245,0.08) 0%,transparent 70%)', willChange: 'transform' }} />

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E87A]/20 to-transparent"
          style={{ animation: 'scanMove 6s ease-in-out infinite', top: '40%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">

        {/* Logo — hero top */}
        <div className="anim-fade-up d1 mb-8">
          <img
            src="/logo.png"
            alt="CrewHire Labs — Your AI Crew. Your Growth."
            className="h-16 md:h-20 w-auto object-contain mx-auto"
            style={{ filter: 'drop-shadow(0 0 24px rgba(0,232,122,0.3))' }}
          />
        </div>

        {/* Status pill */}
        <div className="anim-fade-up d1 mb-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1A1D23] bg-[#0D0F12] hud">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
            <span className="terminal-text">
              {isIndia ? 'NOW IN PRIVATE BETA — INDIA 🇮🇳' : 'NOW IN PRIVATE BETA — GLOBAL 🌍'}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="anim-fade-up d2 font-display font-800 tracking-tight leading-[1.04] mb-5 mobile-hero-title"
          style={{ fontSize: 'clamp(38px,6.5vw,80px)' }}>
          <span className="block text-[#E8E6DF]">AI growth teams for</span>
          <span className="block text-[#E8E6DF]">D2C brands. Running</span>
          <span className="block">
            <span className="anim-shimmer">24/7. No salary.</span>
          </span>
        </h1>

        {/* Typewriter sub */}
        <div className="anim-fade-up d3 mb-4">
          <p className="font-mono text-[13px] md:text-[15px] text-[#4A5568]">
            Your AI crew handles{' '}
            <span className="text-[#00E87A]">{displayed}</span>
            <span className="text-[#00E87A] anim-blink">|</span>
          </p>
        </div>

        <p className="anim-fade-up d3 text-[#4A5568] text-[14px] md:text-[16px] max-w-lg leading-relaxed mb-10 mobile-pad">
          Stop running your brand manually. CrewHire Labs gives your D2C brand a full AI growth team — trained on your brand, working every hour, for a fraction of one hire.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up d4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-12">
          <a href="#waitlist"
            className="btn-primary px-7 py-4 rounded-2xl text-[14px] md:text-[15px] mobile-full text-center">
            Start free — 7 days, no card →
          </a>
          <a href="#how"
            className="btn-ghost px-6 py-4 rounded-2xl text-[14px] mobile-full text-center">
            See how it works
          </a>
        </div>

        {/* Live dashboard preview */}
        <div className="anim-fade-up d5 w-full max-w-lg anim-float-y">
          <p className="terminal-text mb-3 opacity-60 tracking-widest">LIVE CREW ACTIVITY — NYLA BEAUTY CO.</p>
          <div className="card-dark rounded-2xl overflow-hidden border border-[#1A1D23] hud">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1A1D23] bg-[#080A0D]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="terminal-text opacity-40 ml-2">crewhirelabs.online/dashboard</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
                <span className="terminal-text text-[10px]">LIVE</span>
              </div>
            </div>

            {/* Feed */}
            {FEED.map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3 border-b border-[#1A1D23]/60 last:border-0 hover:bg-white/[0.015] transition-colors">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-display font-700 flex-shrink-0 mt-0.5"
                  style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                  {item.init}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-display font-600 text-[#E8E6DF]">{item.agent} Agent</span>
                    <div className="w-1 h-1 rounded-full" style={{ background: item.color }} />
                  </div>
                  <p className="text-[11px] text-[#4A5568] leading-relaxed line-clamp-2">{item.msg}</p>
                </div>
                <span className="terminal-text text-[10px] opacity-50 flex-shrink-0">{item.t}</span>
              </div>
            ))}

            {/* Footer */}
            <div className="px-4 py-2.5 bg-[#080A0D] flex items-center justify-between">
              <span className="terminal-text opacity-50">5 agents active</span>
              <span className="terminal-text" style={{ color: '#00E87A' }}>● ALL SYSTEMS GO</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="anim-fade-in d7 mt-12 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#1A1D23]" />
          <span className="terminal-text opacity-40">scroll</span>
        </div>
      </div>
    </section>
  )
}
