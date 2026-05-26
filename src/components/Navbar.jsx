import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-crew-black/90 backdrop-blur-md border-b border-crew-border' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 rounded-full border border-crew-green opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[5px] rounded-full bg-crew-green group-hover:bg-crew-green-bright transition-colors" />
          </div>
          <span className="font-display font-700 text-[15px] tracking-tight text-crew-white">
            CrewHire <span className="text-crew-muted font-400">Labs</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Pricing', 'How it works'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-[13px] text-crew-muted hover:text-crew-white transition-colors font-body"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#waitlist" className="btn-ghost text-[13px] px-4 py-2 rounded-lg">
            Join waitlist
          </a>
          <a href="#waitlist" className="btn-primary text-[13px] px-4 py-2 rounded-lg">
            Start free trial →
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-crew-muted hover:text-crew-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-crew-black border-t border-crew-border px-6 py-4 flex flex-col gap-4">
          {['Product', 'Pricing', 'How it works'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-[14px] text-crew-muted hover:text-crew-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#waitlist" className="btn-primary text-[13px] px-4 py-2.5 rounded-lg text-center mt-2">
            Start free trial →
          </a>
        </div>
      )}
    </nav>
  )
}
