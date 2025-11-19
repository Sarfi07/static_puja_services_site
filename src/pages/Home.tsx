import PujaList from "../components/PujaList";
import { useEffect } from "react";
import AOS from "aos";
import CowDonationSection from "../components/CowDonationSection";
import HeroSection from "../components/HeroSection";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const w_number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const w_number_formatted = w_number.replace(/\D/g, "");

  return (
    <main className="bg-orange-50 text-gray-800">
      {/* Hero Section */}
      <HeroSection />


      {/* About / Info Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto text-center py-12 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 mb-4">
          Welcome to Sanatan Dham Kendra
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We provide personalized Puja services for home, business, and temples
          across Guwahati. Our experienced pandits perform all rituals
          authentically according to Vedic traditions — ensuring peace,
          prosperity, and divine blessings in your life.
        </p>
      </section>

      {/* Puja List */}
      <section id="services" className="bg-white py-12" data-aos="fade-up">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-orange-700 mb-8">
          Our Puja Services
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <PujaList />
        </div>
      </section>

      <CowDonationSection />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 text-center bg-orange-100"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 mb-4">
          Need Assistance?
        </h2>
        <p className="text-gray-700 mb-6">
          Reach out on WhatsApp or call us for personalized Puja bookings.
        </p>
        <a
          href={`https://wa.me/${w_number_formatted}?text=Hello%20I%20would%20like%20to%20book%20a%20puja`}
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
        >
          📞 Contact on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default Home;
