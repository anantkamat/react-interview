import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("demo", () => {
  expect(true).toBe(false);
});

test("Renders the main page", () => {
  render(<App />);
  expect(false).toBeTruthy();
});
