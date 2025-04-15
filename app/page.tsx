import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Testimonial from "./components/Tertimonial";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Service />
      <Testimonial />
      <Footer />
    </>
  );
}
