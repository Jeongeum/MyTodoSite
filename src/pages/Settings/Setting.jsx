import React, { useState } from "react";
import Img from "../../components/common/Img/Img";
import LogoIcon from "../../assets/images/logo.png";
import { LogoInfo, SettingWrapper } from "./styled";
import { Signup } from "../Signup/Signup";
import { SearchEngine } from "../../components/searchengine/SearchEngine";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export const Setting = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedEngine, setSelectedEngine] = useState();
  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  console.log(email, nickname, password, selectedEngine);
  const onClickSetting = async () => {
    try {
      // Firebase에 해당 이메일과 비밀번호로 사용자가 있는지 확인
      await signInWithEmailAndPassword(auth, email, password);
      // 로컬스토리지에 닉네임 저장하여 로그인 유지
      localStorage.setItem("username", nickname);

      // Cloud Firestore에 사용자 정보 및 검색엔진 저장
      await setDoc(doc(db, "users", email), {
        email: email,
        nickname: nickname,
        password: password,
        engine: selectedEngine,
      });
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
        <SearchEngine
          selectedEngine={selectedEngine}
          setSelectedEngine={setSelectedEngine}
          onClickSetting={onClickSetting}
        />
      ) : (
        <Signup
          nickname={nickname}
          setNickname={setNickname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setNext={setNext}
        />
      )}
    </SettingWrapper>
  );
};
