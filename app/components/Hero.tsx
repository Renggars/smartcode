"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import HeroAnimation from "../../public/lotties/hero-animation.json";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-[#fef1ff] to-[#eef3ff] scroll-mt-24"
      id="home"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-4">
            <span> Find Your Perfect</span> <br />
            <span className="text-blue-500"> Digital Solution</span> with
            Smartcode
          </h1>
          <p className="mt-10 text-gray-600 mb-6 text-lg max-w-xl leading-relaxed">
            Build your business’ digital presence with the best technology
            solutions. Smartcode is here to help you create websites,
            applications, and IT systems designed to suit your needs — fast,
            secure, and professional.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Contact Us →
          </Link>
        </div>

        {/* Right Lottie Animation */}
        <div className="flex-1 w-full h-[400px] lg:h-[500px]">
          <Lottie animationData={HeroAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
