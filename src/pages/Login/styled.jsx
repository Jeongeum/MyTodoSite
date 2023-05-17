import { css, styled } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 600px;
  margin: 0 auto;

  img {
    margin: 125px 161px 5px 161px;
  }

  p {
    margin-bottom: 95px;

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

export const LoginBtn = styled.button`
  width: 170px;
  height: 50px;

  border: none;
  border-radius: 10px;
`;
