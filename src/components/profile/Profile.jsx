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
    setModalHidden(!modalHidden); // 모달 숨김 해제
  };

  const onClickLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setUserObj(auth.currentUser);
    }, 500);
  }, [userObj]);

  return (
    <>
      <ProfileWrapper>
        {userObj && `${userObj.displayName}`} 님
        <Img
          src={
            userObj?.photoURL === null
              ? `${BasicProfileIcon}`
              : userObj?.photoURL
          }
          width="35px"
          height="35px"
        />
        <InfoWrapper id="info">
          <ProfileEditBtn onClick={onClickModal}>회원정보수정</ProfileEditBtn>
          <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>
        </InfoWrapper>
      </ProfileWrapper>
      {modalHidden ? null : (
        <UserInfoModal onClickModal={onClickModal} userObj={userObj} />
      )}
    </>
  );
};
