import { use } from "react";
import ServiceCard from "./ServicesCard";
import { Link } from "react-router";


const PopularServices = ({ servicePromise }) => {
  const servicesData = use(servicePromise)
  const services = servicesData.slice(0, 6);

  return (
    <section className="py-16 bg-[#F9F6F1]">
      <div className="max-w-11/12 mx-auto px-5 flex-center flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Popular Winter Care Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
        <Link to={"/services"} className="mt-7 btn btn-success text-white py-2 rounded-lg font-medium transition-colors">
          View Details
        </Link>
      </div>
    </section>
  );
};

export default PopularServices;
