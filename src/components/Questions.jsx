import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Questions = () => {
  return (
    <div>
      <div className="bg-[#000000] text-white py-10 space-y-6 px-4">
        <h1 className="text-3xl md:text-5xl font-bold md:tracking-wide text-center">
          Frequently Asked
          <span className="md:hidden block mt-2"></span> Questions
        </h1>
        <div className="flex justify-between items-center bg-[#2d2d2d]  w-full md:w-2/3 mx-auto px-4 py-6 ">
          <span className="text-2xl">What is Netflix?</span>

          <span>
            <AiOutlinePlus className="text-3xl" />
          </span>
        </div>
        <div className="flex justify-between items-center bg-[#2d2d2d]  w-full md:w-2/3 mx-auto px-4 py-6">
          <span className="text-2xl">How much does Netflix cost?</span>
          <span>
            <AiOutlinePlus className="text-3xl" />
          </span>
        </div>
        <div className="flex justify-between items-center bg-[#2d2d2d] w-full md:w-2/3 mx-auto px-4 py-6">
          <span className="text-2xl">Where can I watch?</span>
          <span>
            <AiOutlinePlus className="text-3xl" />
          </span>
        </div>
        <div className="flex justify-between items-center bg-[#2d2d2d]  w-full md:w-2/3 mx-auto px-4 py-6">
          <span className="text-2xl">How do I cancel?</span>
          <span>
            <AiOutlinePlus className="text-3xl" />
          </span>
        </div>
        <div className="flex justify-between items-center bg-[#2d2d2d]  w-full md:w-2/3 mx-auto px-4 py-6">
          <span className="text-2xl">What can I watch on Netflix?</span>
          <span>
            <AiOutlinePlus className="text-3xl" />
          </span>
        </div>
        <div className="flex justify-between items-center bg-[#2d2d2d]  w-full md:w-2/3 mx-auto px-4 py-6">
          <span className="text-2xl">Is Netflix good for kids?</span>
          <span>
            <AiOutlinePlus className="text-3xl" />
          </span>
        </div>
        <p className="text-center text-xl mb-0">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center">
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
      </div>
      <div className="h-3 bg-slate-800"></div>
    </div>
  );
};

export default Questions;
