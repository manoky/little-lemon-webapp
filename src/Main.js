import { Hero } from './components/Hero'
import { HighLights } from './components/HighLights/HighLights'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'

export const Main = () => (
  <main className="main-content">
    <Hero />
    <HighLights />
    <Testimonials />
    <About />
  </main>
)
