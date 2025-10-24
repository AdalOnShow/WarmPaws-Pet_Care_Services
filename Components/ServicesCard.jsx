import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, price, rating, serviceId } = service;

  return (
    <div data-aos="fade-up" className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{serviceName}</h3>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <FaStar className="w-4 h-4 text-yellow-400" /> {rating}
          </p>
          <p className="text-sm font-medium text-orange-600">${price}</p>
        </div>

        <Link to={`/service-details/${serviceId}`} className="mt-3 btn btn-info text-white py-2 rounded-lg font-medium transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
