import React from "react";
import Input from "../common/Input/Input";

export const CreateTodo = ({ inputValue, onChangeInput, onClickAddTodo }) => {
  return (
    <>
      <Input
        placeholder="할일 등록"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button type="submit" onClick={onClickAddTodo}>
        +
      </button>
    </>
  );
};
