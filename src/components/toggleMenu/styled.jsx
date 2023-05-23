import styled from "styled-components";

const ToggleMenuWrapper = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: 0.5s;

  li {
    transition: 0.5s;
    transform: translate(0);
  }
  & > ul > :first-child {
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.active {
    & > ul > :nth-child(2) {
      transform: translateY(80px);
    }

    & > ul > :nth-child(3) {
      transform: translateY(160px);
    }

    & > ul > :nth-child(4) {
      transform: translateY(240px);
    }

    & > ul > :nth-child(5) {
      transform: translateY(320px);
    }

    & > ul > :nth-child(6) {
      transform: translateY(400px);
    }
    & > ul > :nth-child(7) {
      transform: translateY(480px);
    }
  }
`;

export default ToggleMenuWrapper;
