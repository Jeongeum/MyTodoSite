import React, { useState } from "react";
import Img from "../../components/common/Img/Img";
import LogoIcon from "../../assets/images/logo.png";
import { LogoInfo } from "../Login/styled";
import { SettingWrapper, SignupDiv } from "./styled";
import { Signup } from "../Signup/Signup";
import { SearchEngine } from "../../components/searchengine/SearchEngine";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Setting = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState(false);
  const navigate = useNavigate();

  console.log(email);
  const onClickLogin = async () => {
    try {
      // Firebase에 해당 이메일과 비밀번호로 사용자가 있는지 확인
      await signInWithEmailAndPassword(auth, email, password);
      // 로컬스토리지에 닉네임 저장하여 로그인 유지
      localStorage.setItem("username", nickname);
      // 로그인 처리가 완료되면 홈 페이지로 이동
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SettingWrapper>
      <Img src={LogoIcon} width="178px" height="65px" alt="로고 아이콘" />
      <LogoInfo>내 브라우저에서 관리하는 오늘의 일정</LogoInfo>

      {next ? (
        <SignupDiv>
          <p>사용하실 검색엔진을 선택 해주세요. 2/2</p>
          <SearchEngine onClickLogin={onClickLogin} />
        </SignupDiv>
      ) : (
        <SignupDiv>
          <p>사용자 정보를 입력해주세요. 1/2</p>
          <Signup
            nickname={nickname}
            setNickname={setNickname}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setNext={setNext}
          />
        </SignupDiv>
      )}
    </SettingWrapper>
  );
};
