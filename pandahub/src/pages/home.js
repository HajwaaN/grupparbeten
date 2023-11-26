import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../panda images/karate.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> PandaHub </h1>
        <p>For Software Developers By Software Developers</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;