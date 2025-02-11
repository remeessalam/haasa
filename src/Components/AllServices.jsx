import { BiBarChartAlt2 } from "react-icons/bi";
import { allServices } from "../Constant";

const ServiceSlider = () => {
  return (
    <div className="w-full py-16 ">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h3 className="section-name mb-4">Our Services</h3>
          <h2 className="main-heading mb-6">
            We Provide the Best IT Solution Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At HAASA AI, we offer a full range of advanced technology services
            designed to empower businesses with scalable, intelligent, and
            secure solutions.
          </p>
        </div>

        <div className="overflow-x-auto no-scrollbar pb-6">
          <div className="flex py-5 gap-6 min-w-max ">
            {allServices.map((service, index) => (
              <div
                key={index}
                className={`justify-between  hover:bg-secondary/80 hover:text-white bg-primary/50 rounded-3xl p-8 w-[300px] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                  <BiBarChartAlt2 className="text-white text-3xl" />
                </div>
                <h3 className={`text-xl font-bold `}>{service.title}</h3>
                <p className={` text-sm`}>{service.description}</p>
                <button className={`text-sm font-semibold mt-2 `}>
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
