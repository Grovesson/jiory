import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
