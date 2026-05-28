import Logo from './Logo'

export default function LegalLayout({ title, subtitle, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-[#060608]">
      {/* Scanlines */}
      <div className="scanlines" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Top bar */}
      <div className="border-b border-[#1A1D23] bg-[#080A0D] px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="/" style={{ filter: 'drop-shadow(0 0 8px rgba(0,232,122,0.2))' }}>
          <Logo height={32} />
        </a>
        <a href="/"
          className="terminal-text text-[11px] opacity-40 hover:opacity-80 hover:text-[#00E87A] transition-all">
          ← BACK TO HOME
        </a>
      </div>

      {/* Hero */}
      <div className="border-b border-[#1A1D23] px-5 md:px-8 py-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,232,122,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,232,122,0.025) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,rgba(0,232,122,0.06) 0%,transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto">
          <p className="terminal-text text-[10px] opacity-40 tracking-widest mb-4">CREWHIRE LABS · LEGAL</p>
          <h1 className="font-display font-700 text-[#E8E6DF] mb-3"
            style={{ fontSize: 'clamp(28px,4vw,44px)' }}>{title}</h1>
          <p className="text-[#4A5568] text-[14px] mb-4">{subtitle}</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1A1D23] bg-[#0D0F12]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A]" />
            <span className="terminal-text text-[10px] opacity-60">LAST UPDATED: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-14">
        <div className="space-y-10">{children}</div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[#1A1D23] px-5 md:px-8 py-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="terminal-text text-[10px] opacity-20">© {new Date().getFullYear()} CREWHIRE LABS · YOUR AI CREW. YOUR GROWTH.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="terminal-text text-[10px] opacity-30 hover:opacity-60 hover:text-[#00E87A] transition-all">PRIVACY</a>
            <a href="/terms"   className="terminal-text text-[10px] opacity-30 hover:opacity-60 hover:text-[#00E87A] transition-all">TERMS</a>
            <a href="mailto:hello@crewhirelabs.online" className="terminal-text text-[10px] opacity-30 hover:opacity-60 hover:text-[#00E87A] transition-all">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Section component for legal pages
export function LegalSection({ title, children }) {
  return (
    <div className="border border-[#1A1D23] rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-[#1A1D23] bg-[#0D0F12] flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00E87A]" />
        <h2 className="font-display font-600 text-[15px] text-[#E8E6DF]">{title}</h2>
      </div>
      <div className="px-6 py-5 space-y-3 bg-[#080A0D]">
        {children}
      </div>
    </div>
  )
}

// Paragraph
export function LP({ children }) {
  return <p className="text-[#4A5568] text-[13px] leading-relaxed">{children}</p>
}

// List
export function LL({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#4A5568]">
          <div className="w-1 h-1 rounded-full bg-[#00E87A] flex-shrink-0 mt-1.5" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// Highlight box
export function LBox({ label, children }) {
  return (
    <div className="border border-[#00E87A]/20 bg-[#00E87A]/5 rounded-xl px-5 py-4">
      {label && <p className="terminal-text text-[10px] text-[#00E87A] opacity-70 mb-2">{label}</p>}
      <p className="text-[#E8E6DF]/70 text-[13px] leading-relaxed">{children}</p>
    </div>
  )
}
