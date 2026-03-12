// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Landing/Hero";
import Benefits from "../components/Landing/Benefits";
import Specialists from "../components/Landing/Specialists";
import CTASection from "../components/Landing/CTASection";
import Footer from "../components/Landing/Footer";

function Home() {
  return (
    <div className="home-container bg-background-light min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Benefits / Features */}
        <Benefits />

        {/* Specialists */}
        <Specialists />

        {/* CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;