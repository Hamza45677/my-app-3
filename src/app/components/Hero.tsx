import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-[1920px] h-[729px] py-[140px] px-[220px] top-[92px] bg-[#043873] flex items-center">
        <div className="w-[656px] h-[361px]">
          <div className="w-[656px] h-[238px]">
            <h2 className="font-bold text-white text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Get More Done with whitepace
            </h2>
            <p className="font-normal text-white text-lg leading-30px tracking-[=0.02em]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <div className="w-[219px] h-[63px]"></div>
          <button className="px-5 py-5 bg-[#4F9CF9] text-white rounded-lg">
            Try Whitepace free
          </button>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>
    </>
  );
};

export default Hero;
