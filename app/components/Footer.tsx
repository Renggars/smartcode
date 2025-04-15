import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10 border-t">
      <div className=" flex flex-row justify-between items-start gap-10 px-48">
        {/* Logo & Navigation */}
        <div className="flex flex-col items-start gap-4 pl-5">
          <Image src="/logo.png" alt="Smartcode Logo" width={150} height={50} />
          <nav className="flex gap-10 text-xl font-medium">
            <a href="#aboutus" className="hover:text-blue-500">
              About Us
            </a>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
            <a href="#testimonials" className="hover:text-blue-500">
              Testimonials
            </a>
            <a href="#catering" className="hover:text-blue-500">
              Find Us
            </a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="text-start">
          <h3 className="font-semibold text-2xl mb-5">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="username@email.com"
              className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        © Copyright 2025 Smartcode. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
