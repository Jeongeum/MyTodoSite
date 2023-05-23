import { css, styled } from "styled-components";

export const ClockDiv = styled.div`
  border: none;
  border-radius: 10px;

  text-align: center;
  padding: 18px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
      box-shadow: ${theme.colors.colorShadow};
      font-size: ${theme.fontSizes.xl};

      & > span {
        font-size: ${theme.fontSizes.l};
      }
    `;
  }}
`;
