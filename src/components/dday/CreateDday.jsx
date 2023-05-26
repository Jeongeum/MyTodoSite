import React, { useState } from "react";
import Input from "../common/Input/Input";
import { DdayAddWrapper, SubmitBtn } from "./styled";
import DeleteButton from "../common/Button/DeleteButton";

export const CreateDday = ({
  data,
  setData,
  onClickAddDday,
  inputDate,
  setInputDate,
  calculateDifDay,
}) => {
  const [ddayName, setDdayName] = useState("");

  // 기념일 등록
  const onClickSubmitDday = (e) => {
    e.preventDefault();
    if (ddayName) {
      const difDay = calculateDifDay();

      const newDday = {
        id: Date.now(),
        title: ddayName,
        date: inputDate,
        difDay: difDay,
      };

      const newData = [...data, newDday];
      setData(newData);

      localStorage.setItem("DdayData", JSON.stringify(newData));
      localStorage.setItem("inputDateData", JSON.stringify(newData));

      setDdayName("");
      setInputDate("");
      onClickAddDday(); // 등록 창 닫기
    }
  };

  return (
    <DdayAddWrapper>
      <label>
        기념일 명
        <Input
          type="text"
          placeholder="기념일을 입력하세요"
          maxLength={15}
          value={ddayName}
          onChange={(e) => setDdayName(e.target.value)}
        />
      </label>
      날짜
      <Input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <SubmitBtn type="submit" onClick={onClickSubmitDday}>
        등록
      </SubmitBtn>
      <DeleteButton onClick={onClickAddDday} bottom="5px" right="7px">
        +
      </DeleteButton>
    </DdayAddWrapper>
  );
};
