import React, { useRef, useState } from "react";
import {
  DeleteButton,
  DeleteModal,
  InfoEditButtonWrapper,
  ModalBox,
  ModalHeader,
  ModalWrapper,
  ProfileImgWrapper,
} from "./styled";
import Img from "../common/Img/Img";
import BasicProfileIcon from "../../assets/images/basicProfile.png";
import Input from "../common/Input/Input";
import { deleteUser, updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

export const UserInfoModal = ({ onClickModal, userObj }) => {
  const [newNickname, setNewNickname] = useState(userObj?.displayName);
  const fileInput = useRef(null);
  const [newPhoto, setNewPhoto] = useState(userObj?.photoURL);
  const [file, setFile] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [modalhidden, setModalHidden] = useState(true);
  const navigate = useNavigate();

  // 프로필 사진 수정
  const onClickImgEdit = () => {
    console.log("이미지수정");
    fileInput.current.click();
  };

  // 프로필 사진 수정 반영
  const onChangeImage = async (e) => {
    setFile(e.target.files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setNewPhoto(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    await updateProfile(userObj, {
      photoURL: newPhoto,
    });
  };

  // 닉네임 수정
  const onClickNicknameEdit = () => {
    setHidden(!hidden);
  };

  // 닉네임 수정 반영
  const onChangeNickname = async (e) => {
    if (
      newNickname &&
      e.key === "Enter" &&
      e.nativeEvent.isComposing === false
    ) {
      await updateProfile(userObj, {
        displayName: newNickname,
      });
      setHidden(!hidden);
    }
  };

  // 회원정보 삭제
  const onClickUserInfoDelete = () => {
    setModalHidden(!modalhidden);
  };

  // 회원탈퇴
  const onClickDelete = async () => {
    await deleteUser(userObj);
    alert("회원정보가 삭제되었습니다!");
    navigate("/");
  };

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
              src={userObj.photoURL === null ? `${BasicProfileIcon}` : newPhoto}
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
              <input
                type="file"
                ref={fileInput}
                onChange={(e) => onChangeImage(e)}
              />
              프로필 사진 수정
            </button>
            |<button onClick={onClickNicknameEdit}>닉네임 수정</button>
          </InfoEditButtonWrapper>
        </div>
        <DeleteButton onClick={onClickUserInfoDelete}>
          회원정보 삭제
        </DeleteButton>
      </ModalBox>
      {modalhidden ? null : (
        <DeleteModal>
          삭제 하시겠어요?
          <ul>
            <li onClick={onClickDelete}>삭제</li>
          </ul>
        </DeleteModal>
      )}
    </ModalWrapper>
  );
};
