import { NextPage } from "next";
import React from "react";

interface Props {
  title: string;
  desc: string;
}

const DescriptionProduct: NextPage<Props> = ({ title, desc }) => {
  return (
    <div>
      <h1 className="font-adventPro text-3xl font-bold text-white tracking-widest mt-3">
        {title}
      </h1>
      <p className="text-white font-adventPro text-base mt-6 w-72 tracking-wider h-24">
        {desc}
      </p>
    </div>
  );
};

export default DescriptionProduct;
