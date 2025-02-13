import React from "react";
import LandingHeader from "./LandingHeader";
import { Outlet } from "react-router-dom";
import LandingFooter from "./LandingFooter";

const LandingLayout = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </>
  );
};

export default LandingLayout;
