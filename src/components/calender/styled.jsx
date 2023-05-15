import { css, styled } from "styled-components";

export const CalenderDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 125px;
  border: none;
  border-radius: 10px;

  padding: 7px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
      font-size: ${theme.fontSizes.s};
    `;
  }}
`;

export const CalenderDay = styled.span`
  margin-top: 4px;
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
      font-weight: 700;
    `;
  }}
`;
