import { css, styled } from "styled-components";

export const SettingWrapper = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    margin: 125px 161px 5px 161px;
  }
`;

export const LogoInfo = styled.p`
  margin-bottom: 95px;

  ${({ theme }) => {
    return css`
      font-size: ${(props) => props.theme.fontSizes.s};
    `;
  }}
`;

export const SettingInfoMessage = styled.p`
  text-align: center;
  margin-bottom: 30px;

  ${({ theme }) => {
    return css`
      font-size: ${(props) => props.theme.fontSizes.l};
    `;
  }}
`;

export const SettingBtn = styled.button`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 10px;
  margin-top: 50px;

  ${({ theme }) => {
    return css`
      &:disabled {
        color: ${(props) => props.theme.colors.colorDisabled};
      }
      background-color: ${(props) => props.theme.colors.colorMain};
      color: ${(props) => props.theme.colors.colorMainFont};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
    `;
  }}
`;
