import { css, styled } from "styled-components";

export const SettingWrapper = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

export const SignupDiv = styled.div`
  text-align: center;
  p {
    ${({ theme }) => {
      return css`
        font-size: ${(props) => props.theme.fontSizes.l};
        margin-bottom: 10px;
      `;
    }}
  }
`;
