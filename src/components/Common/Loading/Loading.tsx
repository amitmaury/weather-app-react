// All npm packages 
import React, { ReactElement } from "react";

// Styling pacakges
import "./Loading.scss";

type LoadingProps = {
  children: ReactElement;
  isLoading: boolean;
};

export const Loading = ({ children, isLoading }: LoadingProps) => {
  return (
    <>{isLoading ? <div className="loading">Loading...</div> : children}</>
  );
};

export default Loading;
