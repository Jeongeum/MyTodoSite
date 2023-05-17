import React from "react";
import { LoginBtn, LoginWrapper } from "./styled";
import Img from "../../components/common/Img/Img";
import Input from "../../components/common/Input/Input";
import LogoIcon from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <LoginWrapper>
      <Img src={LogoIcon} width="178px" height="65px" />
      <p>내 브라우저에서 관리하는 오늘의 일정</p>

      <Input placeholder="👤 닉네임을 입력해주세요" />
      <Input placeholder="🔒 비밀번호를 입력해주세요" />
      <Link to="/home">
        <LoginBtn>로그인</LoginBtn>
      </Link>
    </LoginWrapper>
  );
};
