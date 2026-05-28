import { GeoProvider } from './GeoContext'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Ticker     from './components/Ticker'
import HowItWorks from './components/HowItWorks'
import Agents     from './components/Agents'
import Pricing    from './components/Pricing'
import Waitlist   from './components/Waitlist'
import Footer     from './components/Footer'
import Privacy    from './pages/Privacy'
import Terms      from './pages/Terms'
import About      from './pages/About'

function Router() {
  const path = window.location.pathname
  if (path === '/privacy') return <Privacy />
  if (path === '/terms')   return <Terms />
  if (path === '/about')   return <About />
  return (
    <>
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
    </>
  )
}

export default function App() {
  return (
    <GeoProvider>
      <div className="scanlines" aria-hidden="true" />
      <div className="grain"     aria-hidden="true" />
      <div className="relative min-h-screen bg-[#060608]">
        <Router />
      </div>
    </GeoProvider>
  )
}
