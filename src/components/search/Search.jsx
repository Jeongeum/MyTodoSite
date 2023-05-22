import React, { useState } from "react";
import Input from "../common/Input/Input";
import { SearchWrapper } from "./styled";
import Img from "../common/Img/Img";
import SearchIcon from "../../assets/images/search.png";

export const Search = () => {
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
        <Img src={SearchIcon} width="20px" />
      </button>
    </SearchWrapper>
  );
};
