import homebannerimage from "../assets/image/homebannerimage.png";
import homerobotimage from "../assets/image/homerobotimage.png";
import { Link as Scroll } from "react-scroll";
import Scroller from "./Scroller";

const HomeBanner = () => {
  return (
    <div
      className="relative bg-current bg-cover   bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${homebannerimage})` }}
    >
      <div className="absolute w-full h-full opacity-70  bg-gradient-to-b from-purple-900 via-purple-900 to-blue-900  overflow-hidden" />

      <div className="h-screen z-10  relative overflow-hidden">
        {/* Navigation Numbers */}

        {/* Main Content */}
        <div className="wrapper w-full h-full flex items-center">
          <Scroller />
          <div className="max-w-2xl ">
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
                className="text-2xl font-bold text-orange-400 mb-6"
              >
                Shaping the Future of Innovation
              </h2>
              <p data-aos="fade-right" className="text-gray-300 max-w-xl mb-8">
                At HAASA AI, we pride ourselves on being at the forefront of
                technological innovation. We focused on delivering comprehensive
                solutions that help businesses evolve and excel in the
                ever-changing digital world...
              </p>
              <button
                data-aos="fade-right"
                className="primary-btn px-8 py-3 !bg-pink-200"
              >
                <Scroll
                  aria-label="Home"
                  smooth={true}
                  to="contactus"
                  className="cursor-pointer font-bold"
                >
                  JOIN THE INNOVATION
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

export default HomeBanner;
