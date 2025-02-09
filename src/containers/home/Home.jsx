import React from "react";
import Hero from "./HeroSection";
import TravelersPoint from "./TravelersPoint";
import Destination from "./Destination";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <TravelersPoint />
      <Destination />
      <Testimonial />
    </div>
  );
}

export default Home;
