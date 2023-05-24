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
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
      font-size: ${(props) => props.theme.fontSizes.s};
    `;
  }}
`;

export const CalenderDay = styled.span`
  margin-top: 4px;
  ${({ theme }) => {
    return css`
      font-size: ${(props) => props.theme.fontSizes.xl};
    `;
  }}
`;
