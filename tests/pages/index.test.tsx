/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@pages/index";

describe("App", () => {
  const email = "alfasakan11@gmail.com";
  const password = "alfa6330";

  beforeEach(() => {
    render(<App />);
  });

  test("testing sign in", () => {
    const btnSubmitSignIn = screen.getByTestId(/Submit Sign In/i);
    const textboxEmail = screen.getByRole("textbox", { name: "E-mail" });
    const textboxPassword = screen.getByPlaceholderText(/password/i);

    expect(btnSubmitSignIn).toBeDisabled();
    userEvent.type(textboxEmail, email);
    expect(btnSubmitSignIn).toBeDisabled();
    userEvent.type(textboxPassword, password);

    expect(btnSubmitSignIn).toBeEnabled();

    userEvent.click(btnSubmitSignIn);

    expect(textboxEmail).toHaveValue("");
    expect(textboxPassword).toHaveValue("");
  });

  test("testing signup", () => {
    const btnSubmitSignIn = screen.getByTestId(/Submit Sign In/i);
    const btnSingUp = screen.getByTestId("SignUp");
    userEvent.click(btnSingUp);

    const tbEmail = screen.getByRole("textbox", { name: "E-mail" });
    const tbPassword = screen.getByPlaceholderText("Password");
    const tbConfirmPassword = screen.getByPlaceholderText("Confirm Password");

    expect(btnSubmitSignIn).toBeDisabled();
    userEvent.type(tbEmail, email);
    expect(btnSubmitSignIn).toBeDisabled();
    userEvent.type(tbPassword, password);
    expect(btnSubmitSignIn).toBeDisabled();
    userEvent.type(tbConfirmPassword, password);
    expect(btnSubmitSignIn).toBeEnabled();

    userEvent.click(btnSubmitSignIn);

    expect(tbEmail).toHaveValue("");
    expect(tbPassword).toHaveValue("");
    expect(tbConfirmPassword).toHaveValue("");
  });
});
