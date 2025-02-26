import React from "react";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../assets/image/servicebanner.png";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import AssociatedWith from "../Components/Associated";
import LeadForm from "../Components/LeadForm";
import Intro from "../Components/Intro";
import ServiceSlider from "../Components/AllServices";
const Servicepage = () => {
  return (
    <div>
      <PageBanner image={bannerImage} title="Services" />
      <Intro />
      <ServiceSlider />
      <Services />
      <div className="pb-[4rem]">
        <Testimonials />
      </div>
      <AssociatedWith />
      <LeadForm />
    </div>
  );
};

export default Servicepage;
