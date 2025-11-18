const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4 font-devanagari">
          धन्यवाद! भुगतान सफल
        </h1>
        <p className="text-gray-700 mb-6">
          आपका भुगतान सफल रहा।  
          हमारी टीम शीघ्र ही आपसे संपर्क करेगी।
        </p>

        <a
          href="/"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 shadow-md transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
