import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    specialty: "Canine Nutrition & Wellness",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl7G5A0wW3ypdrUU_xdGy0km_uyuHD9UddQ&s"
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Small Animal Surgery",
    image: "https://img.freepik.com/free-photo/african-man-black-suit_1157-46903.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    specialty: "Behavioral Therapy",
    image: "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 4,
    name: "Dr. Carlos Ramirez",
    specialty: "Winter Care & Preventive Medicine",
    image: "https://media.istockphoto.com/id/1372065700/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=oPRp9aiGEb_00Y0Q_eR40MiOisM2eFfeP7lDf0IqJDw="
  }
];

const ExpertVets = () => {
  return (
    <section className="py-12 bg-[#F9F6F1]">
      <div className="max-w-11/12 mx-auto px-4 text-center">
        <h2 data-aos="fade-right" className="text-3xl font-bold text-gray-800 mb-10">
          Meet Our Expert Vets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vets.map((vet) => (
            <div
              data-aos="fade-up"
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
