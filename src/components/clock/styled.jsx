import { css, styled } from "styled-components";

export const ClockDiv = styled.div`
  font-weight: bold;

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};

      & > span {
        font-size: ${theme.fontSizes.l};
        font-weight: 400;
      }
    `;
  }}
`;
