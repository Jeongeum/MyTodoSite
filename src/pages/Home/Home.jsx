import React from "react";
import ToggleMenu from "../../components/toggleMenu/ToggleMenu";
import { Clock } from "../../components/clock/Clock";
import { Calender } from "../../components/calender/Calender";
import { Weather } from "../../components/weather/Weather";
import { Dday } from "../../components/dday/Dday";
import { Todo } from "../../components/todo/Todo";
import {
  HomeWrapper,
  LastWrapper,
  MiddleWrapper,
  DivWrapper,
  AllWrapper,
} from "./styled";
import { Profile } from "../../components/profile/Profile";
import { Search } from "../../components/search/Search";
import { ThemeModeButton } from "../../components/toggleThemeMode/ThemeModeButton";

const Home = ({ toggleTheme, themeMode }) => {
  return (
    <AllWrapper>
      <ThemeModeButton toggleTheme={toggleTheme} themeMode={themeMode} />
      <HomeWrapper>
        <ToggleMenu themeMode={themeMode} />
        <MiddleWrapper>
          <Profile />
          <Clock />
          <DivWrapper>
            <Calender />
            <Weather />
          </DivWrapper>
          <Dday />
        </MiddleWrapper>
        <LastWrapper>
          <Search themeMode={themeMode} />
          <Todo />
        </LastWrapper>
      </HomeWrapper>
    </AllWrapper>
  );
};

export default Home;
