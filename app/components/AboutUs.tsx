import React from "react";
import FeatureImage from "../../public/feature.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="flex h-screen flex-row items-center justify-between py-16 bg-gradient-to-r from-white via-purple-100 to-pink-100 px-44"
    >
      {/* Feature Image */}
      <div className="md:w-1/2 h-full flex justify-center relative pr-20 pl-4">
        <div className="relative w-full h-full">
          <Image
            src={FeatureImage}
            alt="Feature Image"
            fill
            className="object-contain z-10"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 md:w-1/2 text-center md:text-left">
        <div className="text-carnation-500 font-semibold mb-2 py-2 px-4 border border-white rounded-2xl  text-center inline-block">
          What We Offer
        </div>
        <h2 className="text-4xl font-bold mb-4 leading-snug">
          Build & Elevate Your{" "}
          <span className="text-carnation-600">DIGITAL SOLUTIONS</span> With
          SmartCode
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          SmartCode helps your business grow through software, website, and
          digital solutions development services tailored to your needs. We
          combine modern technology and expert teams to deliver the best
          results.
        </p>
        <ul className="text-left space-y-5 text-xl font-medium">
          <li>
            <input type="radio" readOnly /> Custom Software Development
          </li>
          <li>
            <input type="radio" readOnly /> Responsive Website Creation
          </li>
          <li>
            <input type="radio" readOnly /> UI/UX Design Excellence
          </li>
          <li>
            <input type="radio" readOnly /> Reliable Maintenance & Support
          </li>
        </ul>
        <div className="mt-10">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition">
            Explore Our Work →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
