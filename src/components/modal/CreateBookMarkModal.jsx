import React from "react";
import {
  BookMarkModalBox,
  CreateBtn,
  ModalHeader,
  ModalWrapper,
} from "./styled";
import Input from "../common/Input/Input";

export const CreateBookMarkModal = ({
  onClickModal,
  onclickCreateBookMark,
  bookmarkURL,
  setBookMarkURL,
}) => {
  return (
    <ModalWrapper>
      <BookMarkModalBox>
        <ModalHeader>
          북마크 추가 <button onClick={onClickModal}>X</button>
        </ModalHeader>
        <label>
          URL :
          <Input
            onChange={(e) => setBookMarkURL(e.target.value)}
            value={bookmarkURL}
            placeholder="ex) https://www.google.com"
          />
        </label>
        <CreateBtn onClick={onclickCreateBookMark}>추가</CreateBtn>
      </BookMarkModalBox>
    </ModalWrapper>
  );
};
