import { css, styled } from "styled-components";
// 모달

export const ModalWrapper = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  padding: 15px;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
    `;
  }}
  border-radius: 10px;
  z-index: 5000;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  font-weight: 600;
`;

export const ProfileImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

export const InfoEditButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.s};
    `;
  }}

  input {
    display: none;
  }
`;

export const DeleteButton = styled.button`
  width: 100px;
  padding: 11px;
  position: absolute;
  bottom: 15px;
  right: 15px;

  font-weight: 700;

  ${({ theme }) => {
    return css`
      color: ${theme.colors.colorRed};
    `;
  }}
`;
