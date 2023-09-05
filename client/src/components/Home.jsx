import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from 'react';
import HeroSection from "./HeroSection";


const HomeApp = () => {
  return (
    <div>
      <HeroSection />
      <section id="main-scroll" className="main-container"></section>
    </div>
  );
};

export default HomeApp;