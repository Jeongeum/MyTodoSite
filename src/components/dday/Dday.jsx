import React, { useEffect, useState } from "react";
import { CreateDday } from "./CreateDday";
import { DdayWrapper } from "./styled";
import { DdayList } from "./DdayList";
import CreateButton from "../common/Button/CreateButton";

export const Dday = () => {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("DdayData");
    return localData ? JSON.parse(localData) : [];
  });
  const [currentDate, setCurrentDate] = useState(() => {
    const storedDate = localStorage.getItem("currentDate");
    return storedDate ? new Date(storedDate) : new Date();
  });
  const [inputDate, setInputDate] = useState("");

  // 등록 화면 보여주는 함수
  const onClickAddDday = () => {
    setHidden(!hidden);
  };

  // 매일 자정마다 difDay 갱신
  useEffect(() => {
    const timer = setInterval(() => {
      // const now = new Date();
      // const hours = now.getHours();
      // const minutes = now.getMinutes();
      // console.log(currentDate);
      // if (hours === 0 && minutes === 0) {
      //   setCurrentDate(new Date());
      //   localStorage.setItem("currentDate", new Date());
      // }
      setCurrentDate(new Date());
      localStorage.setItem("currentDate", new Date());
    }, 1000); // 1초마다 체크하기
    // 1000 * 60 * 60 * 24
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 기념일 계산 함수
  const calculateDifDay = () => {
    const inputDay = new Date(new Date(inputDate).setHours(0, 0, 0, 0)); // 입력받은 기념일 날짜의 자정시간

    const diffTime = inputDay - currentDate;
    const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log("inputDate: ", inputDate);
    console.log("inputDate: ", inputDay);
    console.log("currentDate: ", currentDate);
    console.log("diffTime:  ", diffTime);
    console.log("diffDay: ", diffDay);
    return diffDay;
  };

  // currentDate와 inputDate가 변경될 때마다 difDay 다시 계산해서 로컬스토리지에 저장
  useEffect(() => {
    const updatedData = data.map((item) => {
      const diffTime =
        new Date(new Date(item.date).setHours(0, 0, 0, 0)) - currentDate;
      const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const difHour = Math.ceil((diffTime / (1000 * 60 * 60)) % 24);
      const difMin = Math.ceil((diffTime / (1000 * 60)) % 60);
      const difSec = Math.ceil((diffTime / 1000) % 60);
      const updatedDifDay = diffDay;
      return {
        ...item,
        difDay: updatedDifDay,
        time: `${difHour}:${difMin}:${difSec}`,
      };
    });

    setData(updatedData);
    localStorage.setItem("DdayData", JSON.stringify(updatedData));
  }, [currentDate]);

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
              inputDate={inputDate}
              setInputDate={setInputDate}
              calculateDifDay={calculateDifDay}
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
