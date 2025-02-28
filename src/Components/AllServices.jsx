import { useNavigate } from "react-router-dom";
import { updatedServices } from "../Constant";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const ServiceSlider = () => {
  const navigate = useNavigate();

  const [sliderRef, instanceRef] = useKeenSlider({
    // mode: "free-snap",
    drag: true,
    rubberband: true,

    slides: {
      perView: "auto",
      spacing: 24,
    },
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const handleWheel = (e) => {
      if (slider && instanceRef.current) {
        e.preventDefault();
        instanceRef.current.moveToIdx(
          instanceRef.current.track.details.abs + (e.deltaX > 0 ? 1 : -1)
        );
      }
    };

    if (slider) {
      slider.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (slider) {
        slider.removeEventListener("wheel", handleWheel);
      }
    };
  }, [sliderRef, instanceRef]);

  const handleReadMore = (service) => {
    navigate(`/service/${service.path}`);
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

        <div className="overflow-x-visible pb-6" data-aos="fade-up">
          <div ref={sliderRef} className="keen-slider py-5">
            {updatedServices.map((service, index) => (
              <div
                key={index}
                className="keen-slider__slide !min-w-[300px] !max-w-[300px]"
              >
                <div className="group hover:bg-[#4A238E] hover:text-white bg-[#F2C6E9] rounded-3xl p-8 w-full h-full flex flex-col gap-4  transition-colors duration-300">
                  <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold select-none">
                      {service.title}
                    </h3>
                    <p className="font-montserrat text-sm select-none">
                      {service.description}
                    </p>
                    <button
                      onClick={() => handleReadMore(service)}
                      className="group-hover:text-[#C5D82E] font-montserrat text-sm !font-bold mt-2 text-start select-none"
                    >
                      READ MORE
                    </button>
                  </div>
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
