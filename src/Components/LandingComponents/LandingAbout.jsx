import { useNavigate } from "react-router-dom";
import webaboutcompanyimage from "../../assets/image/webaboutcompanyimage.jpg";
import appaboutcompanyimage from "../../assets/image/appaboutcompanyimage.jpg";
import { Link as Scroll } from "react-scroll";

const LandingAbout = ({ isWeb }) => {
  const navigate = useNavigate();
  const image = isWeb ? webaboutcompanyimage : appaboutcompanyimage;
  return (
    <div id="aboutus" className="bg-white p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="section-name mb-2" data-aos="fade-up">
          Our Story
        </h2>
        <h1 className="main-heading" data-aos="fade-up">
          About {isWeb ? "Web Development" : "App Development"}
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section with Image and Experience Box */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <img
              data-aos="fade-right"
              src={image}
              alt="Business people silhouettes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience Box */}
          {/* <div
            className="absolute -bottom-20 left-0 bg-primary text-white p-4 sm:p-8 rounded-3xl max-w-sm"
            data-aos="fade-up"
          >
            <div className="mb-1 sm:mb-4">
              <span className="text-2xl sm:text-6xl font-bold">2</span>
              <span className="text-xl sm:text-4xl font-bold">+</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-medium mb-1 sm:mb-2">
              Years of Experience
            </h3>
            <p className="text-sm">
              The trusted choice for your {isWeb ? "web" : "app"} development
              solutions
            </p>
          </div> */}
        </div>

        {/* Right Section with Vision */}
        <div className="space-y-6 mt-16 sm:mt-0">
          <h2 className="text-4xl font-bold" data-aos="fade-left">
            Our Vision
          </h2>
          <h3
            className="text-[#6B21A8] text-3xl font-bold leading-tight"
            data-aos="fade-left"
          >
            {isWeb
              ? "Building Scalable, Secure, and Engaging Web Solutions"
              : "Creating Intuitive, High-Performance Mobile Experiences"}
          </h3>
          <p className="text-gray-700 leading-relaxed" data-aos="fade-left">
            {isWeb
              ? "Our web development vision is to craft dynamic, scalable, and user-friendly websites that help businesses establish a strong digital presence. We focus on innovative web solutions that ensure seamless user experiences and business growth."
              : "Our app development vision is to design cutting-edge, high-performance mobile applications that enhance user engagement and business efficiency. We prioritize intuitive design, seamless functionality, and scalability in every project."}
          </p>
          <button
            className="bg-[#FF9B3E] text-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            data-aos="fade-left"
            onClick={() =>
              navigate(isWeb ? "/web-development" : "/app-development")
            }
          >
            <Scroll
              aria-label="Home"
              smooth={true}
              to="contactus"
              className="cursor-pointer"
            >
              KNOW MORE ABOUT {isWeb ? "WEB" : "APP"} DEVELOPMENT
            </Scroll>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
