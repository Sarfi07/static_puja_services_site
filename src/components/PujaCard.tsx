import { Link } from "react-router-dom";

interface PujaObj {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
  description: string;
}

interface PujaCardProps {
  puja: PujaObj;
}

const PujaCard: React.FC<PujaCardProps> = ({ puja }) => (
  <Link to={`/service/${puja.id}`} className="block">
    <div className="border rounded-xl bg-white shadow hover:shadow-lg transition transform hover:scale-[1.02] overflow-hidden">
      <img src={puja.image} alt={puja.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold">{puja.name}</h4>
        <p className="text-sm text-gray-600">{puja.shortDesc}</p>
        <span className="text-orange-600 text-sm font-medium mt-2 inline-block hover:underline">
          Learn More →
        </span>
      </div>
    </div>
  </Link>
);

export default PujaCard;
