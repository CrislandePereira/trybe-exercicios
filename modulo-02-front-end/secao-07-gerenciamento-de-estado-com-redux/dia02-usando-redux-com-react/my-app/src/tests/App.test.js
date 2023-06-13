import React from "react";
import { screen } from "@testing-library/react";

import App from "../App";
import renderWithRedux from "./helpers/renderWithRedux";

test("A página deve renderizar 2 botoes e o numero 0", () => {
  renderWithRedux(<App />);

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
  expect(screen.getByText("0")).toBeInTheDocument();
});