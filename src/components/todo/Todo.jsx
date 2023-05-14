import React, { useEffect, useState } from "react";
import { TodoListWrapper } from "./styled";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";

export const Todo = () => {
  const [todoData, setTodoData] = useState(() => {
    const localData = localStorage.getItem("mytodolist");
    return localData ? JSON.parse(localData) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [hidden, setHidden] = useState(true);

  // hidden 함수
  const onClickHidden = () => {
    setHidden(!hidden);
  };

  // input 입력
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  // 등록 후, data 변화가 생길 때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(todoData));
  }, [todoData]);

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
