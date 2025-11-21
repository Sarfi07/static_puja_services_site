import { useEffect } from "react";
import AOS from "aos";

const DevoteeTrustSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-orange-50 pt-20 pb-16">

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,83.29C906.67,54.94,823.78,19.9,743.84,2.14
            c-82.29-18.34-168.06-15.89-250.45,5.79
            C406.7,33.1,324.92,70.09,243.62,95.8
            163.84,121.26,82.66,135.39,0,133.28
            V0H1200V34.29
            C1114.13,83.05,1049.57,108.13,985.66,83.29Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-orange-200 overflow-hidden relative"
        data-aos="fade-up"
      >
        {/* Mandala Watermark */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('/mandala.png')] bg-contain bg-no-repeat bg-center pointer-events-none"></div>

        {/* Top Image */}
        <div className="relative">
          <img
            src="/image.png"
            alt="Puja Ritual"
            className="mt-4 w-full h-64 md:h-80 object-contain"
          />

          {/* 150K+ Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm md:text-base font-bold px-4 py-2 rounded-full shadow-lg border border-yellow-200">
            ⭐ 150k+ Devotees Trust
          </div>

          {/* Logo Tag
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow border border-orange-300 text-orange-700 font-semibold text-sm md:text-base">
            Sanatan Dham Kendra
          </div> */}
        </div>

        {/* Content */}
        <div className="relative px-6 py-10 md:px-10">

          
          {/* Benefit Section */}
<ul className="space-y-6 max-w-3xl mx-auto">

  {/* Benefit Item */}
  <li
    data-aos="fade-up"
    className="flex items-start gap-4"
  >
    {/* Golden Icon */}
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-md border border-orange-200">
      <span className="text-white text-lg font-bold">ॐ</span>
    </div>

    {/* Text */}
    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-[500] font-serif">
      Your name is chanted during the sacred <span className="font-semibold italic">Puja Sankalp</span> for divine blessings.
    </p>
  </li>


  <li
    data-aos="fade-up"
    data-aos-delay="100"
    className="flex items-start gap-4"
  >
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-md border border-orange-200">
      <span className="text-white text-lg font-bold">ॐ</span>
    </div>

    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-[500] font-serif">
      You get the option to choose your preferred <span className="font-semibold italic">Prasad</span> for offering.
    </p>
  </li>


  <li
    data-aos="fade-up"
    data-aos-delay="180"
    className="flex items-start gap-4"
  >
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-md border border-orange-200">
      <span className="text-white text-lg font-bold">ॐ</span>
    </div>

    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-[500] font-serif">
      Every puja is performed by experienced priests following authentic Vedic rituals.
    </p>
  </li>


  <li
    data-aos="fade-up"
    data-aos-delay="240"
    className="flex items-start gap-4"
  >
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-md border border-orange-200">
      <span className="text-white text-lg font-bold">ॐ</span>
    </div>

    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-[500] font-serif">
      Devotees receive puja photos, videos & prasad delivery where applicable.
    </p>
  </li>

</ul>


          {/* CTA */}
          <div
            className="text-center mt-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href={`https://wa.me/91${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Namaste 🙏, I want to book a Puja."
              )}`}
              target="_blank"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-md text-lg font-medium transition"
            >
              📞 Book a Puja Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevoteeTrustSection;
