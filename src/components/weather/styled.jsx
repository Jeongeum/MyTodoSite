import { css, styled } from "styled-components";

export const WeatherDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 125px;
  border: none;
  border-radius: 10px;

  padding: 7px;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
      font-size: ${theme.fontSizes.s};

      & > div {
        display: flex;
        gap: 3px;
      }
    `;
  }}
`;

export const Ondo = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
      font-weight: 700;
    `;
  }}
`;
