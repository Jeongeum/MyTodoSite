import React, { useState } from "react";
import MenuButton from "../common/Button/MenuButton";
import Img from "../common/Img/Img";
import BookMarkIcon from "../../assets/images/bookmark.png";
import GoogleIcon from "../../assets/images/google.png";
import YoutubeIcon from "../../assets/images/youtube.png";
import PaletteIcon from "../../assets/images/palette.png";
import ListIcon from "../../assets/images/list.png";
import MoonIcon from "../../assets/images/moon.png";
import ToggleMenuWrapper from "./styled";
import MenuOnButton from "../common/Button/MenuOnButton";
import MenuLinkButton from "../common/Button/MenuLinkButton";

const ToggleMenu = () => {
  const [isMenu, setIsMenu] = useState(false);

  const onClickMenuHandler = () => {
    setIsMenu((prev) => !prev);
  };
  return (
    <ToggleMenuWrapper className={isMenu && "active"}>
      <MenuOnButton onClick={onClickMenuHandler}>
        <Img src={BookMarkIcon} alt="북마크 펼치기 버튼" width="30px" />
      </MenuOnButton>
      <MenuLinkButton href="https://www.google.com" target="_blank">
        <Img src={GoogleIcon} alt="google" width="30px" />
      </MenuLinkButton>
      <MenuLinkButton href="https://www.youtube.com" target="_blank">
        <Img src={YoutubeIcon} alt="youtube" width="30px" />
      </MenuLinkButton>
      <MenuButton>
        <Img src={PaletteIcon} alt="그림 메모" width="30px" />
      </MenuButton>
      <MenuButton>
        <Img src={ListIcon} alt="todolist" width="30px" />
      </MenuButton>
      <MenuButton>
        <Img src={MoonIcon} alt="lightmode" width="30px" />
      </MenuButton>
    </ToggleMenuWrapper>
  );
};

export default ToggleMenu;
