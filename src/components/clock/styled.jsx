import { css, styled } from "styled-components";

export const ClockDiv = styled.div`
  font-weight: bold;
  border: none;
  border-radius: 10px;

  text-align: center;
  padding: 18px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
      font-size: ${theme.fontSizes.xl};

      & > span {
        font-size: ${theme.fontSizes.l};
        font-weight: 400;
      }
    `;
  }}
`;
