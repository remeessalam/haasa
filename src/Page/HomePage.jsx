import React from "react";
import HomeBanner from "../Components/HomeBanner";
import ServiceSlider from "../Components/AllServices";
import Services from "../Components/Services";
import OurValues from "../Components/OurValues";
import workexperienceimage from "../assets/image/workexperienceimage.png";
import { MdGroups } from "react-icons/md";
import Testimonials from "../Components/Testimonials";
import AssociatedWith from "../Components/Associated";
import LeadForm from "../Components/LeadForm";
import AboutCompany from "../Components/AboutCompany";
import recognition from "../assets/svgs/recognition.svg";
import agilityorange from "../assets/svgs/agilityorange.svg";
import users from "../assets/svgs/users.svg";
const HomePage = () => {
  return (
    <div className="text-black max-w-screen overflow-x-hidden">
      <HomeBanner />
      <ServiceSlider />
      <Services />
      <AboutCompany />
      <OurValues hideWorkProcess={true} />
      <div id="experience" className="max-w-screen overflow-hidden">
        <section className="w-full grid lg:grid-cols-[60%_40%] items-start relative">
          <img
            loading="lazy"
            src={workexperienceimage}
            alt="experience"
            width="800"
            height="600"
            className="w-full  lg:block hidden object-cover grayscale-[20%]"
            data-aos="fade-right"
          />
          <div
            data-aos="fade-left"
            className="px-6 flex justify-between h-full flex-col items-center lg:items-start lg:pl-5 w-full z-10"
          >
            <div className="flex flex-col items-start gap-3 mb-5 md:ml-10">
              <h6 className="section-name font-candal" data-aos="fade-left">
                Work Experience
              </h6>
              <h2
                className="text-[2rem] md:text-5xl font-candal text-[#0C258B] font-extrabold  text-center lg:text-start "
                data-aos="fade-left"
              >
                We specialize in custom tailoring solutions{" "}
              </h2>
            </div>
            <img
              loading="lazy"
              src={workexperienceimage}
              width="400"
              height="300"
              alt="experience"
              className="w-full  rounded-t-lg block lg:hidden object-cover  object-right "
              data-aos="fade-left"
            />
            <div
              className="z-10 bg-gradient-to-b from-[#7f3577] via-[#0C258B] to-[#0C258B] w-full px-5 py-10 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]"
              // data-aos="fade-left"
            >
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
                {/* <BsLightningChargeFill className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" /> */}
                <img src={agilityorange} alt="" className="h-[4rem] w-[4rem]" />
                <h2 className="text-4xl font-bold font-candal">50+</h2>
                <p className=" pl-3 font-semibold">Projects Completed</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
                {/* <MdGroups className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" /> */}
                <img src={users} alt="" className="h-[4rem] w-[4rem]" />

                <h2 className="text-4xl font-bold font-candal">100%</h2>
                <p className=" pl-3 font-semibold">Satisfied clients</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
                {/* <LiaAwardSolid className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" /> */}
                <img
                  src={recognition}
                  alt=""
                  className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain"
                />
                <h2 className="text-4xl font-bold font-candal">02+</h2>
                <p className=" pl-3 font-semibold">Recognition</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Testimonials />
      <AssociatedWith />
      <LeadForm />
    </div>
  );
};

export default HomePage;
