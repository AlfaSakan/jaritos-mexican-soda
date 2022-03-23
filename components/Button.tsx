import { NextPage } from "next";
import React from "react";

interface Props {
  btnColor: string;
  textColor: string;
  onPress?: () => void;
  opacity?: string;
  text?: string;
  loading?: boolean;
  isActive?: boolean;
  id?: string;
}

const Button: NextPage<Props> = ({
  btnColor,
  textColor,
  onPress,
  opacity = "bg-opacity-70",
  text = "Buy Now",
  loading = false,
  isActive = true,
  id,
}) => {
  if (loading) {
    return (
      <button
        data-testid={id}
        className={`bg-gray-400 py-[22px] px-14 rounded-xl mb-[30px]`}
        disabled={loading}
      >
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
      data-testid={id}
      onClick={onPress}
      className={`${btnColor} ${
        !isActive ? "bg-opacity-60" : opacity
      } py-[22px] px-14 rounded-xl mb-[30px] duration-500 ease-in-out`}
      disabled={!isActive}
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
