import { NextPage } from "next";
import React from "react";

interface Props {
  isSignIn?: boolean;
  onPressSignIn?: () => void;
  onPressSignUp?: () => void;
}

const bgFunGreen = "bg-fun-green";
const txtFunGreen = "text-fun-green";
const txtWhite = "text-white";

const FooterSignIn: NextPage<Props> = ({
  isSignIn,
  onPressSignIn,
  onPressSignUp,
}) => {
  return (
    <div className="flex flex-row justify-center items-center w-full mt-36">
      <button
        className={`${isSignIn && bgFunGreen} py-2 px-6 rounded-md`}
        onClick={onPressSignIn}
      >
        <p
          className={`font-adventPro font-bold ${
            isSignIn ? txtWhite : txtFunGreen
          } text-lg`}
        >
          Sign In
        </p>
      </button>
      <button
        className={`py-2 px-6 rounded-md ${!isSignIn && bgFunGreen}`}
        onClick={onPressSignUp}
      >
        <p
          className={`font-adventPro font-bold ${
            isSignIn ? txtFunGreen : txtWhite
          } text-lg`}
        >
          Sign Up
        </p>
      </button>
    </div>
  );
};

export default FooterSignIn;
