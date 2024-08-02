import React from "react";
import "./Cover.css";
import logo from "../../src/assets/images/logo.svg";
import { IoIosArrowForward } from "react-icons/io";

const Cover = () => {
  return (
    <div className="cover relative bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <nav className="relative z-10 flex justify-between items-center px-2 sm:max-w-xl md:max-w-screen-xl mx-auto h-[60px]">
        <img className="h-[50px] w-[100px]" src={logo} alt="Logo" />
        <button className="bg-[#e50914] text-white px-2 py-1 rounded">
          Sign In
        </button>
      </nav>
      <div className="text-white relative z-10 h-[calc(100%-60px)] flex flex-col justify-center items-center text-center ">
        <div className="space-y-5">
          <h4 className="font-bold text-2xl md:text-4xl">
            Unlimited movies, TV shows, and more
          </h4>
          <h2 className="text-xl">Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mt-5 gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="px-14 py-2 rounded-md bg-black bg-opacity-20 border border-white h-12 sm:h-auto"
          />
          
          <button className="bg-[#e50914] text-white flex items-center rounded px-2 py-2 gap-2 justify-center">
            <span>Get Started</span>
            <span>
            <IoIosArrowForward />
            </span>
          </button>
        </div>
      </div>
      <div className="h-3 bg-slate-800"></div>
    </div>
  );
};

export default Cover;
