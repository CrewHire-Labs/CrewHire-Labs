import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-crew-border px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Logo + tagline */}
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 rounded-full border border-crew-green opacity-60" />
              <div className="absolute inset-[4px] rounded-full bg-crew-green" />
            </div>
            <span className="font-display font-700 text-[14px] text-crew-white">
              CrewHire <span className="text-crew-muted font-400">Labs</span>
            </span>
          </div>
          <p className="text-[12px] font-mono text-crew-muted">Your AI Crew</p>
          <p className="text-[11px] font-mono text-crew-muted mt-1 opacity-60">crewhirelabs.online</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8">
          <div>
            <div className="text-[10px] font-mono text-crew-muted uppercase tracking-widest mb-3">Product</div>
            <div className="flex flex-col gap-2">
              {['CrewHire Workforce', 'CrewHire Marketplace', 'CrewHire OS', 'CrewHire Intelligence'].map(l => (
                <a key={l} href="#product" className="text-[12px] text-crew-muted hover:text-crew-white transition-colors font-body">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-crew-muted uppercase tracking-widest mb-3">Company</div>
            <div className="flex flex-col gap-2">
              {['About', 'Pricing', 'Waitlist', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-[12px] text-crew-muted hover:text-crew-white transition-colors font-body">{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a href="#waitlist" className="btn-primary px-5 py-2.5 rounded-xl text-[13px] block text-center mb-3">
            Start free trial →
          </a>
          <p className="text-[10px] font-mono text-crew-muted text-center">7 days free · No card</p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-crew-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-crew-muted">
          © 2025 CrewHire Labs. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" className="text-[11px] font-mono text-crew-muted hover:text-crew-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
