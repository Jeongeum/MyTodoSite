import React, { useState } from "react";
import Input from "../common/Input/Input";
import { CreateTodoDiv } from "./styled";
import CreateButton from "../common/Button/CreateButton";
import DeleteButton from "../common/Button/DeleteButton";

export const CreateTodo = ({
  hidden,
  setTodoData,
  inputValue,
  setInputValue,
  onClickHidden,
  onChangeInput,
}) => {
  // 등록 버튼 클릭
  const onClickAddTodo = (e) => {
    if (inputValue && e.key === "Enter") {
      setTodoData((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: inputValue,
          isEdit: false,
          isDone: false,
        },
      ]);
      setInputValue("");
    }
  };
  return (
    <CreateTodoDiv>
      {hidden === false ? (
        <>
          <Input
            placeholder="할일 등록"
            value={inputValue}
            onChange={onChangeInput}
            onKeyDown={(e) => onClickAddTodo(e)}
          />
          <DeleteButton onClick={onClickHidden}>+</DeleteButton>
        </>
      ) : (
        <CreateButton type="submit" onClick={onClickHidden}>
          +
        </CreateButton>
      )}
    </CreateTodoDiv>
  );
};
