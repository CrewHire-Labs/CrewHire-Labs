import React, { useEffect, useRef } from 'react'

const EMPLOYEES = [
  { name: 'Sana', role: 'Sales Employee',     color: '#1A9E6E', action: 'Sent 12 upsell sequences',        time: '2 min ago' },
  { name: 'Riya', role: 'Retention Employee', color: '#7C6EF5', action: 'Flagged 8 churn-risk customers',  time: '9 min ago' },
  { name: 'Cora', role: 'Campaign Employee',  color: '#D4963A', action: 'Drafted Eid campaign — 3 variants', time: '1 hr ago' },
  { name: 'Finn', role: 'Founder Employee',   color: '#E0614A', action: 'Morning briefing ready',          time: '6 hr ago' },
]

export default function Hero() {
  const orb1 = useRef(null)
  const orb2 = useRef(null)

  useEffect(() => {
    let frame
    let t = 0
    const animate = () => {
      t += 0.003
      if (orb1.current) {
        orb1.current.style.transform = `translate(${Math.sin(t) * 30}px, ${Math.cos(t * 0.7) * 20}px)`
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${Math.cos(t * 0.8) * 25}px, ${Math.sin(t * 1.1) * 18}px)`
      }
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Background orbs */}
      <div
        ref={orb1}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,158,110,0.12) 0%, transparent 70%)', transition: 'transform 0.1s ease' }}
      />
      <div
        ref={orb2}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,110,245,0.08) 0%, transparent 70%)', transition: 'transform 0.1s ease' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Kicker pill */}
      <div className="animate-fade-up opacity-0-init animate-delay-100 mb-7">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crew-border bg-crew-card text-[12px] font-mono text-crew-green">
          <span className="w-1.5 h-1.5 rounded-full bg-crew-green-bright animate-pulse-slow" />
          Now in private beta — 7-day free trial
        </div>
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up opacity-0-init animate-delay-200 font-display font-800 text-center leading-[1.05] tracking-tight mb-6 max-w-3xl">
        <span className="block text-[clamp(42px,6vw,80px)] text-crew-white">
          Hire AI employees
        </span>
        <span className="block text-[clamp(42px,6vw,80px)]" style={{
          background: 'linear-gradient(135deg, #22D48A 0%, #1A9E6E 50%, #0D5C40 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          built for your business.
        </span>
      </h1>

      {/* Subheadline */}
      <p className="animate-fade-up opacity-0-init animate-delay-300 text-center text-crew-muted font-body text-[clamp(15px,2vw,18px)] max-w-xl leading-relaxed mb-10">
        CrewHire Labs gives your D2C brand a full AI workforce — Sales, Retention, Campaigns, Reviews — working 24/7 without a salary.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up opacity-0-init animate-delay-400 flex flex-col sm:flex-row items-center gap-3 mb-16">
        <a
          href="#waitlist"
          className="btn-primary px-7 py-3.5 rounded-xl text-[14px] w-full sm:w-auto text-center"
        >
          Start free — 7 days, no card needed →
        </a>
        <a
          href="#how-it-works"
          className="btn-ghost px-6 py-3.5 rounded-xl text-[14px] w-full sm:w-auto text-center text-crew-muted"
        >
          See how it works
        </a>
      </div>

      {/* Live activity preview */}
      <div className="animate-fade-up opacity-0-init animate-delay-500 w-full max-w-lg">
        <div className="text-[11px] font-mono text-crew-muted mb-3 text-center tracking-widest uppercase">
          Live crew activity — Nyla Beauty Co.
        </div>
        <div className="border border-crew-border rounded-2xl bg-crew-card overflow-hidden">

          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-crew-border">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-[11px] font-mono text-crew-muted">crewhirelabs.online/dashboard</span>
          </div>

          {/* Activity feed */}
          <div className="divide-y divide-crew-border">
            {EMPLOYEES.map((emp, i) => (
              <div
                key={emp.name}
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors"
                style={{ animationDelay: `${600 + i * 80}ms` }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-display font-600 flex-shrink-0"
                  style={{ background: `${emp.color}22`, color: emp.color, border: `1px solid ${emp.color}44` }}
                >
                  {emp.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[12px] font-display font-500 text-crew-white">{emp.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: `${emp.color}18`, color: emp.color }}>
                      {emp.role}
                    </span>
                  </div>
                  <div className="text-[11px] text-crew-muted truncate">{emp.action}</div>
                </div>
                <div className="text-[10px] font-mono text-crew-muted flex-shrink-0">{emp.time}</div>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: emp.color, boxShadow: `0 0 6px ${emp.color}` }} />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-crew-border flex items-center justify-between">
            <span className="text-[11px] font-mono text-crew-muted">4 employees active</span>
            <span className="text-[11px] font-mono text-crew-green">● All systems running</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-in opacity-0-init animate-delay-600 mt-12 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-crew-border" />
        <span className="text-[11px] font-mono text-crew-muted">scroll to explore</span>
      </div>
    </section>
  )
}
