import React, { useRef } from "react";
import { values, workProcess } from "../Constant";
import { FaChevronRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const OurValues = ({ hideWorkProcess }) => {
  const scrollContainerRef = useRef(null);

  // Function to scroll right on arrow click
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Function to enable drag scrolling
  const handleDragScroll = (event) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let startX = event.pageX || event.touches[0].pageX;
    let scrollLeft = container.scrollLeft;

    const onMouseMove = (e) => {
      let x = e.pageX || e.touches[0].pageX;
      let walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onMouseMove);
    window.addEventListener("touchend", onMouseUp);
  };

  return (
    <div id="values" className="max-w-screen !overflow-hidden">
      <div className={`wrapper ${!hideWorkProcess ? `pt-16 pb-0` : `py-16`}`}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#F1E8EF] flex justify-center items-center gap-5 rounded-[20px] p-6"
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
                <h3 className="text-xl font-bold mb-2 font-candal">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-montserrat">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Work Process Section */}
      </div>
      {!hideWorkProcess && (
        <>
          <div className="text-center mb-16 mt-[4rem]">
            <h2 className="section-name mb-2" data-aos="fade-up">
              Work Process
            </h2>
            <h1 className="main-heading" data-aos="fade-up">
              Our Work Process
            </h1>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleDragScroll}
              onTouchStart={handleDragScroll}
              className="flex overflow-x-auto select gap-4 sm:gap-12 no-scrollbar pb-16 px-4 sm:px-16 scroll-pl-14 snap-x snap-mandatory"
            >
              {workProcess.map((process, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex-none select-none border shadow-2xl border-[#c9c9c9] rounded-xl w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="bg-white rounded-xl pl-6 pr-14 py-10 shadow-lg relative h-full">
                    <div className="text-black mb-4">
                      {process.image ? (
                        <img src={process.image} alt="" className="w-12 h-12" />
                      ) : (
                        process.icon
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-gray-700">{process.description}</p>

                    {/* Scroll Right Button */}
                    <div
                      className="absolute bottom-0 -right-3 sm:-right-6 transform -translate-y-1/2 z-10 cursor-pointer"
                      onClick={handleScrollRight}
                    >
                      <div className="h-14 w-14 sm:w-16 sm:h-16 bg-[#642190] rounded-full flex items-center justify-center text-white">
                        {workProcess.length === index + 1 ? (
                          <MdDone className="text-2xl sm:text-4xl" />
                        ) : (
                          <FaChevronRight className="text-2xl sm:text-4xl" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OurValues;
