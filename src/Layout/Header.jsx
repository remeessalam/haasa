import { Link, useLocation } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Import icons from react-icons
import logo from "../assets/image/logo/logo.png";
import { routes } from "../Constant";
const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="py-4 px-6 w-screen md:px-16 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="HAASA.AI-Logo" className="h-12" />
      </div>

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
      <button className="md:hidden text-gray-700">
        <i className="fas fa-bars text-2xl"></i>
      </button>
    </header>
  );
};

export default Header;
