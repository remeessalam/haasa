import React from "react";

const PageBanner = ({ image, title }) => {
  return (
    <div
      className="h-[50vh] bg-center bg-cover bg-no-repeat w-screen flex justify-center sm:justify-start sm:pl-16 items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-white z-10 font-bold text-5xl">{title}</h1>
    </div>
  );
};

export default PageBanner;
