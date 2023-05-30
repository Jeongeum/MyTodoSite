import React, { useCallback, useEffect, useState } from "react";
import { TodoListWrapper } from "./styled";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";

export const Todo = () => {
  // useState 초기값이 함수일 경우
  const [todoData, setTodoData] = useState(() => {
    const localData = localStorage.getItem("mytodolist");
    return localData ? JSON.parse(localData) : [];
  });

  // // useState 초기값이 배열일 경우
  // const [todoData, setTodoData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [hidden, setHidden] = useState(true);

  // hidden 함수
  const onClickHidden = useCallback(() => {
    setHidden((prev) => !prev);
  }, []);

  // input 입력
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  // useState 초기값이 함수일 경우
  // 등록 후, data 변화가 생길 때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(todoData));
  }, [todoData]);

  // // useState 초기값이 배열일 경우
  // // 초기 렌더링 시, 로컬스토리지의 데이터를 가져와 todoData에 넣는다.
  // useEffect(() => {
  //   const localData = localStorage.getItem("mytodolist");

  //   if (localData) {
  //     setTodoData(JSON.parse(localData));
  //   }
  // }, []);

  // // todoData에 변화가 생길 때 마다 로컬스토리지에 저장
  // useEffect(() => {
  //   localStorage.setItem("mytodolist", JSON.stringify(todoData));
  // }, [todoData]);

  return (
    <TodoListWrapper>
      <TodoList todoData={todoData} setTodoData={setTodoData} />
      <CreateTodo
        setTodoData={setTodoData}
        hidden={hidden}
        onClickHidden={onClickHidden}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onChangeInput={onChangeInput}
      />
    </TodoListWrapper>
  );
};
