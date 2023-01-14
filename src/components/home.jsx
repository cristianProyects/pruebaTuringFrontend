import React from "react";
import Navbar from "./NavBar";
import HeroSection from "./heroSection";
import Products from "./products";
import Evolution from "./evolution"
import AboutUs from "./aboutUs";
import Footer from "./footer";

function home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <Evolution />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default home;
