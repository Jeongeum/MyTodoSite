import React, { useEffect, useState } from "react";
import MenuButton from "../common/Button/MenuButton";
import Img from "../common/Img/Img";
import BookMarkIcon from "../../assets/images/bookmark.png";
import AddIcon from "../../assets/images/plus.png";
import MoonIcon from "../../assets/images/moon.png";
import ToggleMenuWrapper from "./styled";
import MenuOnButton from "../common/Button/MenuOnButton";
import MenuLinkButton from "../common/Button/MenuLinkButton";
import { CreateBookMarkModal } from "../modal/CreateBookMarkModal";

const ToggleMenu = ({ toggleTheme }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [modalHidden, setModalHidden] = useState(true);

  const [bookmarkURL, setBookMarkURL] = useState("");
  const [bookmarkData, setBookMarkData] = useState(() => {
    const localData = localStorage.getItem("bookmarkList");
    return localData ? JSON.parse(localData) : [];
  });
  const bookmarkCount = bookmarkData.length;

  const onClickMenuHandler = () => {
    setIsMenu((prev) => !prev);
  };

  const onClickModal = () => {
    if (bookmarkCount >= 4) {
      alert("북마크는 최대 4개까지 추가할 수 있습니다.");
      return;
    } else {
      setModalHidden((prev) => !prev);
    }
  };

  // 북마크 추가
  const onclickCreateBookMark = () => {
    setBookMarkData((prev) => [
      ...prev,
      {
        id: Date.now(),
        faviconURL: `${bookmarkURL}/favicon.ico`,
        pageURL: bookmarkURL,
      },
    ]);
    setBookMarkURL("");
    onClickModal((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkData));
  }, [bookmarkData]);
  return (
    <>
      <ToggleMenuWrapper className={isMenu && "active"}>
        <ul>
          <MenuOnButton onClick={onClickMenuHandler}>
            <Img src={BookMarkIcon} alt="북마크 펼치기 버튼" width="25px" />
            {`${bookmarkCount} / 4`}
          </MenuOnButton>
          <MenuButton onClick={onClickModal}>
            <Img src={AddIcon} alt="북마크 추가버튼" width="20px" />
            북마크 추가
          </MenuButton>
          {bookmarkData.map((item) => (
            <li key={item.id}>
              <MenuLinkButton href={item.pageURL} target="_blank">
                <Img src={item.faviconURL} alt="google" width="25px" />
              </MenuLinkButton>
            </li>
          ))}
          <MenuButton onClick={toggleTheme}>
            <Img src={MoonIcon} alt="lightmode" width="25px" />
          </MenuButton>
        </ul>
      </ToggleMenuWrapper>
      {!modalHidden && (
        <CreateBookMarkModal
          onClickModal={onClickModal}
          onclickCreateBookMark={onclickCreateBookMark}
          bookmarkURL={bookmarkURL}
          setBookMarkURL={setBookMarkURL}
        />
      )}
    </>
  );
};

export default ToggleMenu;
