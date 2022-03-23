import React from "react";
import Image from "next/image";

import jamaicaNoShadow from "@public/jamaicaNoShadow.png";
import mexicanNoShadow from "@public/mexicanNoShadow.png";
import tropicalNoShadow from "@public/tropicalNoShadow.png";
import watermelonNoShadow from "@public/watermelonNoShadow.png";
import { NextPage } from "next";

interface Props {
  index: number;
}

const FooterProducts: NextPage<Props> = ({ index }) => {
  return (
    <div className="w-full z-20 absolute bottom-0 hidden items-center xl:flex">
      <div className="flex mb-8 mx-auto">
        <div
          className={`mr-28 ${index === 0 && "scale-125"} duration-300 ease-in`}
        >
          <Image
            src={jamaicaNoShadow}
            alt="Jamaica New Fresh"
            width={26.63}
            height={100}
          />
        </div>
        <div
          className={`mr-28 ${index === 1 && "scale-125"} duration-300 ease-in`}
        >
          <Image
            src={mexicanNoShadow}
            alt="Jamaica New Fresh"
            width={26.63}
            height={100}
            className="mr-28"
          />
        </div>
        <div
          className={`mr-28 ${index === 2 && "scale-125"} duration-300 ease-in`}
        >
          <Image
            src={tropicalNoShadow}
            alt="Jamaica New Fresh"
            width={26.63}
            height={100}
            className="mr-28"
          />
        </div>
        <div className={`${index === 3 && "scale-125"} duration-300 ease-in`}>
          <Image
            src={watermelonNoShadow}
            alt="Jamaica New Fresh"
            width={26.63}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterProducts;
