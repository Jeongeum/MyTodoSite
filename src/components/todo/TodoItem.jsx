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
  const onClickEdit = () => {
    setTodoData(
      todoData.map((item) =>
        item.id === id ? { ...todoData, isEdit: !item.isEdit } : item
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
            return { ...item, text: newText, isEdit: false };
          }
        })
      );
    }
  };
  // 삭제
  const onClickDelete = () => {
    console.log("삭제");
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
      <button onClick={() => onClickEdit(id)}>수정</button>
      <button onClick={() => onClickDelete(id)}>삭제</button>
    </TodoItemLi>
  );
};
