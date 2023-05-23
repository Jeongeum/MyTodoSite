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
      background-color: ${(props) => props.theme.colors.colorWhite};
      box-shadow: ${(props) => props.theme.colors.colorDarkShadow};
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

  img {
    border-radius: 50%;
  }
`;

export const InfoEditButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      font-size: ${(props) => props.theme.fontSizes.s};
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

  font-weight: 600;

  ${({ theme }) => {
    return css`
      color: ${(props) => props.theme.colors.colorRed};
    `;
  }}
`;

// 회원탈퇴 모달
export const DeleteModal = styled.div`
  width: 200px;
  height: 120px;
  border: none;
  border-radius: 10px;
  z-index: 8000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  gap: 20px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorWhite};
      box-shadow: ${(props) => props.theme.colors.colorDarkShadow};
    `;
  }}

  ul {
    padding: 15px;
  }

  li {
    cursor: pointer;
    width: 100%;
  }

  li:hover {
    ${({ theme }) => {
      return css`
        color: ${(props) => props.theme.colors.colorRed};
      `;
    }}
  }
`;

// 북마크 추가 모달

export const BookMarkModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 200px;
  padding: 15px;
  border-radius: 10px;
  z-index: 5000;

  label {
    font-weight: 600;
  }

  input {
    margin-top: 7px;
  }

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorWhite};
      box-shadow: ${(props) => props.theme.colors.colorDarkShadow};
    `;
  }}
`;

export const CreateBtn = styled.button`
  width: 90px;
  height: 35px;
  align-self: center;
  background-color: pink;
`;
