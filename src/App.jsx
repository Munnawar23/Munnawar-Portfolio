import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import WorkSection from './sections/WorkSection'
import SkillSection from './sections/SkillSection'
import FactShowcaseSection from './sections/FactShowcaseSection'
import TestimonialSection from './sections/TestimonialSections'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillSection />
      <FactShowcaseSection />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;