import { GeoProvider } from './GeoContext'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Ticker      from './components/Ticker'
import HowItWorks  from './components/HowItWorks'
import Agents      from './components/Agents'
import Pricing     from './components/Pricing'
import Waitlist    from './components/Waitlist'
import Footer      from './components/Footer'

export default function App() {
  return (
    <GeoProvider>
      {/* Atmospheric overlays — PWA feel */}
      <div className="scanlines" aria-hidden="true" />
      <div className="grain"     aria-hidden="true" />

      <div className="relative min-h-screen bg-[#060608]">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <HowItWorks />
          <Agents />
          <Pricing />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </GeoProvider>
  )
}
