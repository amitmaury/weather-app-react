import { CurrentWeatherDetailsModel, EmptyWeather, WeatherModel } from ".";

/* Defined the type*/
export interface CurrentWeatherModel {
  dt: number;
  weather: WeatherModel;
  temp: number;
  feels_like: number;
  details?: CurrentWeatherDetailsModel;
}

/* Defined the type*/
export const EmptyCurrentWeather: CurrentWeatherModel = {
  dt: 0,
  weather: EmptyWeather,
  temp: 0,
  feels_like: 0,
  details: undefined,
};
