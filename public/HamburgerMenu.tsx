import { NextPage } from "next";
import React from "react";

interface Props {
  color?: string;
}

const HamburgerMenu: NextPage<Props> = ({
  color = "rgba(255,255,255,0.5)",
}) => {
  return (
    <svg
      width="39"
      height="19"
      viewBox="0 0 39 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.63333"
        y1="1.5"
        x2="37.3667"
        y2="1.5"
        stroke={color}
        strokeOpacity="1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="12.7"
        y1="9.5"
        x2="37.3667"
        y2="9.5"
        stroke={color}
        strokeOpacity="1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="23.7667"
        y1="17.5"
        x2="37.3667"
        y2="17.5"
        stroke={color}
        strokeOpacity="1"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerMenu;
