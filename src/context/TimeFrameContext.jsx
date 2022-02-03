import React, {useState, useEffect} from "react"

export const TimeFrameContext = React.createContext()

export const TimeFrameProvider = ({ children }) => {
    const [timeFrame, setTimeFrame] = useState("Daily")

    useEffect(() => {
        console.log(timeFrame)
    },[timeFrame])
    
    return (
        <TimeFrameContext.Provider value={{timeFrame, setTimeFrame}}>
            {children}
        </TimeFrameContext.Provider>
    )
}