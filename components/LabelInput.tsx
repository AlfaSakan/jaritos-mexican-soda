import { NextPage } from "next";
import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface Props {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: HTMLInputTypeAttribute;
  marginTop?: string;
}

const LabelInput: NextPage<Props> = ({
  value,
  onChange,
  label,
  type,
  marginTop,
}) => {
  return (
    <div className={`flex flex-col ${marginTop}`}>
      <label
        className="font-adventPro font-bold text-base text-fun-green mb-[0.625rem] cursor-pointer"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={label}
        className="border-fun-green border-2 rounded-md h-12 pl-3 font-adventPro font-bold text-fun-green"
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default LabelInput;
