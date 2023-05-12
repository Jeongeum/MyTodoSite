import { css, styled } from "styled-components";

export const DdayWrapper = styled.div`
  position: relative;
  height: 222px;

  border: none;
  border-radius: 10px;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorMain};
    `;
  }}
`;

export const AddBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;

  transition: 0.125s all ease-in;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorGray};

      &:hover {
        transform: rotate(45deg);
      }

      &:focus {
        background-color: ${theme.colors.colorRed};
        transform: rotate(45deg);
      }
    `;
  }}
`;

export const SubmitBtn = styled.button`
  position: absolute;
  bottom: 5px;
  right: 50px;
  width: 40px;
  height: 30px;

  border: none;
  border-radius: 15px;
  cursor: pointer;
  z-index: 3;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorBlue2};
    `;
  }}
`;
export const CloseBtn = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;

  transform: rotate(45deg);
  transition: 0.125s all ease-in;

  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorRed};
    `;
  }}
`;
export const DdayAddWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 8px;
  width: 244px;
  height: 202px;
  padding: 9px 7px;

  border: none;
  border-radius: 10px;
  z-index: 2;

  input {
    margin: 10px 0 12px 0;
    padding-bottom: 5px;
  }
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.colorWhite};
      font-weight: 600;
    `;
  }}
`;

export const DdaySelectDiv = styled.div`
  margin-top: 10px;
  font-weight: 400;

  select {
    border: none;
    border-radius: 10px;
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.colorGray};
      `;
    }}

    padding: 2px;
    margin-right: 4px;
  }
`;
export const DdayListWrapper = styled.div`
  padding: 12px 10px;
`;

export const DdayListUl = styled.ul`
  height: 160px;
  overflow-y: scroll;

  & > li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 35px;
  }

  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.base};

      & > li > span {
        color: ${theme.colors.colorBlue};
        font-weight: 600;
        width: 50px;
      }
    `;
  }}
`;

export const DdayTitle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    ${({ theme }) => {
      return css`
        color: ${theme.colors.colorDarkGray};
        font-size: ${theme.fontSizes.s};
      `;
    }}
  }
`;
