import React from "react";
import { DdayListUl, DdayListWrapper } from "./styled";

export const DdayList = ({ onClickAddDday, data }) => {
  return (
    <DdayListWrapper>
      <DdayListUl>
        {data.map((item) => (
          <li key={item.id} onClick={onClickAddDday}>
            {item.title} <span>d-274</span>
          </li>
        ))}
      </DdayListUl>
    </DdayListWrapper>
  );
};
