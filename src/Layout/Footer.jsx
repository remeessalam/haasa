import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo/footericon.svg";
import { clientDetails, routes, updatedServices } from "../Constant";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import phoneicon from "../assets/image/phoneicon.png";
import messageicon from "../assets/image/sendicon.png";
const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="bg-[#1E1535] text-white pt-12">
      <div className="wrapper">
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
                <Link
                  to={`mailto:${clientDetails.email}`}
                  className="flex items-center"
                >
                  <img src={messageicon} alt="icon" className="mr-2" />
                  {/* <span className="mr-2">✉</span> */}
                  {clientDetails.email}
                </Link>
                <p className="flex items-center">
                  {/* <span className="mr-2">📞</span> */}
                  <img src={phoneicon} alt="icon" className="mr-2" />
                  {clientDetails.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="w-full md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-candal">Services</h2>
            <ul className="grid md:grid-cols-2 space-y-2 gap-4 font-montserrat">
              {updatedServices.map((obj) => (
                <li key={obj.title}>
                  <Link
                    to={`/service/${obj.path}`}
                    className="hover:text-hightlighted"
                  >
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div className="font-montserrat">
            <h2 className="text-2xl font-bold mb-4 font-candal">Quick Links</h2>
            <ul className="space-y-2 mb-8">
              {routes.map((obj) => (
                <li key={obj.name}>
                  <Link
                    to={obj.path}
                    className={`${
                      pathname === `${obj.path}`
                        ? `text-hightlighted font-medium`
                        : `text-gray-100`
                    }  hover:text-hightlighted`}
                  >
                    {obj.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-candal">
                Connect with
              </h2>
              <div className="flex  gap-4 items-center text-white">
                <Link
                  to={clientDetails.facebook}
                  className=" text-secondary bg-white text-lg pt-[3px]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={clientDetails.instagram}
                  className="  text-secondary bg-white text-lg rounded-sm p-[3px]"
                >
                  <FaInstagram />
                </Link>
                <Link to="#" className="  text-white  text-lg">
                  <FaXTwitter />
                </Link>
                <Link
                  to={clientDetails.youtube}
                  className="  text-secondary bg-white text-lg rounded-sm p-[3px]"
                >
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
        <div className="mt-2">
          <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
