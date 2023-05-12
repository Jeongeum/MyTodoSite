import React, { useEffect, useState } from "react";
import { DdayAdd } from "./DdayAdd";
import { AddBtn, CloseBtn, DdayWrapper } from "./styled";
import { DdayList } from "./DdayList";

export const Dday = () => {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState([]);
  const onClickAddDday = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    const localData = localStorage.getItem("DdayData");
    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);
  return (
    <>
      <DdayWrapper>
        <DdayList onClickAddDday={onClickAddDday} data={data} />

        {hidden === false ? (
          <>
            <CloseBtn onClick={onClickAddDday}>+</CloseBtn>
            <DdayAdd data={data} setData={setData} />
          </>
        ) : (
          <AddBtn onClick={onClickAddDday}>+</AddBtn>
        )}
      </DdayWrapper>
    </>
  );
};
