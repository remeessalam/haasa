import { Link, useLocation } from "react-router";
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
import { Link as Scroll } from "react-scroll";

const LandingHeader = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-40 py-4 bg-white px-6 w-screen md:px-16 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="HAASA.AI-Logo" className="h-12" />
      </div>

      {/* Navigation Section */}
      <nav className="hidden md:flex items-center space-x-8">
        {routes.map((obj) => (
          <>
            {obj.name === "HOME" ? (
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
            ) : (
              <Scroll
                key={obj.name}
                aria-label="Home"
                smooth={true}
                offset={-70}
                to={obj.landingpath}
                className="cursor-pointer"
              >
                {obj.name}
              </Scroll>
            )}
          </>
        ))}
      </nav>

      {/* Social Media Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="#" className="text-secondary hover:text-blue-700">
          <FaFacebookF /> {/* Facebook icon */}
        </Link>
        <Link to="#" className="text-secondary hover:text-pink-700">
          <FaInstagram /> {/* Instagram icon */}
        </Link>
        <Link to="#" className="text-secondary hover:text-blue-500">
          <FaTwitter /> {/* Twitter icon */}
        </Link>
        <Link to="#" className="text-secondary hover:text-red-700">
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
            <>
              {obj.name === "HOME" ? (
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
              ) : (
                <Scroll
                  key={obj.name}
                  aria-label="Home"
                  smooth={true}
                  offset={-70}
                  to={obj.landingpath}
                  className="cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {obj.name}
                </Scroll>
              )}
            </>
          ))}
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Link to="#" className="text-secondary hover:text-blue-700">
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

export default LandingHeader;
