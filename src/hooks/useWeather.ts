// All npm packages 
import axios from "axios";
import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useLocation } from ".";

// All Components, molecules, hooks, custom files 
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
} from "../models";

export const useWeather = (
  locationName: string,
  unit: string,
  useMockData: boolean
) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const { location } = useLocation(locationName, useMockData);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const handleError = useErrorHandler();

  useEffect(() => {
    setIsLoading(true);
    if (location) {
      const url = `${baseUrl}?lat=${location.position.latitude}&lon=${location.position.longitude}&appid=${apiKey}` 
      axios
        .get(url)
        .then((response) => {
          const res = response.data;
          const current =  {
            dt: res.dt,
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset,
            temp: (res.main.temp - 273.15),
            feels_like: (res.main.feels_like - 273.15),
            pressure: res.main.pressure,
            humidity: res.main.humidity,
            clouds: res.clouds.all,
            visibility: res.visibility,
            wind_speed: res.wind.speed,
            wind_deg: res.wind.deg,
            weather: [
              { id: res.weather[0]?.id, main: res.weather[0]?.main, description: res.weather[0]?.description, icon: res.weather[0]?.icon }
            ]
          }
          setCurrent(current);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 100);
        });
    }
  }, [location, unit, useMockData, baseUrl, apiKey, handleError]);

  const setCurrent = (data: any) => {
   
    setCurrentWeather({
      dt: data.dt,
      weather: {
        icon: data.weather[0]?.icon,
        description: data.weather[0]?.description,
      },
      temp: data.temp,
      feels_like: data.feels_like,
      details: {
        rain: 0,
        visibility: data?.visibility / 1000,
        humidity: data?.humidity,
        pressure: data.pressure,
        wind_speed: data.wind_speed,
      },
    });
  };

  return {
    isLoading,
    location,
    currentWeather
  };
};
