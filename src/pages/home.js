import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Orca Dive Team</h1>
        <p>Get Tanked. Go Diving</p>
        <Link to="/menu">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
module.exports = Home;
