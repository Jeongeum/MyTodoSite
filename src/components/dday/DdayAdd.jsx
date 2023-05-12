import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import { DdayAddWrapper, DdaySelectDiv, SubmitBtn } from "./styled";

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
export const DdayAdd = ({ data, setData }) => {
  const [ddayName, setDdayName] = useState("");
  const [selectYear, setSelectYear] = useState(years[0]);
  const [selectMonth, setSelectMonth] = useState(month[d.getMonth()]);
  const [selectDay, setSelectDay] = useState(day[d.getDate() - 1]);

  // 기념일 등록
  const onClickSubmitDday = () => {
    if (ddayName) {
      const inputDay = new Date(`${selectYear}-${selectMonth}-${selectDay}`);
      const toDay = new Date();
      const difTime = inputDay - toDay;

      const difDay = Math.floor(difTime / (1000 * 60 * 60 * 24)) + 1;
      setData((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: ddayName,
          date: `${selectYear}-${selectMonth}-${selectDay}`,
          difDay: difDay,
        },
      ]);

      setDdayName("");
    }
  };

  // 등록 후, data 변화가 생길 때 마다 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("DdayData", JSON.stringify(data));
  }, [data]);
  return (
    <DdayAddWrapper>
      <form>
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
        <SubmitBtn onClick={onClickSubmitDday}>등록</SubmitBtn>
      </form>
    </DdayAddWrapper>
  );
};
