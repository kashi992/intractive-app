import React from "react";
import "./navbar.scss";
import img from "../../assets/images/header_logos.png"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="headerLogos">
          <img src={img} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
