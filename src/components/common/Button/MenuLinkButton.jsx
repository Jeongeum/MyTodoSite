import styled, { css } from "styled-components";

const MenuLinkButton = styled.a`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default MenuLinkButton;
