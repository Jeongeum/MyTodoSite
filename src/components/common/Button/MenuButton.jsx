import styled from "styled-components";

const MenuButton = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 50px;
  position: absolute;
  transition: 0.5s;
  transform: translate(0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;

  cursor: pointer;

  background-color: transparent;
`;

export default MenuButton;
