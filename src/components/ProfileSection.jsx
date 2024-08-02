import React from "react";

const ProfileSection = () => {
  return (
    <div>
      <div className="flex  flex-col  md:flex-row justify-center items-center md:gap-10 bg-[#000000] py-20 md:py-28 px-10 ">
        <div className="text-white space-y-4  md:order-2 text-center md:text-left ">
          <h1 className="text-3xl md:text-5xl font-bold md:tracking-wide">
            Create profiles for kids
          </h1>
          <p className="text-xl md:text-2xl pb-8">
          Send kids on adventures with their favorite characters in <br /> a space made just for them—free with your membership.
          </p>
        </div>
        <div className="relative order-2 md:order-1">
          <img
            className="w-[400px] md:w-[30vw]"
            src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt=""
          />
        </div>
      </div>
      <div className="h-3 bg-slate-800"></div>
    </div>
  );
};

export default ProfileSection;
