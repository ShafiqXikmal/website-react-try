import React, { useState } from "react";
import Logo from "../assets/orcaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/navbar.css";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navBar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide"></div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <button>
        <ReorderIcon />
      </button>
    </div>
  );
}

module.exports = NavBar;
