const HeroSection = () => (
<section className="relative h-[70vh] bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white">
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  <div className="relative z-10 px-6">
    <h1 className="text-3xl md:text-5xl font-bold mb-3">Perform Sacred Pujas in Guwahati</h1>
    <p className="text-lg md:text-xl mb-6">Experienced pandits for every auspicious occasion</p>
    <a
      href="https://wa.me/919876543210?text=I%20want%20to%20book%20a%20puja"
      target="_blank"
      className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-medium shadow-md transition"
    >
      Talk on WhatsApp
    </a>
  </div>
</section>

);
export default HeroSection;
