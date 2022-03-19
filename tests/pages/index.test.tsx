/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import App from "@pages/index";

beforeAll(() => {
  render(<App />);
});

describe("App", () => {
  it("renders without crashing", () => {
    expect(
      screen.getByRole("heading", { name: "Batteries Included Next.js" })
    ).toBeInTheDocument();
  });
});
