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
      console.log(data);
      setWeather({
        id: data.weather[0].id,
        main: data.weather[0].main,
        tempMax: (data.main.temp_max - 273).toFixed(1),
        tempMin: (data.main.temp_min - 273).toFixed(1),
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
      <span>
        최고:{weather.tempMax} 최저:{weather.tempMin}
      </span>
      <Ondo>{weather.temperature}</Ondo>
      <div>
        {weather.cityName}
        <Img
          src={`http://openweathermap.org/img/w/${weather.icon}.png`}
          alt={weather.iconDescription}
          width={20}
        />
      </div>
    </WeatherDiv>
  );
};
