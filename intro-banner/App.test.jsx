import { render, screen } from "@testing-library/react";
import App from "./App";

// eslint-disable-next-line no-undef
test("renders banner with initial text", () => {
  render(<App />);
  const bannerText = screen.getByText(/I love frontend development!/i);
  // eslint-disable-next-line no-undef
  expect(bannerText).toBeInTheDocument();
});
