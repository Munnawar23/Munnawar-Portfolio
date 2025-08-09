import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Skills from './pages/Skills'
import FactShowcase from './pages/FactShowcase'
import Testimonials from './pages/Testimonials'
import ContactForm from './components/layout/ContactForm'
import Footer from './components/layout/Footer'

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