import { useContext } from "react"
import { TimeFrameContext } from "../context/TimeFrameContext"

import People from "../images/image-jeremy.png"


const Profile = () => {
    const {timeFrame, setTimeFrame} = useContext(TimeFrameContext)

    const timeFrames = ["Daily", "Weekly", "Monthly"]

    const handleChange = (e) => {
        const newTimeFrame = e.target.textContent
        setTimeFrame(newTimeFrame)
    }

    return (
        <div className="row-span-2 profile-bg rounded-2xl h-[30rem] w-[15rem]">
            <div className="px-8 py-12 rounded-2xl h-2/3" id="blue">
                <img
                  src={People} 
                  alt="Jeremy Robson"
                  className="border-2 border-white rounded-full w-16 h-16 mb-10"
                />
                <p className="text-white text-sm font-light">Report for</p>
                <h1 className="text-white text-4xl font-light" >Jeremy <br/> Robson</h1>
            </div>
            <li className="h-1/3 py-8 px-8 flex flex-col justify-between list-none ">
                {timeFrames.map((e, i) => {
                    if (e === timeFrame) {
                        return (
                            <ul className="menu text-white" key={i} onClick={handleChange}>
                                {e}
                            </ul>
                    )                        
                    } else {
                        return (
                            <ul className="menu purple" key={i} onClick={handleChange}>
                                {e}
                            </ul>
                        )
                    }
                })}
            </li>
      </div>
    )
}


export default Profile