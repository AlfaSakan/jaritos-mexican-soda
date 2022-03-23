import Image from "next/image";
import React from "react";

const SidebarCart = () => {
  return (
    <div className=" hidden absolute right-0 bg-white/[0.04] px-5 top-0 h-full sm:flex z-0">
      <div className="flex flex-col h-28 my-auto justify-between">
        <div className="p-2 bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer">
          <Image
            src={"/CartShop.svg"}
            alt="cart shop"
            width={21}
            height={18}
            color="#ffffff"
          />
        </div>
        <div className="p-2 bg-gradient-to-tl from-transparent to-white/20 rounded-md cursor-pointer">
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

export default SidebarCart;
