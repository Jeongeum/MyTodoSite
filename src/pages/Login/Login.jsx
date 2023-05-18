import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { LoginBtn, LoginWrapper } from "./styled";
import Img from "../../components/common/Img/Img";
import Input from "../../components/common/Input/Input";
import LogoIcon from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 함수
  const onSubmitLoginInfo = async (e) => {
    e.preventDefault();
    try {
      // Firebase에 해당 이메일과 비밀번호로 사용자가 있는지 확인
      await signInWithEmailAndPassword(auth, email, password);
      // 로그인 처리가 완료되면 홈 페이지로 이동
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(auth, error);
  return (
    <LoginWrapper>
      <form onSubmit={onSubmitLoginInfo}>
        <Img src={LogoIcon} width="178px" height="65px" />
        <p>내 브라우저에서 관리하는 오늘의 일정</p>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => onChangeEmail(e)}
        />
        <Input
          placeholder="🔒 비밀번호를 입력해주세요"
          onChange={(e) => onChangePassword(e)}
          value={password}
        />
        <LoginBtn type="submit" disabled={!email || !password}>
          로그인
        </LoginBtn>
      </form>
    </LoginWrapper>
  );
};