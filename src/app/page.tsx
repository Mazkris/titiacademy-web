import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainingByLevel from "@/components/TrainingByLevel";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyTiti from "@/components/WhyTiti";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrainingByLevel />
        <About />
        <Services />
        <WhyTiti />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
