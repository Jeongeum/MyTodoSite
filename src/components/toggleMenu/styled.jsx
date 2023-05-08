import styled from "styled-components";

const ToggleMenuWrapper = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: 0.5s;

  & > :first-child {
    z-index: 10;
  }

  &.active {
    > :nth-child(2) {
      transform: translateY(80px);
    }

    > :nth-child(3) {
      transform: translateY(160px);
    }

    > :nth-child(4) {
      transform: translateY(240px);
    }

    > :nth-child(5) {
      transform: translateY(320px);
    }

    > :last-child {
      transform: translateY(400px);
    }
  }
`;

export default ToggleMenuWrapper;
