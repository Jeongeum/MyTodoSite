import styled, { css } from "styled-components";

const MenuButton = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50px;
  position: absolute;
  transition: 0.5s;
  transform: translate(0);
  cursor: pointer;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
    `;
  }}
`;

export default MenuButton;
