import { useEffect } from "react";
import AOS from "aos";

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

          <a
            href="https://rzp.io/l/YOUR_GAUDAN_LINK"
            target="_blank"
            className="w-full block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center font-medium shadow-md"
          >
            🐄 Donate for Gau Daan
          </a>
        </section>

        {/* PUJA BOOKING ADVANCE FEES */}
        <section className="mb-10" data-aos="fade-up" data-aos-delay="150">
          <h2 className="text-2xl font-bold text-orange-700 mb-3 font-devanagari">
            📿 पूजा बुकिंग (Puja Booking)
          </h2>

          <p className="text-gray-700 mb-4">
            Pay a small advance to confirm your puja booking. Our priest will contact you shortly after payment.
          </p>

          <div className="space-y-4">

            <a
              href="https://rzp.io/l/YOUR_501_LINK"
              target="_blank"
              className="block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-center shadow-md"
            >
              ₹501 — Basic Puja Booking
            </a>

            <a
              href="https://rzp.io/l/YOUR_1101_LINK"
              target="_blank"
              className="block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-center shadow-md"
            >
              ₹1101 — Premium Puja Booking
            </a>

            <a
              href="https://rzp.io/l/YOUR_CUSTOM_LINK"
              target="_blank"
              className="block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-center shadow-md"
            >
              Custom Amount Puja Payment
            </a>
          </div>
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
              src="/upi-qr.png"
              alt="UPI QR"
              className="w-48 h-48 rounded-xl border border-gray-300 shadow-lg"
            />
          </div>

          <p className="text-center text-gray-700 font-medium">
            UPI ID: <span className="text-orange-700">yourupiid@upi</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default DonationPage;
