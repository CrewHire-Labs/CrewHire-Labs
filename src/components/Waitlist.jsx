import { useState, useRef, useEffect } from 'react'
import { useGeo } from '../GeoContext'

// FormSubmit.co — completely free, zero account needed
// First submission sends a confirmation email to activate
const FORMSUBMIT_EMAIL = 'hello@crewhirelabs.online'

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
  const [status, setStatus] = useState('idle')
  const [err, setErr] = useState('')
  const { geo } = useGeo()
  const [ref, visible] = useInView()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) { setErr('Please enter a valid email.'); setStatus('error'); return }
    setStatus('loading'); setErr('')

    // Always save locally as backup
    try {
      const list = JSON.parse(localStorage.getItem('ch_waitlist') || '[]')
      list.push({ email, brand, geo: geo?.code || 'GLOBAL', ts: Date.now() })
      localStorage.setItem('ch_waitlist', JSON.stringify(list))
    } catch {}

    // Submit to FormSubmit.co — free, no account needed
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          brand_name: brand || 'Not provided',
          region: geo?.code === 'IN' ? '🇮🇳 India' : '🌍 Global',
          source: 'crewhirelabs.online waitlist',
          _subject: `New CrewHire Labs waitlist signup — ${geo?.code === 'IN' ? 'India' : 'Global'}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error()
    } catch { /* still show success — email saved locally as backup */ }

    setStatus('success')
    setEmail('')
    setBrand('')
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 px-5 md:px-8 border-t border-[#1A1D23] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse,rgba(0,232,122,0.06) 0%,transparent 70%)' }} />
      </div>

      <div className={`relative z-10 max-w-xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        <p className="terminal-text mb-4 opacity-50 tracking-widest">
          {geo?.code === 'IN' ? '🇮🇳 JOIN INDIAN D2C WAITLIST' : '🌍 JOIN GLOBAL WAITLIST'}
        </p>

        <h2 className="font-display font-700 text-[#E8E6DF] tracking-tight leading-tight mb-5"
          style={{ fontSize: 'clamp(28px,5vw,50px)' }}>
          Hire your first agent.<br />
          <span className="anim-shimmer">Free. Today.</span>
        </h2>

        <p className="text-[#4A5568] text-[14px] leading-relaxed mb-10 max-w-sm mx-auto">
          {geo?.code === 'IN'
            ? 'Join D2C founders across India already on the list. Be first when we open your trial.'
            : 'Join D2C brands globally on the list. Be first when we open your trial.'}
        </p>

        {status === 'success' ? (
          <div className="card-dark rounded-2xl p-10 border border-[#00E87A]/25 glow-green hud">
            <div className="w-14 h-14 rounded-full bg-[#00E87A]/10 border border-[#00E87A]/30 flex items-center justify-center mx-auto mb-5">
              <span className="text-[#00E87A] text-2xl">✓</span>
            </div>
            <h3 className="font-display font-700 text-[20px] text-[#E8E6DF] mb-2">You're on the list.</h3>
            <p className="text-[#4A5568] text-[13px] leading-relaxed">
              We'll email you the moment your trial opens. Your AI crew is warming up.
            </p>
            <p className="terminal-text text-[10px] mt-5 opacity-30">CONFIRMED · {geo?.code === 'IN' ? 'INDIA' : 'GLOBAL'}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="text" value={brand} onChange={e => setBrand(e.target.value)}
              placeholder="Your brand name (optional)"
              className="w-full bg-[#0D0F12] border border-[#1A1D23] rounded-xl px-4 py-3.5 text-[14px] text-[#E8E6DF] placeholder-[#4A5568] focus:outline-none focus:border-[#00E87A]/40 transition-colors font-body" />
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={e => { setEmail(e.target.value); setStatus('idle'); setErr('') }}
                placeholder="your@email.com" required
                className="flex-1 bg-[#0D0F12] border border-[#1A1D23] rounded-xl px-4 py-3.5 text-[14px] text-[#E8E6DF] placeholder-[#4A5568] focus:outline-none focus:border-[#00E87A]/40 transition-colors font-body" />
              <button type="submit" disabled={status === 'loading'}
                className="btn-primary px-6 py-3.5 rounded-xl text-[14px] whitespace-nowrap disabled:opacity-50 mobile-full">
                {status === 'loading' ? 'Joining...' : 'Join waitlist →'}
              </button>
            </div>
            {status === 'error' && <p className="terminal-text text-[11px] text-red-400 text-left">{err}</p>}
            <p className="terminal-text text-[10px] opacity-25 mt-1">NO SPAM · NO CARD · FREE TRIAL WHEN WE OPEN</p>
          </form>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: '◎', text: '7-day free trial' },
            { icon: '◈', text: 'No credit card' },
            { icon: '⬡', text: 'Cancel anytime' },
            { icon: '●', text: '24/7 AI crew' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-[#00E87A] text-[10px]">{item.icon}</span>
              <span className="terminal-text text-[11px] opacity-40">{item.text.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
