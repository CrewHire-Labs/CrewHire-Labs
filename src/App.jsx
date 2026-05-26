import React from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Ticker      from './components/Ticker'
import ProductStack from './components/ProductStack'
import HowItWorks  from './components/HowItWorks'
import Pricing     from './components/Pricing'
import Waitlist    from './components/Waitlist'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-crew-black">

      {/* Film grain overlay */}
      <div className="grain" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ProductStack />
        <HowItWorks />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
