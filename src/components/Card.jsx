import React from 'react'
import Period from "../images/icon-ellipsis.svg"

const Card = ({ activity, currentHours, scope, previousHours, background, image }) => {
    const backgroundName = ["light-orange", "soft-blue", "light-red", "lime-green", "violet", "soft-yellow"]

    return (
        <div className={"rounded-2xl h-full relative overflow-hidden flex flex-col justify-end w-[15rem]"} id={backgroundName[background]} >
            {/* <div className="h-1/5 w-full rounded-t-lg" id={backgroundName[background]} /> */}
            <img 
                src={image} 
                alt={`${activity} image`}
                className="absolute -top-[0.5rem] right-3 z-0 w-16 h-16" />
            <div className="h-4/5 flex flex-col justify-between rounded-2xl card-bg p-6 z-20 cursor-pointer">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-white font-semibold">
                        {activity}
                    </h1>
                    <div className="inline-block">
                        <img
                            src={Period}
                            className="cursor-pointer" />
                    </div>
                </div>
                <div>
                    <p className="text-white text-5xl font-light">
                        {currentHours}hrs
                    </p>
                </div>
                <div>
                    <p className="purple">
                        Last {scope} - {previousHours}hrs
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
