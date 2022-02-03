import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TimeFrameProvider } from "./context/TimeFrameContext";

ReactDOM.render(
  <TimeFrameProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TimeFrameProvider>,
  document.getElementById("root")
);
