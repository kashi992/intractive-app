import React from "react";
import "./navbar.scss";
import img from "../../assets/images/header_logos.png"

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center border-b-2 border-[#707070]">
        <div className="headerLogos min-[1680px]:max-w-[750px] max-w-[550px] w-full">
          <img src={img} alt="" className="h-full w-full"/>
        </div>
        <p className="text-2xl font-semibold sf">‘Soundlinr of belonging’</p>
      </div>
    </header>
  );
};

export default Navbar;
