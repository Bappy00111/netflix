import React from "react";

const TvSection = () => {
  return (
    <div className=" md:flex rever justify-center items-center gap-10 bg-[#000000] py-20 md:py-28 px-10">
      <div className="text-white space-y-6 text-center ">
        <h1 className="text-3xl md:text-5xl font-bold">Enjoy on your TV</h1>
        <p className="text-xl md:text-2xl pb-8">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, <br /> Apple TV,
          Blu-ray players, and more.
        </p>
      </div>
      <div className="relative">
        <img
          className="w-[300px] md:w-[30vw]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
        <video
          className="absolute inset-0"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          controls
          loop
        ></video>
      </div>
    </div>
  );
};

export default TvSection;
