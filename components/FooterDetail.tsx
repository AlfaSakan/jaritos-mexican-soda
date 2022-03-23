import Facebook from "@public/facebook";
import Instagram from "@public/Instagram";
import Twitter from "@public/Twitter";
import { NextPage } from "next";
import React from "react";

interface Props {
  bgColor?: string;
  btnColor?: string;
  smTextColor?: string;
}

const FooterDetail: NextPage<Props> = ({ bgColor, btnColor, smTextColor }) => {
  return (
    <div
      className={`hidden items-end justify-between w-full pl-20 z-10 relative ${bgColor} lg:flex`}
    >
      <div className="flex pb-9">
        <div className="bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer h-[2.438rem] w-[2.438rem] items-center justify-center flex mr-[1.625rem]">
          <Facebook color="white" />
        </div>
        <div className="p-3 bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer h-[2.438rem] w-[2.438rem] items-center justify-center flex mr-[1.625rem]">
          <Twitter color="white" />
        </div>
        <div className="p-3 bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer h-[2.438rem] w-[2.438rem] items-center justify-center flex">
          <Instagram color="white" />
        </div>
      </div>
      <div
        className={`${btnColor} bg-opacity-70 px-28 py-11 rounded-tl-2xl rounded-br-2xl duration-300`}
      >
        <p
          className={`font-adventPro font-bold text-white tracking-wider text-2xl mb-12 cursor-pointer ${smTextColor} sm:mb-0 sm:text-3xl`}
        >
          Details
        </p>
      </div>
    </div>
  );
};

export default FooterDetail;
