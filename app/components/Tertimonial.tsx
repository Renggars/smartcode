"use client";
import Image from "next/image";
import { Testimonials } from "../constant";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen py-20 bg-gray-50 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-12">
        <div className="text-red-500 font-semibold uppercase text-lg tracking-widest border border-gray-300 rounded-full px-4 py-1 inline-block mb-7">
          Testimonials
        </div>
        <h2 className="text-5xl font-bold text-gray-800 mb-10">
          What Our Clients Say About{" "}
          <span className="text-carnation-500">SmartCode</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Real stories from businesses that trusted Smartcode to bring their
          digital ideas to life. Your success could be next!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {Testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={150}
              height={150}
              className="mx-auto rounded-full h-40 w-40 mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
            <div className="flex justify-center text-yellow-500 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>{i < client.rating ? "★" : "☆"}</span>
                ))}
            </div>
            <p className="text-sm text-gray-600">{client.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
