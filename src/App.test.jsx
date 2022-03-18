import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders task", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다.");
    expect(container).toHaveTextContent("건물 매입");
  });
});
