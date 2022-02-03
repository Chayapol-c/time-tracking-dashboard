import React, { useState } from "react";

export const TimeFrameContext = React.createContext();

export const TimeFrameProvider = ({ children }) => {
  const [timeFrame, setTimeFrame] = useState("Daily");

  return (
    <TimeFrameContext.Provider value={{ timeFrame, setTimeFrame }}>
      {children}
    </TimeFrameContext.Provider>
  );
};
