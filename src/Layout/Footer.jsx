import { Link } from "react-router-dom";
import logo from "../assets/image/logo/logo.png";

const Footer = () => {
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
                  info@haasa.ai
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91-9866525099
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>Data Analytics</li>
              <li>AI and ML</li>
              <li>Cloud Development</li>
              <li>Blockchain Development</li>
              <li>AR/VR Development</li>
              <li>IOT Development</li>
            </ul>
          </div>

          {/* Development Services */}
          <div>
            <ul className="space-y-2 mt-12">
              <li>Application Development</li>
              <li>Mobile Apps Development</li>
              <li>Chatbot Development</li>
              <li>UI/UX Development</li>
              <li>Website Development</li>
              <li>Game Development</li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 mb-8">
              <li className="text-[#CDFF00]">About Us</li>
              <li>Latest Updates</li>
              <li>Contact Us</li>
            </ul>

            <div>
              <h2 className="text-2xl font-bold mb-4">Connect with</h2>
              <div className="flex space-x-4">
                <Link to="#" className="hover:text-gray-300">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  <i className="fab fa-youtube"></i>
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

export default Footer;
