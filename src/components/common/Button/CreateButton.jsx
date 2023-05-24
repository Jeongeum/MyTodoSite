import styled, { css } from "styled-components";

const CreateButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50px;
  position: absolute;
  transition: 0.5s;
  transform: rotate(0);

  cursor: pointer;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  &:hover {
    transform: rotate(45deg);
  }

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorGray};
    `;
  }}
`;

export default CreateButton;
