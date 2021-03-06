import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import App from "./App";
import tasks from "../fixtures/tasks";
import { useDispatch } from "react-redux";

jest.mock("react-redux");

describe("App", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it("renders task", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다.");
    expect(container).toHaveTextContent("건물 매입");
  });
});
