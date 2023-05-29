import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { SignupWrapper, ErrorMessageWrapper, SignupBtn } from "./styled";
import { ErrorMessage, LogoInfo } from "../Login/styled";
import Img from "../../components/common/Img/Img";
import LogoIcon from "../../assets/images/logo.png";
import Input from "../../components/common/Input/Input";

export const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 회원가입 및 로그인 함수
  const onSubmitLoginInfo = async (e) => {
    e.preventDefault();
    try {
      // Firebase에 회원가입 정보를 등록
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 생성된 사용자의 UID를 활용하여 nickname을 Firestore에 저장
      await updateProfile(createdUser.user, {
        displayName: nickname,
      });

      // 회원가입이 완료되면 로그인 화면으로 이동
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다.");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 사용중인 이메일입니다.");
          break;
        case "auth/weak-password":
          setErrorMsg("비밀번호를 6자리 이상 입력해주세요.");
          break;
        default:
      }
    }
  };

  return (
    <SignupWrapper>
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
          type="text"
          placeholder="👤 닉네임을 입력해주세요"
          onChange={(e) => onChangeNickname(e)}
          value={nickname}
        />
        <Input
          type="password"
          placeholder="🔒 비밀번호를 입력해주세요 (6자 이상)"
          onChange={(e) => onChangePassword(e)}
          value={password}
        />
        <ErrorMessageWrapper>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </ErrorMessageWrapper>
        <SignupBtn type="submit" disabled={!email || !nickname || !password}>
          회원가입
        </SignupBtn>
      </form>
    </SignupWrapper>
  );
};
