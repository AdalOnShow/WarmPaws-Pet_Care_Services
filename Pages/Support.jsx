import React from "react";
import { FaQuestionCircle, FaHeadset, FaTools } from "react-icons/fa";

const Support = () => {
  return (
    <div className="px-4 pt-24 pb-16 mx-auto max-w-7xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl text-primary">Support</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Stuck somewhere? Need help with booking a service, account issues, or
          winter care suggestions for your pet? You're in the right place. We’re
          here to assist you.
        </p>
      </section>

      {/* Support Cards */}
      <section className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 space-y-3 text-center shadow bg-base-100 rounded-xl">
          <FaQuestionCircle className="mx-auto text-4xl text-primary" />
          <h3 className="text-lg font-semibold">General Help</h3>
          <p className="text-gray-600">
            Got questions about how WarmPaws works? Check our FAQs or ask us
            anything.
          </p>
        </div>

        <div className="p-6 space-y-3 text-center shadow bg-base-100 rounded-xl">
          <FaHeadset className="mx-auto text-4xl text-primary" />
          <h3 className="text-lg font-semibold">Customer Support</h3>
          <p className="text-gray-600">
            Need help with bookings, payments, or login issues? We're ready to
            assist.
          </p>
        </div>

        <div className="p-6 space-y-3 text-center shadow bg-base-100 rounded-xl">
          <FaTools className="mx-auto text-4xl text-primary" />
          <h3 className="text-lg font-semibold">Technical Issue</h3>
          <p className="text-gray-600">
            Facing bugs, errors, or broken features? Tell us and we'll fix it as
            soon as possible.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center text-primary">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          <details className="shadow collapse bg-base-100 rounded-xl">
            <summary className="font-semibold collapse-title">
              How do I book a winter care service for my pet?
            </summary>
            <div className="text-gray-600 collapse-content">
              Go to Services → View Details → Fill the booking form → Submit.
            </div>
          </details>

          <details className="shadow collapse bg-base-100 rounded-xl">
            <summary className="font-semibold collapse-title">
              Do I need an account to book services?
            </summary>
            <div className="text-gray-600 collapse-content">
              Yes. Log in or register to access booking options.
            </div>
          </details>

          <details className="shadow collapse bg-base-100 rounded-xl">
            <summary className="font-semibold collapse-title">
              Can I update my profile later?
            </summary>
            <div className="text-gray-600 collapse-content">
              Yes. Go to My Profile → Update Profile.
            </div>
          </details>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-20 text-center">
        <h3 className="text-xl font-semibold text-gray-700">
          Still need help?
        </h3>
        <p className="mb-4 text-gray-600">
          If your question isn’t covered, reach out directly.
        </p>
        <a href="/contact" className="text-white btn btn-primary">
          Contact Support Team
        </a>
      </section>
    </div>
  );
};

export default Support;
