import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useGeo } from '../GeoContext'

// Live uptime counter
function Uptime() {
  const [secs, setSecs] = useState(0)
  useEffect(() => {
    const start = Date.now() - 1209600000 // 14 days uptime
    const update = () => setSecs(Math.floor((Date.now() - start) / 1000))
    update()
    const t = setInterval(update, 1000)
    return () => clearInterval(t)
  }, [])
  const d = Math.floor(secs / 86400)
  const h = Math.floor((secs % 86400) / 3600)
  const m = Math.floor((secs % 3600) / 60)
  const s = secs % 60
  return (
    <span className="terminal-text text-[11px]" style={{ color: '#00E87A' }}>
      {String(d).padStart(2,'0')}d {String(h).padStart(2,'0')}h {String(m).padStart(2,'0')}m {String(s).padStart(2,'0')}s
    </span>
  )
}

// Live agent status dots
const AGENT_STATUS = [
  { name: 'Lead Agent',      color: '#00E87A', status: 'ACTIVE' },
  { name: 'Content Agent',   color: '#7C6EF5', status: 'ACTIVE' },
  { name: 'Analytics Agent', color: '#F5A623', status: 'ACTIVE' },
  { name: 'Social Agent',    color: '#4FC3F7', status: 'IDLE'   },
  { name: 'Founder Agent',   color: '#FF6B6B', status: 'ACTIVE' },
]

export default function Footer() {
  const { geo } = useGeo()
  const yr = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1A1D23] relative overflow-hidden">

      {/* Circuit board background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#00E87A 1px, transparent 1px),
            linear-gradient(90deg, #00E87A 1px, transparent 1px),
            radial-gradient(circle, #00E87A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 60px 60px',
          backgroundPosition: '0 0, 0 0, 30px 30px',
        }} />

      {/* Top status bar */}
      <div className="border-b border-[#1A1D23] bg-[#080A0D] px-5 md:px-8 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
              <span className="terminal-text text-[10px] opacity-50">SYSTEM UPTIME</span>
              <Uptime />
            </div>
            <div className="flex items-center gap-2">
              <span className="terminal-text text-[10px] opacity-50">REGION</span>
              <span className="terminal-text text-[10px]" style={{ color: '#00E87A' }}>
                {geo?.code === 'IN' ? '🇮🇳 INDIA' : '🌍 GLOBAL'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {AGENT_STATUS.map(a => (
              <div key={a.name} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: a.status === 'ACTIVE' ? a.color : '#2A2D33',
                    boxShadow: a.status === 'ACTIVE' ? `0 0 4px ${a.color}` : 'none' }} />
                <span className="terminal-text text-[10px] opacity-40 hidden sm:inline">{a.name.split(' ')[0]}</span>
                <span className="terminal-text text-[9px]"
                  style={{ color: a.status === 'ACTIVE' ? a.color : '#2A2D33' }}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="px-5 md:px-8 pt-14 pb-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

            {/* Brand col */}
            <div className="md:col-span-4">
              <div className="mb-5" style={{ filter: 'drop-shadow(0 0 12px rgba(0,232,122,0.2))' }}>
                <Logo height={44} showTagline />
              </div>
              <p className="text-[#4A5568] text-[13px] leading-relaxed mb-6 max-w-xs">
                AI growth teams for D2C brands. Every agent trained on your brand. Running every hour.
                Starting with India — going global.
              </p>
              {/* Terminal block */}
              <div className="bg-[#080A0D] border border-[#1A1D23] rounded-xl p-4 font-mono text-[11px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[#4A5568] text-[10px]">crewhire ~ agents</span>
                </div>
                <div className="space-y-1.5 text-[10px]">
                  <p><span className="text-[#00E87A]">$</span> <span className="text-[#4A5568]">status --all-agents</span></p>
                  <p className="text-[#00E87A]">✓ 5 agents running</p>
                  <p className="text-[#00E87A]">✓ Brand Brain: synced</p>
                  <p className="text-[#00E87A]">✓ Memory: 14d retained</p>
                  <p><span className="text-[#4A5568]">uptime:</span> <span className="text-[#00E87A]"><Uptime /></span></p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <p className="terminal-text text-[10px] opacity-40 mb-5 tracking-widest">PRODUCT</p>
              <div className="space-y-3">
                {['CrewHire Workforce','CrewHire OS','CrewHire Intelligence','Marketplace (soon)'].map(l => (
                  <a key={l} href="#"
                    className="block text-[13px] text-[#4A5568] hover:text-[#00E87A] transition-colors font-body">{l}</a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="terminal-text text-[10px] opacity-40 mb-5 tracking-widest">AGENTS</p>
              <div className="space-y-3">
                {['Sales Agent','Retention Agent','Content Agent','Support Agent','Founder Agent','Analytics Agent'].map(l => (
                  <a key={l} href="#agents"
                    className="block text-[13px] text-[#4A5568] hover:text-[#00E87A] transition-colors font-body">{l}</a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="terminal-text text-[10px] opacity-40 mb-5 tracking-widest">COMPANY</p>
              <div className="space-y-3">
                {['About','Pricing','Waitlist','Contact'].map(l => (
                  <a key={l}
                    href={l==='About'?'/about':l==='Contact'?'mailto:hello@crewhirelabs.online':`#${l.toLowerCase()}`}
                    className="block text-[13px] text-[#4A5568] hover:text-[#00E87A] transition-colors font-body">{l}</a>
                ))}
              </div>
            </div>

            {/* CTA col */}
            <div className="md:col-span-2">
              <p className="terminal-text text-[10px] opacity-40 mb-5 tracking-widest">GET STARTED</p>
              <a href="#waitlist"
                className="btn-primary block text-center px-5 py-3.5 rounded-xl text-[13px] mb-3">
                Start free →
              </a>
              <p className="terminal-text text-[10px] opacity-30 text-center">7 DAYS FREE</p>
              <p className="terminal-text text-[10px] opacity-30 text-center">NO CARD NEEDED</p>

              {/* Mini agent status */}
              <div className="mt-6 space-y-2">
                <p className="terminal-text text-[10px] opacity-30 mb-3">AGENT STATUS</p>
                {AGENT_STATUS.slice(0,3).map(a => (
                  <div key={a.name} className="flex items-center justify-between">
                    <span className="terminal-text text-[10px] opacity-40">{a.name.split(' ')[0]}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full"
                        style={{ background: a.status === 'ACTIVE' ? a.color : '#2A2D33',
                          boxShadow: a.status === 'ACTIVE' ? `0 0 3px ${a.color}` : 'none' }} />
                      <span className="terminal-text text-[9px]"
                        style={{ color: a.status === 'ACTIVE' ? a.color : '#2A2D33' }}>{a.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Divider with circuit trace */}
          <div className="relative mb-6">
            <div className="h-px bg-[#1A1D23]" />
            <div className="absolute left-1/4 top-0 h-px w-1/2"
              style={{ background: 'linear-gradient(90deg,transparent,rgba(0,232,122,0.3),transparent)' }} />
            <div className="absolute left-1/2 -top-1 w-2 h-2 rounded-full border border-[#00E87A]/40 bg-[#060608]" />
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo height={20} />
              <span className="terminal-text text-[10px] opacity-20">
                © {yr} CREWHIRE LABS · YOUR AI CREW. YOUR GROWTH.
              </span>
            </div>
            <div className="flex items-center gap-5">
              {['Privacy','Terms','Contact'].map(l => (
                <a key={l}
                  href={l==='Privacy'?'/privacy':l==='Terms'?'/terms':'mailto:hello@crewhirelabs.online'}
                  className="terminal-text text-[10px] opacity-20 hover:opacity-60 transition-opacity hover:text-[#00E87A]">
                  {l.toUpperCase()}
                </a>
              ))}
              <div className="flex items-center gap-1.5 border border-[#1A1D23] rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E87A] anim-pulse-dot" />
                <span className="terminal-text text-[10px]" style={{ color: '#00E87A' }}>ALL SYSTEMS GO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
