import { NextPage } from "next";
import React, { ChangeEvent } from "react";
import LabelInput from "./LabelInput";

interface Props {
  email: string;
  emailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  confirmPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPassword: string;
}

const FormSignUp: NextPage<Props> = ({
  email,
  emailHandler,
  password,
  passwordHandler,
  confirmPassword,
  confirmPasswordHandler,
}) => {
  return (
    <div className="flex flex-col mb-[3.75rem]">
      <LabelInput
        label="E-mail"
        value={email}
        onChange={emailHandler}
        type="email"
      />
      <LabelInput
        label="Password"
        value={password}
        onChange={passwordHandler}
        type="password"
        marginTop="mt-[1.875rem]"
      />
      <LabelInput
        label="Confirm Password"
        value={confirmPassword}
        onChange={confirmPasswordHandler}
        type="password"
        marginTop="mt-[1.875rem]"
      />
    </div>
  );
};

export default FormSignUp;
