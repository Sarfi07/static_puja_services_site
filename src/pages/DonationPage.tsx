import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const DonationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen pt-20 pb-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-10">

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-orange-700 mb-6 text-center font-devanagari"
          data-aos="fade-up"
        >
          दान एवं भुगतान (Donation & Payments)
        </h1>

        <p className="text-gray-700 text-center mb-10" data-aos="fade-up">
          Support sacred pujas, charity work, Gau Daan, and temple services through a safe and secure online payment gateway.
        </p>

        {/* GAU DAAN */}
        <section className="mb-10" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-orange-700 mb-3 font-devanagari">
            🐄 गौ दान (Gau Daan)
          </h2>

          <p className="text-gray-700 mb-4">
            Gau Daan is considered one of the highest forms of Daan in Sanatan Dharma.
            Your donation supports cow feeding, shelter, and seva.
          </p>
        </section>

        {/* UPI QR */}
        <section data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-bold text-orange-700 mb-3 font-devanagari">
            📱 UPI Payment (Scan & Pay)
          </h2>

          <p className="text-gray-700 mb-4">
            A quick backup payment method for donors who prefer UPI apps.
          </p>

          <div className="flex justify-center mb-4">
            <img
              src="/upi-qr.jpeg"
              alt="UPI QR"
              className="w-48 h-48 rounded-xl border border-gray-300 shadow-lg"
            />
          </div>

          <p className="text-center text-gray-700 font-medium">
            UPI ID: <span className="text-orange-700">{import.meta.env.VITE_UPI_ID}</span>
          </p>
          <br />
        </section>
                  <Link
              to="/"
              className="p-4 flex-1 border border-orange-600 text-orange-700 text-center py-3 rounded-lg font-medium hover:bg-orange-700 hover:text-white transition"
            >
              ← Back to Home
            </Link>
      </div>
    </div>
  );
};

export default DonationPage;
