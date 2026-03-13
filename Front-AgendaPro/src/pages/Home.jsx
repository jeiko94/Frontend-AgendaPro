import Navbar from "../components/Navbar";
import Hero from "../components/Landing/Hero";
import Benefits from "../components/Landing/Benefits";
import Specialists from "../components/Landing/Specialists";
import CTASection from "../components/Landing/CTASection";
import Footer from "../components/Landing/Footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-container bg-background-light min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Benefits />
        <Specialists />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;