import React, { useState } from "react";
import { LoginBtn, LoginWrapper } from "./styled";
import Img from "../../components/common/Img/Img";
import Input from "../../components/common/Input/Input";
import LogoIcon from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loginValue, setLoginValue] = useState({
    usernickname: "",
    userpassword: "",
  });
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginWrapper>
      <form>
        <Img src={LogoIcon} width="178px" height="65px" />
        <p>내 브라우저에서 관리하는 오늘의 일정</p>

        <Input
          placeholder="👤 닉네임을 입력해주세요"
          onChange={(e) => onChangeNickname(e)}
          value={nickname}
        />
        <Input
          placeholder="🔒 비밀번호를 입력해주세요"
          onChange={(e) => onChangePassword(e)}
          value={password}
        />
        <Link to="/home">
          <LoginBtn type="submit" disabled={!nickname || !password}>
            로그인
          </LoginBtn>
        </Link>
      </form>
    </LoginWrapper>
  );
};
