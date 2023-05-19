import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  ErrorMessage,
  LoginBtn,
  LoginWrapper,
  LogoInfo,
  SignupInfo,
} from "./styled";
import Img from "../../components/common/Img/Img";
import Input from "../../components/common/Input/Input";
import LogoIcon from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMsg("입력한 이메일이 일치하지 않습니다.");
          break;
        case "auth/wrong-password":
          setErrorMsg("비밀번호가 일치하지 않습니다.");
          break;
        case "auth/user-not-found" && "auth/wrong-password":
          setErrorMsg("이메일과 비밀번호가 일치하지 않습니다.");
        default:
      }
    }
  };

  return (
    <LoginWrapper>
      <form onSubmit={onSubmitLoginInfo}>
        <Img src={LogoIcon} width="178px" height="65px" />
        <LogoInfo>내 브라우저에서 관리하는 오늘의 일정</LogoInfo>
        <Input
          type="email"
          placeholder="📧 이메일을 입력해주세요"
          value={email}
          onChange={(e) => onChangeEmail(e)}
        />
        <Input
          type="password"
          placeholder="🔒 비밀번호를 입력해주세요"
          onChange={(e) => onChangePassword(e)}
          value={password}
        />

        <SignupInfo>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
          <p>
            아직 회원이 아니라면? <Link to="/signup">회원가입</Link>
          </p>
        </SignupInfo>
        <LoginBtn type="submit" disabled={!email || !password}>
          로그인
        </LoginBtn>
      </form>
    </LoginWrapper>
  );
};
