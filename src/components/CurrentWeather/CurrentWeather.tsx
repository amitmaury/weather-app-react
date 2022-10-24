// all npm packages 
import React from "react";

// All Components, molecules, hooks, custom files 
import { CurrentWeatherModel } from "../../models";

// all styling part 
import "./CurrentWeather.scss";

type CurrentWeatherProps = {
  data: CurrentWeatherModel;
};

export const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const weatherCode =
    data.weather.icon !== ""
        ? `${data.weather.icon}_n`
        : `${data.weather.icon}`
   
  const unitSymbol = "C" ;
  return (
    <div className="current-weather">
      <div className="image">
        <img
          src={require(`../../resources/icon_${weatherCode}.png`)}
          className="icon"
          alt=""
        />
      </div>
      <div className="details">
        <label className="temp">
          {Math.round(data.temp)}°<span>{unitSymbol}</span>
        </label>
        <label className="feelslike">
          Feels like: <span>{Math.round(data.feels_like)}°</span>
        </label>
        <label className="description">{data.weather.description}</label>
      </div>
    </div>
  );
};

export default CurrentWeather;
