import { useEffect } from "react";
import AOS from "aos";

const AstrologySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const w_number = import.meta.env.VITE_WHATSAPP_NUMBER;
  const w_number_formatted = w_number.replace(/\D/g, "");

  return (
    <section id="astrology" className="py-16 px-6 md:px-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-orange-700 text-center mb-4 font-devanagari"
          data-aos="fade-up"
        >
          🔮 ज्योतिष परामर्श (Astrology Consultation)
        </h2>

        <p
          className="text-gray-700 text-center max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Vedic astrology provides divine guidance for life's important decisions. 
          We offer accurate horoscope readings, remedies, marriage matchmaking, 
          and personalized astrological insights based on ancient scriptures.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div
            className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              🕉️ कुंडली मिलान (Kundli Matching)
            </h3>
            <p className="text-gray-700">
              Accurate horoscope matchmaking using guna-milan, mangal dosh, and 
              planetary compatibility for successful marriage decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              🕉️ जन्म कुंडली विश्लेषण (Birth Chart Analysis)
            </h3>
            <p className="text-gray-700">
              Complete Vedic birth chart analysis including life predictions, 
              career, marriage, health, finance, and remedies.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-6 rounded-2xl shadow-md border border-orange-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              🕉️ शुभ मुहूर्त (Auspicious Timing)
            </h3>
            <p className="text-gray-700">
              Get auspicious muhurat for marriage, griha-pravesh, business, travel, 
              new beginnings, and spiritual ceremonies.
            </p>
          </div>

        </div>

        {/* Remedies */}
        <div
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-orange-200 mt-12"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <h3 className="text-2xl font-semibold text-orange-700 mb-4">
            🕉️ प्रभावी उपाय & समाधान (Remedies & Solutions)
          </h3>
          <p className="text-gray-700 mb-4">
            Get personalized solutions for:
          </p>

          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>ग्रह दोष (Planetary Issues)</li>
            <li>कुंडली में अड़चनें</li>
            <li>काला साया / नज़र दोष</li>
            <li>व्यवसाय / करियर समस्याएँ</li>
            <li>प्रेम / विवाह बाधाएं</li>
            <li>स्वास्थ्य संबंधित समस्याएँ</li>
          </ul>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href={`https://wa.me/91${w_number_formatted}?text=${encodeURIComponent(
              "Namaste 🙏, I want to consult for Astrology."
            )}`}
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            📞 Consult on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default AstrologySection;
