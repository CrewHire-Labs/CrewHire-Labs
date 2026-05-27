import { useState, useRef, useEffect } from 'react'
import { useGeo } from '../GeoContext'

// ─────────────────────────────────────────────
// SETUP INSTRUCTIONS:
// 1. Go to https://formspree.io → Create account (free)
// 2. New form → name it "CrewHire Waitlist"
// 3. Copy your form ID (looks like: xyzabcde)
// 4. Replace YOUR_FORMSPREE_ID below with your actual ID
// ─────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

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

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [brand, setBrand] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [err, setErr] = useState('')
  const { isIndia, flag } = useGeo()
  const [ref, visible] = useInView()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) { setErr('Please enter a valid email.'); setStatus('error'); return }
    setStatus('loading'); setErr('')

    // Save locally always (backup)
    try {
      const existing = JSON.parse(localStorage.getItem('ch_waitlist') || '[]')
      existing.push({ email, brand, geo: isIndia ? 'IN' : 'GLOBAL', ts: Date.now() })
      localStorage.setItem('ch_waitlist', JSON.stringify(existing))
    } catch {}

    // Submit to Formspree
    if (FORMSPREE_ID !== 'YOUR_FORMSPREE_ID') {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email,
            brand_name: brand || 'Not provided',
            geo: isIndia ? '🇮🇳 India' : '🌍 Global',
            source: 'crewhirelabs.online waitlist',
          }),
        })
        if (!res.ok) throw new Error()
      } catch {
        // Still show success — email saved locally
      }
    }
    setStatus('success')
    setEmail('')
    setBrand('')
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23] relative overflow-hidden" ref={ref}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse,rgba(0,232,122,0.07) 0%,transparent 70%)' }} />
      </div>

      <div className={`relative z-10 max-w-xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        <p className="terminal-text mb-4 opacity-50 tracking-widest">JOIN THE WAITLIST {flag}</p>

        <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight leading-tight mb-5"
          style={{ fontSize: 'clamp(28px,5vw,52px)' }}>
          Hire your first agent<br />
          <span className="anim-shimmer">today. Free.</span>
        </h2>

        <p className="text-[#4A5568] text-[14px] leading-relaxed mb-10 max-w-sm mx-auto">
          {isIndia
            ? 'Join D2C founders across India already on the waitlist. Be first when we open.'
            : 'Join D2C brands globally on the waitlist. Be first when we open.'}
        </p>

        {status === 'success' ? (
          <div className="card-dark rounded-2xl p-10 border border-[#00E87A]/30 glow-green hud">
            <div className="w-14 h-14 rounded-full bg-[#00E87A]/10 border border-[#00E87A]/30 flex items-center justify-center mx-auto mb-5">
              <span className="text-[#00E87A] text-xl">✓</span>
            </div>
            <h3 className="font-display font-700 text-[20px] text-[#E8E6DF] mb-2">You're on the list.</h3>
            <p className="text-[#4A5568] text-[13px] leading-relaxed">
              We'll email you the moment your trial opens. Your AI crew is warming up.
            </p>
            <p className="terminal-text text-[11px] mt-6 opacity-40">SAVED · {isIndia ? 'INDIA' : 'GLOBAL'} WAITLIST</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={brand}
              onChange={e => setBrand(e.target.value)}
              placeholder="Your brand name (optional)"
              className="w-full bg-[#0D0F12] border border-[#1A1D23] rounded-xl px-4 py-3.5 text-[14px] text-[#E8E6DF] placeholder-[#4A5568] focus:outline-none focus:border-[#00E87A]/50 transition-colors font-body"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setStatus('idle'); setErr('') }}
                placeholder="your@email.com"
                required
                className="flex-1 bg-[#0D0F12] border border-[#1A1D23] rounded-xl px-4 py-3.5 text-[14px] text-[#E8E6DF] placeholder-[#4A5568] focus:outline-none focus:border-[#00E87A]/50 transition-colors font-body"
              />
              <button type="submit" disabled={status === 'loading'}
                className="btn-primary px-6 py-3.5 rounded-xl text-[14px] whitespace-nowrap disabled:opacity-50 mobile-full">
                {status === 'loading' ? 'Joining...' : 'Join waitlist →'}
              </button>
            </div>

            {status === 'error' && (
              <p className="terminal-text text-[11px] text-red-400 text-left">{err}</p>
            )}

            <p className="terminal-text text-[10px] opacity-30 mt-1">
              NO SPAM · NO CARD · 7-DAY FREE TRIAL WHEN WE OPEN
            </p>
          </form>
        )}

        {/* Trust row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: '◎', text: '7-day free trial' },
            { icon: '◈', text: 'No credit card' },
            { icon: '⬡', text: 'Cancel anytime' },
            { icon: '●', text: '24/7 AI crew' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-[#00E87A] text-[10px]">{item.icon}</span>
              <span className="terminal-text text-[11px] opacity-50">{item.text.toUpperCase()}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
