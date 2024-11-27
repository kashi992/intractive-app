import React from "react";
import "./navbar.scss";
import img from "../../assets/images/header_logos.png"

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container flex md:justify-between justify-center items-center border-b-2 border-[#707070] md:flex-nowrap flex-wrap md:gap-0 gap-3">
        <div className="headerLogos min-[1370px]:w-[40%] md:w-[50%] w-full">
          <img src={img} alt="" className="h-full w-full object-contain"/>
        </div>
        <p className="min-[1200px]:text-2xl text-xl font-semibold sf">‘Soundline of belonging’</p>
      </div>
    </header>
  );
};

export default Navbar;
