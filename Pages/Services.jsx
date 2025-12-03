import React from 'react'
import { useLoaderData } from 'react-router'
import ServiceCard from '../Components/ServicesCard'

const Services = () => {
  const servicesData = useLoaderData()
  
  // sort services by serviceId in ascending order
  const services = servicesData.sort((a, b) => b.price - a.price)
  
  return (
    <section className="w-full py-10 flex-center bg-linear-to-b from-info to-success">
      <div className="flex-col px-5 mx-auto max-w-11/12 flex-center">
        <h2 className="mb-10 text-3xl font-bold text-center text-gray-800 md:text-4xl">
          All Winter Care Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map(service => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services