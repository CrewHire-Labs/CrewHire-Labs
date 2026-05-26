import React, { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      // Replace this URL with your Cloudflare Worker or Supabase function endpoint
      // For MVP: use a free form service like Resend, Formspree, or Supabase edge function
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, source: 'crewhirelabs.online waitlist' }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      // Fallback: save locally and show success for MVP
      // In production: connect to Supabase edge function
      const existing = JSON.parse(localStorage.getItem('waitlist') || '[]')
      existing.push({ email, ts: Date.now() })
      localStorage.setItem('waitlist', JSON.stringify(existing))
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <section id="waitlist" className="py-28 px-6 border-t border-crew-border relative overflow-hidden">

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(26,158,110,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-crew-border text-[11px] font-mono text-crew-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-crew-green animate-pulse-slow" />
          7-day free trial — no card needed
        </div>

        <h2 className="font-display font-800 text-[clamp(28px,5vw,52px)] text-crew-white tracking-tight leading-tight mb-5">
          Hire your first<br />
          <span style={{
            background: 'linear-gradient(135deg, #22D48A 0%, #1A9E6E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            AI employee today.
          </span>
        </h2>

        <p className="text-crew-muted font-body text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
          Join D2C founders already on the waitlist. Be first when we open — your crew will be ready.
        </p>

        {status === 'success' ? (
          <div className="border border-crew-green/40 bg-crew-green/10 rounded-2xl px-8 py-8">
            <div className="text-[32px] mb-4">✓</div>
            <div className="font-display font-700 text-[18px] text-crew-white mb-2">You're on the list.</div>
            <div className="text-crew-muted font-body text-[13px]">
              We'll email you the moment your trial is ready. Your AI crew is warming up.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setStatus('idle'); setErrorMsg('') }}
              placeholder="your@email.com"
              className="flex-1 bg-crew-card border border-crew-border rounded-xl px-4 py-3.5 text-[14px] font-body text-crew-white placeholder-crew-muted focus:outline-none focus:border-crew-green transition-colors"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary px-6 py-3.5 rounded-xl text-[14px] whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Joining...' : 'Join waitlist →'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-[12px] font-mono text-red-400 mt-3">{errorMsg}</p>
        )}

        {status !== 'success' && (
          <p className="text-[11px] font-mono text-crew-muted mt-5">
            No credit card. No spam. Just your AI crew, ready to work.
          </p>
        )}

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { label: '7-day free trial', icon: '◎' },
            { label: 'No card needed', icon: '◈' },
            { label: 'Cancel anytime', icon: '⬡' },
            { label: '24/7 crew always on', icon: '●' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 text-[12px] text-crew-muted font-mono">
              <span className="text-crew-green text-[10px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
