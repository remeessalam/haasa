import { useNavigate } from "react-router-dom";
import { updatedServices } from "../Constant";
import { useEffect, useRef, useState } from "react";
// import { useState } from "react";

const ServiceSlider = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleReadMore = (service) => {
    navigate(`/service/${service.path}`);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      // Mouse wheel horizontal scroll
      const handleWheelScroll = (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY; // Converts vertical scroll to horizontal
      };

      scrollContainer.addEventListener("wheel", handleWheelScroll);

      return () =>
        scrollContainer.removeEventListener("wheel", handleWheelScroll);
    }
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Increase multiplier for faster scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div id="service" className="w-full py-16 bg-bgcolor">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h3 className="section-name mb-4" data-aos="fade-up">
            Our Services
          </h3>
          <h2 className="main-heading mb-6" data-aos="fade-up">
            We Provide the Best IT Solution Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
            At HAASA AI, we offer a full range of advanced technology services
            designed to empower businesses with scalable, intelligent, and
            secure solutions.
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          className="overflow-x-auto no-scrollbar pb-6"
        >
          <div className="flex py-5 gap-6 min-w-max ">
            {updatedServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`group  hover:bg-secondary/80 hover:text-white bg-primary/50 rounded-3xl p-8 w-[300px] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                  {/* <BiBarChartAlt2 className="text-white text-3xl" /> */}
                  <div className="service-icon">{service.icon}</div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold `}>{service.title}</h3>
                  <p className={`font-montserrat text-sm`}>
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleReadMore(service)}
                    className={`group-hover:text-[#C5D82E] font-montserrat text-sm !font-bold mt-2 text-start`}
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
