import styled, { css } from "styled-components";

const MenuOnButton = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50px;
  position: absolute;
  transform: translate(0);
  cursor: pointer;

  ${({ theme }) => {
    return css`
      color: ${(props) => props.theme.colors.colorMainFont};
      background-color: ${(props) => props.theme.colors.colorBg};
    `;
  }}
`;

export default MenuOnButton;
