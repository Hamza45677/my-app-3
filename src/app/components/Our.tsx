import Image from "next/image";
import React from "react";
import Apple from "@/app/assets/Apple.jpg";
import Micro from "@/app/assets/MicroSoft.jpg";
import Slack from "@/app/assets/Slack.jpg";
import Google from "@/app/assets/Google.jpg";

const Our = () => {
  return (
    <>
      <div className="w-[1922px] h-[538px] top-[4654px] py-[140px] font-inter px-[220px] gap-[100px] flex flex-col ">
        <div className="w-[1482px] h-[87px] ">
          <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center text-[#212529]">
            Our sponsors
          </h1>
        </div>

        <div className="w-[1482px] h-[71px] justify-between flex items-center">
          <div className="w-[110px] h-[65px] pt-2 gap-1">
            <Image src={Apple} alt="" />
          </div>
          <div className="w-[287px] h-[62px]">
            <Image src={Micro} alt="" />
          </div>
          <div className="w-[280px] h-[71px]">
            <Image src={Slack} alt="" />
          </div>
          <div className="w-[220px] h-[69.81px] pt-11 gap-4px">
            <Image src={Google} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Our;
