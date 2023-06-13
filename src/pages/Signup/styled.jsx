import { css, styled } from "styled-components";

export const SignupWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input:nth-child(2) {
      margin-bottom: 10px;
    }
  }

  input {
    width: 390px;
    height: 40px;
    margin-bottom: 40px;

    ${({ theme }) => {
      return css`
        border-bottom: 1px solid ${(props) => props.theme.colors.colorMainFont};
        color: ${(props) => props.theme.colors.colorMainFont};
      `;
    }}
  }
`;

export const ErrorMessage = styled.p`
  width: 390px;
  align-self: flex-start;

  ${({ theme }) => {
    return css`
      font-size: ${(props) => props.theme.fontSizes.s};
      color: ${(props) => props.theme.colors.colorRed};
    `;
  }};
`;
