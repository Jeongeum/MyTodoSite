import { css, styled } from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;

  input {
    width: 490px;
    height: 35px;
    margin-right: 30px;

    ${({ theme }) => {
      return css`
        border-bottom: 1px solid ${(props) => props.theme.colors.colorMainFont};
      `;
    }}
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
