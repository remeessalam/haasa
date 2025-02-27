import React from "react";
import { industries } from "../Constant";
import servicebgimg from "../assets/image/servicebgimg.jpeg";
const Services = () => {
  console.log(industries, "asdfkmaasdfasdf");
  return (
    <div id="industry" className=" py-[4rem]">
      {" "}
      <section className="wrapper">
        <div className="text-center mb-12">
          <span className="section-name mb-2 block" data-aos="fade-up">
            Industry
          </span>
          <h2 className="main-heading mb-4" data-aos="fade-up">
            Industries We Serve
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto" data-aos="fade-up">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            console.log(industry, "asdfkmaasdfasdf");

            return (
              <div
                key={industries.id}
                data-aos="fade-up"
                className="relative rounded-3xl group p-8  transition-all duration-500 ease-in-out overflow-hidden"
              >
                {/* Background Image with Opacity Transition */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover  bg-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${industry?.image})` }}
                ></div>
                <div className="absolute w-full h-full top-0 left-0 bg-transparent group-hover:bg-black/50" />
                {/* White Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#F1E8EF]  transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>

                {/* Content */}
                <div className="relative z-10 group-hover:text-white">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">
                    {industry.title}
                  </h3>
                  <p className="font-montserrat">{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
