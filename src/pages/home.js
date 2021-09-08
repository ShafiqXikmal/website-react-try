import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landingPage.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${landingImage})` }}>
      <div className="headerContainer">
        <h1>Orca Dive Team</h1>
        <p>Get Tanked. Go Diving</p>
        <Link to="/about">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
module.exports = Home;
