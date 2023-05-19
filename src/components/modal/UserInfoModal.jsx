import React, { useRef, useState } from "react";
import {
  DeleteButton,
  InfoEditButtonWrapper,
  ModalBox,
  ModalHeader,
  ModalWrapper,
  ProfileImgWrapper,
} from "./styled";
import Img from "../common/Img/Img";
import BasicProfileIcon from "../../assets/images/basicProfile.png";
import Input from "../common/Input/Input";
import { updateProfile } from "firebase/auth";

export const UserInfoModal = ({ onClickModal, userObj }) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalHeader>
          회원정보 수정<button onClick={onClickModal}>X</button>
        </ModalHeader>
        <div>
          <ProfileImgWrapper>
            <Img
              width="50px"
              src={
                userObj.photoURL === null
                  ? `${BasicProfileIcon}`
                  : userObj.photoURL
              }
            />

            {hidden ? (
              <span>{userObj && `${userObj.displayName}`} 님</span>
            ) : (
              <Input
                value={newNickname}
                onChange={(e) => setNewNickname(e.target.value)}
                onKeyDown={(e) => onChangeNickname(e)}
              />
            )}
          </ProfileImgWrapper>
          <InfoEditButtonWrapper>
            <button onClick={onClickImgEdit}>
              <input type="file" ref={fileInput} />
              프로필 사진 수정
            </button>
            |<button onClick={onClickNicknameEdit}>닉네임 수정</button>
          </InfoEditButtonWrapper>
        </div>
        <DeleteButton onClick={onClickUserInfoDelete}>
          회원정보 삭제
        </DeleteButton>
      </ModalBox>
    </ModalWrapper>
  );
};
