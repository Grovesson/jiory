import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

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
