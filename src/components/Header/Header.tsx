// All npm packages 
import React from "react";
// All Components, molecules, hooks, custom files 
import { CurrentWeatherModel } from "../../models";
// All styling part 
import "./Header.scss";

type HeaderProps = {
  locality?: string;
  country?: string;
  data: CurrentWeatherModel;
  changeLocation: (location: string) => void;
};

export const Header = ({
  locality,
  country,
  data,
  changeLocation,
}: HeaderProps) => {
  const getFormatedDate = () => {
    const selectedDate = new Date(data.dt * 1000);
    const date = selectedDate.toLocaleString("en-GB", {
      day: "numeric",
      weekday: "long",
      month: "long",
    });
    const year = selectedDate.toLocaleString("en-GB", {
      year: "numeric",
    });
    const hour = selectedDate.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${date} ${year} ,  ${hour}`;
  };

  return (
    <>
      <div className="place">
        <label className="city">{locality}</label>
        <label className="country">{country}</label>
        <label className="date">{getFormatedDate()}</label>
      </div>
     
      <div className="enter-city">
        <input
          className="input"
          placeholder="Enter location here..."
          onKeyPress={(e) => {
            if (e?.key === "Enter") {
              changeLocation(e.currentTarget.value);
            }
          }}
        ></input>
      </div>
    </>
  );
};

export default Header;
