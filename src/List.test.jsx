import React from "react";

import { render } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("renders task", () => {
    const tasks = [
      { id: 1, todo: "아무 일도 하기 싫다." },
      { id: 2, todo: "건물 매입" },
    ];

    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다.");
    expect(container).toHaveTextContent("건물 매입");
  });
});
