import Hero from '../components/sections/Hero';
import FeaturedDishes from '../components/sections/FeaturedDishes';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Home;