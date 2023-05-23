import { css, styled } from "styled-components";

export const ClockDiv = styled.div`
  border: none;
  border-radius: 10px;

  text-align: center;
  padding: 18px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
      font-size: ${(props) => props.theme.fontSizes.xl};

      & > span {
        font-size: ${(props) => props.theme.fontSizes.l};
      }
    `;
  }}
`;
