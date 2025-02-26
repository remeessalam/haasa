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
import { clientDetails, routes } from "../Constant";

const Header = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-40 py-4 bg-white  w-screen">
      <div className="wrapper flex items-center justify-between">
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
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={clientDetails.facebook}
              className="text-white  text-xl bg-secondary pt-[3px]"
            >
              <FaFacebookF /> {/* Facebook icon */}
            </Link>
            <Link
              to={clientDetails.instagram}
              className="text-white  bg-secondary p-[2px] text-xl"
            >
              <FaInstagram /> {/* Instagram icon */}
            </Link>
            <Link to="#" className="text-secondary  text-xl">
              <FaTwitter /> {/* Twitter icon */}
            </Link>
            <Link
              to={clientDetails.youtube}
              className="text-white bg-secondary text-xl"
            >
              <FaYoutube /> {/* YouTube icon */}
            </Link>
          </div>
        </nav>

        {/* Social Media Icons */}

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
                to={clientDetails.facebook}
                className="text-white  text-xl bg-secondary pt-[3px]"
              >
                <FaFacebookF /> {/* Facebook icon */}
              </Link>
              <Link
                to={clientDetails.instagram}
                className="text-white  bg-secondary p-[2px] text-xl"
              >
                <FaInstagram /> {/* Instagram icon */}
              </Link>
              <Link to="#" className="text-secondary  text-xl">
                <FaTwitter /> {/* Twitter icon */}
              </Link>
              <Link
                to={clientDetails.youtube}
                className="text-white bg-secondary text-xl"
              >
                <FaYoutube /> {/* YouTube icon */}
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Logo Section */}
    </header>
  );
};

export default Header;
