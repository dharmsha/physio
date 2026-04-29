import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import Ser from "./components/Ser";
export default function Home() {
  return (
    <>
      <Hero />
<Founder />
      <ServicesSection />
      <Ser />
      <WhyChooseUs />
      <Testimonials />
     
    </>
  );
}