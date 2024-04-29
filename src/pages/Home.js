import Hero from '../components/Hero';
import Informative from '../components/Informative';
import ServicesSection from '../components/ServicesSection';
import SecondInformative from '../components/SecondInformative';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import BestSeller from '../components/BestSeller';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Informative />
      <SecondInformative />
      <ServicesSection />
      <ContactForm />
      <Testimonials />
    </div>
  );
};

export default Home;
