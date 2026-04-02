
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import GridSection from './components/GridSection'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <GridSection />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
