import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import pujas from "../data/pujas";

const PujaCardPage = () => {
  const { id } = useParams();
  const puja = pujas.find((p) => p.id === id);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!puja) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-600">
        Puja not found 🙏
      </div>
    );
  }

  return (
    <main className="bg-orange-50 min-h-screen py-14 px-6 md:px-12">
      <div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        {/* Puja Image */}
        <img
          src={puja.image}
          alt={puja.name}
          className="w-full h-64 md:h-80 object-cover"
        />

        {/* Text Content */}
        <div className="p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mb-3 font-devanagari">
            {puja.name}
          </h1>

          {/* Short Description */}
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            {puja.shortDesc}
          </p>

          {/* Long Description */}
          <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-10">
            {puja.description}
          </div>

          {/* Benefits */}
          {puja.benefits && (
            <div className="mb-10" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-orange-700 mb-3">
                पूजा के लाभ
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {puja.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Who Should Perform */}
          {puja.whoShouldPerform && (
            <div className="mb-10" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-orange-700 mb-3">
                यह पूजा किनके लिए लाभकारी है?
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {puja.whoShouldPerform.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}

          {/* When to Perform */}
          {puja.whenToPerform && (
            <div className="mb-10" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-orange-700 mb-2">
                कब करवाएं?
              </h2>
              <p className="text-gray-700">{puja.whenToPerform}</p>
            </div>
          )}

          {/* Samagri */}
          {puja.samagri && (
            <div className="mb-10" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-orange-700 mb-3">
                पूजा सामग्री (Samagri)
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {puja.samagri.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Procedure */}
          {puja.procedure && (
            <div className="mb-10" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-orange-700 mb-3">
                पूजा की विधि (Procedure)
              </h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                {puja.procedure.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10" data-aos="fade-up">
            <a
              href={`https://wa.me/919876543210?text=I%20want%20to%20book%20${encodeURIComponent(
                puja.name
              )}`}
              target="_blank"
              className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              📞 WhatsApp Booking
            </a>

            <Link
              to="/"
              className="flex-1 border border-orange-600 text-orange-700 text-center py-3 rounded-lg font-medium hover:bg-orange-700 hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PujaCardPage;
