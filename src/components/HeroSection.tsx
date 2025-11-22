import { Link } from "react-router-dom";

const w_number = import.meta.env.VITE_WHATSAPP_NUMBER;
const w_number_formatted = w_number.replace(/\D/g, "");

const HeroSection = () => (
<section
  className="mt-16 relative h-[80vh] flex flex-col items-center justify-center text-center bg-cover lg:w-[60vw] lg:m-auto lg:mt-18 bg-no-repeat bg-center"
  style={{ backgroundImage: "url('/hero-family.jpeg')" }} // ✅ put your background image here
>
  {/* Gradient overlay for better text visibility */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20"></div>

  {/* Foreground content */}
  <div className="relative z-10 px-6 max-w-2xl">
    <h1
      data-aos="fade-up"
      className="text-3xl md:text-5xl font-bold text-white mb-4 font-devanagari"
    >
      Perform Sacred Pujas all over India
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
      href={`https://wa.me/${w_number_formatted}?text=I%20want%20to%20book%20a%20puja`}
      target="_blank"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Chat on WhatsApp
    </a>
    <div className="p-5"></div>
    <Link
      to="/appointment"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Book an Appointment
    </Link>
  </div>
</section>

);
export default HeroSection;
