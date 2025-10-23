import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { use } from "react";


const ServiceDetails = () => {
  const {user} = use(AuthContext)
  const { id } = useParams();
  const servicesData = useLoaderData()
  const service = servicesData.find((s) => s.serviceId === parseInt(id));

  const [formData, setFormData] = useState({ name: user?.displayName, email: user?.email });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  if (!service) {
    return <p className="text-center mt-10">Service not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully booked ${service.serviceName}!`);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-11/12 mx-auto py-12 px-5">
      <h2 className="text-3xl font-bold mb-6">{service.serviceName}</h2>

      <div className="flex-center flex-col md:flex-row gap-16">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-md"
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
            <span className="font-semibold">Provider:</span> {service.providerName} (
            {service.providerEmail})
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white p-6 rounded-xl shadow-md space-y-4"
          >
            <h3 className="text-xl font-semibold">Book Service</h3>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="w-full btn btn-info text-white transition-colors"
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
