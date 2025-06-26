import React from "react";

const RequestVisit = () => {
  return (
    <section
      className="w-full py-20 px-6 bg-gradient-to-b from-red-100 to-white"
      id="request-visit"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Form Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 drop-shadow-md">
            Request Visit
          </h2>
          <form
            className="space-y-6"
            action="https://formspree.io/f/mqabylaw"
            method="POST"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-gray-500 uppercase"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              required
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-gray-500 uppercase"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-gray-500 uppercase"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              required
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder:text-gray-500 uppercase resize-none"
            />
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold tracking-widest px-8 py-3 w-full hover:bg-red-700 transition"
            >
              CONTACT
            </button>
          </form>
        </div>

        {/* Image Side */}
        <div>
          <img
            src="/images/Contact.jpg"
            alt="Modern Building"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default RequestVisit;
