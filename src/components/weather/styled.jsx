import { css, styled } from "styled-components";

export const WeatherDiv = styled.div`
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
      box-shadow: ${theme.colors.colorShadow};
      font-size: ${theme.fontSizes.s};

      & > div {
        display: flex;
        align-items: center;
        gap: 3px;
      }
    `;
  }}
`;

export const Ondo = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
    `;
  }}
`;
