import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import TrackingBox from "../components/TrackingBox";
import ServicesSection from "../components/ServicesSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ClientLogos from "../components/ClientLogos";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="mt-[-60px] mb-20">
        <TrackingBox />
      </div>
      <ServicesSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <ClientLogos />    
    </Layout>
  );
};

export default Home;
