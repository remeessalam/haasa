import { useNavigate } from "react-router-dom";
import { updatedServices } from "../Constant";
import ServiceModal from "./ServiceModal";
// import { useState } from "react";

const ServiceSlider = () => {
  const navigate = useNavigate();
  // const [selectedService, setSelectedService] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (service) => {
    navigate(`/service/${service.path}`);
  };

  // const handleReadMore = (service) => {
  //   setSelectedService(service);
  //   setIsModalOpen(true);
  //   document.body.style.overflow = "hidden"; // Disable background scrolling
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedService(null);
  //   document.body.style.overflow = "auto"; // Re-enable background scrolling
  // };

  return (
    <div id="service" className="w-full py-16 ">
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

        <div className="overflow-x-auto no-scrollbar pb-6">
          <div className="flex py-5 gap-6 min-w-max ">
            {updatedServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`justify-between  hover:bg-secondary/80 hover:text-white bg-primary/50 rounded-3xl p-8 w-[300px] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                  {/* <BiBarChartAlt2 className="text-white text-3xl" /> */}
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3 className={`text-xl font-bold `}>{service.title}</h3>
                <p className={` text-sm`}>{service.description}</p>
                <button
                  onClick={() => handleReadMore(service)}
                  className={`text-sm font-semibold mt-2 `}
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {isModalOpen && (
        <ServiceModal service={selectedService} onClose={handleCloseModal} />
      )} */}
    </div>
  );
};

export default ServiceSlider;
