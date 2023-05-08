import React from "react";
import { CalenderDay, CalenderDiv } from "./styled";

export const Calender = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDay();
  const date = d.getDate();

  const dayObj = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };
  return (
    <CalenderDiv>
      <span>{dayObj[day]}요일</span>
      <span>
        {year}.{month}
      </span>
      <CalenderDay>{date}</CalenderDay>
    </CalenderDiv>
  );
};
