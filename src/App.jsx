import React, { useEffect } from "react";
import ListContainer from "./ListContainer";
import tasks from "../fixtures/tasks";
import { setTasks } from "./actions";
import { useDispatch } from "react-redux";

export default function App() {
  // 초기상태 로딩 후에 구독 중인 컴포넌트가 렌더링을 하게 하자
  // 코드를 사용하는 쪽에서 스펙을 먼저 확정한다음에 구현하는 것도 좋다.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
    </div>
  );
}
