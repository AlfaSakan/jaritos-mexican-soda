import HamburgerMenu from "@public/HamburgerMenu";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  pattern: string;
  textColor?: string;
  burgerColor?: string;
  onPressRight?: () => void;
  onPressLeft?: () => void;
}

const Header: NextPage<Props> = ({
  pattern,
  textColor = "text-white",
  burgerColor,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <div
      className={`py-4 px-6 border-b-[1px] border-black/[0.03] flex flex-row items-center justify-between ${pattern}`}
    >
      <div onClick={onPressLeft}>
        <h1 className={`font-adventPro text-3xl ${textColor} cursor-pointer`}>
          Jarritos
        </h1>
      </div>
      <div className="cursor-pointer" onClick={onPressRight}>
        <HamburgerMenu color={burgerColor} />
      </div>
    </div>
  );
};

export default Header;
