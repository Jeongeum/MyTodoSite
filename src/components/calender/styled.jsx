import { css, styled } from "styled-components";

export const CalenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 125px;
  border: none;
  border-radius: 10px;

  padding: 7px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
      font-size: ${theme.fontSizes.xs};
    `;
  }}
`;

export const CalenderDay = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
    `;
  }}
`;
