import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StepsProvider } from "./context/StepsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StepsProvider>
      <App />
    </StepsProvider>
  </React.StrictMode>
);
