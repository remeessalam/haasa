import homebannerimage from "../../assets/image/homebannerimage.png";
import homerobotimage from "../../assets/image/homerobotimage.png";
import { Link as Scroll } from "react-scroll";

const LandingBanner = ({ isWeb }) => {
  return (
    <div
      className="relative bg-current bg-cover bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${homebannerimage})` }}
    >
      <div className="absolute w-full h-full opacity-70 bg-gradient-to-b from-purple-900 via-purple-900 to-blue-900 overflow-hidden" />

      <div className="h-screen z-10 relative overflow-hidden">
        {/* Main Content */}
        <div className="wrapper w-full h-full flex items-center">
          <div className="max-w-2xl">
            <div className="space-y-4">
              <p data-aos="fade-right" className="text-gray-300">
                Welcome to
              </p>
              <h1
                data-aos="fade-right"
                className="main-heading !text-white mb-4"
              >
                Haasa Software Solutions
              </h1>
              <h2
                data-aos="fade-right"
                className="text-2xl text-orange-400 mb-6"
              >
                {isWeb
                  ? "Empowering the Web with Cutting-Edge Solutions"
                  : "Transforming Ideas into Powerful Mobile Apps"}
              </h2>
              <p data-aos="fade-right" className="text-gray-300 max-w-xl mb-8">
                {isWeb
                  ? "At HAASA AI, we specialize in crafting innovative web solutions that help businesses establish a strong online presence. From scalable web applications to intuitive user experiences, we drive digital success."
                  : "At HAASA AI, we excel in creating robust and feature-rich mobile applications tailored to your business needs. Our solutions ensure seamless performance and a superior user experience across all platforms."}
              </p>
              <button
                data-aos="fade-right"
                className="primary-btn px-8 py-3 !bg-pink-200"
              >
                <Scroll
                  aria-label="Home"
                  smooth={true}
                  to="contactus"
                  className="cursor-pointer"
                >
                  {isWeb ? "EXPLORE WEB SOLUTIONS" : "DISCOVER APP INNOVATION"}
                </Scroll>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="absolute right-28 bottom-0 lg:flex hidden"
      >
        <img src={homerobotimage} alt="" className="h-[80vh]" />
      </div>
    </div>
  );
};

export default LandingBanner;
