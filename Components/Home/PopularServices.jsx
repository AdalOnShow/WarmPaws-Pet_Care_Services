import { use } from "react";
import ServiceCard from "../ServicesCard";
import { Link } from "react-router";


const PopularServices = ({ servicePromise }) => {
  const servicesData = use(servicePromise)
  const services = servicesData.slice(0, 8);

  return (
    <section className="py-16 bg-[#F9F6F1]">
      <div className="flex-col px-5 mx-auto max-w-11/12 flex-center">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-800 md:text-4xl">
          Popular Winter Care Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map(service => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
        <Link data-aos="fade-left" to={"/services"} className="py-2 font-medium text-white transition-colors rounded-lg mt-7 btn btn-success">
          View Details
        </Link>
      </div>
    </section>
  );
};

export default PopularServices;
