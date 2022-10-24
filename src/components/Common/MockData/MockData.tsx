// all npm packages 
import React, { ReactElement } from "react";

// Styling pacakges
import "./MockData.scss";

type MockDataProps = {
  children: ReactElement;
};

export const MockData = ({ children }: MockDataProps) => {
  return (
    <>
      {children}
    </>
  );
};

export default MockData;
