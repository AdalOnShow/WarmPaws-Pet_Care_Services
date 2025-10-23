import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    specialty: "Canine Nutrition & Wellness",
    image: "https://i.postimg.cc/HnL7QhBv/vet1.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Small Animal Surgery",
    image: "https://i.postimg.cc/7ZkqJx6C/vet2.jpg"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialty: "Behavioral Therapy",
    image: "https://i.postimg.cc/T3dNQHwn/vet3.jpg"
  },
  {
    id: 4,
    name: "Dr. Carlos Ramirez",
    specialty: "Winter Care & Preventive Medicine",
    image: "https://i.postimg.cc/3R4QZ6yL/vet4.jpg"
  }
];

const ExpertVets = () => {
  return (
    <section className="py-12 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {vet.name}
                </h3>
                <p className="text-gray-500 text-sm">{vet.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertVets;
