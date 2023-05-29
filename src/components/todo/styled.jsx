import { css, styled } from "styled-components";

export const TodoListWrapper = styled.div`
  width: 560px;
  height: 430px;
  border-radius: 10px;
  padding: 15px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
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

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorWhite};
    `;
  }}
`;

export const TodoItemCheckBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid #ababab;
  border-radius: 50%;
`;

export const Text = styled.span`
  color: ${(props) => (props.done === "true" ? "#c4c4c4" : "#000000")};
`;

export const TodoItemBtn = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
export const CreateTodoDiv = styled.div`
  position: relative;
  width: 560px;
  height: 30px;
  margin-top: 25px;

  input {
    width: 460px;
    ${({ theme }) => {
      return css`
        border-bottom: 1px solid ${(props) => props.theme.colors.colorMainFont};
        color: ${(props) => props.theme.colors.colorMainFont};
      `;
    }}
  }

  button {
    position: absolute;
    right: 30px;
    bottom: 5px;
  }
`;
