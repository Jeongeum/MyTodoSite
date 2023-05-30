import React, { useEffect, useState } from "react";
import MenuButton from "../common/Button/MenuButton";
import Img from "../common/Img/Img";
import BookMarkIcon from "../../assets/images/bookmark.png";
import AddIcon from "../../assets/images/addButton.png";
import AddDarkIcon from "../../assets/images/addDarkButton.png";
import ToggleMenuWrapper from "./styled";
import MenuOnButton from "../common/Button/MenuOnButton";
import MenuLinkButton from "../common/Button/MenuLinkButton";
import { CreateBookMarkModal } from "../modal/CreateBookMarkModal";

const ToggleMenu = ({ themeMode }) => {
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
            <Img
              src={BookMarkIcon}
              alt="북마크 펼치기 버튼"
              width="25px"
              height="25px"
            />
          </MenuOnButton>
          <MenuButton onClick={onClickModal}>
            <Img
              src={themeMode === "lightTheme" ? AddIcon : AddDarkIcon}
              alt="북마크 추가버튼"
              width="20px"
              height="20px"
            />
            {`${bookmarkCount} / 4`}
          </MenuButton>
          {bookmarkData.map((item) => (
            <li key={item.id}>
              <MenuLinkButton href={item.pageURL} target="_blank">
                <Img
                  src={item.faviconURL}
                  alt={bookmarkURL}
                  width="25px"
                  height="25px"
                />
              </MenuLinkButton>
            </li>
          ))}
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
