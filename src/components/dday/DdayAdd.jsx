import React, { useState } from "react";
import Input from "../common/Input/Input";
import { DdayAddWrapper, SubmitBtn } from "./styled";

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
export const DdayAdd = ({ onClickSubmitDday }) => {
  const [selectYear, setSelectYear] = useState(years[0]);
  const [selectMonth, setSelectMonth] = useState(month[d.getMonth()]);
  const [selectDay, setSelectDay] = useState(day[d.getDate() - 1]);

  const onClickTest = () => {
    console.log(selectYear, selectMonth, selectDay);
  };
  return (
    <DdayAddWrapper>
      <form>
        <label>
          기념일 명
          <Input type="text" placeholder="기념일을 입력하세요" />
        </label>
        날짜
        <div>
          <select onChange={setSelectYear}>
            {years.map((item) => (
              <option value={selectYear} key={item}>
                {item}
              </option>
            ))}
          </select>
          년
          <select onChange={setSelectMonth}>
            {month.map((item) => (
              <option value={selectMonth} key={item}>
                {item}
              </option>
            ))}
          </select>
          월
          <select onChange={setSelectDay}>
            {day.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          일
        </div>
        <SubmitBtn onClick={onClickSubmitDday}>등록</SubmitBtn>
      </form>
      <button onClick={onClickTest}>test</button>
    </DdayAddWrapper>
  );
};
