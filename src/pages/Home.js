import Hero from '../components/Hero';
import Informative from '../components/Informative';
import ServicesSection from '../components/ServicesSection';
import SecondInformative from '../components/SecondInformative';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Informative />
      <ServicesSection />
      <SecondInformative />
      <ContactForm />
      <Testimonials />
    </div>
  );
};

export default Home;
