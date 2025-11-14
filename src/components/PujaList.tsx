import pujas from "../data/pujas";
import PujaCard from "./PujaCard";

const PujaList = () => (
<section id="services" className="p-4 bg-orange-50">
  <h2 className="text-center text-2xl font-semibold text-orange-700 mb-6">
    Upcoming Pujas
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {pujas.map((puja) => (
      <PujaCard key={puja.id} puja={puja} />
    ))}
  </div>
</section>

);
export default PujaList;
