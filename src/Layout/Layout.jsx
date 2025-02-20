import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import WhatsApp from "../Components/WhatsApp";

const Layout = () => {
  return (
    <>
      <Header />
      <WhatsApp />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
