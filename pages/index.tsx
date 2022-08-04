import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import Headers from "@components/Header";
import Button from "@components/Button";
import DescriptionProduct from "@components/DescriptionProduct";
import Footer from "@components/Footer";
import SidebarCart from "@components/SidebarCart";
import FooterProducts from "@components/FooterProducts";
import FooterDetail from "@components/FooterDetail";

import jamaicaFresh from "@public/jamaicaNewFresh.png";
import mexicanGuava from "@public/mexicanGuavaParticle.png";
import tropical from "@public/tropical.png";
import waterMelon from "@public/watermelon.png";
import JamaicaLarge from "@public/JamaicaLarge.png";
import WatermelonLarge from "@public/WatermelonLarge.png";
import TropicalLarge from "@public/TropicalLarge.png";
import MexicanLarge from "@public/MexicanLarge.png";

import colors from "@helpers/colors";
import { useRouter } from "next/router";

const drinks = [
  {
    name: "Jamaica New Fresh",
    description:
      "Flowers are nice, but a refreshingly sweet soda made with hibiscus flowers and 100% real sugar is nicer. It's like Valentine's Day, everyday.",
    img: jamaicaFresh,
    imgLarge: JamaicaLarge,
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
    imgLarge: MexicanLarge,
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
    imgLarge: TropicalLarge,
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
    imgLarge: WatermelonLarge,
    color: "bg-chaotic-red",
    headerPattern: "bg-headerWaterMelonPattern",
    bodyPattern: "bg-watermelonPattern",
    btnColor: "bg-lime-new",
    textColor: "text-chaotic-red",
    smTextColor: "sm:text-chaotic-red",
  },
];

const Home: NextPage = () => {
  const [number, setNumber] = useState(1);
  const [itemIndex, setItemIndex] = useState(0);

  const router = useRouter();

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

  const navigateSignIn = () => {
    router.push({
      pathname: "/SignIn",
      query: {
        fromSignIn: true,
      },
    });
  };

  const navigateSignUp = () => {
    router.push({
      pathname: "/SignIn",
      query: {
        fromSignIn: false,
      },
    });
  };

  return (
    <main>
      <div className={`${drinks[itemIndex].bodyPattern} relative min-h-screen`}>
        <Headers
          btnTextColor={colors.txtWhite}
          pattern={drinks[itemIndex].headerPattern}
          btnColor={`bg-white/[0.04] py-[0.625rem] w-full backdrop-blur-xl`}
          onClickSignIn={navigateSignIn}
          onClickSignUp={navigateSignUp}
        />
        <div className="hidden items-center px-20 justify-between translate-y-[11.313rem] relative z-10 lg:flex">
          <div onClick={itemIndexHandler("decrement")}>
            <Image
              src={"/LeftArrow.svg"}
              alt="left arrow"
              width={20}
              height={17}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={drinks[itemIndex].imgLarge}
                alt={drinks[itemIndex].name}
                width={455.57}
                height={520}
              />
            </div>
            <div className="flex flex-col items-start pl-8 pb-12">
              <div className="px-16 pt-20 pb-[7.5rem] lg:px-0 lg:pb-0">
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
              <div className="flex flex-row justify-between w-[12.5rem] items-center mb-[1.875rem]">
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
                    alt="Plus"
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
            </div>
          </div>
          <div className="mr-9" onClick={itemIndexHandler("increment")}>
            <Image
              src={"/RightArrow.svg"}
              alt="left arrow"
              width={20}
              height={17}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="px-16 pt-20 pb-[7.5rem] lg:px-0 lg:pb-0 lg:hidden">
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
          className={`flex flex-col relative items-center justify-center ${drinks[itemIndex].color} pt-[1.375rem] rounded-t-2xl min-h-[24.625rem]`}
        >
          <div className="absolute -top-[5.7rem] right-auto left-auto mr-[3.8rem] lg:hidden">
            <Image
              src={drinks[itemIndex].img}
              alt={drinks[itemIndex].name}
              height={200}
              width={150}
              className="object-contain"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-80 mb-[6.375rem] lg:hidden">
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
                alt="right arrow"
                width={20}
                height={17}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-[12.5rem] items-center mb-[1.875rem] lg:hidden">
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
                alt="Plus"
                width={16}
                height={15}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="lg:hidden">
            <Button
              btnColor={drinks[itemIndex].btnColor}
              textColor={drinks[itemIndex].textColor}
              onPress={onPressBuy()}
            />
          </div>
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

export default Home;
