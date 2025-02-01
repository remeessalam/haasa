import React from "react";

const Intro = () => {
  return (
    <div>
      <section className="bg-bannerBackground py-[3rem] sm:py-[7rem] ">
        <div className=" wrapper">
          <h1 className="main-heading uppercase ">
            Your Partner in Navigating the Digital Transformation Journey
          </h1>
          <div className="grid md:grid-cols-3">
            <p className="text-white/80 mt-5 sm:mt-10 sm:max-w-[60vw] md:col-span-2">
              Our vision is to be the trusted partner that businesses turn to
              when they need to adapt, innovate, and excel. We believe that
              technology should not be a barrier but a catalyst for growth.
              Through our solutions, we aim to transform the way businesses
              operate, helping them stay competitive in an increasingly complex
              world.
            </p>
            <div className="w-full flex md:justify-end md:mt-0 mt-5 sm:mt-10">
              <button className="primary-btn px-10 py-4 h-fit self-end">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
