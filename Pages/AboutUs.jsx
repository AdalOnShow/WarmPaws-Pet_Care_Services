import React from "react";

const AboutUs = () => {
  return (
    <div className="px-4 pt-24 pb-16 mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl text-primary">
          About WarmPaws
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          WarmPaws is your winter companion for keeping pets cozy, safe, and
          healthy. We help pet owners find trusted grooming, winter outfits,
          expert care, and personalized winter solutions—all in one place.
        </p>
        <img
          src="https://i.postimg.cc/k4H0yk4K/winter-pets-banner.jpg"
          alt="pets in winter"
          className="w-full max-w-4xl mx-auto shadow-md rounded-xl"
        />
      </section>

      {/* Mission Section */}
      <section className="grid items-center gap-10 mt-20 md:grid-cols-2">
        <img
          src="https://i.postimg.cc/8P3mmLRQ/dog-winter-coat.jpg"
          alt="dog winter care"
          className="shadow-md rounded-xl"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            Our mission is to ensure that no pet suffers in the cold. From paw
            balms to cozy coats, we connect pet owners with essential winter
            services that keep their furry friends warm and cared for. Winter
            may be harsh, but with WarmPaws, every pet gets the comfort they
            deserve.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center text-primary">
          Why Choose WarmPaws?
        </h2>
        <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 text-center shadow bg-base-100 rounded-xl">
            <h3 className="mb-2 text-lg font-semibold">Certified Experts</h3>
            <p className="text-gray-600">
              Our grooming and vet partners are trained for winter pet care.
            </p>
          </div>

          <div className="p-6 text-center shadow bg-base-100 rounded-xl">
            <h3 className="mb-2 text-lg font-semibold">Affordable Services</h3>
            <p className="text-gray-600">
              Quality care without breaking the bank. Winter shouldn't be
              costly.
            </p>
          </div>

          <div className="p-6 text-center shadow bg-base-100 rounded-xl">
            <h3 className="mb-2 text-lg font-semibold">
              Trusted by Pet Owners
            </h3>
            <p className="text-gray-600">
              Thousands rely on WarmPaws to protect their pets in winter.
            </p>
          </div>

          <div className="p-6 text-center shadow bg-base-100 rounded-xl">
            <h3 className="mb-2 text-lg font-semibold">Winter Focused</h3>
            <p className="text-gray-600">
              We specialize in cold-weather pet needs—nothing else.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-20">
        <h2 className="mb-10 text-3xl font-bold text-center text-primary">
          Meet Our Team
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Dr. Hana Petrov", role: "Veterinary Consultant" },
            { name: "Jason Miller", role: "Pet Grooming Specialist" },
            { name: "Luna Shaw", role: "Winter Apparel Designer" },
          ].map((member, i) => (
            <div
              key={i}
              className="p-6 text-center shadow-md bg-base-100 rounded-xl"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${i + 12}`}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
