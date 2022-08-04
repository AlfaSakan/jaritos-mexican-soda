import HamburgerMenu from "@public/HamburgerMenu";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ButtonSignIn from "./ButtonSignIn";

interface Props {
  pattern: string;
  textColor?: string;
  burgerColor?: string;
  onPressRight?: () => void;
  onPressLeft?: () => void;
  btnColor?: string;
  btnColor2?: string;
  btnTextColor: string;
  btnTextColor2?: string;
  onClickSignIn?: () => void;
  onClickSignUp?: () => void;
}

const Header: NextPage<Props> = ({
  pattern,
  textColor = "text-white",
  burgerColor,
  onPressLeft,
  onPressRight,
  btnTextColor,
  btnTextColor2,
  btnColor,
  btnColor2,
  onClickSignIn,
  onClickSignUp,
}) => {
  return (
    <div
      className={`py-4 px-6 border-b-[1px] border-black/[0.03] flex flex-row items-center justify-between ${pattern} z-10 relative sm:px-20`}
    >
      <div onClick={onPressLeft}>
        <h1 className={`font-adventPro text-3xl ${textColor} cursor-pointer`}>
          <Link href={"/"}>
            <a>Jarritos</a>
          </Link>
        </h1>
      </div>
      <div className="sm:flex justify-between items-center w-56 hidden">
        <ButtonSignIn
          text="Sign In"
          btnColor={btnColor}
          txtColor={btnTextColor}
          onClick={onClickSignIn}
        />
        <ButtonSignIn
          text="Sign Up"
          btnColor={btnColor2 ?? btnColor}
          txtColor={btnTextColor2 ?? btnTextColor}
          onClick={onClickSignUp}
        />
      </div>
      <div className="cursor-pointer" onClick={onPressRight}>
        <HamburgerMenu color={burgerColor} />
      </div>
    </div>
  );
};

export default Header;
