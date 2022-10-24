// All npm packages 
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

// All Components, molecules, hooks, custom files 
import { Container } from "./components/Container/Container";
import { Error, ErrorHandler } from "./components/Common/Error/Error";
import { useSettings } from "./hooks";

// All styling part 
import "./App.scss";

export const App = () => {
  const { settings } = useSettings();

  return (
    <main className={settings.theme}>
      <div className="main-container">
        <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <Container
            settings={settings}
          ></Container>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
