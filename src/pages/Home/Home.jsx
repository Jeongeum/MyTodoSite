import React from "react";
import Input from "../../components/common/Input/Input";
import ToggleMenu from "../../components/toggleMenu/ToggleMenu";
import { Clock } from "../../components/clock/Clock";
import { Calender } from "../../components/calender/Calender";
import { Weather } from "../../components/weather/Weather";
import { Dday } from "../../components/dday/Dday";
import { Todo } from "../../components/todo/Todo";
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
        <Input placeholder="명언넣기" />
        <Todo />
      </LastWrapper>
    </HomeWrapper>
  );
};

export default Home;
