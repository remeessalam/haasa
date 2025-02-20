import { Link, useLocation } from "react-router";
import { Link as Scroller } from "react-scroll";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import icons from react-icons
import { useState } from "react";
import logo from "../assets/image/logo/logo.png";
import { routes } from "../Constant";

const Header = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-40 py-4 bg-white px-6 w-screen md:px-16 flex items-center justify-between">
      {/* Logo Section */}
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="HAASA.AI-Logo" className="h-12 sm:h-16" />
      </Link>

      {/* Navigation Section */}
      <nav className="hidden md:flex items-center space-x-8">
        {routes.map((obj) => (
          <Link
            key={obj.name}
            to={obj.path}
            className={`${
              pathname === `${obj.path}`
                ? `text-secondary font-medium`
                : `text-gray-700`
            }  hover:text-purple-700`}
          >
            {obj.name}
          </Link>
        ))}
        <Scroller
          key={"sdf"}
          to={"contactus"}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="group relative flex items-center cursor-pointer"
        >
          CONTACT US
        </Scroller>
      </nav>

      {/* Social Media Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="#" className="text-white  text-xl bg-secondary pt-[3px]">
          <FaFacebookF /> {/* Facebook icon */}
        </Link>
        <Link to="#" className="text-white  bg-secondary p-[2px] text-xl">
          <FaInstagram /> {/* Instagram icon */}
        </Link>
        <Link to="#" className="text-secondary  text-xl">
          <FaTwitter /> {/* Twitter icon */}
        </Link>
        <Link to="#" className="text-white bg-secondary text-xl">
          <FaYoutube /> {/* YouTube icon */}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
          {routes.map((obj) => (
            <Link
              key={obj.name}
              to={obj.path}
              className={`${
                pathname === `${obj.path}`
                  ? `text-secondary font-medium`
                  : `text-gray-700`
              }  hover:text-purple-700`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {obj.name}
            </Link>
          ))}
          <Scroller
            key={"sdf"}
            to={"contactus"}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="group relative flex items-center cursor-pointer"
          >
            CONTACT US
          </Scroller>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="#"
              className="text-secondary hover:text-blue-700 text-2xl"
            >
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-secondary hover:text-pink-700">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-secondary hover:text-blue-500">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-secondary hover:text-red-700">
              <FaYoutube />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
