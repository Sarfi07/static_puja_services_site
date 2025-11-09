import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import pujas from "../data/pujas";

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();

  // Initialize AOS (for fade-in)
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Find the puja details from static data
  const puja = pujas.find((p) => p.id === id);

  // Handle not found case
  if (!puja) {
    return (
      <section className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h2 className="text-2xl font-semibold text-orange-700 mb-2">
          Service Not Found 🙏
        </h2>
        <p className="text-gray-600 mb-6">
          The requested Puja service could not be found.
        </p>
        <Link
          to="/"
          className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg transition"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  // Normal render when service exists
  return (
    <main className="bg-orange-50 min-h-screen py-12 px-4">
      <div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        {/* Puja Image */}
        <img
          src={puja.image}
          alt={puja.name}
          className="w-full h-60 md:h-80 object-cover"
        />

        {/* Puja Details */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-orange-700 mb-3 font-devanagari">
            {puja.name}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {puja.description}
          </p>

          {/* WhatsApp & Back Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={`https://wa.me/919876543210?text=I%20want%20to%20book%20${encodeURIComponent(
                puja.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-medium transition shadow-sm"
            >
              📿 Book this Puja on WhatsApp
            </a>

            <Link
              to="/"
              className="flex-1 border border-orange-600 text-orange-700 text-center py-3 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
