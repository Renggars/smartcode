import Image from "next/image";

import React from "react";
import { Services } from "../constant";

const Service = () => {
  return (
    <section
      id="services"
      className="h-screen flex items-center justify-center px-44 bg-white"
    >
      <div className="w-full">
        <div className="text-center">
          <div className="text-red-500 font-semibold uppercase text-lg tracking-widest border border-gray-300 rounded-full px-4 py-1 inline-block mb-7">
            Our Services
          </div>
          <h2 className="text-5xl font-bold mb-7">
            Discover What <span className="text-red-500">SmartCode</span> Offers
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We deliver modern and reliable digital solutions to help your
            business grow in today’s fast-paced world.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-20">
          {Services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-red-500 font-medium">
                  {service.category}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600">
                    Learn More
                  </button>
                  <span className="text-red-600 font-bold text-sm">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
