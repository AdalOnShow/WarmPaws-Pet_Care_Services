import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, price, rating, serviceId, description } = service;

  return (
    <div className="flex flex-col justify-between overflow-hidden transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl">
      <img
        src={image}
        alt={serviceName}
        className="object-cover w-full h-56 transition-transform duration-300 hover:scale-105"
      />
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold text-gray-800">{serviceName}</h3>
        <p className="text-sm text-gray-600">{description.slice(0, 100)}...</p>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-sm text-gray-600">
            <FaStar className="w-4 h-4 text-yellow-400" /> {rating}
          </p>
          <p className="text-sm font-medium text-orange-600">${price}</p>
        </div>

        <Link
          to={`/service-details/${serviceId}`}
          className="py-2 mt-3 font-medium text-white transition-colors rounded-lg btn btn-info"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
