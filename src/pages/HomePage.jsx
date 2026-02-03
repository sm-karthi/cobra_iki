import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Industries from '../components/sections/Industries';
import CTA from '../components/sections/CTA';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Features />
      <Industries />
      <CTA />
    </div>
  );
};

export default HomePage;
