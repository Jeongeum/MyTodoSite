import styled, { css } from "styled-components";

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50px;
  position: absolute;
  transition: 0.5s;
  transform: rotate(45deg);
  cursor: pointer;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorRed};

      &:hover {
        background-color: ${theme.colors.colorDiRed};
      }
    `;
  }};
`;

export default DeleteButton;
