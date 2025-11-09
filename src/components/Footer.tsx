import { useEffect } from "react";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-orange-600 text-white py-10 px-6 md:px-12 mt-12 relative"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-3">
            {/* Glowing diya */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-yellow-300 animate-pulse"
              fill="currentColor"
            >
              <path d="M12 2C10 6 14 7 14 10s-2 4-2 4-2-1-2-4 4-4 2-8z" />
              <path d="M3 14c0 4.4 4 8 9 8s9-3.6 9-8H3z" />
            </svg>
            <h2 className="text-xl font-bold font-devanagari">Puja Services</h2>
          </div>
          <p className="text-orange-50 text-sm leading-relaxed max-w-xs">
            Authentic Vedic rituals performed by trusted Pandits in Guwahati.
            Bringing divine peace and positivity to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-orange-50">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20a%20Puja"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp Booking
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-orange-50 text-sm">
            <li>📍 TODO</li>
            <li>📞 +91 TODO</li>
            <li>📧 contact@pujaservices.in</li>
          </ul>
          <a
            href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20a%20Puja"
            target="_blank"
            className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            <img
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-orange-400 my-6 opacity-60" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-orange-100">
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} Puja Services, Guwahati. All rights
          reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm transition"
        >
          ⬆️ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
