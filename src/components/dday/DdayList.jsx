import React from "react";
import { DdayListUl, DdayListWrapper } from "./styled";
import { DdayItem } from "./DdayItem";

export const DdayList = ({ data, setData }) => {
  return (
    <DdayListWrapper>
      <DdayListUl>
        {data.map((item) => (
          <DdayItem key={item.id} item={item} data={data} setData={setData} />
        ))}
      </DdayListUl>
    </DdayListWrapper>
  );
};
