import { useGeo } from '../GeoContext'

export default function Footer() {
  const { isIndia } = useGeo()
  const yr = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1A1D23] px-5 md:px-8 py-12 safe-bottom">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/logo.png"
              alt="CrewHire Labs"
              className="h-12 w-auto object-contain mb-4"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,232,122,0.2))' }}
            />
            <p className="text-[#4A5568] text-[12px] leading-relaxed mb-3">
              AI growth teams for D2C brands.<br />
              Starting with India. Going global.
            </p>
            <p className="terminal-text text-[10px] opacity-30">
              {isIndia ? '🇮🇳 INDIA · INR · RAZORPAY' : '🌍 GLOBAL · USD · STRIPE'}
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="terminal-text text-[10px] opacity-40 mb-4 tracking-widest">PRODUCT</p>
            {['CrewHire Workforce','CrewHire OS','CrewHire Intelligence','CrewHire Marketplace'].map(l => (
              <a key={l} href="#"
                className="block text-[12px] text-[#4A5568] hover:text-[#E8E6DF] transition-colors mb-2.5 font-body">
                {l}
              </a>
            ))}
          </div>

          {/* Agents */}
          <div>
            <p className="terminal-text text-[10px] opacity-40 mb-4 tracking-widest">AGENTS</p>
            {['Sales Agent','Retention Agent','Content Agent','Support Agent','Founder Agent','Analytics Agent'].map(l => (
              <a key={l} href="#agents"
                className="block text-[12px] text-[#4A5568] hover:text-[#E8E6DF] transition-colors mb-2.5 font-body">
                {l}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="terminal-text text-[10px] opacity-40 mb-4 tracking-widest">COMPANY</p>
            {['About','Pricing','Waitlist','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="block text-[12px] text-[#4A5568] hover:text-[#E8E6DF] transition-colors mb-2.5 font-body">
                {l}
              </a>
            ))}
            <a href="#waitlist"
              className="btn-primary inline-block px-5 py-2.5 rounded-xl text-[12px] mt-4">
              Start free →
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1D23] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-5 w-auto opacity-30" />
            <p className="terminal-text text-[10px] opacity-25">
              © {yr} CREWHIRE LABS · YOUR AI CREW. YOUR GROWTH.
            </p>
          </div>
          <div className="flex gap-6">
            {['Privacy','Terms','Contact'].map(l => (
              <a key={l} href="#"
                className="terminal-text text-[10px] opacity-25 hover:opacity-60 transition-opacity">
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
