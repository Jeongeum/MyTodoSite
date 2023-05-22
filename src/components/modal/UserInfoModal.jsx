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
import { useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

export const UserInfoModal = ({ onClickModal, userObj }) => {
  const [newNickname, setNewNickname] = useState(userObj?.displayName);
  const inputRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [modalhidden, setModalHidden] = useState(true);
  const navigate = useNavigate();
  const [newPhotoURL, setNewPhotoURL] = useState(userObj.photoURL);

  // 프로필 사진 수정
  const onClickImgEdit = () => {
    console.log("이미지수정");
    inputRef.current.click();
  };

  // 프로필 사진 수정 반영
  const onChangeImage = async (e) => {
    let image = inputRef.current.files[0];
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(storageRef).then(async (url) => {
        setNewPhotoURL(url);
        await updateProfile(userObj, {
          photoURL: url,
        });
      });
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
              height="50px"
              src={
                userObj.photoURL === null ? `${BasicProfileIcon}` : newPhotoURL
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
              <input
                type="file"
                ref={inputRef}
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
