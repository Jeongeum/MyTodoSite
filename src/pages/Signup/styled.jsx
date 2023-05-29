import { css, styled } from "styled-components";

export const SignupWrapper = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input:nth-child(5) {
      margin-bottom: 10px;
    }
  }

  img {
    margin: 125px 161px 5px 161px;
  }

  p {
    ${({ theme }) => {
      return css`
        font-size: ${(props) => props.theme.fontSizes.s};
      `;
    }}
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

export const ErrorMessageWrapper = styled.div`
  width: 390px;
  margin-bottom: 50px;
`;

export const SignupBtn = styled.button`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 10px;
  margin-right: 10px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      color: ${(props) => props.theme.colors.colorMainFont};
    `;
  }}
`;
