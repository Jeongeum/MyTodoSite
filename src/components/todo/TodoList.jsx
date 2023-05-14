import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoListUl } from "./styled";

export const TodoList = ({ todoData, setTodoData }) => {
  return (
    <TodoListUl>
      {todoData?.map((item) => (
        <TodoItem
          key={item.id}
          todoData={todoData}
          setTodoData={setTodoData}
          text={item.content}
          done={item.isDone}
          isEdit={item.isEdit}
          item={item}
        />
      ))}
    </TodoListUl>
  );
};
