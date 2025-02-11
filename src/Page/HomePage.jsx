import React from "react";
import HomeBanner from "../Components/HomeBanner";
import ServiceSlider from "../Components/AllServices";
import Services from "../Components/Services";
import OurValues from "../Components/OurValues";
import workexperienceimage from "../assets/image/workexperienceimage.png";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import Testimonials from "../Components/Testimonials";
import AssociatedWith from "../Components/Associated";
import LeadForm from "../Components/LeadForm";
import AboutCompany from "../Components/AboutCompany";

const HomePage = () => {
  return (
    <div className="text-black">
      <HomeBanner />
      <ServiceSlider />
      <Services />
      <AboutCompany />
      <OurValues hideWorkProcess={true} />
      <div className="max-w-screen overflow-hidden">
        <section className="w-full grid lg:grid-cols-[60%_35%] items-end relative">
          <img
            loading="lazy"
            src={workexperienceimage}
            alt="experience"
            width="800"
            height="600"
            className="w-full h-[70vh] lg:block hidden object-cover z-10 grayscale-[20%]"
          />
          <div
            data-aos="fade-left"
            className="px-6 flex flex-col items-center lg:items-start lg:pl-5 w-full z-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <h6 className="section-name">Work Experience</h6>
            </div>
            <h2 className="text-[2rem] md:text-5xl font-extrabold capitalize text-center lg:text-start mb-12">
              We specialize in custom tailoring solutions
            </h2>
            <img
              loading="lazy"
              src={workexperienceimage}
              width="400"
              height="300"
              alt="experience"
              className="w-full max-w-[21rem] rounded-t-lg block lg:hidden object-cover  object-right z-10"
            />
            <div className="z-10 bg-gradient-to-b from-primary to-violet-900 w-full p-5 grid md:grid-cols-3 gap-5 lg:w-[70vw] lg:-translate-x-[30vw]">
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
                <BsLightningChargeFill className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" />
                <h2 className="text-4xl font-bold">50+</h2>
                <p className=" pl-3">Projects Completed</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
                <MdGroups className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" />

                <h2 className="text-4xl font-bold">100%</h2>
                <p className=" pl-3">Satisfied clients</p>
              </div>
              <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
                <LiaAwardSolid className="h-[4rem] w-[4rem] text-orange-400 obj2ct-c -mb-4ontain" />
                <h2 className="text-4xl font-bold">2+</h2>
                <p className=" pl-3">Awards</p>
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
