import React from "react";
import { DdayListUl, DdayListWrapper, DdayTitle } from "./styled";

export const DdayList = ({ onClickAddDday, data }) => {
  return (
    <DdayListWrapper>
      <DdayListUl>
        {data.map((item) => (
          <li key={item.id} onClick={onClickAddDday}>
            <DdayTitle>
              {item.title} <span>{item.date}</span>
            </DdayTitle>
            <span>D-{item.difDay}</span>
          </li>
        ))}
      </DdayListUl>
    </DdayListWrapper>
  );
};
