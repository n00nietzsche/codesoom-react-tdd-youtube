import React from "react";
import List from "./List";

export default function App() {
  const tasks = [
    { id: 1, todo: "아무 일도 하기 싫다." },
    { id: 2, todo: "건물 매입" },
  ];

  return (
    <div>
      <h1>To-do</h1>
      <List tasks={tasks} />
    </div>
  );
}