import { NextPage } from "next";
import React from "react";
import Button from "./Button";
import ButtonSignIn from "./ButtonSignIn";
import colors from "@helpers/colors";
import Instagram from "@public/Instagram";
import Twitter from "@public/Twitter";
import Facebook from "@public/facebook";

interface Props {
  isSignIn?: boolean;
  onPressSignIn?: () => void;
  onPressSignUp?: () => void;
}

const FooterSignIn: NextPage<Props> = ({
  isSignIn,
  onPressSignIn,
  onPressSignUp,
}) => {
  return (
    <div className="flex justify-center items-center w-full mt-36 sm:justify-end">
      <div className="flex sm:hidden">
        <ButtonSignIn
          text="Sign In"
          btnColor={isSignIn ? colors.bgFunGreen : undefined}
          txtColor={isSignIn ? colors.txtWhite : colors.txtFunGreen}
          onClick={onPressSignIn}
        />
        <ButtonSignIn
          text="Sign Up"
          btnColor={!isSignIn ? colors.bgFunGreen : undefined}
          txtColor={!isSignIn ? colors.txtWhite : colors.txtFunGreen}
          onClick={onPressSignUp}
        />
      </div>
      <div className="hidden mr-10 justify-between w-24 sm:flex">
        <Instagram />
        <Twitter />
        <Facebook />
      </div>
    </div>
  );
};

export default FooterSignIn;
