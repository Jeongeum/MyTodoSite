import React from "react";
import { DdayDeleteBox, DdayTitle } from "./styled";

export const DdayItem = ({ item, data, setData }) => {
  const { id, title, date, difDay } = item;

  // 디데이 삭제
  const onClickDeleteDay = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };
  return (
    <li key={id}>
      <DdayTitle>
        {title} <span>{date}</span>
      </DdayTitle>
      <span>
        D{difDay >= 0 ? "-" : "+"}
        {difDay === 0 ? "day" : Math.abs(difDay)}
      </span>
      <DdayDeleteBox
        key={`${id}-box`}
        id="itembox"
        onClick={() => onClickDeleteDay(id)}
      >
        삭제
      </DdayDeleteBox>
    </li>
  );
};
