import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";


const ServiceDetails = () => {
  const { id } = useParams();
  const servicesData = useLoaderData()
  const service = servicesData.find((s) => s.serviceId === parseInt(id));

  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!service) {
    return <p className="text-center mt-10">Service not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully booked ${service.serviceName}!`);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-5">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold mb-6">{service.serviceName}</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Service Image */}
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-md"
        />

        {/* Service Details */}
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

          {/* Booking Form */}
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
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors"
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
