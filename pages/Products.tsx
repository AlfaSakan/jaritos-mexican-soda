import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import Headers from "@components/Header";
import Button from "@components/Button";
import DescriptionProduct from "@components/DescriptionProduct";
import Footer from "@components/Footer";
import SidebarCart from "@components/SidebarCart";

import jamaicaFresh from "@public/jamaicaNewFresh.png";
import mexicanGuava from "@public/mexicanGuavaParticle.png";
import tropical from "@public/tropical.png";
import waterMelon from "@public/watermelon.png";
import Instagram from "@public/Instagram";

import colors from "@helpers/colors";
import Facebook from "@public/facebook";
import Twitter from "@public/Twitter";
import FooterProducts from "@components/FooterProducts";
import FooterDetail from "@components/FooterDetail";

const drinks = [
  {
    name: "Jamaica New Fresh",
    description:
      "Flowers are nice, but a refreshingly sweet soda made with hibiscus flowers and 100% real sugar is nicer. It's like Valentine's Day, everyday.",
    img: jamaicaFresh,
    color: "bg-french-rasberry",
    headerPattern: "bg-headerJamaicaPattern",
    bodyPattern: "bg-jamaicaPattern",
    btnColor: "bg-brite-gold",
    textColor: "text-french-rasberry",
    smTextColor: "sm:text-french-rasberry",
  },
  {
    name: "Mexican Guava Particle",
    description:
      "You'd never expect sweet and sour to work together as perfectly as they do in the refreshing Jarritos Guava soda.",
    img: mexicanGuava,
    color: "bg-plastic-lips",
    headerPattern: "bg-headerMexicanPattern",
    bodyPattern: "bg-mexicanPattern",
    btnColor: "bg-algerian-coral",
    textColor: "text-plastic-lips",
    smTextColor: "sm:text-plastic-lips",
  },
  {
    name: "Tropical Pineapple",
    description:
      "Enjoy the exceptional summery flavor and juiciness of pineapple. Made with 100% real sugar and a whole lot of tropical awesomeness.",
    img: tropical,
    color: "bg-grass-daisy",
    headerPattern: "bg-headerTropicalPattern",
    bodyPattern: "bg-tropicalPattern",
    btnColor: "bg-emerald-green",
    textColor: "text-grass-daisy",
    smTextColor: "sm:text-grass-daisy",
  },
  {
    name: "Watermelon Coolness",
    description:
      "The iconic fruit flavor of summer, now in a bottle, will keep you refreshed, cool and smiling any time of the year.",
    img: waterMelon,
    color: "bg-chaotic-red",
    headerPattern: "bg-headerWaterMelonPattern",
    bodyPattern: "bg-watermelonPattern",
    btnColor: "bg-lime-new",
    textColor: "text-chaotic-red",
    smTextColor: "sm:text-chaotic-red",
  },
];

const Products: NextPage = () => {
  const [number, setNumber] = useState(1);
  const [itemIndex, setItemIndex] = useState(0);

  const numberHandler = (calc: "increment" | "decrement") => () => {
    if (calc === "decrement" && number === 0) return;

    if (calc === "decrement") {
      setNumber((prev) => prev - 1);
      return;
    }
    setNumber((prev) => prev + 1);
  };

  const itemIndexHandler = (value: "increment" | "decrement") => () => {
    if (value === "decrement" && itemIndex !== 0) {
      setItemIndex((prev) => prev - 1);
      return;
    }

    if (value === "increment" && itemIndex < drinks.length - 1) {
      setItemIndex((prev) => prev + 1);
      return;
    }

    if (value === "increment" && itemIndex === drinks.length - 1) {
      setItemIndex(0);
      return;
    }

    if (value === "decrement" && itemIndex === 0) {
      setItemIndex(drinks.length - 1);
      return;
    }
  };

  const onPressBuy = () => () => {
    setNumber(1);
  };

  console.log(drinks[itemIndex].textColor);

  return (
    <main>
      <div className={`${drinks[itemIndex].bodyPattern} relative`}>
        <Headers
          btnTextColor={colors.txtWhite}
          pattern={drinks[itemIndex].headerPattern}
          btnColor={`bg-white/[0.04] py-[10px] w-full backdrop-blur-xl`}
        />
        <div className="px-16 pt-20 pb-[120px]">
          <div className="flex flex-row items-center">
            <p className="font-adventPro text-3xl text-white tracking-widest">
              Jarritos
            </p>
            <div className="border-2 w-28 h-0 rounded-full ml-5" />
          </div>
          <DescriptionProduct
            title={drinks[itemIndex].name}
            desc={drinks[itemIndex].description}
          />
        </div>
        <div
          className={`flex flex-col relative items-center justify-center ${drinks[itemIndex].color} pt-[22px] rounded-t-2xl`}
        >
          <div className="absolute -top-[5.7rem] right-auto left-auto mr-[3.8rem]">
            <Image
              src={drinks[itemIndex].img}
              alt="Jamaica New Fresh"
              height={200}
              width={150}
              className="object-contain"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-80 mb-[102px]">
            <div onClick={itemIndexHandler("decrement")}>
              <Image
                src={"/LeftArrow.svg"}
                alt="left arrow"
                width={20}
                height={17}
                className="cursor-pointer"
              />
            </div>
            <div onClick={itemIndexHandler("increment")}>
              <Image
                src={"/RightArrow.svg"}
                alt="left arrow"
                width={20}
                height={17}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-[200px] items-center mb-[30px]">
            <div onClick={numberHandler("decrement")}>
              <Image
                src={"/Minus.svg"}
                alt="Minus"
                width={15}
                height={15}
                className="cursor-pointer"
              />
            </div>
            <p className="font-adventPro font-bold text-3xl text-white">
              {number}
            </p>
            <div onClick={numberHandler("increment")}>
              <Image
                src={"/Plus.svg"}
                alt="Minus"
                width={16}
                height={15}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button
            btnColor={drinks[itemIndex].btnColor}
            textColor={drinks[itemIndex].textColor}
            onPress={onPressBuy()}
          />
          <Footer />
        </div>
        <FooterDetail
          bgColor={drinks[itemIndex].color}
          btnColor={drinks[itemIndex].btnColor}
          smTextColor={drinks[itemIndex].smTextColor}
        />
        <SidebarCart />
        <FooterProducts index={itemIndex} />
      </div>
    </main>
  );
};

export default Products;
