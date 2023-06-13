import { css, styled } from "styled-components";

export const SearchEngineWrapper = styled.div`
  text-align: center;
`;

export const EngineBtn = styled.button`
  width: 50px;
  height: 50px;

  background-color: #ffffff4d;
  color: #ffffff;
  border: none;

  & :active:after {
    ${({ theme }) => {
      return css`
        box-shadow: ${(props) => props.theme.colors.colorShadow};
      `;
    }}
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
