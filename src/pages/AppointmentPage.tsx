import { useEffect } from "react";
import AOS from "aos";

const OWNER_EMAIL = "sanatan.dham.kendra@gmail.com"; // <-- replace with owner email

const AppointmentPage = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="bg-orange-50 min-h-screen pt-20 pb-16 px-4 md:px-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-6 md:p-10">

        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl font-bold text-orange-700 mb-4 text-center font-devanagari"
          data-aos="fade-up"
        >
          📿 Book an Appointment
        </h1>
        <p
          className="text-gray-700 text-center mb-6"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Fill out your details below. After submitting, please make the payment by scanning the QR code.
        </p>

        {/* FORM */}
        <form
          action={`https://formsubmit.co/${OWNER_EMAIL}`}
          method="POST"
          className="space-y-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Hidden FormSubmit fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Appointment Booking" />
          <input type="hidden" name="form_purpose" value="Appointment Booking" />

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              name="name"
              required
              placeholder="Your full name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Mobile Number</label>
            <input
              name="mobile"
              type="tel"
              required
              placeholder="Mobile number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email (optional)</label>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* State & District */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">State</label>
              <input
                name="state"
                required
                placeholder="State"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">District</label>
              <input
                name="district"
                required
                placeholder="District"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Pincode</label>
            <input
              name="pincode"
              required
              placeholder="PIN code"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message / Notes</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Any additional details"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium shadow-md transition"
          >
            Submit Details
          </button>
        </form>

        {/* Payment Section */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-2xl font-bold text-orange-700 text-center mb-3 font-devanagari">
            📱 Make Payment
          </h2>

          <p className="text-gray-700 text-center mb-4">
            After submitting your details, please scan the QR below to complete your payment.
          </p>

          {/* QR IMAGE */}
          <div className="flex justify-center">
            <img
              src="/upi-qr.png"
              alt="Payment QR"
              className="w-48 h-48 rounded-xl shadow-lg border border-gray-300"
            />
          </div>

          <p className="text-center text-gray-700 mt-4 font-medium">
            UPI ID: <span className="text-orange-700">yourupiid@upi</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AppointmentPage;
