import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { use } from "react";

const ServiceDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const servicesData = useLoaderData();
  const service = servicesData.find((s) => s.serviceId === parseInt(id));

  const [formData, setFormData] = useState({
    name: user?.displayName,
    email: user?.email,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <p className="mt-10 text-center">Service not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully booked ${service.serviceName}!`);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="px-5 py-12 mx-auto max-w-11/12">
      <h2 className="mb-6 text-3xl font-bold">{service.serviceName}</h2>

      <div className="flex-col gap-16 flex-center md:flex-row">
        <img
          src={service.image}
          alt={service.serviceName}
          className="object-cover w-full shadow-md md:w-1/2 h-96 rounded-xl"
        />

        <div className="flex-1 space-y-4">
          <p className="text-gray-700">{service.description}</p>
          <p>
            <span className="font-semibold">Price:</span> ${service.price}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {service.rating} ⭐
          </p>
          <p>
            <span className="font-semibold">Category:</span> {service.category}
          </p>
          <p>
            <span className="font-semibold">Provider:</span>{" "}
            {service.providerName} ({service.providerEmail})
          </p>

          <form
            onSubmit={handleSubmit}
            className="p-6 mt-6 space-y-4 bg-white shadow-md rounded-xl"
          >
            <h3 className="text-xl font-semibold">Book Service</h3>
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white transition-colors btn btn-info"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
