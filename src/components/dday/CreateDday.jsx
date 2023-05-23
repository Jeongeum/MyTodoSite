import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import { DdayAddWrapper, DdaySelectDiv, SubmitBtn } from "./styled";
import DeleteButton from "../common/Button/DeleteButton";

const d = new Date();
const years = [
  d.getFullYear(),
  d.getFullYear() + 1,
  d.getFullYear() + 2,
  d.getFullYear() + 3,
  d.getFullYear() + 4,
  d.getFullYear() + 5,
  d.getFullYear() + 6,
  d.getFullYear() + 7,
  d.getFullYear() + 8,
  d.getFullYear() + 9,
  d.getFullYear() + 10,
];

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const CreateDday = ({ data, setData, onClickAddDday }) => {
  const [ddayName, setDdayName] = useState("");
  const [selectYear, setSelectYear] = useState(years[0]);
  const [selectMonth, setSelectMonth] = useState(month[d.getMonth()]);
  const [selectDay, setSelectDay] = useState(day[d.getDate() - 1]);
  const [currentDate, setCurrentDate] = useState(new Date());

  // 기념일 등록
  const onClickSubmitDday = (e) => {
    e.preventDefault();
    if (ddayName) {
      const inputDay = new Date(`${selectYear}-${selectMonth}-${selectDay}`);
      const difTime = inputDay - currentDate;

      const difDay = Math.floor(difTime / (1000 * 60 * 60 * 24)) + 1;
      const newData = [
        ...data,
        {
          id: Date.now(),
          title: ddayName,
          date: `${selectYear}-${selectMonth}-${selectDay}`,
          difDay: difDay,
        },
      ];

      setData(newData);

      setDdayName("");
      onClickAddDday();

      localStorage.setItem("DdayData", JSON.stringify(newData));
    }
  };

  // 매일 자정마다 difDay 갱신
  useEffect(() => {
    const updateDifDay = () => {
      const inputDay = new Date(`${selectYear}-${selectMonth}-${selectDay}`);
      const difTime = inputDay - currentDate;
      const difDay = Math.floor(difTime / (1000 * 60 * 60 * 24)) + 1;

      // data 배열의 해당 디데이 항목을 업데이트
      setData((prev) =>
        prev.map((item) =>
          item.id === data.id ? { ...item, difDay: difDay } : item
        )
      );
    };

    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60 * 60 * 24);

    updateDifDay(); // 초기 렌더링 시 difDay를 업데이트

    return () => {
      clearInterval(timer);
    };
  }, [selectYear, selectMonth, selectDay]);

  // 등록 후, data 변화가 생길 때 마다 로컬스토리지에 저장
  useEffect(() => {
    console.log(data);
    localStorage.setItem("DdayData", JSON.stringify(data));
  }, [data]);

  return (
    <DdayAddWrapper>
      <label>
        기념일 명
        <Input
          type="text"
          placeholder="기념일을 입력하세요"
          maxLength={15}
          onChange={(e) => {
            setDdayName(e.target.value);
          }}
        />
      </label>
      날짜
      <DdaySelectDiv>
        <select
          onChange={(e) => {
            setSelectYear(Number(e.target.value));
          }}
          defaultValue={selectYear}
        >
          {years.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        년
        <select
          onChange={(e) => {
            setSelectMonth(Number(e.target.value));
          }}
          defaultValue={selectMonth}
        >
          {month.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        월
        <select
          onChange={(e) => {
            setSelectDay(Number(e.target.value));
          }}
          defaultValue={selectDay}
        >
          {day.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        일
      </DdaySelectDiv>
      <SubmitBtn type="submit" onClick={(e) => onClickSubmitDday(e)}>
        등록
      </SubmitBtn>
      <DeleteButton onClick={onClickAddDday} bottom="5px" right="7px">
        +
      </DeleteButton>
    </DdayAddWrapper>
  );
};
