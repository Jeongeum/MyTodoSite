import { css, styled } from "styled-components";

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  padding: 0 10px;

  &:hover {
    #info {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    border-radius: 50%;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;

  background-color: rgba(190, 190, 190, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;

  button {
    cursor: pointer;
    background-color: none;
    border: none;
  }
`;

export const ProfileEditBtn = styled.button`
  ${({ theme }) => {
    return css`
      color: ${(props) => props.theme.colors.colorMainFont};
    `;
  }}
`;

export const LogoutBtn = styled.button`
  &:hover {
    ${({ theme }) => {
      return css`
        color: ${(props) => props.theme.colors.colorRed};
      `;
    }}
  }
`;
