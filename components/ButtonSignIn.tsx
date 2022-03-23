import { NextPage } from "next";
import React from "react";

interface Props {
  btnColor?: string;
  onClick?: () => void;
  txtColor: string;
  text: string;
}

const ButtonSignIn: NextPage<Props> = ({
  btnColor,
  onClick,
  txtColor,
  text,
}) => {
  return (
    <div>
      <button
        className={`${btnColor} py-2 px-6 rounded-md`}
        onClick={onClick}
        data-testid="SignIn"
      >
        <p className={`font-adventPro font-bold ${txtColor} text-lg`}>{text}</p>
      </button>
    </div>
  );
};

export default ButtonSignIn;
