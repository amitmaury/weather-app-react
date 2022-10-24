// all npm packages 
import React, { useEffect, useState } from "react";

// All Components, molecules, hooks, custom files 
import { useWeather } from "../../hooks";
import {
  EmptyCurrentWeather,
  SettingsModel,
} from "../../models";
import { Loading } from "../Common";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CurrentWeatherDetails from "../CurrentWeatherDetails/CurrentWeatherDetails";
import Header from "../Header/Header";

// all styling part 
import "./Container.scss";

type ContainerProps = {
  settings: SettingsModel;
};

export const Container = ({ settings }: ContainerProps) => {
  const useMockData: boolean = false;
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  const { isLoading, location, currentWeather } =
    useWeather(currentLocationName, settings.unit, useMockData);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
  };

  return (

      <div className="container">

        <img
          src={require("../../resources/founder-lighting-logo.png")}
          className="company-logo"
          alt="Company Logo"
        />
        <Loading isLoading={isLoading}>
          <div className="grid-container">
            <Header
              locality={location.locality}
              country={location.country}
              data={currentWeatherSelectedItem}
              changeLocation={changeLocationHandler}
            ></Header>
            <CurrentWeather
              data={currentWeatherSelectedItem}
            ></CurrentWeather>
            <CurrentWeatherDetails
              data={currentWeatherSelectedItem.details}
            ></CurrentWeatherDetails>
          </div>
        </Loading>
      </div>
  
  );
};
