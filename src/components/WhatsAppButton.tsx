const w_number = import.meta.env.VITE_WHATSAPP_NUMBER;
const w_number_formatted = w_number.replace(/\D/g, "");
const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${w_number_formatted}?text=I%20want%20to%20book%20a%20puja`}
    target="_blank"
    className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition animate-bounce"
    aria-label="Chat on WhatsApp"
  >
    💬
  </a>
);

export default WhatsAppButton;
