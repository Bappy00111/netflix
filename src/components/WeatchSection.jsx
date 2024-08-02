import React from "react";

const WeatchSection = () => {
  return (
    <div>
      <div className=" bg-[#000000] py-20 md:py-28 px-10  md:flex justify-center">
        <div className="text-white space-y-4 md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold md:tracking-wide">
            Watch{" "}
            <span className="hidden md:inline">
              {" "}
              <br />{" "}
            </span>{" "}
            everywhere
          </h1>

          <p className="text-xl">
            Stream unlimited movies and TV <br /> shows on your phone, tablet,
            laptop, and TV.
          </p>
        </div>
      </div>
      <div className="h-3 bg-slate-700"></div>
    </div>
  );
};

export default WeatchSection;
