// All npm packages 
import React from "react";
import { createRoot } from "react-dom/client";
// All Components, molecules, hooks, custom files 
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
