import React from "react";

const Facebook = ({color="#006B33"}) => {
  return (
    <div>
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 7.5H11.25V11.25H7.5V20H3.75V11.25H0V7.5H3.75V5.93125C3.75 4.445 4.2175 2.5675 5.1475 1.54125C6.0775 0.5125 7.23875 0 8.63 0H11.25V3.75H8.625C8.0025 3.75 7.5 4.2525 7.5 4.87375V7.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Facebook;
