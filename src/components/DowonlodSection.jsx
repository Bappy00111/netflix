import React from 'react';

const DowonlodSection = () => {
  return (
    <div>
     <div className="flex  flex-col  md:flex-row justify-center items-center md:gap-10 bg-[#000000] py-20 md:py-28 px-10 ">
     <div className="text-white space-y-4  md:order-2 text-center md:text-left ">
        <h1 className="text-3xl md:text-5xl font-bold md:tracking-wide">Download your shows to <br />watch offline</h1>
        <p className="text-xl md:text-2xl pb-8">
        Save your favorites easily and always have something to watch.
        </p>
      </div>
     <div className="relative order-2 md:order-1">
        <img
          className="w-[400px] md:w-[30vw]"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
       
      </div>
      
      
    </div>
      <div className="h-3 bg-slate-800"></div>
   </div>
  );
};

export default DowonlodSection;