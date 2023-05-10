import React, { useState } from "react";
import { DdayAdd } from "./DdayAdd";
import { AddBtn, CloseBtn, DdayWrapper } from "./styled";
import { DdayList } from "./DdayList";

export const Dday = () => {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState([
    { id: 1, title: "✨ 디데이1", date: "2023-05-11" },
    { id: 2, title: "💚 디데이2", date: "2023-05-11" },
  ]);
  const onClickAddDday = () => {
    setHidden(!hidden);
  };

  const onClickSubmitDday = (inputData) => {
    setData([...data, inputData]);
  };
  return (
    <>
      <DdayWrapper>
        <DdayList onClickAddDday={onClickAddDday} data={data} />

        {hidden === false ? (
          <>
            <CloseBtn onClick={onClickAddDday}>+</CloseBtn>
            <DdayAdd
              data={data}
              setData={setData}
              onClickSubmitDday={onClickSubmitDday}
            />
          </>
        ) : (
          <AddBtn onClick={onClickAddDday}>+</AddBtn>
        )}
      </DdayWrapper>
    </>
  );
};
