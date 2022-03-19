import { NextPage } from "next";
import React from "react";

interface Props {
  btnColor: string;
  textColor: string;
  onPress?: () => void;
  opacity?: string;
  text?: string;
  loading?: boolean;
}

const Button: NextPage<Props> = ({
  btnColor,
  textColor,
  onPress,
  opacity = "bg-opacity-70",
  text = "Buy Now",
  loading = false,
}) => {
  if (loading) {
    return (
      <button className={`bg-gray-400 py-[22px] px-14 rounded-xl mb-[30px]`}>
        <p
          className={`font-adventPro font-semibold ${textColor} text-2xl tracking-widest`}
        >
          Loading...
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={onPress}
      className={`${btnColor} ${opacity} py-[22px] px-14 rounded-xl mb-[30px]`}
    >
      <p
        className={`font-adventPro font-semibold ${textColor} text-2xl tracking-widest`}
      >
        {text}
      </p>
    </button>
  );
};

export default Button;
