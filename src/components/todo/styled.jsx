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
