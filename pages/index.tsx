import Button from "@components/Button";
import FooterSignIn from "@components/FooterSignIn";
import FormSignIn from "@components/FormSignIn";
import FormSignUp from "@components/FormSignUp";
import Header from "@components/Header";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const Home: NextPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
          />
          <div className="flex flex-col px-8">
            <h1
              className={`font-adventPro font-bold text-fun-green text-4xl mx-auto ${
                isSignIn ? "mt-28" : "mt-14"
              } mb-[5.625rem]`}
            >
              Sign In
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
              text="Sign in"
              opacity="bg-opacity-100"
              onPress={submitHandler}
              loading={loading}
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

export default Home;
