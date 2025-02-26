import React from "react";
import { values, workProcess } from "../Constant";
import { FaChevronRight } from "react-icons/fa";

const OurValues = ({ hideWorkProcess }) => {
  return (
    <div id="values" className="max-w-screen !overflow-hidden">
      <div className="wrapper py-16">
        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="section-name  mb-2" data-aos="fade-up">
            What we give
          </h2>
          <h1 className="main-heading mb-4" data-aos="fade-up">
            Our Values
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#f3e5f5] flex justify-center items-center gap-5 rounded-lg p-6"
              data-aos="fade-up"
            >
              <div className="text-purple-600 mb-4">
                <img
                  src={value.icon}
                  alt="icon"
                  className="min-w-[69px] min-h-[60px]"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700 font-montserrat">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Work Process Section */}
        {!hideWorkProcess && (
          <>
            <div className="text-center mb-16">
              <h2 className="section-name mb-2" data-aos="fade-up">
                Work Process
              </h2>
              <h1 className="main-heading" data-aos="fade-up">
                Our Work Process
              </h1>
            </div>

            <div className="relative ml-4">
              <div className="flex overflow-x-auto gap-6 no-scrollbar pb-8 -mx-4 px-4 snap-x snap-mandatory">
                {workProcess.map((process, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className="flex-none border rounded-xl overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                  >
                    <div className="bg-white rounded-lg px-6 py-10 shadow-lg relative h-full">
                      <div className="text-black mb-4">{process.icon}</div>
                      <h3 className="text-xl font-bold mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-700">{process.description}</p>
                      {
                        <div className="hidden lg:block absolute bottom-0 right-3  transform -translate-y-1/2">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
                            <FaChevronRight />
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OurValues;
