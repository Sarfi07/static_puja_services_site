import { useEffect } from "react";
import AOS from "aos";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-white py-14 px-5 md:px-10"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4 font-devanagari">
          About Our Puja Services
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          We are a team of experienced <span className="text-orange-600 font-medium">Vedic Pandits</span> in
          Guwahati, offering <span className="font-medium">authentic Puja rituals</span> performed with devotion and
          accuracy. Our mission is to bring divine blessings, positivity, and
          peace into your home through traditional rituals — whether it's{" "}
          <em>Griha Pravesh</em>, <em>Satyanarayan Katha</em>, or{" "}
          <em>Mahamrityunjaya Jaap</em>.
        </p>

        {/* Icon Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {/* Card 1 */}
          <div
            className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="zoom-in"
          >
            <img
              src="/icons/blessing.svg"
              alt="Authentic Rituals"
              className="mx-auto w-14 h-14 mb-3"
            />
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              100% Authentic Rituals
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Performed strictly as per Vedic traditions with all required
              mantras and samagri.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img
              src="/icons/trust.svg"
              alt="Trusted Pandits"
              className="mx-auto w-14 h-14 mb-3"
            />
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              Trusted & Experienced Pandits
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every Pandit in our team is verified, experienced, and devoted to
              ensuring purity in rituals.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="/icons/service.svg"
              alt="Seamless Booking"
              className="mx-auto w-14 h-14 mb-3"
            />
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              Seamless Booking Process
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Book any Puja instantly through WhatsApp or call — we handle all
              arrangements for you.
            </p>
          </div>
        </div>

        {/* Closing Message */}
        <div
          className="mt-12 p-6 md:p-8 bg-orange-100 rounded-xl shadow-sm"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-lg text-gray-800 italic">
            “Our goal is to make every Puja divine, peaceful, and easy to
            arrange for every devotee.”
          </p>
          <p className="mt-3 text-orange-700 font-semibold">
            — Puja Services, Guwahati
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
