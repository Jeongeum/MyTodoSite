import React from "react";
import Img from "../common/Img/Img";
import BasicProfileIcon from "../../assets/images/basicProfile.png";
import {
  InfoWrapper,
  LogoutBtn,
  ProfileEditBtn,
  ProfileWrapper,
} from "./styled";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <ProfileWrapper>
      춘식이 님 <Img src={BasicProfileIcon} width="35px" />
      <InfoWrapper id="info">
        <ProfileEditBtn>회원정보수정</ProfileEditBtn>
        <Link to="/">
          <LogoutBtn>로그아웃</LogoutBtn>
        </Link>
      </InfoWrapper>
    </ProfileWrapper>
  );
};
