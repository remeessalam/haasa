import React from "react";

import Services from "../Components/Services";
import OurValues from "../Components/OurValues";
import workexperienceimage from "../assets/image/workexperienceimage.png";
import { MdGroups } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import Testimonials from "../Components/Testimonials";
import AssociatedWith from "../Components/Associated";
import LeadForm from "../Components/LeadForm";
import LandingBanner from "../Components/LandingComponents/LandingBanner";
import LandingServices from "../Components/LandingComponents/LandingServices";
import SinglePortfolio from "../Components/LandingComponents/SinglePortfolio";
import { appPortfolio, webPortfolio } from "../Constant";
import LandingAbout from "../Components/LandingComponents/LandingAbout";
import agilityorange from "../assets/svgs/agilityorange.svg";
import recognition from "../assets/svgs/recognition.svg";

const LandingPage = ({ page }) => {
  const isWeb = page === "web-development";
  const porfolio = isWeb ? webPortfolio : appPortfolio;
  return (
    <div className="text-black max-w-screen overflow-x-hidden">
      <LandingBanner isWeb={isWeb} />
      {/* <ServiceSlider /> */}
      <LandingServices isWeb={isWeb} />
      <Services />
      <LandingAbout isWeb={isWeb} />
      {/* <AboutCompany /> */}
      <OurValues hideWorkProcess={true} />
      <div className="max-w-screen overflow-hidden">
        <section className="w-full grid lg:grid-cols-[60%_40%] items-end relative">
          <img
            loading="lazy"
            src={workexperienceimage}
            alt="experience"
            width="800"
            height="600"
            className="w-full  lg:block hidden object-cover z-10 grayscale-[20%]"
            data-aos="fade-right"
          />
          <div
            data-aos="fade-left"
            className="px-6 flex flex-col h-full justify-between items-center lg:items-start lg:pl-5 w-full z-10"
          >
            <div className="flex flex-col items-start gap-3 mb-5 md:ml-10">
              <h6 className="section-name font-candal" data-aos="fade-left">
                Work Experience
              </h6>
              <h2 className="text-[2rem] md:text-5xl font-candal text-[#0C258B] font-extrabold  text-center lg:text-start">
                We specialize in custom tailoring solutions
              </h2>
            </div>
            <img
              loading="lazy"
              src={workexperienceimage}
              width="400"
              height="300"
              alt="experience"
              className="w-full max-w-[21rem] rounded-t-lg block lg:hidden object-cover  object-right z-10"
              data-aos="fade-left"
            />
            <div
              className="z-10 bg-gradient-to-b from-primary to-violet-900 w-full p-5 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]"
              // data-aos="fade-left"
            >
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
                <img src={agilityorange} alt="" className="h-[4rem] w-[4rem]" />

                {/* <BsLightningChargeFill className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" /> */}
                <h2 className="text-4xl font-bold font-candal">50+</h2>
                <p className=" pl-3 font-semibold">Projects Completed</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
                <MdGroups className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" />

                <h2 className="text-4xl font-bold font-candal">
                  100<span className="text-3xl">%</span>
                </h2>
                <p className=" pl-3 font-semibold">Satisfied clients</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
                {/* <LiaAwardSolid className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" /> */}
                <img
                  src={recognition}
                  alt=""
                  className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain"
                />
                <h2 className="text-4xl font-bold">02+</h2>
                <p className=" pl-3 font-semibold">Awards</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="wrapper bg-white paddingtop paddingbottom px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1
            data-aos="fade-up"
            className="main-heading max-w-[60rem] mx-auto text-start sm:text-center"
          >
            Portfolio
          </h1>
          <div className="flex flex-col gap-8">
            {isWeb ? (
              <SinglePortfolio
                isWeb={isWeb}
                porfolio={porfolio}
                portfoliofor="Web Development"
              />
            ) : (
              <SinglePortfolio
                porfolio={porfolio}
                portfoliofor="App Development"
                isWeb={isWeb}
              />
            )}
          </div>
        </div>
      </div>
      <Testimonials />
      <AssociatedWith />
      <LeadForm />
    </div>
  );
};

export default LandingPage;
