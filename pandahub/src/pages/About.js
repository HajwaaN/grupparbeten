import React from "react";
import panda from "../panda images/OIG.jpg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${panda})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are a small team of 6 software developers that have come together to build a website for people like us that like to build websites and also html based games. 
          PandaHub is a gaming hub where you can find all diffrent kind of games developed by software developers for software developers 
        </p>
      </div>
    </div>
  );
}

export default About;