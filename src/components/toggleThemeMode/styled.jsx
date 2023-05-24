import { css, styled } from "styled-components";

export const ThemeModeWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 80px;
  margin: 10px;
  border: none;
  border-radius: 10px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
    `;
  }}
`;
