import React, { useEffect, useState } from "react";
import { Ondo, WeatherDiv } from "./styled";
import axios from "axios";
import Img from "../common/Img/Img";

export const Weather = () => {
  const api = {
    key: "1dc020747cfb98cfd4b8798e43b76b65",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const url = `${api.base}weather?q=Asan&appid=${api.key}`;
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    axios.get(url).then((res) => {
      const data = res.data;
      setWeather({
        id: data.weather[0].id,
        main: data.weather[0].main,
        temperature: (data.main.temp - 273).toFixed(1),
        cityName: data.name,
        icon: data.weather[0].icon,
        iconDescription: data.weather[0].description,
        loading: false,
      });
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <WeatherDiv>
      <span>{weather.main}</span>
      <Ondo>{weather.temperature}°</Ondo>
      <div>
        {weather.cityName}
        <Img
          src={`http://openweathermap.org/img/w/${weather.icon}.png`}
          alt={weather.iconDescription}
          width="20px"
          height="20px"
        />
      </div>
    </WeatherDiv>
  );
};
