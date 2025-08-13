import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import FactShowcase from './components/FactShowcase'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased smooth-scroll' >
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <FactShowcase />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;