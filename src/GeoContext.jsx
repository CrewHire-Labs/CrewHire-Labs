import { createContext, useContext, useState, useEffect } from 'react'

const GeoCtx = createContext(null)

const INDIA_PRICES = {
  starter: { price: '₹4,999', period: '/mo', agents: 5, label: 'Starter' },
  growth:  { price: '₹14,999', period: '/mo', agents: 10, label: 'Growth' },
  scale:   { price: '₹39,999', period: '/mo', agents: 10, label: 'Scale' },
  enterprise: { price: '₹75k–2L+', period: '/mo', agents: null, label: 'Enterprise' },
}

const GLOBAL_PRICES = {
  starter: { price: '$149', period: '/mo', agents: 5, label: 'Starter' },
  growth:  { price: '$399', period: '/mo', agents: 10, label: 'Growth' },
  scale:   { price: '$999', period: '/mo', agents: 10, label: 'Scale' },
  enterprise: { price: '$3k–$15k+', period: '/mo', agents: null, label: 'Enterprise' },
}

export function GeoProvider({ children }) {
  const [isIndia, setIsIndia] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('ch_geo')
    if (saved !== null) {
      setIsIndia(saved === 'IN')
      setLoading(false)
      return
    }
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => {
        const india = d.country_code === 'IN'
        setIsIndia(india)
        localStorage.setItem('ch_geo', d.country_code || 'GLOBAL')
      })
      .catch(() => setIsIndia(false))
      .finally(() => setLoading(false))
  }, [])

  const toggle = (forceIndia) => {
    const next = forceIndia !== undefined ? forceIndia : !isIndia
    setIsIndia(next)
    localStorage.setItem('ch_geo', next ? 'IN' : 'GLOBAL')
  }

  const prices = isIndia ? INDIA_PRICES : GLOBAL_PRICES
  const currency = isIndia ? 'INR' : 'USD'
  const flag = isIndia ? '🇮🇳' : '🌍'

  return (
    <GeoCtx.Provider value={{ isIndia, loading, toggle, prices, currency, flag }}>
      {children}
    </GeoCtx.Provider>
  )
}

export const useGeo = () => useContext(GeoCtx)
