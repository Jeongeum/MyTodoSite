import React, { useEffect, useState } from "react";
import Img from "../common/Img/Img";
import BasicProfileIcon from "../../assets/images/basicProfile.png";
import {
  InfoWrapper,
  LogoutBtn,
  ProfileEditBtn,
  ProfileWrapper,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { UserInfoModal } from "../modal/UserInfoModal";
import { signOut } from "firebase/auth";

export const Profile = () => {
  const [userObj, setUserObj] = useState("");
  const [modalHidden, setModalHidden] = useState(true);
  const navigate = useNavigate();

  const onClickModal = () => {
    setModalHidden((prev) => !prev); // 모달 숨김 해제
  };

  const onClickLogout = async () => {
    await signOut(auth);
    navigate("/MyTodoSite");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserObj(user);
    });

    return () => unsubscribe(); // Cleanup 함수를 사용하여 구독 취소
  }, []);

  if (!userObj) {
    return null; // 로그인 상태가 아니라면 null 또는 로딩 화면 반환
  }

  return (
    <>
      <ProfileWrapper>
        {userObj.displayName} 님
        <Img
          src={userObj.photoURL || BasicProfileIcon}
          width="35px"
          height="35px"
        />
        <InfoWrapper id="info">
          <ProfileEditBtn onClick={onClickModal}>회원정보수정</ProfileEditBtn>
          <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>
        </InfoWrapper>
      </ProfileWrapper>
      {!modalHidden && (
        <UserInfoModal onClickModal={onClickModal} userObj={userObj} />
      )}
    </>
  );
};
