import React from "react";
import "./navbar.scss";
import img from "../../assets/images/header_logos.png"

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container flex md:justify-between justify-center items-center md:flex-nowrap flex-wrap md:gap-0 gap-3">
        <div className="bgBottom"><span></span></div>
        <div className="headerLogos min-[1680px]:max-w-[750px] min-[1570px]:max-w-[550px] min-[1370px]:max-w-[500px] lg:max-w-[450px] max-w-[350px] w-full">
          <img src={img} alt="" className="h-full w-full object-contain"/>
        </div>
        <p className="min-[1200px]:text-2xl text-xl font-semibold sf">‘Soundline of belonging’</p>
      </div>
    </header>
  );
};

export default Navbar;
