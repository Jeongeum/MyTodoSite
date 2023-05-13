import { css, styled } from "styled-components";

export const TodoListWrapper = styled.div`
  width: 560px;
  height: 430px;

  padding: 15px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
    `;
  }}
`;

export const TodoListUl = styled.ul`
  height: 350px;
  overflow-y: scroll;
`;

export const TodoItemLi = styled.li`
  display: flex;
  align-items: center;

  width: 530px;
  padding: 15px 15px 15px 8px;
  margin-bottom: 15px;

  border: none;
  border-radius: 10px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorWhite};
    `;
  }}
`;

export const Input = styled.input`
  width: 460px;
`;

export const CreateTodoDiv = styled.div`
  position: relative;
  width: 560px;

  padding: 15px;
  input {
    width: 460px;
  }

  button {
    position: absolute;
    right: 25px;
  }
`;
