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
  justify-content: space-between;

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

export const CreateTodoDiv = styled.div`
  position: relative;
  width: 560px;
  height: 30px;
  margin-top: 25px;

  input {
    width: 460px;
  }

  button {
    position: absolute;
    right: 30px;
    bottom: 5px;
  }
`;
