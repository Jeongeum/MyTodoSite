import React from "react";
import { DdayDeleteBox, DdayTitle } from "./styled";

export const DdayItem = ({ item, data, setData }) => {
  const { id, title, date, difDay, time } = item;

  // 디데이 삭제
  const onClickDeleteDay = (id) => {
    const updatedData = data.filter((item) => item.id !== id);

    // 데이터 갱신 후 로컬스토리지에 다시 저장
    setData(updatedData);
    localStorage.setItem("DdayData", JSON.stringify(updatedData));
  };

  return (
    <li key={id}>
      <DdayTitle>
        {title}
        <span>
          {date} {time} 남음
        </span>
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
