// src/pages/Home.tsx

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HomeLayout from "../components/Layout/HomeLayout";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLayout />
      <Footer />
    </>
  );
};

export default Home;
