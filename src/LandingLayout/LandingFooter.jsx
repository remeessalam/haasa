import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo/logo.png";
import { clientDetails, routes, updatedServices } from "../Constant";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const LandingFooter = () => {
  const { pathname } = useLocation();

  return (
    <footer className="bg-[#1E1535] text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo || "/placeholder.svg"}
              alt="HAASA.AI"
              className="h-12"
            />
            <p className="text-sm">
              8-2-269/S/88 & 8-2-2 SAGAR
              <br />
              COOPERATIVE SOCIETY, HYDERABAD,
              <br />
              TELANGANA
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Enquiry</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">✉</span>
                  {clientDetails.email}
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  {clientDetails.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="w-full md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="grid md:grid-cols-2 space-y-2 gap-4">
              {updatedServices.map((obj) => (
                <li key={obj.title}>
                  <Link to={`/service/${obj.path}`}>{obj.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 mb-8">
              {routes.map((obj) => (
                <li key={obj.name}>
                  {
                    <>
                      {obj.name === "HOME" ? (
                        <Link key={obj.name} to={obj.path}>
                          {obj.name}
                        </Link>
                      ) : (
                        <Scroll
                          to={obj.landingpath}
                          aria-label="Home"
                          smooth={true}
                          offset={-70}
                          className={`${
                            pathname === `${obj.path}`
                              ? `text-secondary font-medium`
                              : `text-gray-100`
                          }  hover:text-purple-700`}
                        >
                          {obj.name}
                        </Scroll>
                      )}
                    </>
                  }
                </li>
              ))}
            </ul>

            <div>
              <h2 className="text-2xl font-bold mb-4">Connect with</h2>
              <div className="flex space-x-4 text-white">
                <Link to="#" className="hover:text-gray-300 text-lg">
                  <FaFacebookF />
                </Link>
                <Link to="#" className="hover:text-gray-300 text-lg">
                  <FaInstagram />
                </Link>
                <Link to="#" className="hover:text-gray-300 text-lg">
                  <FaTwitter />
                </Link>
                <Link to="#" className="hover:text-gray-300 text-lg">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-sm border-t py-8 border-blue-950">
        <p>Copyright © 2025, All Right Reserved Haasa software solutions</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
