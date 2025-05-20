import React, { useState } from "react";
import logo from "../../../Gallery/logo.png"
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50 shadow-sm">
      <div className="flex justify items-center">
        <div className="md:hidden  sm:block text-sm p-2" onClick={toggleButton}>
          <div className="cursor-pointer">
            <div>
              <div className="w-8 h-1  bg-pink-500"></div>
              <div className="w-8 h-1 mt-1  bg-pink-500"></div>
              <div className="w-8 h-1 mt-1  bg-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links font-bold text-pink-500">
          <div className="flex items-center justify-center"><img src={logo} className="w-10" />
            <h1 className="font-bold  text-pink-500 text-3xl text-center p-4">Beauty</h1></div>
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/About" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            About
          </Link>
          <Link to="/Dress" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          Summer Collection
          </Link>
          <Link to="/MoreProduct" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          Evening Wear
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          Contact
          </Link>
        </div>
      </div>


      <div className="flex justify-between items-center bg-white/10 backdrop-blur-3xl">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <img src={logo} className="w-14" />
            </div>
            <div className="navbar-links lg:flex justify-center items-center gap-5">
              <Link to="/" smooth={true} duration={1000} className="text-xl hover: text-pink-500 hover:underline">
                Home
              </Link>
              <Link to="/About" smooth={true} duration={1000} className="text-xl hover: text-pink-500 hover:underline">
                About
              </Link>
              
              <Link to="/Dress" smooth={true} duration={1000} className="text-xl hover: text-pink-500 hover:underline">
              Summer Collection
              </Link>
              <Link to="/MoreProduct" smooth={true} duration={1000} className="text-xl hover: text-pink-500 hover:underline">
             Evening Wear
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl hover: text-pink-500 hover:underline">
              Contact
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-lg text-white textshadow font-bold rounded py-2 px-4 bg-pink-500">Order Now</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}