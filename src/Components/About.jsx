import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import aboutimg from "./images/aboutimg.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="aboutText">
          <h1>Feel Comfort With Trendy </h1>
          <p>Deel With Comfort. TrendyShoe's</p>
          <NavLink to="./product">
            <button>Checkout products</button>
          </NavLink>
        </div>
        <img src={aboutimg} />
      </div>
      <div className="aboutus-text">
        <div>
          <p className="aboutus-heading"> About US</p>
        </div>
        <p>
          Feel comfort with our Efforts Our innovation is fueled by the choices
          of an increasingly earth-conscious consumer and hence we strive to
          innovate using natural and sustainable materials that are good for the
          people and the planet.
        </p>
      </div>

      <Footer />
    </>
  );
};
export default About;
