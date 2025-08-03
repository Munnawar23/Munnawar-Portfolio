import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import FactShowcase from './sections/FactShowcase'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter h-screen text-gray-200 antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <FactShowcase />
      <Footer />
    </main>
  )
}

export default App