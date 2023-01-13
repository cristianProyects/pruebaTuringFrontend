import React from "react";
import Navbar from "./NavBar";
import HeroSection from "./heroSection";
import Products from "./products";
import Evolution from "./evolution"

function home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <Evolution />
    </div>
  );
}
export default home;
