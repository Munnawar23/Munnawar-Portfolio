import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import FactShowcase from './sections/FactShowcase'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter h-screen text-gray-200 antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <FactShowcase />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App