import React from "react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-4 pt-24 pb-16 mx-auto max-w-7xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl text-primary">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Have a question about winter pet care or need assistance with a
          service? We’re here to help. Reach out to the WarmPaws team and we’ll
          get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid gap-8 mt-16 text-center sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 space-y-2 shadow bg-base-100 rounded-xl">
          <FaPhone className="mx-auto text-3xl text-primary" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600">+880 1712 345 678</p>
        </div>

        <div className="p-6 space-y-2 shadow bg-base-100 rounded-xl">
          <FaEnvelope className="mx-auto text-3xl text-primary" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600">support@warmpaws.com</p>
        </div>

        <div className="p-6 space-y-2 shadow bg-base-100 rounded-xl">
          <FaLocationArrow className="mx-auto text-3xl text-primary" />
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="text-gray-600">Chattogram, Bangladesh</p>
        </div>
      </section>

      {/* Message Form */}
      <section className="max-w-4xl p-10 mx-auto mt-20 shadow-lg bg-base-100 rounded-xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary">
          Send us a message
        </h2>

        <form className="space-y-5">
          <div>
            <label className="font-semibold">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 input input-bordered"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-1 input input-bordered"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Message</label>
            <textarea
              className="w-full mt-1 textarea textarea-bordered"
              placeholder="Type your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full text-white btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
