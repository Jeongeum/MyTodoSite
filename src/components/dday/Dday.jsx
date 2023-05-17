import React, { useEffect, useState } from "react";
import { CreateDday } from "./CreateDday";
import { DdayWrapper } from "./styled";
import { DdayList } from "./DdayList";
import CreateButton from "../common/Button/CreateButton";

export const Dday = () => {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState([]);

  // 등록 화면 보여주는 함수
  const onClickAddDday = () => {
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
        <DdayList data={data} setData={setData} />

        {hidden === false ? (
          <>
            <CreateDday
              data={data}
              setData={setData}
              onClickAddDday={onClickAddDday}
            />
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
