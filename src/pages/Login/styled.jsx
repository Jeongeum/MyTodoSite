import { css, styled } from "styled-components";

export const LoginWrapper = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input:nth-child(4) {
      margin-bottom: 10px;
    }
  }

  img {
    margin: 125px 161px 5px 161px;
  }

  p {
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSizes.s};
      `;
    }}
  }
  input {
    width: 390px;
    height: 40px;
    margin-bottom: 40px;
  }
`;

export const LogoInfo = styled.p`
  margin-bottom: 95px;
`;

export const ErrorMessage = styled.p`
  align-self: flex-start;

  ${({ theme }) => {
    return css`
      color: ${theme.colors.colorRed};
    `;
  }};
`;
export const SignupInfo = styled.div`
  width: 390px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  a {
    font-weight: 700;
  }

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.s};
    `;
  }};
`;
export const LoginBtn = styled.button`
  width: 170px;
  height: 50px;

  border: none;
  border-radius: 10px;
`;
