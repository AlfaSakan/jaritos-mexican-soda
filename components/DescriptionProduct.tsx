import { NextPage } from "next";
import React from "react";

interface Props {
  title: string;
  desc: string;
}

const DescriptionProduct: NextPage<Props> = ({ title, desc }) => {
  return (
    <div className="lg:w-[27.125rem] h-60">
      <h1 className="font-adventPro text-3xl font-bold text-white tracking-widest mt-3 lg:text-5xl">
        {title}
      </h1>
      <div className="md:w-[24rem]">
        <p className="text-white font-adventPro text-base mt-6 min-w-72 tracking-wider h-24">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default DescriptionProduct;
