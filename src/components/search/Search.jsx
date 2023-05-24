import React, { useState } from "react";
import Input from "../common/Input/Input";
import { SearchWrapper } from "./styled";
import Img from "../common/Img/Img";
import SearchIcon from "../../assets/images/search.png";
import SearchDarkIcon from "../../assets/images/searchDarkmode.png";

export const Search = ({ themeMode }) => {
  const queryUrl = "https://www.google.com/search?q=";
  const [searchText, setSearchText] = useState("");

  const onChangeText = (e) => {
    setSearchText(e.target.value);
  };

  const onClickSearch = () => {
    window.open(queryUrl + searchText, "_blank");
    setSearchText("");
  };

  return (
    <SearchWrapper>
      <Input value={searchText} onChange={(e) => onChangeText(e)} />
      <button onClick={onClickSearch}>
        <Img
          src={themeMode === "lightTheme" ? SearchIcon : SearchDarkIcon}
          width="20px"
        />
      </button>
    </SearchWrapper>
  );
};
