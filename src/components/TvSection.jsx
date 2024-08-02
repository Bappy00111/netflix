import React from "react";

const TvSection = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center gap-10 bg-[#000000] py-20 md:py-28 px-10">
        <div className="text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold md:tracking-wide">
            Enjoy on your TV
          </h1>
          <p className="text-xl md:text-2xl pb-8">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, <br /> Apple TV,
            Blu-ray players, and more.
          </p>
        </div>
        <div className="relative w-[300px] md:w-[30vw]">
          <img
            className="w-full"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video
            className="absolute top-[20.5%] left-[13.5%] w-[73%] h-[55%] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            controls
            loop
            muted
          ></video>
        </div>
      </div>
      <div className="h-3 bg-slate-800"></div>
    </div>
  );
};

export default TvSection;
