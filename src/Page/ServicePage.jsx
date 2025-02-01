import React from "react";
import PageBanner from "../Components/PageBanner";
import bannerImage from "../assets/image/servicebanner.png";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import AssociatedWith from "../Components/Associated";
import LeadForm from "../Components/LeadForm";
import Intro from "../Components/Intro";
const Servicepage = () => {
  return (
    <div>
      <PageBanner image={bannerImage} title="Services" />
      <Intro />
      <Services />
      <Testimonials />
      <AssociatedWith />
      <LeadForm />
    </div>
  );
};

export default Servicepage;
