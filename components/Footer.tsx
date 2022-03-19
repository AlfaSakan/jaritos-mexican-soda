import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Footer: NextPage = () => {
  return (
    <div className=" bg-white/[0.04] py-[10px] w-full backdrop-blur-xl">
      <div className="flex items-center justify-between w-28 mx-auto">
        <div className="p-3 bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer">
          <Image
            src={"/CartShop.svg"}
            alt="cart shop"
            width={21}
            height={18}
            color="#ffffff"
          />
        </div>
        <div className="p-3 bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer">
          <Image
            src="/Love.svg"
            alt="Love"
            width={23}
            height={20}
            color="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
