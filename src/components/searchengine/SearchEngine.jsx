import React from "react";
import { EngineBtn } from "./styled";
import { LoginBtn } from "../../pages/Login/styled";

export const SearchEngine = ({ onClickLogin }) => {
  return (
    <div>
      <div className="engineBox">
        <EngineBtn>Google</EngineBtn>
        <EngineBtn>Naver</EngineBtn>
        <EngineBtn>Daum</EngineBtn>
      </div>

      <LoginBtn onClick={onClickLogin}>완료</LoginBtn>
    </div>
  );
};
