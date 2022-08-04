import { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { regexEmail, regexPassword } from "@helpers/regex";
import colors from "@helpers/colors";
import { useRouter } from "next/router";

import Button from "@components/Button";
import FooterSignIn from "@components/FooterSignIn";
import FormSignIn from "@components/FormSignIn";
import FormSignUp from "@components/FormSignUp";
import Header from "@components/Header";

const SignIn: NextPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [textTitle, setTextTitle] = useState("Sign In");

  const router = useRouter();
  const { fromSignIn } = router.query;

  useEffect(() => {
    if (fromSignIn === "true" || fromSignIn === undefined) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, [fromSignIn]);

  useEffect(() => {
    if (!regexEmail.test(email) || !regexPassword.test(password)) {
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
    if (
      !isSignIn &&
      (!regexPassword.test(confirmPassword) || password !== confirmPassword)
    ) {
      setIsBtnActive(false);
    }
  }, [email, password, confirmPassword, isSignIn]);

  useEffect(() => {
    if (isSignIn) {
      setTextTitle("Sign In");
    } else {
      setTextTitle("Sign Up");
    }
  }, [isSignIn]);

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const confirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const footerButtonHandler = (value: "in" | "up") => () => {
    if (value === "in") {
      setIsSignIn(true);
      return;
    }

    setIsSignIn(false);
  };

  const submitHandler = () => {
    setLoading(true);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoading(false);
  };

  return (
    <>
      <main>
        <div className="bg-carra-marble pb-6">
          <Header
            pattern="bg-carra-marble"
            textColor="text-fun-green"
            burgerColor="#006B33"
            btnColor={isSignIn ? colors.bgFunGreen : undefined}
            btnTextColor={isSignIn ? colors.txtWhite : colors.txtFunGreen}
            btnColor2={!isSignIn ? colors.bgFunGreen : "bg-transparent"}
            btnTextColor2={!isSignIn ? colors.txtWhite : colors.txtFunGreen}
            onClickSignIn={footerButtonHandler("in")}
            onClickSignUp={footerButtonHandler("up")}
          />
          <div className="flex flex-col mx-auto px-8 sm:max-w-md">
            <h1
              className={`font-adventPro font-bold text-fun-green text-4xl mx-auto ${
                isSignIn ? "mt-28" : "mt-14"
              } mb-[5.625rem]`}
            >
              {textTitle}
            </h1>
            {isSignIn ? (
              <FormSignIn
                email={email}
                emailHandler={emailHandler}
                password={password}
                passwordHandler={passwordHandler}
              />
            ) : (
              <FormSignUp
                email={email}
                emailHandler={emailHandler}
                password={password}
                passwordHandler={passwordHandler}
                confirmPassword={confirmPassword}
                confirmPasswordHandler={confirmPasswordHandler}
              />
            )}
            <Button
              textColor="text-white"
              btnColor="bg-fun-green"
              text={textTitle}
              opacity="bg-opacity-100"
              onPress={submitHandler}
              loading={loading}
              isActive={isBtnActive}
              id="Submit Sign In"
            />
          </div>
          <FooterSignIn
            isSignIn={isSignIn}
            onPressSignIn={footerButtonHandler("in")}
            onPressSignUp={footerButtonHandler("up")}
          />
        </div>
      </main>
    </>
  );
};

export default SignIn;
