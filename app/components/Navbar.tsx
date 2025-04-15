// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm px-44 flex justify-between items-center bg-white">
      {/* Logo */}{" "}
      <div className="flex items-center space-x-2">
        <Link href={"#home"}>
          <Image src={Logo} alt="Logo" width={140} height={80} />
        </Link>
      </div>
      {/* Menu */}
      <div className="flex items-center space-x-10 font-medium text-xl">
        <Link className="hover:text-blue-600" href="#home">
          Home
        </Link>
        <Link className="hover:text-blue-600" href="#aboutus">
          About Us
        </Link>
        <Link className="hover:text-blue-600" href="#services">
          Services
        </Link>
        <Link className="hover:text-blue-600" href="#testimonials">
          Testimonials
        </Link>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center space-x-5">
        <button className="bg-gray-100 hover:bg-gray-200 text-lg px-4 py-2 rounded-md flex items-center gap-1">
          <span>🔍</span> Visit Now
        </button>
        <Link href="/contact">
          <p className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded-md flex items-center gap-1">
            <span>📩</span> Contact Us
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
