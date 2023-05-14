import React, { useEffect, useState } from "react";
import { DdayAdd } from "./DdayAdd";
import { AddBtn, CloseBtn, DdayWrapper } from "./styled";
import { DdayList } from "./DdayList";
import CreateButton from "../common/Button/CreateButton";
import DeleteButton from "../common/Button/DeleteButton";

export const Dday = () => {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState([]);
  // 등록 화면 보여주는 함수
  const onClickAddDday = () => {
    setHidden(!hidden);
  };

  // 디데이 수정 시 li 클릭하면 등록 화면 보여주는 함수
  const onClickEditDday = () => {
    setHidden(!hidden);
  };

  // 렌더링 시 localStorage에 저장된 데이터 가져와서 보여주기
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
            <DdayAdd data={data} setData={setData} />
          </>
        ) : (
          <CreateButton onClick={onClickAddDday} bottom="10px" right="10px">
            +
          </CreateButton>
        )}
      </DdayWrapper>
    </>
  );
};
