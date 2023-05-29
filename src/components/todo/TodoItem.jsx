import React, { useState } from "react";
import { Text, TodoItemBtn, TodoItemCheckBtn, TodoItemLi } from "./styled";
import Img from "../common/Img/Img";
import EditIcon from "../../assets/images/pencil.png";
import DeleteIcon from "../../assets/images/delete.png";
import EditColorIcon from "../../assets/images/pencilColor.png";
import DeleteColorIcon from "../../assets/images/deleteColor.png";
import CheckIcon from "../../assets/images/check.png";

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
  const [editHover, setEditHover] = useState(false);
  const [deleteHover, setDeleteHover] = useState(false);

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
          return item;
        })
      );
    }
  };

  // 체크박스 체크
  const onClickToggle = (id) => {
    setTodoData(
      todoData.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
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
        <TodoItemCheckBtn onClick={() => onClickToggle(id)}>
          {done ? <Img src={CheckIcon} width="10px" /> : null}
        </TodoItemCheckBtn>
        {isEdit ? (
          <input
            type="text"
            onKeyDown={(e) => onEnterEditData(e, id)}
            onChange={(e) => onChangeEditInput(e)}
            value={newText}
          ></input>
        ) : (
          <Text done={done ? "true" : "false"}>{text}</Text>
        )}
      </div>
      <TodoItemBtn>
        {isEdit ? null : (
          <button
            onClick={() => onClickEdit(id)}
            onMouseOver={() => setEditHover(true)}
            onMouseOut={() => setEditHover(false)}
          >
            <Img
              id="editicon"
              src={editHover ? EditColorIcon : EditIcon}
              width="20px"
            ></Img>
          </button>
        )}
        <button
          onClick={() => onClickDelete(id)}
          onMouseOver={() => setDeleteHover(true)}
          onMouseOut={() => setDeleteHover(false)}
        >
          <Img
            id="deleteicon"
            src={deleteHover ? DeleteColorIcon : DeleteIcon}
            width="20px"
          ></Img>
        </button>
      </TodoItemBtn>
    </TodoItemLi>
  );
};