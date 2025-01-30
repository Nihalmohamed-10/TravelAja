import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/home/Home";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import Services from "../containers/services/Services"
import AboutUs from "../containers/aboutUs/AboutUs"
import Contact from "../containers/contact/Contact";

function RouterComponent() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default RouterComponent;

