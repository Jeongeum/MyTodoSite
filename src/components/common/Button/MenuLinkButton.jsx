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

  /* background-color: transparent; */
  ${({ theme }) => {
    return css`
      color: ${(props) => props.theme.colors.colorMainFont};
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
    `;
  }}
`;

export default MenuLinkButton;
