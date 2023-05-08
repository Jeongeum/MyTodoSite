import React, { useEffect, useState } from "react";
import { ClockDiv } from "./styled";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hour = time.getHours();
  const minute =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const amPm = hour < 12 ? "AM" : "PM";
  return (
    <ClockDiv>
      {hour < 10 ? `0${hour}` : hour}:{minute} <span>{amPm}</span>
    </ClockDiv>
  );
};
