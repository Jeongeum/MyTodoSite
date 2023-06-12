import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { SignupWrapper, ErrorMessageWrapper, SignupBtn } from "./styled";
import { ErrorMessage } from "../Login/styled";

import Input from "../../components/common/Input/Input";

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
  const onSubmit = async (e) => {
    console.log("클릭");
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
      <form onSubmit={onSubmit}>
        {/* <Input
          type="email"
          placeholder="📧 이메일을 입력해주세요"
          value={email}
          onChange={(e) => onChangeEmail(e)}
        /> */}
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
        <SignupBtn type="submit" disabled={!nickname || !password}>
          다음
        </SignupBtn>
      </form>
    </SignupWrapper>
  );
};
