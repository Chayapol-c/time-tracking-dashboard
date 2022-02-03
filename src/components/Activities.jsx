import { useContext } from "react"
import data from "../data.json"
import WorkImg from "../images/icon-work.svg"
import PlayImg from "../images/icon-play.svg"
import StudyImg from "../images/icon-study.svg"
import ExerciseImg from "../images/icon-exercise.svg"
import SocialImg from "../images/icon-social.svg"
import SelfCareImg from "../images/icon-self-care.svg"
import { TimeFrameContext } from "../context/TimeFrameContext"
import Card from "./Card"

const Activities = () => {
    const { timeFrame } = useContext(TimeFrameContext)
    const cardImg = [WorkImg, PlayImg, StudyImg, ExerciseImg, SocialImg, SelfCareImg]

    return (
        <>
            {data.map((e, i) => {
                let currentHours = e.timeframes.daily.current
                let previousHours = e.timeframes.daily.previous
                let previousTimeFrame = "Day"
                switch (timeFrame.toLowerCase()) {
                    case "daily":
                        currentHours = e.timeframes.daily.current
                        previousHours = e.timeframes.daily.previous
                        previousTimeFrame = "Day"
                        break
                    case "weekly":
                        currentHours = e.timeframes.weekly.current
                        previousHours = e.timeframes.weekly.previous
                        previousTimeFrame = "Week"
                        break
                    case "monthly":
                        currentHours = e.timeframes.monthly.current
                        previousHours = e.timeframes.monthly.previous
                        previousTimeFrame = "Month"
                        break
                    default:
                        currentHours = e.timeframes.daily.current
                        previousHours = e.timeframes.daily.previous
                        previousTimeFrame = "Day"
                }
                return (
                    <div key={i}>
                        <Card
                            activity={e.title}
                            currentHours={currentHours}
                            previousHours={previousHours}
                            scope={previousTimeFrame}
                            background={i}
                            image={cardImg[i]} />
                    </div>
                )
            })}
        </>
    )
}

export default Activities