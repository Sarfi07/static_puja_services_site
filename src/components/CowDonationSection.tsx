import { useEffect } from "react";
import AOS from "aos";

const CowDonationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="cow-donation"
      className="relative bg-orange-50 py-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 opacity-60 -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Image */}
        <div data-aos="fade-right" className="flex justify-center md:justify-start">
          <img
            src="/cow-donation.jpg"
            alt="Cow Donation (Gau Daan)"
            className="w-full max-w-md rounded-2xl shadow-lg border border-orange-200"
          />
        </div>

        {/* Right side: Text */}
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4 font-devanagari">
            Cow Donation (Gau Daan)
          </h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-5">
            Cow Donation, known as <span className="font-semibold">Gau Daan</span>, 
            holds supreme significance in Sanatan Dharma. It symbolizes compassion, 
            righteousness, and selfless service. Scriptures mention that performing 
            Gau Daan brings divine blessings, removes obstacles, and grants spiritual 
            upliftment to the donor and their family.
          </p>

          {/* Benefits */}
          <h3 className="text-xl font-semibold text-orange-700 mb-2">
            Benefits of Gau Daan
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Eliminates doshas and brings peace to ancestors.</li>
            <li>Grants blessings of Lord Krishna and Goddess Lakshmi.</li>
            <li>Promotes health, prosperity, and spiritual harmony.</li>
            <li>Mentioned as one of the highest forms of Daan in scriptures.</li>
          </ul>

          {/* Process Steps */}
          <h3 className="text-xl font-semibold text-orange-700 mb-3">
            Gau Daan Process (Step-by-Step)
          </h3>
          <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
            <li>
              <span className="font-medium">Cow Selection:</span>{" "}
              A healthy and gentle cow is chosen for donation.
            </li>
            <li>
              <span className="font-medium">Ritual & Puja:</span>{" "}
              The cow is bathed, decorated, and worshipped with Vedic mantras by a priest.
            </li>
            <li>
              <span className="font-medium">Donation Ceremony:</span>{" "}
              The donor offers the cow (along with essentials like fodder, vessels, and rope)  
              to a deserving recipient, family, or temple.
            </li>
            <li>
              <span className="font-medium">Blessings:</span>{" "}
              The priest and the receiver bless the donor and their family for peace, 
              good health, and prosperity.
            </li>
          </ol>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210?text=I%20am%20interested%20in%20Cow%20Donation%20(Gau%20Daan)"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md font-medium transition text-center"
            >
              📞 Contact on WhatsApp
            </a>
            <a
              href="#contact"
              className="border border-orange-600 text-orange-700 px-6 py-3 rounded-lg shadow-sm font-medium hover:bg-orange-600 hover:text-white transition text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CowDonationSection;
