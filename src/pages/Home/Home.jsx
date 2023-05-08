import React from "react";
import Input from "../../components/common/Input/Input";
import ToggleMenu from "../../components/toggleMenu/ToggleMenu";
import { Clock } from "../../components/clock/Clock";
import { Calender } from "../../components/calender/Calender";
import { Weather } from "../../components/weather/Weather";
import { Dday } from "../../components/dday/Dday";
import { TodoList } from "../../components/todo/TodoList";
import { HomeWrapper, LastWrapper, MiddleWrapper, DivWrapper } from "./styled";

const Home = () => {
  return (
    <HomeWrapper>
      <ToggleMenu />
      <MiddleWrapper>
        <Clock />
        <DivWrapper>
          <Calender />
          <Weather />
        </DivWrapper>
        <Dday />
      </MiddleWrapper>
      <LastWrapper>
        <Input placeholder="구글 검색" />
        <TodoList />
      </LastWrapper>
    </HomeWrapper>
  );
};

export default Home;
