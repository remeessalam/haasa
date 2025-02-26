import React from "react";

const PageBanner = ({ image, title }) => {
  return (
    <div
      className="h-[50vh] bg-center bg-cover bg-no-repeat max-w-screen overflow-hidden w-screen flex justify-center sm:justify-start  items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-screen wrapper flex justify-start">
        <div className="">
          <h1
            className="text-white z-10 font-bold text-2xl md:text-start text-start md:text-5xl"
            data-aos="fade-right"
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
