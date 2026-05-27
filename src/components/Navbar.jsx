import { useState, useEffect } from 'react'
import { useGeo } from '../GeoContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isIndia, toggle, loading } = useGeo()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { label: 'How it works', href: '#how' },
    { label: 'Agents',       href: '#agents' },
    { label: 'Pricing',      href: '#pricing' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 safe-top transition-all duration-500 ${
      scrolled ? 'bg-[#060608]/92 backdrop-blur-xl border-b border-[#1A1D23]' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0 group">
          <img
            src="/logo.png"
            alt="CrewHire Labs — Your AI Crew. Your Growth."
            className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0,232,122,0.25))' }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a key={l.label} href={l.href}
              className="text-[13px] text-[#4A5568] hover:text-[#E8E6DF] transition-colors font-body tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Geo toggle */}
          {!loading && (
            <div className="geo-toggle hidden sm:flex">
              <button className={`geo-btn ${isIndia ? 'active' : ''}`} onClick={() => toggle(true)}>
                🇮🇳 INR
              </button>
              <button className={`geo-btn ${!isIndia ? 'active' : ''}`} onClick={() => toggle(false)}>
                🌍 USD
              </button>
            </div>
          )}

          <a href="#waitlist"
            className="hidden md:block btn-primary text-[12px] px-4 py-2.5 rounded-xl whitespace-nowrap">
            Start free →
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#4A5568] hover:text-[#E8E6DF]"
            aria-label="Toggle menu">
            <div className="w-5 space-y-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#060608]/98 backdrop-blur-xl border-t border-[#1A1D23] px-5 py-5 flex flex-col gap-4">

          {/* Logo in mobile menu */}
          <img src="/logo.png" alt="CrewHire Labs" className="h-8 w-auto object-contain self-start"
            style={{ filter: 'drop-shadow(0 0 6px rgba(0,232,122,0.2))' }} />

          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-[14px] text-[#4A5568] hover:text-[#E8E6DF] transition-colors py-1">
              {l.label}
            </a>
          ))}

          {/* Mobile geo toggle */}
          {!loading && (
            <div className="geo-toggle self-start">
              <button className={`geo-btn ${isIndia ? 'active' : ''}`} onClick={() => toggle(true)}>🇮🇳 INR</button>
              <button className={`geo-btn ${!isIndia ? 'active' : ''}`} onClick={() => toggle(false)}>🌍 USD</button>
            </div>
          )}

          <a href="#waitlist" onClick={() => setOpen(false)}
            className="btn-primary text-[13px] px-5 py-3 rounded-xl text-center mt-1">
            Start free 7-day trial →
          </a>
        </div>
      </div>
    </nav>
  )
}
