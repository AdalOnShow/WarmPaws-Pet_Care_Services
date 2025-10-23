import React from 'react'
import { useLoaderData } from 'react-router'
import ServiceCard from '../Components/ServicesCard'

const Services = () => {
  const services = useLoaderData()
  return (
    <section className="w-full py-10 flex-center bg-linear-to-b from-info to-success">
      <div className="max-w-11/12 mx-auto px-5 flex-center flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          All Winter Care Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services