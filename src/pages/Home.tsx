import HeroSection from "../components/HeroSection";
import PujaList from "../components/PujaList";
import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-orange-50 text-gray-800">
      {/* Hero Section */}
<section
  className="mt-8 relative h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/hero-pandit.jpeg')" }} // ✅ put your background image here
>
  {/* Gradient overlay for better text visibility */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20"></div>

  {/* Foreground content */}
  <div className="relative z-10 px-6 max-w-2xl">
    <h1
      data-aos="fade-up"
      className="text-3xl md:text-5xl font-bold text-white mb-4 font-devanagari"
    >
      Perform Sacred Pujas in Guwahati
    </h1>

    <p
      data-aos="fade-up"
      data-aos-delay="150"
      className="text-white text-lg md:text-xl mb-6 leading-relaxed"
    >
      Book authentic rituals with experienced pandits for every auspicious
      occasion.
    </p>

    <a
      href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20puja"
      target="_blank"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Chat on WhatsApp
    </a>
  </div>
</section>


      {/* About / Info Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto text-center py-12 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 mb-4">
          Welcome to Puja Services, Guwahati
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
          href="https://wa.me/919876543210?text=Hello%20I%20would%20like%20to%20book%20a%20puja"
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
