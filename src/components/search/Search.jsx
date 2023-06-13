import React, { useState } from "react";
import Input from "../common/Input/Input";
import { SearchWrapper } from "./styled";
import Img from "../common/Img/Img";
import SearchIcon from "../../assets/images/search.png";
import SearchDarkIcon from "../../assets/images/searchDarkmode.png";

export const Search = ({ themeMode, engine }) => {
  let queryURL = "";
  switch (engine) {
    case "google":
      queryURL = `https://www.${engine}.com/search?q=`;
      break;
    case "naver":
      queryURL = `https://search.${engine}.com/search.${engine}?query=`;
      break;
    case "daum":
      queryURL = `https://search.${engine}.net/search?q=`;
      break;
    case "nate":
      queryURL = `https://search.daum.net/${engine}?q=`;
      break;

    default:
      break;
  }
  const [searchText, setSearchText] = useState("");

  const onChangeText = (e) => {
    setSearchText(e.target.value);
  };

  const onClickSearch = () => {
    window.open(queryURL + searchText, "_blank");
    setSearchText("");
  };

  return (
    <SearchWrapper>
      <Input
        type="search"
        value={searchText}
        onChange={(e) => onChangeText(e)}
      />
      <button onClick={onClickSearch}>
        <Img
          src={themeMode === "lightTheme" ? SearchIcon : SearchDarkIcon}
          width="20px"
          height="20px"
          alt="검색 버튼"
        />
      </button>
    </SearchWrapper>
  );
};
