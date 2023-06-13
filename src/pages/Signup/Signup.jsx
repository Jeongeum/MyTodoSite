import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { SignupWrapper, ErrorMessage } from "./styled";

import Input from "../../components/common/Input/Input";
import { SettingBtn, SettingInfoMessage } from "../Settings/styled";

export const Signup = ({
  nickname,
  setNickname,
  email,
  setEmail,
  password,
  setPassword,
  setNext,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // 회원가입 함수
  const onSignup = async (e) => {
    e.preventDefault();

    try {
      // Firebase에 회원가입 정보를 등록
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        `${nickname}@matosa.com`,
        password
      );

      // 생성된 사용자의 UID를 활용하여 nickname을 Firestore에 저장
      await updateProfile(createdUser.user, {
        displayName: nickname,
      });
      setEmail(`${nickname}@matosa.com`);

      // 회원가입이 완료되면 검색엔진 셋팅 화면 출력되도록 상태값 변경
      setNext((prev) => !prev);
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
      <SettingInfoMessage>사용자 정보를 입력해주세요. 1/2</SettingInfoMessage>
      <form onSubmit={onSignup}>
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
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        <SettingBtn type="submit" disabled={!nickname || !password}>
          다음
        </SettingBtn>
      </form>
    </SignupWrapper>
  );
};
