import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider className="dark:bg-black dark:text-white">
    <React.StrictMode>
      <App className="dark:bg-black dark:text-white" />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
