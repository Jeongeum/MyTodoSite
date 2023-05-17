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

  button {
    position: absolute;
    cursor: pointer;
    z-index: 3;
  }
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
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 35px;
  }
  & > li:hover {
    #itembox {
      display: flex;
      justify-content: center;
      align-items: center;
    }
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

export const DdayDeleteBox = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;

  background-color: rgba(190, 190, 190, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;

  ${({ theme }) => {
    return css`
      color: ${theme.colors.colorRed};
    `;
  }}
`;
