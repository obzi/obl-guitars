import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Gallery from './sections/Gallery'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
