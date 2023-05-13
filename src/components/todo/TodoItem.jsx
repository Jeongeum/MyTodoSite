import React, { useState } from "react";
import { TodoItemLi } from "./styled";

export const TodoItem = ({
  todoData,
  setTodoData,
  text,
  done,
  isEdit,
  item,
}) => {
  const { id } = item;
  const [newText, setNewText] = useState(text);

  // 수정
  const onClickEdit = (id) => {
    setTodoData(
      todoData.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  // 수정 내용 반영하기
  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  // 수정 후 엔터로 데이터에 반영
  const onEnterEditData = (e, id) => {
    if (e.key === "Enter") {
      setTodoData(
        todoData.map((item) => {
          if (item.id === id) {
            return { ...item, content: newText, isEdit: false };
          }
          return todoData;
        })
      );
    }
  };

  // 체크박스 체크
  const checkToggle = (id) => {
    setTodoData(
      todoData.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !done };
        }
        return todo;
      })
    );
  };

  // 삭제
  const onClickDelete = (id) => {
    setTodoData(todoData.filter((todo) => todo.id !== id));
  };
  return (
    <TodoItemLi key={id}>
      <div>
        <input type="checkbox" />
        {isEdit ? (
          <input
            type="text"
            onKeyDown={(e) => onEnterEditData(e, id)}
            onChange={(e) => onChangeEditInput(e)}
            value={newText}
          ></input>
        ) : (
          <span>{text}</span>
        )}
      </div>
      {isEdit ? null : <button onClick={() => onClickEdit(id)}>수정</button>}
      <button onClick={() => onClickDelete(id)}>삭제</button>
    </TodoItemLi>
  );
};
