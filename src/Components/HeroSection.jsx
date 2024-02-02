import React from 'react';
import herosectionImage from "../images/herosection.jpg";
import '../Styles/hero.css';

function HeroSection() {
  return (
    <div className="hero-section" id="hero-section">
        <img src={herosectionImage} alt="" className="hero-image" />
    </div>
  );
}
export default HeroSection;
