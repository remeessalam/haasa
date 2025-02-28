import { useNavigate } from "react-router-dom";
import { updatedServices } from "../Constant";

const ServiceSlider = () => {
  const navigate = useNavigate();

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

        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          <div className="flex py-5 gap-6 min-w-max">
            {updatedServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="group hover:bg-[#4A238E] hover:text-white bg-[#F2C6E9] rounded-3xl p-8 w-[300px] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 snap-start"
              >
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
