import { createContext, useContext, useState, useEffect } from 'react'

const GeoCtx = createContext(null)

// ── INDIA CONTENT ──
export const INDIA = {
  flag: '🇮🇳',
  code: 'IN',
  hero: {
    kicker: 'NOW LIVE FOR INDIAN D2C BRANDS',
    headline1: 'Stop running your brand',
    headline2: 'on spreadsheets and WhatsApp.',
    headline3: 'Get an AI growth team.',
    sub: 'CrewHire Labs gives Indian D2C founders a full AI crew — Sales, Retention, Content, Support — trained on your brand, working every hour, for less than one hire.',
  },
  plans: [
    { key:'starter', name:'Starter', price:'₹4,999', period:'/mo', agents:5, hot:false,
      desc:'For founders proving AI works for their brand first.',
      features:['5 AI agents','1 brand','Founder + Sales + Support','Brand Brain setup','Dashboard access','Email support'],
      cta:'Start free trial', payment:'Razorpay · UPI · Net Banking' },
    { key:'growth', name:'Growth', price:'₹14,999', period:'/mo', agents:10, hot:true,
      desc:'Full crew activated. All 10 agents. Ready to scale.',
      features:['10 AI agents','1 brand','All 4 agent teams','Industry Brain included','Cross-agent workflows','Priority support'],
      cta:'Start free trial', payment:'Razorpay · UPI · Net Banking' },
    { key:'scale', name:'Scale', price:'₹39,999', period:'/mo', agents:10, hot:false,
      desc:'For agencies and multi-brand operators.',
      features:['10 agents','Multiple brands','All Industry Brains','Advanced automations','White-label option','Dedicated support'],
      cta:'Start free trial', payment:'Razorpay · UPI · Net Banking' },
    { key:'enterprise', name:'Enterprise', price:'₹75k–2L+', period:'/mo', agents:null, hot:false,
      desc:'Custom agents. Private infra. Dedicated setup.',
      features:['Custom agents','Private deployment','Dedicated infra','SLA guarantee','Custom onboarding','Audit logs'],
      cta:'Contact us', payment:'' },
  ],
}

// ── GLOBAL CONTENT ──
export const GLOBAL = {
  flag: '🌍',
  code: 'GLOBAL',
  hero: {
    kicker: 'AI GROWTH TEAMS FOR D2C BRANDS WORLDWIDE',
    headline1: 'Your D2C brand deserves',
    headline2: 'a world-class team.',
    headline3: 'Now it has one.',
    sub: 'CrewHire Labs gives any D2C brand a full AI growth team — Sales, Retention, Content, Support — trained on your brand, working every hour, for a fraction of one hire.',
  },
  plans: [
    { key:'starter', name:'Starter', price:'$149', period:'/mo', agents:5, hot:false,
      desc:'For founders proving AI works for their brand first.',
      features:['5 AI agents','1 brand','Founder + Sales + Support','Brand Brain setup','Dashboard access','Email support'],
      cta:'Start free trial', payment:'Stripe · PayPal · All major cards' },
    { key:'growth', name:'Growth', price:'$399', period:'/mo', agents:10, hot:true,
      desc:'Full crew activated. All 10 agents. Ready to scale.',
      features:['10 AI agents','1 brand','All 4 agent teams','Industry Brain included','Cross-agent workflows','Priority support'],
      cta:'Start free trial', payment:'Stripe · PayPal · All major cards' },
    { key:'scale', name:'Scale', price:'$999', period:'/mo', agents:null, hot:false,
      desc:'For agencies and multi-brand operators.',
      features:['Unlimited agents','Multiple brands','All Industry Brains','Advanced automations','Priority support','Commerce Graph'],
      cta:'Start free trial', payment:'Stripe · PayPal · All major cards' },
    { key:'enterprise', name:'Enterprise', price:'$3k–$15k+', period:'/mo', agents:null, hot:false,
      desc:'Self-hosted. Custom workforce. Dedicated environment.',
      features:['Self-hosted','Private VPC','Custom agents','Dedicated onboarding','SLA guarantee','Audit logs'],
      cta:'Contact us', payment:'' },
  ],
}

export function GeoProvider({ children }) {
  const [geo, setGeo] = useState(null) // null = loading

  useEffect(() => {
    // Check cache first
    const cached = localStorage.getItem('ch_geo_v2')
    if (cached) { setGeo(cached === 'IN' ? INDIA : GLOBAL); return }

    // Silent detection — no UI toggle shown
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => {
        const isIN = d.country_code === 'IN'
        localStorage.setItem('ch_geo_v2', d.country_code || 'GLOBAL')
        setGeo(isIN ? INDIA : GLOBAL)
      })
      .catch(() => {
        // Fallback to global silently
        setGeo(GLOBAL)
      })
  }, [])

  return (
    <GeoCtx.Provider value={{ geo, loading: geo === null }}>
      {children}
    </GeoCtx.Provider>
  )
}

export const useGeo = () => useContext(GeoCtx)
