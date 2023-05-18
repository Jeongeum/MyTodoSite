import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { LoginBtn, LoginWrapper } from "./styled";
import Img from "../../components/common/Img/Img";
import LogoIcon from "../../assets/images/logo.png";
import Input from "../../components/common/Input/Input";

export const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
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
      navigate("/login");
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
          placeholder="👤 닉네임을 입력해주세요"
          onChange={(e) => onChangeNickname(e)}
          value={nickname}
        />
        <Input
          placeholder="🔒 비밀번호를 입력해주세요"
          onChange={(e) => onChangePassword(e)}
          value={password}
        />
        <LoginBtn type="submit" disabled={!email || !password}>
          회원가입
        </LoginBtn>
        <Link to="/login">
          <LoginBtn type="button">로그인 화면으로 이동</LoginBtn>
        </Link>
      </form>
    </LoginWrapper>
  );
};
